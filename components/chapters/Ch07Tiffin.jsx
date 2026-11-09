

export default function Ch07Tiffin() {
  return (
    <section className="scene" id="ch07" data-label="The tiffin">
      <div className="stage s-07">
        <div className="inner" style={{paddingBottom:"0"}}>
          <div className="g07">
            <div className="c7-text">
              <div className="eyebrow" data-r>Chapter 07</div>
              <h2 data-r>The little things that are <span className="ital" style={{color:"var(--burg)"}}>actually everything</span></h2>
              <p data-r>Every single morning, Mumma wakes up and packs the best tiffins for both of us. Through school, through college, and now office. Our friends look forward to them almost as much as we do.</p>
              <p className="q" data-r>"From school to college, from college to office, you've been packing more than just food."</p>
            </div>
            <div className="boxwrap" data-r>
              <svg viewBox="0 0 760 640" aria-hidden="true">
                <ellipse cx="380" cy="600" rx="320" ry="22" fill="rgba(74,15,30,.18)" />
                <g className="lid"><g transform="translate(110 40) skewX(-6)">
                  <rect x="0" y="0" width="540" height="200" rx="34" fill="#C9D3D6" stroke="#8A9599" strokeWidth="4" />
                  <rect x="24" y="22" width="492" height="156" rx="24" fill="#E4EBED" />
                  <path d="M90 100 q30 -30 60 0 q30 30 60 0" fill="none" stroke="#B3BEC2" strokeWidth="4" />
                  <rect x="200" y="196" width="140" height="18" rx="9" fill="#8A9599" />
                </g></g>
                <g transform="translate(110 260)">
                  <rect x="0" y="0" width="540" height="320" rx="34" fill="#C9D3D6" stroke="#8A9599" strokeWidth="4" />
                  <rect x="20" y="20" width="250" height="280" rx="22" fill="#FBF3E6" />
                  <g className="food" fill="#FFFFFF" stroke="#E3CFB0" strokeWidth="1.5"><ellipse cx="80" cy="80" rx="10" ry="5" /><ellipse cx="110" cy="70" rx="10" ry="5" /><ellipse cx="140" cy="90" rx="10" ry="5" /><ellipse cx="100" cy="110" rx="10" ry="5" /><ellipse cx="170" cy="70" rx="10" ry="5" /><ellipse cx="200" cy="100" rx="10" ry="5" /><ellipse cx="130" cy="130" rx="10" ry="5" /><ellipse cx="70" cy="140" rx="10" ry="5" /><ellipse cx="180" cy="140" rx="10" ry="5" /><ellipse cx="220" cy="150" rx="10" ry="5" /></g>
                  <g className="food"><circle cx="145" cy="225" r="58" fill="#F07A3A" /><circle cx="145" cy="225" r="44" fill="#E86A2C" /><circle cx="128" cy="210" r="8" fill="#F6D776" /><circle cx="160" cy="236" r="7" fill="#F6D776" /><circle cx="150" cy="205" r="5" fill="#FBF3E6" /></g>
                  <rect x="290" y="20" width="230" height="130" rx="22" fill="#FBF3E6" />
                  <g className="food"><circle cx="360" cy="85" r="46" fill="#E9B866" /><circle cx="360" cy="85" r="46" fill="none" stroke="#C9893A" strokeWidth="3" strokeDasharray="3 6" /></g>
                  <g className="food"><circle cx="430" cy="90" r="46" fill="#F0C77A" /><circle cx="430" cy="90" r="46" fill="none" stroke="#C9893A" strokeWidth="3" strokeDasharray="3 6" /></g>
                  <rect x="290" y="170" width="230" height="130" rx="22" fill="#FBF3E6" />
                  <g className="food"><circle cx="340" cy="235" r="22" fill="#EE6F73" /><circle cx="380" cy="215" r="18" fill="#F6D776" /><circle cx="395" cy="255" r="20" fill="#EE6F73" /><circle cx="440" cy="225" r="22" fill="#F07A3A" /><circle cx="475" cy="260" r="16" fill="#F6D776" /><circle cx="470" cy="205" r="14" fill="#6B1A2B" /></g>
                </g>
                <g className="hearts">
                  <path className="ht" transform="translate(300 200) scale(1.8)" d="M12 21 C 4 15, 0 11, 0 6 A 6 6 0 0 1 12 4 A 6 6 0 0 1 24 6 C 24 11, 20 15, 12 21 Z" fill="#EE6F73" />
                  <path className="ht" transform="translate(420 170) scale(1.2)" d="M12 21 C 4 15, 0 11, 0 6 A 6 6 0 0 1 12 4 A 6 6 0 0 1 24 6 C 24 11, 20 15, 12 21 Z" fill="#6B1A2B" />
                  <path className="ht" transform="translate(520 210) scale(1.5)" d="M12 21 C 4 15, 0 11, 0 6 A 6 6 0 0 1 12 4 A 6 6 0 0 1 24 6 C 24 11, 20 15, 12 21 Z" fill="#EE6F73" />
                  <path className="ht" transform="translate(240 230) scale(1)" d="M12 21 C 4 15, 0 11, 0 6 A 6 6 0 0 1 12 4 A 6 6 0 0 1 24 6 C 24 11, 20 15, 12 21 Z" fill="#F07A3A" />
                </g>
              </svg>
              <div className="sticky" style={{left:"-4%",top:"46%",background:"#FFF6C9",transform:"rotate(-8deg)"}}>Eat everything!</div>
              <div className="sticky" style={{right:"-2%",top:"22%",background:"#FFFFFF",transform:"rotate(7deg)"}}>Love, Mumma ♡</div>
            </div>
          </div>
        </div>
        <div className="path">
          <span className="pill">School</span><span className="dots"></span><span className="pill">College</span><span className="dots"></span><span className="pill">Office</span><span className="dots"></span><span className="pill next">…and Shaun's turn next</span>
        </div>
        <p className="c7-close" data-r>You've been packing love into every little thing.</p>
        <div className="veil" style={{"--to":"#F7B3A6"}}></div>
      </div>
    </section>
  );
}
