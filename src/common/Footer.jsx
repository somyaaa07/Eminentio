import { Link } from "react-router-dom";

const Footer = () => {
  const services = [
    { label: "Individual Tax Planning",  to: "/services/taxationStaffing" },
    { label: "Estate & Trust Advisory",  to: "/services/accountingStaffing" },
    { label: "International Tax",        to: "/services/taxationStaffing" },
    { label: "Audit Representation",     to: "/services/auditAssurance" },
    { label: "Tax Litigation",           to: "/services/auditAssurance" },
  ];

  const company = [
    { label: "About Eminentio",   to: "/about" },
    { label: "Our Partners",      to: "/about" },
    {label:"Find Location", to:"/contact"},
    { label: "Doumenttation",           to: "/documents" },
    { label: "Contact Us",        to: "/contact" },
  ];

  const legal = [
    { label: "Privacy Policy", to: "/privacy" },
    { label: "Terms of Use",   to: "/terms" },
    { label: "Disclaimer",     to: "/disclaimer" },
  ];

  const socials = [
    {
      label: "LinkedIn",
      to: "/",
      svg: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="rgba(255,255,255,0.6)">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      label: "Twitter",
      to: "/",
      svg: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="rgba(255,255,255,0.6)">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </svg>
      ),
    },
    {
      label: "Facebook",
      to: "/",
      svg: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="rgba(255,255,255,0.6)">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      to: "/",
      svg: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4" fill="rgba(255,255,255,0.6)" stroke="none" />
          <circle cx="17.5" cy="6.5" r="1" fill="rgba(255,255,255,0.6)" stroke="none" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=DM+Sans:wght@300;400;500&display=swap');
        .font-cor { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-dm  { font-family: 'DM Sans', sans-serif; }

        .gold-bar { height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), #fff, rgba(255,255,255,0.6), transparent); }

        .footer-grid {
          max-width: 1200px; margin: 0 auto;
          padding: 2.5rem 1.5rem 2rem;
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
          gap: 2rem;
        }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 2rem 1.5rem; }
          .brand-col { grid-column: 1 / -1; }
        }
        @media (max-width: 520px) {
          .footer-grid { grid-template-columns: 1fr; gap: 1.8rem; padding: 2rem 1.2rem 1.5rem; }
          .brand-col { grid-column: auto; }
          .footer-bottom { flex-direction: column; align-items: flex-start; }
        }

        .nav-link {
          font-size: 0.95rem; font-weight: 300; color: rgba(255,255,255,0.7);
          text-decoration: none; display: block; transition: all 0.2s; padding-left: 0;
        }
        .nav-link:hover { color: #fff; padding-left: 10px; }

        .cert-tag {
          font-size: 0.55rem; letter-spacing: 0.18em; text-transform: uppercase;
          padding: 4px 8px; border: 1px solid rgba(255,255,255,0.4);
          color: rgba(255,255,255,0.7); transition: all 0.2s;
        }
        .cert-tag:hover { background: rgba(255,255,255,0.12); color: #fff; border-color: rgba(255,255,255,0.7); }

        .social-btn {
          width: 32px; height: 32px; border: 1px solid rgba(255,255,255,0.18);
          display: flex; align-items: center; justify-content: center;
          text-decoration: none; transition: all 0.25s;
        }
        .social-btn:hover { border-color: rgba(255,255,255,0.6); background: rgba(255,255,255,0.1); transform: translateY(-2px); }

        .legal-link {
          font-size: 0.58rem; letter-spacing: 0.14em; text-transform: uppercase;
          color: rgba(255,255,255,0.35); text-decoration: none; transition: color 0.2s;
        }
        .legal-link:hover { color: #fff; }

        .map-link {
          font-size: 0.6rem; letter-spacing: 0.15em; text-transform: uppercase;
          color: rgba(255,255,255,0.5); text-decoration: none;
          display: inline-flex; align-items: center; gap: 6px;
          transition: color 0.2s; margin-top: 4px;
        }
        .map-link:hover { color: #fff; }

        .footer-bottom {
          max-width: 1200px; margin: 0 auto;
          padding: 1rem 1.5rem;
          border-top: 1px solid rgba(255,255,255,0.08);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 0.8rem;
        }
      `}</style>

      <footer className="font-cor" style={{ background: "#133f77" }}>
        <div className="gold-bar" />

        <div className="footer-grid">

          {/* ── Brand ── */}
          <div className="brand-col">
            <Link to="/" style={{ textDecoration: "none" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "0.8rem" }}>
                <div style={{ width: 34, height: 34, border: "1.5px solid rgba(255,255,255,0.7)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
                    <path d="M12 1L4 5.5V10c0 5.25 3.4 10.15 8 11.35C17.6 20.15 21 15.25 21 10V5.5L12 1zm0 10.5h7c-.53 4.12-3.28 7.79-7 8.94V11.5zm0 0V3.21l7 3.5V11.5h-7z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: "1.35rem", fontWeight: 600, letterSpacing: "0.08em", color: "#fff", lineHeight: 1 }}>Eminentio</div>
                  <div className="font-dm" style={{ fontSize: "0.55rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginTop: 3 }}>Taxation & Advisory</div>
                </div>
              </div>
            </Link>

            <div style={{ width: 36, height: 1, background: "#fff", margin: "0.8rem 0" }} />

            <p style={{ fontSize: "0.92rem", fontWeight: 300, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", marginBottom: "0.9rem" }}>
              Delivering distinguished tax counsel and financial strategy to discerning individuals and enterprises since 2004.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: "1rem" }}>
              {["CPA Certified", "IRS Enrolled", "AICPA Member"].map((b) => (
                <span key={b} className="cert-tag font-dm">{b}</span>
              ))}
            </div>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "0.8rem" }}>
              <div className="font-dm" style={{ fontSize: "0.58rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: 4 }}>Office Hours</div>
              <div style={{ fontSize: "0.85rem", fontWeight: 300, color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>
                Mon – Fri: 9:00 AM – 6:00 PM<br />Sat: 10:00 AM – 2:00 PM
              </div>
            </div>
          </div>

          {/* ── Services ── */}
          <div>
            <div className="font-dm" style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", paddingBottom: "0.6rem", marginBottom: "0.9rem", borderBottom: "1px solid rgba(255,255,255,0.12)" }}>Services</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {services.map((s) => (
                <li key={s.label} style={{ marginBottom: 6 }}>
                  <Link to={s.to} className="nav-link">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Company ── */}
          <div>
            <div className="font-dm" style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", paddingBottom: "0.6rem", marginBottom: "0.9rem", borderBottom: "1px solid rgba(255,255,255,0.12)" }}>Company</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {company.map((c) => (
                <li key={c.label} style={{ marginBottom: 6 }}>
                  <Link to={c.to} className="nav-link">{c.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div>
            <div className="font-dm" style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", paddingBottom: "0.6rem", marginBottom: "0.9rem", borderBottom: "1px solid rgba(255,255,255,0.12)" }}>Get in Touch</div>

            {[
              {
                label: "Office",
                text: "Mumbai, Maharashtra,India",
                icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
              },
              {
                label: "Phone",
                text: "+91 98100 00000",
                icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
              },
              {
                label: "Email",
                text: "info@eminentiaconsulting.com",
                icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
              },
            ].map(({ label, text, icon }) => (
              <div key={label} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: "1rem" }}>
                <div style={{ width: 32, height: 32, border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{icon}</div>
                <div>
                  <div className="font-dm" style={{ fontSize: "0.57rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 2 }}>{label}</div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 300, color: "rgba(255,255,255,0.75)", lineHeight: 1.5, whiteSpace: "pre-line" }}>{text}</div>
                </div>
              </div>
            ))}

            <Link to="/contact" className="map-link font-dm">View on Map <span>→</span></Link>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="footer-bottom">
          <p style={{ fontSize: "0.8rem", fontWeight: 300, color: "rgba(255,255,255,0.4)" }}>
            © 2025 <span style={{ color: "rgba(255,255,255,0.7)", fontWeight: 400 }}>Eminentio Taxation & Advisory LLC</span>. All rights reserved.
          </p>

          <div style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap" }}>
            {legal.map((l) => (
              <Link key={l.label} to={l.to} className="legal-link font-dm">{l.label}</Link>
            ))}
          </div>

          <div style={{ display: "flex", gap: 6 }}>
            {socials.map(({ label, to, svg }) => (
              <Link key={label} to={to} aria-label={label} className="social-btn">{svg}</Link>
            ))}
          </div>
        </div>

        <div className="gold-bar" />
      </footer>
    </>
  );
};

export default Footer;