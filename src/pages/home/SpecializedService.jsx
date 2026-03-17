import React, { useEffect, useRef, useState } from 'react';
import { FileText, Calculator, TrendingUp, ArrowRight, Check, Shield, Clock, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
const services = [
  {
    icon: FileText,
    number: '01',
    title: 'Audit & Assurance Staffing',
    tagline: 'CPA Firm Support',
    desc: 'Experienced audit associates for financial audits, compliance reviews, risk analyses, and assurance reporting — relieving your internal teams while maintaining accuracy.',
    items: ['Financial Audit Support', 'Compliance Reviews', 'Risk Analysis', 'Assurance Reporting', 'Internal Controls Review'],
    btn: 'Hire Auditors',
    color: '#1e4fa3',
    light: '#eef3fc',
    shadow: 'rgba(30,79,163,0.25)',
    link:"/services/auditAssurance"
  },
  {
    icon: Calculator,
    number: '02',
    title: 'Accounting Staffing',
    tagline: 'Bookkeeping to Reporting',
    desc: 'From bookkeeping to advanced financial reports — our accounting specialists deliver 100% accuracy, integrating seamlessly with your processes and systems.',
    items: ['Full-Cycle Bookkeeping', 'Financial Reporting', 'Accounts Payable & Receivable', 'Bank Reconciliation', 'Month-End Close Support'],
    btn: 'Hire Accountants',
    color: '#133f77',
    light: '#eaf0f8',
    shadow: 'rgba(19,63,119,0.25)',
    link:"/services/accountingStaffing"
  },
  {
    icon: TrendingUp,
    number: '03',
    title: 'Tax Staffing',
    tagline: 'Compliance & Planning',
    desc: 'Knowledgeable tax professionals to simplify compliance, filings, and planning — with expertise in both domestic and international tax practices.',
    items: ['Tax Return Preparation', 'Compliance & Filings', 'Tax Planning & Advisory', 'International Tax Support', 'Estimated Tax Payments'],
    btn: 'Hire Tax Staff',
    color: '#0d3561',
    light: '#e6edf5',
    shadow: 'rgba(13,53,97,0.25)',
    link:"/services/taxationStaffing"
  },
];

const stats = [
  { icon: Users,  value: '400+', label: 'Clients Served' },
  { icon: Award,  value: '5+',   label: 'Years Experience' },
  { icon: Shield, value: '60%',  label: 'Cost Savings' },
  { icon: Clock,  value: 'Hourly', label: 'Billing Model' },
];

function Card3D({ s, idx, visible }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const dx = (e.clientX - rect.left - rect.width  / 2) / (rect.width  / 2);
    const dy = (e.clientY - rect.top  - rect.height / 2) / (rect.height / 2);
    setTilt({ x: dy * -12, y: dx * 14 });
  };

  return (
    <div className={`card-scene fade-rise ${visible ? 'show' : ''}`} style={{ transitionDelay: `${idx * 160 + 200}ms` }}>
      <div ref={cardRef} className="card-3d" style={{ transform: hovered ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-10px)` : 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)' }} onMouseMove={handleMouseMove} onMouseEnter={() => setHovered(true)} onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }}>
        <div className="sd sd1" style={{ background: s.color, opacity: hovered ? 0.22 : 0.1 }} />
        <div className="sd sd2" style={{ opacity: hovered ? 0.09 : 0.04 }} />
        <div className="card-face" style={{ '--col': s.color, '--light': s.light }}>
          <div className="card-bar" style={{ background: s.color }} />
          <div className="card-head">
            <div className="card-head-row">
              <div className="card-icon" style={{ background: s.color, boxShadow: `0 8px 20px ${s.shadow}` }}>
                <s.icon size={20} color="#fff" strokeWidth={1.8} />
              </div>
              <span className="card-num">{s.number}</span>
            </div>
            <h3 className="card-title">{s.title}</h3>
            <div className="card-pill" style={{ background: s.light, color: s.color }}>{s.tagline}</div>
          </div>
          <div className="card-sep" style={{ background: `linear-gradient(to right, ${s.color}30, transparent)` }} />
          <p className="card-desc">{s.desc}</p>
          <div className="card-items-box" style={{ background: s.light }}>
            <div className="card-items-title" style={{ color: s.color }}>What's included</div>
            <ul className="card-list">
              {s.items.map((item, i) => (
                <li key={i} className="card-li">
                  <span className="card-chk" style={{ borderColor: `${s.color}40`, background: '#fff' }}>
                    <Check size={9} strokeWidth={3.5} color={s.color} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Link to={s.link}>
          <button className="card-cta" style={{ background: hovered ? s.color : '#fff', color: hovered ? '#fff' : s.color, borderColor: `${s.color}55`, boxShadow: hovered ? `0 6px 20px ${s.shadow}` : 'none' }}>
            {s.btn} <ArrowRight size={14} />
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function SpecializedServices() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.04 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Inter:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        .svc-root { background: #f2f5fb; font-family: 'Inter', sans-serif; position: relative; overflow: hidden; }
        .svc-root::before { content: ''; position: absolute; inset: 0; pointer-events: none; z-index: 0; background-image: radial-gradient(circle, rgba(19,63,119,0.055) 1px, transparent 1px); background-size: 30px 30px; }
        .svc-root::after { content: ''; position: absolute; inset: 0; pointer-events: none; z-index: 0; background: radial-gradient(ellipse 700px 500px at 90% 0%, rgba(30,79,163,0.07) 0%, transparent 60%), radial-gradient(ellipse 500px 400px at 0% 100%, rgba(13,53,97,0.05) 0%, transparent 60%); }
        .svc-wrap { max-width: 1280px; margin: 0 auto; padding: clamp(48px, 7vw, 80px) clamp(16px, 4vw, 28px) clamp(56px, 8vw, 96px); position: relative; z-index: 1; }
        .svc-header { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(24px, 5vw, 60px); align-items: center; margin-bottom: clamp(36px, 5vw, 60px); }
        .svc-eyebrow { display: inline-flex; align-items: center; gap: 7px; font-size: 0.6rem; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase; color: #133f77; background: rgba(19,63,119,0.07); border: 1px solid rgba(19,63,119,0.14); padding: 5px 13px; border-radius: 100px; margin-bottom: 14px; }
        .eye-dot { width: 5px; height: 5px; border-radius: 50%; background: #133f77; flex-shrink: 0; }
        .svc-h1 { font-family: 'Playfair Display', serif; font-size: clamp(2rem, 4vw, 3.7rem); font-weight: 700; color: #0b1f3a; line-height: 1.08; letter-spacing: -0.02em; margin: 0; }
        .svc-h1 i { font-style: italic; color: #1e4fa3; }
        .svc-para { font-size: clamp(0.78rem, 1.4vw, 0.84rem); font-weight: 300; color: #64748b; line-height: 1.9; margin-bottom: 28px; margin-top: 0; }
        .svc-stats { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1px; border-radius: 14px; overflow: hidden; box-shadow: 0 0 0 1px rgba(19,63,119,0.12); background: rgba(19,63,119,0.1); }
        .svc-stat { background: #fff; padding: clamp(10px, 1.5vw, 14px) clamp(12px, 2vw, 18px); display: flex; align-items: center; gap: 12px; transition: background 0.25s; }
        .svc-stat:hover { background: #f0f5ff; }
        .svc-si { width: 34px; height: 34px; border-radius: 10px; background: rgba(19,63,119,0.07); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .svc-sv { font-family: 'Playfair Display', serif; font-size: clamp(1.1rem, 2vw, 1.45rem); font-weight: 700; color: #133f77; line-height: 1; }
        .svc-sl { font-size: 0.62rem; font-weight: 500; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.1em; margin-top: 2px; }
        .svc-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: clamp(14px, 2vw, 22px); align-items: stretch; }
        .card-scene { perspective: 900px; }
        .card-3d { position: relative; transition: transform 0.3s cubic-bezier(.23,1,.32,1); transform-style: preserve-3d; height: 100%; }
        .sd { position: absolute; left: 8px; right: 8px; border-radius: 20px; pointer-events: none; transition: all 0.3s ease; }
        .sd1 { top: 12px; height: 100%; filter: blur(16px); z-index: 1; }
        .sd2 { top: 20px; height: 100%; background: #94a3b8; filter: blur(28px); z-index: 0; }
        .card-3d:hover .sd1 { top: 20px; left: 6px; right: 6px; }
        .card-3d:hover .sd2 { top: 32px; }
        .card-face { position: relative; z-index: 2; background: #ffffff; border-radius: 20px; border: 1px solid rgba(19,63,119,0.09); overflow: hidden; display: flex; flex-direction: column; height: 100%; box-shadow: 0 1px 2px rgba(0,0,0,0.03), 0 4px 14px rgba(19,63,119,0.05); transition: border-color 0.3s, box-shadow 0.3s; }
        .card-3d:hover .card-face { border-color: rgba(19,63,119,0.18); box-shadow: 0 2px 8px rgba(0,0,0,0.05), 0 12px 40px rgba(19,63,119,0.09); }
        .card-bar { height: 4px; width: 100%; flex-shrink: 0; opacity: 0.85; }
        .card-head { padding: clamp(16px, 2.5vw, 22px) clamp(16px, 2.5vw, 24px) clamp(14px, 2vw, 18px); display: flex; flex-direction: column; gap: 10px; }
        .card-head-row { display: flex; align-items: center; justify-content: space-between; }
        .card-icon { width: 46px; height: 46px; border-radius: 13px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: transform 0.35s cubic-bezier(.23,1,.32,1); position: relative; }
        .card-icon::after { content: ''; position: absolute; inset: 0; border-radius: 13px; background: linear-gradient(145deg, rgba(255,255,255,0.22), transparent); }
        .card-3d:hover .card-icon { transform: translateY(-4px) rotate(-5deg); }
        .card-num { font-family: 'Playfair Display', serif; font-size: clamp(2rem, 3.5vw, 3rem); font-weight: 700; color: rgba(19,63,119,0.07); line-height: 1; letter-spacing: -0.05em; transition: color 0.3s; user-select: none; }
        .card-3d:hover .card-num { color: rgba(19,63,119,0.12); }
        .card-title { font-family: 'Playfair Display', serif; font-size: clamp(1.1rem, 2vw, 1.38rem); font-weight: 700; color: #0b1f3a; line-height: 1.2; margin: 0; }
        .card-pill { display: inline-flex; align-self: flex-start; font-size: 0.6rem; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; padding: 4px 10px; border-radius: 100px; white-space: nowrap; }
        .card-sep { height: 1px; margin: 0 clamp(14px, 2vw, 24px); flex-shrink: 0; }
        .card-desc { font-size: clamp(0.72rem, 1.3vw, 0.76rem); font-weight: 300; color: #64748b; line-height: 1.82; padding: clamp(12px, 2vw, 16px) clamp(16px, 2.5vw, 24px); margin: 0; }
        .card-items-box { margin: 0 clamp(10px, 1.5vw, 16px); border-radius: 12px; padding: clamp(10px, 1.5vw, 14px) clamp(10px, 1.5vw, 16px); display: flex; flex-direction: column; gap: 10px; flex: 1; }
        .card-items-title { font-size: 0.58rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.2em; opacity: 0.65; }
        .card-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 7px; }
        .card-li { display: flex; align-items: center; gap: 9px; font-size: clamp(0.68rem, 1.2vw, 0.73rem); font-weight: 400; color: #374151; transition: transform 0.2s, color 0.2s; cursor: default; }
        .card-li:hover { transform: translateX(4px); color: #0b1f3a; }
        .card-chk { width: 18px; height: 18px; flex-shrink: 0; border-radius: 50%; border: 1px solid; display: flex; align-items: center; justify-content: center; transition: transform 0.2s; }
        .card-li:hover .card-chk { transform: scale(1.15); }
        .card-cta { margin: clamp(10px, 1.5vw, 14px) clamp(10px, 1.5vw, 16px) clamp(12px, 1.8vw, 18px); padding: clamp(10px, 1.5vw, 13px) 20px; border-radius: 11px; border: 1.5px solid; font-family: 'Inter', sans-serif; font-size: 0.75rem; font-weight: 600; letter-spacing: 0.04em; cursor: pointer; width: calc(100% - clamp(20px, 3vw, 32px)); display: flex; align-items: center; justify-content: center; gap: 7px; transition: all 0.3s cubic-bezier(.23,1,.32,1); flex-shrink: 0; }
        .card-cta:hover { transform: translateY(-2px); }
        .svc-band { margin-top: clamp(32px, 5vw, 52px); background: #0b1f3a; border-radius: 16px; padding: clamp(18px, 3vw, 22px) clamp(20px, 4vw, 34px); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px; box-shadow: 0 20px 60px rgba(11,31,58,0.22); position: relative; overflow: hidden; }
        .svc-band::after { content: ''; position: absolute; right: -50px; top: -50px; width: 180px; height: 180px; border-radius: 50%; background: rgba(30,79,163,0.22); filter: blur(55px); pointer-events: none; }
        .band-quote { font-family: 'Playfair Display', serif; font-size: clamp(1rem, 2.5vw, 1.3rem); font-weight: 600; color: #fff; font-style: italic; position: relative; }
        .band-tags { display: flex; gap: 8px; flex-wrap: wrap; position: relative; }
        .band-tag { font-size: 0.62rem; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.55); background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.1); padding: 5px 12px; border-radius: 100px; white-space: nowrap; }
        .fade-rise { opacity: 0; transform: translateY(34px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .fade-rise.show { opacity: 1; transform: translateY(0); }
        @media (max-width: 1100px) { .svc-cards { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 768px) { .svc-header { grid-template-columns: 1fr; gap: clamp(20px, 4vw, 28px); } .svc-cards { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 580px) { .svc-cards { grid-template-columns: 1fr; } .card-3d { transform: none !important; transition: box-shadow 0.3s ease !important; } .svc-band { flex-direction: column; align-items: flex-start; } }
        @media (max-width: 360px) { .svc-stats { grid-template-columns: 1fr; } .band-tags { gap: 6px; } .band-tag { font-size: 0.58rem; padding: 4px 10px; } }
      `}</style>

      <section ref={ref} className="svc-root">
        <div className="svc-wrap">
          <div className={`svc-header fade-rise ${visible ? 'show' : ''}`}>
            <div>
              <div className="svc-eyebrow"><span className="eye-dot" /> Core Staffing Areas</div>
              <h2 className="svc-h1">Our <i>Specialized</i><br />Staffing Solutions</h2>
            </div>
            <div>
              <p className="svc-para">
                Expert offshore staffing for your CPA firm and business compliance needs — trusted by 400+ clients with precision, integrity, and cost-efficiency.
              </p>
              <div className="svc-stats">
                {stats.map((s, i) => (
                  <div key={i} className="svc-stat">
                    <div className="svc-si"><s.icon size={16} color="#133f77" /></div>
                    <div>
                      <div className="svc-sv">{s.value}</div>
                      <div className="svc-sl">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="svc-cards">
            {services.map((s, idx) => (
              <Card3D key={idx} s={s} idx={idx} visible={visible} />
            ))}
          </div>

          <div className={`svc-band fade-rise ${visible ? 'show' : ''}`} style={{ transitionDelay: '540ms' }}>
            <div className="band-quote">"Cost-effective. Reliable. Flexible — always."</div>
            <div className="band-tags">
              {['CPA Firm Specialists', 'Hourly Billing', 'Global Standards', 'Scalable Teams'].map((t, i) => (
                <span key={i} className="band-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}