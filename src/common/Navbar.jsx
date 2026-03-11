import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Tax Services", href: "#" },
  { label: "Filing & Returns", href: "#" },
  { label: "GST & Compliance", href: "#" },
  { label: "Resources", href: "#" },
  { label: "Contact", href: "#" },
];

export default function TaxNavbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=DM+Sans:wght@400;500;600&display=swap');

        .nav-link {
          position: relative;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          color: #374151;
          padding: 6px 4px;
          transition: color 0.25s ease;
          cursor: pointer;
          text-decoration: none;
          white-space: nowrap;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0%;
          height: 2.5px;
          background: #133f77;
          border-radius: 99px;
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-link:hover {
          color: #133f77;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-link.active {
          color: #133f77;
          font-weight: 600;
        }

        .nav-link.active::after {
          width: 100%;
        }

        .cta-btn {
          background: #133f77;
          color: white;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          padding: 10px 22px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
          letter-spacing: 0.01em;
        }

        .cta-btn:hover {
          background: #0e2f5a;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(19,63,119,0.3);
        }

        .cta-btn:active {
          transform: translateY(0);
        }

        .brand-text {
          font-family: 'Playfair Display', serif;
          color: #133f77;
          font-size: 1.35rem;
          line-height: 1;
          letter-spacing: -0.01em;
        }

        .brand-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          color: #6b7280;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-weight: 500;
        }

        .badge {
          background: #e8f0fb;
          color: #133f77;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 99px;
          letter-spacing: 0.05em;
        }

        .navbar-shadow {
          box-shadow: 0 1px 0 rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04);
        }

        .mobile-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          font-weight: 500;
          color: #374151;
          padding: 12px 16px;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
          display: block;
          text-decoration: none;
        }

        .mobile-link:hover, .mobile-link.active {
          background: #e8f0fb;
          color: #133f77;
          font-weight: 600;
        }

        .mobile-menu {
          animation: slideDown 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <nav className="bg-white navbar-shadow sticky top-0 z-50">
        {/* Top strip */}
        <div style={{ background: "#133f77" }} className="py-1.5 px-6 hidden md:flex items-center justify-between">
          <p className="text-white text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            📞 Helpline: 1800-103-0025 &nbsp;|&nbsp; Mon–Sat, 9AM–6PM
          </p>
          <div className="flex items-center gap-4">
            <span className="text-white text-xs opacity-75" style={{ fontFamily: "'DM Sans', sans-serif" }}>ITR Filing Deadline: Jul 31, 2025</span>
            <span className="badge bg-yellow-400 text-yellow-900">New: AY 2025–26 Open</span>
          </div>
        </div>

        {/* Main navbar */}
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 gap-8">

          {/* Brand */}
          <div className="flex flex-col leading-tight flex-shrink-0">
            <span className="brand-text">TaxSure</span>
            <span className="brand-sub">India's Tax Authority</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`nav-link ${active === link.label ? "active" : ""}`}
                onClick={(e) => { e.preventDefault(); setActive(link.label); }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
         
            <button className="cta-btn">File Your ITR →</button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              style={{
                display: "block", width: 22, height: 2, background: "#133f77", borderRadius: 2,
                transition: "transform 0.25s, opacity 0.25s",
                transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                display: "block", width: 22, height: 2, background: "#133f77", borderRadius: 2,
                opacity: menuOpen ? 0 : 1, transition: "opacity 0.2s",
              }}
            />
            <span
              style={{
                display: "block", width: 22, height: 2, background: "#133f77", borderRadius: 2,
                transition: "transform 0.25s, opacity 0.25s",
                transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mobile-menu lg:hidden border-t border-gray-100 bg-white px-4 py-3 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`mobile-link ${active === link.label ? "active" : ""}`}
                onClick={(e) => { e.preventDefault(); setActive(link.label); setMenuOpen(false); }}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2 border-t border-gray-100 mt-1">
              <button className="cta-btn w-full">File Your ITR →</button>
            </div>
          </div>
        )}
      </nav>

      
    </>
  );
}