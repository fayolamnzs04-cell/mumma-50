import Photo from '../Photo';

export default function Ch05AndThenMe() {
  return (
    <section className="scene" id="ch05b" data-label="And then, me">
      <div className="stage s-05b">
        <div className="g05b">
          <div>
            <div className="eyebrow" data-r>Chapter 05 · 2004</div>
            <h2 data-r>And then,<br /><span className="ital">there was me.</span></h2>
            <p data-r>Mumma was around 28 when I arrived, and she has been the most beautiful mother to me ever since. She is my safe space. I can tell her anything. She will always think the best of me, and always be on my side.</p>
            <div className="sig" data-r>— Fayola</div>
          </div>
          <div className="fay-pols">
            <figure className="pol" style={{"--r":"-4deg"}} data-r><Photo file="photos/05-fayola/fayola-mumma-1.jpg" label="Fayola &amp; Mumma 1" /><figcaption>my safe space</figcaption></figure>
            <figure className="pol" style={{"--r":"3deg"}} data-r><Photo file="photos/05-fayola/fayola-mumma-2.jpg" label="Fayola &amp; Mumma 2" /><figcaption>always on my side</figcaption></figure>
            <figure className="pol" style={{"--r":"-2deg"}} data-r><Photo file="photos/05-fayola/fayola-mumma-3.jpg" label="Fayola &amp; Mumma 3" /><figcaption>us ♡</figcaption></figure>
          </div>
        </div>
      </div>
    </section>
  );
}
