import { useEffect, useRef, useState } from "react";
import { Award, Clock, Shield, Users } from "lucide-react";

const reasons = [
  {
    icon: Award,
    num: "01",
    title: "Skilled Professionals ",
    desc: "Access a pool of highly-skilled auditors, accountants, tax specialists, and business support staff",
  },
  {
    icon: Clock,
    num: "02",
    title: "Hourly Billing Model",
    desc: "Pay only for the hours you need. Total flexibility and control — no full-time commitments, no surprise expenses.",
  },
  {
    icon: Shield,
    num: "03",
    title: "Global Standards",
    desc: "Our professionals are trained to adhere to international CPA and compliance reporting standards.",
  },
  {
    icon: Users,
    num: "04",
    title: "Seamless Integration",
    desc: "Our offshore staff becomes part of your extended team — tailored to your processes, tools",
  },
];

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');
  .wcu-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.1rem; margin-bottom: clamp(3rem, 5vw, 5rem); }
  @media (max-width: 1100px) { .wcu-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 560px) { .wcu-grid { grid-template-columns: 1fr; gap: 0.85rem; } }
  .wcu-card { background: #ffffff; border: 1px solid #dde4ef; border-radius: 20px; padding: clamp(1.5rem, 3vw, 2.2rem) clamp(1.2rem, 2.5vw, 1.8rem); display: flex; flex-direction: column; gap: 1rem; position: relative; overflow: hidden; cursor: default; transition: background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease, transform 0.3s ease; }
  .wcu-card:hover { background: #133f77; border-color: #133f77; box-shadow: 0 16px 48px rgba(19, 63, 119, 0.35); transform: translateY(-4px); }
  .wcu-card:hover .wcu-ghost-num { color: rgba(255, 255, 255, 0.07); }
  .wcu-card:hover .wcu-icon-wrap { background: rgba(255, 255, 255, 0.18) !important; }
  .wcu-card:hover .wcu-icon-svg { color: #ffffff !important; stroke: #ffffff !important; }
  .wcu-card:hover .wcu-card-num { color: rgba(255, 255, 255, 0.6) !important; }
  .wcu-card:hover .wcu-divider { background: rgba(255, 255, 255, 0.2) !important; }
  .wcu-card:hover .wcu-card-title { color: #ffffff !important; -webkit-text-stroke: 0 !important; }
  .wcu-card:hover .wcu-card-desc { color: rgba(255, 255, 255, 0.72) !important; }
  .wcu-card:hover .wcu-arrow-line { width: 26px !important; background: rgba(255, 255, 255, 0.85) !important; }
  .wcu-card:hover .wcu-arrow-head { border-top-color: rgba(255, 255, 255, 0.85) !important; border-right-color: rgba(255, 255, 255, 0.85) !important; }
  .wcu-ghost-num { position: absolute; bottom: 8px; right: 10px; font-family: 'Playfair Display', Georgia, serif; font-size: 5rem; font-weight: 800; line-height: 1; color: rgba(19, 63, 119, 0.05); user-select: none; letter-spacing: -0.05em; transition: color 0.35s ease; pointer-events: none; z-index: 0; }
  .wcu-icon-wrap, .wcu-icon-svg, .wcu-card-num, .wcu-divider, .wcu-card-title, .wcu-card-desc, .wcu-arrow-line, .wcu-arrow-head { transition: all 0.35s ease !important; }
`;

function StyleTag() {
  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}

const Card = ({ item, idx, visible }) => {
  const Icon = item.icon;
  return (
    <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)", transition: `opacity 0.65s ease ${idx * 130}ms, transform 0.65s ease ${idx * 130}ms` }}>
      <div className="wcu-card">
        <div className="wcu-ghost-num">{item.num}</div>
        <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div className="wcu-icon-wrap" style={{ width: 42, height: 42, background: "#eef2fb", borderRadius: 11, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <Icon className="wcu-icon-svg" size={18} strokeWidth={1.5} style={{ stroke: "#133f77", color: "#133f77" }} />
          </div>
          <span className="wcu-card-num" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", color: "#133f77", fontWeight: 600, textTransform: "uppercase", display: "block" }}>{item.num}</span>
          <div className="wcu-divider" style={{ height: 1, background: "#dde4ef" }} />
          <h3 className="wcu-card-title" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.1rem, 2vw, 1.25rem)", fontWeight: 700, color: "#0f2545", letterSpacing: "-0.02em", lineHeight: 1.2, margin: 0 }}>{item.title}</h3>
          <p className="wcu-card-desc" style={{ fontSize: "clamp(0.77rem, 1.2vw, 0.82rem)", fontWeight: 300, color: "#64748b", lineHeight: 1.8, margin: 0 }}>{item.desc}</p>
         
        </div>
      </div>
    </div>
  );
};

export default function WhyChooseUs() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <StyleTag />
      <section ref={ref} style={{ background: "#f0f4fa", padding: "clamp(3.5rem, 8vw, 7rem) clamp(1rem, 5vw, 2rem)", fontFamily: "'DM Sans', system-ui, sans-serif", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(19,63,119,0.06) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: "clamp(280px, 50vw, 600px)", height: "clamp(280px, 50vw, 600px)", background: "radial-gradient(circle, rgba(19,63,119,0.05) 0%, transparent 70%)", borderRadius: "50%", right: "-10%", top: "-15%", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1240, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "clamp(3rem, 6vw, 5rem)", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.7s ease" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: "1.4rem" }}>
              <div style={{ width: 28, height: 1, background: "#c9a84c" }} />
              <span style={{ fontSize: "0.63rem", fontWeight: 500, letterSpacing: "0.28em", textTransform: "uppercase", color: "#c9a84c" }}>The Eminentia Advantage</span>
              <div style={{ width: 28, height: 1, background: "#c9a84c" }} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.1rem, 5.5vw, 3.8rem)", fontWeight: 800, color: "#0f2545", lineHeight: 1.07, letterSpacing: "-0.03em", margin: "0 0 1.3rem 0" }}>
              Why Choose{" "}
              <span style={{ WebkitTextStroke: "1.5px #0f2545", color: "transparent" }}>Eminentio</span>
            </h2>
            <p style={{ fontSize: "clamp(0.82rem, 1.5vw, 0.9rem)", fontWeight: 300, color: "#64748b", lineHeight: 1.85, maxWidth: 460, margin: 0 }}>
              We give organizations access to offshore professionals without incurring recruitment, training, or HR management burdens. We form relationships that care about your success.
            </p>
          </div>
          <div className="wcu-grid">
            {reasons.map((item, idx) => (
              <Card key={idx} item={item} idx={idx} visible={visible} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}