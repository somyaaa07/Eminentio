import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const services = [
    "Individual Tax Planning",
    "Corporate Taxation",
    "Estate & Trust Advisory",
    "International Tax",
    "Audit Representation",
    "Tax Litigation",
  ];

  const company = [
    "About Eminentio",
    "Our Partners",
    "Insights & Articles",
    "Case Studies",
    "Careers",
    "Contact Us",
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600&display=swap');
        .font-cormorant { font-family: 'Cormorant', 'Cormorant Garamond', Georgia, serif; }
        .link-hover { transition: all 0.25s ease; }
        .link-hover:hover { color: #fff; padding-left: 14px; }
        .social-btn { transition: all 0.3s ease; }
        .social-btn:hover { transform: translateY(-3px); border-color: #fff !important; background: rgba(212,175,55,0.12) !important; }
        .social-btn:hover .social-icon { stroke: #fff !important; fill: #fff !important; }
        .gold-rule { background: white; }
        .newsletter-input:focus { outline: none; border-color: #fff !important; }
        .cert-badge { transition: all 0.25s; }
        .cert-badge:hover { background: #fff; color: #133f77; border-color: #fff; }
        .divider-diamond { position: relative; }
        .divider-diamond::before { content: '◆'; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); font-size: 0.5rem; color: #fff; background: #133f77; padding: 0 12px; }
        .legal-link:hover { color: #fff !important; }
        .map-link:hover { color: #fff !important; }
      `}</style>

      <footer className="font-cormorant" style={{ background: "#133f77" }}>
        {/* Gold Top Rule */}
        <div className="h-[3px] gold-rule" />

        {/* Newsletter Band */}
       

        {/* Main Grid */}
        <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-start gap-3 mb-5">
              <div className="w-10 h-10 border-2 flex items-center justify-center flex-shrink-0 mt-1" style={{ borderColor: "#fff" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
                  <path d="M12 1L4 5.5V10c0 5.25 3.4 10.15 8 11.35C17.6 20.15 21 15.25 21 10V5.5L12 1zm0 10.5h7c-.53 4.12-3.28 7.79-7 8.94V11.5zm0 0V3.21l7 3.5V11.5h-7z"/>
                </svg>
              </div>
              <div>
                <div className="font-cormorant text-2xl font-semibold tracking-wider leading-none text-white">
                  Eminentio
                </div>
                <div className="font-cormorant text-[0.6rem] font-medium tracking-[0.22em] uppercase mt-1" style={{ color: "#fff" }}>
                  Taxation & Advisory
                </div>
              </div>
            </div>

            <div className="w-12 h-[1px] mb-5" style={{ background: "#fff" }} />

            <p className="font-cormorant text-[1rem] font-light leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.75)" }}>
              Delivering distinguished tax counsel and financial strategy to discerning individuals and enterprises since 2004.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {["CPA Certified", "IRS Enrolled", "AICPA Member"].map((b) => (
                <span
                  key={b}
                  className="cert-badge px-3 py-1 border font-cormorant text-[0.68rem] font-medium tracking-widest uppercase cursor-default"
                  style={{ borderColor: "rgba(212,175,55,0.45)", color: "#fff" }}
                >
                  {b}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
              <p className="font-cormorant text-[0.7rem] tracking-[0.18em] uppercase mb-2" style={{ color: "#fff" }}>Office Hours</p>
              <p className="font-cormorant text-sm font-light text-white">Mon – Fri: 9:00 AM – 6:00 PM</p>
              <p className="font-cormorant text-sm font-light text-white">Sat: 10:00 AM – 2:00 PM</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-cormorant text-[0.72rem] font-semibold tracking-[0.22em] uppercase pb-3 mb-5 border-b" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}>
              Services
            </h4>
            <ul className="space-y-[10px]">
              {services.map((s) => (
                <li key={s}>
                  <a href="#" className="link-hover font-cormorant text-[1rem] font-normal block" style={{ color: "rgba(255,255,255,0.8)" }}>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-cormorant text-[0.72rem] font-semibold tracking-[0.22em] uppercase pb-3 mb-5 border-b" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}>
              Company
            </h4>
            <ul className="space-y-[10px]">
              {company.map((c) => (
                <li key={c}>
                  <a href="#" className="link-hover font-cormorant text-[1rem] font-normal block" style={{ color: "rgba(255,255,255,0.8)" }}>
                    {c}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 border-l-2" style={{ borderColor: "#fff", background: "rgba(212,175,55,0.08)" }}>
              <p className="font-cormorant text-[0.68rem] tracking-[0.15em] uppercase mb-1" style={{ color: "#fff" }}>Recognition</p>
              <p className="font-cormorant text-sm font-light text-white">
                Ranked #1 Tax Firm in NY — Financial Times, 2024
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-cormorant text-[0.72rem] font-semibold tracking-[0.22em] uppercase pb-3 mb-5 border-b" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}>
              Get in Touch
            </h4>

            {[
              {
                icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" className="social-icon" stroke="#fff">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                ),
                label: "Office",
                text: "1245 Avenue of the Americas\nNew York, NY 10020",
              },
              {
                icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" className="social-icon" stroke="#fff">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                ),
                label: "Phone",
                text: "+1 (212) 555-0174",
              },
              {
                icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" className="social-icon" stroke="#fff">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                ),
                label: "Email",
                text: "counsel@eminentio.com",
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start mb-5">
                <div className="w-9 h-9 border flex items-center justify-center flex-shrink-0 mt-0.5" style={{ borderColor: "rgba(255,255,255,0.3)" }}>
                  {icon}
                </div>
                <div>
                  <p className="font-cormorant text-[0.68rem] tracking-[0.14em] uppercase mb-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>{label}</p>
                  <p className="font-cormorant text-sm font-light leading-relaxed whitespace-pre-line text-white">{text}</p>
                </div>
              </div>
            ))}

            <a
              href="#"
              className="map-link inline-flex items-center gap-2 font-cormorant text-[0.72rem] tracking-[0.15em] uppercase mt-2 transition-all duration-300"
              style={{ color: "#fff" }}
            >
              <span>View on Map</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="divider-diamond h-[1px]" style={{ background: "rgba(255,255,255,0.1)" }} />
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 flex-wrap">
          <p className="font-cormorant text-sm font-light" style={{ color: "rgba(255,255,255,0.5)" }}>
            © 2025 <span className="font-normal text-white">Eminentio Taxation & Advisory LLC</span>. All rights reserved.
          </p>

          <div className="flex gap-6 items-center flex-wrap">
            {["Privacy Policy", "Terms of Use", "Disclaimer"].map((l) => (
              <a
                key={l}
                href="#"
                className="legal-link font-cormorant text-[0.68rem] tracking-[0.15em] uppercase transition-colors duration-250"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                {l}
              </a>
            ))}
          </div>

          <div className="flex gap-3 items-center">
            {[
              {
                label: "LinkedIn",
                svg: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="rgba(255,255,255,0.6)" className="social-icon">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                ),
              },
              {
                label: "Twitter",
                svg: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="rgba(255,255,255,0.6)" className="social-icon">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                ),
              },
              {
                label: "Facebook",
                svg: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="rgba(255,255,255,0.6)" className="social-icon">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                ),
              },
              {
                label: "Instagram",
                svg: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8" className="social-icon">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="rgba(255,255,255,0.6)" stroke="none"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                ),
              },
            ].map(({ label, svg }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="social-btn w-9 h-9 border flex items-center justify-center"
                style={{ borderColor: "rgba(255,255,255,0.2)" }}
              >
                {svg}
              </a>
            ))}
          </div>
        </div>

        <div className="h-[2px] gold-rule" />
      </footer>
    </>
  );
};

export default Footer