import VideoPlayer from '../VideoPlayer';

export default function Ch11Message() {
  return (
    <section className="scene s-11" id="ch11" data-label="A surprise">
      <div className="stage">
        <div className="c11">
          <div className="eyebrow" data-r>Chapter 11 · A message from everyone</div>
          <p className="l1" data-split="w" data-r>You thought this was just a little birthday website?</p>
          <p className="l2" data-split="w" data-r>Well, we have a surprise for you.</p>
          <p className="l3" data-r>A little love, from everyone who loves you.</p>
          <VideoPlayer />
          <div className="duck"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A04E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>The music fades out when you press play, and comes back softly after.</div>
        </div>
      </div>
    </section>
  );
}
