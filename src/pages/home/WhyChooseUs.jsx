import { useEffect, useRef, useState } from "react";
import { Award, Clock, Shield, Users } from "lucide-react";

const reasons = [
  {
    icon: Award,
    num: "01",
    title: "Certified Experts",
    desc: "All CPAs and tax professionals are fully licensed and certified with decades of combined experience.",
  },
  {
    icon: Clock,
    num: "02",
    title: "Fast Turnaround",
    desc: "Quick, efficient service without ever compromising on the quality or accuracy you deserve.",
  },
  {
    icon: Shield,
    num: "03",
    title: "Guaranteed Accuracy",
    desc: "100% accuracy guarantee on all tax filings — we stand behind every number we produce.",
  },
  {
    icon: Users,
    num: "04",
    title: "Personalized Approach",
    desc: "Tailored financial solutions built around your unique situation, goals, and timeline.",
  },
];

const stats = [
  { val: "98%", label: "Client Satisfaction" },
  { val: "15+", label: "Years Experience" },
  { val: "5k+", label: "Returns Filed" },
];

const Card = ({ item, idx, visible }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${idx * 130}ms, transform 0.65s ease ${idx * 130}ms`,
        flex: "1 1 220px",
        minWidth: "220px",
        maxWidth: "1100px",
      }}
    >
      <div
        style={{
          background: hovered ? "#133f77" : "#fff",
          border: "1px solid",
          borderColor: hovered ? "#133f77" : "#e2e8f0",
          borderRadius: "16px",
          padding: "2.2rem 2rem",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "1.1rem",
          transition: "all 0.35s ease",
          cursor: "default",
          boxShadow: hovered ? "0 12px 40px rgba(15,30,56,0.18)" : "0 1px 4px rgba(0,0,0,0.04)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ghost number */}
        <div
          style={{
            position: "absolute",
            bottom: "-1.5rem",
            right: "-0.75rem",
            fontFamily: "Georgia, serif",
            fontSize: "8rem",
            fontWeight: "700",
            lineHeight: 1,
            color: hovered ? "rgba(255,255,255,0.04)" : "rgba(15,30,56,0.04)",
            userSelect: "none",
            transition: "color 0.35s ease",
            letterSpacing: "-0.05em",
          }}
        >
          {item.num}
        </div>

        {/* Icon box */}
        <div
          style={{
            width: "44px",
            height: "44px",
            background: hovered ? "rgba(255,255,255,0.1)" : "#f0f4fb",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.35s ease",
          }}
        >
          <Icon size={20} color={hovered ? "#fff" : "#133f77"} strokeWidth={1.5} />
        </div>

        {/* Number label */}
        <span
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: "0.6rem",
            letterSpacing: "0.22em",
            color: hovered ? "rgba(255,255,255,0.4)" : "#133f77",
            fontWeight: "500",
            textTransform: "uppercase",
            transition: "color 0.35s ease",
          }}
        >
          {item.num}
        </span>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: hovered ? "rgba(255,255,255,0.15)" : "#e2e8f0",
            transition: "background 0.35s ease",
          }}
        />

        {/* Title */}
        <h3
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "1.25rem",
            fontWeight: "700",
            color: hovered ? "#fff" : "#133f77",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
            margin: 0,
            transition: "color 0.35s ease",
          }}
        >
          {item.title}
        </h3>

        {/* Desc */}
        <p
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: "0.81rem",
            fontWeight: "300",
            color: hovered ? "rgba(255,255,255,0.65)" : "#64748b",
            lineHeight: 1.8,
            margin: 0,
            transition: "color 0.35s ease",
          }}
        >
          {item.desc}
        </p>

        {/* Arrow */}
        <div style={{ marginTop: "auto", paddingTop: "0.5rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <div
            style={{
              height: "1px",
              width: hovered ? "2rem" : "1rem",
              background: hovered ? "rgba(255,255,255,0.6)" : "#133f77",
              transition: "all 0.35s ease",
            }}
          />
          <div
            style={{
              width: 5, height: 5,
              borderTop: `1px solid ${hovered ? "rgba(255,255,255,0.6)" : "#133f77"}`,
              borderRight: `1px solid ${hovered ? "rgba(255,255,255,0.6)" : "#133f77"}`,
              transform: "rotate(45deg)",
              marginLeft: "-3px",
              transition: "all 0.35s ease",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default function WhyChooseUs() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        background: " #f4f7fb",
        padding: "7rem 2rem",
        fontFamily: "Georgia, serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Faint center dot grid bg */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(19,63,119,0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>

        {/* ── HEADER centered ── */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "5rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease",
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.5rem",
            }}
          >
            <div style={{ width: "2rem", height: "1px", background: "#133f77" }} />
            <span
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "0.62rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#133f77",
                fontWeight: "500",
              }}
            >
              Our Advantage
            </span>
            <div style={{ width: "2rem", height: "1px", background: "#133f77" }} />
          </div>

          {/* Headline */}
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              fontWeight: "700",
              color: "#133f77",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              margin: "0 0 1.5rem 0",
            }}
          >
            Why Choose{" "}
            <span
              style={{
                WebkitTextStroke: "1.5px #133f77",
                color: "transparent",
                display: "inline",
              }}
            >
              Emeninties
            </span>
          </h2>

          {/* Subtext */}
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "0.88rem",
              fontWeight: "300",
              color: "#64748b",
              lineHeight: 1.85,
              maxWidth: "460px",
              margin: "0 auto",
            }}
          >
            We combine deep expertise with a client-first mindset to deliver
            tax and compliance services that go beyond the numbers.
          </p>
        </div>

        {/* ── CARDS ROW ── */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.25rem",
            justifyContent: "center",
            marginBottom: "5rem",
          }}
        >
          {reasons.map((item, idx) => (
            <Card key={idx} item={item} idx={idx} visible={visible} />
          ))}
        </div>

        {/* ── STATS BAR ── */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease 0.6s",
            background: "#133f77",
            borderRadius: "16px",
            padding: "2.5rem 3.5rem",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "2.2rem",
                  fontWeight: "700",
                  color: "#fff",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                }}
              >
                {s.val}
              </div>
              <div
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "0.65rem",
                  color: "rgba(255,255,255,0.45)",
                  marginTop: "0.4rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                {s.label}
              </div>
              {i < stats.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    right: 0,
                    top: "20%",
                    height: "60%",
                    width: "1px",
                    background: "rgba(255,255,255,0.08)",
                  }}
                />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}