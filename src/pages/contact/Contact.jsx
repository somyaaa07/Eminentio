import { useState, useEffect } from "react";

const PRIMARY = "#133f77";
const SNOW = "#FFFAFA";

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Poppins:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; }

  .font-title { font-family: 'Cormorant Garamond', serif; }
  .font-sub   { font-family: 'Poppins', sans-serif; }

  /* ── HERO ── */
  .hero-bg {
    background:
      linear-gradient( transparent, #000 100%),
      url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80') center/cover no-repeat;
    min-height: 88vh;
    display: flex;
    align-items: center;
    padding: clamp(3rem,8vw,6rem) clamp(1rem,5vw,2rem);
  }
  .hero-inner {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    color: white;
    width: 100%;
  }
  .hero-title {
    font-size: clamp(2.2rem, 6vw, 5rem);
    font-weight: 700;
    line-height: 1.15;
    margin-bottom: 1rem;
    text-shadow: 0 2px 24px rgba(0,0,0,0.2);
  }
  .hero-sub {
    font-size: clamp(0.9rem, 1.8vw, 1.05rem);
    opacity: 0.87;
    max-width: 620px;
    margin: 0 auto 2.5rem;
    line-height: 1.85;
    font-weight: 300;
  }
  .hero-btns {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  /* ── CARDS ── */
  .card-hover {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .card-hover:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(19,63,119,0.15);
  }

  /* ── FAQ ── */
  .faq-item summary {
    cursor: pointer;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 0.88rem;
    color: #133f77;
    padding: 1rem 1.2rem;
    border-radius: 10px;
    transition: background 0.2s;
  }
  .faq-item summary:hover { background: #133f7710; }
  .faq-item[open] summary { background: #133f7715; border-radius: 10px 10px 0 0; }
  .faq-item summary::-webkit-details-marker { display: none; }
  .faq-chevron { transition: transform 0.3s; flex-shrink: 0; margin-left: 0.8rem; }
  .faq-item[open] .faq-chevron { transform: rotate(180deg); }

  /* ── FORM ── */
  .input-field {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1.5px solid #133f7730;
    border-radius: 8px;
    background: white;
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    color: #1a1a1a;
    outline: none;
    transition: border-color 0.2s;
  }
  .input-field:focus { border-color: #133f77; }

  /* ── BUTTONS ── */
  .btn-primary {
    background: #133f77;
    color: white;
    border: none;
    padding: 0.85rem 2.5rem;
    border-radius: 8px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s;
  }
  .btn-primary:hover { background: #0e2f5a; transform: scale(1.02); }

  .hero-btn-outline {
    background: transparent;
    border: 2px solid rgba(255,255,255,0.6);
    color: white;
    padding: 0.9rem 2.2rem;
    border-radius: 8px;
    font-family: 'Poppins', sans-serif;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s, border-color 0.2s;
    white-space: nowrap;
  }
  .hero-btn-outline:hover { background: rgba(255,255,255,0.12); border-color: white; }

  /* ── UTILITIES ── */
  .section-label {
    font-family: 'Poppins', sans-serif;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #133f77;
    opacity: 0.7;
  }
  .divider {
    width: 56px; height: 3px;
    background: #133f77;
    border-radius: 2px;
    margin: 0.6rem 0 1.2rem;
  }
  .map-container {
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(19,63,119,0.15);
    height: clamp(260px,40vw,360px);
  }

  /* ── LAYOUT GRIDS ── */
  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(2rem,5vw,4rem);
    align-items: start;
  }
  .reasons-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
  .map-faq-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(2rem,4vw,3rem);
    align-items: start;
  }
  .loc-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.9rem;
    margin-top: 1.2rem;
  }
  .form-name-phone {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  /* ── SECTIONS ── */
  .section-pad {
    padding: clamp(3rem,7vw,5rem) clamp(1rem,5vw,2rem);
  }
  .section-inner { max-width: 1200px; margin: 0 auto; }
  .section-center { text-align: center; margin-bottom: clamp(2rem,4vw,3rem); }

  .section-h2 {
    font-size: clamp(1.7rem, 4vw, 3rem);
    color: #133f77;
    font-weight: 700;
  }
  .section-desc {
    font-size: 0.93rem;
    color: #555;
    max-width: 580px;
    margin: 0.7rem auto 0;
  }

  .contact-info-list {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-bottom: 2rem;
  }
  .contact-info-item { display: flex; gap: 1rem; align-items: flex-start; }

  .service-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
  }
  .service-tag {
    border-radius: 50px;
    padding: 0.3rem 0.9rem;
    font-size: 0.78rem;
    font-weight: 500;
    white-space: nowrap;
  }

  .form-card {
    background: white;
    border-radius: 16px;
    padding: clamp(1.5rem,4vw,2.5rem);
    box-shadow: 0 4px 30px rgba(19,63,119,0.08);
    border: 1px solid #133f7712;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 1024px) {
    .reasons-grid { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 768px) {
    .hero-bg { min-height: 70vh; }
    .contact-grid  { grid-template-columns: 1fr; gap: 2rem; }
    .map-faq-grid  { grid-template-columns: 1fr; gap: 2.5rem; }
    .reasons-grid  { grid-template-columns: 1fr 1fr; }
    .divider { margin: 0.6rem 0 1rem; }
  }
  @media (max-width: 600px) {
    .hero-bg { min-height: auto; }
    .hero-title { font-size: clamp(1.9rem, 8vw, 2.8rem); }
    .reasons-grid { grid-template-columns: 1fr; }
    .form-name-phone { grid-template-columns: 1fr; }
    .loc-grid { grid-template-columns: 1fr; }
    .hero-btns { flex-direction: column; align-items: center; }
    .hero-btns a, .hero-btns button { width: 100%; max-width: 320px; }
    .btn-primary { padding: 0.85rem 1.5rem; }
    .hero-btn-outline { padding: 0.85rem 1.5rem; }
    .faq-item summary { font-size: 0.82rem; padding: 0.85rem 1rem; }
  }
  @media (max-width: 420px) {
    .contact-info-item { gap: 0.7rem; }
    .service-tag { font-size: 0.72rem; padding: 0.25rem 0.7rem; }
    .form-card { padding: 1.25rem; }
    .map-container { height: 220px; }
    .section-h2 { font-size: 1.6rem; }
  }
  @media (hover: none) {
    .card-hover:hover { transform: none; box-shadow: none; }
  }
`;

const reasons = [
  {
    icon: "🌐",
    title: "Qualified Offshore Professionals",
    desc: "Our offshore staff are experienced CAs, CPAs, and accounting professionals trained to meet US, UK, and Australian compliance standards — ready to integrate with your firm from day one.",
  },
  {
    icon: "⚡",
    title: "Fast Onboarding, Zero Hassle",
    desc: "Get your offshore resource up and running within days, not weeks. We handle sourcing, vetting, and onboarding so you can stay focused on your clients and your practice.",
  },
  {
    icon: "💼",
    title: "Flexible Engagement Models",
    desc: "From one resource on an hourly basis to a full dedicated offshore team for peak season support — we scale with your business needs at every stage of growth.",
  },
];

const faqs = [
  {
    q: "What services does Eminentia Consulting offer?",
    a: "We provide offshore staffing solutions for CPA firms and businesses, covering Audit & Assurance, Accounting & Bookkeeping, and Tax Preparation & Compliance — on both hourly and long-term engagement models.",
  },
  {
    q: "Who can benefit from your offshore staffing model?",
    a: "CPA firms, accounting firms, and businesses in the US, UK, Australia, and Canada looking to reduce costs, scale their team quickly, or access skilled finance professionals without the overhead of local hiring.",
  },
  {
    q: "How quickly can you onboard an offshore resource?",
    a: "Most clients have their offshore resource ready to work within 5–7 business days. We manage sourcing, vetting, and onboarding — you just need to share your requirements and we handle the rest.",
  },
  {
    q: "Can I hire just one resource, or do I need a full team?",
    a: "Absolutely — we work with you whether you need a single resource on an hourly basis or want to build a full dedicated offshore team. Our model is completely flexible to match your current stage and budget.",
  },
  {
    q: "Do you support peak season staffing needs?",
    a: "Yes! Many of our CPA firm clients come to us specifically for busy season support — tax season, audit crunch, or year-end close. We scale your offshore team up quickly and scale back when the rush is over.",
  },
  {
    q: "How do I get started with Eminentia Consulting?",
    a: "Simply fill out our contact form or reach out via WhatsApp or email. One of our staffing advisors will connect with you right away to understand your needs and suggest the best-fit engagement model.",
  },
];

const SERVICE_OPTIONS = [
  "Audit & Assurance Staffing",
  "Accounting & Bookkeeping Staffing",
  "Tax Preparation Staffing",
  "Not Sure — Need Guidance",
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <style>{style}</style>

      {/* ── HERO ── */}
      <section className="hero-bg">
        <div className="hero-inner">
          <p
            className="font-sub"
            style={{
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              opacity: 0.75,
              marginBottom: "1.2rem",
            }}
          >
            Offshore Staffing for CPA Firms & Businesses
          </p>
          <h1 className="font-title hero-title">
            Let's Connect —<br />
            <span style={{ opacity: 0.88 }}>We're Just One Message Away.</span>
          </h1>
          <p className="font-sub hero-sub">
            Whether you're a CPA firm looking for a reliable offshore team or a business that needs skilled professionals for Audit, Accounting, or Tax — we'd love to help you grow.
          </p>
          <div className="hero-btns">
            <a href="#contact" style={{ textDecoration: "none" }}>
              <button
                className="btn-primary"
                style={{
                  fontSize: "0.95rem",
                  padding: "0.9rem 2.4rem",
                  background: "white",
                  color: PRIMARY,
                }}
              >
                Send Us a Message →
              </button>
            </a>
            <button className="hero-btn-outline">📞 Talk to Our Team</button>
          </div>
        </div>
      </section>

      {/* ── GET IN TOUCH ── */}
      <section id="contact" className="section-pad" style={{ background: SNOW }}>
        <div className="section-inner">
          <div className="contact-grid">

            {/* Left: contact info */}
            <div>
              <p className="section-label">Reach Us</p>
              <div className="divider" />
              <h2
                className="font-title section-h2"
                style={{ lineHeight: 1.2, marginBottom: "1rem" }}
              >
                Visit Our Office or Drop a Message
              </h2>
              <p
                className="font-sub"
                style={{
                  fontSize: "0.93rem",
                  color: "#444",
                  lineHeight: 1.85,
                  marginBottom: "2rem",
                }}
              >
                Doesn't matter if you want to test the waters with one resource or build a full offshore team — Eminentia Consulting is ready to support you. Reach out and we'll guide you step-by-step.
              </p>

              <div className="contact-info-list">
                {[
                  { icon: "📍", label: "Office Address",    val: "Mumbai, Maharashtra, India" },
                  { icon: "📞", label: "Phone / WhatsApp",  val: "+91 98100 00000" },
                  { icon: "✉️", label: "Email",              val: "info@eminentiaconsulting.com" },
                  { icon: "🕐", label: "Working Hours",      val: "Mon–Fri: 9:00 AM – 6:00 PM IST" },
                ].map(({ icon, label, val }) => (
                  <div key={label} className="contact-info-item">
                    <span style={{ fontSize: "1.3rem", marginTop: "2px" }}>{icon}</span>
                    <div>
                      <p
                        className="font-sub"
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 600,
                          color: PRIMARY,
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {label}
                      </p>
                      <p className="font-sub" style={{ fontSize: "0.9rem", color: "#333" }}>
                        {val}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p
                className="font-sub"
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  color: PRIMARY,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "0.8rem",
                }}
              >
                We Can Help With
              </p>
              <div className="service-tags">
                {[
                  "Audit & Assurance",
                  "Accounting & Bookkeeping",
                  "Tax Preparation",
                  "Seasonal Staffing",
                  "Dedicated Offshore Teams",
                  "Hourly Engagements",
                ].map((b) => (
                  <span
                    key={b}
                    className="font-sub service-tag"
                    style={{
                      background: `${PRIMARY}10`,
                      color: PRIMARY,
                      border: `1px solid ${PRIMARY}25`,
                    }}
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div className="form-card">
              {submitted ? (
                <div style={{ textAlign: "center", padding: "3rem 0" }}>
                  <p style={{ fontSize: "3rem" }}>✅</p>
                  <h3
                    className="font-title"
                    style={{ fontSize: "1.8rem", color: PRIMARY, margin: "1rem 0 0.5rem" }}
                  >
                    Thank You!
                  </h3>
                  <p className="font-sub" style={{ color: "#555", fontSize: "0.9rem" }}>
                    Our staffing advisor will get back to you immediately to discuss your requirements.
                  </p>
                </div>
              ) : (
                <>
                  <h3
                    className="font-title"
                    style={{ fontSize: "1.7rem", color: PRIMARY, marginBottom: "0.4rem" }}
                  >
                    Send Us a Message
                  </h3>
                  <p className="font-sub" style={{ fontSize: "0.82rem", color: "#777", marginBottom: "1.5rem" }}>
                    Have a staffing requirement or a question? Fill this out and we'll get back to you immediately.
                  </p>
                  <form
                    onSubmit={handleSubmit}
                    style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                  >
                    <div className="form-name-phone">
                      <div>
                        <label
                          className="font-sub"
                          style={{ fontSize: "0.78rem", color: "#555", fontWeight: 500, display: "block", marginBottom: "0.4rem" }}
                        >
                          Full Name
                        </label>
                        <input
                          className="input-field"
                          placeholder="John Anderson"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <label
                          className="font-sub"
                          style={{ fontSize: "0.78rem", color: "#555", fontWeight: 500, display: "block", marginBottom: "0.4rem" }}
                        >
                          Company Name
                        </label>
                        <input
                          className="input-field"
                          placeholder="Anderson CPA Firm"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-name-phone">
                      <div>
                        <label
                          className="font-sub"
                          style={{ fontSize: "0.78rem", color: "#555", fontWeight: 500, display: "block", marginBottom: "0.4rem" }}
                        >
                          Email Address
                        </label>
                        <input
                          className="input-field"
                          type="email"
                          placeholder="john@andersoncpa.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <label
                          className="font-sub"
                          style={{ fontSize: "0.78rem", color: "#555", fontWeight: 500, display: "block", marginBottom: "0.4rem" }}
                        >
                          Phone Number
                        </label>
                        <input
                          className="input-field"
                          placeholder="+1 (555) 000-0000"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        className="font-sub"
                        style={{ fontSize: "0.78rem", color: "#555", fontWeight: 500, display: "block", marginBottom: "0.4rem" }}
                      >
                        Service Required
                      </label>
                      <select
                        className="input-field"
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        required
                      >
                        <option value="">Select a service...</option>
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        className="font-sub"
                        style={{ fontSize: "0.78rem", color: "#555", fontWeight: 500, display: "block", marginBottom: "0.4rem" }}
                      >
                        Message
                      </label>
                      <textarea
                        className="input-field"
                        rows={4}
                        placeholder="Tell us about your staffing requirements, team size, or any questions you have..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        style={{ resize: "vertical" }}
                        required
                      />
                    </div>

                    <button type="submit" className="btn-primary" style={{ marginTop: "0.5rem" }}>
                      Submit Message →
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="section-pad" style={{ background: `${PRIMARY}08` }}>
        <div className="section-inner">
          <div className="section-center">
            <p className="section-label">Our Promise</p>
            <div className="divider" style={{ margin: "0.6rem auto 1.2rem" }} />
            <h2 className="font-title section-h2">Why Choose Eminentia Consulting</h2>
            <p className="font-sub section-desc">
              We don't believe in complicated processes or long waiting times. Here's what sets us apart.
            </p>
          </div>
          <div className="reasons-grid">
            {reasons.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="card-hover"
                style={{
                  background: "white",
                  borderRadius: "14px",
                  padding: "2rem",
                  border: "1px solid #133f7715",
                }}
              >
                <div style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>{icon}</div>
                <h3
                  className="font-title"
                  style={{ fontSize: "1.3rem", color: PRIMARY, fontWeight: 600, marginBottom: "0.6rem" }}
                >
                  {title}
                </h3>
                <p className="font-sub" style={{ fontSize: "0.87rem", color: "#555", lineHeight: 1.7 }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAP + FAQ ── */}
      <section className="section-pad" style={{ background: SNOW }}>
        <div className="section-inner">
          <div className="section-center">
            <p className="section-label">Explore More</p>
            <div className="divider" style={{ margin: "0.6rem auto 1.2rem" }} />
            <h2 className="font-title section-h2">Find Us & Get Your Questions Answered</h2>
            <p className="font-sub section-desc">
              Visit our office or browse through the most common questions about our offshore staffing model.
            </p>
          </div>

          <div className="map-faq-grid">
            {/* Map column */}
            <div>
              <p
                className="font-sub"
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: PRIMARY,
                  textTransform: "uppercase",
                  letterSpacing: "0.13em",
                  marginBottom: "1rem",
                }}
              >
                📍 Our Office Location
              </p>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995!3d19.08250!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  title="Eminentia Consulting – Mumbai"
                />
              </div>
              <div className="loc-grid">
                {[
                  { icon: "📍", label: "Base Location",  val: "Mumbai, India" },
                  { icon: "🌏", label: "Clients Served", val: "US, UK, Australia & Canada" },
                  { icon: "🕐", label: "Mon–Fri",         val: "9:00 AM – 6:00 PM IST" },
                  { icon: "💬", label: "Quick Response",  val: "WhatsApp & Email available" },
                ].map(({ icon, label, val }) => (
                  <div
                    key={label}
                    style={{
                      padding: "0.9rem 1rem",
                      background: `${PRIMARY}08`,
                      borderRadius: "10px",
                      display: "flex",
                      gap: "0.6rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={{ fontSize: "1.1rem", marginTop: "1px", flexShrink: 0 }}>{icon}</span>
                    <div>
                      <p
                        className="font-sub"
                        style={{
                          fontSize: "0.66rem",
                          fontWeight: 600,
                          color: PRIMARY,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {label}
                      </p>
                      <p className="font-sub" style={{ fontSize: "0.8rem", color: "#444", marginTop: "0.15rem" }}>
                        {val}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ column */}
            <div>
              <p
                className="font-sub"
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: PRIMARY,
                  textTransform: "uppercase",
                  letterSpacing: "0.13em",
                  marginBottom: "1rem",
                }}
              >
                ❓ Frequently Asked Questions
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {faqs.map(({ q, a }, i) => (
                  <details
                    key={i}
                    className="faq-item"
                    style={{
                      background: "white",
                      borderRadius: "12px",
                      border: "1px solid #133f7715",
                      overflow: "hidden",
                    }}
                    open={openFaq === i}
                    onToggle={(e) => setOpenFaq(e.target.open ? i : null)}
                  >
                    <summary>
                      {q}
                      <span className="faq-chevron" style={{ fontSize: "0.9rem", color: PRIMARY }}>▾</span>
                    </summary>
                    <p
                      className="font-sub"
                      style={{
                        padding: "0.8rem 1.2rem 1.1rem",
                        fontSize: "0.84rem",
                        color: "#555",
                        lineHeight: 1.75,
                        borderTop: `1px solid ${PRIMARY}12`,
                      }}
                    >
                      {a}
                    </p>
                  </details>
                ))}
              </div>

              <div
                style={{
                  marginTop: "1.5rem",
                  background: PRIMARY,
                  borderRadius: "14px",
                  padding: "clamp(1.2rem,3vw,1.6rem) clamp(1.2rem,3vw,1.8rem)",
                  color: "white",
                  textAlign: "center",
                }}
              >
                <h3 className="font-title" style={{ fontSize: "clamp(1.2rem,2.5vw,1.5rem)", marginBottom: "0.4rem" }}>
                  Ready to Build Your Offshore Team?
                </h3>
                <p className="font-sub" style={{ fontSize: "0.82rem", opacity: 0.85, marginBottom: "1.1rem" }}>
                  From a single resource to a dedicated team — let's find the right fit for your firm. Contact us today and let's get started.
                </p>
                <button
                  className="btn-primary"
                  style={{ background: "white", color: PRIMARY, padding: "0.65rem 1.6rem", fontSize: "0.88rem" }}
                >
                  💬 Let's Talk
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}