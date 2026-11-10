// All scroll choreography lives here: Lenis smooth scrolling, GSAP ScrollTrigger
// pinned + scrubbed timelines for desktop, simple vertical reveals for phones.
// Each chapter's timeline is built in desktop() via scene('<section id>', <scroll length %>, build).
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import music from './music';
import { SITE, familyPhoto, loadPhoto } from '../config/site';

gsap.registerPlugin(ScrollTrigger);

let lenis = null;
let raf = null;
let finalTl = null;
let reduce = false;

/** Smoothly scroll to a selector (used by the opening button, chapter rail and video end). */
export function go(sel) {
  const el = document.querySelector(sel);
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { duration: 2.2 });
  else el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
}

/** Replays the final-screen animation (called when the family video ends). */
export function playFinal() {
  if (finalTl) finalTl.restart();
}

export function initExperience() {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const rnd = (a, b) => a + Math.random() * (b - a);
  const ctx = gsap.context(() => {
  /* ---------- generated decoration (runs once) ---------- */
  if(!document.body.dataset.decorated){
  document.body.dataset.decorated='1';

  // festival bulbs
  (function(){
    const g = $('#bulbs'); if(!g) return;
    const cols=['#F6D776','#F07A3A','#EE6F73'];
    const ns='http://www.w3.org/2000/svg';
    for(let i=0;i<18;i++){const x=40+i*80;const t=x/1440;const y=40+Math.sin(t*Math.PI*2.1)*48+ (t<.5? t*120 : (1-t)*80);
      const c=document.createElementNS(ns,'circle');c.setAttribute('cx',x);c.setAttribute('cy',Math.max(46,Math.min(112,y+30)));c.setAttribute('r',7);c.setAttribute('fill',cols[i%3]);c.setAttribute('class','bulb');g.appendChild(c);}
    for(let i=0;i<14;i++){const x=60+i*100;const c=document.createElementNS(ns,'circle');c.setAttribute('cx',x);c.setAttribute('cy',150+Math.sin(i*.7)*30);c.setAttribute('r',6);c.setAttribute('fill',cols[(i+1)%3]);c.setAttribute('opacity','.7');c.setAttribute('class','bulb');g.appendChild(c);}
  })();
  // petals
  $$('.petals').forEach(p=>{const cols=['#EE6F73','#F6D776','#FBF3E6','#F9C6A5'];for(let i=0;i<16;i++){const e=document.createElement('i');e.className='petal';e.style.left=rnd(0,100)+'%';e.style.background=cols[i%4];e.style.animationDuration=rnd(9,18)+'s';e.style.animationDelay=(-rnd(0,18))+'s';e.style.setProperty('--dx',rnd(-120,160)+'px');p.appendChild(e);}});
  // heart tiles
  (function(){
    const rows=[[1,2,4,5],[0,1,2,3,4,5,6],[0,1,2,3,4,5,6],[1,2,3,4,5],[2,3,4],[3]];
    const cols=['#FBF3E6','#F6D776','#F9C6A5','#FFE3D6','#F3E3CC'];
    const box=$('#heart'); let n=0;
    rows.forEach((cs,r)=>cs.forEach(c=>{n++;const t=document.createElement('div');t.className='tile';t.style.setProperty('--x',c);t.style.setProperty('--y',r);t.style.setProperty('--c',cols[n%5]);t.style.setProperty('--r',(((n*37)%9)-4)+'deg');const f=familyPhoto(n);t.textContent=f.split('/').pop();t.title='public/assets/'+f;loadPhoto(f,url=>{t.classList.add('has');t.textContent='';t.style.backgroundImage='url("'+url+'")';});box.appendChild(t);}));
  })();
  // portrait mosaic
  (function(){
    const cols=['#F6D776','#F9C6A5','#EE6F73','#C9A04E','#FBF3E6','#F07A3A'];const m=$('#mosaic');let n=0;
    for(let r=0;r<13;r++)for(let c=0;c<10;c++){const dx=(c-4.5)/5,dy=(r-6)/6.5;if(dx*dx+dy*dy<=1){n++;const t=document.createElement('i');t.className='mt';t.style.setProperty('--x',c);t.style.setProperty('--y',r);t.style.setProperty('--c',cols[(n*7)%6]);t.style.setProperty('--o',(.55+((n*13)%45)/100).toFixed(2));m.insertBefore(t,m.firstChild);}}
  })();
  // if the portrait exists, every mosaic tile shows its own slice of it
  (function(){const m=$('#mosaic');loadPhoto(SITE.portrait,url=>{m.classList.add('has');m.style.setProperty('--portrait','url("'+url+'")');});})();
  // confetti
  (function(){const box=$('#ch10 .confetti');const cols=['#F6D776','#FBF3E6','#6B1A2B','#EE6F73','#F9C6A5'];for(let i=0;i<46;i++){const e=document.createElement('i');e.className='conf';e.style.background=cols[i%5];if(i%3===0){e.style.width='8px';e.style.height='8px';e.style.borderRadius='50%';}box.appendChild(e);}})();
  
  }

  /* ---------- text splitting ---------- */
  function split(el, mode){
    const out=[];
    (function walk(node){
      Array.from(node.childNodes).forEach(n=>{
        if(n.nodeType===3){
          const frag=document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(w=>{
            if(!w) return;
            if(/^\s+$/.test(w)){frag.appendChild(document.createTextNode(w));return;}
            const wd=document.createElement('span');wd.className=mode==='c'?'wd':'sp';
            if(mode==='c'){[...w].forEach(ch=>{const s=document.createElement('span');s.className='sp';s.textContent=ch;wd.appendChild(s);out.push(s);});}
            else{wd.textContent=w;out.push(wd);}
            frag.appendChild(wd);
          });
          n.replaceWith(frag);
        } else if(n.nodeType===1 && n.tagName!=='BR') walk(n);
      });
    })(el);
    el._parts=out; return out;
  }
  $$('[data-split]').forEach(el=>{ if(!el._parts) split(el, el.dataset.split); });
  
  /* ---------- smooth scroll ---------- */
  if(!reduce){
    lenis=new Lenis({lerp:.085, wheelMultiplier:.9});
    lenis.on('scroll',ScrollTrigger.update);
    raf=t=>lenis.raf(t*1000);
    gsap.ticker.add(raf); gsap.ticker.lagSmoothing(0);
  }
  
  /* ---------- intro on load ---------- */
  if(!reduce){
    const intro=gsap.timeline({delay:.2});
    intro.from('#fiftyStroke',{strokeDashoffset:1600,duration:3.2,ease:'power2.inOut'},0)
      .from($('.intro-meet')._parts,{opacity:0,y:14,stagger:.08,duration:.7,ease:'power2.out'},.2)
      .from($('.intro-name')._parts,{opacity:0,yPercent:80,rotate:8,stagger:.035,duration:.8,ease:'back.out(2)'},.9)
      .from('.intro-tag',{opacity:0,y:20,duration:.9},1.8)
      .from('.intro-sub',{opacity:0,y:20,duration:.9},2.1)
      .from('#begin',{opacity:0,scale:.8,duration:.8,ease:'back.out(2)'},2.4);
  }
  
  /* ---------- chapters ---------- */
  function scene(id,len,build){
    const sec=$('#'+id); const q=gsap.utils.selector(sec);
    const tl=gsap.timeline({defaults:{ease:'power2.out',duration:1},scrollTrigger:{trigger:sec,start:'top top',end:'+='+len+'%',pin:true,scrub:1,anticipatePin:1}});
    build(tl,q,sec); return tl;
  }
  const CLIP0={clipPath:'inset(0% 100% 0% 0%)'}, CLIP1={clipPath:'inset(0% 0% 0% 0%)'};
  const veil=(tl,q,at)=>tl.to(q('.veil'),{opacity:1,duration:1.2,ease:'none'},at);
  
  function desktop(){
    // intro: cinematic zoom-out as you leave
    gsap.timeline({scrollTrigger:{trigger:'#intro',start:'top top',end:'bottom top',scrub:true}})
      .to('#introInner',{scale:.82,opacity:0,y:-60,ease:'none'},0)
      .to('.fifty-bg',{scale:1.6,opacity:0,ease:'none'},0)
      .to('#intro .flower',{y:i=>-200-i*60,ease:'none'},0);
  
    scene('ch01',260,(tl,q)=>{
      const yr={v:1970};
      tl.to(q('.blades'),{rotation:1440,svgOrigin:'210 120',duration:11,ease:'power1.in'},0)
        .from(q('.spark'),{scale:0,opacity:0,transformOrigin:'50% 50%',stagger:.4,duration:.8,ease:'back.out(3)'},1.2)
        .from(q('.eyebrow'),{opacity:0,y:20},.4)
        .to(yr,{v:1976,duration:2,ease:'none',onUpdate:()=>{$('#year').textContent=Math.round(yr.v);}},.6)
        .from(q('.c1-text h2, .c1-text p, .chips'),{x:-50,opacity:0,stagger:.6,duration:1.2},1.6)
        .from(q('.c1-photo'),{y:80,rotation:7,opacity:0,duration:1.6},2.6)
        .fromTo(q('.c1-photo .ph'),{filter:'sepia(1) brightness(1.7) blur(8px)'},{filter:'sepia(0) brightness(1) blur(0px)',duration:3,ease:'none'},3.2)
        .from(q('.c1-cap'),{opacity:0,y:16},5.6)
        .from(q('.c1-tree > div'),{opacity:0,y:20,stagger:.3,duration:.7},6);
      veil(tl,q,9.6);
    });
  
    scene('ch02',220,(tl,q)=>{
      tl.from(q('.bulb'),{opacity:.05,stagger:{each:.08,from:'start'},duration:.3,ease:'none'},0)
        .from(q('.lantern'),{y:-260,stagger:.3,duration:1.6,ease:'power3.out'},.2)
        .from(q('.skyline i'),{scaleY:0,transformOrigin:'bottom',stagger:.06,duration:.8},.4)
        .from(q('.c2-photo'),{opacity:0,scale:.85,y:60,filter:'blur(10px)',duration:1.8},1.4)
        .from(q('.papa .spk'),{scale:0,transformOrigin:'50% 50%',stagger:.25,duration:.5,ease:'back.out(3)'},2.6)
        .to(q('.wave'),{rotation:-14,svgOrigin:'175 116',duration:.35,repeat:7,yoyo:true,ease:'sine.inOut'},3)
        .from(q('.eyebrow, .story'),{opacity:0,y:24,stagger:.4},2.2)
        .from($('#ch02 .quote')._parts,{opacity:.08,stagger:.12,duration:.4,ease:'none'},3.2)
        .fromTo(q('.note'),CLIP0,{...CLIP1,duration:2.2,ease:'none'},6.4)
        .to(q('.lantern'),{y:-60,duration:3,ease:'none'},6);
      veil(tl,q,9);
    });
  
    scene('ch03',240,(tl,q)=>{
      tl.to(q('.cover'),{rotateY:-172,duration:2.2,ease:'power2.inOut'},.2)
        .set(q('.cover'),{autoAlpha:0},2.4)
        .from(q('.c3-left .eyebrow, .c3-left h2'),{opacity:0,y:30,stagger:.3},2)
        .from(q('.bk'),{x:-260,opacity:0,stagger:.25,duration:.9,ease:'back.out(1.6)'},2.4)
        .from(q('.pencil'),{x:280,rotation:540,duration:1.4},3)
        .fromTo(q('.hline, .c3-left .q'),CLIP0,{...CLIP1,stagger:.9,duration:1.6,ease:'none'},3.4)
        .from(q('.lady-wrap'),{opacity:0,y:80,scale:.9,duration:1.6,ease:'power3.out'},3.6)
        .from(q('.lady .books'),{y:40,opacity:0,duration:.8,ease:'back.out(2)'},5)
        .from(q('.lady .spk'),{scale:0,transformOrigin:'50% 50%',stagger:.25,duration:.5,ease:'back.out(3)'},5.4)
        .to(q('.lady .braid'),{rotation:4,svgOrigin:'244 200',duration:.6,repeat:3,yoyo:true,ease:'sine.inOut'},5.6)
        .from(q('.ticket'),{scale:.5,opacity:0,rotation:-30,duration:1,ease:'back.out(2)'},6.4)
        .from(q('.stamp'),{scale:3,opacity:0,duration:.6,ease:'power4.in'},7.6);
      veil(tl,q,9);
    });
  
    scene('ch04',300,(tl,q)=>{
      const strip=q('.strip')[0], win=q('.filmwin')[0];
      tl.from('#y2002',{strokeDashoffset:1400,duration:3,ease:'none'},0)
        .from(q('.c4-left .eyebrow, .c4-left h2'),{opacity:0,y:30,stagger:.4},.6)
        .from(q('.arch'),{scale:.4,opacity:0,y:120,duration:2,ease:'power3.out'},1.4)
        .fromTo(q('.arch .ph'),{clipPath:'inset(50% 50% 50% 50% round 999px)'},{clipPath:'inset(0% 0% 0% 0% round 999px)',duration:2.4,ease:'power2.inOut'},2.2)
        .from(q('.bride'),{scale:.4,opacity:0,rotation:-8,transformOrigin:'0 50%',duration:1,ease:'back.out(2.5)'},4.2)
        .from(q('.c4-left p'),{opacity:0,y:20},5)
        .from(q('.strip .pol'),{opacity:0,y:60,stagger:.3},5.4)
        .to(strip,{x:()=>-(strip.scrollWidth-win.clientWidth+20),duration:3.2,ease:'none'},6.4)
        .from(q('.namecard'),{opacity:0,y:40},8.6)
        .from('#sameName',{'--u':0,duration:1.2,ease:'none'},9.4);
      veil(tl,q,11);
    });
  
    scene('ch05',300,(tl,q)=>{
      tl.from(q('.c5a-head > *'),{opacity:0,y:40,stagger:.3},0);
      q('.panel').forEach((p,i)=>{
        const at=.8+i*1.9;
        tl.from(p,{scale:.6,rotation:i%2?6:-6,opacity:0,duration:.9,ease:'back.out(1.8)'},at)
          .from(p.querySelectorAll('.bub'),{scale:0,transformOrigin:'20% 100%',stagger:.6,duration:.6,ease:'back.out(3)'},at+.5);
        if(i===1) tl.from(p.querySelector('.boom'),{scale:4,opacity:0,duration:.5,ease:'power4.in'},at+1.3);
        if(i===2) tl.from(p.querySelectorAll('.lp'),{scale:0,transformOrigin:'50% 100%',stagger:.25,duration:.4,ease:'back.out(3)'},at+.3);
        if(i===3) tl.from(p.querySelector('.haha'),{scale:3,opacity:0,duration:.5,ease:'power4.in'},at+1.2).to(p.querySelector('svg'),{y:-6,duration:.15,repeat:5,yoyo:true,ease:'none'},at+1.4);
      });
      tl.from($('#ch05 .c5a-close')._parts,{opacity:0,y:16,stagger:.08,duration:.5},8.6);
      veil(tl,q,10.2);
    });
  
    // fayola intro: gentle reveals
    gsap.from('#ch05b [data-r]',{opacity:0,y:50,stagger:.12,duration:1,ease:'power2.out',scrollTrigger:{trigger:'#ch05b',start:'top 70%'}});
    gsap.from('#ch05b .pol',{rotation:i=>[-20,18,-14][i],x:i=>[-80,0,80][i],duration:1.2,ease:'back.out(1.4)',stagger:.15,scrollTrigger:{trigger:'#ch05b',start:'top 60%'}});
  
    scene('ride',320,(tl,q)=>{
      const track=q('.ride-track')[0];
      tl.to(track,{x:()=>-(track.offsetWidth-innerWidth),duration:10,ease:'none'},0)
        .to(q('.wheel'),{rotation:2400,transformOrigin:'50% 50%',duration:10,ease:'none'},0)
        .to(q('.ride-body'),{y:-4,duration:.25,repeat:39,yoyo:true,ease:'sine.inOut'},0)
        .to(q('.sun'),{x:-120,duration:10,ease:'none'},0)
        .from(q('.ride-text .eyebrow'),{opacity:0,y:20},.2)
        .from(q('.l1'),{opacity:0,y:30,duration:1},1.4)
        .fromTo(q('.flyer'),{opacity:0,y:0,x:0,rotation:0},{opacity:1,y:i=>-160-i*60,x:i=>-60+i*70,rotation:i=>[-30,25,60][i],stagger:.8,duration:2},2.4)
        .to(q('.flyer'),{opacity:0,duration:1},5.8)
        .from(q('.l2'),{opacity:0,y:30,duration:1},5)
        .to(q('.bell'),{rotation:20,svgOrigin:'150 0',duration:.12,repeat:7,yoyo:true,ease:'none'},9.2);
      veil(tl,q,10.4);
    });
  
    gsap.from('#ch06 [data-r]',{opacity:0,y:50,stagger:.12,duration:1,ease:'power2.out',scrollTrigger:{trigger:'#ch06',start:'top 70%'}});
  
    scene('height',380,(tl,q,sec)=>{
      tl.from($('#height h2')._parts,{opacity:0,y:30,stagger:.15,duration:.6},0)
        .from(q('.ruler'),{scaleY:0,duration:1},.6)
        .from(q('.mline'),{scaleX:0,duration:1.2,ease:'none'},1);
      const caps=q('.caps div');
      q('.fr').forEach((f,i)=>{
        const at=2+i*2;
        tl.from(f,{x:140,opacity:0,rotation:6,duration:.9},at)
          .from(f.querySelector('.bar'),{scaleY:0,duration:1.1,ease:i===3?'elastic.out(1,.45)':'back.out(2.2)'},at+.6)
          .from(caps[i],{opacity:0,y:16,duration:.6},at+.9);
      });
      tl.to(q('.inner'),{x:'+=14',duration:.06,repeat:9,yoyo:true,ease:'none'},10)
        .from(q('.howstamp'),{scale:3.4,opacity:0,rotation:40,duration:.7,ease:'power4.in'},10.1)
        .from(q('.genes'),{opacity:0,y:30,duration:1},11.2);
      veil(tl,q,12.8);
    });
  
    scene('ch07',260,(tl,q)=>{
      tl.from(q('.c7-text > *'),{opacity:0,x:-40,stagger:.4},0)
        .from(q('.boxwrap'),{y:200,opacity:0,duration:1.4},.4)
        .from(q('.lid'),{y:230,duration:1.6,ease:'power2.inOut'},1.8)
        .from(q('.food'),{scale:0,transformOrigin:'50% 50%',stagger:.35,duration:.6,ease:'back.out(2.5)'},3.2)
        .fromTo(q('.ht'),{opacity:0,y:60},{opacity:1,y:-40,stagger:.3,duration:1.2},5)
        .to(q('.ht'),{y:-180,opacity:0,stagger:.2,duration:1.6,ease:'none'},6.6)
        .from(q('.sticky'),{y:-300,rotation:i=>i?40:-40,opacity:0,stagger:.4,duration:1.2,ease:'back.out(1.4)'},5.6)
        .from(q('.path .pill'),{opacity:0,y:20,stagger:.4,duration:.5},7)
        .from(q('.path .dots'),{scaleX:0,stagger:.4,duration:.5,ease:'none'},7.2)
        .from(q('.c7-close'),{opacity:0,y:30,duration:1},8.6);
      veil(tl,q,10);
    });
  
    scene('ch08',260,(tl,q)=>{
      tl.from(q('h2'),{opacity:0,y:30},0)
        .from(q('.roles span'),{rotationX:-90,opacity:0,transformOrigin:'50% 0',stagger:.3,duration:.6},.3)
        .from(q('.tile'),{x:()=>rnd(-700,700),y:()=>rnd(-500,500),rotation:()=>rnd(-120,120),scale:()=>rnd(.6,1.6),opacity:0,stagger:{each:.06,from:'random'},duration:2.4,ease:'power3.out'},1.4)
        .to('#heart',{scale:1.07,duration:.35,yoyo:true,repeat:3,ease:'power1.inOut'},5)
        .from(q('.word'),{opacity:0,scale:.5,stagger:.25,duration:.7,ease:'back.out(2)'},5.2)
        .from($('#ch08 .close')._parts,{opacity:.08,stagger:.07,duration:.3,ease:'none'},7.2);
      veil(tl,q,9.4);
    });
  
    scene('ch09',620,(tl,q)=>{
      tl.from(q('.paper'),{y:140,opacity:0,rotation:-2,duration:1.4},0)
        .fromTo(q('.dear'),CLIP0,{...CLIP1,duration:1.4,ease:'none'},1.2)
        .from(q('.lpols .pol'),{x:-240,opacity:0,rotation:-25,stagger:1.6,duration:1.6},2);
      q('.letter p').forEach((p,i)=>tl.from(p,{opacity:.06,filter:'blur(5px)',y:8,duration:.9,ease:'power1.out'},2.4+i*1.05));
      tl.from(q('.mt'),{x:()=>rnd(-260,260),y:()=>rnd(-300,300),opacity:0,rotation:()=>rnd(-90,90),stagger:{each:.04,from:'random'},duration:2.4},8)
        .from(q('.mlabel'),{opacity:0},16)
        .from(q('.c9-right .hand'),{opacity:0,y:20},16.6)
        .to(q('.glow'),{opacity:.92,duration:2.4,ease:'none'},21.6);
      veil(tl,q,24);
    });
  
    scene('ch10',300,(tl,q)=>{
      const confs=q('.conf');
      tl.from(q('.big50'),{scale:.15,rotation:-14,opacity:0,duration:2,ease:'back.out(1.4)'},0)
        .to(q('.big50'),{backgroundPosition:'112px 56px',duration:9,ease:'none'},0)
        .from(q('.c10-r h2, .c10-r .big'),{opacity:0,x:60,stagger:.4},1);
      q('.c10-r .ln:not(.big)').forEach((l,i)=>{
        tl.from(l,{opacity:0,x:60,duration:.7},2.2+i*.7);
        const b=l.querySelector('.count'); if(b){const o={v:0};const to=+b.dataset.to;tl.fromTo(o,{v:0},{v:to,duration:.8,ease:'power1.out',onUpdate:()=>{b.textContent=Math.round(o.v);}},2.3+i*.7);}
      });
      tl.fromTo(confs,{x:0,y:0,opacity:1,rotation:0},{x:()=>rnd(-700,700),y:()=>rnd(-480,480),rotation:()=>rnd(-720,720),opacity:1,duration:2.4,ease:'power3.out',stagger:.01},6.2)
        .to(confs,{opacity:0,duration:.8},8.4)
        .from(q('.choose'),{scale:1.6,opacity:0,rotation:-4,duration:.8,ease:'power4.in'},6.8)
        .from(q('.c10-l .hand'),{opacity:0},7.4);
      veil(tl,q,9.6);
    });
  
    gsap.timeline({scrollTrigger:{trigger:'#ch11',start:'top 65%',end:'center center',scrub:1}})
      .from('#ch11 .eyebrow',{opacity:0,y:20})
      .from($('#ch11 .l1')._parts,{opacity:0,y:10,stagger:.1})
      .from($('#ch11 .l2')._parts,{opacity:0,scale:.6,stagger:.12})
      .from('#ch11 .l3',{opacity:0,y:20})
      .from('#player',{scaleX:.06,scaleY:.02,opacity:0,duration:2,ease:'power3.inOut'});
  
    finalReveal(true);
  }
  
  function mobile(){
    gsap.utils.toArray('.scene [data-r]').forEach(el=>{
      gsap.from(el,{opacity:0,y:44,duration:1,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 88%'}});
    });
    gsap.to('#ch01 .blades',{rotation:1080,svgOrigin:'210 120',ease:'none',scrollTrigger:{trigger:'#ch01',start:'top bottom',end:'bottom top',scrub:true}});
    gsap.utils.toArray('.fr .bar').forEach(b=>gsap.from(b,{scaleY:0,duration:1.2,ease:'back.out(2)',scrollTrigger:{trigger:b,start:'top 80%'}}));
    gsap.from('.tile',{x:()=>rnd(-200,200),y:()=>rnd(-200,200),rotation:()=>rnd(-90,90),opacity:0,stagger:{each:.03,from:'random'},duration:1.4,ease:'power3.out',scrollTrigger:{trigger:'#heart',start:'top 80%'}});
    gsap.from('.mt',{opacity:0,scale:0,stagger:{each:.01,from:'random'},duration:.6,scrollTrigger:{trigger:'#mosaic',start:'top 80%'}});
    gsap.to('#ride .ride-track',{x:'-30%',ease:'none',scrollTrigger:{trigger:'#ride',start:'top bottom',end:'bottom top',scrub:true}});
    gsap.to('#ride .wheel',{rotation:900,transformOrigin:'50% 50%',ease:'none',scrollTrigger:{trigger:'#ride',start:'top bottom',end:'bottom top',scrub:true}});
    gsap.utils.toArray('.count').forEach(b=>{const o={v:0};gsap.to(o,{v:+b.dataset.to,duration:1.2,onUpdate:()=>{b.textContent=Math.round(o.v);},scrollTrigger:{trigger:b,start:'top 85%'}});});
    finalReveal(true);
  }
  
  function finalReveal(onScroll){
    finalTl=gsap.timeline({paused:true})
      .from('#final .oval',{scale:.6,opacity:0,duration:1.4,ease:'power3.out'})
      .from($('#final h2')._parts,{opacity:0,y:40,stagger:.04,duration:.7,ease:'back.out(2)'},.6)
      .from('#final .always',{opacity:0,letterSpacing:'.8em',duration:1.2},1.8)
      .fromTo('#final .signoff',CLIP0,{...CLIP1,duration:1.6,ease:'none'},2.4)
      .to('#final .beat',{scale:1.3,transformOrigin:'50% 50%',duration:.25,yoyo:true,repeat:3},4);
    if(onScroll) ScrollTrigger.create({trigger:'#final',start:'top 60%',once:true,onEnter:()=>finalTl.play()});
  }
  
  const mm=gsap.matchMedia();
  mm.add({desk:'(min-width: 900px) and (prefers-reduced-motion: no-preference)', mob:'(max-width: 899px) and (prefers-reduced-motion: no-preference)'}, ctx=>{
    const {desk,mob}=ctx.conditions;
    if(desk) desktop(); else if(mob) mobile();
  });
  
  /* progress + active chapter + music mood */
  ScrollTrigger.create({start:0,end:'max',onUpdate:s=>{ $('#railfill').style.transform='scaleY('+s.progress+')'; $('#topfill').style.transform='scaleX('+s.progress+')'; }});
  const dots=$$('.rail a');
  $$('.scene').forEach((s,i)=>ScrollTrigger.create({trigger:s,start:'top 55%',end:'bottom 55%',onToggle:self=>{ if(!self.isActive) return; dots.forEach((d,j)=>d.classList.toggle('on',i===j)); music.setMode(s.id==='ch09'||s.id==='final'?'soft':s.id==='ch10'?'bright':'normal'); }}));
  
  
  });
  const refresh = () => ScrollTrigger.refresh();
  window.addEventListener('load', refresh);
  if (document.fonts) document.fonts.ready.then(refresh);
  return () => {
    window.removeEventListener('load', refresh);
    ctx.revert();
    if (raf) gsap.ticker.remove(raf);
    if (lenis) lenis.destroy();
    lenis = null; raf = null; finalTl = null;
  };
}