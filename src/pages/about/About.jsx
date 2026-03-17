import { useState, useEffect, useRef } from "react";

const PRIMARY = "#133f77";
const PRIMARY_LIGHT = "#1e5aaa";
const PRIMARY_PALE = "#e8f0fb";
const PP = "#e8f0fb";
const PD = "#071525";
const GOLD = "#c9a84c";
const CREAM = "#f7f9fc";

const mvvData = [
  {
    tab: "Mission",
    heading: "Empower Firms to Grow",
    body: "To empower CPA firms and businesses with the right offshore experts, enabling them to achieve higher efficiency, reduce overhead, and drive continuous growth — without compromising on quality or compliance.",
    extras: [{ n: "400+", l: "Global Clients" }, { n: "5+", l: "Years of Service" }],
  },
  {
    tab: "Vision",
    heading: "The World's Most Trusted Offshore Partner",
    body: "To grow into the most trusted offshore staffing partner for CPA firms and businesses worldwide — delivering consistent value through proficiency, flexibility, and an unwavering commitment to client success.",
    extras: [{ n: "3x", l: "Avg Cost Savings" }, { n: "Pan-India", l: "Talent Network" }],
  },
  {
    tab: "Values",
    heading: "What Drives Us",
    body: "Integrity. Commitment. Excellence. Collaboration. Innovation. These are not just words — they are the principles our offshore teams live by every single day.",
    extras: [{ n: "400+", l: "Satisfied Clients" }, { n: "100%", l: "Quality Focus" }],
    pillars: [
      { icon: "⚖️", t: "Integrity & Transparency", d: "We believe in complete honesty, transparency, and ethical practices — always." },
      { icon: "🤝", t: "Commitment to Client Success", d: "Your goals are our goals. We measure our success by the growth we deliver for you." },
      { icon: "🚀", t: "Innovation & Collaboration", d: "We adapt new technologies and work alongside you as a true partner, not just a vendor." },
    ],
  },
];

const teamMembers = [
  { name: "Offshore Audit Lead", role: "Audit & Assurance Practice", image: "https://randomuser.me/api/portraits/men/52.jpg", bio: "Leads a dedicated team of audit professionals aligned to US and international assurance standards." },
  { name: "Tax Practice Head", role: "Tax Preparation & Compliance", image: "https://randomuser.me/api/portraits/women/44.jpg", bio: "Oversees all offshore tax preparation workflows, ensuring accuracy and on-time delivery every season." },
  { name: "Accounting Operations Lead", role: "Accounting & Bookkeeping", image: "https://randomuser.me/api/portraits/men/33.jpg", bio: "Manages bookkeeping, MIS, and financial reporting teams serving clients across the US, UK, and Australia." },
  { name: "Client Success Manager", role: "Onboarding & Integration", image: "https://randomuser.me/api/portraits/women/68.jpg", bio: "Ensures every offshore resource is seamlessly onboarded and aligned with your firm's tools and workflows." },
];

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function FadeIn({ children, delay = 0, dir = "up", style = {}, className = "" }) {
  const [ref, visible] = useInView();
  const tx = dir === "left" ? "-32px" : dir === "right" ? "32px" : "0px";
  const ty = dir === "up" ? "32px" : dir === "down" ? "-32px" : "0px";
  return (
    <div ref={ref} className={className} style={{ ...style, opacity: visible ? 1 : 0, transform: visible ? "translate(0,0)" : `translate(${tx},${ty})`, transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s` }}>
      {children}
    </div>
  );
}

function Reveal({ children, delay = 0, x = 0, y = 40, style = {}, className = "" }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} className={className} style={{
      ...style, opacity: visible ? 1 : 0,
      transform: visible ? "translate(0,0)" : `translate(${x}px,${y}px)`,
      transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
    }}>{children}</div>
  );
}

export default function AboutPage() {
  const [mvvIdx, setMvvIdx] = useState(0);
  const [tabAnim, setTabAnim] = useState(true);

  const switchTab = (i) => {
    setTabAnim(false);
    setTimeout(() => { setMvvIdx(i); setTabAnim(true); }, 10);
  };

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Poppins:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; font-style: normal !important; }
        em, i { font-style: normal !important; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Poppins', sans-serif; background: #f7f9fc; color: #1a1a1a; margin: 0; padding: 0; }
        .fg { font-family: 'Cormorant Garamond', serif; }
        .fp { font-family: 'Poppins', sans-serif; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-thumb { background: #133f77; border-radius: 3px; }

        @keyframes floatY { 0%,100%{transform:translateY(0);}50%{transform:translateY(-14px);} }
        .float-anim { animation: floatY 5s ease-in-out infinite; }

        .mvv-tab {
          background: none; border: none; cursor: pointer;
          font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 500;
          color: #7a8fa6; padding: 12px 0; border-bottom: 2px solid transparent;
          transition: all 0.3s; white-space: nowrap;
        }
        .mvv-tab.active { color: #133f77; border-bottom-color: #133f77; }

        /* ════ BANNER ════ */
        .s-picbanner { position:relative; height:clamp(260px,45vw,500px); overflow:hidden; }
        .s-picbanner img { width:100%; height:100%; object-fit:cover; object-position:center 30%; }
        .s-picbanner-overlay { position:absolute; inset:0; background:linear-gradient(to right,#071525ee 0%,#07152599 55%,#07152544 100%); }
        .s-picbanner-content { position:absolute; inset:0; display:flex; align-items:center; }
        .s-picbanner-inner { max-width:1200px; margin:0 auto; padding:0 clamp(1rem,5vw,2rem); width:100%; }

        /* ════ HERO ════ */
        .s-hero { position:relative; display:flex; align-items:center; overflow:hidden; background:linear-gradient(150deg,#eef3fb 0%,#ffffff 55%,#dce8f7 100%); }
        .s-hero-inner {
          max-width:1280px; margin:0 auto; width:100%;
          padding:clamp(3.5rem,8vw,6rem) clamp(1rem,5vw,2rem);
          display:grid; grid-template-columns:1.1fr 0.9fr;
          gap:clamp(2rem,5vw,4rem); align-items:center;
          position:relative; z-index:1;
        }
        .hero-eyebrow-pill {
          display:inline-flex; align-items:center; gap:6px;
          background:${PRIMARY_PALE}; border:1px solid ${PRIMARY}25;
          border-radius:100px; padding:7px 16px;
          font-size:11px; color:${PRIMARY};
          font-weight:600; letter-spacing:0.14em; text-transform:uppercase;
          margin-bottom:20px; white-space:nowrap;
        }
        .hero-headline { font-size:clamp(30px,5.5vw,80px) !important; line-height:1.06; color:${PRIMARY}; font-weight:700; margin-bottom:18px; }
        .hero-sub { font-size:clamp(13px,1.6vw,16px) !important; color:#4a5e78; line-height:1.9; max-width:520px; margin-bottom:28px; font-weight:300; }
        .hero-btns { display:flex; gap:12px; flex-wrap:wrap; }
        .hero-btn-primary { background:${PRIMARY}; color:#fff; border:none; padding:12px clamp(18px,3vw,32px); border-radius:6px; font-family:Poppins; font-weight:500; font-size:clamp(12px,1.4vw,14px); cursor:pointer; white-space:nowrap; }
        .hero-btn-secondary { background:transparent; color:${PRIMARY}; border:1.5px solid ${PRIMARY}; padding:12px clamp(18px,3vw,32px); border-radius:6px; font-family:Poppins; font-weight:500; font-size:clamp(12px,1.4vw,14px); cursor:pointer; white-space:nowrap; }
        .hero-stats { margin-top:clamp(24px,4vw,44px); display:flex; gap:clamp(16px,4vw,40px); flex-wrap:wrap; }
        .hero-stat-num { font-size:clamp(22px,3.2vw,36px); color:${PRIMARY}; font-weight:700; }
        .hero-stat-lbl { color:#888; font-size:11px; letter-spacing:0.5px; margin-top:2px; }
        .hero-img-card { position:relative; display:flex; justify-content:center; }
        .hero-img-wrap { width:clamp(220px,36vw,380px); height:clamp(270px,44vw,460px); border-radius:24px; overflow:hidden; box-shadow:0 32px 80px rgba(19,63,119,0.22); border:1px solid rgba(19,63,119,0.18); }
        .hero-img-wrap img { width:100%; height:100%; object-fit:cover; }
        .hero-badge { position:absolute; background:#fff; border-radius:12px; padding:clamp(9px,1.4vw,14px) clamp(12px,2vw,20px); box-shadow:0 12px 32px rgba(0,0,0,0.1); border:1px solid rgba(19,63,119,0.1); }
        .hero-badge-top { top:24px; left:clamp(-8px,-2vw,-24px); }
        .hero-badge-bottom { bottom:32px; right:clamp(-8px,-2vw,-24px); }

        /* ════ ABOUT ════ */
        .s-about { padding:clamp(48px,7vw,100px) clamp(1rem,5vw,2rem); background:#fff; }
        .s-about-inner {
          max-width:1280px; margin:0 auto;
          display:grid; grid-template-columns:1fr 1fr;
          gap:clamp(2rem,5vw,5rem); align-items:center;
        }
        .about-img-container { position:relative; }
        .about-img-wrap { border-radius:20px; overflow:hidden; aspect-ratio:4/5; }
        .about-img-wrap img { width:100%; height:100%; object-fit:cover; }
        .about-headline { font-size:clamp(26px,3.5vw,48px) !important; }
        .about-grid { margin-top:28px; display:grid; grid-template-columns:1fr 1fr; gap:16px; }
        .about-grid-item { display:flex; align-items:center; gap:10px; }
        .about-badge-overlay {
          position:absolute; bottom:24px; left:-16px;
          background:${PRIMARY}; color:#fff; border-radius:12px;
          padding:clamp(10px,1.5vw,16px) clamp(14px,2vw,22px);
        }

        /* ════ FOUNDER ════ */
        .s-founder {
          padding:clamp(48px,7vw,100px) clamp(1rem,5vw,2rem);
          background:${PRIMARY}; position:relative; overflow:hidden;
        }
        .s-founder-inner {
          max-width:1280px; margin:0 auto;
          display:grid; grid-template-columns:1fr 1.4fr;
          gap:clamp(3rem,5vw,6rem); align-items:center;
          position:relative; z-index:1;
        }

        /* ── FOUNDER IMAGE COLUMN (FIXED) ── */
        .founder-img-col {
          display:flex;
          justify-content:center;
          align-items:center;
          width:100%;
          min-width:0; /* prevents overflow in grid */
        }
        .founder-img-wrap {
          width:100%;
          max-width:340px;
          border-radius:20px;
          overflow:hidden;
          aspect-ratio:3/4;
          border:3px solid rgba(255,255,255,0.18);
          box-shadow:0 24px 64px rgba(0,0,0,0.35);
          flex-shrink:0;
        }
        .founder-img-wrap img {
          width:100%;
          height:100%;
          object-fit:cover;
          object-position:center top;
          display:block;
        }

        .founder-text-col { display:flex; flex-direction:column; justify-content:center; min-width:0; }
        .founder-headline { font-size:clamp(28px,4vw,52px) !important; }
        .founder-quote-text { font-size:clamp(14px,1.8vw,20px) !important; }
        .founder-label-row { display:flex; align-items:center; gap:8px; }
        .founder-quote-left { border-left:3px solid rgba(255,255,255,0.25); padding-left:20px; }

        /* ════ MVV ════ */
        .s-mvv { background:${CREAM}; padding:clamp(48px,7vw,120px) clamp(1rem,5vw,4rem); }
        .s-mvv-inner { max-width:1280px; margin:0 auto; }
        .mvv-header { display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:16px; margin-bottom:40px; }
        .mvv-headline { font-size:clamp(26px,4vw,62px) !important; }
        .mvv-tabs { display:flex; gap:clamp(14px,3vw,36px); border-bottom:1px solid rgba(19,63,119,0.1); overflow-x:auto; scrollbar-width:none; }
        .mvv-tabs::-webkit-scrollbar { display:none; }
        .mvv-grid { display:grid; grid-template-columns:1fr 1.2fr; gap:clamp(1.5rem,4vw,4rem); align-items:start; }
        .mvv-left-panel { background:${PRIMARY}; border-radius:4px; padding:clamp(28px,4vw,56px) clamp(22px,3.5vw,52px); position:relative; overflow:hidden; }
        .mvv-left-headline { font-size:clamp(24px,3vw,44px) !important; }
        .mvv-stat-grid { display:grid; grid-template-columns:1fr 1fr; gap:1px; background:rgba(19,63,119,0.06); }
        .mvv-stat-cell { background:#fff; padding:clamp(22px,3.5vw,44px) clamp(16px,2.5vw,36px); text-align:center; }
        .mvv-stat-num { font-size:clamp(30px,4vw,52px); color:${PRIMARY}; font-weight:700; }
        .mvv-quote-box { margin-top:16px; padding:clamp(16px,2.5vw,28px) clamp(18px,2.5vw,32px); background:#fff; border:1px solid rgba(19,63,119,0.08); border-radius:4px; border-left:3px solid ${GOLD}; }
        .mvv-quote-text { font-size:clamp(13px,1.5vw,17px) !important; }

        /* ════ CTA ════ */
        .s-cta { position:relative; overflow:hidden; }
        .s-cta-inner { position:relative; z-index:1; padding:clamp(48px,7vw,120px) clamp(1rem,5vw,4rem); max-width:1350px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:clamp(2rem,5vw,5rem); align-items:center; }
        .cta-headline { font-size:clamp(28px,4.5vw,72px) !important; }
        .cta-form-box { background:rgba(255,255,255,0.05); backdrop-filter:blur(15px); border:1px solid rgba(255,255,255,0.12); border-radius:4px; padding:clamp(24px,3.5vw,50px) clamp(20px,3vw,40px); }
        .cta-form-headline { font-size:clamp(18px,2.2vw,30px) !important; }
        .cta-input { width:100%; background:rgba(255,255,255,0.07); border:1px solid rgba(255,255,255,0.14); border-radius:2px; padding:12px 14px; color:#fff; font-family:Poppins; font-size:14px; outline:none; }

        /* ════ TEAM ════ */
        .s-team { padding:clamp(48px,7vw,100px) clamp(1rem,5vw,2rem); background:#fff; }
        .s-team-inner { max-width:1280px; margin:0 auto; }
        .team-headline { font-size:clamp(28px,4vw,52px) !important; }
        .team-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:clamp(14px,2vw,28px); }
        .team-card { border-radius:16px; overflow:hidden; background:#f7f9fc; border:1px solid rgba(19,63,119,0.1); box-shadow:0 4px 20px rgba(0,0,0,0.05); transition:transform 0.3s,box-shadow 0.3s; cursor:default; }
        .team-card:hover { transform:translateY(-6px); box-shadow:0 20px 50px rgba(19,63,119,0.18); }
        .team-card-img { height:clamp(160px,20vw,230px); overflow:hidden; }
        .team-card-img img { width:100%; height:100%; object-fit:cover; transition:transform 0.4s; }
        .team-card:hover .team-card-img img { transform:scale(1.07); }
        .team-card-body { padding:clamp(14px,1.8vw,22px) clamp(12px,1.6vw,20px); }
        .team-card-name { font-size:clamp(15px,1.8vw,22px) !important; }

        /* ════════════════════════
           ≤ 1024px TABLET
        ════════════════════════ */
        @media (max-width:1024px){
          .s-hero-inner { grid-template-columns:1.1fr 0.9fr; padding:3.5rem 2rem; gap:2rem; align-items:center; }
          .hero-img-wrap { width:clamp(180px,28vw,280px); height:clamp(220px,34vw,340px); }
          .hero-badge { display:none; }
          .hero-sub { max-width:480px; }
          .hero-eyebrow-pill { font-size:10px; }
          .hero-headline { font-size:clamp(28px,4vw,48px) !important; }

          .s-about { padding:3.5rem 2rem; }
          .s-about-inner { grid-template-columns:0.9fr 1.1fr; gap:2.5rem; align-items:center; }
          .about-img-container { max-width:100%; width:100%; }
          .about-img-wrap { aspect-ratio:4/5; border-radius:16px; }
          .about-badge-overlay { left:-8px; bottom:16px; padding:10px 16px; }
          .about-deco-border { display:none !important; }
          .about-headline { font-size:clamp(24px,3vw,36px) !important; }

          /* FOUNDER TABLET */
          .s-founder { padding:3.5rem 2rem; }
          .s-founder-inner { grid-template-columns:1fr 1.4fr; gap:2.5rem; align-items:center; }
          .founder-img-col { justify-content:center; }
          .founder-img-wrap { max-width:260px; width:100%; }
          .founder-headline { font-size:clamp(26px,3.5vw,40px) !important; }

          .mvv-grid { grid-template-columns:1fr; }
          .s-cta-inner { grid-template-columns:1fr; gap:2.5rem; }
          .team-grid { grid-template-columns:repeat(2,1fr); }
        }

        /* ════════════════════════
           ≤ 768px LARGE PHONE
        ════════════════════════ */
        @media (max-width:768px){
          .s-picbanner { height:clamp(300px,60vw,420px); }

          .s-hero-inner { grid-template-columns:1fr; padding:3rem 1.5rem 2.5rem; text-align:center; gap:2rem; }
          .hero-img-card { justify-content:center; }
          .hero-img-wrap { width:clamp(200px,60vw,300px); height:clamp(240px,72vw,360px); }
          .hero-badge { display:none; }
          .hero-btns { justify-content:center; }
          .hero-stats { justify-content:center; gap:1.5rem; }
          .hero-sub { max-width:480px !important; margin-left:auto; margin-right:auto; }
          .hero-eyebrow-pill { font-size:9.5px; letter-spacing:0.11em; padding:5px 12px; margin-left:auto; margin-right:auto; }
          .hero-headline { font-size:clamp(26px,6.5vw,40px) !important; }

          .s-about { padding:2.5rem 1.5rem; }
          .s-about-inner { grid-template-columns:0.9fr 1.1fr; gap:2rem; align-items:center; }
          .about-img-container { max-width:100%; width:100%; order:0; }
          .about-img-wrap { aspect-ratio:4/5; border-radius:16px; }
          .about-badge-overlay { position:absolute; left:-8px; bottom:16px; padding:10px 16px; }
          .about-deco-border { display:none !important; }
          .about-headline { font-size:clamp(20px,3.5vw,30px) !important; }

          /* FOUNDER 768px — full width landscape */
          .s-founder { padding:2.5rem 1.5rem; }
          .s-founder-inner { grid-template-columns:1fr; gap:2rem; align-items:center; }
          .founder-img-col { justify-content:center; width:100%; }
          .founder-img-wrap { width:100%; max-width:100%; margin:0; aspect-ratio:4/3; border-radius:16px; }
          .founder-text-col { text-align:left; }
          .founder-label-row { justify-content:flex-start; }
          .founder-quote-left { border-left:3px solid rgba(255,255,255,0.25); padding-left:20px; text-align:left; }
          .founder-headline { font-size:clamp(22px,4vw,34px) !important; }
          .founder-quote-text { font-size:clamp(12px,2vw,15px) !important; }

          .s-mvv { padding:2.5rem 1.5rem; }
          .mvv-header { flex-direction:column; align-items:flex-start; gap:12px; margin-bottom:28px; }
          .mvv-headline { font-size:clamp(24px,5.5vw,36px) !important; }
          .mvv-tabs { gap:14px; }
          .mvv-tab { font-size:13px; padding:10px 0; }
          .mvv-left-panel { padding:22px 20px; }
          .mvv-left-headline { font-size:clamp(20px,5vw,30px) !important; }
          .mvv-stat-cell { padding:18px 12px; }
          .mvv-stat-num { font-size:clamp(26px,6vw,36px) !important; }
          .mvv-quote-box { padding:14px 16px; }
          .mvv-quote-text { font-size:13px !important; }

          .s-cta-inner { padding:2.5rem 1.5rem; }
          .cta-headline { font-size:clamp(26px,6.5vw,38px) !important; }
          .cta-form-box { padding:20px 18px; }
          .cta-form-headline { font-size:clamp(17px,4.5vw,22px) !important; }

          .s-team { padding:2.5rem 1.5rem; }
          .team-headline { font-size:clamp(24px,5.5vw,34px) !important; }
          .team-card-img { height:clamp(140px,26vw,180px); }
        }

        /* ════════════════════════
           ≤ 465px SMALL PHONE
        ════════════════════════ */
        @media (max-width:465px){
          .s-about-inner { grid-template-columns:1fr; gap:1.5rem; }
          .about-img-container { max-width:100%; width:100%; order:-1; }
          .about-img-wrap { aspect-ratio:4/5; border-radius:14px; }
          .about-badge-overlay {
            position:static;
            display:inline-flex;
            gap:10px;
            align-items:center;
            border-radius:10px;
            margin-top:12px;
            padding:10px 18px;
          }

          /* FOUNDER 465px — stacked, full width image */
          .s-founder-inner {
            grid-template-columns:1fr;
            gap:1.5rem;
          }
          .founder-img-col {
            justify-content:center;
            width:100%;
          }
          .founder-img-wrap {
            width:100%;
            max-width:100%;
            margin:0;
            border-radius:16px;
          }
          .founder-text-col { text-align:left; width:100%; }
          .founder-label-row { justify-content:flex-start; }
          .founder-headline { font-size:clamp(22px,7vw,30px) !important; }
          .founder-quote-text { font-size:13px !important; }
        }

        /* ════════════════════════
           ≤ 600px PHONE
        ════════════════════════ */
        @media (max-width:600px){
          .s-picbanner { height:clamp(260px,70vw,350px); }
          .banner-tag { display:none; }

          .s-hero-inner { padding:2rem 1rem; gap:1.5rem; }
          .hero-eyebrow-pill { font-size:8.5px; letter-spacing:0.1em; padding:5px 10px; }
          .hero-headline { font-size:clamp(26px,8vw,38px) !important; }
          .hero-img-wrap { width:clamp(160px,70vw,260px); height:clamp(190px,84vw,310px); }
          .hero-btn-secondary { display:none; }
          .hero-btn-primary { width:100%; text-align:center; }
          .hero-btns { width:100%; }
          .hero-stats { gap:14px; }

          .s-about { padding:2rem 1rem; }
          .about-grid { grid-template-columns:1fr 1fr; gap:10px; margin-top:18px; }
          .about-headline { font-size:clamp(22px,7vw,32px) !important; }

          .s-founder { padding:2rem 1rem; }
          .s-founder-inner { grid-template-columns:1fr; gap:1.5rem; }
          .founder-img-wrap { width:100%; max-width:100%; border-radius:14px; }
          .founder-headline { font-size:clamp(22px,7vw,32px) !important; }
          .founder-quote-text { font-size:13px !important; }

          .s-mvv { padding:2rem 1rem; }
          .mvv-headline { font-size:clamp(22px,7vw,32px) !important; }

          .s-cta-inner { padding:2rem 1rem; gap:1.5rem; }
          .cta-headline { font-size:clamp(24px,7.5vw,34px) !important; }
          .cta-input { font-size:13px; padding:10px 12px; }

          .s-team { padding:2rem 1rem; }
          .team-grid { grid-template-columns:1fr 1fr; gap:10px; }
          .team-card-img { height:clamp(120px,30vw,160px); }
          .team-card-body { padding:12px 10px; }
          .team-card-name { font-size:13px !important; }
          .team-headline { font-size:clamp(22px,7vw,32px) !important; }
        }

        /* ════════════════════════
           ≤ 400px SMALL PHONE
        ════════════════════════ */
        @media (max-width:400px){
          .s-picbanner { height:clamp(220px,75vw,280px); }
          .hero-eyebrow-pill { font-size:8px; letter-spacing:0.08em; padding:4px 9px; }
          .hero-headline { font-size:clamp(22px,8.5vw,30px) !important; }
          .hero-stats { flex-wrap:wrap; gap:10px; }
          .hero-img-wrap { width:clamp(140px,72vw,220px); height:clamp(168px,86vw,264px); }
          .about-grid { grid-template-columns:1fr 1fr; }
          .founder-img-wrap { width:100%; max-width:100%; }
          .team-grid { grid-template-columns:1fr 1fr; gap:8px; }
          .team-card-img { height:110px; }
          .mvv-left-panel { padding:18px 16px; }
          .cta-form-box { padding:18px 14px; }
        }

        @media (hover:none){
          .team-card:hover { transform:none; box-shadow:0 4px 20px rgba(0,0,0,0.05); }
          .team-card:hover .team-card-img img { transform:none; }
        }
      `}</style>

      {/* ─── PICTURE BANNER ─── */}
      <section className="s-picbanner">
        <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=85" alt="Eminentia Consulting" />
        <div className="s-picbanner-overlay" />
        <div className="s-picbanner-content">
          <div className="s-picbanner-inner">
            <div className="fp banner-breadcrumb" style={{ display:"flex", alignItems:"center", gap:8, marginBottom:16, color:"rgba(255,255,255,0.45)", fontSize:12, letterSpacing:1 }}>
              <span>Home</span><span style={{ color:GOLD }}>›</span><span style={{ color:"rgba(255,255,255,0.7)" }}>About Us</span>
            </div>
            <div className="fp banner-tag" style={{ display:"inline-flex", alignItems:"center", gap:8, border:`1px solid ${GOLD}55`, borderRadius:100, padding:"5px 14px", fontSize:10, color:GOLD, fontWeight:600, letterSpacing:3, textTransform:"uppercase", marginBottom:14 }}>
              🌐 &nbsp;Trusted Offshore Staffing Partner
            </div>
            <h2 className="fg" style={{ color:"#fff", fontWeight:700, lineHeight:1.05, marginBottom:12, maxWidth:700, fontSize:"clamp(22px,6vw,76px)" }}>
              About <span style={{ color:GOLD }}>Eminentia Consulting</span>
            </h2>
            <p className="fp" style={{ color:"rgba(255,255,255,0.58)", lineHeight:1.8, fontWeight:300, marginBottom:24, fontSize:"clamp(12px,1.8vw,15px)", maxWidth:"min(580px,100%)" }}>
              More than a staffing company — we are your offshore team extension. For over half a decade, we've helped CPA firms and corporates strengthen operations with top-notch professionals in Audit, Accounting, and Taxation.
            </p>
            <div style={{ display:"flex", alignItems:"center", gap:16, flexWrap:"wrap" }}>
              <div style={{ width:40, height:2, background:GOLD, borderRadius:2 }} />
              <span className="fp" style={{ color:"rgba(255,255,255,0.4)", fontSize:"clamp(9px,1.3vw,11px)", letterSpacing:"0.16em", textTransform:"uppercase" }}>
                Flexibility · Reliability · Cost-Effectiveness
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT US ─── */}
      <section className="s-about">
        <div className="s-about-inner">
          <FadeIn dir="left">
            <div className="about-img-container">
              <div className="about-img-wrap">
                <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80" alt="Eminentia Consulting Team" />
              </div>
              <div
                className="about-deco-border"
                style={{ position:"absolute", top:-16, left:-16, width:"60%", height:"60%", border:`2px dashed ${PRIMARY}30`, borderRadius:20, zIndex:-1 }}
              />
              <div className="about-badge-overlay">
                <div className="fg" style={{ fontSize:26, fontWeight:700 }}>5+</div>
                <div className="fp" style={{ fontSize:11, opacity:0.8, marginTop:2 }}>Years of Excellence</div>
              </div>
            </div>
          </FadeIn>
          <FadeIn dir="right" delay={0.1}>
            <div>
              <div className="fp" style={{ color:PRIMARY, fontSize:11, letterSpacing:4, textTransform:"uppercase", fontWeight:600, marginBottom:14, display:"flex", alignItems:"center", gap:8 }}>
                <span style={{ width:28, height:1, background:PRIMARY, display:"inline-block" }} /> About Eminentia Consulting
              </div>
              <h2 className="fg about-headline" style={{ color:PRIMARY, fontWeight:700, lineHeight:1.1, marginBottom:18 }}>
                More Than a Staffing<br />Company — Your Team Extension
              </h2>
              <p className="fp" style={{ color:"#5a6b79", lineHeight:1.9, marginBottom:14, fontWeight:300, fontSize:15 }}>
                When Eminentia Consulting started, we saw a gap in how CPA firms managed staffing. Full-time hires for specialised tasks created overhead, and outsourcing lacked the integration and accountability businesses needed. That's when we decided to offer a different model — dedicated offshore staffing services.
              </p>
              <p className="fp" style={{ color:"#5a6b79", lineHeight:1.9, fontWeight:300, fontSize:15 }}>
                Today, with over 400 satisfied global clients, we are proud to be a trusted partner for firms seeking to optimise costs without compromising quality. Our offshore professionals work exclusively for you, following your processes, timelines, and quality standards.
              </p>
              <div className="about-grid">
                {[["Audit","Assurance Staffing"],["Account","Bookkeeping Support"],["Tax","Preparation & Compliance"],["400+","Happy Global Clients"]].map(([n,l]) => (
                  <div key={l} className="about-grid-item">
                    <div style={{ width:38, height:38, borderRadius:8, background:PRIMARY_PALE, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                      <span style={{ fontSize:9, color:PRIMARY, fontWeight:700, fontFamily:"Poppins", textAlign:"center", lineHeight:1.2 }}>{n}</span>
                    </div>
                    <span className="fp" style={{ fontSize:13, color:"#4a5e78" }}>{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── FOUNDER / LEADERSHIP ─── */}
      <section className="s-founder">
        <div className="s-founder-inner">
          <FadeIn dir="left">
            <div className="founder-img-col">
              <div className="founder-img-wrap">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80" alt="Leadership" />
              </div>
            </div>
          </FadeIn>
          <FadeIn dir="right" delay={0.1}>
            <div className="founder-text-col">
              <div className="fp founder-label-row" style={{ color:"rgba(255,255,255,0.55)", fontSize:11, letterSpacing:4, textTransform:"uppercase", fontWeight:600, marginBottom:14 }}>
                <span style={{ width:24, height:1, background:"rgba(255,255,255,0.4)", display:"inline-block", marginRight:8, flexShrink:0 }} />
                Our Leadership
              </div>
              <h2 className="fg founder-headline" style={{ color:"#fff", fontWeight:700, lineHeight:1.1, marginBottom:6 }}>
                A Partner You<br />Can Rely On
              </h2>
              <div className="fp" style={{ color:"rgba(255,255,255,0.5)", marginBottom:20, fontSize:13 }}>
                Eminentia Consulting Leadership
              </div>
              <div className="founder-quote-left">
                <p className="fg founder-quote-text" style={{ color:"rgba(255,255,255,0.9)", lineHeight:1.75, fontWeight:400, margin:0 }}>
                  "We don't just fill positions — we build lasting relationships. Our offshore teams are carefully selected to match your exact requirements, ensuring professionals who understand the technical side and blend seamlessly with your company culture."
                </p>
              </div>
              <p className="fp" style={{ color:"rgba(255,255,255,0.6)", lineHeight:1.85, fontSize:14, fontWeight:300, marginTop:20 }}>
                We understand that your success depends on accuracy, timeliness, and trust — and that's exactly what we bring to the table. Whether you are handling multiple client accounts or aiming to streamline your financial processes, Eminentia Consulting is here every step of the way.
              </p>
              <div style={{ display:"flex", gap:24, marginTop:24, flexWrap:"wrap" }}>
                {[["400+","Global Clients"],["5+","Years"],["3x","Cost Savings"]].map(([n,l]) => (
                  <div key={l}>
                    <div className="fg" style={{ fontSize:"clamp(20px,3vw,28px)", color:"#fff", fontWeight:700 }}>{n}</div>
                    <div className="fp" style={{ fontSize:11, color:"rgba(255,255,255,0.5)", marginTop:2 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── MVV ─── */}
      <section className="s-mvv">
        <div className="s-mvv-inner">
          <Reveal>
            <div className="mvv-header">
              <div>
                <div className="fp" style={{ color:PRIMARY, fontSize:11, letterSpacing:4, textTransform:"uppercase", fontWeight:600, marginBottom:10 }}>Our Purpose</div>
                <h2 className="fg mvv-headline" style={{ color:PRIMARY, fontWeight:700, lineHeight:1.05, margin:0 }}>
                  Mission, Vision<br />&amp; Values
                </h2>
              </div>
              <div className="mvv-tabs">
                {mvvData.map((m,i) => (
                  <button key={m.tab} className={`mvv-tab${mvvIdx===i?" active":""}`} onClick={()=>switchTab(i)}>{m.tab}</button>
                ))}
              </div>
            </div>
          </Reveal>
          <div key={mvvIdx} className="mvv-grid" style={{ opacity:tabAnim?1:0, transform:tabAnim?"translateY(0)":"translateY(20px)", transition:"all 0.4s ease" }}>
            <div className="mvv-left-panel">
              <div style={{ position:"absolute", top:-30, right:-30, width:160, height:160, borderRadius:"50%", background:"rgba(255,255,255,0.04)" }} />
              <div style={{ position:"relative", zIndex:1 }}>
                <h3 className="fg mvv-left-headline" style={{ color:"#fff", fontWeight:700, lineHeight:1.1, marginBottom:18 }}>{mvvData[mvvIdx].heading}</h3>
                <div style={{ width:44, height:1, background:GOLD, marginBottom:22 }} />
                <p className="fp" style={{ color:"rgba(255,255,255,0.6)", fontSize:14, lineHeight:1.9, fontWeight:300 }}>{mvvData[mvvIdx].body}</p>
              </div>
            </div>
            <div style={{ paddingTop:"0.25rem" }}>
              {mvvData[mvvIdx].pillars ? (
                <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                  {mvvData[mvvIdx].pillars.map(({icon,t,d}) => (
                    <div key={t} style={{ display:"flex", gap:14, alignItems:"flex-start", padding:"18px 20px", background:"#fff", border:"1px solid rgba(19,63,119,0.08)", borderRadius:4 }}>
                      <div style={{ width:42, height:42, borderRadius:4, background:PP, display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, flexShrink:0 }}>{icon}</div>
                      <div>
                        <div className="fg" style={{ fontSize:17, color:PRIMARY, fontWeight:600, marginBottom:4 }}>{t}</div>
                        <div className="fp" style={{ fontSize:13, color:"#777", lineHeight:1.7, fontWeight:300 }}>{d}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mvv-stat-grid">
                  {mvvData[mvvIdx].extras.map(({n,l}) => (
                    <div key={l} className="mvv-stat-cell">
                      <div className="fg mvv-stat-num">{n}</div>
                      <div className="fp" style={{ fontSize:12, color:"#888", marginTop:6, letterSpacing:"0.08em" }}>{l}</div>
                    </div>
                  ))}
                </div>
              )}
              <div className="mvv-quote-box">
                <p className="fg mvv-quote-text" style={{ color:"#4a5e78", lineHeight:1.7, fontWeight:400 }}>
                  {[
                    '"We empower firms with the right offshore experts — enabling higher efficiency, lower overhead, and continuous growth."',
                    '"Our vision: to be the most trusted offshore staffing partner for CPA firms and businesses across the globe."',
                    '"Integrity in every engagement is not optional. It is the only practice that builds trust over the long run."',
                  ][mvvIdx]}
                </p>
                <div className="fp" style={{ fontSize:11, color:"#aaa", marginTop:12, letterSpacing:"0.1em", textTransform:"uppercase" }}>— Eminentia Consulting Leadership</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="s-cta">
        <div style={{ position:"absolute", inset:0 }}>
          <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80" alt="" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
          <div style={{ position:"absolute", inset:0, background:`linear-gradient(to right,${PD}f5 40%,${PD}bb 100%)` }} />
        </div>
        <div className="s-cta-inner">
          <Reveal x={-30} y={0}>
            <div>
              <div className="fp" style={{ color:GOLD, fontSize:11, letterSpacing:4, textTransform:"uppercase", fontWeight:600, marginBottom:14 }}>Get Started</div>
              <h2 className="fg cta-headline" style={{ color:"#fff", fontWeight:700, lineHeight:1.05, marginBottom:16 }}>
                Ready to Scale<br />Your Firm?
              </h2>
              <p className="fp" style={{ color:"rgba(255,255,255,0.5)", fontSize:14, lineHeight:1.85, fontWeight:300, maxWidth:400 }}>
                Connect with our offshore staffing experts today — tell us your requirements and we'll guide you step-by-step to build the right team for Audit, Accounting, and Tax.
              </p>
            </div>
          </Reveal>
          <Reveal x={30} y={0} delay={0.15}>
            <div className="cta-form-box">
              <h3 className="fg cta-form-headline" style={{ color:"#fff", fontWeight:700, marginBottom:22 }}>Let's Connect Today</h3>
              <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
                {[["Full Name","text","John Anderson"],["Company Name","text","Anderson CPA Firm"],["Service Required","text","Audit / Accounting / Tax / Not Sure"]].map(([label,type,ph]) => (
                  <div key={label}>
                    <label className="fp" style={{ fontSize:10, color:"rgba(255,255,255,0.4)", letterSpacing:"0.14em", textTransform:"uppercase", display:"block", marginBottom:6 }}>{label}</label>
                    <input type={type} placeholder={ph} className="cta-input" />
                  </div>
                ))}
                <button style={{ background:"#fff", color:PRIMARY, marginTop:6, padding:"14px", width:"100%", fontSize:14, letterSpacing:"0.06em", border:"none", cursor:"pointer", fontFamily:"Poppins", fontWeight:600, borderRadius:2 }}>
                  Build My Offshore Team →
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section className="s-team">
        <div className="s-team-inner">
          <FadeIn>
            <div style={{ textAlign:"center", marginBottom:40 }}>
              <div className="fp" style={{ color:PRIMARY, fontSize:11, letterSpacing:5, textTransform:"uppercase", fontWeight:600, marginBottom:12 }}>Our People</div>
              <h2 className="fg team-headline" style={{ color:PRIMARY, fontWeight:700, marginBottom:0 }}>Meet the Team</h2>
              <p className="fp" style={{ color:"#6b7a8a", fontSize:14, marginTop:12, maxWidth:480, margin:"12px auto 0", fontWeight:300 }}>
                Skilled CAs, CPAs, and finance professionals — all united by one goal: your firm's growth.
              </p>
            </div>
          </FadeIn>
          <div className="team-grid">
            {teamMembers.map((member,i) => (
              <FadeIn key={member.name} delay={i*0.1}>
                <div className="team-card">
                  <div className="team-card-img">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="team-card-body">
                    <h3 className="fg team-card-name" style={{ color:PRIMARY, fontWeight:600, marginBottom:3 }}>{member.name}</h3>
                    <div className="fp" style={{ color:PRIMARY_LIGHT, fontSize:11, fontWeight:500, marginBottom:7 }}>{member.role}</div>
                    <p className="fp" style={{ color:"#888", fontSize:12, lineHeight:1.65, fontWeight:300, margin:0 }}>{member.bio}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}