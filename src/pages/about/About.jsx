import { useState, useEffect, useRef } from "react";

const PRIMARY = "#133f77";
const PRIMARY_LIGHT = "#1e5aaa";
const PRIMARY_PALE = "#e8f0fb";
const PP = "#e8f0fb";
const PD = "#071525";
const GOLD = "#c9a84c";
const P = "#133f77";
const CREAM = "#f7f9fc";

const mvvData = [
  {
    tab: "Mission", heading: "Simplify Tax Compliance",
    body: "To provide intelligent, transparent amenities taxation solutions that empower property owners, developers, and municipalities — ensuring fair assessment, seamless compliance, and zero surprises every filing season.",
    extras: [{ n: "100%", l: "Compliance Rate" }, { n: "2,000+", l: "Properties Assessed" }],
  },
  {
    tab: "Vision", heading: "Equitable Taxation",
    body: "To be the most trusted amenities tax advisory in South Asia, where every property stakeholder — from individual owners to large developers — understands, navigates, and benefits from a fair tax framework.",
    extras: [{ n: "2030", l: "Digital Tax Goal" }, { n: "50+", l: "Cities Covered" }],
  },
  {
    tab: "Values", heading: "What Drives Us",
    body: "Transparency. Accuracy. Advocacy. We uphold the highest standards in tax assessment, client counsel, and regulatory integrity — because trust is built one honest assessment at a time.",
    extras: [{ n: "2030", l: "Digital Tax Goal" }, { n: "50+", l: "Cities Covered" }],
    pillars: [
      { icon: "⚖️", t: "Transparent Assessment", d: "Every levy is explained, documented, and defensible — no hidden charges, no ambiguity." },
      { icon: "🤝", t: "Client Advocacy", d: "We represent your interests before municipal bodies, tribunals, and revenue authorities." },
      { icon: "📋", t: "Regulatory Integrity", d: "Strict adherence to the Amenities Tax Act and all applicable municipal by-laws." },
    ],
  },
];

const teamMembers = [
  { name: "Suresh Iyer", role: "Chief Tax Counsel", image: "https://randomuser.me/api/portraits/men/52.jpg", bio: "25+ years in municipal tax law and property assessment disputes." },
  { name: "Deepa Varghese", role: "Head of Compliance", image: "https://randomuser.me/api/portraits/women/44.jpg", bio: "ICAI-certified specialist with 300+ successful tax filings." },
  { name: "Arjun Pillai", role: "Director of Client Services", image: "https://randomuser.me/api/portraits/men/33.jpg", bio: "Building long-term partnerships with developers and housing societies." },
  { name: "Meera Nambiar", role: "Appeals & Tribunal Lead", image: "https://randomuser.me/api/portraits/women/68.jpg", bio: "Expert in contesting excess levies before revenue tribunals." },
];

const journey = [
  { year: "2001", title: "Established", icon: "🏛️", desc: "Founded as a boutique tax consultancy to address the growing complexity of amenities levies in urban development." },
  { year: "2008", title: "Landmark Ruling", icon: "⚖️", desc: "Secured a precedent-setting amenities tax revision for a 1,200-unit township — saving ₹4.2Cr in excess levies." },
  { year: "2013", title: "Pan-India Reach", icon: "🗺️", desc: "Expanded to 18 cities, advising municipal corporations, developers, and housing societies nationwide." },
  { year: "2018", title: "Digital Filing", icon: "💻", desc: "Launched India's first end-to-end digital amenities tax filing and tracking portal for property owners." },
  { year: "2024", title: "Policy Advisory", icon: "📜", desc: "Appointed as official tax policy advisor to three state Urban Development Authorities." },
];

const whyChooseUs = [
  { icon: "🏢", label: "Property Expertise", stat: "2,000+ Sites", desc: "Deep experience across residential townships, commercial complexes, SEZs, and mixed-use developments." },
  { icon: "💰", label: "Tax Savings", stat: "Avg 28%", desc: "Our assessment reviews consistently identify overcharges, winning back lakhs for our clients." },
  { icon: "📑", label: "End-to-End Filing", stat: "Zero Penalties", desc: "From self-assessment to submission — we ensure timely, accurate, penalty-free compliance every year." },
  { icon: "🔍", label: "Audit Defence", stat: "98% Success", desc: "Robust documentation and experienced representation through every municipal audit and inquiry." },
  { icon: "🛡️", label: "Legal Protection", stat: "25 Yrs Expertise", desc: "Seasoned tax lawyers protecting your interests before tribunals, courts, and revenue boards." },
  { icon: "🌐", label: "Digital Dashboard", stat: "Real-Time", desc: "Track filings, payments, notices, and deadlines from your personalised client portal, 24/7." },
];

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function FadeIn({ children, delay = 0, dir = "up", style = {}, className = "" }) {
  const [ref, visible] = useInView();
  const tx = dir === "left" ? "-32px" : dir === "right" ? "32px" : "0px";
  const ty = dir === "up" ? "32px" : dir === "down" ? "-32px" : "0px";
  return (
    <div ref={ref} className={className} style={{ ...style, opacity: visible ? 1 : 0, transform: visible ? "translate(0,0)" : `translate(${tx},${ty})`, transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s` }}>
      {children}
    </div>
  );
}

function Reveal({ children, delay = 0, x = 0, y = 40, style = {}, className = "" }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} className={className} style={{
      ...style, opacity: visible ? 1 : 0,
      transform: visible ? "translate(0,0)" : `translate(${x}px,${y}px)`,
      transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
    }}>{children}</div>
  );
}

export default function AboutPage() {
  const [hoveredWhy, setHoveredWhy] = useState(null);
  const [mvvIdx, setMvvIdx] = useState(0);
  const [tabAnim, setTabAnim] = useState(true);

  const switchTab = (i) => {
    setTabAnim(false);
    setTimeout(() => { setMvvIdx(i); setTabAnim(true); }, 10);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Poppins:wght@300;400;500;600&display=swap');
    
        html { scroll-behavior: smooth; }
        body { font-family: 'Poppins', sans-serif; background: #f7f9fc; color: #1a1a1a; }
        .fg { font-family: 'Cormorant Garamond', serif; }
        .fp { font-family: 'Poppins', sans-serif; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-thumb { background: #133f77; border-radius: 3px; }
        @keyframes floatY { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-14px); } }
        @keyframes fadeTab { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
        .float-anim { animation: floatY 5s ease-in-out infinite; }
        .fade-tab { animation: fadeTab 0.4s ease both; }
        .mvv-tab { background: none; border: none; cursor: pointer; font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 500; color: #7a8fa6; padding: 12px 0; border-bottom: 2px solid transparent; transition: all 0.3s; }
        .mvv-tab.active { color: #133f77; border-bottom-color: #133f77; }
      `}</style>

      {/* ─── PICTURE BANNER ─── */}
      <section style={{ position: "relative", height: "520px", overflow: "hidden" }}>
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1600&q=85"
          alt="Amenities Tax Advisory"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }}
        />
        {/* Gradient overlay */}
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right, ${PD}ee 0%, ${PD}99 55%, ${PD}44 100%)` }} />
        {/* Subtle grid texture */}
        {/* <div style={{ position: "absolute", inset: 0, backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,0.02) 60px, rgba(255,255,255,0.02) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,0.02) 60px, rgba(255,255,255,0.02) 61px)` }} /> */}

        {/* Content */}
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", width: "100%" }}>
            {/* Breadcrumb */}
            <div className="fp" style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24, color: "rgba(255,255,255,0.45)", fontSize: 12, letterSpacing: 1 }}>
              <span>Home</span>
              <span style={{ color: GOLD }}>›</span>
              <span style={{ color: "rgba(255,255,255,0.7)" }}>About Us</span>
            </div>

            {/* Tag */}
            <div className="fp" style={{ display: "inline-flex", alignItems: "center", gap: 8, border: `1px solid ${GOLD}55`, borderRadius: 100, padding: "5px 16px", fontSize: 10, color: GOLD, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", marginBottom: 20 }}>
              ⚖️ &nbsp;Trusted Since 2001
            </div>

            {/* Headline */}
            <h2 className="fg" style={{ fontSize: "clamp(44px, 5vw, 76px)", color: "#fff", fontWeight: 300, lineHeight: 1.05, marginBottom: 18, maxWidth: 720 }}>
              About <em style={{ color: GOLD }}>TaxAmenity India</em>
            </h2>

            {/* Subtext */}
            <p className="fp" style={{ color: "rgba(255,255,255,0.58)", fontSize: 15, lineHeight: 1.8, maxWidth: 560, fontWeight: 300, marginBottom: 36 }}>
              We are India's most trusted amenities taxation advisory — helping property owners, developers, and housing societies navigate municipal levies, resolve disputes, and achieve full compliance with confidence.
            </p>

            {/* Divider + tag line */}
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <div style={{ width: 48, height: 2, background: GOLD, borderRadius: 2 }} />
              <span className="fp" style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, letterSpacing: 2, textTransform: "uppercase" }}>Precision · Transparency · Advocacy</span>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        {/* <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: "linear-gradient(to bottom, transparent, #f7f9fc)" }} /> */}
      </section>

      {/* ─── BANNER ─── */}
      <section style={{ position: "relative", minHeight: "90vh", display: "flex", alignItems: "center", overflow: "hidden", background: `linear-gradient(150deg, #eef3fb 0%, #ffffff 55%, #dce8f7 100%)` }}>
        <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: `radial-gradient(circle, ${PRIMARY}0d 0%, transparent 65%)`, top: "40%", right: 0, transform: "translateY(-50%)" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "5rem 2rem", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "4rem", alignItems: "center", width: "100%", position: "relative", zIndex: 1 }}>
          <div>
            <div className="fp" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: PRIMARY_PALE, border: `1px solid ${PRIMARY}25`, borderRadius: 100, padding: "6px 16px", fontSize: 11, color: PRIMARY, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", marginBottom: 24 }}>
              🏛️ &nbsp;Amenities Taxation Specialists
            </div>
            <h1 className="fg" style={{ fontSize: "clamp(48px, 5.5vw, 80px)", lineHeight: 1.06, color: PRIMARY, fontWeight: 300, marginBottom: 24 }}>
              Navigating<br /><em>Amenities Tax</em><br />With Confidence
            </h1>
            <p className="fp" style={{ color: "#4a5e78", fontSize: 16, lineHeight: 1.9, maxWidth: 500, marginBottom: 40, fontWeight: 300 }}>
              India's leading amenities taxation advisory — delivering precise assessments, dispute resolution, and full compliance support for developers, housing societies, and commercial estates since 2001.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button style={{ background: PRIMARY, color: "#fff", border: "none", padding: "14px 36px", borderRadius: 6, fontFamily: "Poppins", fontWeight: 500, fontSize: 14, cursor: "pointer" }}>Explore Our Services</button>
              <button style={{ background: "transparent", color: PRIMARY, border: `1.5px solid ${PRIMARY}`, padding: "14px 36px", borderRadius: 6, fontFamily: "Poppins", fontWeight: 500, fontSize: 14, cursor: "pointer" }}>View Case Studies</button>
            </div>
            <div style={{ marginTop: 48, display: "flex", gap: 40 }}>
              {[["2,000+", "Properties Assessed"], ["28%", "Avg Tax Savings"], ["25yr", "Legal Expertise"]].map(([n, l]) => (
                <div key={l}>
                  <div className="fg" style={{ fontSize: 36, color: PRIMARY, fontWeight: 700 }}>{n}</div>
                  <div className="fp" style={{ color: "#888", fontSize: 12, letterSpacing: 0.5 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: "relative", display: "flex", justifyContent: "center" }} className="float-anim">
            <div style={{ width: 380, height: 460, borderRadius: 24, overflow: "hidden", boxShadow: `0 32px 80px ${PRIMARY}22`, border: `1px solid ${PRIMARY}18` }}>
              <img src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&q=80" alt="Tax Advisory" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ position: "absolute", top: 24, left: -24, background: "#fff", borderRadius: 12, padding: "14px 20px", boxShadow: "0 12px 32px rgba(0,0,0,0.1)", border: `1px solid ${PRIMARY}10` }}>
              <div className="fp" style={{ fontSize: 10, color: "#888", marginBottom: 4 }}>COMPLIANCE STATUS</div>
              <div className="fp" style={{ fontSize: 13, color: PRIMARY, fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} /> All Filings Up to Date
              </div>
            </div>
            <div style={{ position: "absolute", bottom: 32, right: -24, background: "#fff", borderRadius: 12, padding: "14px 20px", boxShadow: "0 12px 32px rgba(0,0,0,0.1)", border: `1px solid ${PRIMARY}10` }}>
              <div className="fp" style={{ fontSize: 10, color: "#888", marginBottom: 4 }}>LEVY SAVINGS</div>
              <div className="fg" style={{ fontSize: 22, color: PRIMARY, fontWeight: 700 }}>₹12Cr+</div>
              <div className="fp" style={{ fontSize: 10, color: "#888" }}>Recovered for Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT US ─── */}
      <section style={{ padding: "100px 2rem", background: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <FadeIn dir="left">
            <div style={{ position: "relative" }}>
              <div style={{ borderRadius: 20, overflow: "hidden", aspectRatio: "4/5" }}>
                <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80" alt="Tax Consultants" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ position: "absolute", top: -16, left: -16, width: "60%", height: "60%", border: `2px dashed ${PRIMARY}30`, borderRadius: 20, zIndex: -1 }} />
              <div style={{ position: "absolute", bottom: 24, left: -20, background: PRIMARY, color: "#fff", borderRadius: 12, padding: "16px 24px" }}>
                <div className="fg" style={{ fontSize: 28, fontWeight: 700 }}>23+</div>
                <div className="fp" style={{ fontSize: 11, opacity: 0.8, marginTop: 2 }}>Years of Excellence</div>
              </div>
            </div>
          </FadeIn>
          <FadeIn dir="right" delay={0.1}>
            <div className="fp" style={{ color: PRIMARY, fontSize: 11, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600, marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 28, height: 1, background: PRIMARY, display: "inline-block" }} /> About TaxAmenity India
            </div>
            <h2 className="fg" style={{ fontSize: 48, color: PRIMARY, fontWeight: 300, lineHeight: 1.1, marginBottom: 24 }}>India's Most Trusted<br /><em>Amenities Tax Advisors</em></h2>
            <p className="fp" style={{ color: "#5a6b79", lineHeight: 1.9, marginBottom: 18, fontWeight: 300, fontSize: 15 }}>
              TaxAmenity India was founded on the belief that property owners and developers deserve clear, fair, and professional guidance through the complexities of amenities taxation. Our mandate is simple: maximise your entitlements, minimise your liabilities, and keep you fully compliant.
            </p>
            <p className="fp" style={{ color: "#5a6b79", lineHeight: 1.9, fontWeight: 300, fontSize: 15 }}>
              From residential townships and commercial plazas to SEZs and government housing estates, we have assessed, filed, and defended amenities tax matters across every property category in India.
            </p>
            <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {[["ICAI", "Certified Advisors"], ["Bar Council", "Empanelled Lawyers"], ["RERA", "Compliant Practice"], ["2,000+", "Assessments Done"]].map(([n, l]) => (
                <div key={l} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 8, background: PRIMARY_PALE, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: 10, color: PRIMARY, fontWeight: 700, fontFamily: "Poppins", textAlign: "center", lineHeight: 1.2 }}>{n}</span>
                  </div>
                  <span className="fp" style={{ fontSize: 13, color: "#4a5e78", fontWeight: 400 }}>{l}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── FOUNDER ─── */}
      <section style={{ padding: "100px 2rem", background: PRIMARY, position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "5rem", alignItems: "center", position: "relative", zIndex: 1 }}>
          <FadeIn dir="left">
            <div style={{ borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%", overflow: "hidden", aspectRatio: "3/4", border: "3px solid rgba(255,255,255,0.15)" }}>
              <img src="https://randomuser.me/api/portraits/men/52.jpg" alt="Founder" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </FadeIn>
          <FadeIn dir="right" delay={0.1}>
            <div className="fp" style={{ color: "rgba(255,255,255,0.55)", fontSize: 11, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600, marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 28, height: 1, background: "rgba(255,255,255,0.4)", display: "inline-block" }} /> Our Founder
            </div>
            <h2 className="fg" style={{ fontSize: 52, color: "#fff", fontWeight: 300, lineHeight: 1.1, marginBottom: 8 }}>Suresh Iyer</h2>
            <div className="fp" style={{ color: "rgba(255,255,255,0.55)", marginBottom: 28, fontSize: 14 }}>Founder & Managing Partner</div>
            <div style={{ borderLeft: "3px solid rgba(255,255,255,0.25)", paddingLeft: 24, marginBottom: 28 }}>
              <p className="fg" style={{ color: "rgba(255,255,255,0.9)", fontSize: 22, lineHeight: 1.7, fontStyle: "italic", fontWeight: 400 }}>
                "Amenities tax is not just a levy — it's a right of the municipality and a responsibility of the owner. My goal was always to make that relationship fair, transparent, and dispute-free."
              </p>
            </div>
            <p className="fp" style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.85, fontSize: 14, fontWeight: 300 }}>
              A legal scholar and tax economist by training, Suresh has 25+ years navigating India's municipal tax landscape. He has represented clients before revenue tribunals in 11 states and has co-authored two authoritative guides on the Amenities Tax Act.
            </p>
          </FadeIn>
        </div>
      </section>

    

      {/* ─── MVV ─── */}
      <section style={{ background: CREAM, padding: "120px 5rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Reveal>
            <div style={{ marginBottom: 64 }}>
              <div className="fp" style={{ color: PRIMARY, fontSize: 11, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600, marginBottom: 12 }}>Our Purpose</div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20 }}>
                <h2 className="fg" style={{ fontSize: "clamp(40px,4.5vw,62px)", color: PRIMARY, fontWeight: 300, lineHeight: 1.05 }}>
                  Mission, Vision<br />&amp; <em>Values</em>
                </h2>
                <div style={{ display: "flex", gap: 36, borderBottom: "1px solid rgba(19,63,119,0.1)" }}>
                  {mvvData.map((m, i) => (
                    <button key={m.tab} className={`mvv-tab${mvvIdx === i ? " active" : ""}`} onClick={() => switchTab(i)}>
                      {m.tab}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <div key={mvvIdx} style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "4rem", opacity: tabAnim ? 1 : 0, transform: tabAnim ? "translateY(0)" : "translateY(20px)", transition: "all 0.4s ease", alignItems: "start" }}>
            <div style={{ background: PRIMARY, borderRadius: 4, padding: "56px 52px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -30, right: -30, width: 180, height: 180, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
              <div style={{ position: "absolute", bottom: -50, left: -50, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.03)" }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <h3 className="fg" style={{ fontSize: 44, color: "#fff", fontWeight: 300, lineHeight: 1.1, marginBottom: 20 }}>{mvvData[mvvIdx].heading}</h3>
                <div style={{ width: 48, height: 1, background: GOLD, marginBottom: 32 }} />
                <p className="fp" style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.9, fontWeight: 300 }}>{mvvData[mvvIdx].body}</p>
              </div>
            </div>
            <div style={{ paddingTop: "1rem" }}>
              {mvvData[mvvIdx].pillars ? (
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {mvvData[mvvIdx].pillars.map(({ icon, t, d }) => (
                    <div key={t} style={{ display: "flex", gap: 18, alignItems: "flex-start", padding: "24px 28px", background: "#fff", border: "1px solid rgba(19,63,119,0.08)", borderRadius: 4 }}>
                      <div style={{ width: 48, height: 48, borderRadius: 4, background: PP, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{icon}</div>
                      <div>
                        <div className="fg" style={{ fontSize: 20, color: PRIMARY, fontWeight: 600, marginBottom: 6 }}>{t}</div>
                        <div className="fp" style={{ fontSize: 13, color: "#777", lineHeight: 1.7, fontWeight: 300 }}>{d}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(19,63,119,0.06)" }}>
                  {mvvData[mvvIdx].extras.map(({ n, l }) => (
                    <div key={l} style={{ background: "#fff", padding: "44px 36px", textAlign: "center" }}>
                      <div className="fg" style={{ fontSize: 52, color: PRIMARY, fontWeight: 700 }}>{n}</div>
                      <div className="fp" style={{ fontSize: 12, color: "#888", marginTop: 6, letterSpacing: "0.08em" }}>{l}</div>
                    </div>
                  ))}
                </div>
              )}
              <div style={{ marginTop: 20, padding: "28px 32px", background: "#fff", border: "1px solid rgba(19,63,119,0.08)", borderRadius: 4, borderLeft: `3px solid ${GOLD}` }}>
                <p className="fg" style={{ fontSize: 17, color: "#4a5e78", lineHeight: 1.7, fontStyle: "italic", fontWeight: 400 }}>
                  {['"Amenities tax compliance is not a burden — it is a foundation for legitimate property ownership."',
                    '"Our 2030 goal: a fully digital, dispute-free amenities tax ecosystem for every Indian city."',
                    '"Integrity in taxation is not optional. It\'s the only practice that survives the long run."'][mvvIdx]}
                </p>
                <div className="fp" style={{ fontSize: 11, color: "#aaa", marginTop: 14, letterSpacing: "0.1em", textTransform: "uppercase" }}>— Suresh Iyer, Founder</div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* ─── CTA ─── */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right, ${PD}f5 40%, ${PD}bb 100%)` }} />
        </div>
        <div style={{ position: "relative", zIndex: 1, padding: "120px 5rem", maxWidth: 1350, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <Reveal x={-30} y={0}>
            <div className="fp" style={{ color: GOLD, fontSize: 11, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600, marginBottom: 16 }}>Get Started</div>
            <h2 className="fg" style={{ fontSize: "clamp(44px,5vw,72px)", color: "#fff", fontWeight: 300, lineHeight: 1.05, marginBottom: 20 }}>
              Ready for<br /><em>Tax Clarity?</em>
            </h2>
            <p className="fp" style={{ color: "rgba(255,255,255,0.5)", fontSize: 15, lineHeight: 1.85, fontWeight: 300, maxWidth: 420 }}>
              Speak with our amenities tax experts today — free property assessment and a custom compliance roadmap, no obligations.
            </p>
          </Reveal>
          <Reveal x={30} y={0} delay={0.15}>
            <div style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(15px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 4, padding: "50px 40px" }}>
              <h3 className="fg" style={{ fontSize: 30, color: "#fff", fontWeight: 300, marginBottom: 28 }}>Book a Free Tax Assessment</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[["Full Name", "text", "Suresh Iyer"], ["Phone", "tel", "+91 98765 43210"], ["Property Type", "text", "Residential / Commercial / Mixed Use"]].map(([label, type, ph]) => (
                  <div key={label}>
                    <label className="fp" style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: "0.14em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>{label}</label>
                    <input type={type} placeholder={ph} style={{ width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 2, padding: "12px 16px", color: "#fff", fontFamily: "Poppins", fontSize: 14, outline: "none" }} />
                  </div>
                ))}
                <button style={{ background: "#fff", color: PRIMARY, marginTop: 8, padding: "15px", width: "100%", fontSize: 14, letterSpacing: "0.08em", border: "none", cursor: "pointer", fontFamily: "Poppins", fontWeight: 600, borderRadius: 2 }}>
                  Request Free Assessment →
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section style={{ padding: "100px 2rem", background: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <div className="fp" style={{ color: PRIMARY, fontSize: 11, letterSpacing: 5, textTransform: "uppercase", fontWeight: 600, marginBottom: 16 }}>Our People</div>
              <h2 className="fg" style={{ fontSize: 52, color: PRIMARY, fontWeight: 300 }}>Meet the <em>Team</em></h2>
              <p className="fp" style={{ color: "#6b7a8a", fontSize: 15, marginTop: 16, maxWidth: 480, margin: "16px auto 0", fontWeight: 300 }}>Tax lawyers, chartered accountants, and compliance specialists — all united by one goal.</p>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28 }}>
            {teamMembers.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <div style={{ borderRadius: 16, overflow: "hidden", background: "#f7f9fc", border: `1px solid ${PRIMARY}10`, boxShadow: "0 4px 20px rgba(0,0,0,0.05)", transition: "transform 0.3s, box-shadow 0.3s", cursor: "default" }}
                  onMouseOver={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = `0 20px 50px ${PRIMARY}18`; }}
                  onMouseOut={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)"; }}>
                  <div style={{ height: 230, overflow: "hidden" }}>
                    <img src={member.image} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }}
                      onMouseOver={e => e.target.style.transform = "scale(1.07)"}
                      onMouseOut={e => e.target.style.transform = "scale(1)"} />
                  </div>
                  <div style={{ padding: "22px 20px" }}>
                    <h3 className="fg" style={{ fontSize: 22, color: PRIMARY, fontWeight: 600, marginBottom: 4 }}>{member.name}</h3>
                    <div className="fp" style={{ color: PRIMARY_LIGHT, fontSize: 12, fontWeight: 500, marginBottom: 10 }}>{member.role}</div>
                    <p className="fp" style={{ color: "#888", fontSize: 12, lineHeight: 1.7, fontWeight: 300 }}>{member.bio}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

  
    </>
  );
}