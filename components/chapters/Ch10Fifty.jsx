

export default function Ch10Fifty() {
  return (
    <section className="scene" id="ch10" data-label="Fifty!">
      <div className="stage s-10">
        <div className="confetti" aria-hidden="true"></div>
        <div className="inner g10">
          <div className="c10-l">
            <div className="eyebrow" style={{alignSelf:"flex-start"}}>Chapter 10</div>
            <div className="big50" aria-label="50">50</div>
            <div className="hand" data-r>↑ each tile becomes a photo from every chapter</div>
          </div>
          <div className="c10-r">
            <h2 data-r>Fifty looks beautiful on you.</h2>
            <div className="ln big" data-r>50 years.</div>
            <div className="ln" data-r><b className="count" data-to="50">50</b> years of being someone's daughter.</div>
            <div className="ln" data-r><b className="count" data-to="50">50</b> years of being someone's sister.</div>
            <div className="ln" data-r><b className="count" data-to="24">24</b> years of being a wife.</div>
            <div className="ln" data-r><b className="count" data-to="22">22</b> years of being my Mumma.</div>
            <div className="ln" data-r><b className="count" data-to="14">14</b> years of being Shaun's Mumma.</div>
            <div className="ln ital" data-r>And a lifetime of being loved by everyone lucky enough to know you.</div>
            <div className="choose" data-r><p className="hand">If we could choose our Mumma all over again, we'd choose you. <em>Every single time.</em></p></div>
          </div>
        </div>
        <div className="veil" style={{"--to":"#1E070D"}}></div>
      </div>
    </section>
  );
}
