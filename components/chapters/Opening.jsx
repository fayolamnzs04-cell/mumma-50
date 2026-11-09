'use client';
import music from '../../lib/music';
import { go } from '../../lib/experience';

export default function Opening() {
  const begin = () => { music.start(); go('#ch01'); };
  return (
    <section className="scene" id="intro" data-label="Opening">
      <div className="stage s-intro" id="introStage">
        <div className="fifty-bg" aria-hidden="true"><svg viewBox="0 0 640 420"><text id="fiftyStroke" x="50%" y="88%" textAnchor="middle">50</text></svg></div>
        <div className="petals" aria-hidden="true"></div>
        <svg className="flower" style={{left:"9%",top:"16%",width:"110px"}} viewBox="0 0 100 100" aria-hidden="true"><g fill="#EE6F73"><ellipse cx="50" cy="26" rx="13" ry="22" /><ellipse cx="50" cy="26" rx="13" ry="22" transform="rotate(72 50 50)" /><ellipse cx="50" cy="26" rx="13" ry="22" transform="rotate(144 50 50)" /><ellipse cx="50" cy="26" rx="13" ry="22" transform="rotate(216 50 50)" /><ellipse cx="50" cy="26" rx="13" ry="22" transform="rotate(288 50 50)" /></g><circle cx="50" cy="50" r="10" fill="#F6D776" /></svg>
        <svg className="flower" style={{right:"12%",top:"20%",width:"80px",animationDelay:"-3s"}} viewBox="0 0 100 100" aria-hidden="true"><g fill="#FBF3E6"><ellipse cx="50" cy="26" rx="13" ry="22" /><ellipse cx="50" cy="26" rx="13" ry="22" transform="rotate(72 50 50)" /><ellipse cx="50" cy="26" rx="13" ry="22" transform="rotate(144 50 50)" /><ellipse cx="50" cy="26" rx="13" ry="22" transform="rotate(216 50 50)" /><ellipse cx="50" cy="26" rx="13" ry="22" transform="rotate(288 50 50)" /></g><circle cx="50" cy="50" r="10" fill="#F07A3A" /></svg>
        <svg className="flower" style={{right:"8%",bottom:"14%",width:"130px",animationDelay:"-5s"}} viewBox="0 0 100 100" aria-hidden="true"><g fill="#F6D776"><ellipse cx="50" cy="26" rx="13" ry="22" /><ellipse cx="50" cy="26" rx="13" ry="22" transform="rotate(72 50 50)" /><ellipse cx="50" cy="26" rx="13" ry="22" transform="rotate(144 50 50)" /><ellipse cx="50" cy="26" rx="13" ry="22" transform="rotate(216 50 50)" /><ellipse cx="50" cy="26" rx="13" ry="22" transform="rotate(288 50 50)" /></g><circle cx="50" cy="50" r="10" fill="#6B1A2B" /></svg>
        <svg className="flower" style={{left:"13%",bottom:"18%",width:"70px",animationDelay:"-7s"}} viewBox="0 0 100 100" aria-hidden="true"><g fill="#F07A3A"><ellipse cx="50" cy="26" rx="13" ry="22" /><ellipse cx="50" cy="26" rx="13" ry="22" transform="rotate(72 50 50)" /><ellipse cx="50" cy="26" rx="13" ry="22" transform="rotate(144 50 50)" /><ellipse cx="50" cy="26" rx="13" ry="22" transform="rotate(216 50 50)" /><ellipse cx="50" cy="26" rx="13" ry="22" transform="rotate(288 50 50)" /></g><circle cx="50" cy="50" r="10" fill="#FBF3E6" /></svg>
        <div className="inner" id="introInner">
          <div className="intro-meet" data-split="w">There's someone we'd like you to meet…</div>
          <h1 className="intro-name" data-split="c">SABITHA VEENA<br />MENEZES</h1>
          <div className="intro-tag">50 years of making the world a little more beautiful.</div>
          <p className="intro-sub">A lifetime of love. A heart that gives endlessly.<br />A woman who makes everything brighter.</p>
          <button className="cta" id="begin" onClick={begin}><span className="dot"><svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4l13 8-13 8z" fill="#6B1A2B" /></svg></span>Let's take a walk down memory lane</button>
        </div>
        <div className="intro-date">10 · 11 · 2026</div>
        <div className="intro-hint">SCROLL OR TAP TO BEGIN</div>
        <div className="veil" style={{"--to":"#FBF3E6"}}></div>
      </div>
    </section>
  );
}
