'use client';
// Chapter 11 video, in a vertical reel-sized (9:16) frame. Never autoplays.
// Pressing play opens the video full screen and fades the music out. When it ends,
// full screen closes, the music returns softly and the page glides to the final screen.
// If public/assets/<SITE.video> is missing, an 8-second stand-in runs so the flow can be previewed.
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import music from '../lib/music';
import { go, playFinal } from '../lib/experience';
import { SITE, asset } from '../config/site';

const DEMO_SECONDS = 8;

function enterFullscreen(el) {
  if (!el) return;
  try {
    if (el.requestFullscreen) el.requestFullscreen().catch(() => {});
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    else if (el.webkitEnterFullscreen) el.webkitEnterFullscreen(); // iPhone
  } catch (e) { /* full screen not allowed: plays in the page instead */ }
}

function exitFullscreen(videoEl) {
  try {
    if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen().catch(() => {});
    else if (document.webkitFullscreenElement && document.webkitExitFullscreen) document.webkitExitFullscreen();
    else if (videoEl && videoEl.webkitDisplayingFullscreen && videoEl.webkitExitFullscreen) videoEl.webkitExitFullscreen();
  } catch (e) { /* ignore */ }
}

export default function VideoPlayer() {
  const frame = useRef(null);
  const video = useRef(null);
  const [missing, setMissing] = useState(false);
  const [started, setStarted] = useState(false);
  const [demo, setDemo] = useState(0); // stand-in progress 0..1
  const demoTween = useRef(null);

  useEffect(() => {
    const v = video.current;
    if (v && (v.error || v.networkState === 3)) setMissing(true);
    return () => demoTween.current && demoTween.current.kill();
  }, []);

  const finish = () => {
    exitFullscreen(video.current);
    setStarted(false);
    music.duck(1);
    music.setMode('soft');
    setTimeout(() => go('#final'), 400);
    setTimeout(playFinal, 1300);
  };

  const play = () => {
    music.duck(0);
    setStarted(true);
    const v = video.current;
    if (!missing && v) {
      enterFullscreen(v);
      v.play().catch(() => setMissing(true));
      return;
    }
    // stand-in when the video file isn't added yet
    enterFullscreen(frame.current);
    const o = { t: 0 };
    demoTween.current = gsap.to(o, {
      t: 1, duration: DEMO_SECONDS, ease: 'none',
      onUpdate: () => setDemo(o.t),
      onComplete: () => { setDemo(0); finish(); },
    });
  };

  return (
    <div className="player" id="player" ref={frame} data-r>
      {missing ? (
        <div className="ph dark" data-label="Family birthday video · 9:16" data-file={'public/assets/' + SITE.video} />
      ) : (
        <video
          ref={video}
          src={(/^https?:/.test(SITE.video) ? SITE.video : asset(SITE.video)) + '#t=0.1'}
          preload="auto"
          controls={started}
          onError={() => setMissing(true)}
          onPlay={() => music.duck(0)}
          onEnded={finish}
        />
      )}
      {!started && (
        <button className="big" onClick={play} aria-label="Play the family video full screen">
          <svg width="32" height="32" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4l13 8-13 8z" fill="#6B1A2B" /></svg>
        </button>
      )}
      {missing && started && (
        <>
          <p className="msg">Your family video plays here, full screen. Add it as public/assets/{SITE.video}</p>
          <div className="ctrl">
            <span className="time">0:0{Math.floor(demo * DEMO_SECONDS)}</span>
            <div className="bar2"><i style={{ transform: `scaleX(${demo})` }} /></div>
            <span className="time">0:0{DEMO_SECONDS}</span>
          </div>
        </>
      )}
    </div>
  );
}
