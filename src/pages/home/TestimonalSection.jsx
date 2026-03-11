import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 0,
    quote: "This team didn't just deliver a product — they reimagined what was possible. Our revenue tripled in the first quarter alone.",
    name: "Alexandra Bennett",
    role: "CEO",
    company: "Nexus Ventures",
    initials: "AB",
  },
  {
    id: 1,
    quote: "The most thoughtful collaboration I've experienced in 15 years of business. Every detail crafted with intention and brilliance.",
    name: "Marcus Whitfield",
    role: "Head of Product",
    company: "Elara Technologies",
    initials: "MW",
  },
  {
    id: 2,
    quote: "I came in skeptical and left a true believer. The transformation was swift, measurable, and absolutely extraordinary.",
    name: "Sophia Laurent",
    role: "Creative Director",
    company: "Lumière Studio",
    initials: "SL",
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

  const select = (i) => {
    setActive(i);
    setAnimKey(k => k + 1);
  };

  const T = testimonials[active];

  return (
    <div style={{ minHeight: "100vh", background: " #f4f7fb", display: "flex", alignItems: "center", justifyContent: "center", padding: "60px 24px", position: "relative", overflow: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Poppins:wght@300;400;500&display=swap');
     

        .wrap {
          width: 100%; max-width: 1200px;
          opacity: 0; transform: translateY(32px);
          transition: opacity 1s ease, transform 1s ease;
        }
        .wrap.in { opacity: 1; transform: translateY(0); }

        /* Decorative background circles */
        .bg-circle-1 {
          position: absolute; width: 600px; height: 600px; border-radius: 50%;
          border: 1px solid rgba(19,63,119,0.06);
          top: 50%; left: 50%; transform: translate(-50%,-50%);
          pointer-events: none;
        }
        .bg-circle-2 {
          position: absolute; width: 900px; height: 900px; border-radius: 50%;
          border: 1px solid rgba(19,63,119,0.04);
          top: 50%; left: 50%; transform: translate(-50%,-50%);
          pointer-events: none;
        }
        .bg-dot {
          position: absolute; width: 320px; height: 320px;
          background: radial-gradient(circle, rgba(19,63,119,0.05) 0%, transparent 70%);
          border-radius: 50%;
          top: 10%; right: 5%;
          pointer-events: none;
        }

        /* Label */
        .eyebrow {
          font-family: 'Poppins', sans-serif;
          font-size: 0.65rem; font-weight: 500;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: rgba(19,63,119,0.4);
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 18px;
        }
        .eyebrow::before {
          content: ''; display: block; width: 28px; height: 1px;
          background: rgba(19,63,119,0.3);
        }

        /* Headline */
        .headline {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.8rem, 5vw, 4.2rem);
          font-weight: 300; color: #133f77; line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 64px;
        }
        .headline em { font-style: italic; font-weight: 400; }

        /* Quote card */
        .quote-card {
          position: relative;
          padding: 56px 60px 48px;
          border: 1px solid rgba(19,63,119,0.1);
          border-radius: 4px;
          background: #fff;
          overflow: hidden;
          margin-bottom: 0;
          box-shadow: 0 1px 2px rgba(19,63,119,0.04), 0 16px 48px rgba(19,63,119,0.08);
        }

        /* Blue accent bar on left */
        .quote-card::before {
          content: ''; position: absolute;
          left: 0; top: 0; bottom: 0; width: 4px;
          background: #133f77;
        }

        /* Big decorative quote mark */
        .deco-quote {
          font-family: 'Cormorant Garamond', serif;
          font-size: 14rem; font-weight: 300;
          color: rgba(19,63,119,0.05);
          position: absolute; top: -40px; right: 30px;
          line-height: 1; user-select: none;
          pointer-events: none;
        }

        .quote-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.4rem, 2.8vw, 2rem);
          font-style: italic; font-weight: 300;
          color: #133f77; line-height: 1.7;
          letter-spacing: 0.01em;
          position: relative; z-index: 1;
          margin-bottom: 44px;
        }

        /* Fade+lift animation on content */
        .anim-in {
          animation: fadeUp 0.55s cubic-bezier(.22,1,.36,1) both;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Author row */
        .author-row {
          display: flex; align-items: center;
          justify-content: space-between; flex-wrap: wrap; gap: 20px;
        }

        .author-left { display: flex; align-items: center; gap: 16px; }

        .avatar {
          width: 52px; height: 52px; border-radius: 50%;
          background: #133f77;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 0 0 4px rgba(19,63,119,0.1);
        }
        .avatar span {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.2rem; font-weight: 500; color: #fff;
        }

        .author-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.15rem; font-weight: 600; color: #133f77;
        }
        .author-meta {
          font-family: 'Poppins', sans-serif;
          font-size: 0.7rem; font-weight: 300;
          color: rgba(19,63,119,0.5);
          margin-top: 2px; letter-spacing: 0.03em;
        }

        /* Stars */
        .stars { display: flex; gap: 3px; }
        .star { color: #133f77; font-size: 0.85rem; }

        /* Nav tabs */
        .nav-tabs {
          display: flex; align-items: center;
          gap: 0; margin-top: 32px;
          border-top: 1px solid rgba(19,63,119,0.07);
          padding-top: 0;
        }

        .nav-tab {
          flex: 1; padding: 20px 24px;
          cursor: pointer; background: none; border: none;
          border-top: 2px solid transparent;
          text-align: left;
          transition: all 0.25s ease;
          border-right: 1px solid rgba(19,63,119,0.07);
        }
        .nav-tab:last-child { border-right: none; }
        .nav-tab:hover .tab-name { color: #133f77; }

        .nav-tab.active {
          border-top-color: #133f77;
          background: rgba(19,63,119,0.02);
        }

        .tab-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem; font-weight: 500;
          color: rgba(19,63,119,0.4);
          transition: color 0.25s;
          display: block; margin-bottom: 2px;
        }
        .nav-tab.active .tab-name { color: #133f77; }

        .tab-role {
          font-family: 'Poppins', sans-serif;
          font-size: 0.62rem; font-weight: 300;
          color: rgba(19,63,119,0.3);
          letter-spacing: 0.04em;
          display: block;
        }

        /* Progress line under active tab */
        .tab-progress {
          height: 2px; background: rgba(19,63,119,0.1);
          margin-top: 8px; border-radius: 2px; overflow: hidden;
        }
        .tab-progress-fill {
          height: 100%; background: #133f77; border-radius: 2px;
          animation: tabFill 4.5s linear;
          width: 0;
        }
        @keyframes tabFill { from { width: 0 } to { width: 100% } }

        /* Stats */
        .stats-row {
          display: flex; gap: 0;
          margin-top: 56px;
          border: 1px solid rgba(19,63,119,0.08);
          border-radius: 4px; overflow: hidden;
        }
        .stat {
          flex: 1; padding: 28px 20px; text-align: center;
          border-right: 1px solid rgba(19,63,119,0.08);
        }
        .stat:last-child { border-right: none; }
        .stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.4rem; font-weight: 400; color: #133f77;
          line-height: 1;
        }
        .stat-label {
          font-family: 'Poppins', sans-serif;
          font-size: 0.65rem; font-weight: 400;
          color: rgba(19,63,119,0.4); letter-spacing: 0.08em;
          text-transform: uppercase; margin-top: 6px;
        }
      `}</style>

      {/* BG decoration */}
      <div className="bg-circle-1" />
      <div className="bg-circle-2" />
      <div className="bg-dot" />

      <div className={`wrap ${show ? "in" : ""}`}>

        {/* Header */}
        <div className="eyebrow">Client Testimonials</div>
        <h2 className="headline">
          Trusted by those who<br /><em>demand the best</em>
        </h2>

        {/* Quote Card */}
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

          {/* Tab nav inside card bottom */}
          <div className="nav-tabs">
            {testimonials.map((item, i) => (
              <button
                key={i}
                className={`nav-tab ${i === active ? "active" : ""}`}
                onClick={() => select(i)}
              >
                <span className="tab-name">{item.name.split(" ")[0]}</span>
                <span className="tab-role">{item.role}</span>
                {i === active && (
                  <div className="tab-progress">
                    <div key={animKey} className="tab-progress-fill" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

     

      </div>
    </div>
  );
}