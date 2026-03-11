import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { regulatoryData } from "./data";

import {
  CheckCircle,
  Rocket,
  Phone,
  BriefcaseBusiness,
  Star,
  Award,
  TrendingUp,
  HelpCircle,
  Home,
  FileText,
  Briefcase,
  BarChart3,
  Calendar,
  BookOpen,
  Shield,
  Building,
  Target,
  Lightbulb,
  Clock,
  AlertTriangle,
  Download,
  Mail,
  ChevronRight,
  ArrowRight,
  ExternalLink,
  Users,
  Settings,
  Zap,
  Activity,
  Database,
  DollarSign,
  Menu,
  X,
  Plus,
  Minus,
} from "lucide-react";

/* ─── design tokens ─────────────────────────────────── */
const C = {
  navy: "#0f3460",
  navyDark: "#0a2444",
  navyLight: "#1a4a7a",
  gold: "#c9a84c",
  goldLight: "#e8c96d",
  offwhite: "#f8f7f4",
  surface: "#ffffff",
  muted: "#64748b",
  border: "#e2e8f0",
  danger: "#dc2626",
  warning: "#d97706",
  success: "#16a34a",
  text: "#0f172a",
  textLight: "#475569",
};

/* ─── tiny helpers ───────────────────────────────────── */
const Tag = ({ children, color = C.navy }) => (
  <span
    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
    style={{
      backgroundColor: `${color}15`,
      color,
      border: `1px solid ${color}30`,
      fontFamily: "'DM Sans', sans-serif",
    }}
  >
    {children}
  </span>
);

const SectionLabel = ({ icon: Icon, children }) => (
  <div className="flex items-center gap-3 mb-4">
    <div
      className="w-8 h-px flex-1"
      style={{ backgroundColor: C.gold }}
    />
    <Tag color={C.navy}>
      {Icon && <Icon size={11} />}
      {children}
    </Tag>
    <div
      className="w-8 h-px flex-1"
      style={{ backgroundColor: C.gold }}
    />
  </div>
);

const SectionTitle = ({ children, className = "" }) => (
  <h2
    className={`font-black text-3xl sm:text-4xl lg:text-5xl leading-tight ${className}`}
    style={{ fontFamily: "'Playfair Display', serif", color: C.text }}
  >
    {children}
  </h2>
);

const Card = ({ children, className = "", hover = true, ...props }) => (
  <div
    className={`bg-white rounded-2xl border transition-all duration-300 ${
      hover ? "hover:shadow-xl hover:-translate-y-0.5" : ""
    } ${className}`}
    style={{ borderColor: C.border, ...props.style }}
    {...props}
  >
    {children}
  </div>
);

const NavDot = ({ active, onClick, label, icon: Icon }) => (
  <button
    onClick={onClick}
    className={`w-full text-left flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
      active ? "text-white shadow-sm" : "text-slate-600 hover:bg-slate-50"
    }`}
    style={{
      backgroundColor: active ? C.navy : "transparent",
      fontFamily: "'DM Sans', sans-serif",
    }}
  >
    <Icon size={15} className="flex-shrink-0" />
    <span>{label}</span>
  </button>
);

/* ═══════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════ */
const Regulatory = () => {
  const { regulatoryId } = useParams();
  const regulatory = regulatoryData[regulatoryId];
  const [openFaq, setOpenFaq] = useState(null);
  const [activeSection, setActiveSection] = useState("hero");
  const [selectedIndustry, setSelectedIndustry] = useState(0);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero","about","overview","features","calendar",
        "industry","violations","cases","resources","process","faq",
      ];
      const scrollPosition = window.scrollY + 120;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
      const total = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 1024) setMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [mobileMenuOpen]);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 90, behavior: "smooth" });
  };

  if (!regulatory) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: C.offwhite }}>
        <div className="text-center p-8">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: `${C.navy}10` }}>
            <Shield size={28} style={{ color: C.navy }} />
          </div>
          <h2 className="text-3xl font-black mb-4" style={{ fontFamily: "'Playfair Display', serif", color: C.text }}>
            Page Not Found
          </h2>
          <Link to="/" className="text-sm font-semibold underline" style={{ color: C.navy, fontFamily: "'DM Sans', sans-serif" }}>
            ← Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const nav = [
    { id: "hero", label: "Overview", icon: Home },
    { id: "about", label: "About", icon: FileText },
    { id: "overview", label: "Framework", icon: BookOpen },
    { id: "features", label: "Features", icon: Star },
    { id: "calendar", label: "Calendar", icon: Calendar },
    { id: "industry", label: "Industry", icon: Building },
    { id: "violations", label: "Violations", icon: AlertTriangle },
    { id: "cases", label: "Case Studies", icon: Target },
    { id: "resources", label: "Resources", icon: Download },
    { id: "process", label: "Process", icon: BriefcaseBusiness },
    { id: "faq", label: "FAQ", icon: HelpCircle },
  ];

  const featureIcons = [FileText, Building, BarChart3, DollarSign, Shield, Settings];

  /* ── impact badge ── */
  const ImpactBadge = ({ impact }) => {
    const map = {
      Critical: { bg: "#fef2f2", color: C.danger, dot: C.danger },
      High:     { bg: "#fff7ed", color: C.warning, dot: C.warning },
      Medium:   { bg: "#fefce8", color: "#b45309",  dot: "#b45309" },
    };
    const s = map[impact] || map["Medium"];
    return (
      <span
        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold"
        style={{ backgroundColor: s.bg, color: s.color, fontFamily: "'DM Sans', sans-serif" }}
      >
        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: s.dot }} />
        {impact}
      </span>
    );
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: C.offwhite, fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── progress bar ── */}
      <div className="fixed top-0 left-0 right-0 z-50 h-0.5" style={{ backgroundColor: `${C.navy}15` }}>
        <div
          className="h-full transition-all duration-100"
          style={{ width: `${scrollProgress}%`, background: `linear-gradient(90deg, ${C.navy}, ${C.gold})` }}
        />
      </div>

      {/* ════════════════ HERO ════════════════ */}
      <section id="hero" className="relative min-h-[580px] flex items-end overflow-hidden">
        {/* bg image */}
        <div className="absolute inset-0">
          <img src={regulatory.hero.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${C.navyDark}e8 0%, ${C.navy}cc 50%, ${C.navyDark}90 100%)` }} />
          {/* decorative grain */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")" }} />
        </div>

        {/* diagonal accent */}
        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10"
          style={{ background: `linear-gradient(135deg, transparent 50%, ${C.gold} 50%)` }} />

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pb-16 pt-32">
          <div className="max-w-3xl">
            {/* badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-bold tracking-widest uppercase"
              style={{ backgroundColor: `${C.gold}25`, color: C.goldLight, border: `1px solid ${C.gold}40`, fontFamily: "'DM Sans', sans-serif" }}
            >
              <Shield size={12} />
              Premium {regulatoryId?.toUpperCase()} Service
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-[1.05]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {regulatory.hero.title}
            </h1>

            <p className="text-lg text-white/75 mb-10 leading-relaxed max-w-2xl">
              {regulatory.hero.subtitle}
            </p>

            <div className="flex flex-wrap gap-3">
              <Link to="/contact">
                <button
                  className="group flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 hover:gap-4"
                  style={{ backgroundColor: C.gold, color: C.navyDark, fontFamily: "'DM Sans', sans-serif" }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = C.goldLight)}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = C.gold)}
                >
                  {regulatory.hero.cta}
                  <ArrowRight size={16} />
                </button>
              </Link>
              <Link to="/contact">
                <button
                  className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-300"
                  style={{ border: "1px solid rgba(255,255,255,0.3)", backgroundColor: "rgba(255,255,255,0.08)" }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.18)")}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)")}
                >
                  <Phone size={15} />
                  Schedule Call
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── mobile nav toggle ── */}
      <div className="lg:hidden sticky top-0.5 z-40 px-4 py-3">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm"
          style={{ backgroundColor: C.navy, color: "white" }}
        >
          {mobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
          Navigate
        </button>
      </div>

      {/* ── mobile drawer ── */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50"
          style={{ backgroundColor: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed left-0 top-0 bottom-0 w-72 overflow-y-auto p-5"
            style={{ backgroundColor: C.surface }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <span className="font-black text-base" style={{ fontFamily: "'Playfair Display', serif", color: C.text }}>
                Navigation
              </span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-1.5 rounded-lg" style={{ backgroundColor: C.offwhite }}>
                <X size={16} style={{ color: C.muted }} />
              </button>
            </div>
            <nav className="space-y-1">
              {nav.map(item => (
                <NavDot key={item.id} active={activeSection === item.id} onClick={() => scrollToSection(item.id)} label={item.label} icon={item.icon} />
              ))}
            </nav>
            {/* sidebar contact */}
            <div className="mt-6 p-4 rounded-2xl" style={{ backgroundColor: `${C.navy}08`, border: `1px solid ${C.navy}15` }}>
              <p className="font-black text-base mb-1" style={{ fontFamily: "'Playfair Display', serif", color: C.navy }}>Need Help?</p>
              <p className="text-xs text-slate-500 mb-4">Our experts are ready</p>
              <Link to="/contact">
                <button className="w-full py-2.5 rounded-xl text-white text-sm font-bold mb-3" style={{ backgroundColor: C.navy }}>
                  Contact Us
                </button>
              </Link>
              <div className="flex items-center gap-2 text-xs" style={{ color: C.muted }}>
                <Phone size={12} /> +91 XXXX-XXXXXX
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ════════════════ BODY ════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex gap-8 xl:gap-12">

          {/* ── SIDEBAR ── */}
          <aside className="hidden lg:block w-56 xl:w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-4">

              {/* nav card */}
              <div className="rounded-2xl p-4" style={{ backgroundColor: C.surface, border: `1px solid ${C.border}` }}>
                <p className="text-xs font-bold tracking-widest uppercase mb-4 px-1" style={{ color: C.muted }}>
                  On this page
                </p>
                <nav className="space-y-0.5">
                  {nav.map(item => (
                    <NavDot key={item.id} active={activeSection === item.id} onClick={() => scrollToSection(item.id)} label={item.label} icon={item.icon} />
                  ))}
                </nav>
              </div>

              {/* contact card */}
              <div
                className="rounded-2xl p-5 text-white overflow-hidden relative"
                style={{ background: `linear-gradient(135deg, ${C.navyDark} 0%, ${C.navyLight} 100%)` }}
              >
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-10" style={{ backgroundColor: C.gold }} />
                <Mail size={22} className="mb-3 opacity-80" />
                <p className="font-black text-base mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Need Help?
                </p>
                <p className="text-xs text-white/60 mb-4">Our experts are ready to assist you today.</p>
                <Link to="/contact">
                  <button
                    className="w-full py-2.5 rounded-xl text-sm font-bold mb-3 transition-all duration-200"
                    style={{ backgroundColor: C.gold, color: C.navyDark }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = C.goldLight)}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = C.gold)}
                  >
                    Contact Us
                  </button>
                </Link>
                <div className="flex items-center gap-2 text-xs text-white/50">
                  <Phone size={11} /> +91 XXXX-XXXXXX
                </div>
              </div>

            </div>
          </aside>

          {/* ── MAIN ── */}
          <main className="flex-1 min-w-0 space-y-16">

            {/* ▸ ABOUT */}
            <section id="about">
              <Card className="p-8 lg:p-10">
                <SectionLabel icon={FileText}>About this Service</SectionLabel>
                <SectionTitle className="mb-6">{regulatory.about.title}</SectionTitle>
                <p className="text-base leading-relaxed mb-8" style={{ color: C.textLight }}>
                  {regulatory.about.description}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {regulatory.about.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-xl transition-all duration-200 cursor-default"
                      style={{ backgroundColor: `${C.navy}06`, border: `1px solid ${C.navy}10` }}
                      onMouseEnter={e => (e.currentTarget.style.borderColor = `${C.navy}30`)}
                      onMouseLeave={e => (e.currentTarget.style.borderColor = `${C.navy}10`)}
                    >
                      <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: `${C.gold}20` }}>
                        <CheckCircle size={12} style={{ color: C.gold }} />
                      </div>
                      <p className="text-sm font-medium leading-relaxed" style={{ color: C.text }}>
                        {h}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </section>

            {/* ▸ REGULATORY OVERVIEW */}
            {regulatory.regulatoryOverview && (
              <section id="overview">
                <div className="rounded-2xl p-8 lg:p-10" style={{ background: `linear-gradient(135deg, ${C.navyDark} 0%, ${C.navyLight} 100%)`, color: "white" }}>
                  <SectionLabel icon={BookOpen}>
                    <span style={{ color: C.goldLight }}>Regulatory Framework</span>
                  </SectionLabel>
                  <SectionTitle className="mb-6" style={{ color: "white" }}>
                    {regulatory.regulatoryOverview.title}
                  </SectionTitle>
                  <p className="text-base leading-relaxed mb-10 text-white/70">
                    {regulatory.regulatoryOverview.introduction}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {regulatory.regulatoryOverview.keyAspects.map((a, i) => (
                      <div
                        key={i}
                        className="p-5 rounded-2xl transition-all duration-200"
                        style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
                        onMouseEnter={e => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)")}
                        onMouseLeave={e => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.07)")}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-1.5 h-5 rounded-full" style={{ backgroundColor: C.gold }} />
                          <h3 className="font-black text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                            {a.title}
                          </h3>
                        </div>
                        <p className="text-sm text-white/60 mb-4 leading-relaxed">{a.description}</p>
                        <ul className="space-y-2">
                          {a.regulations.map((r, j) => (
                            <li key={j} className="flex items-start gap-2 text-xs text-white/55">
                              <ChevronRight size={13} style={{ color: C.gold }} className="flex-shrink-0 mt-0.5" />
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* ▸ FEATURES */}
            <section id="features">
              <div className="text-center mb-10">
                <SectionLabel icon={Star}>Our Services</SectionLabel>
                <SectionTitle className="mb-3">Comprehensive Solutions</SectionTitle>
                <p className="text-base" style={{ color: C.textLight }}>End-to-end compliance services tailored to your needs</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {regulatory.detailedFeatures.map((f, i) => {
                  const Icon = featureIcons[i] || Settings;
                  return (
                    <Card
                      key={i}
                      className="p-6 group cursor-default"
                      onMouseEnter={e => (e.currentTarget.style.borderColor = C.navy)}
                      onMouseLeave={e => (e.currentTarget.style.borderColor = C.border)}
                    >
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${C.navy}10` }}
                      >
                        <Icon size={20} style={{ color: C.navy }} />
                      </div>
                      <h3 className="font-black text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif", color: C.text }}>
                        {f.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: C.textLight }}>
                        {f.description}
                      </p>
                    </Card>
                  );
                })}
              </div>
            </section>

            {/* ▸ COMPLIANCE CALENDAR */}
            {regulatory.complianceCalendar && (
              <section id="calendar">
                <Card className="p-8 lg:p-10">
                  <SectionLabel icon={Calendar}>Compliance Calendar</SectionLabel>
                  <SectionTitle className="mb-4">{regulatory.complianceCalendar.title}</SectionTitle>
                  <p className="text-base leading-relaxed mb-8" style={{ color: C.textLight }}>
                    {regulatory.complianceCalendar.description}
                  </p>
                  <div className="space-y-4">
                    {regulatory.complianceCalendar.deadlines.map((d, i) => (
                      <div key={i} className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${C.border}` }}>
                        <div className="flex items-center gap-3 px-6 py-4" style={{ backgroundColor: C.navy }}>
                          <Calendar size={16} className="text-white/70" />
                          <h3 className="font-black text-base text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                            {d.period}
                          </h3>
                        </div>
                        <div className="p-4 space-y-3">
                          {d.filings.map((f, j) => (
                            <div
                              key={j}
                              className="flex items-start gap-4 p-4 rounded-xl transition-all duration-200"
                              style={{ backgroundColor: C.offwhite, border: `1px solid transparent` }}
                              onMouseEnter={e => (e.currentTarget.style.borderColor = `${C.navy}20`)}
                              onMouseLeave={e => (e.currentTarget.style.borderColor = "transparent")}
                            >
                              <div
                                className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-black"
                                style={{ backgroundColor: C.navy }}
                              >
                                {j + 1}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-black text-sm mb-0.5" style={{ color: C.text, fontFamily: "'Playfair Display', serif" }}>
                                  {f.form}
                                </p>
                                <p className="text-xs text-slate-500 mb-2">{f.description}</p>
                                <div className="flex items-center gap-1.5 text-xs font-bold" style={{ color: C.gold }}>
                                  <Clock size={11} /> {f.dueDate}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </section>
            )}

            {/* ▸ INDUSTRY GUIDANCE */}
            {regulatory.industryGuidance && (
              <section id="industry">
                <Card className="p-8 lg:p-10">
                  <SectionLabel icon={Building}>Industry Guidance</SectionLabel>
                  <SectionTitle className="mb-4">{regulatory.industryGuidance.title}</SectionTitle>
                  <p className="text-base leading-relaxed mb-8" style={{ color: C.textLight }}>
                    {regulatory.industryGuidance.description}
                  </p>
                  {/* sector tabs */}
                  <div className="flex flex-wrap gap-2 mb-6 p-1.5 rounded-2xl" style={{ backgroundColor: C.offwhite }}>
                    {regulatory.industryGuidance.sectors.map((s, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedIndustry(i)}
                        className="px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
                        style={{
                          backgroundColor: selectedIndustry === i ? C.navy : "transparent",
                          color: selectedIndustry === i ? "white" : C.muted,
                        }}
                      >
                        {s.name}
                      </button>
                    ))}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6 p-6 rounded-2xl" style={{ backgroundColor: C.offwhite }}>
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <AlertTriangle size={15} style={{ color: C.warning }} />
                        <h4 className="font-black text-base" style={{ fontFamily: "'Playfair Display', serif", color: C.text }}>
                          Key Challenges
                        </h4>
                      </div>
                      <ul className="space-y-2.5">
                        {regulatory.industryGuidance.sectors[selectedIndustry].challenges.map((c, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-3 p-3 rounded-xl bg-white text-sm"
                            style={{ color: C.textLight, border: `1px solid ${C.border}` }}
                          >
                            <ChevronRight size={14} style={{ color: C.warning }} className="flex-shrink-0 mt-0.5" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Lightbulb size={15} style={{ color: C.success }} />
                        <h4 className="font-black text-base" style={{ fontFamily: "'Playfair Display', serif", color: C.text }}>
                          Our Solutions
                        </h4>
                      </div>
                      <ul className="space-y-2.5">
                        {regulatory.industryGuidance.sectors[selectedIndustry].solutions.map((s, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-3 p-3 rounded-xl bg-white text-sm"
                            style={{ color: C.textLight, border: `1px solid ${C.border}` }}
                          >
                            <CheckCircle size={14} style={{ color: C.success }} className="flex-shrink-0 mt-0.5" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </section>
            )}

            {/* ▸ VIOLATIONS */}
            {regulatory.violations && (
              <section id="violations">
                <Card className="p-8 lg:p-10">
                  <SectionLabel icon={AlertTriangle}>Compliance Risk</SectionLabel>
                  <SectionTitle className="mb-4">{regulatory.violations.title}</SectionTitle>
                  <p className="text-base leading-relaxed mb-8" style={{ color: C.textLight }}>
                    {regulatory.violations.description}
                  </p>
                  <div className="space-y-4">
                    {regulatory.violations.commonViolations.map((v, i) => (
                      <div
                        key={i}
                        className="rounded-2xl overflow-hidden transition-all duration-200"
                        style={{ border: `1px solid ${C.border}` }}
                        onMouseEnter={e => (e.currentTarget.style.borderColor = `${C.navy}40`)}
                        onMouseLeave={e => (e.currentTarget.style.borderColor = C.border)}
                      >
                        <div className="p-5" style={{ backgroundColor: `${C.navy}04` }}>
                          <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                            <h3 className="font-black text-lg" style={{ fontFamily: "'Playfair Display', serif", color: C.text }}>
                              {v.violation}
                            </h3>
                            <ImpactBadge impact={v.impact} />
                          </div>
                          <p className="text-sm" style={{ color: C.textLight }}>{v.penalty}</p>
                        </div>
                        <div className="px-5 py-4 flex items-start gap-3" style={{ borderTop: `1px solid ${C.border}` }}>
                          <Shield size={15} style={{ color: C.navy }} className="flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: C.navy }}>
                              Prevention:&nbsp;
                            </span>
                            <span className="text-sm" style={{ color: C.textLight }}>{v.prevention}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* compounding / enforcement / strikeoff sub-sections */}
                  {[
                    regulatory.violations.compoundingProcess && {
                      data: regulatory.violations.compoundingProcess,
                      leftLabel: "Process Steps",
                      rightLabel: "Benefits",
                      rightItems: regulatory.violations.compoundingProcess.benefits,
                      rightIcon: CheckCircle,
                      rightIconColor: C.success,
                    },
                    regulatory.violations.enforcementMechanism && {
                      data: regulatory.violations.enforcementMechanism,
                      leftLabel: "Process Steps",
                      rightLabel: "Potential Consequences",
                      rightItems: regulatory.violations.enforcementMechanism.consequences,
                      rightIcon: AlertTriangle,
                      rightIconColor: C.danger,
                    },
                  ]
                    .filter(Boolean)
                    .map((block, bi) => (
                      <div
                        key={bi}
                        className="mt-6 p-6 rounded-2xl"
                        style={{ backgroundColor: C.offwhite, border: `1px solid ${C.border}` }}
                      >
                        <h3 className="font-black text-xl mb-6" style={{ fontFamily: "'Playfair Display', serif", color: C.text }}>
                          {block.data.title}
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: C.muted }}>
                              {block.leftLabel}
                            </p>
                            <ol className="space-y-3">
                              {block.data.steps.map((s, j) => (
                                <li key={j} className="flex items-start gap-3 text-sm" style={{ color: C.textLight }}>
                                  <span className="flex-shrink-0 w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center" style={{ backgroundColor: C.navy }}>
                                    {j + 1}
                                  </span>
                                  {s}
                                </li>
                              ))}
                            </ol>
                          </div>
                          <div>
                            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: C.muted }}>
                              {block.rightLabel}
                            </p>
                            <ul className="space-y-3 mb-4">
                              {block.rightItems.map((item, j) => {
                                const Icon = block.rightIcon;
                                return (
                                  <li key={j} className="flex items-start gap-3 text-sm" style={{ color: C.textLight }}>
                                    <Icon size={14} style={{ color: block.rightIconColor }} className="flex-shrink-0 mt-0.5" />
                                    {item}
                                  </li>
                                );
                              })}
                            </ul>
                            <div className="p-3 rounded-xl text-sm" style={{ backgroundColor: `${C.navy}08` }}>
                              <span className="font-bold" style={{ color: C.navy }}>Timeline: </span>
                              <span style={{ color: C.textLight }}>{block.data.timeline}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                  {regulatory.violations.strikeOffProcess && (
                    <div className="mt-6 space-y-4">
                      <h3 className="font-black text-xl" style={{ fontFamily: "'Playfair Display', serif", color: C.text }}>
                        {regulatory.violations.strikeOffProcess.title}
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {/* strike off */}
                        <div className="p-5 rounded-2xl" style={{ backgroundColor: "#fef2f2", border: `1px solid #fecaca` }}>
                          <div className="flex items-center gap-2 mb-4">
                            <AlertTriangle size={16} style={{ color: C.danger }} />
                            <h4 className="font-black text-base" style={{ fontFamily: "'Playfair Display', serif", color: C.text }}>
                              Company Strike-Off
                            </h4>
                          </div>
                          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: C.danger }}>Grounds</p>
                          <ul className="space-y-1.5 mb-4">
                            {regulatory.violations.strikeOffProcess.strikeOff.grounds.map((g, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm" style={{ color: C.textLight }}>
                                <ChevronRight size={13} style={{ color: C.danger }} className="flex-shrink-0 mt-0.5" /> {g}
                              </li>
                            ))}
                          </ul>
                          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: C.danger }}>Consequences</p>
                          <ul className="space-y-1.5">
                            {regulatory.violations.strikeOffProcess.strikeOff.consequences.map((c, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm" style={{ color: C.textLight }}>
                                <AlertTriangle size={12} style={{ color: C.danger }} className="flex-shrink-0 mt-0.5" /> {c}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* dormant */}
                        <div className="p-5 rounded-2xl" style={{ backgroundColor: `${C.navy}06`, border: `1px solid ${C.navy}18` }}>
                          <div className="flex items-center gap-2 mb-4">
                            <Shield size={16} style={{ color: C.navy }} />
                            <h4 className="font-black text-base" style={{ fontFamily: "'Playfair Display', serif", color: C.text }}>
                              Dormant Company Status
                            </h4>
                          </div>
                          <p className="text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: C.navy }}>Eligibility</p>
                          <p className="text-sm mb-4" style={{ color: C.textLight }}>{regulatory.violations.strikeOffProcess.dormantStatus.eligibility}</p>
                          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: C.navy }}>Benefits</p>
                          <ul className="space-y-1.5">
                            {regulatory.violations.strikeOffProcess.dormantStatus.benefits.map((b, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm" style={{ color: C.textLight }}>
                                <CheckCircle size={12} style={{ color: C.success }} className="flex-shrink-0 mt-0.5" /> {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </section>
            )}

            {/* ▸ CASE STUDIES */}
            {regulatory.caseStudies && (
              <section id="cases">
                <Card className="p-8 lg:p-10">
                  <SectionLabel icon={Target}>Success Stories</SectionLabel>
                  <SectionTitle className="mb-4">{regulatory.caseStudies.title}</SectionTitle>
                  <p className="text-base leading-relaxed mb-8" style={{ color: C.textLight }}>
                    {regulatory.caseStudies.description}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {regulatory.caseStudies.studies.map((s, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedCaseStudy(i)}
                        className="text-left p-4 rounded-2xl transition-all duration-200"
                        style={{
                          backgroundColor: selectedCaseStudy === i ? C.navy : C.offwhite,
                          border: `2px solid ${selectedCaseStudy === i ? C.navy : "transparent"}`,
                        }}
                      >
                        <p className="text-xs font-bold tracking-widest uppercase mb-1.5" style={{ color: selectedCaseStudy === i ? C.gold : C.muted }}>
                          {s.industry}
                        </p>
                        <p className="font-black text-base" style={{ fontFamily: "'Playfair Display', serif", color: selectedCaseStudy === i ? "white" : C.text }}>
                          {s.title}
                        </p>
                      </button>
                    ))}
                  </div>
                  {/* detail */}
                  <div className="space-y-3 p-6 rounded-2xl" style={{ backgroundColor: C.offwhite }}>
                    {[
                      { icon: AlertTriangle, label: "The Challenge", field: "challenge" },
                      { icon: Lightbulb, label: "Our Solution", field: "solution" },
                      { icon: CheckCircle, label: "Outcome", field: "outcome" },
                    ].map(({ icon: Icon, label, field }) => (
                      <div key={field} className="bg-white p-5 rounded-xl" style={{ border: `1px solid ${C.border}` }}>
                        <div className="flex items-center gap-2 mb-3">
                          <Icon size={15} style={{ color: C.navy }} />
                          <h4 className="font-black text-sm" style={{ fontFamily: "'Playfair Display', serif", color: C.text }}>
                            {label}
                          </h4>
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: C.textLight }}>
                          {regulatory.caseStudies.studies[selectedCaseStudy][field]}
                        </p>
                      </div>
                    ))}
                    <div className="p-5 rounded-xl text-white" style={{ background: `linear-gradient(135deg, ${C.navyDark}, ${C.navyLight})` }}>
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp size={15} />
                        <h4 className="font-black text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
                          Business Impact
                        </h4>
                      </div>
                      <p className="text-sm text-white/80 leading-relaxed">
                        {regulatory.caseStudies.studies[selectedCaseStudy].impact}
                      </p>
                    </div>
                  </div>
                </Card>
              </section>
            )}

            {/* ▸ RESOURCES */}
            {regulatory.resources && (
              <section id="resources">
                <Card className="p-8 lg:p-10">
                  <SectionLabel icon={Download}>Resources</SectionLabel>
                  <SectionTitle className="mb-4">{regulatory.resources.title}</SectionTitle>
                  <p className="text-base leading-relaxed mb-10" style={{ color: C.textLight }}>
                    {regulatory.resources.description}
                  </p>
                  <h3 className="font-black text-xl mb-5" style={{ fontFamily: "'Playfair Display', serif", color: C.text }}>
                    Tools & Templates
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4 mb-10">
                    {regulatory.resources.tools.map((t, i) => (
                      <div
                        key={i}
                        className="group flex items-start gap-4 p-5 rounded-2xl transition-all duration-200 cursor-pointer"
                        style={{ backgroundColor: C.offwhite, border: `1px solid ${C.border}` }}
                        onMouseEnter={e => (e.currentTarget.style.borderColor = `${C.navy}30`)}
                        onMouseLeave={e => (e.currentTarget.style.borderColor = C.border)}
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${C.navy}10` }}>
                          <Download size={17} style={{ color: C.navy }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-black text-base mb-1" style={{ fontFamily: "'Playfair Display', serif", color: C.text }}>
                            {t.name}
                          </h4>
                          <p className="text-xs text-slate-500 mb-3">{t.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold" style={{ color: C.gold }}>{t.type}</span>
                            <button className="flex items-center gap-1.5 text-xs font-bold transition-all duration-200 group-hover:gap-2.5" style={{ color: C.navy }}>
                              <Download size={12} /> Download
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <h3 className="font-black text-xl mb-5" style={{ fontFamily: "'Playfair Display', serif", color: C.text }}>
                    Comprehensive Guides
                  </h3>
                  <div className="space-y-3">
                    {regulatory.resources.guides.map((g, i) => (
                      <div
                        key={i}
                        className="flex flex-col sm:flex-row items-start justify-between gap-4 p-5 rounded-2xl transition-all duration-200"
                        style={{ backgroundColor: C.offwhite, border: `1px solid ${C.border}` }}
                        onMouseEnter={e => (e.currentTarget.style.borderColor = `${C.navy}30`)}
                        onMouseLeave={e => (e.currentTarget.style.borderColor = C.border)}
                      >
                        <div>
                          <h4 className="font-black text-base mb-2" style={{ fontFamily: "'Playfair Display', serif", color: C.text }}>
                            {g.title}
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {g.topics.map((tp, j) => (
                              <span key={j} className="px-2.5 py-0.5 rounded-full text-xs font-semibold" style={{ backgroundColor: `${C.navy}10`, color: C.navy }}>
                                {tp}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col items-start sm:items-end gap-2 flex-shrink-0">
                          <span className="flex items-center gap-1 text-xs" style={{ color: C.muted }}>
                            <Clock size={11} /> {g.readTime}
                          </span>
                          <button className="flex items-center gap-1.5 text-xs font-bold" style={{ color: C.navy }}>
                            Read <ExternalLink size={12} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </section>
            )}

            {/* ▸ PROCESS */}
            <section id="process">
              <div className="text-center mb-10">
                <SectionLabel icon={Briefcase}>Our Methodology</SectionLabel>
                <SectionTitle className="mb-3">{regulatory.process.title}</SectionTitle>
                <p className="text-base" style={{ color: C.textLight }}>Our proven approach ensures seamless compliance</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {regulatory.process.steps.map((s, i) => (
                  <div key={i} className="relative">
                    <Card
                      className="p-6 h-full group cursor-default"
                      onMouseEnter={e => (e.currentTarget.style.borderColor = C.navy)}
                      onMouseLeave={e => (e.currentTarget.style.borderColor = C.border)}
                    >
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-2xl mb-5 transition-all duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${C.navy}10`, color: C.navy, fontFamily: "'Playfair Display', serif" }}
                      >
                        {i + 1}
                      </div>
                      <h3 className="font-black text-base mb-2" style={{ fontFamily: "'Playfair Display', serif", color: C.text }}>
                        {s.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: C.textLight }}>{s.description}</p>
                    </Card>
                    {i < regulatory.process.steps.length - 1 && (
                      <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 w-6 h-6 rounded-full items-center justify-center" style={{ backgroundColor: C.offwhite }}>
                        <ChevronRight size={14} style={{ color: C.navy }} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="rounded-2xl p-8 text-center text-white" style={{ background: `linear-gradient(135deg, ${C.navyDark} 0%, ${C.navyLight} 100%)` }}>
                <p className="text-lg mb-5 text-white/80">Ready to experience our proven compliance process?</p>
                <button
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-200"
                  style={{ backgroundColor: C.gold, color: C.navyDark }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = C.goldLight)}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = C.gold)}
                >
                  Start Your Journey <Rocket size={15} />
                </button>
              </div>
            </section>

            {/* ▸ FAQ */}
            <section id="faq">
              <div className="text-center mb-10">
                <SectionLabel icon={HelpCircle}>Common Questions</SectionLabel>
                <SectionTitle className="mb-3">Frequently Asked Questions</SectionTitle>
                <p className="text-base" style={{ color: C.textLight }}>Everything you need to know about our services</p>
              </div>
              <div className="max-w-3xl mx-auto space-y-3">
                {regulatory.faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="rounded-2xl overflow-hidden transition-all duration-200"
                    style={{ border: `1px solid ${openFaq === i ? `${C.navy}40` : C.border}` }}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white"
                    >
                      <span className="font-black text-base" style={{ fontFamily: "'Playfair Display', serif", color: C.text }}>
                        {faq.question}
                      </span>
                      <div
                        className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300"
                        style={{ backgroundColor: openFaq === i ? C.navy : `${C.navy}10` }}
                      >
                        {openFaq === i
                          ? <Minus size={14} className="text-white" />
                          : <Plus size={14} style={{ color: C.navy }} />}
                      </div>
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-5 pt-0 bg-white" style={{ borderTop: `1px solid ${C.border}` }}>
                        <p className="text-sm leading-relaxed pt-4" style={{ color: C.textLight }}>
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* ▸ FINAL CTA */}
            <section>
              <div
                className="rounded-3xl p-10 lg:p-14 text-white overflow-hidden relative"
                style={{ background: `linear-gradient(135deg, ${C.navyDark} 0%, ${C.navyLight} 60%, ${C.navy} 100%)` }}
              >
                {/* decorative circles */}
                <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-10" style={{ backgroundColor: C.gold }} />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full opacity-10" style={{ backgroundColor: C.gold }} />

                <div className="relative text-center max-w-2xl mx-auto">
                  <h2 className="font-black text-3xl sm:text-4xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {regulatory.cta.title}
                  </h2>
                  <p className="text-base text-white/70 mb-8 leading-relaxed">
                    {regulatory.cta.description}
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center mb-10">
                    <button
                      className="group flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:gap-4"
                      style={{ backgroundColor: C.gold, color: C.navyDark }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = C.goldLight)}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = C.gold)}
                    >
                      {regulatory.cta.primaryButton} <ArrowRight size={15} />
                    </button>
                    <button
                      className="flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-200"
                      style={{ border: "1px solid rgba(255,255,255,0.3)", backgroundColor: "rgba(255,255,255,0.08)" }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.18)")}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)")}
                    >
                      <Phone size={15} /> {regulatory.cta.secondaryButton}
                    </button>
                  </div>
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white/50">
                    {["Free Consultation", "Expert Team", "Proven Track Record", "24/7 Support"].map(t => (
                      <span key={t} className="flex items-center gap-1.5">
                        <CheckCircle size={11} style={{ color: C.gold }} /> {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
};

export default Regulatory;