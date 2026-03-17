import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const SLIDES = [
  {
    img: "https://images.pexels.com/photos/6863181/pexels-photo-6863181.jpeg",
    tag: "Offshore Staffing Experts",
    headline: ["Expert Offshore Staffing", "for CPA Firms & Businesses"],
    sub: "Over 5 years of expertise helping CPA firms and private businesses expand their teams with experienced audit, accounting, and taxation professionals.",
  },
  {
    img: "https://images.pexels.com/photos/4475525/pexels-photo-4475525.jpeg",
    tag: "400+ Clients Served",
    headline: ["Dedicated Offshore Staff", "at a Fraction of the Cost"],
    sub: "Save up to 60% compared to in-house hiring. Our professionals seamlessly integrate with your team — delivering precision, consistency, and dedication.",
  },
  {
    img: "https://images.pexels.com/photos/6779716/pexels-photo-6779716.jpeg",
    tag: "Scalable Staffing Solutions",
    headline: ["Right Talent,", "Right Time — Always"],
    sub: "From one professional for a short-term project to full dedicated teams for long-term operations. Eminentia scales with your business needs.",
  },
];

const DURATION = 5000;

export default function HeroSection() {
  const [active, setActive]   = useState(0);
  const [prev, setPrev]       = useState(null);
  const [animDir, setAnimDir] = useState("next");
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef  = useRef(null);
  const progRef   = useRef(null);
  const startRef  = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const startProgress = () => {
    setProgress(0);
    startRef.current = performance.now();
    cancelAnimationFrame(progRef.current);
    const tick = (now) => {
      const elapsed = now - startRef.current;
      setProgress(Math.min((elapsed / DURATION) * 100, 100));
      if (elapsed < DURATION) progRef.current = requestAnimationFrame(tick);
    };
    progRef.current = requestAnimationFrame(tick);
  };

  const goTo = (idx, dir = "next") => {
    setAnimDir(dir);
    setPrev(active);
    setActive(idx);
    startProgress();
  };

  const next = () => goTo((active + 1) % SLIDES.length, "next");
  const prev_ = () => goTo((active - 1 + SLIDES.length) % SLIDES.length, "prev");

  useEffect(() => {
    startProgress();
    timerRef.current = setInterval(next, DURATION);
    return () => { clearInterval(timerRef.current); cancelAnimationFrame(progRef.current); };
  }, [active]);

  const resetTimer = (fn) => {
    clearInterval(timerRef.current);
    fn();
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Poppins:wght@300;400;500;600&display=swap');

        .hs-root {
          position: relative; width: 100%; height: 100svh;
          min-height: 520px; overflow: hidden;
          background: #071525; font-family: 'Poppins', sans-serif;
        }
        .hs-slide { position: absolute; inset: 0; will-change: transform, opacity; }
        .hs-slide-enter-next { animation: slideInNext 0.85s cubic-bezier(0.16,1,0.3,1) both; }
        .hs-slide-enter-prev { animation: slideInPrev 0.85s cubic-bezier(0.16,1,0.3,1) both; }
        .hs-slide-leave-next { animation: slideOutNext 0.85s cubic-bezier(0.16,1,0.3,1) both; }
        .hs-slide-leave-prev { animation: slideOutPrev 0.85s cubic-bezier(0.16,1,0.3,1) both; }
        .hs-slide-idle { z-index: 2; }
        @keyframes slideInNext  { from { transform: translateX(6%) scale(1.03); opacity:0; } to { transform: translateX(0) scale(1); opacity:1; } }
        @keyframes slideInPrev  { from { transform: translateX(-6%) scale(1.03); opacity:0; } to { transform: translateX(0) scale(1); opacity:1; } }
        @keyframes slideOutNext { from { transform: translateX(0) scale(1); opacity:1; } to { transform: translateX(-4%) scale(0.98); opacity:0; } }
        @keyframes slideOutPrev { from { transform: translateX(0) scale(1); opacity:1; } to { transform: translateX(4%) scale(0.98); opacity:0; } }
        .hs-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; animation: kenBurns 6s ease-out both; }
        @keyframes kenBurns { from { transform: scale(1.07); } to { transform: scale(1); } }
        .hs-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(7,21,37,0.75) 0%, rgba(7,21,37,0.75) 50%, rgba(7,21,37,0.80) 100%); }
        .hs-grain { position: absolute; inset: 0; opacity: 0.035; pointer-events: none; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E"); }
        .hs-content { position: absolute; inset: 0; z-index: 10; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: clamp(1.5rem,5vw,3.5rem) clamp(1rem,8vw,6rem); padding-bottom: clamp(5rem,9vw,7rem); color: #fff; }
        .hs-badge { display: inline-flex; align-items: center; gap: 7px; padding: 5px 15px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.22); background: rgba(255,255,255,0.07); backdrop-filter: blur(10px); font-family: 'Poppins', sans-serif; font-size: clamp(9px,1.1vw,11px); font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(255,255,255,0.88); margin-bottom: clamp(14px,2vw,20px); opacity: 0; animation: fadeUp 0.6s ease 0.15s both; }
        .badge-dot { width: 5px; height: 5px; border-radius: 50%; background: #7eb8f7; box-shadow: 0 0 6px #7eb8f7; flex-shrink: 0; }
        .hs-h1 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(2.2rem, 6vw, 4.8rem); font-weight: 700; line-height: 1.08; letter-spacing: -0.01em; color: #fff; margin-bottom: clamp(10px,1.5vw,16px); opacity: 0; animation: fadeUp 0.75s ease 0.3s both; max-width: min(960px, 94vw); }
        .hs-h1 .accent { color: rgba(255,255,255,0.52); }
        .hs-divider { display: flex; align-items: center; justify-content: center; gap: 10px; margin: clamp(10px,1.5vw,16px) 0 clamp(12px,1.8vw,18px); opacity: 0; animation: fadeUp 0.7s ease 0.45s both; }
        .div-line { width: 36px; height: 1px; background: rgba(255,255,255,0.3); }
        .div-diamond { width: 5px; height: 5px; border: 1px solid rgba(255,255,255,0.4); transform: rotate(45deg); }
        .hs-sub { font-family: 'Poppins', sans-serif; font-size: clamp(0.82rem,1.4vw,0.95rem); font-weight: 300; color: rgba(255,255,255,0.75); line-height: 1.8; max-width: min(680px, 92vw); margin-bottom: clamp(22px,3.5vw,32px); opacity: 0; animation: fadeUp 0.7s ease 0.55s both; }
        .hs-ctas { display: flex; flex-wrap: wrap; gap: clamp(8px,1.4vw,12px); justify-content: center; opacity: 0; animation: fadeUp 0.7s ease 0.68s both; }
        .btn-primary { display: inline-flex; align-items: center; gap: 8px; background: #fff; color: #133f77; font-family: 'Poppins', sans-serif; font-size: clamp(11px,1.3vw,13px); font-weight: 600; padding: clamp(11px,1.4vw,13px) clamp(20px,2.5vw,26px); border: none; border-radius: 8px; cursor: pointer; box-shadow: 0 4px 20px rgba(0,0,0,0.27); transition: transform 0.25s, box-shadow 0.25s, background 0.25s; letter-spacing: 0.01em; white-space: nowrap; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(0,0,0,0.36); background: #eef4ff; }
        .btn-primary svg { width:13px; height:13px; stroke:currentColor; stroke-width:2.2; fill:none; transition: transform 0.25s; }
        .btn-primary:hover svg { transform: translateX(3px); }
        .btn-ghost { display: inline-flex; align-items: center; gap: 8px; background: transparent; color: rgba(255,255,255,0.88); font-family: 'Poppins', sans-serif; font-size: clamp(11px,1.3vw,13px); font-weight: 500; padding: clamp(11px,1.4vw,13px) clamp(20px,2.5vw,26px); border: 1px solid rgba(255,255,255,0.38); border-radius: 8px; cursor: pointer; backdrop-filter: blur(6px); transition: transform 0.25s, background 0.25s, border-color 0.25s; white-space: nowrap; }
        .btn-ghost:hover { transform: translateY(-2px); background: rgba(255,255,255,0.12); border-color: rgba(255,255,255,0.7); }
        .hs-controls { position: absolute; bottom: clamp(20px,3.5vw,36px); left: 50%; transform: translateX(-50%); z-index: 20; display: flex; flex-direction: column; align-items: center; gap: 12px; width: 100%; padding: 0 clamp(1rem,5vw,3rem); }
        .hs-nav-row { display: flex; align-items: center; gap: clamp(14px,2.5vw,26px); }
        .hs-arrow { width: clamp(34px,4.5vw,40px); height: clamp(34px,4.5vw,40px); border-radius: 50%; border: 1px solid rgba(255,255,255,0.28); background: rgba(255,255,255,0.06); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: background 0.2s, transform 0.2s, border-color 0.2s; flex-shrink: 0; }
        .hs-arrow:hover { background: rgba(255,255,255,0.16); border-color: rgba(255,255,255,0.6); transform: scale(1.08); }
        .hs-arrow svg { width: 15px; height: 15px; stroke: #fff; stroke-width: 2; fill: none; }
        .hs-dots { display: flex; gap: 7px; align-items: center; }
        .hs-dot { border-radius: 999px; cursor: pointer; transition: all 0.35s cubic-bezier(0.16,1,0.3,1); border: none; padding: 0; }
        .hs-dot-inactive { width: 6px; height: 6px; background: rgba(255,255,255,0.35); }
        .hs-dot-active { width: 26px; height: 6px; background: #fff; }
        .hs-progress-wrap { width: min(260px, 65vw); height: 2px; background: rgba(255,255,255,0.15); border-radius: 1px; overflow: hidden; }
        .hs-progress-bar { height: 100%; background: rgba(255,255,255,0.7); border-radius: 1px; transition: width 0.1s linear; }
        .hs-thumbs { position: absolute; right: clamp(14px,2.5vw,28px); bottom: clamp(90px,13vw,126px); z-index: 20; display: flex; flex-direction: column; gap: 7px; }
        .hs-thumb { width: clamp(50px,5.5vw,68px); height: clamp(34px,3.8vw,48px); border-radius: 6px; overflow: hidden; cursor: pointer; border: 2px solid transparent; transition: border-color 0.3s, transform 0.3s, opacity 0.3s; opacity: 0.42; flex-shrink: 0; }
        .hs-thumb:hover { opacity: 0.72; transform: scale(1.05); }
        .hs-thumb-active { border-color: #fff; opacity: 1 !important; }
        .hs-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        @media (max-width: 640px) { .hs-thumbs { display: none; } .hs-ctas { flex-direction: column; align-items: center; } .btn-primary, .btn-ghost { width: min(280px,80vw); justify-content: center; } }
        @media (max-width: 380px) { .hs-h1 { font-size: 1.8rem; } .hs-ctas { flex-direction: column; align-items: center; } .btn-primary, .btn-ghost { width: min(260px,80vw); justify-content: center; } }
        @media (hover: none) { .btn-primary:hover, .btn-ghost:hover, .hs-arrow:hover { transform: none; } }
      `}</style>

      <section className="hs-root">
        {SLIDES.map((slide, i) => {
          const isActive = i === active;
          const isPrev   = i === prev;
          let cls = "";
          if (isActive) cls = `hs-slide-enter-${animDir} hs-slide-idle`;
          else if (isPrev) cls = `hs-slide-leave-${animDir}`;
          return (
            <div key={i} className={`hs-slide ${cls}`} style={{ zIndex: isActive ? 2 : isPrev ? 1 : 0 }}>
              <img className="hs-img" src={slide.img} alt={`slide-${i}`} />
              <div className="hs-overlay" />
              <div className="hs-grain" />
            </div>
          );
        })}

        <div className="hs-content" key={active}>
          <div className="hs-badge">
            <span className="badge-dot" />
            {SLIDES[active].tag}
          </div>
          <h1 className="hs-h1">
            {SLIDES[active].headline.map((line, i) => (
              <span key={i} className={i === 1 ? "accent" : ""}>
                {line}{i < SLIDES[active].headline.length - 1 && <br />}
              </span>
            ))}
          </h1>
          <div className="hs-divider">
            <div className="div-line" /><div className="div-diamond" /><div className="div-line" />
          </div>
          <p className="hs-sub">{SLIDES[active].sub}</p>
          <div className="hs-ctas">
            <Link to="/contact">
            <button className="btn-primary">
              Hire Offshore Staff
              <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            </Link>
            <Link to="/about">
            <button className="btn-ghost">Know us</button></Link>
          </div>
        </div>

     

        <div className="hs-controls">
          <div className="hs-progress-wrap">
            <div className="hs-progress-bar" style={{ width: `${progress}%` }} />
          </div>
          <div className="hs-nav-row">
            <button className="hs-arrow" onClick={() => resetTimer(prev_)} aria-label="Previous">
              <svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <div className="hs-dots">
              {SLIDES.map((_, i) => (
                <button key={i} className={`hs-dot ${i === active ? "hs-dot-active" : "hs-dot-inactive"}`} onClick={() => resetTimer(() => goTo(i, i > active ? "next" : "prev"))} aria-label={`Go to slide ${i + 1}`} />
              ))}
            </div>
            <button className="hs-arrow" onClick={() => resetTimer(next)} aria-label="Next">
              <svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}