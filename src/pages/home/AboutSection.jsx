import React, { useEffect, useRef, useState } from 'react';
import { Award, Users, Shield, Clock, CheckCircle, ArrowUpRight } from 'lucide-react';

const features = [
  { icon: Award, title: 'Licensed & Certified', desc: 'All team members are certified CPAs and tax experts with proven track records.' },
  { icon: Users, title: 'Personalized Service', desc: 'Tailored solutions designed specifically for your unique financial situation.' },
  { icon: Shield, title: 'Confidential & Secure', desc: 'Your data protected with the highest security standards and encryption.' },
  { icon: Clock, title: 'Year-Round Support', desc: 'Available whenever you need us, not just during the busy tax season.' },
];

const stats = [
  { value: '25+', label: 'Years of Trust' },
  { value: '10K+', label: 'Clients Served' },
  { value: '99%', label: 'Satisfaction' },
  { value: '50+', label: 'Tax Experts' },
];

const badges = ['CPA Certified', 'Tax Law Experts', '100% Confidential', '24/7 Support'];

export default function AboutSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(null);

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

        .about-section * { box-sizing: border-box; }

        .fade-up {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.8s cubic-bezier(.16,1,.3,1), transform 0.8s cubic-bezier(.16,1,.3,1);
        }
        .fade-up.visible { opacity: 1; transform: translateY(0); }

        .fade-left {
          opacity: 0;
          transform: translateX(-28px);
          transition: opacity 0.75s cubic-bezier(.16,1,.3,1), transform 0.75s cubic-bezier(.16,1,.3,1);
        }
        .fade-left.visible { opacity: 1; transform: translateX(0); }

        .fade-right {
          opacity: 0;
          transform: translateX(28px);
          transition: opacity 0.75s cubic-bezier(.16,1,.3,1), transform 0.75s cubic-bezier(.16,1,.3,1);
        }
        .fade-right.visible { opacity: 1; transform: translateX(0); }

        .img-wrap img {
          transition: transform 0.9s cubic-bezier(.16,1,.3,1);
        }
        .img-wrap:hover img { transform: scale(1.05); }

        .feature-card {
          transition: transform 0.35s cubic-bezier(.16,1,.3,1), box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 50px rgba(19,63,119,0.12);
          border-color: rgba(19,63,119,0.3) !important;
        }
        .feature-card .icon-box {
          transition: background 0.3s ease, transform 0.3s ease;
        }
        .feature-card:hover .icon-box {
          background: #133f77 !important;
          transform: rotate(-6deg) scale(1.1);
        }
        .feature-card:hover .icon-box svg { color: white !important; }

        .stat-item {
          transition: transform 0.3s ease;
        }
        .stat-item:hover { transform: translateY(-3px); }

        .cta-btn {
          transition: all 0.3s cubic-bezier(.16,1,.3,1);
          position: relative;
          overflow: hidden;
        }
        .cta-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.12);
          transform: translateX(-100%);
          transition: transform 0.4s ease;
        }
        .cta-btn:hover::before { transform: translateX(0); }
        .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 16px 40px rgba(19,63,119,0.3); }

        .number-large {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 700;
          color: #133f77;
          line-height: 1;
        }

        .divider-line {
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #133f77, rgba(19,63,119,0.15));
          transition: width 1.2s cubic-bezier(.16,1,.3,1) 0.4s;
        }
        .divider-line.visible { width: 56px; }
      `}</style>

      <section
        ref={ref}
        className="about-section"
        style={{
          background: ' #f4f7fb',
          fontFamily: 'Poppins, sans-serif',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
      

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '88px 24px 80px', position: 'relative' }}>

          {/* ── SECTION HEADER ── */}
          <div className={`fade-up ${visible ? 'visible' : ''}`} style={{ marginBottom: 64, transitionDelay: '0ms' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <span style={{
                display: 'inline-block', width: 32, height: 2,
                background: '#133f77', borderRadius: 2, flexShrink: 0,
              }} />
              <span style={{
                fontFamily: 'Poppins', fontWeight: 600, fontSize: '0.65rem',
                letterSpacing: '0.22em', textTransform: 'uppercase', color: '#133f77',
              }}>
                Our Story
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
              <h2 style={{
                fontFamily: 'Cormorant Garamond, serif', fontWeight: 700,
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: '#0d1b2e',
                lineHeight: 1.08, margin: 0, letterSpacing: '-0.01em',
              }}>
                About Emeninties
              </h2>
              <p style={{
                fontFamily: 'Poppins', fontWeight: 300, color: '#8a96a8',
                fontSize: '0.82rem', lineHeight: 1.8, maxWidth: 320, margin: 0,
              }}>
                Trusted by thousands of individuals and businesses across the country since 1999.
              </p>
            </div>

            <div className={`divider-line ${visible ? 'visible' : ''}`} style={{ marginTop: 28 }} />
          </div>

          {/* ── MAIN CONTENT GRID ── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 48,
            alignItems: 'start',
            marginBottom: 64,
          }}>

            {/* LEFT — Body text + badges + CTA */}
            <div className={`fade-left ${visible ? 'visible' : ''}`} style={{ transitionDelay: '150ms' }}>

              <h3 style={{
                fontFamily: 'Cormorant Garamond, serif', fontWeight: 600,
                fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', color: '#0d1b2e',
                lineHeight: 1.3, marginBottom: 20, marginTop: 0,
              }}>
                Your Trusted Tax Partner<br />Since 1999
              </h3>

              <p style={{
                fontWeight: 300, color: '#5a6578', fontSize: '0.84rem',
                lineHeight: 1.95, marginBottom: 16, marginTop: 0,
              }}>
                Easy to Compliance helps individuals and businesses stay fully compliant with tax and regulatory
                requirements without stress. Our mission is to simplify complex compliance processes, ensure
                timely filings, and provide reliable support.
              </p>
              <p style={{
                fontWeight: 300, color: '#5a6578', fontSize: '0.84rem',
                lineHeight: 1.95, marginBottom: 36, marginTop: 0,
              }}>
                Our experienced team specializes in regulatory filings, tax compliance, and business documentation —
                staying current with the latest laws for accurate, hassle-free results.
              </p>

              {/* Badges */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 24px', marginBottom: 40 }}>
                {badges.map((b, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{
                      width: 20, height: 20, borderRadius: '50%',
                      background: 'rgba(19,63,119,0.1)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <CheckCircle size={11} color="#133f77" strokeWidth={2.5} />
                    </div>
                    <span style={{ fontWeight: 500, fontSize: '0.78rem', color: '#2d3748' }}>{b}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                className="cta-btn"
                style={{
                  background: '#133f77', color: '#fff',
                  border: 'none', cursor: 'pointer',
                  borderRadius: 50, padding: '13px 28px',
                  fontFamily: 'Poppins', fontWeight: 600,
                  fontSize: '0.78rem', letterSpacing: '0.04em',
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                }}
              >
                Explore Our Services
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </button>
            </div>

            {/* RIGHT — Image with overlays */}
            <div className={`fade-right ${visible ? 'visible' : ''}`} style={{ transitionDelay: '250ms', position: 'relative' }}>

              <div className="img-wrap" style={{
                borderRadius: 24, overflow: 'hidden',
                boxShadow: '0 30px 80px rgba(19,63,119,0.15), 0 8px 24px rgba(0,0,0,0.08)',
                position: 'relative',
              }}>
                <img
                  src="https://images.pexels.com/photos/7247407/pexels-photo-7247407.jpeg"
                  alt="Professional tax team"
                  style={{ width: '100%', height: 'clamp(300px, 40vw, 480px)', objectFit: 'cover', display: 'block' }}
                />
                {/* Bottom gradient */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, height: '55%',
                  background: 'linear-gradient(to top, rgba(13,27,46,0.72) 0%, transparent 100%)',
                }} />
                {/* Image caption */}
                <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24 }}>
                  <div style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: '0.72rem', color: 'rgba(255,255,255,0.7)', marginBottom: 4 }}>
                    Certified Professionals
                  </div>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600, fontSize: '1.2rem', color: '#fff', lineHeight: 1.2 }}>
                    Dedicated to your financial confidence
                  </div>
                </div>
              </div>

              {/* Floating stat card — top left overlap */}
              <div style={{
                position: 'absolute', top: -18, left: -18,
                background: '#fff',
                borderRadius: 18,
                padding: '16px 22px',
                boxShadow: '0 16px 48px rgba(19,63,119,0.14)',
                display: 'none',
              }} className="floating-card-tl">
              </div>

              {/* Floating badge — top right */}
              <div style={{
                position: 'absolute', top: 20, right: -16,
                background: '#fff',
                borderRadius: 16,
                padding: '14px 20px',
                boxShadow: '0 12px 40px rgba(19,63,119,0.16)',
                textAlign: 'center',
                minWidth: 100,
              }}>
                <div className="number-large" style={{ fontSize: '2rem' }}>25+</div>
                <div style={{ fontWeight: 500, fontSize: '0.65rem', color: '#8a96a8', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 2 }}>Years</div>
              </div>

              {/* Floating clients card — bottom left */}
              <div style={{
                position: 'absolute', bottom: 28, left: -20,
                background: '#133f77',
                borderRadius: 16,
                padding: '14px 20px',
                boxShadow: '0 12px 40px rgba(19,63,119,0.3)',
                textAlign: 'center',
                minWidth: 110,
              }}>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, fontSize: '2rem', color: '#fff', lineHeight: 1 }}>10K+</div>
                <div style={{ fontWeight: 500, fontSize: '0.65rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 2 }}>Clients</div>
              </div>

            </div>
          </div>

          {/* ── STATS BAR ── */}
          <div
            className={`fade-up ${visible ? 'visible' : ''}`}
            style={{
              transitionDelay: '350ms',
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 1,
              background: 'rgba(19,63,119,0.08)',
              borderRadius: 20,
              overflow: 'hidden',
              marginBottom: 56,
            }}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="stat-item"
                style={{
                  background: '#fff',
                  padding: '28px 24px',
                  textAlign: 'center',
                  margin: 1,
                  borderRadius: i === 0 ? '19px 0 0 19px' : i === stats.length - 1 ? '0 19px 19px 0' : 0,
                }}
              >
                <div className="number-large" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', marginBottom: 6 }}>{s.value}</div>
                <div style={{ fontWeight: 400, fontSize: '0.73rem', color: '#8a96a8', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{s.label}</div>
              </div>
            ))}
          </div>


        </div>
      </section>
    </>
  );
}