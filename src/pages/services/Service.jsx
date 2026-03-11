import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { servicesData } from "./data";

import {
  CheckCircle,
  Star,
  HelpCircle,
  Home,
  FileText,
  BarChart3,
  BriefcaseBusiness,
  Menu,
  X,
  ChevronDown,
  ArrowUp,
  ArrowRight,
  Phone,
} from "lucide-react";

/* ─── Google Fonts injection ─── */
const FontInjector = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Poppins:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);
  return null;
};

/* ─── Custom styles ─── */
const styles = `
  :root {
    --navy: #133f77;
    --navy-dark: #0d2e57;
    --navy-light: #1a5299;
    --gold: #c8a951;
    --cream: #f9f6f0;
    --text: #1e1e2e;
    --muted: #6b7280;
  }



  .sp-root { font-family: 'Poppins', sans-serif; color: var(--text); background: #ffffff; }
  .sp-serif { font-family: 'Cormorant Garamond', serif; }

  /* ── Hero ── */
  .sp-hero-section {
    position: relative;
    min-height: 92vh;
    display: flex;
    align-items: center;
    overflow: hidden;
  }
  .sp-hero-img {
    position: absolute; inset: 0;
    background-size: cover; background-position: center;
    transform: scale(1.05);
    transition: transform 8s ease;
  }
  .sp-hero-section:hover .sp-hero-img { transform: scale(1); }
  .sp-hero-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(13,46,87,0.92) 0%, rgba(19,63,119,0.78) 55%, rgba(0,0,0,0.45) 100%);
  }
  .sp-hero-content { position: relative; z-index: 2; }

  .sp-badge {
    display: inline-flex; align-items: center; gap: 6px;
    background: rgba(200,169,81,0.18); border: 1px solid rgba(200,169,81,0.5);
    color: #e8cc7a; padding: 6px 18px; border-radius: 100px;
    font-size: 0.72rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase;
    margin-bottom: 20px;
  }

  /* ── Buttons ── */
  .btn-primary {
    background: var(--gold); color: #0d2e57;
    padding: 14px 32px; border-radius: 4px; font-weight: 600; font-size: 0.88rem;
    border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
    transition: all 0.25s; letter-spacing: 0.02em; text-decoration: none;
    font-family: 'Poppins', sans-serif;
  }
  .btn-primary:hover { background: #debb6a; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(200,169,81,0.4); }

  .btn-outline {
    background: transparent; color: #fff;
    padding: 13px 32px; border-radius: 4px; font-weight: 500; font-size: 0.88rem;
    border: 1.5px solid rgba(255,255,255,0.5); cursor: pointer;
    display: inline-flex; align-items: center; gap: 8px;
    transition: all 0.25s; text-decoration: none;
    font-family: 'Poppins', sans-serif;
  }
  .btn-outline:hover { background: rgba(255,255,255,0.12); border-color: #fff; }

  /* ── Layout ── */
  .sp-layout { max-width: 1280px; margin: 0 auto; padding: 0 24px; }
  @media(min-width:640px){ .sp-layout { padding: 0 48px; } }

  /* ── Main content wrapper ── */
  .sp-content-wrapper {
    display: flex;
    gap: 48px;
    align-items: flex-start;
    padding-top: 60px;
    padding-bottom: 100px;
  }

  /* ── Sidebar ── */
  .sp-sidebar {
    display: none;
    width: 252px;
    flex-shrink: 0;
    position: sticky;
    top: 96px;
    align-self: flex-start;
  }

  @media(min-width: 1024px) {
    .sp-sidebar { display: block; }
    .sp-fab-mobile { display: none !important; }
    .sp-fab-top-mobile { display: none !important; }
    .sp-fab-top-desk { display: flex !important; }
  }

  @media(max-width: 1023px) {
    .sp-fab-top-desk { display: none !important; }
  }

  .sp-sidebar-inner {
    background: var(--cream);
    border-radius: 14px;
    padding: 24px;
    border: 1px solid #e8edf5;
    box-shadow: 0 4px 20px rgba(19,63,119,0.06);
  }

  .sp-sidebar-label {
    font-size: 0.68rem; font-weight: 700; letter-spacing: 0.14em;
    text-transform: uppercase; color: var(--gold); margin-bottom: 16px;
  }

  .sp-nav-item {
    display: flex; align-items: center; gap: 10px;
    padding: 10px 14px; border-radius: 8px;
    font-size: 0.82rem; font-weight: 500; color: var(--muted);
    cursor: pointer; transition: all 0.2s; border: none; background: none;
    width: 100%; text-align: left; font-family: 'Poppins', sans-serif;
  }
  .sp-nav-item:hover { color: var(--navy); background: rgba(19,63,119,0.07); }
  .sp-nav-item.active { background: var(--navy); color: #fff; }

  .sp-sidebar-cta {
    margin-top: 22px; background: var(--navy);
    border-radius: 10px; padding: 20px 18px; color: #fff;
  }
  .sp-sidebar-cta-title { font-family: 'Cormorant Garamond', serif; font-size: 1.15rem; margin-bottom: 6px; }
  .sp-sidebar-cta-sub { font-size: 0.76rem; color: rgba(255,255,255,0.68); margin-bottom: 16px; }

  /* ── Main content ── */
  .sp-main { flex: 1; min-width: 0; }

  /* ── Section headings ── */
  .sp-section-tag {
    font-size: 0.72rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase;
    color: var(--gold); margin-bottom: 10px; display: flex; align-items: center; gap: 10px;
  }
  .sp-section-tag::after { content:''; flex:1; height:1px; background: var(--gold); opacity:0.3; }
  .sp-section-h2 {
    font-family: 'Cormorant Garamond', serif; font-size: 2.5rem;
    color: var(--navy); line-height: 1.15; margin-bottom: 18px;
  }
  @media(max-width:640px){ .sp-section-h2 { font-size: 1.9rem; } }

  /* ── Divider ── */
  .sp-divider { width: 56px; height: 3px; background: var(--gold); border-radius: 2px; margin-bottom: 28px; }

  /* ── About section ── */
  .sp-section-about { margin-bottom: 80px; }
  .sp-about-desc { color: #4b5563; line-height: 1.9; font-size: 1rem; margin-bottom: 36px; max-width: 700px; }
  .sp-highlights-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 12px; }

  .sp-highlight {
    display: flex; gap: 14px; align-items: flex-start;
    padding: 16px 20px; border-left: 3px solid var(--navy);
    background: var(--cream); border-radius: 0 10px 10px 0;
    transition: border-color 0.2s, transform 0.2s;
  }
  .sp-highlight:hover { border-color: var(--gold); transform: translateX(4px); }
  .sp-highlight p { font-size: 0.88rem; font-weight: 500; color: #374151; }

  /* ── Features ── */
  .sp-section-features { margin-bottom: 80px; }
  .sp-features-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 20px; }

  .sp-feature {
    background: #fff; border: 1px solid #e8edf5;
    border-radius: 14px; padding: 28px 24px;
    transition: box-shadow 0.25s, transform 0.25s;
    position: relative; overflow: hidden;
  }
  .sp-feature::before {
    content: ''; position: absolute; top:0; left:0; right:0; height:3px;
    background: linear-gradient(90deg, var(--navy), var(--gold));
    transform: scaleX(0); transform-origin: left; transition: transform 0.3s;
  }
  .sp-feature:hover::before { transform: scaleX(1); }
  .sp-feature:hover { box-shadow: 0 12px 40px rgba(19,63,119,0.12); transform: translateY(-4px); }
  .sp-feature-icon { font-size: 2.2rem; margin-bottom: 14px; }
  .sp-feature h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; color: var(--navy); margin-bottom: 10px; }
  .sp-feature p { font-size: 0.84rem; color: #6b7280; line-height: 1.75; }

  /* ── Process ── */
  .sp-section-process { margin-bottom: 80px; }
  .sp-process-list { display: flex; flex-direction: column; gap: 14px; }

  .sp-step {
    display: grid; grid-template-columns: 56px 1fr; gap: 20px; align-items: start;
    padding: 24px 28px; background: #fff; border: 1px solid #e8edf5; border-radius: 14px;
    transition: box-shadow 0.2s, transform 0.2s;
  }
  .sp-step:hover { box-shadow: 0 8px 28px rgba(19,63,119,0.1); transform: translateX(4px); }
  .sp-step-num {
    width: 52px; height: 52px; background: var(--navy); color: #fff;
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    font-family: 'Cormorant Garamond', serif; font-size: 1.4rem; font-weight: 700; flex-shrink: 0;
  }
  .sp-step h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.22rem; color: var(--navy); margin-bottom: 6px; }
  .sp-step p { font-size: 0.86rem; color: #6b7280; line-height: 1.8; }

  .sp-process-cta {
    margin-top: 32px; background: linear-gradient(135deg, #0d2e57, #133f77);
    border-radius: 14px; padding: 40px 44px; text-align: center;
  }
  .sp-process-cta p { font-family: 'Cormorant Garamond', serif; color: #fff; font-size: 1.6rem; margin-bottom: 20px; }

  /* ── Stats ── */
  .sp-section-stats { margin-bottom: 80px; }
  .sp-stats-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
  @media(min-width:768px){ .sp-stats-grid { grid-template-columns: repeat(4, 1fr); } }

  .sp-stat {
    text-align: center; padding: 36px 16px;
    background: var(--navy); color: #fff; border-radius: 14px;
    position: relative; overflow: hidden;
  }
  .sp-stat::after {
    content:''; position: absolute; bottom:-24px; right:-24px;
    width: 90px; height: 90px; border-radius: 50%;
    background: rgba(255,255,255,0.05);
  }
  .sp-stat-emoji { font-size: 1.7rem; margin-bottom: 12px; }
  .sp-stat-num { font-family: 'Cormorant Garamond', serif; font-size: 2.8rem; font-weight: 700; color: var(--gold); line-height: 1; }
  .sp-stat-label { font-size: 0.74rem; font-weight: 500; color: rgba(255,255,255,0.7); margin-top: 8px; text-transform: uppercase; letter-spacing: 0.07em; }

  /* ── FAQ ── */
  .sp-section-faq { margin-bottom: 80px; }
  .sp-faq-list { display: flex; flex-direction: column; gap: 10px; }

  .sp-faq-item { border: 1px solid #e8edf5; border-radius: 12px; overflow: hidden; transition: box-shadow 0.2s; }
  .sp-faq-item:hover { box-shadow: 0 4px 16px rgba(19,63,119,0.08); }

  .sp-faq-btn {
    width: 100%; text-align: left; background: none; border: none; cursor: pointer;
    padding: 18px 22px; display: flex; align-items: center; justify-content: space-between; gap: 12px;
    font-family: 'Poppins', sans-serif; font-weight: 600; font-size: 0.9rem; color: var(--navy);
    transition: background 0.2s;
  }
  .sp-faq-btn:hover { background: var(--cream); }
  .sp-faq-btn.open { background: var(--navy); color: #fff; }
  .sp-faq-chevron { flex-shrink: 0; transition: transform 0.25s; }
  .sp-faq-chevron.open { transform: rotate(180deg); color: var(--gold); }
  .sp-faq-answer { padding: 18px 22px; background: var(--cream); font-size: 0.88rem; line-height: 1.85; color: #4b5563; border-top: 1px solid #e8edf5; }

  /* ── CTA Banner ── */
  .sp-cta-section {
    background: linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 50%, var(--navy-light) 100%);
    border-radius: 18px; padding: 60px 48px; text-align: center; position: relative; overflow: hidden;
  }
  .sp-cta-section::before {
    content:''; position: absolute; inset:0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  .sp-cta-section h2 { font-family: 'Cormorant Garamond', serif; font-size: 2.9rem; color: #fff; margin-bottom: 14px; position: relative; }
  .sp-cta-section p { color: rgba(255,255,255,0.78); font-size: 1.05rem; max-width: 560px; margin: 0 auto 32px; position: relative; font-weight: 300; }
  .sp-cta-btns { display: flex; flex-wrap: wrap; gap: 14px; justify-content: center; position: relative; }
  @media(max-width:640px){ .sp-cta-section { padding: 44px 24px; } .sp-cta-section h2 { font-size: 2rem; } }

  /* ── Mobile nav drawer ── */
  .sp-drawer { position: fixed; inset:0; z-index: 50; }
  .sp-drawer-bg { position: absolute; inset:0; background: rgba(0,0,0,0.5); backdrop-filter: blur(4px); }
  .sp-drawer-panel {
    position: absolute; right:0; top:0; bottom:0; width: 290px;
    background: #fff; overflow-y:auto; box-shadow: -8px 0 48px rgba(0,0,0,0.18);
    animation: slideIn 0.25s ease;
  }
  @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }

  .sp-drawer-header { display: flex; justify-content: space-between; align-items: center; padding: 28px 24px 20px; border-bottom: 1px solid #f0f0f0; }
  .sp-drawer-title { font-family: 'Cormorant Garamond', serif; font-size: 1.4rem; color: var(--navy); font-weight: 600; }

  /* ── Floating Action Buttons ── */
  .sp-fab {
    position: fixed; z-index: 40; border: none; cursor: pointer;
    width: 52px; height: 52px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 6px 20px rgba(0,0,0,0.22); transition: transform 0.2s, box-shadow 0.2s;
  }
  .sp-fab:hover { transform: scale(1.1); box-shadow: 0 10px 30px rgba(0,0,0,0.28); }

  /* Mobile only */
  .sp-fab-mobile { bottom: 28px; right: 28px; background: var(--navy); color: #fff; }
  .sp-fab-top-mobile { bottom: 92px; right: 28px; background: #fff; color: var(--navy); border: 2px solid #e8edf5; }

  /* Desktop only */
  .sp-fab-top-desk { bottom: 32px; right: 32px; background: var(--navy); color: #fff; }

  /* Wave bottom of hero */
  .sp-hero-wave { position: absolute; bottom: -1px; left: 0; width: 100%; display: block; }

  /* Hero title */
  .sp-hero-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.4rem, 6vw, 4.4rem);
    color: #fff; line-height: 1.1; margin-bottom: 20px; font-weight: 700;
  }
  .sp-hero-sub { color: rgba(255,255,255,0.82); font-weight: 300; font-size: clamp(1rem, 2vw, 1.2rem); margin-bottom: 36px; line-height: 1.75; }
  .sp-hero-btns { display: flex; flex-wrap: wrap; gap: 14px; }
`;

const ServicePage = () => {
  const { serviceId } = useParams();
  const service = servicesData[serviceId];
  const [openFaq, setOpenFaq] = useState(null);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [serviceId]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "features", "process", "stats", "faq"];
      const sp = window.scrollY + 120;
      setShowScrollTop(window.scrollY > 400);
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && sp >= el.offsetTop && sp < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 88, behavior: "smooth" });
  };

  const tableOfContents = [
    { id: "hero",     label: "Overview",     icon: Home },
    { id: "about",    label: "About",        icon: FileText },
    { id: "features", label: "Key Features", icon: Star },
    { id: "process",  label: "Our Process",  icon: BriefcaseBusiness },
    { id: "stats",    label: "Our Impact",   icon: BarChart3 },
    { id: "faq",      label: "FAQ",          icon: HelpCircle },
  ];

  if (!service) return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", color: "#133f77", marginBottom: 16 }}>
          Service Not Found
        </h2>
        <Link to="/" style={{ color: "#133f77", fontFamily: "'Poppins', sans-serif" }}>Return to Home</Link>
      </div>
    </div>
  );

  return (
    <>
      <FontInjector />
      <style>{styles}</style>

      <div className="sp-root">

        {/* ── Mobile FABs (hidden on desktop via CSS) ── */}
        <button className="sp-fab sp-fab-mobile sp-fab-mobile" onClick={() => setMobileMenuOpen(v => !v)} aria-label="Menu">
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        {showScrollTop && (
          <button className="sp-fab sp-fab-top-mobile" onClick={scrollToTop} aria-label="Scroll to top">
            <ArrowUp size={20} />
          </button>
        )}

        {/* Desktop scroll-to-top (hidden on mobile via CSS) */}
        {showScrollTop && (
          <button className="sp-fab sp-fab-top-desk" onClick={scrollToTop} aria-label="Scroll to top">
            <ArrowUp size={20} color="#fff" />
          </button>
        )}

        {/* ── Mobile Drawer ── */}
        {mobileMenuOpen && (
          <div className="sp-drawer">
            <div className="sp-drawer-bg" onClick={() => setMobileMenuOpen(false)} />
            <div className="sp-drawer-panel">
              <div className="sp-drawer-header">
                <span className="sp-drawer-title">Navigation</span>
                <button
                  style={{ border: "none", background: "none", cursor: "pointer", padding: 4 }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X size={22} color="#6b7280" />
                </button>
              </div>
              <div style={{ padding: "20px 24px" }}>
                <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {tableOfContents.map(item => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        className={`sp-nav-item${activeSection === item.id ? " active" : ""}`}
                        onClick={() => scrollToSection(item.id)}
                      >
                        <Icon size={16} /> {item.label}
                      </button>
                    );
                  })}
                </nav>
                <div className="sp-sidebar-cta" style={{ marginTop: 24 }}>
                  <p className="sp-sidebar-cta-title">Need Help?</p>
                  <p className="sp-sidebar-cta-sub">Our experts are ready to assist you</p>
                  <Link to="/contact">
                    <button className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════
            HERO
        ══════════════════════════════════════════ */}
        <section id="hero" className="sp-hero-section">
          <div className="sp-hero-img" style={{ backgroundImage: `url(${service.hero.image})` }} />
          <div className="sp-hero-overlay" />

          <div className="sp-hero-content sp-layout" style={{ width: "100%", paddingTop: 90, paddingBottom: 100 }}>
            <div style={{ maxWidth: 680 }}>
              <div className="sp-badge">Premium {serviceId?.toUpperCase()} Service</div>
              <h1 className="sp-hero-title">{service.hero.title}</h1>
              <p className="sp-hero-sub">{service.hero.subtitle}</p>
              <div className="sp-hero-btns">
                <Link to="/contact">
                  <button className="btn-primary">{service.hero.cta} <ArrowRight size={16} /></button>
                </Link>
                <Link to="/about">
                  <button className="btn-outline">Learn More</button>
                </Link>
              </div>
            </div>
          </div>

          <svg className="sp-hero-wave" viewBox="0 0 1440 60" preserveAspectRatio="none">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="#ffffff" />
          </svg>
        </section>

        {/* ══════════════════════════════════════════
            MAIN CONTENT
        ══════════════════════════════════════════ */}
        <div className="sp-layout">
          <div className="sp-content-wrapper">

            {/* ── Desktop Sidebar ── */}
            <aside className="sp-sidebar">
              <div className="sp-sidebar-inner">
                <p className="sp-sidebar-label">Contents</p>
                <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {tableOfContents.map(item => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        className={`sp-nav-item${activeSection === item.id ? " active" : ""}`}
                        onClick={() => scrollToSection(item.id)}
                      >
                        <Icon size={15} /> {item.label}
                      </button>
                    );
                  })}
                </nav>
                <div className="sp-sidebar-cta">
                  <p className="sp-sidebar-cta-title">Need Help?</p>
                  <p className="sp-sidebar-cta-sub">Our experts are ready to assist</p>
                  <Link to="/contact">
                    <button className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "10px 16px", fontSize: "0.82rem" }}>
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>
            </aside>

            {/* ── Main Content ── */}
            <main className="sp-main">

              {/* ── ABOUT ── */}
              <section id="about" className="sp-section-about">
                <div className="sp-section-tag"><span>Our Service</span></div>
                <h2 className="sp-section-h2">{service.about.title}</h2>
                <div className="sp-divider" />
                <p className="sp-about-desc">{service.about.description}</p>
                <div className="sp-highlights-grid">
                  {service.about.highlights.map((h, i) => (
                    <div key={i} className="sp-highlight">
                      <CheckCircle size={18} color="#133f77" style={{ flexShrink: 0, marginTop: 2 }} />
                      <p>{h}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── FEATURES ── */}
              <section id="features" className="sp-section-features">
                <div className="sp-section-tag"><span>What We Offer</span></div>
                <h2 className="sp-section-h2">Key Features & Services</h2>
                <div className="sp-divider" />
                <div className="sp-features-grid">
                  {service.detailedFeatures.map((f, i) => (
                    <div key={i} className="sp-feature">
                      <div className="sp-feature-icon">{f.icon}</div>
                      <h3>{f.title}</h3>
                      <p>{f.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── PROCESS ── */}
              <section id="process" className="sp-section-process">
                <div className="sp-section-tag"><span>Methodology</span></div>
                <h2 className="sp-section-h2">{service.process.title}</h2>
                <div className="sp-divider" />
                <p style={{ color: "#6b7280", marginBottom: 28, fontSize: "0.95rem" }}>Our proven step-by-step methodology</p>
                <div className="sp-process-list">
                  {service.process.steps.map((step, i) => (
                    <div key={i} className="sp-step">
                      <div className="sp-step-num">{i + 1}</div>
                      <div>
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="sp-process-cta">
                  <p>Ready to start your journey with us?</p>
                  <Link to="/contact">
                    <button className="btn-primary">Start Now <ArrowRight size={16} /></button>
                  </Link>
                </div>
              </section>

              {/* ── STATS ── */}
              <section id="stats" className="sp-section-stats">
                <div className="sp-section-tag"><span>Track Record</span></div>
                <h2 className="sp-section-h2">Our Impact in Numbers</h2>
                <div className="sp-divider" />
                <div className="sp-stats-grid">
                  {[
                    { number: "500+", label: "Projects Completed", emoji: "🏆" },
                    { number: "98%",  label: "Client Satisfaction", emoji: "⭐" },
                    { number: "15+",  label: "Years Experience",    emoji: "📅" },
                    { number: "24/7", label: "Support Available",   emoji: "🎧" },
                  ].map((s, i) => (
                    <div key={i} className="sp-stat">
                      <div className="sp-stat-emoji">{s.emoji}</div>
                      <div className="sp-stat-num">{s.number}</div>
                      <div className="sp-stat-label">{s.label}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── FAQ ── */}
              <section id="faq" className="sp-section-faq">
                <div className="sp-section-tag"><span>Questions</span></div>
                <h2 className="sp-section-h2">Frequently Asked Questions</h2>
                <div className="sp-divider" />
                <div className="sp-faq-list">
                  {service.faqs.map((faq, i) => (
                    <div key={i} className="sp-faq-item">
                      <button
                        className={`sp-faq-btn${openFaq === i ? " open" : ""}`}
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          size={18}
                          className={`sp-faq-chevron${openFaq === i ? " open" : ""}`}
                        />
                      </button>
                      {openFaq === i && (
                        <div className="sp-faq-answer">{faq.answer}</div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* ── CTA BANNER ── */}
              <section className="sp-cta-section">
                <h2>{service.cta.title}</h2>
                <p>{service.cta.description}</p>
                <div className="sp-cta-btns">
                  <Link to="/contact">
                    <button className="btn-primary">{service.cta.primaryButton} <ArrowRight size={16} /></button>
                  </Link>
                  <a href="tel:+919999999999" style={{ textDecoration: "none" }}>
                    <button className="btn-outline"><Phone size={16} /> {service.cta.secondaryButton}</button>
                  </a>
                </div>
              </section>

            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;