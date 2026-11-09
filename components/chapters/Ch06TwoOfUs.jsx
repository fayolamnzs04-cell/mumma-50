import Photo from '../Photo';

export default function Ch06TwoOfUs() {
  return (
    <section className="scene s-06a" id="ch06" data-label="2012 · Shaun">
      <div className="stage">
        <div className="g06a">
          <div>
            <div className="eyebrow" data-r>Chapter 06 · 2012</div>
            <h2 data-r>And then<br /><span className="ital">there were two.</span></h2>
            <p data-r>Shaun arrived. I became a big sister, and he got the most wonderful mother. <i>Two children, a million responsibilities, endless little things to remember, and somehow, you always made it work.</i></p>
          </div>
          <div className="shaun-pols">
            <figure className="pol" style={{"--r":"-3deg"}} data-r><Photo file="photos/06-shaun/shaun-mumma-1.jpg" label="Shaun &amp; Mumma 1" /></figure>
            <figure className="pol" style={{"--r":"2deg"}} data-r><Photo file="photos/06-shaun/shaun-mumma-2.jpg" label="Shaun &amp; Mumma 2" /></figure>
            <figure className="pol" style={{"--r":"-1deg"}} data-r><Photo file="photos/06-shaun/shaun-mumma-3.jpg" label="Shaun &amp; Mumma 3" /></figure>
          </div>
        </div>
      </div>
    </section>
  );
}
