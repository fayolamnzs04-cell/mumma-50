'use client';
// Chapter 11 video. Never autoplays. Pressing play fades the music out;
// when the video ends the music returns softly and the page glides to the final screen.
// If public/assets/<SITE.video> is missing, an 8-second stand-in runs so the flow can be previewed.
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import music from '../lib/music';
import { go, playFinal } from '../lib/experience';
import { SITE, asset } from '../config/site';

const DEMO_SECONDS = 8;

export default function VideoPlayer() {
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
    setStarted(false);
    music.duck(1);
    music.setMode('soft');
    go('#final');
    setTimeout(playFinal, 900);
  };

  const play = () => {
    music.duck(0);
    setStarted(true);
    if (!missing && video.current) {
      video.current.play().catch(() => setMissing(true));
      return;
    }
    const o = { t: 0 };
    demoTween.current = gsap.to(o, {
      t: 1, duration: DEMO_SECONDS, ease: 'none',
      onUpdate: () => setDemo(o.t),
      onComplete: () => { setDemo(0); finish(); },
    });
  };

  return (
    <div className="player" id="player" data-r>
      {missing ? (
        <div className="ph dark" data-label="Family birthday video" data-file={'public/assets/' + SITE.video} />
      ) : (
        <video
          ref={video}
          src={/^https?:/.test(SITE.video) ? SITE.video : asset(SITE.video)}
          poster={asset(SITE.videoPoster)}
          preload="metadata"
          playsInline
          controls={started}
          onError={() => setMissing(true)}
          onPlay={() => music.duck(0)}
          onEnded={finish}
        />
      )}
      {!started && (
        <button className="big" onClick={play} aria-label="Play the family video">
          <svg width="32" height="32" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4l13 8-13 8z" fill="#6B1A2B" /></svg>
        </button>
      )}
      {missing && started && (
        <>
          <p className="msg">Your family video plays here. Add it as public/assets/{SITE.video}</p>
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
