import React, { useEffect, useRef, useState } from 'react';

const checkpoints = [
  'ITR & GST filing with 98% success rate',
  'Company registration & legal documentation',
  'Dedicated CA support available 24/7',
];

const trustItems = [
  '25+ Years Experience',
  '5000+ Happy Clients',
  '98% Success Rate',
  'Pan India Service',
];

const navLinks = ['Services', 'About', 'Resources', 'Contact'];

/* ─── Illustration ─── */
const FinanceIllustration = () => (
  <svg viewBox="0 0 520 440" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ width: '100%', maxWidth: 740, height: 'auto' }}>
    <ellipse cx="270" cy="310" rx="210" ry="90" fill="#e8eef8" />
    <ellipse cx="270" cy="310" rx="170" ry="70" fill="#dce6f4" />
    <rect x="60" y="290" width="400" height="14" rx="7" fill="#b8c9e4" />
    <rect x="100" y="304" width="16" height="70" rx="6" fill="#a0b5d4" />
    <rect x="404" y="304" width="16" height="70" rx="6" fill="#a0b5d4" />
    <rect x="170" y="170" width="180" height="118" rx="10" fill="#0d2340" />
    <rect x="178" y="178" width="164" height="100" rx="7" fill="#1a3a5c" />
    <rect x="188" y="188" width="80" height="6" rx="3" fill="rgba(255,255,255,.5)" />
    <rect x="188" y="200" width="60" height="5" rx="2.5" fill="rgba(255,255,255,.25)" />
    <rect x="188" y="212" width="144" height="1" fill="rgba(255,255,255,.1)" />
    <rect x="192" y="240" width="14" height="28" rx="3" fill="#133f77" opacity=".8" />
    <rect x="212" y="228" width="14" height="40" rx="3" fill="#133f77" />
    <rect x="232" y="234" width="14" height="34" rx="3" fill="#133f77" opacity=".7" />
    <rect x="252" y="220" width="14" height="48" rx="3" fill="#133f77" opacity=".9" />
    <rect x="272" y="232" width="14" height="36" rx="3" fill="#133f77" opacity=".6" />
    <rect x="292" y="225" width="14" height="43" rx="3" fill="#133f77" opacity=".85" />
    <rect x="248" y="288" width="24" height="12" rx="3" fill="#8aa3c4" />
    <rect x="232" y="298" width="56" height="6" rx="3" fill="#7a93b4" />
    <rect x="88" y="245" width="112" height="70" rx="8" fill="#1e3a5f" />
    <rect x="94" y="251" width="100" height="58" rx="5" fill="#243f6a" />
    <rect x="100" y="258" width="55" height="5" rx="2.5" fill="rgba(255,255,255,.4)" />
    <rect x="100" y="268" width="40" height="4" rx="2" fill="rgba(255,255,255,.2)" />
    <rect x="100" y="277" width="88" height="1" fill="rgba(255,255,255,.1)" />
    <rect x="100" y="284" width="50" height="4" rx="2" fill="rgba(255,255,255,.15)" />
    <rect x="100" y="292" width="35" height="4" rx="2" fill="rgba(255,255,255,.15)" />
    <circle cx="162" cy="277" r="14" fill="#0d2340" />
    <path d="M162 277 L162 263 A14 14 0 0 1 174 284 Z" fill="#133f77" />
    <path d="M162 277 L174 284 A14 14 0 0 1 150 284 Z" fill="#4a7cc4" opacity=".7" />
    <rect x="82" y="313" width="124" height="8" rx="4" fill="#152e50" />
    <rect x="348" y="258" width="76" height="98" rx="6" fill="#fff" stroke="#c5d4e8" strokeWidth="1.5" />
    <rect x="344" y="262" width="76" height="98" rx="6" fill="#f0f5fc" stroke="#c5d4e8" strokeWidth="1.5" />
    <rect x="340" y="266" width="76" height="98" rx="6" fill="#fff" stroke="#b8cbe0" strokeWidth="1.5" />
    <rect x="352" y="278" width="52" height="5" rx="2.5" fill="#0d2340" opacity=".6" />
    <rect x="352" y="290" width="40" height="4" rx="2" fill="#8aa3c4" opacity=".6" />
    <rect x="352" y="300" width="48" height="4" rx="2" fill="#8aa3c4" opacity=".4" />
    <rect x="352" y="310" width="36" height="4" rx="2" fill="#8aa3c4" opacity=".4" />
    <rect x="352" y="320" width="52" height="1" fill="#dce6f4" />
    <rect x="352" y="330" width="30" height="4" rx="2" fill="#133f77" opacity=".5" />
    <rect x="352" y="342" width="20" height="12" rx="4" fill="#133f77" opacity=".8" />
    <circle cx="420" cy="248" r="18" fill="#133f77" />
    <path d="M412 248 l5 6 10-10" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="290" y="268" width="32" height="30" rx="6" fill="#fff" stroke="#c5d4e8" strokeWidth="1.5" />
    <path d="M322 276 Q334 276 334 283 Q334 290 322 290" stroke="#c5d4e8" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <rect x="295" y="262" width="22" height="8" rx="4" fill="#e8eef8" />
    <path d="M300 256 Q297 250 300 244" stroke="#b8c9e4" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    <path d="M307 254 Q304 247 307 241" stroke="#b8c9e4" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    <rect x="310" y="348" width="80" height="8" rx="4" fill="#8aa3c4" />
    <rect x="322" y="356" width="12" height="50" rx="5" fill="#7a93b4" />
    <rect x="366" y="356" width="12" height="50" rx="5" fill="#7a93b4" />
    <rect x="316" y="398" width="72" height="8" rx="4" fill="#7a93b4" />
    <rect x="308" y="300" width="84" height="52" rx="8" fill="#a0b5d4" />
    <rect x="314" y="306" width="72" height="40" rx="6" fill="#b0c3d8" />
    <rect x="328" y="260" width="44" height="58" rx="14" fill="#f4a56a" />
    <rect x="322" y="285" width="56" height="38" rx="10" fill="#133f77" />
    <path d="M338 285 L350 298 L362 285" fill="#0d2340" />
    <rect x="298" y="290" width="32" height="14" rx="7" fill="#f4a56a" transform="rotate(-20 298 290)" />
    <rect x="372" y="290" width="32" height="14" rx="7" fill="#f4a56a" transform="rotate(15 372 290)" />
    <circle cx="350" cy="238" r="28" fill="#f4a56a" />
    <path d="M322 228 Q322 200 350 200 Q378 200 378 228 Q370 214 350 212 Q330 214 322 228 Z" fill="#2c1a0e" />
    <ellipse cx="341" cy="236" rx="3.5" ry="4" fill="#2c1a0e" />
    <ellipse cx="359" cy="236" rx="3.5" ry="4" fill="#2c1a0e" />
    <circle cx="342.5" cy="234.5" r="1" fill="white" />
    <circle cx="360.5" cy="234.5" r="1" fill="white" />
    <path d="M341 246 Q350 252 359 246" stroke="#2c1a0e" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <rect x="335" y="231" width="14" height="10" rx="4" stroke="#0d2340" strokeWidth="1.5" fill="none" />
    <rect x="353" y="231" width="14" height="10" rx="4" stroke="#0d2340" strokeWidth="1.5" fill="none" />
    <line x1="349" y1="236" x2="353" y2="236" stroke="#0d2340" strokeWidth="1.5" />
    <line x1="322" y1="236" x2="335" y2="236" stroke="#0d2340" strokeWidth="1.5" />
    <line x1="367" y1="236" x2="378" y2="236" stroke="#0d2340" strokeWidth="1.5" />
    <rect x="60" y="190" width="100" height="36" rx="10" fill="#133f77" />
    <rect x="63" y="193" width="94" height="30" rx="8" fill="#1a4f8a" />
    <circle cx="76" cy="208" r="7" fill="rgba(255,255,255,.15)" />
    <path d="M72 208 l3 3.5 6-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="87" y="202" width="44" height="5" rx="2.5" fill="rgba(255,255,255,.8)" />
    <rect x="87" y="212" width="30" height="4" rx="2" fill="rgba(255,255,255,.4)" />
    <line x1="160" y1="208" x2="170" y2="208" stroke="#b8c9e4" strokeWidth="1" strokeDasharray="3 2" />
    <rect x="430" y="155" width="76" height="34" rx="10" fill="#fff" stroke="#c5d4e8" strokeWidth="1.5" />
    <circle cx="446" cy="172" r="6" fill="#133f77" opacity=".15" />
    <path d="M442 172 l3 3.5 5-5.5" stroke="#133f77" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="456" y="165" width="36" height="5" rx="2.5" fill="#0d2340" opacity=".6" />
    <rect x="456" y="174" width="24" height="4" rx="2" fill="#8aa3c4" opacity=".5" />
    <line x1="430" y1="172" x2="420" y2="200" stroke="#b8c9e4" strokeWidth="1" strokeDasharray="3 2" />
    <ellipse cx="148" cy="320" rx="18" ry="5" fill="#f0c040" opacity=".8" />
    <rect x="130" y="308" width="36" height="12" rx="2" fill="#f0c040" opacity=".7" />
    <ellipse cx="148" cy="308" rx="18" ry="5" fill="#f5d060" opacity=".9" />
    <ellipse cx="148" cy="308" rx="10" ry="2.5" fill="#e8b830" opacity=".4" />
    <circle cx="80" cy="260" r="4" fill="#133f77" opacity=".12" />
    <circle cx="70" cy="275" r="2.5" fill="#133f77" opacity=".1" />
    <circle cx="460" cy="310" r="5" fill="#133f77" opacity=".1" />
    <circle cx="472" cy="295" r="3" fill="#133f77" opacity=".08" />
  </svg>
);

const WelcomeSection = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Poppins:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── Root ── */
        .ws-root {
          font-family: 'Poppins', sans-serif;
          background: #f4f7fb;
          width: 100%;
          min-width: 0;
        }

        /* ── NAV ── */
        .ws-nav {
          background: #fff;
          border-bottom: 1px solid rgba(19,63,119,.08);
          padding: 0;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .ws-nav-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 62px;
        }
        .ws-logo {
          font-family: 'Poppins', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #0d2340;
          letter-spacing: -.01em;
          flex-shrink: 0;
        }
        .ws-logo span { color: #133f77; }

        .ws-nav-links {
          display: flex;
          gap: 28px;
          align-items: center;
        }
        .ws-nav-link {
          font-size: 12.5px;
          font-weight: 500;
          color: #6b7d96;
          cursor: pointer;
          background: none;
          border: none;
          font-family: 'Poppins', sans-serif;
          transition: color .2s;
          white-space: nowrap;
        }
        .ws-nav-link:hover { color: #133f77; }
        .ws-nav-btn {
          background: #133f77;
          color: #fff;
          border: none;
          padding: 9px 22px;
          border-radius: 7px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
          transition: background .2s;
          white-space: nowrap;
        }
        .ws-nav-btn:hover { background: #0d2340; }

        /* Hamburger */
        .ws-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .ws-hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: #0d2340;
          border-radius: 2px;
          transition: all .25s;
        }
        .ws-mobile-menu {
          display: none;
          flex-direction: column;
          background: #fff;
          border-top: 1px solid rgba(19,63,119,.08);
          padding: 16px 20px 20px;
          gap: 4px;
        }
        .ws-mobile-menu.open { display: flex; }
        .ws-mobile-link {
          font-size: 13.5px;
          font-weight: 500;
          color: #3d5070;
          background: none;
          border: none;
          font-family: 'Poppins', sans-serif;
          text-align: left;
          padding: 10px 4px;
          cursor: pointer;
          border-bottom: 1px solid rgba(19,63,119,.06);
        }
        .ws-mobile-link:last-child { border-bottom: none; }
        .ws-mobile-cta {
          margin-top: 12px;
          background: #133f77;
          color: #fff;
          border: none;
          padding: 13px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
          cursor: pointer;
          width: 100%;
        }

        /* ── WRAP ── */
        .ws-wrap {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* ── HERO ── */
        .ws-hero { padding: 80px 0 64px; }

        .ws-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        /* ── BADGE ── */
        .ws-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(19,63,119,.07);
          border: 1px solid rgba(19,63,119,.16);
          border-radius: 100px;
          padding: 5px 14px;
          margin-bottom: 20px;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity .5s ease .1s, transform .5s ease .1s;
        }
        .ws-badge.show { opacity: 1; transform: translateY(0); }
        .ws-badge-pulse {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #133f77;
          animation: wsPulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes wsPulse {
          0%,100%{ opacity:1; transform:scale(1); }
          50%{ opacity:.4; transform:scale(.75); }
        }
        .ws-badge-text {
          font-size: 11px;
          font-weight: 600;
          color: #133f77;
          letter-spacing: .04em;
          font-family: 'Poppins', sans-serif;
          white-space: nowrap;
        }

        /* ── HEADING ── */
        .ws-h1 {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(2rem, 3.8vw, 3.2rem);
          font-weight: 700;
          color: #0d2340;
          line-height: 1.1;
          letter-spacing: -.02em;
          margin-bottom: 6px;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity .65s ease .2s, transform .65s ease .2s;
        }
        .ws-h1.show { opacity: 1; transform: translateY(0); }
        .ws-h1-sub {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.9rem, 3.6vw, 3.1rem);
          font-style: italic;
          font-weight: 600;
          color: #133f77;
          display: block;
          margin-bottom: 20px;
          line-height: 1.15;
        }

        /* ── DESC ── */
        .ws-desc {
          font-size: 14px;
          line-height: 1.85;
          color: #6b7d96;
          font-weight: 400;
          margin-bottom: 28px;
          max-width: 430px;
          font-family: 'Poppins', sans-serif;
          opacity: 0;
          transition: opacity .6s ease .38s;
        }
        .ws-desc.show { opacity: 1; }

        /* ── CHECKS ── */
        .ws-checks {
          display: flex;
          flex-direction: column;
          gap: 11px;
          margin-bottom: 36px;
          opacity: 0;
          transition: opacity .6s ease .5s;
        }
        .ws-checks.show { opacity: 1; }
        .ws-check {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: #3d5070;
          font-weight: 500;
          font-family: 'Poppins', sans-serif;
        }
        .ws-check-icon {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #133f77;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* ── BUTTONS ── */
        .ws-btns {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
          opacity: 0;
          transition: opacity .6s ease .65s;
        }
        .ws-btns.show { opacity: 1; }
        .ws-btn-primary {
          background: #133f77;
          color: #fff;
          border: none;
          padding: 14px 32px;
          border-radius: 8px;
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          letter-spacing: .01em;
          transition: background .2s, transform .15s;
          white-space: nowrap;
        }
        .ws-btn-primary:hover { background: #0d2340; transform: translateY(-1px); }
        .ws-btn-outline {
          background: transparent;
          color: #133f77;
          border: 1.5px solid rgba(19,63,119,.28);
          padding: 13px 28px;
          border-radius: 8px;
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: border-color .2s, background .2s;
          white-space: nowrap;
        }
        .ws-btn-outline:hover { border-color: #133f77; background: rgba(19,63,119,.04); }

        /* ── ILLUSTRATION ── */
        .ws-illus {
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: translateX(28px);
          transition: opacity .85s ease .25s, transform .85s ease .25s;
        }
        .ws-illus.show { opacity: 1; transform: translateX(0); }

        /* ── TRUST BAR ── */
        .ws-trust {
          border-top: 1px solid rgba(19,63,119,.08);
          padding: 18px 0;
          background: #fff;
        }
        .ws-trust-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }
        .ws-trust-label {
          font-size: 11px;
          font-weight: 600;
          color: #a0aec0;
          letter-spacing: .12em;
          text-transform: uppercase;
          white-space: nowrap;
          font-family: 'Poppins', sans-serif;
        }
        .ws-trust-vline {
          width: 1px;
          height: 22px;
          background: rgba(19,63,119,.1);
          flex-shrink: 0;
        }
        .ws-trust-items {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          align-items: center;
          flex: 1;
        }
        .ws-trust-item {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
          font-weight: 600;
          color: #3d5070;
          font-family: 'Poppins', sans-serif;
          white-space: nowrap;
        }
        .ws-trust-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #133f77;
          opacity: .45;
          flex-shrink: 0;
        }

        /* ══════════════════════════
           RESPONSIVE BREAKPOINTS
        ══════════════════════════ */

        /* Large tablet / small desktop: 1024px */
        @media (max-width: 1024px) {
          .ws-nav-inner { padding: 0 28px; }
          .ws-wrap { padding: 0 28px; }
          .ws-trust-inner { padding: 0 28px; }
          .ws-hero { padding: 64px 0 52px; }
          .ws-hero-grid { gap: 36px; }
        }

        /* Tablet landscape: 900px — stack layout */
        @media (max-width: 900px) {
          .ws-nav-links,
          .ws-nav-btn { display: none; }
          .ws-hamburger { display: flex; }

          .ws-hero-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .ws-illus {
            transform: translateY(20px);
            max-width: 460px;
            margin: 0 auto;
            width: 100%;
          }
          .ws-illus.show { transform: translateY(0); }
          .ws-desc { max-width: 100%; }
        }

        /* Tablet portrait: 768px */
        @media (max-width: 768px) {
          .ws-nav-inner { height: 56px; }
          .ws-wrap { padding: 0 24px; }
          .ws-trust-inner { padding: 0 24px; }
          .ws-hero { padding: 48px 0 40px; }

          .ws-badge-text { font-size: 10.5px; }
          .ws-h1 { font-size: clamp(1.8rem, 6vw, 2.6rem); }
          .ws-h1-sub { font-size: clamp(1.7rem, 5.5vw, 2.4rem); margin-bottom: 16px; }
          .ws-desc { font-size: 13.5px; margin-bottom: 22px; }
          .ws-checks { gap: 10px; margin-bottom: 28px; }
          .ws-check { font-size: 12.5px; }
          .ws-btn-primary, .ws-btn-outline { padding: 13px 24px; font-size: 12.5px; }

          .ws-trust { padding: 16px 0; }
          .ws-trust-items { gap: 14px; }
          .ws-trust-item { font-size: 11.5px; }
          .ws-trust-vline { display: none; }
        }

        /* Mobile large: 600px */
        @media (max-width: 600px) {
          .ws-nav-inner { padding: 0 16px; height: 54px; }
          .ws-wrap { padding: 0 16px; }
          .ws-trust-inner { padding: 0 16px; gap: 12px; }
          .ws-hero { padding: 36px 0 32px; }

          .ws-badge { margin-bottom: 16px; padding: 5px 12px; }
          .ws-badge-text { font-size: 10px; letter-spacing: .02em; }
          .ws-h1 { font-size: clamp(1.65rem, 7.5vw, 2.2rem); }
          .ws-h1-sub { font-size: clamp(1.55rem, 7vw, 2rem); margin-bottom: 14px; }
          .ws-desc { font-size: 13px; line-height: 1.75; margin-bottom: 20px; }
          .ws-checks { gap: 9px; margin-bottom: 24px; }
          .ws-check { font-size: 12px; gap: 8px; }
          .ws-check-icon { width: 18px; height: 18px; }

          .ws-btns { gap: 10px; }
          .ws-btn-primary { padding: 13px 22px; font-size: 12px; width: 100%; text-align: center; }
          .ws-btn-outline { padding: 12px 22px; font-size: 12px; width: 100%; text-align: center; }

          .ws-illus { max-width: 100%; }

          .ws-trust-label { font-size: 10px; }
          .ws-trust-items { gap: 10px; }
          .ws-trust-item { font-size: 11px; gap: 5px; }
        }

        /* Mobile small: 400px */
        @media (max-width: 400px) {
          .ws-nav-inner { padding: 0 14px; }
          .ws-wrap { padding: 0 14px; }
          .ws-trust-inner { padding: 0 14px; }
          .ws-hero { padding: 28px 0 28px; }

          .ws-h1 { font-size: clamp(1.5rem, 8.5vw, 1.9rem); }
          .ws-h1-sub { font-size: clamp(1.4rem, 8vw, 1.8rem); }
          .ws-desc { font-size: 12.5px; }

          .ws-trust-items { gap: 8px; }
          .ws-trust-item { font-size: 10.5px; }
        }

        /* Very small: 320px */
        @media (max-width: 320px) {
          .ws-h1 { font-size: 1.4rem; }
          .ws-h1-sub { font-size: 1.3rem; }
          .ws-badge-text { display: none; }
          .ws-badge { padding: 6px 10px; }
        }
      `}</style>

      <section ref={ref} className="ws-root">

        {/* Hero */}
        <div className="ws-hero">
          <div className="ws-wrap">
            <div className="ws-hero-grid">

              {/* Left */}
              <div>
                <div className={`ws-badge ${visible ? 'show' : ''}`}>
                  <span className="ws-badge-pulse" />
                  <span className="ws-badge-text">Trusted by 5000+ clients across India</span>
                </div>

                <h1 className={`ws-h1 ${visible ? 'show' : ''}`}>
                  India's most reliable
                  <span className="ws-h1-sub">compliance partner</span>
                </h1>

                <p className={`ws-desc ${visible ? 'show' : ''}`}>
                  From GST filings to business registrations — we handle every legal and
                  regulatory requirement with precision, speed, and complete peace of mind.
                </p>

                <div className={`ws-checks ${visible ? 'show' : ''}`}>
                  {checkpoints.map((c, i) => (
                    <div key={i} className="ws-check">
                      <div className="ws-check-icon">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5"
                            strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      {c}
                    </div>
                  ))}
                </div>

                <div className={`ws-btns ${visible ? 'show' : ''}`}>
                  <button className="ws-btn-primary">Start Filing Now</button>
                  <button className="ws-btn-outline">View Services</button>
                </div>
              </div>

              {/* Right — Illustration */}
              <div className={`ws-illus ${visible ? 'show' : ''}`}>
                <FinanceIllustration />
              </div>

            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="ws-trust">
          <div className="ws-trust-inner">
            <span className="ws-trust-label">Trusted for</span>
            <div className="ws-trust-vline" />
            <div className="ws-trust-items">
              {trustItems.map((item) => (
                <div key={item} className="ws-trust-item">
                  <div className="ws-trust-dot" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default WelcomeSection;