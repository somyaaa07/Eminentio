import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 0,
    quote: "Eminentia helped us increase our capacity by 40% during tax season — without hiring a single full-time employee. Truly transformative for our firm.",
    name: "David Lerner",
    role: "Managing Partner",
    company: "Lerner & Associates CPA",
    initials: "DL",
  },
  {
    id: 1,
    quote: "The offshore accountants from Eminentia handled our financial reporting flawlessly. They integrated with our team from day one — no onboarding friction.",
    name: "Sarah Mitchell",
    role: "CFO",
    company: "MedCore Healthcare",
    initials: "SM",
  },
  {
    id: 2,
    quote: "We save over 55% on staffing costs compared to our previous in-house setup. The quality is exceptional and the hourly billing model gives us full control.",
    name: "James Whitfield",
    role: "Director of Operations",
    company: "Nexus Business Group",
    initials: "JW",
  },
  {
    id: 3,
    quote: "Finding qualified audit staff used to take months. With Eminentia, we had a dedicated team up and running within two weeks. Remarkable service.",
    name: "Priya Anand",
    role: "Senior Audit Manager",
    company: "Pacific CPA Partners",
    initials: "PA",
  },
  {
    id: 4,
    quote: "Their tax specialists are knowledgeable, responsive, and deeply professional. Our compliance burden has dropped significantly since partnering with Eminentia.",
    name: "Robert Chen",
    role: "Tax Director",
    company: "Chen Retail Holdings",
    initials: "RC",
  },
  {
    id: 5,
    quote: "Eminentia's scalable model is perfect for our seasonal peaks. We ramp up for busy periods and scale back — without the overhead of permanent hires.",
    name: "Laura Simmons",
    role: "Finance Manager",
    company: "Alpine Manufacturing Co.",
    initials: "LS",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => { setTimeout(() => setShow(true), 100); }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setActive(p => (p + 1) % testimonials.length);
      setAnimKey(k => k + 1);
    }, 4500);
    return () => clearInterval(t);
  }, []);

  const select = (i) => { setActive(i); setAnimKey(k => k + 1); };
  const T = testimonials[active];

  return (
    <div style={{ minHeight: "100vh", background: "#f4f7fb", display: "flex", alignItems: "center", justifyContent: "center", padding: "clamp(40px, 7vw, 60px) clamp(16px, 4vw, 24px)", position: "relative", overflow: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Poppins:wght@300;400;500&display=swap');
        .wrap { width: 100%; max-width: 1200px; opacity: 0; transform: translateY(32px); transition: opacity 1s ease, transform 1s ease; }
        .wrap.in { opacity: 1; transform: translateY(0); }
        .bg-circle-1 { position: absolute; width: clamp(300px, 50vw, 600px); height: clamp(300px, 50vw, 600px); border-radius: 50%; border: 1px solid rgba(19,63,119,0.06); top: 50%; left: 50%; transform: translate(-50%,-50%); pointer-events: none; }
        .bg-circle-2 { position: absolute; width: clamp(450px, 75vw, 900px); height: clamp(450px, 75vw, 900px); border-radius: 50%; border: 1px solid rgba(19,63,119,0.04); top: 50%; left: 50%; transform: translate(-50%,-50%); pointer-events: none; }
        .bg-dot { position: absolute; width: clamp(160px, 25vw, 320px); height: clamp(160px, 25vw, 320px); background: radial-gradient(circle, rgba(19,63,119,0.05) 0%, transparent 70%); border-radius: 50%; top: 10%; right: 5%; pointer-events: none; }
        .eyebrow { font-family: 'Poppins', sans-serif; font-size: 0.65rem; font-weight: 500; letter-spacing: 0.22em; text-transform: uppercase; color: rgba(19,63,119,0.4); display: flex; align-items: center; gap: 10px; margin-bottom: 18px; }
        .eyebrow::before { content: ''; display: block; width: 28px; height: 1px; background: rgba(19,63,119,0.3); flex-shrink: 0; }
        .headline { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem, 5vw, 4.2rem); font-weight: 700; color: #133f77; line-height: 1.1; letter-spacing: -0.02em; margin: 0 0 clamp(36px, 5vw, 64px); }
        .headline em { font-style: italic; font-weight: 700; }
        .quote-card { position: relative; padding: clamp(28px, 5vw, 56px) clamp(24px, 5vw, 60px) 0; border: 1px solid rgba(19,63,119,0.1); border-radius: 4px; background: #fff; overflow: hidden; box-shadow: 0 1px 2px rgba(19,63,119,0.04), 0 16px 48px rgba(19,63,119,0.08); }
        .quote-card::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 4px; background: #133f77; }
        .deco-quote { font-family: 'Cormorant Garamond', serif; font-size: clamp(6rem, 12vw, 14rem); font-weight: 300; color: rgba(19,63,119,0.05); position: absolute; top: -40px; right: clamp(12px, 3vw, 30px); line-height: 1; user-select: none; pointer-events: none; }
        .quote-text { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.15rem, 2.8vw, 2rem); font-style: italic; font-weight: 300; color: #133f77; line-height: 1.7; letter-spacing: 0.01em; position: relative; z-index: 1; margin: 0 0 clamp(28px, 4vw, 44px); }
        .anim-in { animation: fadeUp 0.55s cubic-bezier(.22,1,.36,1) both; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        .author-row { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; margin-bottom: clamp(20px, 3vw, 32px); }
        .author-left { display: flex; align-items: center; gap: 16px; }
        .avatar { width: clamp(40px, 6vw, 52px); height: clamp(40px, 6vw, 52px); border-radius: 50%; background: #133f77; display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 0 0 4px rgba(19,63,119,0.1); }
        .avatar span { font-family: 'Cormorant Garamond', serif; font-size: clamp(0.95rem, 2vw, 1.2rem); font-weight: 500; color: #fff; }
        .author-name { font-family: 'Cormorant Garamond', serif; font-size: clamp(1rem, 2vw, 1.15rem); font-weight: 600; color: #133f77; }
        .author-meta { font-family: 'Poppins', sans-serif; font-size: clamp(0.62rem, 1.2vw, 0.7rem); font-weight: 300; color: rgba(19,63,119,0.5); margin-top: 2px; letter-spacing: 0.03em; }
        .stars { display: flex; gap: 3px; }
        .star { color: #133f77; font-size: 0.85rem; }
        .dot-nav { display: flex; align-items: center; justify-content: center; gap: 8px; padding: 20px 0 22px; border-top: 1px solid rgba(19,63,119,0.07); }
        .dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(19,63,119,0.18); border: none; cursor: pointer; padding: 0; transition: background 0.25s, transform 0.25s; flex-shrink: 0; }
        .dot.active { background: #133f77; transform: scale(1.35); }
        @media (max-width: 640px) { .author-row { flex-direction: column; align-items: flex-start; } }
        @media (max-width: 360px) { .stars { display: none; } }
      `}</style>

      <div className="bg-circle-1" />
      <div className="bg-circle-2" />
      <div className="bg-dot" />

      <div className={`wrap ${show ? "in" : ""}`}>
        <div className="eyebrow">Client Testimonials</div>
        <h2 className="headline">
          Trusted by firms who<br /><em>demand the best talent</em>
        </h2>

        <div className="quote-card">
          <div className="deco-quote">"</div>
          <div key={animKey} className="anim-in">
            <p className="quote-text">"{T.quote}"</p>
            <div className="author-row">
              <div className="author-left">
                <div className="avatar"><span>{T.initials}</span></div>
                <div>
                  <div className="author-name">{T.name}</div>
                  <div className="author-meta">{T.role} · {T.company}</div>
                </div>
              </div>
              <div className="stars">
                {[...Array(5)].map((_, i) => <span key={i} className="star">★</span>)}
              </div>
            </div>
          </div>
          <div className="dot-nav">
            {testimonials.map((_, i) => (
              <button key={i} className={`dot ${i === active ? "active" : ""}`} onClick={() => select(i)} aria-label={`Testimonial ${i + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}