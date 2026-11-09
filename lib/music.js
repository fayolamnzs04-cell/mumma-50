// Background music.
// Plays public/assets/<SITE.music> (loops). If that file is missing or can't play,
// it falls back to a gentle generated piano so the site is never silent.
// Moods: 'normal', 'soft' (the letter + final screen), 'bright' (the 50 celebration).
// duck(0) fades the music out for the family video; duck(1) brings it back.
import { SITE, asset } from '../config/site';

const CHORDS = [
  [48, 55, 64, 71, 76], [45, 52, 60, 67, 72], [41, 48, 57, 64, 69], [43, 50, 59, 65, 71],
  [48, 55, 64, 67, 72], [45, 52, 60, 64, 69], [41, 48, 57, 60, 65], [43, 50, 55, 62, 67],
];

const music = {
  ctx: null, master: null, bus: null, audio: null,
  on: false, vol: 0.7, mode: 'normal', duckLvl: 1,
  useSynth: false, timer: null, step: 0, next: 0,
  listeners: new Set(),

  subscribe(fn) { this.listeners.add(fn); return () => this.listeners.delete(fn); },
  emit() { this.listeners.forEach((fn) => fn(this)); },

  init() {
    const AC = typeof window !== 'undefined' && (window.AudioContext || window.webkitAudioContext);
    if (!AC) return false;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0;
    this.master.connect(this.ctx.destination);

    // generated piano: soft low-pass + a little echo
    const lp = this.ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 3200;
    const delay = this.ctx.createDelay(); delay.delayTime.value = 0.33;
    const fb = this.ctx.createGain(); fb.gain.value = 0.28;
    const wet = this.ctx.createGain(); wet.gain.value = 0.35;
    this.bus = this.ctx.createGain();
    this.bus.connect(lp); lp.connect(this.master); lp.connect(delay);
    delay.connect(fb); fb.connect(delay); delay.connect(wet); wet.connect(this.master);

    // real soundtrack
    this.audio = new Audio(asset(SITE.music));
    this.audio.loop = true;
    this.audio.preload = 'auto';
    this.audio.addEventListener('error', () => this.fallback());
    try { this.ctx.createMediaElementSource(this.audio).connect(this.master); } catch (e) { /* ignore */ }
    return true;
  },

  fallback() {
    if (this.useSynth) return;
    this.useSynth = true;
    if (this.on) this.startSynth();
  },

  note(midi, t, vel, len) {
    const c = this.ctx; const f = 440 * Math.pow(2, (midi - 69) / 12);
    const g = c.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vel, t + 0.012);
    g.gain.exponentialRampToValueAtTime(vel * 0.35, t + 0.5);
    g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    const o1 = c.createOscillator(); o1.type = 'triangle'; o1.frequency.value = f;
    const o2 = c.createOscillator(); o2.type = 'sine'; o2.frequency.value = f * 2;
    const g2 = c.createGain(); g2.gain.value = 0.25;
    o1.connect(g); o2.connect(g2); g2.connect(g); g.connect(this.bus);
    o1.start(t); o2.start(t); o1.stop(t + len + 0.1); o2.stop(t + len + 0.1);
  },

  tick() {
    const c = this.ctx;
    const beat = this.mode === 'bright' ? 0.3 : this.mode === 'soft' ? 0.52 : 0.42;
    while (this.next < c.currentTime + 0.25) {
      const ch = CHORDS[Math.floor(this.step / 8) % CHORDS.length];
      const pos = this.step % 8; const pat = [0, 2, 3, 4, 3, 2, 1, 3];
      const soft = this.mode === 'soft';
      const v = soft ? 0.07 : this.mode === 'bright' ? 0.12 : 0.09;
      if (pos === 0) { this.note(ch[0] - 12, this.next, v * 1.2, 3.2); if (!soft) this.note(ch[1] - 12, this.next, v * 0.7, 3); }
      this.note(ch[pat[pos]], this.next, v * (pos === 0 ? 1.1 : 0.85), soft ? 2.6 : 1.8);
      if (this.mode === 'bright' && pos % 2 === 0) this.note(ch[pat[pos]] + 12, this.next + beat / 2, v * 0.6, 1.2);
      this.next += beat; this.step += 1;
    }
  },

  startSynth() {
    if (this.timer) return;
    this.next = this.ctx.currentTime + 0.1;
    this.timer = setInterval(() => this.tick(), 90);
  },

  start() {
    if (!this.ctx && !this.init()) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();
    if (this.on) return;
    this.on = true;
    if (this.useSynth) this.startSynth();
    else this.audio.play().catch(() => this.fallback());
    this.apply(2.5);
    this.emit();
  },

  stop() {
    if (!this.on) return;
    this.on = false;
    this.apply(0.8);
    setTimeout(() => {
      if (this.on) return;
      if (this.timer) { clearInterval(this.timer); this.timer = null; }
      if (this.audio) this.audio.pause();
    }, 900);
    this.emit();
  },

  toggle() { return this.on ? this.stop() : this.start(); },

  setVolume(v) { this.vol = v; this.apply(0.2); this.emit(); },

  apply(seconds) {
    if (!this.master) return;
    const now = this.ctx.currentTime;
    const target = this.on ? this.vol * this.duckLvl * (this.mode === 'soft' ? 0.75 : 1) : 0;
    this.master.gain.cancelScheduledValues(now);
    this.master.gain.setValueAtTime(this.master.gain.value, now);
    this.master.gain.linearRampToValueAtTime(target + 0.0001, now + seconds);
  },

  setMode(m) { if (this.mode === m) return; this.mode = m; this.apply(2); },

  duck(level) { this.duckLvl = level; this.apply(1.6); },
};

export default music;
