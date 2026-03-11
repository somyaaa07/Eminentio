import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const NAV = [
  { label: "Home", to: "/" },
  {
    label: "Tax Services",
    to: "#",
    dropdown: [
      { group: "Direct Tax", items: [
        { label: "Income Tax Filing", to: "/services/incomeTax", icon: "📄" },
        { label: "TDS / TCS", to: "/services/tdsTcs", icon: "💼" },
        { label: "Advance Tax", to: "/services/advanceTax", icon: "📆" },
        { label: "Tax Planning", to: "/services/taxPlanning", icon: "🧮" },
      ]},
      { group: "Indirect Tax", items: [
        { label: "GST Registration", to: "/services/gstRegistration", icon: "🏛️" },
        { label: "GST Filing", to: "/services/gstFiling", icon: "📋" },
        { label: "Customs Duty", to: "/services/customs", icon: "🚢" },
      ]},
    ],
  },
  {
    label: "Regulatory",
    to: "#",
    dropdown: [
      { group: "Business Setup", items: [
        { label: "Company Registration", to: "/regulatory/company-reg", icon: "🏢" },
        { label: "LLP Formation", to: "/regulatory/llp", icon: "🤝" },
        { label: "MSME Registration", to: "/regulatory/msme", icon: "⚙️" },
      ]},
      { group: "Compliance", items: [
        { label: "ROC Filings", to: "/regulatory/roc", icon: "📑" },
        { label: "FEMA / RBI", to: "/regulatory/fema", icon: "🏦" },
        { label: "Labour Law", to: "/regulatory/labour", icon: "⚖️" },
      ]},
    ],
  },
  { label: "Documents", to: "/documents" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

function DropdownMenu({ groups, visible }) {
  return (
    <div style={{
      position: "absolute",
      top: "calc(100% + 14px)",
      left: "50%",
      transform: visible ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(-8px)",
      background: "white",
      borderRadius: "14px",
      boxShadow: "0 8px 40px rgba(19,63,119,0.13), 0 2px 8px rgba(0,0,0,0.06)",
      border: "1px solid #e8f0fb",
      padding: "18px",
      display: "flex",
      gap: "24px",
      minWidth: groups.length > 1 ? "440px" : "240px",
      opacity: visible ? 1 : 0,
      pointerEvents: visible ? "auto" : "none",
      transition: "opacity 0.22s ease, transform 0.22s cubic-bezier(0.4,0,0.2,1)",
      zIndex: 9999,
    }}>
      <div style={{
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
      }} />
      {groups.map((group) => (
        <div key={group.group} style={{ flex: 1, minWidth: "180px" }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.65rem",
            fontWeight: 700,
            color: "#9ca3af",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "10px",
            paddingBottom: "8px",
            borderBottom: "1px solid #f3f4f6",
            margin: "0 0 10px 0",
          }}>{group.group}</p>
          {group.items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              style={{ textDecoration: "none" }}
            >
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "8px 10px",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "background 0.18s",
                marginBottom: "2px",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "#f0f5ff"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
              >
                <span style={{ fontSize: "1rem", lineHeight: 1 }}>{item.icon}</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", fontWeight: 500, color: "#1f2937" }}>{item.label}</span>
              </div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

function MobileAccordion({ item, active, setActive }) {
  const isOpen = active === item.label;
  return (
    <div>
      {item.dropdown ? (
        <>
          <button
            onClick={() => setActive(isOpen ? null : item.label)}
            style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              width: "100%", padding: "12px 14px",
              background: isOpen ? "#e8f0fb" : "transparent",
              border: "none", borderRadius: "9px", cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem",
              fontWeight: isOpen ? 600 : 500,
              color: isOpen ? "#133f77" : "#374151",
              textAlign: "left", transition: "all 0.2s",
            }}
          >
            {item.label}
            <span style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s", fontSize: "0.75rem", color: "#6b7280" }}>▾</span>
          </button>
          {isOpen && (
            <div style={{ marginLeft: "12px", paddingLeft: "12px", borderLeft: "2px solid #e8f0fb", marginTop: "4px", marginBottom: "4px" }}>
              {item.dropdown.map((group) => (
                <div key={group.group} style={{ marginBottom: "10px" }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", fontWeight: 700, color: "#9ca3af", letterSpacing: "0.1em", textTransform: "uppercase", padding: "6px 10px 4px", margin: 0 }}>{group.group}</p>
                  {group.items.map((sub) => (
                    <Link key={sub.to} to={sub.to} style={{ textDecoration: "none" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 10px", borderRadius: "7px", fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", fontWeight: 500, color: "#374151", cursor: "pointer", transition: "background 0.15s, color 0.15s" }}
                        onMouseEnter={e => { e.currentTarget.style.background = "#f0f5ff"; e.currentTarget.style.color = "#133f77"; }}
                        onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#374151"; }}
                      >
                        <span>{sub.icon}</span>{sub.label}
                      </div>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <Link to={item.to} style={{ textDecoration: "none" }}>
          <div style={{ padding: "12px 14px", borderRadius: "9px", fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", fontWeight: 500, color: "#374151", cursor: "pointer", transition: "background 0.18s, color 0.18s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#e8f0fb"; e.currentTarget.style.color = "#133f77"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#374151"; }}
          >
            {item.label}
          </div>
        </Link>
      )}
    </div>
  );
}

export default function TaxNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileActive, setMobileActive] = useState(null);
  const [hoveredNav, setHoveredNav] = useState(null);
  const [itrOpen, setItrOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", pan: "", mobile: "", email: "", ay: "", itrType: "", income: "" });
  const hoverTimeout = useRef(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 1024;

  const handleMouseEnter = (label) => { clearTimeout(hoverTimeout.current); setHoveredNav(label); };
  const handleMouseLeave = () => { hoverTimeout.current = setTimeout(() => setHoveredNav(null), 120); };
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = () => setSubmitted(true);
  const closeModal = () => {
    setItrOpen(false);
    setTimeout(() => { setStep(1); setSubmitted(false); setForm({ name: "", pan: "", mobile: "", email: "", ay: "", itrType: "", income: "" }); }, 300);
  };

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=DM+Sans:wght@400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; }

        .ts-nav-btn {
          position: relative;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          color: #374151;
          padding: 7px 14px;
          cursor: pointer;
          text-decoration: none;
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 5px;
          background: none;
          border: none;
          border-radius: 8px;
          transition: color 0.2s, background 0.2s;
          letter-spacing: 0.01em;
        }
        .ts-nav-btn::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 14px;
          right: 14px;
          height: 2px;
          background: #133f77;
          border-radius: 99px;
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
          transition: transform 0.22s, color 0.2s; margin-top: 1px;
        }
        .ts-nav-btn:hover .ts-chevron, .ts-nav-btn.active .ts-chevron {
          transform: rotate(180deg); color: #133f77;
        }

        .cta-btn {
          background: #133f77; color: white;
          font-family: 'DM Sans', sans-serif; font-size: 0.875rem; font-weight: 600;
          padding: 10px 22px; border-radius: 8px; border: none; cursor: pointer;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          white-space: nowrap; flex-shrink: 0;
        }
        .cta-btn:hover { background: #0e2f5a; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(19,63,119,0.3); }

        .modal-overlay {
          position: fixed; inset: 0; background: rgba(10,25,50,0.55);
          backdrop-filter: blur(4px); z-index: 9999;
          display: flex; align-items: center; justify-content: center;
          padding: 16px; animation: fadeIn 0.2s ease;
        }
        .modal-box {
          background: white; border-radius: 16px; width: 100%; max-width: 500px;
          box-shadow: 0 24px 64px rgba(0,0,0,0.18); overflow: hidden;
          animation: popUp 0.28s cubic-bezier(0.34,1.56,0.64,1);
          max-height: 90vh; overflow-y: auto;
        }
        .modal-header { background: linear-gradient(135deg, #133f77, #1a5199); padding: 22px 24px 18px; color: white; position: relative; }
        .modal-title { font-family: 'Playfair Display', serif; font-size: 1.35rem; margin: 0 0 3px; }
        .modal-sub { font-family: 'DM Sans', sans-serif; font-size: 0.78rem; opacity: 0.72; margin: 0; }
        .close-btn {
          position: absolute; top: 16px; right: 18px;
          background: rgba(255,255,255,0.15); border: none; color: white;
          width: 28px; height: 28px; border-radius: 50%; cursor: pointer;
          font-size: 1rem; display: flex; align-items: center; justify-content: center; transition: background 0.2s;
        }
        .close-btn:hover { background: rgba(255,255,255,0.28); }
        .step-indicator { display: flex; align-items: center; margin-top: 14px; }
        .step-dot { width: 26px; height: 26px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: 'DM Sans', sans-serif; font-size: 0.72rem; font-weight: 700; flex-shrink: 0; transition: all 0.3s; }
        .step-dot.done { background: #4ade80; color: #14532d; }
        .step-dot.active { background: white; color: #133f77; }
        .step-dot.pending { background: rgba(255,255,255,0.2); color: rgba(255,255,255,0.55); }
        .step-line { flex: 1; height: 2px; background: rgba(255,255,255,0.2); margin: 0 6px; }
        .step-line.done { background: #4ade80; }
        .step-label { font-family: 'DM Sans', sans-serif; font-size: 0.68rem; margin-left: 5px; color: rgba(255,255,255,0.8); font-weight: 500; }
        .modal-body { padding: 22px 24px 26px; }
        .form-group { margin-bottom: 14px; }
        .form-label { display: block; font-family: 'DM Sans', sans-serif; font-size: 0.72rem; font-weight: 700; color: #374151; margin-bottom: 5px; letter-spacing: 0.04em; text-transform: uppercase; }
        .form-input { width: 100%; padding: 9px 13px; border: 1.5px solid #e5e7eb; border-radius: 8px; font-family: 'DM Sans', sans-serif; font-size: 0.875rem; color: #111827; background: #fafafa; outline: none; transition: border-color 0.2s, box-shadow 0.2s, background 0.2s; }
        .form-input:focus { border-color: #133f77; background: white; box-shadow: 0 0 0 3px rgba(19,63,119,0.1); }
        .form-input::placeholder { color: #9ca3af; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .form-btn { width: 100%; padding: 11px; background: #133f77; color: white; font-family: 'DM Sans', sans-serif; font-size: 0.9rem; font-weight: 600; border: none; border-radius: 9px; cursor: pointer; margin-top: 6px; transition: background 0.2s, transform 0.15s, box-shadow 0.2s; }
        .form-btn:hover:not(:disabled) { background: #0e2f5a; transform: translateY(-1px); box-shadow: 0 5px 18px rgba(19,63,119,0.25); }
        .form-btn:disabled { opacity: 0.45; cursor: not-allowed; }
        .form-btn-outline { background: white; color: #133f77; border: 1.5px solid #133f77; }
        .form-btn-outline:hover:not(:disabled) { background: #e8f0fb; box-shadow: none; }
        .btn-row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 6px; }
        .info-pill { background: #fef3c7; color: #92400e; font-family: 'DM Sans', sans-serif; font-size: 0.7rem; font-weight: 500; padding: 4px 10px; border-radius: 6px; display: inline-flex; align-items: center; gap: 4px; margin-bottom: 16px; }
        .review-row { display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid #f3f4f6; }
        .review-key { font-family: 'DM Sans', sans-serif; font-size: 0.78rem; color: #6b7280; font-weight: 500; }
        .review-val { font-family: 'DM Sans', sans-serif; font-size: 0.8rem; color: #111827; font-weight: 600; }
        .success-box { text-align: center; padding: 8px 0; }
        .success-icon { width: 60px; height: 60px; background: #dcfce7; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 14px; font-size: 1.6rem; animation: popUp 0.4s cubic-bezier(0.34,1.56,0.64,1); }
        .success-title { font-family: 'Playfair Display', serif; font-size: 1.25rem; color: #133f77; margin-bottom: 6px; }
        .success-sub { font-family: 'DM Sans', sans-serif; font-size: 0.85rem; color: #6b7280; line-height: 1.5; margin-bottom: 16px; }
        .ref-badge { background: #e8f0fb; color: #133f77; font-family: 'DM Sans', sans-serif; font-size: 0.78rem; font-weight: 600; padding: 7px 14px; border-radius: 8px; display: inline-block; margin-bottom: 18px; letter-spacing: 0.04em; }
        .drawer-overlay { position: absolute; inset: 0; background: rgba(10,25,50,0.45); backdrop-filter: blur(3px); animation: fadeIn 0.22s ease; }
        .drawer-panel { position: relative; width: min(320px, 88vw); height: 100%; background: white; display: flex; flex-direction: column; animation: slideRight 0.28s cubic-bezier(0.4,0,0.2,1); box-shadow: 4px 0 32px rgba(0,0,0,0.12); overflow-y: auto; }
        .drawer-header { background: linear-gradient(135deg, #133f77, #1a5199); padding: 20px 18px 16px; display: flex; align-items: center; justify-content: space-between; flex-shrink: 0; }
        .drawer-close { width: 32px; height: 32px; background: rgba(255,255,255,0.15); border: none; color: white; border-radius: 50%; cursor: pointer; font-size: 1rem; display: flex; align-items: center; justify-content: center; transition: background 0.2s; }
        .drawer-close:hover { background: rgba(255,255,255,0.28); }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes popUp { from { opacity: 0; transform: scale(0.92) translateY(14px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        @keyframes slideRight { from { transform: translateX(-100%); } to { transform: translateX(0); } }
      `}</style>

      <nav style={{ background: "white", boxShadow: "0 1px 0 rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)", position: "sticky", top: 0, zIndex: 500 }}>
        {!isMobile && (
          <div style={{ background: "#133f77", padding: "5px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.73rem", color: "rgba(255,255,255,0.85)" }}>
              📞 Helpline: 1800-103-0025 &nbsp;|&nbsp; Mon–Sat, 9AM–6PM
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.71rem", color: "rgba(255,255,255,0.65)" }}>ITR Filing Deadline: Jul 31, 2025</span>
              <span style={{ background: "#facc15", color: "#78350f", fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", fontWeight: 700, padding: "2px 8px", borderRadius: "99px" }}>New: AY 2025–26 Open</span>
            </div>
          </div>
        )}

        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", height: "66px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>

          {/* ✅ FIX 1: Link directly wrapping logo - no nested custom component */}
          <Link to="/" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1, flexShrink: 0, cursor: "pointer", gap: "3px" }}>
              <img src="/logo.jpeg" alt="company-logo" className="h-15" />
            </div>
          </Link>

          {!isMobile && (
            <>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", flex: 1, justifyContent: "center" }}>
                {NAV.map((item, i) => (
                  <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    {i > 0 && (
                      <div style={{ width: "1px", height: "16px", background: "#e5e7eb", flexShrink: 0 }} />
                    )}
                    <div
                      style={{ position: "relative" }}
                      onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
                      onMouseLeave={() => item.dropdown && handleMouseLeave()}
                    >
                      {/* ✅ FIX 2: For items with dropdown, use button only (no Link wrapping button) */}
                      {item.dropdown ? (
                        <button className={`ts-nav-btn ${hoveredNav === item.label ? "active" : ""}`}>
                          {item.label}
                          <span className="ts-chevron">▾</span>
                        </button>
                      ) : (
                        <Link to={item.to} style={{ textDecoration: "none" }}>
                          <button className="ts-nav-btn">
                            {item.label}
                          </button>
                        </Link>
                      )}
                      {item.dropdown && <DropdownMenu groups={item.dropdown} visible={hoveredNav === item.label} />}
                    </div>
                  </div>
                ))}
              </div>
              <button className="cta-btn" onClick={() => setItrOpen(true)}>File Your ITR →</button>
            </>
          )}

          {isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <button className="cta-btn" style={{ padding: "8px 14px", fontSize: "0.8rem" }} onClick={() => setItrOpen(true)}>File ITR</button>
              <button
                onClick={() => setMenuOpen(true)}
                style={{ background: "none", border: "none", cursor: "pointer", padding: "6px", display: "flex", flexDirection: "column", gap: "5px", alignItems: "center" }}
                aria-label="Open menu"
              >
                <span style={{ display: "block", width: 22, height: 2, background: "#133f77", borderRadius: 2 }} />
                <span style={{ display: "block", width: 22, height: 2, background: "#133f77", borderRadius: 2 }} />
                <span style={{ display: "block", width: 22, height: 2, background: "#133f77", borderRadius: 2 }} />
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 800, display: "flex" }}>
          <div className="drawer-overlay" onClick={() => setMenuOpen(false)} />
          <div className="drawer-panel">
            <div className="drawer-header">
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontFamily: "'Playfair Display', serif", color: "white", fontSize: "1.2rem" }}>TaxSure</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.6rem", color: "rgba(255,255,255,0.6)", letterSpacing: "0.12em", textTransform: "uppercase" }}>India's Tax Authority</span>
              </div>
              <button className="drawer-close" onClick={() => setMenuOpen(false)}>✕</button>
            </div>
            <div style={{ padding: "12px 12px 24px", flex: 1 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                {NAV.map((item) => (
                  <MobileAccordion key={item.label} item={item} active={mobileActive} setActive={setMobileActive} />
                ))}
              </div>
              <div style={{ padding: "16px 12px 0", borderTop: "1px solid #f3f4f6", marginTop: "12px" }}>
                <button className="cta-btn" style={{ width: "100%", padding: "12px" }} onClick={() => { setMenuOpen(false); setItrOpen(true); }}>File Your ITR →</button>
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "#9ca3af", textAlign: "center", marginTop: "14px" }}>
                📞 1800-103-0025 · Mon–Sat 9AM–6PM
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ITR Modal */}
      {itrOpen && (
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && closeModal()}>
          <div className="modal-box">
            <div className="modal-header">
              <p className="modal-title">File Your ITR</p>
              <p className="modal-sub">Income Tax Return — Assessment Year 2025–26</p>
              <button className="close-btn" onClick={closeModal}>✕</button>
              {!submitted && (
                <div className="step-indicator">
                  <div className={`step-dot ${step > 1 ? "done" : "active"}`}>{step > 1 ? "✓" : "1"}</div>
                  <span className="step-label">Personal</span>
                  <div className={`step-line ${step > 1 ? "done" : ""}`} />
                  <div className={`step-dot ${step > 2 ? "done" : step === 2 ? "active" : "pending"}`}>{step > 2 ? "✓" : "2"}</div>
                  <span className="step-label">Tax Info</span>
                  <div className={`step-line ${step > 2 ? "done" : ""}`} />
                  <div className={`step-dot ${step === 3 ? "active" : "pending"}`}>3</div>
                  <span className="step-label">Review</span>
                </div>
              )}
            </div>
            <div className="modal-body">
              {!submitted ? (
                <>
                  {step === 1 && (
                    <>
                      <div className="info-pill">⚠️ Keep your PAN card handy</div>
                      <div className="form-group">
                        <label className="form-label">Full Name (as per PAN)</label>
                        <input className="form-input" name="name" value={form.name} onChange={handleChange} placeholder="e.g. Rajesh Kumar Sharma" />
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label className="form-label">PAN Number</label>
                          <input className="form-input" name="pan" value={form.pan} onChange={handleChange} placeholder="ABCDE1234F" maxLength={10} style={{ textTransform: "uppercase" }} />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Mobile</label>
                          <input className="form-input" name="mobile" value={form.mobile} onChange={handleChange} placeholder="9XXXXXXXXX" maxLength={10} />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Email Address</label>
                        <input className="form-input" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" type="email" />
                      </div>
                      <button className="form-btn" onClick={() => setStep(2)} disabled={!form.name || !form.pan || !form.mobile || !form.email}>Continue →</button>
                    </>
                  )}
                  {step === 2 && (
                    <>
                      <div className="form-row">
                        <div className="form-group">
                          <label className="form-label">Assessment Year</label>
                          <select className="form-input" name="ay" value={form.ay} onChange={handleChange}>
                            <option value="">Select AY</option>
                            <option>AY 2025–26</option>
                            <option>AY 2024–25</option>
                            <option>AY 2023–24</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label className="form-label">ITR Form Type</label>
                          <select className="form-input" name="itrType" value={form.itrType} onChange={handleChange}>
                            <option value="">Select Type</option>
                            <option>ITR-1 (Sahaj)</option>
                            <option>ITR-2</option>
                            <option>ITR-3</option>
                            <option>ITR-4 (Sugam)</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Gross Annual Income (₹)</label>
                        <input className="form-input" name="income" value={form.income} onChange={handleChange} placeholder="e.g. 750000" type="number" />
                      </div>
                      <div className="btn-row">
                        <button className="form-btn form-btn-outline" onClick={() => setStep(1)}>← Back</button>
                        <button className="form-btn" onClick={() => setStep(3)} disabled={!form.ay || !form.itrType || !form.income}>Review →</button>
                      </div>
                    </>
                  )}
                  {step === 3 && (
                    <>
                      <div style={{ background: "#f8faff", border: "1.5px solid #e8f0fb", borderRadius: "10px", padding: "14px 16px", marginBottom: "16px" }}>
                        {[
                          ["Name", form.name],
                          ["PAN", form.pan.toUpperCase()],
                          ["Mobile", form.mobile],
                          ["Email", form.email],
                          ["Assessment Year", form.ay],
                          ["ITR Form", form.itrType],
                          ["Gross Income", `₹ ${Number(form.income).toLocaleString("en-IN")}`],
                        ].map(([k, v]) => (
                          <div key={k} className="review-row">
                            <span className="review-key">{k}</span>
                            <span className="review-val">{v}</span>
                          </div>
                        ))}
                      </div>
                      <div className="btn-row">
                        <button className="form-btn form-btn-outline" onClick={() => setStep(2)}>← Edit</button>
                        <button className="form-btn" onClick={handleSubmit}>Submit ITR ✓</button>
                      </div>
                    </>
                  )}
                </>
              ) : (
                <div className="success-box">
                  <div className="success-icon">✅</div>
                  <p className="success-title">ITR Filed Successfully!</p>
                  <p className="success-sub">Acknowledgement sent to <strong>{form.email}</strong></p>
                  <div className="ref-badge">Ref: TXSR-{Math.random().toString(36).slice(2, 8).toUpperCase()}</div>
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