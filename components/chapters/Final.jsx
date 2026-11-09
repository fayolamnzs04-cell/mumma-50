import Photo from '../Photo';

export default function Final() {
  return (
    <section className="scene" id="final" data-label="Happy birthday">
      <div className="stage s-final">
        <div className="petals" aria-hidden="true"></div>
        <div className="inner">
          <div className="oval fx"><Photo file="photos/final/mumma.jpg" label="Mumma's portrait" /></div>
          <h2 className="fx" data-split="c">HAPPY 50TH BIRTHDAY,<br /><i className="ital">MUMMA.</i></h2>
          <div className="always fx">WE LOVE YOU. ALWAYS.</div>
          <div className="signoff fx">With all our hearts, Fayu, Shonu and Dada <svg className="beat" width="34" height="31" viewBox="0 0 24 22" aria-hidden="true"><path d="M12 21 C 4 15, 0 11, 0 6 A 6 6 0 0 1 12 4 A 6 6 0 0 1 24 6 C 24 11, 20 15, 12 21 Z" fill="#EE6F73" /></svg></div>
        </div>
        <div className="dates">10 · 11 · 1976 — 10 · 11 · 2026</div>
      </div>
    </section>
  );
}
