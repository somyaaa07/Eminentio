import React, { useEffect, useRef, useState } from 'react';
import { FileText, Calculator, TrendingUp, Shield, Users, Award, ArrowRight } from 'lucide-react';

const services = [
  { icon: FileText, title: 'Audit & Assurance Staffing', desc: 'Experienced audit associates for financial audits, compliance reviews, risk analyses, and assurance reporting — accurate results while relieving your internal teams.', num: '01' },
  { icon: Calculator, title: 'Accounting Staffing', desc: 'From bookkeeping to advanced financial reports, our accounting specialists manage it all with 100% accuracy, integrating seamlessly with your existing processes and systems.', num: '02' },
  { icon: TrendingUp, title: 'Tax Staffing', desc: 'Knowledgeable tax professionals who simplify compliance, filings, and planning. Expertise in both international and domestic tax practices to optimize your strategies.', num: '03' },
  { icon: Shield, title: 'Offshore CPA Staffing', desc: 'Dedicated offshore staffing solutions for CPA firms — reduce costs, enhance efficiency, and expand service capacity without any reduction in quality.', num: '04' },
  { icon: Users, title: 'Industry-Specific Staffing', desc: 'Specialized staffing for private entities across Software, Automotive, Retail, Healthcare, Manufacturing, and Hospitality sectors.', num: '05' },
  { icon: Award, title: 'Quality Assurance Staff', desc: 'Skilled QA professionals for private businesses requiring daily operations and long-term expansion support with global compliance standards.', num: '06' },
];

const ServiceCard = ({ service, idx, visible }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? hovered ? 'translateY(-6px)' : 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.65s ease ${idx * 100}ms, transform 0.4s ease, box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease`,
        background: hovered ? '#133f77' : '#ffffff',
        border: `1px solid ${hovered ? '#133f77' : '#e2eaf4'}`,
        borderRadius: '16px',
        padding: 'clamp(1.25rem, 3vw, 2rem)',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: hovered ? '0 24px 60px rgba(19,63,119,0.25), inset 0 1px 0 rgba(255,255,255,0.1)' : '0 2px 16px rgba(19,63,119,0.07)',
      }}
    >
      <div style={{ position: 'absolute', top: '-10px', right: '16px', fontSize: 'clamp(4rem, 8vw, 6rem)', fontFamily: '"Cormorant Garamond", serif', fontWeight: 900, color: hovered ? 'rgba(255,255,255,0.06)' : 'rgba(19,63,119,0.04)', lineHeight: 1, userSelect: 'none', transition: 'color 0.3s' }}>
        {service.num}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
        <span style={{ fontSize: '0.65rem', fontFamily: '"Poppins", sans-serif', fontWeight: 500, letterSpacing: '0.12em', color: hovered ? 'rgba(255,255,255,0.5)' : 'rgba(19,63,119,0.3)', transition: 'color 0.3s' }}>{service.num}</span>
      </div>
      <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 700, fontSize: 'clamp(1.2rem, 2.5vw, 1.45rem)', color: hovered ? '#ffffff' : '#133f77', marginBottom: '0.75rem', transition: 'color 0.3s', lineHeight: 1.2, letterSpacing: '0.01em' }}>{service.title}</h3>
      <div style={{ width: hovered ? '48px' : '24px', height: '1.5px', background: hovered ? 'rgba(255,255,255,0.5)' : 'rgba(19,63,119,0.2)', borderRadius: '2px', marginBottom: '1rem', transition: 'all 0.4s ease' }} />
      <p style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 300, fontSize: 'clamp(0.75rem, 1.5vw, 0.78rem)', color: hovered ? 'rgba(255,255,255,0.75)' : '#6b7e96', lineHeight: 1.85, marginBottom: '1.5rem', transition: 'color 0.3s' }}>{service.desc}</p>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: hovered ? '10px' : '6px', color: hovered ? 'rgba(255,255,255,0.9)' : '#133f77', fontFamily: '"Poppins", sans-serif', fontWeight: 600, fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', transition: 'all 0.3s ease' }}>
        Learn more
        <ArrowRight size={13} style={{ transform: hovered ? 'translateX(3px)' : 'none', transition: 'transform 0.3s' }} />
      </div>
    </div>
  );
};

const OurServices = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700;900&family=Poppins:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        .services-section { background: #f8fafc; padding: clamp(48px, 8vw, 96px) 0 clamp(56px, 9vw, 112px); position: relative; overflow: hidden; }
        .services-inner { max-width: 1280px; margin: 0 auto; padding: 0 clamp(16px, 4vw, 32px); position: relative; }
        .services-header { display: flex; flex-direction: column; align-items: center; text-align: center; margin-bottom: clamp(2.5rem, 5vw, 4rem); }
        .services-eyebrow { display: flex; align-items: center; gap: 10px; margin-bottom: 1.25rem; }
        .eyebrow-rule { width: 28px; height: 1px; background: rgba(19,63,119,0.3); flex-shrink: 0; }
        .eyebrow-label { font-family: "Poppins", sans-serif; font-weight: 500; font-size: 0.62rem; letter-spacing: 0.2em; color: #133f77; text-transform: uppercase; opacity: 0.6; white-space: nowrap; }
        .services-title { font-family: "Cormorant Garamond", serif; font-weight: 700; font-size: clamp(2.2rem, 5vw, 3.8rem); color: #133f77; letter-spacing: -0.01em; line-height: 1.1; margin: 0 0 1rem; }
        .services-subtitle { font-family: "Poppins", sans-serif; font-weight: 300; color: #6b7e96; font-size: clamp(0.78rem, 1.5vw, 0.82rem); max-width: 480px; line-height: 1.9; margin: 0; }
        .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: clamp(12px, 2vw, 24px); }
        .services-cta-wrap { text-align: center; margin-top: clamp(2rem, 4vw, 3.5rem); }
        .services-cta-btn { font-family: "Poppins", sans-serif; font-weight: 600; font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase; color: #ffffff; background: #133f77; border: none; border-radius: 8px; padding: clamp(11px, 1.5vw, 14px) clamp(24px, 3vw, 36px); cursor: pointer; display: inline-flex; align-items: center; gap: 10px; box-shadow: 0 8px 32px rgba(19,63,119,0.25); transition: all 0.3s ease; white-space: nowrap; }
        .services-cta-btn:hover { box-shadow: 0 12px 40px rgba(19,63,119,0.4); transform: translateY(-2px); }
        @media (max-width: 1024px) { .services-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 580px) { .services-grid { grid-template-columns: 1fr; gap: 12px; } }
        @media (max-width: 360px) { .services-cta-btn { width: 100%; justify-content: center; } }
      `}</style>

      <section ref={ref} className="services-section">
        <div style={{ position: 'absolute', inset: 0, opacity: 0.4, backgroundImage: 'radial-gradient(circle, rgba(19,63,119,0.12) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '-80px', left: '-60px', width: 'clamp(240px, 40vw, 480px)', height: 'clamp(240px, 40vw, 480px)', background: 'radial-gradient(circle, rgba(19,63,119,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-80px', right: '-60px', width: 'clamp(200px, 35vw, 400px)', height: 'clamp(200px, 35vw, 400px)', background: 'radial-gradient(circle, rgba(19,63,119,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="services-inner">
          <div className="services-header">
            <div className="services-eyebrow">
              <div className="eyebrow-rule" />
              <span className="eyebrow-label">What We Offer</span>
              <div className="eyebrow-rule" />
            </div>
            <h2 className="services-title">Our Staffing Solutions</h2>
            <p className="services-subtitle">
              From audit associates to tax specialists — our offshore staffing solutions ensure you always have access to the expertise your business needs.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, idx) => (
              <ServiceCard key={idx} service={service} idx={idx} visible={visible} />
            ))}
          </div>

          <div className="services-cta-wrap" style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(16px)', transition: 'all 0.6s ease 700ms' }}>
            <button className="services-cta-btn">
              Hire Offshore Staff Today
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;