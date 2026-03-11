import React, { useEffect, useRef, useState } from 'react';
import { FileText, Calculator, TrendingUp, ArrowRight, Check, Shield, Clock, Users, Award } from 'lucide-react';

const services = [
  {
    icon: FileText,
    number: '01',
    title: 'Company Registration',
    tagline: 'Incorporation & Setup',
    desc: 'Complete assistance in company incorporation including Private Limited, LLP, OPC, and Partnership firms with end-to-end support.',
    items: ['Name Approval & Reservation', 'Documentation & Filing', 'PAN & TAN Registration', 'Certificate of Incorporation', 'GST & other Registrations'],
    btn: 'Get Started',
    color: '#1e4fa3',
    light: '#eef3fc',
    shadow: 'rgba(30,79,163,0.25)',
  },
  {
    icon: Calculator,
    number: '02',
    title: 'Income Tax Filing',
    tagline: 'Tax Planning & Advisory',
    desc: 'Professional tax filing services for individuals and businesses with expert consultation to minimize your tax liability legally.',
    items: ['ITR-1 to ITR-7 Filing', 'Tax Planning & Advisory', 'TDS Return Filing', 'Tax Notice Handling', 'Refund Processing Support'],
    btn: 'File Now',
    color: '#133f77',
    light: '#eaf0f8',
    shadow: 'rgba(19,63,119,0.25)',
  },
  {
    icon: TrendingUp,
    number: '03',
    title: 'GST Services',
    tagline: 'Compliance & Returns',
    desc: 'Comprehensive GST solutions including registration, filing, compliance, and advisory services for seamless business operations.',
    items: ['GST Registration', 'Monthly/Quarterly Returns', 'GST Compliance Audit', 'Input Tax Credit Advisory', 'GST Notice & Appeal'],
    btn: 'Learn More',
    color: '#0d3561',
    light: '#e6edf5',
    shadow: 'rgba(13,53,97,0.25)',
  },
];

const stats = [
  { icon: Users,  value: '500+', label: 'Clients Served' },
  { icon: Award,  value: '10+',  label: 'Years Experience' },
  { icon: Shield, value: '98%',  label: 'Satisfaction Rate' },
  { icon: Clock,  value: '24hr', label: 'Response Time' },
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
    <div className={`card-scene fade-rise ${visible ? 'show' : ''}`}
      style={{ transitionDelay: `${idx * 160 + 200}ms` }}>

      <div ref={cardRef} className="card-3d"
        style={{
          transform: hovered
            ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-10px)`
            : 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)',
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setTilt({ x:0, y:0 }); setHovered(false); }}>

        {/* SHADOW LAYERS */}
        <div className="sd sd1" style={{ background: s.color, opacity: hovered ? 0.22 : 0.1 }} />
        <div className="sd sd2" style={{ opacity: hovered ? 0.09 : 0.04 }} />

        {/* CARD */}
        <div className="card-face" style={{ '--col': s.color, '--light': s.light }}>

          {/* Top accent bar */}
          <div className="card-bar" style={{ background: s.color }} />

          {/* Header */}
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

          {/* Divider */}
          <div className="card-sep" style={{ background: `linear-gradient(to right, ${s.color}30, transparent)` }} />

          {/* Desc */}
          <p className="card-desc">{s.desc}</p>

          {/* Items */}
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

          {/* CTA */}
          <button className="card-cta" style={{
            background: hovered ? s.color : '#fff',
            color: hovered ? '#fff' : s.color,
            borderColor: `${s.color}55`,
            boxShadow: hovered ? `0 6px 20px ${s.shadow}` : 'none',
          }}>
            {s.btn} <ArrowRight size={14} />
          </button>

        </div>
      </div>
    </div>
  );
}

export default function SpecializedServices() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setVisible(true);
    }, { threshold: 0.04 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Inter:wght@300;400;500;600&display=swap');
    

        .svc-root {
          background: #f2f5fb;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .svc-root::before {
          content: '';
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background-image: radial-gradient(circle, rgba(19,63,119,0.055) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        .svc-root::after {
          content: '';
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background:
            radial-gradient(ellipse 700px 500px at 90% 0%, rgba(30,79,163,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 500px 400px at 0% 100%, rgba(13,53,97,0.05) 0%, transparent 60%);
        }

        .svc-wrap {
          max-width: 1280px; margin: 0 auto;
          padding: 80px 28px 96px;
          position: relative; z-index: 1;
        }

        /* ─── HEADER ─── */
        .svc-header {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 60px; align-items: center; margin-bottom: 60px;
        }
        @media(max-width:1280px){ .svc-header{ grid-template-columns:1fr; gap:28px; } }

        .svc-eyebrow {
          display: inline-flex; align-items: center; gap: 7px;
          font-size: 0.6rem; font-weight: 600; letter-spacing: 0.22em;
          text-transform: uppercase; color: #133f77;
          background: rgba(19,63,119,0.07); border: 1px solid rgba(19,63,119,0.14);
          padding: 5px 13px; border-radius: 100px; margin-bottom: 14px;
        }
        .eye-dot { width: 5px; height: 5px; border-radius: 50%; background: #133f77; }

        .svc-h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.4rem, 4vw, 3.7rem);
          font-weight: 700; color: #0b1f3a;
          line-height: 1.08; letter-spacing: -0.02em;
        }
        .svc-h1 i { font-style: italic; color: #1e4fa3; }

        .svc-para {
          font-size: 0.84rem; font-weight: 300;
          color: #64748b; line-height: 1.9; margin-bottom: 28px;
        }

        .svc-stats {
          display: grid; grid-template-columns: repeat(2,1fr);
          gap: 1px; border-radius: 14px; overflow: hidden;
          box-shadow: 0 0 0 1px rgba(19,63,119,0.12);
          background: rgba(19,63,119,0.1);
        }
        .svc-stat {
          background: #fff; padding: 14px 18px;
          display: flex; align-items: center; gap: 12px;
          transition: background 0.25s;
        }
        .svc-stat:hover { background: #f0f5ff; }
        .svc-si {
          width: 34px; height: 34px; border-radius: 10px;
          background: rgba(19,63,119,0.07);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .svc-sv {
          font-family: 'Playfair Display', serif;
          font-size: 1.45rem; font-weight: 700; color: #133f77; line-height: 1;
        }
        .svc-sl {
          font-size: 0.62rem; font-weight: 500; color: #94a3b8;
          text-transform: uppercase; letter-spacing: 0.1em; margin-top: 2px;
        }

        /* ─── CARDS GRID ─── */
        .svc-cards {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 22px;
          align-items: stretch;
        }
        @media(max-width:1280px){ .svc-cards{ grid-template-columns:1fr; } }
        @media(min-width:1280px) and (max-width:880px){ .svc-cards{ grid-template-columns:repeat(2,1fr); } }

        .card-scene { perspective: 900px; }

        .card-3d {
          position: relative;
          transition: transform 0.3s cubic-bezier(.23,1,.32,1);
          transform-style: preserve-3d;
          height: 100%;
        }

        /* Shadow layers */
        .sd {
          position: absolute; left: 8px; right: 8px;
          border-radius: 20px; pointer-events: none;
          transition: all 0.3s ease;
        }
        .sd1 { top: 12px; height: 100%; filter: blur(16px); z-index: 1; }
        .sd2 { top: 20px; height: 100%; background: #94a3b8; filter: blur(28px); z-index: 0; }
        .card-3d:hover .sd1 { top: 20px; left: 6px; right: 6px; }
        .card-3d:hover .sd2 { top: 32px; }

        /* Card face */
        .card-face {
          position: relative; z-index: 2;
          background: #ffffff;
          border-radius: 20px;
          border: 1px solid rgba(19,63,119,0.09);
          overflow: hidden;
          display: flex; flex-direction: column; gap: 0;
          height: 100%;
          box-shadow: 0 1px 2px rgba(0,0,0,0.03), 0 4px 14px rgba(19,63,119,0.05);
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .card-3d:hover .card-face {
          border-color: rgba(19,63,119,0.18);
          box-shadow: 0 2px 8px rgba(0,0,0,0.05), 0 12px 40px rgba(19,63,119,0.09);
        }

        /* Top color bar */
        .card-bar {
          height: 4px; width: 100%; flex-shrink: 0;
          opacity: 0.85;
        }

        /* Header area */
        .card-head {
          padding: 22px 24px 18px;
          display: flex; flex-direction: column; gap: 10px;
        }
        .card-head-row {
          display: flex; align-items: center; justify-content: space-between;
        }

        .card-icon {
          width: 46px; height: 46px; border-radius: 13px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: transform 0.35s cubic-bezier(.23,1,.32,1);
          position: relative;
        }
        .card-icon::after {
          content: ''; position: absolute; inset: 0; border-radius: 13px;
          background: linear-gradient(145deg, rgba(255,255,255,0.22), transparent);
        }
        .card-3d:hover .card-icon { transform: translateY(-4px) rotate(-5deg); }

        .card-num {
          font-family: 'Playfair Display', serif;
          font-size: 3rem; font-weight: 700;
          color: rgba(19,63,119,0.07);
          line-height: 1; letter-spacing: -0.05em;
          transition: color 0.3s; user-select: none;
        }
        .card-3d:hover .card-num { color: rgba(19,63,119,0.12); }

        .card-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.38rem; font-weight: 700;
          color: #0b1f3a; line-height: 1.2;
        }

        .card-pill {
          display: inline-flex; align-self: flex-start;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 0.15em; text-transform: uppercase;
          padding: 4px 10px; border-radius: 100px;
        }

        /* Separator */
        .card-sep { height: 1px; margin: 0 24px; flex-shrink: 0; }

        /* Desc */
        .card-desc {
          font-size: 0.76rem; font-weight: 300;
          color: #64748b; line-height: 1.82;
          padding: 16px 24px;
        }

        /* Items box */
        .card-items-box {
          margin: 0 16px;
          border-radius: 12px;
          padding: 14px 16px;
          display: flex; flex-direction: column; gap: 10px;
          flex: 1;
        }
        .card-items-title {
          font-size: 0.58rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.2em; opacity: 0.65;
        }
        .card-list { list-style: none; display: flex; flex-direction: column; gap: 7px; }
        .card-li {
          display: flex; align-items: center; gap: 9px;
          font-size: 0.73rem; font-weight: 400; color: #374151;
          transition: transform 0.2s, color 0.2s; cursor: default;
        }
        .card-li:hover { transform: translateX(4px); color: #0b1f3a; }
        .card-chk {
          width: 18px; height: 18px; flex-shrink: 0;
          border-radius: 50%; border: 1px solid;
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.2s;
        }
        .card-li:hover .card-chk { transform: scale(1.15); }

        /* CTA */
        .card-cta {
          margin: 14px 16px 18px;
          padding: 13px 20px;
          border-radius: 11px; border: 1.5px solid;
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem; font-weight: 600; letter-spacing: 0.04em;
          cursor: pointer; width: calc(100% - 32px);
          display: flex; align-items: center; justify-content: center; gap: 7px;
          transition: all 0.3s cubic-bezier(.23,1,.32,1);
          flex-shrink: 0;
        }
        .card-cta:hover { transform: translateY(-2px); }

        /* ─── BOTTOM BAND ─── */
        .svc-band {
          margin-top: 52px; background: #0b1f3a;
          border-radius: 16px; padding: 22px 34px;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 14px;
          box-shadow: 0 20px 60px rgba(11,31,58,0.22);
          position: relative; overflow: hidden;
        }
        .svc-band::after {
          content: ''; position: absolute; right: -50px; top: -50px;
          width: 180px; height: 180px; border-radius: 50%;
          background: rgba(30,79,163,0.22); filter: blur(55px);
          pointer-events: none;
        }
        .band-quote {
          font-family: 'Playfair Display', serif;
          font-size: 1.3rem; font-weight: 600; color: #fff; font-style: italic;
          position: relative;
        }
        .band-tags { display: flex; gap: 8px; flex-wrap: wrap; position: relative; }
        .band-tag {
          font-size: 0.62rem; font-weight: 500; letter-spacing: 0.12em;
          text-transform: uppercase; color: rgba(255,255,255,0.55);
          background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.1);
          padding: 5px 12px; border-radius: 100px;
        }

        /* ─── ANIMATIONS ─── */
        .fade-rise { opacity: 0; transform: translateY(34px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .fade-rise.show { opacity: 1; transform: translateY(0); }
      `}</style>

      <section ref={ref} className="svc-root">
        <div className="svc-wrap">

          {/* HEADER */}
          <div className={`svc-header fade-rise ${visible ? 'show' : ''}`}>
            <div>
              <div className="svc-eyebrow"><span className="eye-dot" /> What We Offer</div>
              <h2 className="svc-h1">Our <i>Specialized</i><br />Services</h2>
            </div>
            <div>
              <p className="svc-para">Expert solutions for your business compliance and tax requirements — trusted by 500+ clients across India with precision, integrity, and care.</p>
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

          {/* CARDS */}
          <div className="svc-cards">
            {services.map((s, idx) => (
              <Card3D key={idx} s={s} idx={idx} visible={visible} />
            ))}
          </div>

          {/* BAND */}
          <div className={`svc-band fade-rise ${visible ? 'show' : ''}`} style={{ transitionDelay: '540ms' }}>
            <div className="band-quote">"Trusted. Compliant. Always on time."</div>
            <div className="band-tags">
              {['ICAI Registered', 'CA-Led Team', 'Pan India', 'Confidential & Secure'].map((t, i) => (
                <span key={i} className="band-tag">{t}</span>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}