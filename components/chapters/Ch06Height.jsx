import Photo from '../Photo';

export default function Ch06Height() {
  return (
    <section className="scene" id="height" data-label="He grew!">
      <div className="stage s-06">
        <div className="inner c6" id="heightInner">
          <h2 data-split="w">We blinked. <i className="ital">And Shaun grew up.</i></h2>
          <div className="hwrap">
            <div className="ruler" aria-hidden="true"></div>
            <div className="frames">
              <div className="mline"><span>Mumma's height</span></div>
              <div className="fr" style={{"--h":"56%"}} data-r><Photo file="photos/06-shaun/height-1.jpg" label="Height 1 · shorter"><b>1</b></Photo><div className="bar"></div><div className="cap">First, he was shorter than you.</div></div>
              <div className="fr" style={{"--h":"68%"}} data-r><Photo file="photos/06-shaun/height-2.jpg" label="Height 2"><b>2</b></Photo><div className="bar"></div><div className="cap">Then a little taller.</div></div>
              <div className="fr" style={{"--h":"78%"}} data-r><Photo file="photos/06-shaun/height-3.jpg" label="Height 3"><b>3</b></Photo><div className="bar"></div><div className="cap">Then a little taller still.</div></div>
              <div className="fr" style={{"--h":"108%"}} data-r><Photo file="photos/06-shaun/height-4.jpg" label="Height 4 · towering!"><b>4</b></Photo><div className="bar"></div><div className="cap">And before we knew it, he was towering over Mumma!</div></div>
            </div>
            <div className="howstamp" data-r><b>HOW DID<br />THAT<br />HAPPEN?</b></div>
          </div>
          <div className="caps" aria-hidden="true">
            <div>First, he was shorter than you.</div><div>Then a little taller.</div><div>Then a little taller still.</div><div>And before we knew it, he was towering over Mumma!</div>
          </div>
          <p className="genes" data-r>But hey, thank you for the height, Mumma. <span className="hand">Clearly, someone passed on the good genes!</span></p>
        </div>
        <div className="veil" style={{"--to":"#F9C6A5"}}></div>
      </div>
    </section>
  );
}
