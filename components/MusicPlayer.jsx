'use client';
// The persistent music pill: play/pause + volume. Music starts from the opening button.
import { useEffect, useState } from 'react';
import music from '../lib/music';

export default function MusicPlayer() {
  const [on, setOn] = useState(false);
  const [vol, setVol] = useState(70);

  useEffect(() => music.subscribe((m) => { setOn(m.on); setVol(Math.round(m.vol * 100)); }), []);

  return (
    <div className={'music' + (on ? ' playing' : '')}>
      <button onClick={() => music.toggle()} aria-label={on ? 'Pause music' : 'Play music'} aria-pressed={on}>
        {on ? (
          <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="4" width="4" height="16" fill="#FBF3E6" /><rect x="14" y="4" width="4" height="16" fill="#FBF3E6" /></svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="#FBF3E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
        )}
      </button>
      <span className="eq" aria-hidden="true"><i /><i /><i /></span>
      <span className="lbl">{on ? 'Music on' : 'Music off'}</span>
      <label htmlFor="vol" className="sr-only">Volume</label>
      <input id="vol" type="range" min="0" max="100" value={vol} onChange={(e) => music.setVolume(e.target.value / 100)} />
    </div>
  );
}
