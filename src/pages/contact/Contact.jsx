import { useState } from "react";

const PRIMARY = "#133f77";
const SNOW = "#FFFAFA";

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Poppins:wght@300;400;500;600&display=swap');

  .font-title { font-family: 'Cormorant Garamond', serif; }
  .font-sub { font-family: 'Poppins', sans-serif; }

  .hero-bg {
    background: linear-gradient(135deg, #133f77ee 60%, #1a5aadcc 100%),
      url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80') center/cover no-repeat;
    min-height: 92vh;
    display: flex;
    align-items: center;
  }

  .card-hover {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .card-hover:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(19,63,119,0.15);
  }

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
    box-sizing: border-box;
  }
  .input-field:focus { border-color: #133f77; }

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
    height: 360px;
  }

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
  }
  .hero-btn-outline:hover { background: rgba(255,255,255,0.12); border-color: white; }

  @media (max-width: 900px) {
    .hero-bg { min-height: 70vh; }
    .grid-3 { grid-template-columns: 1fr 1fr !important; }
    .grid-2 { grid-template-columns: 1fr !important; }
    .map-faq-grid { grid-template-columns: 1fr !important; }
  }
  @media (max-width: 600px) {
    .grid-3 { grid-template-columns: 1fr !important; }
    .loc-grid { grid-template-columns: 1fr !important; }
  }
`;

const reasons = [
  { icon: "🏛️", title: "Certified Tax Professionals", desc: "Our team of CAs and tax consultants are registered with ICAI and ICSI, ensuring every filing and advisory is handled by a qualified expert." },
  { icon: "⚡", title: "Same-Day Filing", desc: "Submit your documents before 2 PM and get your ITR or GST return filed the very same day — no delays, no penalties." },
  { icon: "💰", title: "Transparent Pricing", desc: "Flat-fee packages with no hidden charges. From ₹499 for simple ITR filing to comprehensive tax planning bundles for businesses." },
];

const faqs = [
  { q: "What tax services do you offer?", a: "We offer ITR filing (all forms), GST registration & returns, TDS compliance, company incorporation, business accounting, tax planning, and representation before tax authorities." },
  { q: "How do I file my income tax return with you?", a: "Simply share your Form 16, bank statements, and investment proofs via our secure portal or WhatsApp. Our team will prepare and file your ITR within 24 hours." },
  { q: "Do you handle GST registration and filing?", a: "Yes! We provide end-to-end GST services including new registration, monthly/quarterly GSTR filing, reconciliation, and GST audit support." },
  { q: "What documents are needed for ITR filing?", a: "Typically: PAN card, Aadhaar, Form 16 (from employer), bank statements, investment proofs (80C, 80D), and details of any other income sources." },
  { q: "Do you provide business accounting and bookkeeping?", a: "Absolutely. We offer monthly bookkeeping, P&L preparation, balance sheet finalization, MIS reports, and payroll management for businesses of all sizes." },
  { q: "How do I get started or book a consultation?", a: "Fill out our callback form or call our helpline. A dedicated tax consultant will reach out within 30 minutes to understand your requirements and suggest the best plan." },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <style>{style}</style>

      {/* HERO BANNER */}
      <section className="hero-bg" >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem", textAlign: "center", color: "white", width: "100%" }}>
          <p className="font-sub" style={{ fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", opacity: 0.75, marginBottom: "1.2rem" }}>
            Trusted Tax & Compliance Advisors
          </p>
          <h1 className="font-title" style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: "1.5rem", textShadow: "0 2px 24px rgba(0,0,0,0.2)" }}>
            Expert Tax Solutions,<br />
            <span style={{ opacity: 0.88 }}>Built for Every Indian.</span>
          </h1>
          <p className="font-sub" style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)", opacity: 0.87, maxWidth: "580px", margin: "0 auto 2.5rem", lineHeight: 1.8, fontWeight: 300 }}>
            From ITR filing to GST compliance — our Chartered Accountants handle it all, fast, transparent, and hassle-free.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#contact" style={{ textDecoration: "none" }}>
              <button className="btn-primary" style={{ fontSize: "0.95rem", padding: "0.9rem 2.4rem", background: "white", color: PRIMARY }}>
                Get Free Consultation →
              </button>
            </a>
            <button className="hero-btn-outline">
              📞 Call Us Now
            </button>
          </div>
       
        </div>
      </section>

      {/* GET IN TOUCH */}
      <section id="contact" style={{ background: SNOW, padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }} className="grid-2">
          <div>
            <p className="section-label">Reach Us</p>
            <div className="divider" />
            <h2 className="font-title" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: PRIMARY, fontWeight: 700, lineHeight: 1.2, marginBottom: "1rem" }}>
              Visit Our Office or Drop a Message
            </h2>
            <p className="font-sub" style={{ fontSize: "0.93rem", color: "#444", lineHeight: 1.8, marginBottom: "2rem" }}>
              Need expert tax advice? Walk into our office or send us a message — our chartered accountants and tax consultants will help you navigate filings, compliance, and savings with ease.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem", marginBottom: "2rem" }}>
              {[
                { icon: "📍", label: "Office Address", val: "403, Finance Tower, Connaught Place, New Delhi – 110001" },
                { icon: "📞", label: "Tax Helpline", val: "+91 98100 77733" },
                { icon: "✉️", label: "Email", val: "consult@cleartaxadvisors.in" },
                { icon: "🕐", label: "Office Hours", val: "Mon–Sat: 9:30 AM – 7:00 PM | Sun: 10 AM – 2 PM" },
              ].map(({ icon, label, val }) => (
                <div key={label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1.3rem", marginTop: "2px" }}>{icon}</span>
                  <div>
                    <p className="font-sub" style={{ fontSize: "0.72rem", fontWeight: 600, color: PRIMARY, textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</p>
                    <p className="font-sub" style={{ fontSize: "0.9rem", color: "#333" }}>{val}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="font-sub" style={{ fontSize: "0.72rem", fontWeight: 600, color: PRIMARY, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.8rem" }}>Our Services</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
              {["ITR Filing", "GST Returns", "TDS Compliance", "Company Registration", "Tax Planning", "Bookkeeping", "Payroll"].map(b => (
                <span key={b} className="font-sub" style={{ background: `${PRIMARY}10`, color: PRIMARY, borderRadius: "50px", padding: "0.3rem 0.9rem", fontSize: "0.78rem", fontWeight: 500, border: `1px solid ${PRIMARY}25` }}>{b}</span>
              ))}
            </div>
          </div>

          <div style={{ background: "white", borderRadius: "16px", padding: "2.5rem", boxShadow: "0 4px 30px rgba(19,63,119,0.08)", border: "1px solid #133f7712" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "3rem 0" }}>
                <p style={{ fontSize: "3rem" }}>✅</p>
                <h3 className="font-title" style={{ fontSize: "1.8rem", color: PRIMARY, margin: "1rem 0 0.5rem" }}>Thank You!</h3>
                <p className="font-sub" style={{ color: "#555", fontSize: "0.9rem" }}>Our tax consultant will contact you within 30 minutes to assist with your query.</p>
              </div>
            ) : (
              <>
                <h3 className="font-title" style={{ fontSize: "1.7rem", color: PRIMARY, marginBottom: "0.4rem" }}>Request a Consultation</h3>
                <p className="font-sub" style={{ fontSize: "0.82rem", color: "#777", marginBottom: "1.5rem" }}>Get personalised tax advice & exclusive filing packages.</p>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div>
                      <label className="font-sub" style={{ fontSize: "0.78rem", color: "#555", fontWeight: 500, display: "block", marginBottom: "0.4rem" }}>Full Name</label>
                      <input className="input-field" placeholder="Ramesh Kumar" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                    </div>
                    <div>
                      <label className="font-sub" style={{ fontSize: "0.78rem", color: "#555", fontWeight: 500, display: "block", marginBottom: "0.4rem" }}>Phone</label>
                      <input className="input-field" placeholder="+91 98765 43210" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} required />
                    </div>
                  </div>
                  <div>
                    <label className="font-sub" style={{ fontSize: "0.78rem", color: "#555", fontWeight: 500, display: "block", marginBottom: "0.4rem" }}>Email</label>
                    <input className="input-field" type="email" placeholder="you@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>
                  <div>
                    <label className="font-sub" style={{ fontSize: "0.78rem", color: "#555", fontWeight: 500, display: "block", marginBottom: "0.4rem" }}>What do you need help with?</label>
                    <textarea className="input-field" rows={4} placeholder="e.g. ITR filing for FY 2024–25, GST registration for new business..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ resize: "vertical" }} required />
                  </div>
                  <button type="submit" className="btn-primary" style={{ marginTop: "0.5rem" }}>Get Free Consultation →</button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ background: `${PRIMARY}08`, padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-label">Our Promise</p>
            <div className="divider" style={{ margin: "0.6rem auto 1.2rem" }} />
            <h2 className="font-title" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: PRIMARY, fontWeight: 700 }}>
              Why Choose ClearTax Advisors
            </h2>
            <p className="font-sub" style={{ fontSize: "0.93rem", color: "#555", maxWidth: "500px", margin: "0.8rem auto 0" }}>
              We don't just file your taxes — we help you plan smarter, stay compliant, and keep more of what you earn.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }} className="grid-3">
            {reasons.map(({ icon, title, desc }) => (
              <div key={title} className="card-hover" style={{ background: "white", borderRadius: "14px", padding: "2rem", border: "1px solid #133f7715" }}>
                <h3 className="font-title" style={{ fontSize: "1.3rem", color: PRIMARY, fontWeight: 600, marginBottom: "0.6rem" }}>{title}</h3>
                <p className="font-sub" style={{ fontSize: "0.87rem", color: "#555", lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP + FAQ */}
      <section style={{ background: SNOW, padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-label">Explore More</p>
            <div className="divider" style={{ margin: "0.6rem auto 1.2rem" }} />
            <h2 className="font-title" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: PRIMARY, fontWeight: 700 }}>
              Find Us & Get Your Questions Answered
            </h2>
            <p className="font-sub" style={{ fontSize: "0.93rem", color: "#555", maxWidth: "520px", margin: "0.7rem auto 0" }}>
              Visit our office in Connaught Place, New Delhi, or browse through our most frequently asked questions.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }} className="map-faq-grid">
            <div>
              <p className="font-sub" style={{ fontSize: "0.75rem", fontWeight: 600, color: PRIMARY, textTransform: "uppercase", letterSpacing: "0.13em", marginBottom: "1rem" }}>
                📍 Our Office Location
              </p>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9!2d77.2195!3d28.6315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47193b3f2!2sConnaught%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%" height="100%"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen loading="lazy"
                  title="ClearTax Advisors – Connaught Place New Delhi"
                />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.9rem", marginTop: "1.2rem" }} className="loc-grid">
                {[
                  { icon: "📍", label: "Address", val: "403, Finance Tower, CP, Delhi" },
                  { icon: "🚗", label: "Service Area", val: "Pan-India & Online" },
                  { icon: "🕐", label: "Mon–Sat", val: "9:30 AM – 7:00 PM" },
                  { icon: "🅿️", label: "Parking", val: "Metro access: Rajiv Chowk" },
                ].map(({ icon, label, val }) => (
                  <div key={label} style={{ padding: "0.9rem 1rem", background: `${PRIMARY}08`, borderRadius: "10px", display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "1.1rem", marginTop: "1px" }}>{icon}</span>
                    <div>
                      <p className="font-sub" style={{ fontSize: "0.66rem", fontWeight: 600, color: PRIMARY, textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</p>
                      <p className="font-sub" style={{ fontSize: "0.8rem", color: "#444", marginTop: "0.15rem" }}>{val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="font-sub" style={{ fontSize: "0.75rem", fontWeight: 600, color: PRIMARY, textTransform: "uppercase", letterSpacing: "0.13em", marginBottom: "1rem" }}>
                ❓ Frequently Asked Questions
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {faqs.map(({ q, a }, i) => (
                  <details key={i} className="faq-item"
                    style={{ background: "white", borderRadius: "12px", border: "1px solid #133f7715", overflow: "hidden" }}
                    open={openFaq === i}
                    onToggle={e => setOpenFaq(e.target.open ? i : null)}
                  >
                    <summary>
                      {q}
                      <span className="faq-chevron" style={{ fontSize: "0.9rem", color: PRIMARY }}>▾</span>
                    </summary>
                    <p className="font-sub" style={{ padding: "0.8rem 1.2rem 1.1rem", fontSize: "0.84rem", color: "#555", lineHeight: 1.75, borderTop: `1px solid ${PRIMARY}12` }}>{a}</p>
                  </details>
                ))}
              </div>

              <div style={{ marginTop: "1.5rem", background: PRIMARY, borderRadius: "14px", padding: "1.6rem 1.8rem", color: "white", textAlign: "center" }}>
                <h3 className="font-title" style={{ fontSize: "1.5rem", marginBottom: "0.4rem" }}>Still have questions?</h3>
                <p className="font-sub" style={{ fontSize: "0.82rem", opacity: 0.85, marginBottom: "1.1rem" }}>Our tax specialists are available 6 days a week to help you stay compliant and save more.</p>
                <button className="btn-primary" style={{ background: "white", color: PRIMARY, padding: "0.65rem 1.6rem", fontSize: "0.88rem" }}>
                  📞 Talk to a CA
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}