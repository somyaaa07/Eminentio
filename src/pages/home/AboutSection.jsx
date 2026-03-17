import React, { useEffect, useRef, useState } from 'react';
import { Award, Users, Shield, Clock, CheckCircle, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  { icon: Award, title: 'Skilled on Demand', desc: 'Access auditors, accountants, tax specialists, and business support staff whenever you need them.' },
  { icon: Users, title: 'Seamless Integration', desc: 'Our staff becomes part of your extended team — tailored to your processes, tools, and culture.' },
  { icon: Shield, title: 'Global Standards', desc: 'Professionals equipped to deliver services aligned with international CPA and compliance benchmarks.' },
  { icon: Clock, title: 'Hourly Billing Model', desc: 'Pay only for the hours you need — complete flexibility and control over your staffing spend.' },
];

const stats = [
  { value: '5+', label: 'Years of Expertise' },
  { value: '400+', label: 'Clients Served' },
  { value: '60%', label: 'Cost Savings' },
  { value: '3', label: 'Core Services' },
];

const badges = ['Audit & Assurance', 'Tax Specialists', 'Offshore CPA Staff', 'Scalable Teams'];

export default function AboutSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setVisible(true);
    }, { threshold: 0.06 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Poppins:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        .fade-up { opacity: 0; transform: translateY(32px); transition: opacity 0.8s cubic-bezier(.16,1,.3,1), transform 0.8s cubic-bezier(.16,1,.3,1); }
        .fade-up.visible { opacity: 1; transform: translateY(0); }
        .fade-left { opacity: 0; transform: translateX(-28px); transition: opacity 0.75s cubic-bezier(.16,1,.3,1), transform 0.75s cubic-bezier(.16,1,.3,1); }
        .fade-left.visible { opacity: 1; transform: translateX(0); }
        .fade-right { opacity: 0; transform: translateX(28px); transition: opacity 0.75s cubic-bezier(.16,1,.3,1), transform 0.75s cubic-bezier(.16,1,.3,1); }
        .fade-right.visible { opacity: 1; transform: translateX(0); }
        @media (max-width: 640px) { .fade-left, .fade-right { transform: translateY(24px); } .fade-left.visible, .fade-right.visible { transform: translateY(0); } }
        .img-wrap img { transition: transform 0.9s cubic-bezier(.16,1,.3,1); }
        .img-wrap:hover img { transform: scale(1.05); }
        .cta-btn { transition: all 0.3s cubic-bezier(.16,1,.3,1); position: relative; overflow: hidden; }
        .cta-btn::before { content: ''; position: absolute; inset: 0; background: rgba(255,255,255,0.12); transform: translateX(-100%); transition: transform 0.4s ease; }
        .cta-btn:hover::before { transform: translateX(0); }
        .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 16px 40px rgba(19,63,119,0.3); }
        .stat-item { transition: transform 0.3s ease; }
        .stat-item:hover { transform: translateY(-3px); }
        .divider-line { width: 0; height: 2px; background: linear-gradient(90deg, #133f77, rgba(19,63,119,0.15)); transition: width 1.2s cubic-bezier(.16,1,.3,1) 0.4s; }
        .divider-line.visible { width: 56px; }
        .number-large { font-family: 'Cormorant Garamond', serif; font-weight: 700; color: #133f77; line-height: 1; }
        .content-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start; margin-bottom: 64px; }
        .stats-bar { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: rgba(19,63,119,0.08); border-radius: 20px; overflow: hidden; margin-bottom: 56px; }
        .float-years { position: absolute; top: 20px; right: -16px; background: #fff; border-radius: 16px; padding: 14px 20px; box-shadow: 0 12px 40px rgba(19,63,119,0.16); text-align: center; min-width: 100px; z-index: 2; }
        .float-clients { position: absolute; bottom: 28px; left: -20px; background: #133f77; border-radius: 16px; padding: 14px 20px; box-shadow: 0 12px 40px rgba(19,63,119,0.3); text-align: center; min-width: 110px; z-index: 2; }
        @media (max-width: 1024px) { .content-grid { gap: 36px; } .float-years { right: -8px; } .float-clients { left: -8px; } }
        @media (max-width: 640px) { .content-grid { grid-template-columns: 1fr; gap: 40px; margin-bottom: 48px; } .stats-bar { grid-template-columns: repeat(2, 1fr); border-radius: 16px; margin-bottom: 40px; } .stat-item:nth-child(1) { border-radius: 15px 0 0 0 !important; } .stat-item:nth-child(2) { border-radius: 0 15px 0 0 !important; } .stat-item:nth-child(3) { border-radius: 0 0 0 15px !important; } .stat-item:nth-child(4) { border-radius: 0 0 15px 0 !important; } .float-years { top: 12px; right: 12px; min-width: 80px; padding: 10px 14px; } .float-clients { bottom: 16px; left: 12px; min-width: 88px; padding: 10px 14px; } }
        @media (max-width: 380px) { .float-years, .float-clients { display: none; } }
      `}</style>

      <section ref={ref} style={{ background: '#f4f7fb', fontFamily: 'Poppins, sans-serif', overflow: 'hidden', position: 'relative' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(48px, 8vw, 88px) clamp(16px, 5vw, 48px) clamp(40px, 6vw, 80px)', position: 'relative' }}>

          {/* Header */}
          <div className={`fade-up ${visible ? 'visible' : ''}`} style={{ marginBottom: 'clamp(40px, 6vw, 64px)', transitionDelay: '0ms' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <span style={{ display: 'inline-block', width: 32, height: 2, background: '#133f77', borderRadius: 2, flexShrink: 0 }} />
              <span style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#133f77' }}>Our Story</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.8rem)', color: '#0d1b2e', lineHeight: 1.08, margin: 0, letterSpacing: '-0.01em' }}>
                About Eminentia Consulting
              </h2>
              <p style={{ fontFamily: 'Poppins', fontWeight: 300, color: '#8a96a8', fontSize: '0.82rem', lineHeight: 1.8, maxWidth: 320, margin: 0, width: '100%' }}>
                Your trusted offshore staffing partner for CPA firms and private businesses — for over 5 years.
              </p>
            </div>
          </div>

          {/* Main Grid */}
          <div className="content-grid">
            {/* Left */}
            <div className={`fade-left ${visible ? 'visible' : ''}`} style={{ transitionDelay: '150ms' }}>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600, fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', color: '#0d1b2e', lineHeight: 1.3, marginBottom: 20, marginTop: 0 }}>
                Your Offshore Staffing Partner<br />Since Day One
              </h3>
              <p style={{ fontWeight: 300, color: '#5a6578', fontSize: 'clamp(0.8rem, 1.5vw, 0.84rem)', lineHeight: 1.95, marginBottom: 16, marginTop: 0 }}>
                At Eminentia Consulting, we understand that successful businesses require more than great ideas — they require talented team members. Our consultants help CPA firms and private businesses expand their teams with experienced experts in Audit & Assurance, Accounting, and Taxation.
              </p>
              <p style={{ fontWeight: 300, color: '#5a6578', fontSize: 'clamp(0.8rem, 1.5vw, 0.84rem)', lineHeight: 1.95, marginBottom: 36, marginTop: 0 }}>
                Instead of hiring costly in-house teams, our clients tap into our pool of highly qualified experts as dedicated offshore staff — producing results with precision, consistency, and dedication.
              </p>

              {/* Badges */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 24px', marginBottom: 40 }}>
                {badges.map((b, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(19,63,119,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <CheckCircle size={11} color="#133f77" strokeWidth={2.5} />
                    </div>
                    <span style={{ fontWeight: 500, fontSize: '0.78rem', color: '#2d3748' }}>{b}</span>
                  </div>
                ))}
              </div>

<Link to ="/services/taxationStaffing">
              <button className="cta-btn" style={{ background: '#133f77', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: 50, padding: '13px 28px', fontFamily: 'Poppins', fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.04em', display: 'inline-flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap' }}>
                Explore Our Services
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </button>
              </Link>
            </div>

            {/* Right - Image */}
            <div className={`fade-right ${visible ? 'visible' : ''}`} style={{ transitionDelay: '250ms', position: 'relative' }}>
              <div className="img-wrap" style={{ borderRadius: 24, overflow: 'hidden', boxShadow: '0 30px 80px rgba(19,63,119,0.15), 0 8px 24px rgba(0,0,0,0.08)', position: 'relative' }}>
                <img src="https://images.pexels.com/photos/8927456/pexels-photo-8927456.jpeg" alt="Eminentia Consulting offshore team" style={{ width: '100%', height: 'clamp(240px, 40vw, 480px)', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '55%', background: 'linear-gradient(to top, rgba(13,27,46,0.72) 0%, transparent 100%)' }} />
                <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24 }}>
                  <div style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: '0.72rem', color: 'rgba(255,255,255,0.7)', marginBottom: 4 }}>Dedicated Offshore Professionals</div>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600, fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#fff', lineHeight: 1.2 }}>Committed to your firm's growth</div>
                </div>
              </div>

              <div className="float-years">
                <div className="number-large" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>5+</div>
                <div style={{ fontWeight: 500, fontSize: '0.65rem', color: '#8a96a8', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 2 }}>Years</div>
              </div>

              <div className="float-clients">
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#fff', lineHeight: 1 }}>400+</div>
                <div style={{ fontWeight: 500, fontSize: '0.65rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 2 }}>Clients</div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className={`stats-bar fade-up ${visible ? 'visible' : ''}`} style={{ transitionDelay: '350ms' }}>
            {stats.map((s, i) => (
              <div key={i} className="stat-item" style={{ background: '#fff', padding: 'clamp(18px, 3vw, 28px) clamp(12px, 2vw, 24px)', textAlign: 'center', margin: 1, borderRadius: i === 0 ? '19px 0 0 19px' : i === stats.length - 1 ? '0 19px 19px 0' : 0 }}>
                <div className="number-large" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.6rem)', marginBottom: 6 }}>{s.value}</div>
                <div style={{ fontWeight: 400, fontSize: 'clamp(0.62rem, 1.2vw, 0.73rem)', color: '#8a96a8', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{s.label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}