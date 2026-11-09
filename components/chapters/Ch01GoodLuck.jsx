import Photo from '../Photo';

export default function Ch01GoodLuck() {
  return (
    <section className="scene" id="ch01" data-label="1976 · Good luck">
      <div className="stage s-01">
        <div className="inner g01">
          <div className="c1-text">
            <svg className="fan" viewBox="0 0 420 300" aria-hidden="true">
              <line x1="210" y1="0" x2="210" y2="96" stroke="#6B1A2B" strokeWidth="6" />
              <rect x="196" y="0" width="28" height="12" rx="3" fill="#6B1A2B" />
              <g className="blades">
                <path d="M210 120 C 250 102, 360 94, 400 112 C 406 118, 406 128, 398 132 C 350 144, 250 138, 210 120 Z" fill="#C9A04E" stroke="#6B1A2B" strokeWidth="3" />
                <path d="M210 120 C 250 102, 360 94, 400 112 C 406 118, 406 128, 398 132 C 350 144, 250 138, 210 120 Z" fill="#E2BE6E" stroke="#6B1A2B" strokeWidth="3" transform="rotate(120 210 120)" />
                <path d="M210 120 C 250 102, 360 94, 400 112 C 406 118, 406 128, 398 132 C 350 144, 250 138, 210 120 Z" fill="#D4AE5C" stroke="#6B1A2B" strokeWidth="3" transform="rotate(240 210 120)" />
              </g>
              <ellipse cx="210" cy="120" rx="34" ry="22" fill="#6B1A2B" />
              <ellipse cx="210" cy="114" rx="22" ry="10" fill="#8C2A3C" />
              <circle cx="210" cy="140" r="6" fill="#F6D776" />
              <g fill="#F6D776">
                <path className="spark" d="M60 200 l4 10 10 4 -10 4 -4 10 -4 -10 -10 -4 10 -4z" />
                <path className="spark" d="M370 50 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3z" />
                <path className="spark" d="M340 230 l5 12 12 5 -12 5 -5 12 -5 -12 -12 -5 12 -5z" />
                <path className="spark" d="M90 60 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3z" />
                <path className="spark" d="M260 270 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3z" />
              </g>
            </svg>
            <div className="eyebrow" data-r>Chapter 01 · Mangalore · 10 November 1976</div>
            <div className="year" id="year" data-r>1976</div>
            <h2 data-r>The girl who brought<br /><span className="ital">good luck</span></h2>
            <p data-r>On 10 November 1976, in Mangalore, a chubby, round-faced baby girl arrived, the second of four. The family story goes that <b>the day she was born was the day the family got its very first fan.</b></p>
            <p className="hand" data-r>They always said she brought good luck. We think she still does. She's our good-luck charm.</p>
            <div className="chips" data-r><span>studious</span><span>brilliant</span><span>graceful</span><span>obedient</span><span>loving</span><span>caring</span></div>
          </div>
          <div className="c1-right">
            <figure className="pol c1-photo" style={{"--r":"1.5deg"}} data-r>
              <span className="tape c" style={{left:"18%"}}></span><span className="tape" style={{left:"82%"}}></span>
              <Photo file="photos/01-childhood/siblings-with-grandmother.jpg" label="Key photo · four siblings with their mother" />
              <figcaption className="c1-cap">Four siblings. One family. A lifetime of memories.</figcaption>
            </figure>
            <div className="c1-tree" data-r>
              <div>Big sister<small>the eldest</small></div>
              <div className="me">Sabitha<small>our lucky charm, no. 2</small></div>
              <div>Younger brother<small>no. 3</small></div>
              <div>Youngest brother<small>no. 4</small></div>
            </div>
          </div>
        </div>
        <div className="veil" style={{"--to":"#1E070D"}}></div>
      </div>
    </section>
  );
}
