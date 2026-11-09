

export default function Ch08Favourite() {
  return (
    <section className="scene" id="ch08" data-label="Favourite person">
      <div className="stage s-08">
        <div className="inner c8" style={{paddingTop:"8vh"}}>
          <div className="eyebrow">Chapter 08</div>
          <h2 data-r>Everyone's <span className="ital">favourite person</span></h2>
          <div className="roles"><span>the best Mother</span><span>Wife</span><span>Daughter</span><span>Sister</span><span>Aunty</span><span>Friend</span></div>
          <div className="heartbox" id="heart" aria-label="Family photographs arranged in a heart" role="img"></div>
          <div className="words-m">
            <span className="word" style={{left:"12%",top:"30%",fontWeight:"700",fontSize:"44px",color:"var(--burg)",transform:"rotate(-8deg)"}}>LOVE</span>
            <span className="word" style={{left:"9%",top:"50%",fontStyle:"italic",fontWeight:"300",fontSize:"40px",color:"var(--cream)"}}>kindness</span>
            <span className="word" style={{left:"15%",top:"68%",fontWeight:"600",fontSize:"34px",letterSpacing:".1em",color:"var(--wine)"}}>GRACE</span>
            <span className="word" style={{right:"11%",top:"29%",fontWeight:"700",fontSize:"40px",color:"var(--cream)",transform:"rotate(6deg)"}}>STRENGTH</span>
            <span className="word" style={{right:"9%",top:"48%",fontStyle:"italic",fontWeight:"300",fontSize:"42px",color:"var(--burg)"}}>generosity</span>
            <span className="word" style={{right:"12%",top:"66%",fontWeight:"700",fontSize:"40px",color:"var(--butter)",textShadow:"0 2px 0 var(--gold)",transform:"rotate(-5deg)"}}>SUNSHINE</span>
            <span className="word" style={{left:"50%",top:"83%",marginLeft:"-60px",fontWeight:"700",fontSize:"30px",letterSpacing:".2em",color:"var(--wine)"}}>HOME</span>
          </div>
          <p className="close" data-split="w" data-r style={{marginTop:"auto"}}>You have been so many wonderful things to so many people. But to us, you'll always be our favourite person.</p>
        </div>
        <div className="veil" style={{"--to":"#F3C98A"}}></div>
      </div>
    </section>
  );
}
