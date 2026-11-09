

export default function Ch05SchoolRun() {
  return (
    <section className="scene s-ride" id="ride" data-label="School runs">
      <div className="stage">
        <div className="sun" aria-hidden="true"></div>
        <div className="ride-track" aria-hidden="true">
          <svg viewBox="0 0 3000 600" preserveAspectRatio="xMinYMax slice">
            <path d="M0 260 Q 300 180 620 240 T 1240 220 T 1860 240 T 2480 210 T 3000 230 L 3000 600 L 0 600 Z" fill="#F9C6A5" />
            <g fill="#EE6F73" opacity=".5"><circle cx="400" cy="250" r="40" /><circle cx="1100" cy="230" r="55" /><circle cx="1700" cy="250" r="45" /><circle cx="2300" cy="230" r="50" /></g>
            <rect x="0" y="470" width="3000" height="130" fill="#6B4A44" />
            <g fill="#F6E7CF"><rect x="40" y="530" width="80" height="8" rx="4" /><rect x="240" y="530" width="80" height="8" rx="4" /><rect x="440" y="530" width="80" height="8" rx="4" /><rect x="640" y="530" width="80" height="8" rx="4" /><rect x="840" y="530" width="80" height="8" rx="4" /><rect x="1040" y="530" width="80" height="8" rx="4" /><rect x="1240" y="530" width="80" height="8" rx="4" /><rect x="1440" y="530" width="80" height="8" rx="4" /><rect x="1640" y="530" width="80" height="8" rx="4" /><rect x="1840" y="530" width="80" height="8" rx="4" /><rect x="2040" y="530" width="80" height="8" rx="4" /><rect x="2240" y="530" width="80" height="8" rx="4" /><rect x="2440" y="530" width="80" height="8" rx="4" /><rect x="2640" y="530" width="80" height="8" rx="4" /><rect x="2840" y="530" width="80" height="8" rx="4" /></g>
            <g className="far"><g transform="translate(900 300)"><rect x="0" y="0" width="16" height="170" fill="#6B1A2B" /><circle cx="8" cy="-10" r="44" fill="#C9A04E" opacity=".8" /></g><g transform="translate(1600 290)"><rect x="0" y="0" width="16" height="180" fill="#6B1A2B" /><circle cx="8" cy="-10" r="50" fill="#EE6F73" opacity=".7" /></g></g>
            <g className="school" transform="translate(2580 230)">
              <rect x="0" y="40" width="300" height="200" fill="#EE6F73" />
              <polygon points="-20,44 150,-30 320,44" fill="#6B1A2B" />
              <rect x="120" y="140" width="60" height="100" fill="#6B1A2B" />
              <rect x="26" y="90" width="58" height="46" fill="#FBF3E6" /><rect x="216" y="90" width="58" height="46" fill="#FBF3E6" />
              <g className="bell"><circle cx="150" cy="14" r="16" fill="#FBF3E6" /><line x1="150" y1="14" x2="150" y2="4" stroke="#6B1A2B" strokeWidth="2" /><line x1="150" y1="14" x2="157" y2="17" stroke="#6B1A2B" strokeWidth="2" /></g>
              <text x="150" y="74" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="16" fontWeight="700" fill="#FBF3E6" letterSpacing="4">SCHOOL</text>
            </g>
          </svg>
        </div>
        <svg className="scooter" viewBox="-180 -80 380 250" aria-hidden="true">
          <g className="wheel"><circle cx="-40" cy="134" r="30" fill="#3A0E18" /><circle cx="-40" cy="134" r="12" fill="#C9A04E" /><rect x="-42" y="106" width="4" height="56" fill="#C9A04E" /></g>
          <g className="wheel"><circle cx="150" cy="134" r="30" fill="#3A0E18" /><circle cx="150" cy="134" r="12" fill="#C9A04E" /><rect x="148" y="106" width="4" height="56" fill="#C9A04E" /></g>
          <g className="ride-body">
            <path d="M-80 120 Q -80 70 -20 70 L 90 70 Q 110 70 120 100 L 180 120 L 180 134 L -80 134 Z" fill="#F07A3A" />
            <path d="M120 100 L 160 10" stroke="#3A0E18" strokeWidth="7" strokeLinecap="round" />
            <path d="M146 10 L 176 10" stroke="#3A0E18" strokeWidth="7" strokeLinecap="round" />
            <circle cx="178" cy="40" r="10" fill="#F6D776" />
            <rect x="-50" y="60" width="110" height="14" rx="7" fill="#6B1A2B" />
            <path d="M10 60 Q 30 0 60 -10 L 90 -6 Q 100 30 70 60 Z" fill="#EE6F73" />
            <path d="M70 -2 Q 120 10 150 12" stroke="#C98B62" strokeWidth="11" strokeLinecap="round" fill="none" />
            <circle cx="76" cy="-34" r="24" fill="#C98B62" />
            <path d="M52 -44 Q 60 -74 92 -70 Q 108 -64 104 -42 Q 90 -60 70 -58 Z" fill="#F6D776" />
            <path d="M54 -20 Q 30 -10 20 10" stroke="#3A0E18" strokeWidth="10" strokeLinecap="round" fill="none" />
            <circle cx="86" cy="-34" r="2.5" fill="#3A0E18" /><path d="M84 -22 Q 90 -18 96 -22" stroke="#3A0E18" strokeWidth="2" fill="none" strokeLinecap="round" />
            <rect x="-60" y="10" width="34" height="44" rx="8" fill="#6B1A2B" />
            <path d="M-40 60 Q -36 20 -16 14 L 10 18 Q 12 44 0 60 Z" fill="#F6D776" />
            <path d="M-6 20 Q 20 26 30 34" stroke="#C98B62" strokeWidth="8" strokeLinecap="round" fill="none" />
            <circle cx="-12" cy="-6" r="18" fill="#C98B62" />
            <path d="M-30 -8 Q -28 -30 -10 -28 Q 8 -26 6 -6 Q -2 -18 -12 -18 Q -22 -18 -30 -8 Z" fill="#3A0E18" />
            <circle cx="-30" cy="-6" r="7" fill="#3A0E18" />
            <circle cx="-4" cy="-6" r="2.2" fill="#3A0E18" /><path d="M-6 4 Q 0 8 4 4" stroke="#3A0E18" strokeWidth="2" fill="none" strokeLinecap="round" />
          </g>
        </svg>
        <svg className="flyer" style={{left:"24vw",bottom:"34vh",width:"64px"}} viewBox="0 0 70 52" aria-hidden="true"><rect width="70" height="52" rx="3" fill="#6B1A2B" /><rect x="6" y="6" width="58" height="40" fill="#F6D776" /><rect x="12" y="14" width="40" height="5" fill="#6B1A2B" /></svg>
        <svg className="flyer" style={{left:"22vw",bottom:"30vh",width:"58px"}} viewBox="0 0 64 48" aria-hidden="true"><rect width="64" height="48" rx="3" fill="#EE6F73" /><rect x="6" y="6" width="52" height="36" fill="#FBF3E6" /><path d="M10 14 h36 M10 22 h28 M10 30 h32" stroke="#C9A04E" strokeWidth="2" /></svg>
        <svg className="flyer" style={{left:"26vw",bottom:"32vh",width:"90px"}} viewBox="0 0 100 12" aria-hidden="true"><rect x="8" width="80" height="10" fill="#F6D776" /><polygon points="88,0 100,5 88,10" fill="#F3D2B0" /><rect width="8" height="10" fill="#EE6F73" /></svg>
        <div className="ride-text">
          <div className="eyebrow">The school runs</div>
          <p className="l1 rl" data-r>The school runs. The homework. The assignments. The book covers.</p>
          <p className="l2 rl" data-r>Those weren't just everyday things. Those were all the ways you loved me.</p>
        </div>
        <div className="veil" style={{"--to":"#F6D776"}}></div>
      </div>
    </section>
  );
}
