import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { number: 25, suffix: '+', label: 'Years Experience', icon: '◈' },
  { number: 5000, suffix: '+', label: 'Happy Clients', icon: '◉' },
  { number: 98, suffix: '%', label: 'Success Rate', icon: '◆' },
  { number: 24, suffix: '/7', label: 'Support Available', icon: '◎' },
];

const Counter = ({ target, suffix, active }) => {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [active, target]);
  return <>{count}{suffix}</>;
};

const WelcomeSection = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setVisible(true);
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,700&family=Poppins:wght@300;400;500;600&display=swap');

        .ws2 { background: #f4f7fb; font-family: 'Poppins', sans-serif; }

        /* ── TOP STRIP ── */
        .ws2-strip {
          background: #133f77;
          padding: 10px 0;
          overflow: hidden;
        }
        .ws2-marquee {
          display: flex;
          gap: 48px;
          animation: ws2-scroll 18s linear infinite;
          white-space: nowrap;
          width: max-content;
        }
        @keyframes ws2-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .ws2-marquee-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.6rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          font-weight: 500;
        }
        .ws2-marquee-sep { color: rgba(255,255,255,0.25); font-size: 0.5rem; }

        /* ── MAIN WRAPPER ── */
        .ws2-body {
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 32px 0;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 64px;
          align-items: start;
        }
        @media (max-width: 780px) {
          .ws2-body { grid-template-columns: 1fr; gap: 40px; padding: 56px 20px 0; }
        }

        /* ── LEFT ── */
        .ws2-label {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s;
        }
        .ws2-label.show { opacity: 1; transform: translateY(0); }
        .ws2-label-pill {
          background: rgba(19,63,119,0.1);
          color: #133f77;
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: 100px;
          border: 1px solid rgba(19,63,119,0.18);
        }

        .ws2-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.6rem, 4.5vw, 4rem);
          font-weight: 700;
          line-height: 1.07;
          color: #0d2340;
          margin-bottom: 0;
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s;
        }
        .ws2-heading.show { opacity: 1; transform: translateY(0); }
        .ws2-heading-italic {
          font-style: italic;
          color: #133f77;
          display: block;
        }

        .ws2-underline-wrap {
          margin: 22px 0 24px;
          opacity: 0;
          transition: opacity 0.5s ease 0.4s;
        }
        .ws2-underline-wrap.show { opacity: 1; }
        .ws2-underline {
          height: 3px;
          width: 56px;
          background: linear-gradient(90deg, #133f77 0%, rgba(19,63,119,0.2) 100%);
          border-radius: 2px;
        }

        .ws2-text {
          font-size: 0.875rem;
          line-height: 1.9;
          color: #5a6a80;
          font-weight: 300;
          opacity: 0;
          transition: opacity 0.7s ease 0.5s;
        }
        .ws2-text.show { opacity: 1; }

        .ws2-badges {
          margin-top: 32px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          opacity: 0;
          transition: opacity 0.6s ease 0.65s;
        }
        .ws2-badges.show { opacity: 1; }
        .ws2-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 7px 14px;
          border: 1px solid rgba(19,63,119,0.15);
          border-radius: 6px;
          background: white;
          font-size: 0.67rem;
          color: #133f77;
          font-weight: 500;
          letter-spacing: 0.04em;
          box-shadow: 0 2px 8px rgba(19,63,119,0.06);
        }
        .ws2-badge-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #133f77;
          opacity: 0.5;
        }

        /* ── RIGHT STAT CARDS ── */
        .ws2-right {
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding-top: 8px;
        }

        .ws2-card {
          background: white;
          border-radius: 14px;
          padding: 22px 24px;
          display: flex;
          align-items: center;
          gap: 20px;
          box-shadow: 0 2px 16px rgba(19,63,119,0.07);
          border: 1px solid rgba(19,63,119,0.08);
          opacity: 0;
          transform: translateX(24px);
          transition: opacity 0.55s ease, transform 0.55s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          cursor: default;
        }
        .ws2-card.show { opacity: 1; transform: translateX(0); }
        .ws2-card:hover {
          box-shadow: 0 8px 32px rgba(19,63,119,0.14);
          border-color: rgba(19,63,119,0.2);
          transform: translateX(-3px);
        }

        .ws2-card-icon-wrap {
          width: 52px; height: 52px;
          border-radius: 12px;
          background: linear-gradient(135deg, #133f77 0%, #1a5299 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 1.1rem;
          color: rgba(255,255,255,0.85);
        }

        .ws2-card-info { flex: 1; }
        .ws2-card-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.1rem;
          font-weight: 700;
          color: #0d2340;
          line-height: 1;
          margin-bottom: 3px;
        }
        .ws2-card-label {
          font-size: 0.67rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #8a9ab5;
          font-weight: 500;
        }

        .ws2-card-bar-wrap {
          width: 3px;
          height: 44px;
          background: rgba(19,63,119,0.08);
          border-radius: 2px;
          overflow: hidden;
          flex-shrink: 0;
        }
        .ws2-card-bar-fill {
          width: 100%;
          background: linear-gradient(180deg, #133f77, rgba(19,63,119,0.3));
          border-radius: 2px;
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.7s ease;
          height: 100%;
        }
        .ws2-card.show .ws2-card-bar-fill { transform: scaleY(1); }

        /* ── BOTTOM CTA BANNER ── */
        .ws2-bottom {
          max-width: 1100px;
          margin: 48px auto 0;
          padding: 0 32px 64px;
        }
        @media (max-width: 780px) {
          .ws2-bottom { padding: 0 20px 48px; }
        }
        .ws2-bottom-inner {
          background: #133f77;
          border-radius: 18px;
          padding: 32px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease 0.8s, transform 0.7s ease 0.8s;
          flex-wrap: wrap;
        }
        .ws2-bottom-inner.show { opacity: 1; transform: translateY(0); }

        .ws2-bottom-text { flex: 1; min-width: 200px; }
        .ws2-bottom-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 4px;
        }
        .ws2-bottom-sub {
          font-size: 0.72rem;
          color: rgba(255,255,255,0.5);
          font-weight: 300;
          letter-spacing: 0.04em;
        }

        .ws2-bottom-divider {
          width: 1px; height: 44px;
          background: rgba(255,255,255,0.15);
          flex-shrink: 0;
        }
        @media (max-width: 600px) { .ws2-bottom-divider { display: none; } }

        .ws2-btn {
          background: white;
          color: #133f77;
          border: none;
          padding: 13px 28px;
          border-radius: 8px;
          font-family: 'Poppins', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          flex-shrink: 0;
          transition: background 0.25s, color 0.25s, transform 0.2s;
          box-shadow: 0 4px 14px rgba(0,0,0,0.15);
        }
        .ws2-btn:hover {
          background: #0d2340;
          color: #fff;
          transform: translateY(-2px);
        }
      `}</style>

      <section ref={ref} className="ws2">
        {/* Scrolling strip */}
        <div className="ws2-strip">
          <div className="ws2-marquee">
            {[...Array(2)].map((_, ri) =>
              ['Tax Filing', 'GST Compliance', 'Legal Documentation', 'ITR Services', 'Business Registration', 'Regulatory Advisory', 'Tax Filing', 'GST Compliance', 'Legal Documentation', 'ITR Services', 'Business Registration', 'Regulatory Advisory'].map((item, i) => (
                <span key={`${ri}-${i}`} className="ws2-marquee-item">
                  {item} <span className="ws2-marquee-sep">✦</span>
                </span>
              ))
            )}
          </div>
        </div>

        {/* Main grid */}
        <div className="ws2-body">
          {/* Left content */}
          <div>
            <div className={`ws2-label ${visible ? 'show' : ''}`}>
              <span className="ws2-label-pill">Who We Are</span>
            </div>

            <h2 className={`ws2-heading ${visible ? 'show' : ''}`}>
              Welcome to<br />
           
             Emeninties
            </h2>

            <div className={`ws2-underline-wrap ${visible ? 'show' : ''}`}>
              <div className="ws2-underline" />
            </div>

            <p className={`ws2-text ${visible ? 'show' : ''}`}>
              With years of experience in tax and regulatory compliance, Easy to Compliance
              has helped thousands of individuals and businesses manage filings,
              documentation, and legal requirements with ease and confidence. Our team
              provides personalized solutions to ensure accurate filings, timely submissions,
              and complete adherence to all regulatory requirements.
            </p>

            <div className={`ws2-badges ${visible ? 'show' : ''}`}>
              {['Trusted Experts', 'Timely Submissions', 'Personalized Support', 'Pan India Service'].map((b, i) => (
                <div className="ws2-badge" key={i}>
                  <div className="ws2-badge-dot" />
                  {b}
                </div>
              ))}
            </div>
          </div>

          {/* Right stat cards */}
          <div className="ws2-right">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`ws2-card ${visible ? 'show' : ''}`}
                style={{ transitionDelay: `${idx * 110 + 300}ms` }}
              >
                <div className="ws2-card-icon-wrap">{stat.icon}</div>
                <div className="ws2-card-info">
                  <div className="ws2-card-num">
                    <Counter target={stat.number} suffix={stat.suffix} active={visible} />
                  </div>
                  <div className="ws2-card-label">{stat.label}</div>
                </div>
                <div className="ws2-card-bar-wrap">
                  <div
                    className="ws2-card-bar-fill"
                    style={{ transitionDelay: `${idx * 110 + 600}ms` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

     
      </section>
    </>
  );
};

export default WelcomeSection;