import Photo from '../Photo';

export default function Ch09Letter() {
  return (
    <section className="scene" id="ch09" data-label="Dear Mumma">
      <div className="stage s-09">
        <div className="inner g09">
          <div className="lpols">
            <figure className="pol blank" style={{"--r":"-6deg"}} data-r><Photo file="photos/09-letter/family-1.jpg" label="Family 1" /></figure>
            <figure className="pol blank" style={{"--r":"4deg"}} data-r><Photo file="photos/09-letter/family-2.jpg" label="Family 2" /></figure>
            <figure className="pol blank" style={{"--r":"-3deg"}} data-r><Photo file="photos/09-letter/family-3.jpg" label="Family 3" /></figure>
          </div>
          <article className="paper" data-r>
            <div className="eyebrow" style={{marginBottom:"1vh"}}>Chapter 09 · The woman I hope to become</div>
            <div className="dear">Dear Mumma,</div>
            <div className="letter">
              <p>I don't think you'll ever fully understand how much you mean to us.</p>
              <p>You've spent so much of your life making sure that everyone around you is happy, comfortable and loved.</p>
              <p>You have always given more than you've ever asked for.</p>
              <p>You've put us first, even when it meant putting yourself last.</p>
              <p>You've celebrated our smallest achievements, stood by us through every difficult moment and believed in us even when we weren't sure of ourselves.</p>
              <p>And I hope you know that we see it all.</p>
              <p><i>We see the sacrifices.<br />We see the effort.<br />We see the love behind every little thing you do.</i></p>
              <p>And we are so, so grateful.</p>
              <p className="em">Mumma, I hope I can become even 1% of the woman you are.</p>
              <p>I hope I can make you proud.</p>
              <p>Everything you may have once dreamed of doing, everything you wanted to experience, every happiness you deserve — I hope I get to give you some of that.</p>
              <p>Because if there's anyone who deserves the world, it's you.</p>
              <p>I don't just want to make you proud. I want to make you feel as loved, celebrated and special as you have made everyone else feel all these years.</p>
              <p>And Mumma, Shaun and I promise we'll always be your little ones, no matter how old we get or how tall Shaun becomes!</p>
              <p>We hope the years ahead bring you everything beautiful. More adventures. More laughter. More holidays. More reasons to smile. More moments where you get to put yourself first.</p>
              <p>You have spent 50 years being there for everyone.</p>
              <p className="em">Now it's our turn to be there for you.</p>
              <p className="sign">— Fayola &amp; Shaun</p>
            </div>
          </article>
          <div className="c9-right">
            <div className="mosaic" id="mosaic"><div className="mlabel">Photo tiles drift together into<br /><b>photos/09-letter/mumma-portrait.jpg</b></div></div>
            <p className="hand" data-r>every memory, coming together into you</p>
          </div>
        </div>
        <div className="glow"></div>
        <div className="veil" style={{"--to":"#F07A3A"}}></div>
      </div>
    </section>
  );
}
