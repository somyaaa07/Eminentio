import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { regulatoryData } from "./data";


import {
  CheckCircle, Rocket, Phone, Star,
  TrendingUp, HelpCircle, Home, FileText, Briefcase, BarChart3,
  Calendar, BookOpen, Shield, Building, Target, Lightbulb, Clock,
  AlertTriangle, Download, Mail, ChevronRight, ArrowRight,
  ExternalLink, Settings, Zap, Activity,
  DollarSign, Menu, X, Plus, Minus, ChevronDown,
} from "lucide-react";

/* ─── Design Tokens ─────────────────────────────────── */
const T = {
  ink:        "#0e0e0e",
  inkMid:     "#3a3a3a",
  inkLight:   "#7a7a7a",
  paper:      "#faf9f7",
  paperDark:  "#f0ede8",
  white:      "#ffffff",
  accentLight:"#f0f0f0",
  rule:       "#e4e0d8",
  navy:       "#0f2d52",
  navyMid:    "#1a4270",
  navyLight:  "#e8eff8",
  danger:     "#c0392b",
  dangerBg:   "#fdf2f0",
  warning:    "#b85c00",
  warningBg:  "#fef7f0",
  success:    "#1a6b3c",
  successBg:  "#f0faf5",
};

const fontDisplay = "'Cormorant Garamond', 'Georgia', serif";
const fontSans    = "'Poppins', system-ui, sans-serif";

/* ─── Responsive Hook ───────────────────────────────── */
function useBreakpoint() {
  const getW = () => (typeof window !== "undefined" ? window.innerWidth : 1200);
  const calc = (w) => ({ isMobile: w < 768, isTablet: w >= 768 && w < 1024, isDesktop: w >= 1024, w });
  const [s, setS] = useState(() => calc(getW()));
  useEffect(() => {
    const h = () => setS(calc(window.innerWidth));
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return s;
}

/* ─── Global CSS ─────────────────────────────────────── */
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Poppins:wght@400;500;600;700&display=swap');
  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { overflow-x: hidden; }

  /* ── Base layout ── */
  .rv2-body {
    max-width: 1280px;
    margin: 0 auto;
    padding: 56px 24px 80px;
    display: flex;
    gap: 48px;
    align-items: flex-start;
  }
  .rv2-sidebar {
    width: 220px;
    flex-shrink: 0;
    position: sticky;
    top: 80px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .rv2-main { flex: 1; min-width: 0; }

  /* ── Section card padding ── */
  .rv2-card-pad { padding: 48px; }

  /* ── Hero ── */
  .rv2-hero { min-height: 640px; }
  .rv2-hero-inner { max-width: 1280px; margin: 0 auto; padding: 0 48px; }
  .rv2-hero-content { max-width: 680px; }
  .rv2-hero-title { font-size: clamp(40px, 5vw, 72px) !important; }
  .rv2-hero-sub   { font-size: 17px !important; }
  .rv2-hero-btns  { display: flex; gap: 12px; flex-wrap: wrap; }
  .rv2-hero-btn   { padding: 13px 28px !important; width: auto !important; justify-content: flex-start; }

  /* ── Grids ── */
  .rv2-grid-highlights { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 10px; }
  .rv2-grid-framework  { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 12px; }
  .rv2-grid-services   { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 12px; }
  .rv2-grid-tools      { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 10px; }
  .rv2-grid-calendar   { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 8px; }
  .rv2-grid-2col       { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .rv2-grid-process    { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 12px; }
  .rv2-grid-faq        { display: grid; grid-template-columns: 280px 1fr; gap: 48px; }
  .rv2-faq-left        { position: sticky; top: 100px; align-self: start; }

  /* ── Services header row ── */
  .rv2-services-head {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 28px;
    flex-wrap: wrap;
    gap: 12px;
  }

  /* ── Guide row ── */
  .rv2-guide-row { display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; }
  .rv2-guide-actions { display: flex; flex-direction: column; align-items: flex-end; gap: 6px; flex-shrink: 0; }

  /* ── CTA button row ── */
  .rv2-cta-btns { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin-bottom: 28px; }
  .rv2-cta-btn  { flex: 0 0 auto; width: auto; }

  /* ── Industry tabs ── */
  .rv2-ind-tabs { overflow-x: auto; margin-bottom: 20px; padding-bottom: 4px; -webkit-overflow-scrolling: touch; }
  .rv2-ind-tabs-inner { display: flex; gap: 4px; padding: 4px; background: ${T.paperDark}; border-radius: 12px; width: fit-content; min-width: 100%; }

  /* ── Mobile topbar — hidden on desktop ── */
  .rv2-topbar { display: none; }

  /* ── Scroll cue ── */
  .rv2-scroll-cue { display: flex; }

  /* ════════════════════════════════
     TABLET  768–1023px
  ════════════════════════════════ */
  @media (max-width: 1023px) {
    .rv2-sidebar  { display: none; }
    .rv2-topbar {
      display: flex;
      position: sticky;
      top: 0;
      z-index: 40;
      background: #ffffff;
      border-bottom: 1px solid ${T.rule};
      padding: 10px 20px;
      align-items: center;
      justify-content: space-between;
    }
    .rv2-body         { padding: 32px 20px 64px; gap: 0; }
    .rv2-hero         { min-height: 560px; }
    .rv2-hero-inner   { padding: 0 28px; }
    .rv2-card-pad     { padding: 32px 28px; }
    .rv2-services-head { flex-direction: column; align-items: flex-start; }
    .rv2-grid-faq     { grid-template-columns: 1fr; gap: 28px; }
    .rv2-faq-left     { position: static; }
    .rv2-scroll-cue   { display: none; }
  }

  /* ════════════════════════════════
     MOBILE  < 768px
  ════════════════════════════════ */
  @media (max-width: 767px) {
    .rv2-hero         { min-height: 500px; }
    .rv2-hero-inner   { padding: 70px 16px 44px !important; }
    .rv2-hero-title   { font-size: clamp(26px, 8vw, 38px) !important; }
    .rv2-hero-sub     { font-size: 14px !important; }
    .rv2-hero-btns    { flex-direction: column; }
    .rv2-hero-btn     { width: 100% !important; justify-content: center !important; }

    .rv2-body         { padding: 20px 14px 56px; }
    .rv2-card-pad     { padding: 18px 16px; }

    .rv2-grid-highlights,
    .rv2-grid-framework,
    .rv2-grid-services,
    .rv2-grid-tools,
    .rv2-grid-calendar,
    .rv2-grid-process  { grid-template-columns: 1fr !important; }

    .rv2-grid-2col     { grid-template-columns: 1fr !important; }
    .rv2-grid-faq      { grid-template-columns: 1fr; gap: 22px; }
    .rv2-faq-left      { position: static; }

    .rv2-services-head { flex-direction: column; align-items: flex-start; }

    .rv2-guide-row     { flex-direction: column; gap: 10px; }
    .rv2-guide-actions { flex-direction: row; align-items: center; }

    .rv2-cta-btns      { flex-direction: column; align-items: stretch; }
    .rv2-cta-btn       { width: 100% !important; justify-content: center !important; }

    .rv2-scroll-cue    { display: none; }
  }

  /* ════════════════════════════════
     SMALL MOBILE  < 480px
  ════════════════════════════════ */
  @media (max-width: 479px) {
    .rv2-hero-inner  { padding: 60px 12px 36px !important; }
    .rv2-card-pad    { padding: 14px 12px; }
    .rv2-body        { padding: 16px 10px 48px; }
    .rv2-ind-tabs-inner { min-width: max-content; }
  }
`;

/* ─── Reusable atoms ─────────────────────────────────── */
const Chip = ({ children, variant = "default" }) => {
  const V = {
    default: { bg: T.paperDark, color: T.inkMid,  border: T.rule },
    navy:    { bg: T.navyLight, color: T.navy,     border: "#c0d0e4" },
    accent:  { bg: T.navyLight, color: T.navy,     border: "#c0d0e4" },
    danger:  { bg: T.dangerBg,  color: T.danger,   border: "#f5c6c2" },
    warning: { bg: T.warningBg, color: T.warning,  border: "#f5ddc0" },
    success: { bg: T.successBg, color: T.success,  border: "#b8dfc8" },
  };
  const v = V[variant] || V.default;
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "3px 10px", borderRadius: 20, background: v.bg, color: v.color, border: `1px solid ${v.border}`, fontSize: 11, fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase", fontFamily: fontSans }}>
      {children}
    </span>
  );
};

const Eyebrow = ({ children, style = {} }) => (
  <p style={{ fontFamily: fontSans, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: T.navy, margin: "0 0 12px", ...style }}>
    {children}
  </p>
);

const Prose = ({ children, style = {} }) => (
  <p style={{ fontFamily: fontSans, fontSize: 15, lineHeight: 1.75, color: T.inkMid, margin: 0, ...style }}>
    {children}
  </p>
);

const Divider = ({ style = {} }) => (
  <hr style={{ border: "none", borderTop: `1px solid ${T.rule}`, margin: "22px 0", ...style }} />
);

const NavItem = ({ active, onClick, icon: Icon, label }) => (
  <button onClick={onClick} style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "8px 12px", borderRadius: 8, border: "none", cursor: "pointer", background: active ? T.navy : "transparent", color: active ? T.white : T.inkLight, fontFamily: fontSans, fontSize: 13, fontWeight: active ? 600 : 500, transition: "all 0.15s", textAlign: "left" }}
    onMouseEnter={e => { if (!active) e.currentTarget.style.background = T.paperDark; }}
    onMouseLeave={e => { if (!active) e.currentTarget.style.background = "transparent"; }}
  >
    <Icon size={14} style={{ flexShrink: 0, opacity: active ? 1 : 0.6 }} />
    {label}
  </button>
);

const ImpactBadge = ({ impact }) => {
  const map = { Critical: "danger", High: "warning", Medium: "accent" };
  return <Chip variant={map[impact] || "default"}>{impact} impact</Chip>;
};

const card = (extra = {}) => ({ background: T.white, border: `1px solid ${T.rule}`, borderRadius: 16, ...extra });

/* ═══════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════ */
export default function RegulatoryV2() {
  const { regulatoryId } = useParams();
  const regulatory = regulatoryData?.[regulatoryId];
  const { isMobile, isTablet, isDesktop } = useBreakpoint();

  const [openFaq, setOpenFaq]                   = useState(null);
  const [activeSection, setActiveSection]       = useState("hero");
  const [selectedIndustry, setSelectedIndustry] = useState(0);
  const [selectedCase, setSelectedCase]         = useState(0);
  const [mobileOpen, setMobileOpen]             = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    const IDS = ["hero","about","overview","features","calendar","industry","violations","cases","resources","process","faq"];
    const onScroll = () => {
      const pos = window.scrollY + 140;
      for (const id of IDS) {
        const el = document.getElementById(id);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) { setActiveSection(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { document.body.style.overflow = mobileOpen ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [mobileOpen]);
  useEffect(() => { if (isDesktop) setMobileOpen(false); }, [isDesktop]);

  const goto = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
  };

  if (!regulatory) return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: T.paper, padding: 24 }}>
      <div style={{ textAlign: "center" }}>
        <Shield size={40} style={{ color: T.navy, marginBottom: 20 }} />
        <p style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: 24, color: T.ink, marginBottom: 12 }}>Page Not Found</p>
        <Link to="/" style={{ color: T.navy, fontFamily: fontSans, fontSize: 14, fontWeight: 600 }}>← Return Home</Link>
      </div>
    </div>
  );

  const navItems = [
    { id: "hero",       label: "Overview",     icon: Home },
    { id: "about",      label: "About",        icon: FileText },
    { id: "overview",   label: "Framework",    icon: BookOpen },
    { id: "features",   label: "Services",     icon: Star },
    { id: "calendar",   label: "Calendar",     icon: Calendar },
    { id: "industry",   label: "Industries",   icon: Building },
    { id: "violations", label: "Violations",   icon: AlertTriangle },
    { id: "cases",      label: "Case Studies", icon: Target },
    { id: "resources",  label: "Resources",    icon: Download },
    { id: "process",    label: "Process",      icon: Briefcase },
    { id: "faq",        label: "FAQ",          icon: HelpCircle },
  ];

  const featureIcons = [FileText, Building, BarChart3, DollarSign, Shield, Settings, Zap, Activity];

  /* font-size shortcuts driven by JS (for cases where CSS classes can't help) */
  const fh2 = isMobile ? 26 : isTablet ? 32 : 40;
  const fh3 = isMobile ? 18 : 22;

  return (
    <div style={{ background: T.paper, fontFamily: fontSans, minHeight: "100vh" }}>
      <style>{GLOBAL_CSS}</style>

      {/* ══ HERO ══════════════════════════════════════════ */}
      <section id="hero" className="rv2-hero" style={{ position: "relative", overflow: "hidden", display: "flex", alignItems: "center" }}>
        <img src={regulatory.hero.image} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right, ${T.ink}f0 0%, ${T.ink}cc 55%, ${T.ink}60 100%)` }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }} />
        {/* <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.5), transparent)" }} /> */}

        <div className="rv2-hero-inner" style={{ position: "relative", width: "100%" }}>
          <div className="rv2-hero-content">
            <div style={{ marginBottom: 18 }}>
              <Chip variant="accent"><Shield size={10} /> {regulatoryId?.toUpperCase()} Compliance</Chip>
            </div>
            <h1 className="rv2-hero-title" style={{ fontFamily: fontDisplay, fontWeight: 700, lineHeight: 1.05, color: T.white, margin: "0 0 16px" }}>
              {regulatory.hero.title}
            </h1>
            <p className="rv2-hero-sub" style={{ fontFamily: fontSans, lineHeight: 1.7, color: "rgba(255,255,255,0.72)", margin: "0 0 28px", maxWidth: 520 }}>
              {regulatory.hero.subtitle}
            </p>
            <div className="rv2-hero-btns">
              <Link to="/contact" style={{ textDecoration: "none", flex: isMobile ? "1 1 100%" : "0 0 auto" }}>
                <button className="rv2-hero-btn" style={{ display: "flex", alignItems: "center", gap: 8, borderRadius: 10, border: "none", background: T.white, color: T.navy, cursor: "pointer", fontFamily: fontSans, fontSize: 14, fontWeight: 700 }}>
                  {regulatory.hero.cta} <ArrowRight size={15} />
                </button>
              </Link>
              <Link to="/contact" style={{ textDecoration: "none", flex: isMobile ? "1 1 100%" : "0 0 auto" }}>
                <button className="rv2-hero-btn" style={{ display: "flex", alignItems: "center", gap: 8, borderRadius: 10, cursor: "pointer", background: "rgba(255,255,255,0.10)", color: T.white, border: "1px solid rgba(255,255,255,0.25)", fontFamily: fontSans, fontSize: 14, fontWeight: 600 }}>
                  <Phone size={14} /> Schedule Call
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="rv2-scroll-cue" style={{ position: "absolute", bottom: 28, right: 48, flexDirection: "column", alignItems: "center", gap: 6, opacity: 0.45 }}>
          <span style={{ fontFamily: fontSans, fontSize: 11, letterSpacing: "0.1em", color: T.white, textTransform: "uppercase" }}>Scroll</span>
          <ChevronDown size={16} color={T.white} />
        </div>
      </section>

      {/* ══ STICKY TOPBAR (tablet + mobile via CSS) ════════ */}
      <div className="rv2-topbar">
        <span style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: 15, color: T.ink }}>{regulatoryId?.toUpperCase()} Compliance</span>
        <button onClick={() => setMobileOpen(v => !v)} style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 14px", borderRadius: 8, border: `1px solid ${T.rule}`, background: T.white, color: T.ink, cursor: "pointer", fontFamily: fontSans, fontSize: 13, fontWeight: 600 }}>
          {mobileOpen ? <X size={14} /> : <Menu size={14} />} Menu
        </button>
      </div>

      {/* ══ DRAWER ════════════════════════════════════════ */}
      {mobileOpen && (
        <div onClick={() => setMobileOpen(false)} style={{ position: "fixed", inset: 0, zIndex: 999, background: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}>
          <div onClick={e => e.stopPropagation()} style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: Math.min(280, window.innerWidth * 0.82), background: T.white, padding: "20px 16px", overflowY: "auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <span style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: 20, color: T.ink }}>Navigate</span>
              <button onClick={() => setMobileOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}><X size={18} style={{ color: T.inkLight }} /></button>
            </div>
            <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {navItems.map(n => <NavItem key={n.id} active={activeSection === n.id} onClick={() => goto(n.id)} icon={n.icon} label={n.label} />)}
            </nav>
            <div style={{ marginTop: 24, padding: 16, background: T.navyLight, borderRadius: 12, border: `1px solid #c0d0e4` }}>
              <p style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: 17, color: T.navy, marginBottom: 6 }}>Need Help?</p>
              <p style={{ fontFamily: fontSans, fontSize: 12, color: T.inkLight, marginBottom: 14 }}>Our experts are ready to assist.</p>
              <Link to="/contact">
                <button style={{ width: "100%", padding: "9px 0", borderRadius: 8, border: "none", background: T.navy, color: T.white, fontFamily: fontSans, fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ══ BODY ═══════════════════════════════════════════ */}
      <div className="rv2-body">

        {/* ─── SIDEBAR (hidden <1024px via CSS) ─── */}
        <aside className="rv2-sidebar">
          <div style={{ ...card(), padding: "16px 12px" }}>
            <p style={{ fontFamily: fontSans, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: T.inkLight, margin: "0 0 12px", paddingLeft: 12 }}>On this page</p>
            <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {navItems.map(n => <NavItem key={n.id} active={activeSection === n.id} onClick={() => goto(n.id)} icon={n.icon} label={n.label} />)}
            </nav>
          </div>
          <div style={{ background: T.navy, borderRadius: 16, padding: 20, color: T.white, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -20, right: -20, width: 80, height: 80, borderRadius: "50%", background: "rgba(255,255,255,0.12)" }} />
            <Mail size={20} style={{ marginBottom: 12, opacity: 0.7 }} />
            <p style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: 18, marginBottom: 6 }}>Need Help?</p>
            <p style={{ fontFamily: fontSans, fontSize: 12, color: "rgba(255,255,255,0.55)", marginBottom: 16 }}>Our experts are ready today.</p>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <button style={{ width: "100%", padding: "10px 0", borderRadius: 8, border: "none", background: T.white, color: T.navy, fontFamily: fontSans, fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Contact Us</button>
            </Link>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 12, opacity: 0.45, fontSize: 11, fontFamily: fontSans }}>
              <Phone size={11} /> +91 XXXX-XXXXXX
            </div>
          </div>
        </aside>

        {/* ─── MAIN CONTENT ─── */}
        <main className="rv2-main">

          {/* ── ABOUT ── */}
          <section id="about" style={{ paddingBottom: 40 }}>
            <div className="rv2-card-pad" style={{ ...card() }}>
              <Eyebrow>About this Service</Eyebrow>
              <p style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: fh2, lineHeight: 1.1, color: T.ink, marginBottom: 14 }}>{regulatory.about.title}</p>
              <Prose style={{ marginBottom: 22, maxWidth: 600 }}>{regulatory.about.description}</Prose>
              <div className="rv2-grid-highlights">
                {regulatory.about.highlights.map((h, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, padding: "12px 14px", background: T.paper, borderRadius: 10, border: `1px solid ${T.rule}`, transition: "border-color 0.15s" }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = T.navy}
                    onMouseLeave={e => e.currentTarget.style.borderColor = T.rule}
                  >
                    <CheckCircle size={15} style={{ color: T.navy, flexShrink: 0, marginTop: 2 }} />
                    <p style={{ fontFamily: fontSans, fontSize: 13, lineHeight: 1.6, color: T.inkMid, margin: 0 }}>{h}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── FRAMEWORK ── */}
          {regulatory.regulatoryOverview && (
            <section id="overview" style={{ paddingBottom: 40 }}>
              <div className="rv2-card-pad" style={{ background: T.navy, borderRadius: 20, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
                <div style={{ position: "relative" }}>
                  <Eyebrow style={{ color: "rgba(255,255,255,0.7)" }}>Regulatory Framework</Eyebrow>
                  <p style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: fh2, lineHeight: 1.1, color: T.white, marginBottom: 14 }}>{regulatory.regulatoryOverview.title}</p>
                  <p style={{ fontFamily: fontSans, fontSize: isMobile ? 13 : 15, lineHeight: 1.75, color: "rgba(255,255,255,0.62)", marginBottom: 28, maxWidth: 560 }}>{regulatory.regulatoryOverview.introduction}</p>
                  <div className="rv2-grid-framework">
                    {regulatory.regulatoryOverview.keyAspects.map((a, i) => (
                      <div key={i} style={{ padding: "18px 20px", borderRadius: 12, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)", transition: "background 0.2s" }}
                        onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.11)"}
                        onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.06)"}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                          <div style={{ width: 3, height: 20, borderRadius: 2, background: "rgba(255,255,255,0.6)", flexShrink: 0 }} />
                          <h3 style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: 17, color: T.white, margin: 0 }}>{a.title}</h3>
                        </div>
                        <p style={{ fontFamily: fontSans, fontSize: 12, lineHeight: 1.65, color: "rgba(255,255,255,0.52)", marginBottom: 12 }}>{a.description}</p>
                        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 5 }}>
                          {a.regulations.map((r, j) => (
                            <li key={j} style={{ display: "flex", gap: 7, alignItems: "flex-start", fontSize: 12, color: "rgba(255,255,255,0.45)", fontFamily: fontSans }}>
                              <ChevronRight size={12} style={{ color: "rgba(255,255,255,0.5)", flexShrink: 0, marginTop: 2 }} />{r}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ── SERVICES ── */}
          <section id="features" style={{ paddingBottom: 40 }}>
            <Eyebrow>Our Services</Eyebrow>
            <div className="rv2-services-head">
              <p style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: fh2, lineHeight: 1.1, color: T.ink }}>Comprehensive Solutions</p>
              <Prose style={{ maxWidth: 320 }}>End-to-end compliance services tailored for your business.</Prose>
            </div>
            <div className="rv2-grid-services">
              {regulatory.detailedFeatures.map((f, i) => {
                const Icon = featureIcons[i] || Settings;
                return (
                  <div key={i} style={{ ...card({ padding: "22px 20px" }), transition: "all 0.2s", cursor: "default", borderLeft: `3px solid ${T.rule}` }}
                    onMouseEnter={e => { e.currentTarget.style.borderLeftColor = T.navy; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.06)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderLeftColor = T.rule; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                  >
                    <div style={{ width: 38, height: 38, borderRadius: 10, background: T.navyLight, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                      <Icon size={17} style={{ color: T.navy }} />
                    </div>
                    <h3 style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: 19, color: T.ink, marginBottom: 7 }}>{f.title}</h3>
                    <p style={{ fontFamily: fontSans, fontSize: 13, lineHeight: 1.65, color: T.inkLight, margin: 0 }}>{f.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ── CALENDAR ── */}
          {regulatory.complianceCalendar && (
            <section id="calendar" style={{ paddingBottom: 40 }}>
              <div className="rv2-card-pad" style={{ ...card() }}>
                <Eyebrow>Compliance Calendar</Eyebrow>
                <p style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: fh2, lineHeight: 1.1, color: T.ink, marginBottom: 12 }}>{regulatory.complianceCalendar.title}</p>
                <Prose style={{ marginBottom: 24 }}>{regulatory.complianceCalendar.description}</Prose>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {regulatory.complianceCalendar.deadlines.map((d, i) => (
                    <div key={i} style={{ borderRadius: 12, overflow: "hidden", border: `1px solid ${T.rule}` }}>
                      <div style={{ background: T.navy, padding: "12px 18px", display: "flex", alignItems: "center", gap: 10 }}>
                        <Calendar size={14} style={{ color: "rgba(255,255,255,0.6)" }} />
                        <h3 style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: 17, color: T.white, margin: 0 }}>{d.period}</h3>
                      </div>
                      <div style={{ padding: 12 }}>
                        <div className="rv2-grid-calendar">
                          {d.filings.map((f, j) => (
                            <div key={j} style={{ display: "flex", gap: 12, padding: "12px 14px", background: T.paper, borderRadius: 10, border: `1px solid ${T.rule}` }}>
                              <div style={{ width: 26, height: 26, borderRadius: 7, background: T.navy, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: fontSans, fontSize: 11, fontWeight: 700, color: T.white }}>{j + 1}</div>
                              <div>
                                <p style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: 15, color: T.ink, marginBottom: 2 }}>{f.form}</p>
                                <p style={{ fontFamily: fontSans, fontSize: 11, color: T.inkLight, marginBottom: 6 }}>{f.description}</p>
                                <div style={{ display: "flex", alignItems: "center", gap: 5, fontFamily: fontSans, fontSize: 11, fontWeight: 700, color: T.navy }}>
                                  <Clock size={10} /> {f.dueDate}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ── INDUSTRY GUIDANCE ── */}
          {regulatory.industryGuidance && (
            <section id="industry" style={{ paddingBottom: 40 }}>
              <div className="rv2-card-pad" style={{ ...card() }}>
                <Eyebrow>Industry Guidance</Eyebrow>
                <p style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: fh2, lineHeight: 1.1, color: T.ink, marginBottom: 12 }}>{regulatory.industryGuidance.title}</p>
                <Prose style={{ marginBottom: 18 }}>{regulatory.industryGuidance.description}</Prose>
                <div className="rv2-ind-tabs">
                  <div className="rv2-ind-tabs-inner">
                    {regulatory.industryGuidance.sectors.map((s, i) => (
                      <button key={i} onClick={() => setSelectedIndustry(i)} style={{ padding: "7px 14px", borderRadius: 9, border: "none", cursor: "pointer", whiteSpace: "nowrap", background: selectedIndustry === i ? T.navy : "transparent", color: selectedIndustry === i ? T.white : T.inkLight, fontFamily: fontSans, fontSize: 13, fontWeight: 600, transition: "all 0.15s" }}>
                        {s.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="rv2-grid-2col">
                  {[
                    { label: "Key Challenges", icon: AlertTriangle, iconColor: T.warning, items: regulatory.industryGuidance.sectors[selectedIndustry].challenges, check: false },
                    { label: "Our Solutions",  icon: Lightbulb,     iconColor: T.success, items: regulatory.industryGuidance.sectors[selectedIndustry].solutions,  check: true  },
                  ].map(({ label, icon: Icon, iconColor, items, check }) => (
                    <div key={label} style={{ background: T.paper, borderRadius: 12, padding: "18px 16px", border: `1px solid ${T.rule}` }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                        <Icon size={14} style={{ color: iconColor }} />
                        <h4 style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: 16, color: T.ink, margin: 0 }}>{label}</h4>
                      </div>
                      <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 7 }}>
                        {items.map((item, j) => (
                          <li key={j} style={{ display: "flex", gap: 9, alignItems: "flex-start", padding: "9px 11px", background: T.white, borderRadius: 8, border: `1px solid ${T.rule}`, fontSize: 12, color: T.inkMid, fontFamily: fontSans, lineHeight: 1.5 }}>
                            {check ? <CheckCircle size={13} style={{ color: T.success, flexShrink: 0, marginTop: 1 }} /> : <ChevronRight size={13} style={{ color: T.warning, flexShrink: 0, marginTop: 1 }} />}
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ── VIOLATIONS ── */}
          {regulatory.violations && (
            <section id="violations" style={{ paddingBottom: 40 }}>
              <div className="rv2-card-pad" style={{ ...card() }}>
                <Eyebrow>Compliance Risk</Eyebrow>
                <p style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: fh2, lineHeight: 1.1, color: T.ink, marginBottom: 12 }}>{regulatory.violations.title}</p>
                <Prose style={{ marginBottom: 22 }}>{regulatory.violations.description}</Prose>

                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {regulatory.violations.commonViolations.map((v, i) => (
                    <div key={i} style={{ borderRadius: 12, overflow: "hidden", border: `1px solid ${T.rule}`, transition: "border-color 0.15s" }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = "#c0d0e4"}
                      onMouseLeave={e => e.currentTarget.style.borderColor = T.rule}
                    >
                      <div style={{ padding: "14px 18px", background: T.paper, display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
                        <div style={{ minWidth: 0, flex: 1 }}>
                          <h3 style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: isMobile ? 16 : 18, color: T.ink, marginBottom: 3 }}>{v.violation}</h3>
                          <p style={{ fontFamily: fontSans, fontSize: 12, color: T.inkLight, margin: 0 }}>{v.penalty}</p>
                        </div>
                        <ImpactBadge impact={v.impact} />
                      </div>
                      <div style={{ padding: "12px 18px", display: "flex", gap: 9, borderTop: `1px solid ${T.rule}`, background: T.white }}>
                        <Shield size={13} style={{ color: T.navy, flexShrink: 0, marginTop: 2 }} />
                        <p style={{ fontFamily: fontSans, fontSize: 12, color: T.inkMid, margin: 0, lineHeight: 1.6 }}>
                          <strong style={{ color: T.navy, fontWeight: 700 }}>Prevention: </strong>{v.prevention}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {[
                  regulatory.violations.compoundingProcess && { data: regulatory.violations.compoundingProcess, rightLabel: "Benefits", rightItems: regulatory.violations.compoundingProcess.benefits, RIcon: CheckCircle, rColor: T.success },
                  regulatory.violations.enforcementMechanism && { data: regulatory.violations.enforcementMechanism, rightLabel: "Consequences", rightItems: regulatory.violations.enforcementMechanism.consequences, RIcon: AlertTriangle, rColor: T.danger },
                ].filter(Boolean).map((blk, bi) => (
                  <div key={bi} style={{ marginTop: 18, background: T.paper, borderRadius: 12, padding: isMobile ? "16px 14px" : "22px", border: `1px solid ${T.rule}` }}>
                    <h3 style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: fh3, color: T.ink, marginBottom: 18 }}>{blk.data.title}</h3>
                    <div className="rv2-grid-2col">
                      <div>
                        <p style={{ fontFamily: fontSans, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: T.inkLight, marginBottom: 11 }}>Process Steps</p>
                        <ol style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 7 }}>
                          {blk.data.steps.map((s, j) => (
                            <li key={j} style={{ display: "flex", gap: 9, alignItems: "flex-start", fontSize: 12, color: T.inkMid, fontFamily: fontSans, lineHeight: 1.6 }}>
                              <span style={{ flexShrink: 0, width: 20, height: 20, borderRadius: 5, background: T.navy, color: T.white, fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{j + 1}</span>
                              {s}
                            </li>
                          ))}
                        </ol>
                      </div>
                      <div>
                        <p style={{ fontFamily: fontSans, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: T.inkLight, marginBottom: 11 }}>{blk.rightLabel}</p>
                        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 7, marginBottom: 12 }}>
                          {blk.rightItems.map((item, j) => (
                            <li key={j} style={{ display: "flex", gap: 9, alignItems: "flex-start", fontSize: 12, color: T.inkMid, fontFamily: fontSans, lineHeight: 1.6 }}>
                              <blk.RIcon size={13} style={{ color: blk.rColor, flexShrink: 0, marginTop: 2 }} />{item}
                            </li>
                          ))}
                        </ul>
                        <div style={{ padding: "9px 12px", background: T.navyLight, borderRadius: 8, fontSize: 12, fontFamily: fontSans }}>
                          <span style={{ fontWeight: 700, color: T.navy }}>Timeline: </span>
                          <span style={{ color: T.inkMid }}>{blk.data.timeline}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {regulatory.violations.strikeOffProcess && (
                  <div style={{ marginTop: 18 }}>
                    <h3 style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: fh3, color: T.ink, marginBottom: 14 }}>{regulatory.violations.strikeOffProcess.title}</h3>
                    <div className="rv2-grid-2col">
                      <div style={{ background: T.dangerBg, borderRadius: 12, padding: "18px 16px", border: `1px solid #f5c6c2` }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                          <AlertTriangle size={14} style={{ color: T.danger }} />
                          <h4 style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: 15, color: T.ink, margin: 0 }}>Company Strike-Off</h4>
                        </div>
                        <p style={{ fontFamily: fontSans, fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: T.danger, marginBottom: 6 }}>Grounds</p>
                        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 5, marginBottom: 14 }}>
                          {regulatory.violations.strikeOffProcess.strikeOff.grounds.map((g, i) => (
                            <li key={i} style={{ display: "flex", gap: 7, fontSize: 12, color: T.inkMid, fontFamily: fontSans }}>
                              <ChevronRight size={12} style={{ color: T.danger, flexShrink: 0, marginTop: 2 }} />{g}
                            </li>
                          ))}
                        </ul>
                        <p style={{ fontFamily: fontSans, fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: T.danger, marginBottom: 6 }}>Consequences</p>
                        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 5 }}>
                          {regulatory.violations.strikeOffProcess.strikeOff.consequences.map((c, i) => (
                            <li key={i} style={{ display: "flex", gap: 7, fontSize: 12, color: T.inkMid, fontFamily: fontSans }}>
                              <AlertTriangle size={11} style={{ color: T.danger, flexShrink: 0, marginTop: 2 }} />{c}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div style={{ background: T.navyLight, borderRadius: 12, padding: "18px 16px", border: `1px solid #c0d0e4` }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                          <Shield size={14} style={{ color: T.navy }} />
                          <h4 style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: 15, color: T.ink, margin: 0 }}>Dormant Company Status</h4>
                        </div>
                        <p style={{ fontFamily: fontSans, fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: T.navy, marginBottom: 5 }}>Eligibility</p>
                        <p style={{ fontFamily: fontSans, fontSize: 12, color: T.inkMid, marginBottom: 14 }}>{regulatory.violations.strikeOffProcess.dormantStatus.eligibility}</p>
                        <p style={{ fontFamily: fontSans, fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: T.navy, marginBottom: 6 }}>Benefits</p>
                        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 5 }}>
                          {regulatory.violations.strikeOffProcess.dormantStatus.benefits.map((b, i) => (
                            <li key={i} style={{ display: "flex", gap: 7, fontSize: 12, color: T.inkMid, fontFamily: fontSans }}>
                              <CheckCircle size={11} style={{ color: T.success, flexShrink: 0, marginTop: 2 }} />{b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* ── CASE STUDIES ── */}
          {regulatory.caseStudies && (
            <section id="cases" style={{ paddingBottom: 40 }}>
              <div className="rv2-card-pad" style={{ ...card() }}>
                <Eyebrow>Success Stories</Eyebrow>
                <p style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: fh2, lineHeight: 1.1, color: T.ink, marginBottom: 12 }}>{regulatory.caseStudies.title}</p>
                <Prose style={{ marginBottom: 20 }}>{regulatory.caseStudies.description}</Prose>
                <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch", marginBottom: 18, paddingBottom: 4 }}>
                  <div style={{ display: "grid", gridTemplateColumns: `repeat(${regulatory.caseStudies.studies.length}, minmax(160px, 1fr))`, gap: 8, minWidth: isMobile ? `${regulatory.caseStudies.studies.length * 170}px` : "auto" }}>
                    {regulatory.caseStudies.studies.map((s, i) => (
                      <button key={i} onClick={() => setSelectedCase(i)} style={{ textAlign: "left", padding: "14px 16px", borderRadius: 10, cursor: "pointer", background: selectedCase === i ? T.navy : T.paper, border: `2px solid ${selectedCase === i ? T.navy : "transparent"}`, transition: "all 0.15s" }}>
                        <p style={{ fontFamily: fontSans, fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: selectedCase === i ? "rgba(255,255,255,0.7)" : T.inkLight, marginBottom: 5 }}>{s.industry}</p>
                        <p style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: 14, color: selectedCase === i ? T.white : T.ink, margin: 0 }}>{s.title}</p>
                      </button>
                    ))}
                  </div>
                </div>
                <div style={{ background: T.paper, borderRadius: 14, padding: isMobile ? 12 : 18, display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    { icon: AlertTriangle, label: "The Challenge", field: "challenge" },
                    { icon: Lightbulb,     label: "Our Solution",  field: "solution"  },
                    { icon: CheckCircle,   label: "Outcome",       field: "outcome"   },
                  ].map(({ icon: Icon, label, field }) => (
                    <div key={field} style={{ background: T.white, borderRadius: 10, padding: "13px 14px", border: `1px solid ${T.rule}` }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 7 }}>
                        <Icon size={13} style={{ color: T.navy }} />
                        <h4 style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: 15, color: T.ink, margin: 0 }}>{label}</h4>
                      </div>
                      <p style={{ fontFamily: fontSans, fontSize: 12, lineHeight: 1.7, color: T.inkMid, margin: 0 }}>{regulatory.caseStudies.studies[selectedCase][field]}</p>
                    </div>
                  ))}
                  <div style={{ background: T.navy, borderRadius: 10, padding: "13px 14px", color: T.white }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 7 }}>
                      <TrendingUp size={13} />
                      <h4 style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: 15, margin: 0 }}>Business Impact</h4>
                    </div>
                    <p style={{ fontFamily: fontSans, fontSize: 12, lineHeight: 1.7, color: "rgba(255,255,255,0.7)", margin: 0 }}>{regulatory.caseStudies.studies[selectedCase].impact}</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ── RESOURCES ── */}
          {regulatory.resources && (
            <section id="resources" style={{ paddingBottom: 40 }}>
              <div className="rv2-card-pad" style={{ ...card() }}>
                <Eyebrow>Resources</Eyebrow>
                <p style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: fh2, lineHeight: 1.1, color: T.ink, marginBottom: 12 }}>{regulatory.resources.title}</p>
                <Prose style={{ marginBottom: 24 }}>{regulatory.resources.description}</Prose>
                <h3 style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: fh3, color: T.ink, marginBottom: 14 }}>Tools &amp; Templates</h3>
                <div className="rv2-grid-tools" style={{ marginBottom: 26 }}>
                  {regulatory.resources.tools.map((t, i) => (
                    <div key={i} style={{ display: "flex", gap: 12, padding: "14px 16px", background: T.paper, borderRadius: 10, border: `1px solid ${T.rule}`, transition: "border-color 0.15s", cursor: "pointer" }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = T.navyMid}
                      onMouseLeave={e => e.currentTarget.style.borderColor = T.rule}
                    >
                      <div style={{ width: 36, height: 36, borderRadius: 9, background: T.navyLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Download size={15} style={{ color: T.navy }} />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <h4 style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: 15, color: T.ink, marginBottom: 2 }}>{t.name}</h4>
                        <p style={{ fontFamily: fontSans, fontSize: 11, color: T.inkLight, marginBottom: 8 }}>{t.description}</p>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <span style={{ fontFamily: fontSans, fontSize: 10, fontWeight: 700, color: T.navy }}>{t.type}</span>
                          <button style={{ display: "flex", alignItems: "center", gap: 4, fontFamily: fontSans, fontSize: 11, fontWeight: 700, color: T.navy, background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                            <Download size={11} /> Download
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <h3 style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: fh3, color: T.ink, marginBottom: 14 }}>Comprehensive Guides</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {regulatory.resources.guides.map((g, i) => (
                    <div key={i} className="rv2-guide-row" style={{ padding: "14px 16px", background: T.paper, borderRadius: 10, border: `1px solid ${T.rule}`, transition: "border-color 0.15s" }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = T.navyMid}
                      onMouseLeave={e => e.currentTarget.style.borderColor = T.rule}
                    >
                      <div>
                        <h4 style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: 16, color: T.ink, marginBottom: 8 }}>{g.title}</h4>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                          {g.topics.map((tp, j) => (
                            <span key={j} style={{ padding: "2px 9px", borderRadius: 20, background: T.navyLight, color: T.navy, fontSize: 10, fontFamily: fontSans, fontWeight: 600 }}>{tp}</span>
                          ))}
                        </div>
                      </div>
                      <div className="rv2-guide-actions">
                        <span style={{ display: "flex", alignItems: "center", gap: 4, fontFamily: fontSans, fontSize: 11, color: T.inkLight, whiteSpace: "nowrap" }}>
                          <Clock size={10} /> {g.readTime}
                        </span>
                        <button style={{ display: "flex", alignItems: "center", gap: 4, fontFamily: fontSans, fontSize: 11, fontWeight: 700, color: T.navy, background: "none", border: "none", cursor: "pointer", padding: 0, whiteSpace: "nowrap" }}>
                          Read <ExternalLink size={11} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ── PROCESS ── */}
          <section id="process" style={{ paddingBottom: 40 }}>
            <Eyebrow>Our Methodology</Eyebrow>
            <p style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: fh2, lineHeight: 1.1, color: T.ink, marginBottom: 8 }}>{regulatory.process.title}</p>
            <Prose style={{ marginBottom: 22 }}>Our proven approach ensures seamless compliance every step of the way.</Prose>
            <div className="rv2-grid-process" style={{ marginBottom: 18 }}>
              {regulatory.process.steps.map((s, i) => (
                <div key={i} style={{ ...card({ padding: "22px 20px" }), position: "relative", transition: "all 0.2s", cursor: "default" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.07)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{ position: "absolute", top: 16, right: 16, fontFamily: fontDisplay, fontWeight: 700, fontSize: 40, color: T.paperDark, lineHeight: 1, userSelect: "none" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: 18, color: T.ink, marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ fontFamily: fontSans, fontSize: 12, lineHeight: 1.65, color: T.inkLight, margin: 0 }}>{s.description}</p>
                </div>
              ))}
            </div>
            <div style={{ background: T.navy, borderRadius: 14, padding: isMobile ? "28px 18px" : "36px 48px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -30, right: -30, width: 120, height: 120, borderRadius: "50%", background: "rgba(255,255,255,0.1)" }} />
             <p style={{ fontFamily: fontSans, fontSize: 14, color: "rgba(255,255,255,0.65)", marginBottom: 16 }}>Ready to experience our proven compliance process?</p>
              <Link to="/contact">
              <button style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 28px", borderRadius: 10, background: T.white, color: T.navy, border: "none", cursor: "pointer", fontFamily: fontSans, fontSize: 14, fontWeight: 700 }}>
                Start Your Journey <Rocket size={14} />
              </button>
              </Link>
            </div>
          </section>

          {/* ── FAQ ── */}
          <section id="faq" style={{ paddingBottom: 40 }}>
            <div className="rv2-grid-faq">
              <div className="rv2-faq-left">
                <Eyebrow>FAQ</Eyebrow>
                <p style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: fh2, lineHeight: 1.1, color: T.ink, marginBottom: 12 }}>Frequently Asked</p>
                <Prose>Everything you need to know about our compliance services.</Prose>
                <Divider />
                <p style={{ fontFamily: fontSans, fontSize: 13, color: T.inkLight, marginBottom: 12 }}>Still have questions?</p>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  <button style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 20px", borderRadius: 8, background: T.navy, color: T.white, border: "none", cursor: "pointer", fontFamily: fontSans, fontSize: 13, fontWeight: 700 }}>
                    <Mail size={13} /> Contact Us
                  </button>
                </Link>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                {regulatory.faqs.map((faq, i) => (
                  <div key={i} style={{ borderRadius: 10, overflow: "hidden", border: `1px solid ${openFaq === i ? T.navy : T.rule}`, transition: "border-color 0.15s" }}>
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, padding: "14px 16px", background: T.white, border: "none", cursor: "pointer", textAlign: "left" }}>
                      <span style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: isMobile ? 14 : 16, color: T.ink, lineHeight: 1.4 }}>{faq.question}</span>
                      <div style={{ flexShrink: 0, width: 26, height: 26, borderRadius: 7, background: openFaq === i ? T.navy : T.paperDark, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}>
                        {openFaq === i ? <Minus size={12} style={{ color: T.white }} /> : <Plus size={12} style={{ color: T.inkMid }} />}
                      </div>
                    </button>
                    {openFaq === i && (
                      <div style={{ padding: "0 16px 14px", borderTop: `1px solid ${T.rule}`, background: T.white }}>
                        <p style={{ fontFamily: fontSans, fontSize: 13, lineHeight: 1.75, color: T.inkMid, marginTop: 12 }}>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── FINAL CTA ── */}
          <section>
            <div style={{
              background: T.navy, borderRadius: isMobile ? 16 : 24,
              padding: isMobile ? "44px 18px" : isTablet ? "56px 36px" : "72px 64px",
              textAlign: "center", color: T.white, position: "relative", overflow: "hidden",
            }}>
              <div style={{ position: "absolute", top: -48, left: "50%", transform: "translateX(-50%)", width: 320, height: 320, borderRadius: "50%", background: "rgba(255,255,255,0.08)" }} />
              <div style={{ position: "absolute", bottom: -32, right: -32, width: 180, height: 180, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
              <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 80, height: 3, background: T.white, borderRadius: "0 0 3px 3px" }} />
              <div style={{ position: "relative", maxWidth: 560, margin: "0 auto" }}>
                <Eyebrow style={{ color: "rgba(255,255,255,0.7)", marginBottom: 16 }}>Get Started Today</Eyebrow>
                <h2 style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: isMobile ? "clamp(24px,7vw,34px)" : "clamp(32px,4vw,48px)", lineHeight: 1.1, color: T.white, marginBottom: 14 }}>
                  {regulatory.cta.title}
                </h2>
                <p style={{ fontFamily: fontSans, fontSize: isMobile ? 13 : 15, lineHeight: 1.75, color: "rgba(255,255,255,0.60)", marginBottom: 28 }}>
                  {regulatory.cta.description}
                </p>
                <div className="rv2-cta-btns">
                  <Link to="/contact">
                  <button className="rv2-cta-btn" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "13px 28px", borderRadius: 10, background: T.white, color: T.navy, border: "none", cursor: "pointer", fontFamily: fontSans, fontSize: 14, fontWeight: 700 }}>
                    {regulatory.cta.primaryButton} <ArrowRight size={14} />
                  </button>
                  </Link>
                  <Link to="/about">
                  <button className="rv2-cta-btn" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "13px 28px", borderRadius: 10, background: "rgba(255,255,255,0.10)", color: T.white, border: "1px solid rgba(255,255,255,0.22)", cursor: "pointer", fontFamily: fontSans, fontSize: 14, fontWeight: 600 }}>
                    <Phone size={14} /> {regulatory.cta.secondaryButton}
                  </button>
                  </Link>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: isMobile ? "8px 14px" : "12px 24px" }}>
                  {["Free Consultation", "Expert Team", "Proven Track Record", "24/7 Support"].map(t => (
                    <span key={t} style={{ display: "flex", alignItems: "center", gap: 5, fontFamily: fontSans, fontSize: 11, color: "rgba(255,255,255,0.45)" }}>
                      <CheckCircle size={11} style={{ color: "rgba(255,255,255,0.7)" }} /> {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}