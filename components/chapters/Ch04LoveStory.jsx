import Photo from '../Photo';

export default function Ch04LoveStory() {
  return (
    <section className="scene" id="ch04" data-label="2002 · Love story">
      <div className="stage s-04">
        <div className="y2002" aria-hidden="true"><svg viewBox="0 0 900 300"><text id="y2002" x="50%" y="88%" textAnchor="middle">2002</text></svg></div>
        <div className="inner g04">
          <div className="c4-left">
            <div className="eyebrow" data-r>Chapter 04 · A love story</div>
            <h2 data-r>2002.<br /><span className="ital">A new chapter.<br />A beautiful beginning.</span></h2>
            <div className="bride" data-r>Can we just take a moment?<br />Look at that bride!</div>
            <p data-r>We wish we could have seen you that day, walked around with you, watched you smile and told you just how stunning you looked.</p>
          </div>
          <div className="arch" data-r><Photo file="photos/04-love-story/wedding.jpg" label="Key photo · the wedding" /></div>
          <div style={{display:"flex",flexDirection:"column",gap:"4vh",minWidth:"0"}}>
            <div className="filmwin"><div className="strip">
              <figure className="pol" style={{"--r":"4deg"}} data-r><Photo file="photos/04-love-story/mumma-dad-1.jpg" label="Mumma &amp; Dad 1" /><figcaption>adventures</figcaption></figure>
              <figure className="pol" style={{"--r":"-5deg"}} data-r><Photo file="photos/04-love-story/mumma-dad-2.jpg" label="Mumma &amp; Dad 2" /><figcaption>travels</figcaption></figure>
              <figure className="pol" style={{"--r":"-2deg"}} data-r><Photo file="photos/04-love-story/mumma-dad-3.jpg" label="Mumma &amp; Dad 3" /><figcaption>just the two of them</figcaption></figure>
              <figure className="pol" style={{"--r":"6deg"}} data-r><Photo file="photos/04-love-story/mumma-dad-4.jpg" label="Mumma &amp; Dad 4" /><figcaption>always</figcaption></figure>
            </div></div>
            <div className="namecard" data-r>
              <div className="eyebrow" style={{color:"var(--gold)"}}>Before 2002 → After 2002</div>
              <div className="row"><span>Sabitha Veena Menezes</span><span className="eq2">=</span><span className="same" id="sameName">Sabitha Veena Menezes</span></div>
              <p>Some things change when you begin a new chapter. But you never had to lose a part of yourself.</p>
            </div>
          </div>
        </div>
        <div className="veil" style={{"--to":"#F6D776"}}></div>
      </div>
    </section>
  );
}
