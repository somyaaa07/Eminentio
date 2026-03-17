import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ClipboardList,
  BookOpen,
  Calculator,
  Building2,
  Handshake,
  Settings,
  ScrollText,
  Landmark,
  Scale,
  FileText,
  FolderOpen,
} from "lucide-react";

const NAV = [
  { label: "Home", to: "/" },
  {
    label: "Our Services",
    to: "#",
    dropdown: [
      {
        group: "Offshore Staffing Solutions",
        items: [
          { label: "Audit & Assurance Staffing", to: "/services/auditAssurance",    icon: ClipboardList },
          { label: "Accounting Staffing",        to: "/services/accountingStaffing", icon: BookOpen },
          { label: "Taxation Staffing",          to: "/services/taxationStaffing",   icon: Calculator },
        ],
      },
    ],
  },
  {
    label: "Regulatory",
    to: "#",
    dropdown: [
      {
        group: "Business Setup",
        items: [
          { label: "Company Registration", to: "/regulatory/company-reg", icon: Building2 },
          { label: "LLP Formation",        to: "/regulatory/llp",         icon: Handshake },
          { label: "MSME Registration",    to: "/regulatory/msme",        icon: Settings },
        ],
      },
      {
        group: "Compliance",
        items: [
          { label: "ROC Filings", to: "/regulatory/roc",    icon: ScrollText },
          { label: "FEMA / RBI",  to: "/regulatory/fema",   icon: Landmark },
          { label: "Labour Law",  to: "/regulatory/labour", icon: Scale },
        ],
      },
    ],
  },
  { label: "Documents", to: "/documents" },
  { label: "About",     to: "/about" },
  { label: "Contact",   to: "/contact" },
];

/* ─── Dropdown ─── */
function DropdownMenu({ groups, visible }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "calc(100% + 14px)",
        left: "50%",
        transform: visible
          ? "translateX(-50%) translateY(0)"
          : "translateX(-50%) translateY(-8px)",
        background: "white",
        borderRadius: "14px",
        boxShadow: "0 8px 40px rgba(19,63,119,0.13), 0 2px 8px rgba(0,0,0,0.06)",
        border: "1px solid #e8f0fb",
        padding: "18px",
        display: "flex",
        gap: "24px",
        minWidth: groups.length > 1 ? "440px" : "280px",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.22s ease, transform 0.22s cubic-bezier(0.4,0,0.2,1)",
        zIndex: 9999,
      }}
    >
      {/* Arrow tip */}
      <div
        style={{
          position: "absolute",
          top: "-7px",
          left: "50%",
          transform: "translateX(-50%) rotate(45deg)",
          width: "13px",
          height: "13px",
          background: "white",
          border: "1px solid #e8f0fb",
          borderRight: "none",
          borderBottom: "none",
          borderRadius: "2px 0 0 0",
        }}
      />
      {groups.map((group) => (
        <div key={group.group} style={{ flex: 1, minWidth: "220px" }}>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.65rem",
              fontWeight: 700,
              color: "#9ca3af",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              margin: "0 0 10px 0",
              paddingBottom: "8px",
              borderBottom: "1px solid #f3f4f6",
            }}
          >
            {group.group}
          </p>
          {group.items.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.to} to={item.to} style={{ textDecoration: "none" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "8px 10px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "background 0.18s",
                    marginBottom: "2px",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#f0f5ff")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <Icon size={16} color="#133f77" strokeWidth={1.8} style={{ flexShrink: 0 }} />
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: "#1f2937",
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      ))}
    </div>
  );
}

/* ─── Mobile Accordion ─── */
function MobileAccordion({ item, active, setActive, onLinkClick }) {
  const isOpen = active === item.label;
  if (item.dropdown) {
    return (
      <div>
        <button
          onClick={() => setActive(isOpen ? null : item.label)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            padding: "12px 14px",
            background: isOpen ? "#e8f0fb" : "transparent",
            border: "none",
            borderRadius: "9px",
            cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.95rem",
            fontWeight: isOpen ? 600 : 500,
            color: isOpen ? "#133f77" : "#374151",
            textAlign: "left",
            transition: "all 0.2s",
          }}
        >
          {item.label}
          <span
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.25s",
              fontSize: "0.75rem",
              color: "#6b7280",
              flexShrink: 0,
            }}
          >
            ▾
          </span>
        </button>
        {isOpen && (
          <div
            style={{
              marginLeft: "12px",
              paddingLeft: "12px",
              borderLeft: "2px solid #e8f0fb",
              marginTop: "4px",
              marginBottom: "4px",
            }}
          >
            {item.dropdown.map((group) => (
              <div key={group.group} style={{ marginBottom: "10px" }}>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.62rem",
                    fontWeight: 700,
                    color: "#9ca3af",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "6px 10px 4px",
                    margin: 0,
                  }}
                >
                  {group.group}
                </p>
                {group.items.map((sub) => {
                  const Icon = sub.icon;
                  return (
                    <Link
                      key={sub.to}
                      to={sub.to}
                      style={{ textDecoration: "none" }}
                      onClick={onLinkClick}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "8px 10px",
                          borderRadius: "7px",
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                          color: "#374151",
                          cursor: "pointer",
                          transition: "background 0.15s, color 0.15s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "#f0f5ff";
                          e.currentTarget.style.color = "#133f77";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                          e.currentTarget.style.color = "#374151";
                        }}
                      >
                        <Icon size={15} color="#133f77" strokeWidth={1.8} style={{ flexShrink: 0 }} />
                        {sub.label}
                      </div>
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
  return (
    <Link to={item.to} style={{ textDecoration: "none" }} onClick={onLinkClick}>
      <div
        style={{
          padding: "12px 14px",
          borderRadius: "9px",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.95rem",
          fontWeight: 500,
          color: "#374151",
          cursor: "pointer",
          transition: "background 0.18s, color 0.18s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#e8f0fb";
          e.currentTarget.style.color = "#133f77";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = "#374151";
        }}
      >
        {item.label}
      </div>
    </Link>
  );
}

/* ─── Main Navbar ─── */
export default function Navbar() {
  const [menuOpen, setMenuOpen]         = useState(false);
  const [mobileActive, setMobileActive] = useState(null);
  const [hoveredNav, setHoveredNav]     = useState(null);
  const [consultOpen, setConsultOpen]   = useState(false);
  const [submitted, setSubmitted]       = useState(false);
  const [form, setForm]                 = useState({
    name: "", email: "", mobile: "", service: "", message: "",
  });

  const hoveredRef   = useRef(null);
  const leaveTimeout = useRef(null);

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const onResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isMobile = windowWidth < 1024;
  const isTiny   = windowWidth < 400;

  const handleMouseEnter = (label) => {
    clearTimeout(leaveTimeout.current);
    hoveredRef.current = label;
    setHoveredNav(label);
  };

  const handleMouseLeave = () => {
    leaveTimeout.current = setTimeout(() => {
      setHoveredNav(null);
      hoveredRef.current = null;
    }, 150);
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = () => setSubmitted(true);

  const closeModal = () => {
    setConsultOpen(false);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", mobile: "", service: "", message: "" });
    }, 300);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen || consultOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen, consultOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=DM+Sans:wght@400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; }

        .ts-nav-btn {
          position: relative;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem; font-weight: 500;
          color: #374151;
          padding: 7px 12px;
          cursor: pointer; white-space: nowrap;
          display: flex; align-items: center; gap: 5px;
          background: none; border: none; border-radius: 8px;
          transition: color 0.2s, background 0.2s;
          letter-spacing: 0.01em; text-decoration: none;
        }
        .ts-nav-btn::after {
          content: ''; position: absolute; bottom: 2px;
          left: 12px; right: 12px; height: 2px;
          background: #133f77; border-radius: 99px;
          transform: scaleX(0);
          transition: transform 0.28s cubic-bezier(0.4,0,0.2,1);
          transform-origin: center;
        }
        .ts-nav-btn:hover { color: #133f77; background: #f0f5ff; }
        .ts-nav-btn:hover::after { transform: scaleX(1); }
        .ts-nav-btn.active { color: #133f77; background: #e8f0fb; }
        .ts-nav-btn.active::after { transform: scaleX(1); }

        .ts-chevron {
          font-size: 0.58rem; color: #9ca3af;
          transition: transform 0.22s, color 0.2s; margin-top: 1px; flex-shrink: 0;
        }
        .ts-nav-btn:hover .ts-chevron,
        .ts-nav-btn.active .ts-chevron { transform: rotate(180deg); color: #133f77; }

        .cta-btn {
          background: #133f77; color: white;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem; font-weight: 600;
          padding: 10px 20px; border-radius: 8px; border: none; cursor: pointer;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          white-space: nowrap; flex-shrink: 0;
        }
        .cta-btn:hover { background: #0e2f5a; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(19,63,119,0.3); }

        .modal-overlay {
          position: fixed; inset: 0;
          background: rgba(10,25,50,0.55); backdrop-filter: blur(4px);
          z-index: 9999;
          display: flex; align-items: center; justify-content: center;
          padding: clamp(12px, 4vw, 24px);
          animation: fadeIn 0.2s ease;
          overflow-y: auto;
        }
        .modal-box {
          background: white; border-radius: 16px;
          width: 100%; max-width: 480px;
          box-shadow: 0 24px 64px rgba(0,0,0,0.18);
          overflow: hidden;
          animation: popUp 0.28s cubic-bezier(0.34,1.56,0.64,1);
          max-height: calc(100dvh - 32px);
          overflow-y: auto;
          margin: auto;
        }
        .modal-header {
          background: linear-gradient(135deg, #133f77, #1a5199);
          padding: clamp(16px,4vw,22px) clamp(16px,4vw,24px) clamp(14px,3vw,18px);
          color: white; position: relative;
        }
        .modal-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.1rem,4vw,1.35rem); margin: 0 0 3px;
        }
        .modal-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.7rem,2vw,0.78rem); opacity: 0.72; margin: 0;
        }
        .close-btn {
          position: absolute; top: 14px; right: 14px;
          background: rgba(255,255,255,0.15); border: none; color: white;
          width: 28px; height: 28px; border-radius: 50%; cursor: pointer;
          font-size: 1rem; display: flex; align-items: center; justify-content: center;
          transition: background 0.2s; flex-shrink: 0;
        }
        .close-btn:hover { background: rgba(255,255,255,0.28); }

        .modal-body { padding: clamp(16px,4vw,22px) clamp(16px,4vw,24px) clamp(18px,4vw,26px); }
        .form-group { margin-bottom: 14px; }
        .form-label {
          display: block; font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem; font-weight: 700; color: #374151;
          margin-bottom: 5px; letter-spacing: 0.04em; text-transform: uppercase;
        }
        .form-input {
          width: 100%; padding: 9px 13px;
          border: 1.5px solid #e5e7eb; border-radius: 8px;
          font-family: 'DM Sans', sans-serif; font-size: 0.875rem;
          color: #111827; background: #fafafa; outline: none;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
        }
        .form-input:focus { border-color: #133f77; background: white; box-shadow: 0 0 0 3px rgba(19,63,119,0.1); }
        .form-input::placeholder { color: #9ca3af; }

        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        @media (max-width: 400px) { .form-row { grid-template-columns: 1fr; } }

        .form-btn {
          width: 100%; padding: 11px;
          background: #133f77; color: white;
          font-family: 'DM Sans', sans-serif; font-size: 0.9rem; font-weight: 600;
          border: none; border-radius: 9px; cursor: pointer; margin-top: 6px;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
        }
        .form-btn:hover:not(:disabled) { background: #0e2f5a; transform: translateY(-1px); box-shadow: 0 5px 18px rgba(19,63,119,0.25); }
        .form-btn:disabled { opacity: 0.45; cursor: not-allowed; }

        .success-box { text-align: center; padding: 8px 0; }
        .success-icon { width: 60px; height: 60px; background: #dcfce7; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 14px; font-size: 1.6rem; animation: popUp 0.4s cubic-bezier(0.34,1.56,0.64,1); }
        .success-title { font-family: 'Playfair Display', serif; font-size: clamp(1.1rem,4vw,1.25rem); color: #133f77; margin-bottom: 6px; }
        .success-sub { font-family: 'DM Sans', sans-serif; font-size: 0.85rem; color: #6b7280; line-height: 1.5; margin-bottom: 16px; }

        .drawer-overlay {
          position: absolute; inset: 0;
          background: rgba(10,25,50,0.45); backdrop-filter: blur(3px);
          animation: fadeIn 0.22s ease;
        }
        .drawer-panel {
          position: relative;
          width: min(320px, 88vw); height: 100%;
          background: white;
          display: flex; flex-direction: column;
          animation: slideRight 0.28s cubic-bezier(0.4,0,0.2,1);
          box-shadow: 4px 0 32px rgba(0,0,0,0.12);
          overflow-y: auto;
        }
        .drawer-header {
          background: linear-gradient(135deg, #133f77, #1a5199);
          padding: clamp(14px,4vw,20px) clamp(14px,4vw,18px) clamp(12px,3vw,16px);
          display: flex; align-items: center; justify-content: space-between;
          flex-shrink: 0;
        }
        .drawer-close {
          width: 32px; height: 32px;
          background: rgba(255,255,255,0.15); border: none; color: white;
          border-radius: 50%; cursor: pointer; font-size: 1rem;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s; flex-shrink: 0;
        }
        .drawer-close:hover { background: rgba(255,255,255,0.28); }

        @keyframes fadeIn  { from { opacity: 0; } to { opacity: 1; } }
        @keyframes popUp   { from { opacity: 0; transform: scale(0.92) translateY(14px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        @keyframes slideRight { from { transform: translateX(-100%); } to { transform: translateX(0); } }

        @media (hover: none) {
          .cta-btn:hover { transform: none; box-shadow: none; }
          .ts-nav-btn:hover { background: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .modal-box, .drawer-panel { animation: none; }
          .modal-overlay, .drawer-overlay { animation: none; }
        }
      `}</style>

      <nav
        style={{
          background: "white",
          boxShadow: "0 1px 0 rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)",
          position: "sticky",
          top: 0,
          zIndex: 500,
          overflow: "visible",
        }}
      >
        {/* ── Top bar (desktop only) ── */}
        {!isMobile && (
          <div
            style={{
              background: "#133f77",
              padding: "5px clamp(16px,4vw,24px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.73rem",
                color: "rgba(255,255,255,0.85)",
                whiteSpace: "nowrap",
              }}
            >
              📞 Contact Us: info@emenentia.com &nbsp;|&nbsp; Mon–Fri, 9AM–6PM
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.71rem",
                  color: "rgba(255,255,255,0.65)",
                  whiteSpace: "nowrap",
                }}
              >
                Trusted by 400+ Clients Worldwide
              </span>
              <span
                style={{
                  background: "#facc15",
                  color: "#78350f",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.62rem",
                  fontWeight: 700,
                  padding: "2px 8px",
                  borderRadius: "99px",
                  whiteSpace: "nowrap",
                }}
              >
                Save up to 60% on Staffing Costs
              </span>
            </div>
          </div>
        )}

        {/* ── Main nav bar ── */}
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: `0 clamp(12px, 4vw, 32px)`,
            height: isTiny ? "58px" : isMobile ? "64px" : "70px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          {/* Logo */}
          <Link to="/" style={{ textDecoration: "none", flexShrink: 0, overflow: "visible" }}>
            <div style={{ display: "flex", alignItems: "center", lineHeight: 1, cursor: "pointer", overflow: "visible" }}>
              <img
                src="/logo.png"
                alt="Emenentia Consulting"
                style={{
                  height: isTiny ? 90 : isMobile ? 105 : 110,
                  width: "auto",
                  maxWidth: isMobile ? "240px" : "340px",
                  objectFit: "contain",
                  display: "block",
                  transition: "height 0.2s ease",
                  position: "relative",
                  zIndex: 10,
                }}
              />
            </div>
          </Link>

          {/* Desktop nav */}
          {!isMobile && (
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  flex: 1,
                  justifyContent: "center",
                  flexWrap: "nowrap",
                  overflow: "visible",
                }}
              >
                {NAV.map((item, i) => (
                  <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    {i > 0 && (
                      <div
                        style={{
                          width: "1px",
                          height: "16px",
                          background: "#e5e7eb",
                          flexShrink: 0,
                        }}
                      />
                    )}
                    {item.dropdown ? (
                      <div
                        style={{ position: "relative" }}
                        onMouseEnter={() => handleMouseEnter(item.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {hoveredNav === item.label && (
                          <div
                            style={{
                              position: "absolute",
                              top: "100%",
                              left: "-20px",
                              right: "-20px",
                              height: "20px",
                              zIndex: 9998,
                            }}
                          />
                        )}
                        <button className={`ts-nav-btn ${hoveredNav === item.label ? "active" : ""}`}>
                          {item.label}
                          <span className="ts-chevron">▾</span>
                        </button>
                        <DropdownMenu groups={item.dropdown} visible={hoveredNav === item.label} />
                      </div>
                    ) : (
                      <Link to={item.to} style={{ textDecoration: "none" }}>
                        <button className="ts-nav-btn">{item.label}</button>
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA — Free Consultation */}
              <button className="cta-btn" onClick={() => setConsultOpen(true)}>
                Free Consultation →
              </button>
            </>
          )}

          {/* Mobile hamburger */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(true)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "6px",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                alignItems: "center",
                flexShrink: 0,
              }}
              aria-label="Open menu"
            >
              <span style={{ display: "block", width: 22, height: 2, background: "#133f77", borderRadius: 2 }} />
              <span style={{ display: "block", width: 22, height: 2, background: "#133f77", borderRadius: 2 }} />
              <span style={{ display: "block", width: 22, height: 2, background: "#133f77", borderRadius: 2 }} />
            </button>
          )}
        </div>
      </nav>

      {/* ── Mobile Drawer ── */}
      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 800, display: "flex" }}>
          <div className="drawer-overlay" onClick={() => setMenuOpen(false)} />
          <div className="drawer-panel">
            <div className="drawer-header">
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "white",
                    fontSize: "1.2rem",
                  }}
                >
                  Emenentia Consulting
                </span>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.6rem",
                    color: "rgba(255,255,255,0.6)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  Offshore Staffing Experts
                </span>
              </div>
              <button className="drawer-close" onClick={() => setMenuOpen(false)}>✕</button>
            </div>

            <div style={{ padding: "12px 12px 24px", flex: 1 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                {NAV.map((item) => (
                  <MobileAccordion
                    key={item.label}
                    item={item}
                    active={mobileActive}
                    setActive={setMobileActive}
                    onLinkClick={() => setMenuOpen(false)}
                  />
                ))}
              </div>

              {/* Free Consultation button inside drawer */}
              <div
                style={{
                  padding: "16px 12px 0",
                  borderTop: "1px solid #f3f4f6",
                  marginTop: "12px",
                }}
              >
                <button
                  className="cta-btn"
                  style={{ width: "100%", padding: "12px" }}
                  onClick={() => { setMenuOpen(false); setConsultOpen(true); }}
                >
                  Free Consultation →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Free Consultation Modal ── */}
      {consultOpen && (
        <div
          className="modal-overlay"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className="modal-box">
            <div className="modal-header">
              <p className="modal-title">Book a Free Consultation</p>
              <p className="modal-sub">Tell us your staffing needs — we'll get back within 24 hours</p>
              <button className="close-btn" onClick={closeModal}>✕</button>
            </div>

            <div className="modal-body">
              {!submitted ? (
                <>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Full Name</label>
                      <input
                        className="form-input" name="name" value={form.name}
                        onChange={handleChange} placeholder="John Smith"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Mobile</label>
                      <input
                        className="form-input" name="mobile" value={form.mobile}
                        onChange={handleChange} placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      className="form-input" name="email" value={form.email}
                      onChange={handleChange} placeholder="you@company.com" type="email"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Service Needed</label>
                    <select className="form-input" name="service" value={form.service} onChange={handleChange}>
                      <option value="">Select a Service</option>
                      <option>Audit & Assurance Staffing</option>
                      <option>Accounting Staffing</option>
                      <option>Taxation Staffing</option>
                      <option>Not Sure — Need Advice</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message (Optional)</label>
                    <textarea
                      className="form-input"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your team size, volume, or any specific requirements..."
                      rows={3}
                      style={{ resize: "vertical" }}
                    />
                  </div>
                  <button
                    className="form-btn"
                    onClick={handleSubmit}
                    disabled={!form.name || !form.email || !form.mobile || !form.service}
                  >
                    Submit Request →
                  </button>
                </>
              ) : (
                <div className="success-box">
                  <div className="success-icon">✅</div>
                  <p className="success-title">Request Received!</p>
                  <p className="success-sub">
                    Thank you <strong>{form.name}</strong>! Our team will reach out to <strong>{form.email}</strong> within 24 hours.
                  </p>
                  <button className="form-btn" onClick={closeModal}>Close</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}