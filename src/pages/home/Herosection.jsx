import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Poppins:wght@300;400;500;600&display=swap');

        .hero-root {
          position: relative;
          width: 100%;
          height: clamp(360px, 55vw, 640px);
          overflow: hidden;
        
        }

        .hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: ${mounted ? "scale(1)" : "scale(1.05)"};
          transition: transform 8000ms ease-out;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, #133f77ee 0%, #133f7799 45%, transparent 100%);
        }

        /* Grain texture */
        .hero-grain {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.03;
          pointer-events: none;
          mix-blend-mode: overlay;
        }

        /* Vertical accent line */
        .hero-line {
          position: absolute;
          left: calc(6vw - 20px);
          top: 15%;
          width: 1px;
          height: ${mounted ? "70%" : "0%"};
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.25), transparent);
          transition: height 1.4s cubic-bezier(0.16,1,0.3,1);
          transition-delay: 0.4s;
        }

        .hero-content {
          position: relative;
          height: 100%;
          display: flex;
          align-items: center;
          padding: 0 6vw;
        }

        .hero-inner {
          max-width: 580px;
          color: white;
        }

        /* Badge */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 18px;
          padding: 5px 14px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.25);
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(8px);
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.9);
          opacity: ${mounted ? "1" : "0"};
          transform: ${mounted ? "translateY(0)" : "translateY(10px)"};
          transition: opacity 0.6s ease, transform 0.6s ease;
          transition-delay: 0.15s;
        }

        .badge-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #7eb8f7;
          box-shadow: 0 0 6px #7eb8f7;
          flex-shrink: 0;
        }

        /* Headline */
        .hero-h1 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2rem, 5vw, 4rem);
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: -0.01em;
          margin: 0 0 6px;
          color: #ffffff;
          opacity: ${mounted ? "1" : "0"};
          transform: ${mounted ? "translateX(0)" : "translateX(-30px)"};
          transition: opacity 0.75s ease, transform 0.75s ease;
          transition-delay: 0.28s;
        }

        .hero-h1-muted {
          color: rgba(255,255,255,0.65);
          font-style: italic;
          font-weight: 400;
        }

        /* Decorative rule under headline */
        .hero-divider {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 16px 0 18px;
          opacity: ${mounted ? "1" : "0"};
          transition: opacity 0.7s ease;
          transition-delay: 0.45s;
        }

        .divider-line {
          width: 36px;
          height: 1px;
          background: rgba(255,255,255,0.35);
        }

        .divider-diamond {
          width: 5px;
          height: 5px;
          border: 1px solid rgba(255,255,255,0.4);
          transform: rotate(45deg);
          flex-shrink: 0;
        }

        .divider-line-long {
          flex: 1;
          max-width: 120px;
          height: 1px;
          background: linear-gradient(to right, rgba(255,255,255,0.25), transparent);
        }

        /* Subtitle */
        .hero-sub {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(0.8rem, 1.4vw, 0.95rem);
          font-weight: 300;
          color: rgba(255,255,255,0.8);
          line-height: 1.75;
          margin: 0 0 28px;
          max-width: 400px;
          opacity: ${mounted ? "1" : "0"};
          transform: ${mounted ? "translateY(0)" : "translateY(10px)"};
          transition: opacity 0.7s ease, transform 0.7s ease;
          transition-delay: 0.5s;
        }

        /* Buttons */
        .hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          opacity: ${mounted ? "1" : "0"};
          transform: ${mounted ? "translateY(0)" : "translateY(10px)"};
          transition: opacity 0.7s ease, transform 0.7s ease;
          transition-delay: 0.63s;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          color: #133f77;
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 600;
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(0,0,0,0.25);
          transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
          letter-spacing: 0.01em;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.35);
          background: #f0f6ff;
        }

        .btn-primary:hover .btn-arrow {
          transform: translateX(3px);
        }

        .btn-arrow {
          width: 14px;
          height: 14px;
          stroke: currentColor;
          stroke-width: 2.2;
          fill: none;
          transition: transform 0.25s ease;
          flex-shrink: 0;
        }

        .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: rgba(255,255,255,0.88);
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 500;
          padding: 12px 24px;
          border: 1px solid rgba(255,255,255,0.4);
          border-radius: 8px;
          cursor: pointer;
          transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease;
          letter-spacing: 0.01em;
          backdrop-filter: blur(4px);
        }

        .btn-ghost:hover {
          transform: translateY(-2px);
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.7);
        }

        /* Scroll indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 18px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          opacity: ${mounted ? "0.55" : "0"};
          transition: opacity 1s ease;
          transition-delay: 1.1s;
          animation: bounceDown 2s ease-in-out infinite;
        }

        .scroll-indicator svg {
          width: 18px;
          height: 18px;
          stroke: white;
          stroke-width: 1.5;
          fill: none;
        }

        @keyframes bounceDown {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(5px); }
        }

        /* Floating stats — right side */
        .hero-stats {
          position: absolute;
          right: 5vw;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 0;
          opacity: ${mounted ? "1" : "0"};
          transition: opacity 0.9s ease;
          transition-delay: 0.85s;
        }

        .stat-card {
          padding: 14px 20px;
          text-align: right;
          border-right: 2px solid rgba(255,255,255,0.2);
          position: relative;
        }

        .stat-card + .stat-card {
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .stat-card::after {
          content: '';
          position: absolute;
          right: -2px;
          top: 50%;
          transform: translateY(-50%);
          width: 2px;
          height: 40%;
          background: rgba(255,255,255,0.6);
        }

        .stat-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.3rem, 2.2vw, 1.8rem);
          font-weight: 700;
          color: #ffffff;
          line-height: 1;
        }

        .stat-label {
          font-family: 'Poppins', sans-serif;
          font-size: 9px;
          font-weight: 400;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          margin-top: 3px;
        }

        @media (max-width: 768px) {
          .hero-stats { display: none; }
          .hero-line { display: none; }
        }

        @media (max-width: 480px) {
          .hero-content { padding: 0 20px; }
        }
      `}</style>

      <section className="hero-root">
        {/* Background */}
        <img src="https://images.pexels.com/photos/6863184/pexels-photo-6863184.jpeg" alt="Tax consulting hero" className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-grain" />
        <div className="hero-line" />

        {/* Content */}
        <div className="hero-content">
          <div className="hero-inner">

            {/* Badge */}
            <div className="hero-badge">
              <span className="badge-dot" />
              Trusted Since 1999
            </div>

            {/* Headline */}
            <h1 className="hero-h1">
              Expert Tax Solutions<br />
              <span className="hero-h1-muted">for Your Financial</span><br />
              Success
            </h1>

            {/* Decorative divider */}
            <div className="hero-divider">
              <div className="divider-line" />
              <div className="divider-diamond" />
              <div className="divider-line-long" />
            </div>

            {/* Subtitle */}
            <p className="hero-sub">
              Maximize your returns with professional tax planning and preparation services tailored to your needs.
            </p>

            {/* Buttons */}
            <div className="hero-ctas">
              <button className="btn-primary">
                Schedule Consultation
                <svg className="btn-arrow" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button className="btn-ghost">
                Learn More
              </button>
            </div>

          </div>
        </div>

        {/* Floating stats — desktop only */}
        <div className="hero-stats">
          {[
            { n: "25+", l: "Years Experience" },
            { n: "4,800+", l: "Clients Served" },
            { n: "98%", l: "Client Retention" },
          ].map((s) => (
            <div className="stat-card" key={s.l}>
              <div className="stat-number">{s.n}</div>
              <div className="stat-label">{s.l}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <svg viewBox="0 0 24 24">
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>
    </>
  );
};

export default HeroSection;