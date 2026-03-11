import React, { useEffect, useRef, useState } from 'react';
import { FileText, Calculator, TrendingUp, Shield, Users, Award, ArrowRight } from 'lucide-react';

const services = [
  { icon: FileText, title: 'Tax Preparation', desc: 'Professional preparation of individual and business tax returns with maximum deductions identified.', num: '01' },
  { icon: Calculator, title: 'Tax Planning', desc: 'Strategic planning to minimize tax liability and optimize your financial position year-round.', num: '02' },
  { icon: TrendingUp, title: 'Business Tax', desc: 'Comprehensive tax solutions for businesses of all sizes, from early-stage startups to corporations.', num: '03' },
  { icon: Shield, title: 'IRS Representation', desc: 'Expert representation and advocacy in dealings with tax authorities and complex audits.', num: '04' },
  { icon: Users, title: 'Estate Planning', desc: 'Strategic estate and trust planning to protect your legacy and assets for future generations.', num: '05' },
  { icon: Award, title: 'Payroll Services', desc: 'Complete payroll management and compliance to keep your business running without friction.', num: '06' },
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
        transform: visible ? (hovered ? 'translateY(-6px)' : 'translateY(0)') : 'translateY(32px)',
        transition: `opacity 0.65s ease ${idx * 100}ms, transform 0.4s ease, box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease`,
        background: hovered ? '#133f77' : '#ffffff',
        border: `1px solid ${hovered ? '#133f77' : '#e2eaf4'}`,
        borderRadius: '16px',
        padding: '2rem',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: hovered
          ? '0 24px 60px rgba(19,63,119,0.25), inset 0 1px 0 rgba(255,255,255,0.1)'
          : '0 2px 16px rgba(19,63,119,0.07)',
      }}
    >
      {/* Ghost number */}
      <div style={{
        position: 'absolute', top: '-10px', right: '16px',
        fontSize: '6rem',
        fontFamily: '"Cormorant Garamond", serif',
        fontWeight: 900,
        color: hovered ? 'rgba(255,255,255,0.06)' : 'rgba(19,63,119,0.04)',
        lineHeight: 1, userSelect: 'none',
        transition: 'color 0.3s',
      }}>
        {service.num}
      </div>

      {/* Icon + number row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
      
          {/* <Icon size={20} color={hovered ? '#ffffff' : '#133f77'} style={{ transition: 'color 0.3s' }} /> */}
    
        <span style={{
          fontSize: '0.65rem',
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 500,
          letterSpacing: '0.12em',
          color: hovered ? 'rgba(255,255,255,0.5)' : 'rgba(19,63,119,0.3)',
          transition: 'color 0.3s',
        }}>
          {service.num}
        </span>
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: '"Cormorant Garamond", serif',
        fontWeight: 700,
        fontSize: '1.45rem',
        color: hovered ? '#ffffff' : '#133f77',
        marginBottom: '0.75rem',
        transition: 'color 0.3s',
        lineHeight: 1.2,
        letterSpacing: '0.01em',
      }}>
        {service.title}
      </h3>

      {/* Animated divider */}
      <div style={{
        width: hovered ? '48px' : '24px',
        height: '1.5px',
        background: hovered ? 'rgba(255,255,255,0.5)' : 'rgba(19,63,119,0.2)',
        borderRadius: '2px',
        marginBottom: '1rem',
        transition: 'all 0.4s ease',
      }} />

      {/* Description */}
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 300,
        fontSize: '0.78rem',
        color: hovered ? 'rgba(255,255,255,0.75)' : '#6b7e96',
        lineHeight: 1.85,
        marginBottom: '1.5rem',
        transition: 'color 0.3s',
      }}>
        {service.desc}
      </p>

      {/* CTA */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: hovered ? '10px' : '6px',
        color: hovered ? 'rgba(255,255,255,0.9)' : '#133f77',
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 600,
        fontSize: '0.68rem',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        transition: 'all 0.3s ease',
      }}>
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
      `}</style>

      <section
        ref={ref}
        style={{
          background: '#f8fafc',
          padding: '6rem 0 7rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle dot pattern */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.4,
          backgroundImage: 'radial-gradient(circle, rgba(19,63,119,0.12) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          pointerEvents: 'none',
        }} />

        {/* Soft blue glow top-left */}
        <div style={{
          position: 'absolute', top: '-80px', left: '-60px',
          width: '480px', height: '480px',
          background: 'radial-gradient(circle, rgba(19,63,119,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        {/* Soft blue glow bottom-right */}
        <div style={{
          position: 'absolute', bottom: '-80px', right: '-60px',
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(19,63,119,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative' }}>

          {/* Header */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
              <div style={{ width: '28px', height: '1px', background: 'rgba(19,63,119,0.3)' }} />
              <span style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 500,
                fontSize: '0.62rem',
                letterSpacing: '0.2em',
                color: '#133f77',
                textTransform: 'uppercase',
                opacity: 0.6,
              }}>Full Spectrum</span>
              <div style={{ width: '28px', height: '1px', background: 'rgba(19,63,119,0.3)' }} />
            </div>

            <h2 style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 700,
              fontSize: 'clamp(2.6rem, 5vw, 3.8rem)',
              color: '#133f77',
              letterSpacing: '-0.01em',
              lineHeight: 1.1,
              marginBottom: '1rem',
            }}>
              Our Services
            </h2>

            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 300,
              color: '#6b7e96',
              fontSize: '0.82rem',
              maxWidth: '440px',
              lineHeight: 1.9,
            }}>
              Comprehensive tax solutions designed to meet your unique financial needs — from individuals to complex business structures.
            </p>
          </div>

          {/* Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}>
            {services.map((service, idx) => (
              <ServiceCard key={idx} service={service} idx={idx} visible={visible} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div style={{
            textAlign: 'center', marginTop: '3.5rem',
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(16px)',
            transition: 'all 0.6s ease 700ms',
          }}>
            <button
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 600,
                fontSize: '0.72rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#ffffff',
                background: '#133f77',
                border: 'none',
                borderRadius: '8px',
                padding: '14px 36px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 8px 32px rgba(19,63,119,0.25)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 40px rgba(19,63,119,0.4)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(19,63,119,0.25)'; e.currentTarget.style.transform = 'none'; }}
            >
              Schedule a Consultation
              <ArrowRight size={14} />
            </button>
          </div>

        </div>
      </section>
    </>
  );
};

export default OurServices;