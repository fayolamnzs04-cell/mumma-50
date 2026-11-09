'use client';
// Scroll progress: a coral thread with one dot per chapter (desktop) and a thin top bar (phones).
// The fill and the active dot are driven by ScrollTrigger in lib/experience.js.
import { CHAPTERS } from '../lib/chapters';
import { go } from '../lib/experience';

export default function ProgressRail() {
  return (
    <>
      <div className="topbar" aria-hidden="true"><i id="topfill" /></div>
      <nav className="rail" aria-label="Chapters">
        <div className="track"><div className="fill" id="railfill" /></div>
        {CHAPTERS.map((c) => (
          <a key={c.id} href={'#' + c.id} aria-label={c.label} onClick={(e) => { e.preventDefault(); go('#' + c.id); }}>
            <span>{c.label}</span>
          </a>
        ))}
      </nav>
    </>
  );
}
