import React, { useEffect, useRef, useState } from 'react';
import { FileText, TrendingUp, Shield, ArrowUpRight, Dot } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    icon: FileText,
    category: 'Offshore Staffing',
    number: '01',
    title: 'How CPA Firms Save 60% with Offshore Staff',
    date: 'February 5, 2026',
    readTime: '6 min read',
    excerpt: 'Discover how mid-sized CPA firms are leveraging offshore staffing to dramatically cut costs while maintaining quality and compliance standards.',
    accent: '#133f77',
  },
  {
    icon: TrendingUp,
    category: 'Tax Season Strategy',
    number: '02',
    title: 'Scaling Your Firm During Tax Season',
    date: 'February 1, 2026',
    readTime: '8 min read',
    excerpt: 'Essential strategies for CPA firms to increase capacity during peak periods — without the burden of full-time hiring or HR management.',
    accent: '#133f77',
  },
  {
    icon: Shield,
    category: 'Audit & Assurance',
    number: '03',
    title: 'Offshore Audit Staff: What to Expect',
    date: 'January 28, 2026',
    readTime: '5 min read',
    excerpt: 'A complete guide to onboarding offshore audit associates — from seamless integration to maintaining global compliance and reporting standards.',
    accent: '#133f77',
  },
];

const BlogSection = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.06 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        .blog-section { background: #f4f7fb; padding: clamp(60px, 8vw, 100px) 0 clamp(64px, 9vw, 120px); position: relative; overflow: hidden; font-family: 'DM Sans', sans-serif; }
        .blog-section::before { content: 'INSIGHTS'; position: absolute; top: -10px; right: -20px; font-family: 'Playfair Display', serif; font-size: clamp(60px, 12vw, 160px); font-weight: 900; color: rgba(19,63,119,0.04); line-height: 1; pointer-events: none; user-select: none; letter-spacing: -4px; }
        .blog-inner { max-width: 1280px; margin: 0 auto; padding: 0 clamp(16px, 4vw, 32px); }
        .blog-header { display: grid; grid-template-columns: 1fr auto; align-items: flex-end; margin-bottom: clamp(40px, 6vw, 64px); gap: 32px; }
        .blog-eyebrow { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
        .eyebrow-line { width: 32px; height: 1.5px; background: #133f77; flex-shrink: 0; }
        .eyebrow-text { font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 500; letter-spacing: 0.2em; text-transform: uppercase; color: #133f77; }
        .blog-title { font-family: 'Playfair Display', serif; font-size: clamp(2rem, 5vw, 3.8rem); font-weight: 700; color: #0d1b2e; line-height: 1.1; letter-spacing: -1.5px; margin: 0; }
        .blog-title em { font-style: italic; color: #133f77; }
        .blog-subtitle { font-size: clamp(13px, 1.5vw, 14px); font-weight: 300; color: #7a8394; max-width: 320px; line-height: 1.7; margin: 0; text-align: right; align-self: flex-end; }
        .blog-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; align-items: start; }
        .post-card { background: #fff; border-radius: 4px; overflow: hidden; position: relative; cursor: pointer; transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease, translate 0.6s ease; }
        .post-card.hidden { opacity: 0; translate: 0 28px; }
        .post-card:hover { transform: translateY(-6px); box-shadow: 0 24px 60px rgba(13,27,46,0.13); }
        .post-card:hover .card-arrow { transform: translate(3px, -3px); }
        .post-card:hover .card-number { opacity: 1; }
        .post-card:hover .card-color-band { height: 6px; }
        .post-card-offset { margin-top: 40px; }
        .card-color-band { height: 4px; width: 100%; transition: height 0.3s ease; }
        .card-body { padding: clamp(20px, 3vw, 30px) clamp(18px, 2.5vw, 28px) clamp(18px, 2.5vw, 28px); }
        .card-meta-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
        .card-icon-wrap { width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .card-number { font-family: 'Playfair Display', serif; font-size: clamp(40px, 5vw, 56px); font-weight: 900; color: rgba(0,0,0,0.5); line-height: 1; opacity: 0.6; transition: opacity 0.3s ease; user-select: none; letter-spacing: -2px; }
        .card-category { display: inline-block; font-size: 10px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; padding: 5px 12px; border-radius: 2px; margin-bottom: 14px; }
        .card-title { font-family: 'Playfair Display', serif; font-size: clamp(1.1rem, 2vw, 1.3rem); font-weight: 700; color: #0d1b2e; line-height: 1.3; margin: 0 0 12px; letter-spacing: -0.3px; }
        .card-excerpt { font-size: clamp(13px, 1.4vw, 13.5px); font-weight: 300; color: #6b7480; line-height: 1.75; margin: 0 0 24px; }
        .card-footer { display: flex; align-items: center; justify-content: space-between; padding-top: 18px; border-top: 1px solid #f0ede8; flex-wrap: wrap; gap: 8px; }
        .card-date-group { display: flex; align-items: center; gap: 2px; color: #9ea8b3; font-size: 12px; flex-wrap: wrap; }
        .card-read-link { display: flex; align-items: center; gap: 6px; font-size: 12.5px; font-weight: 500; text-decoration: none; letter-spacing: 0.02em; transition: gap 0.25s ease; white-space: nowrap; }
        .card-read-link:hover { gap: 10px; }
        .card-arrow { transition: transform 0.3s ease; }
        @media (max-width: 900px) { .blog-grid { grid-template-columns: 1fr 1fr; } .post-card-offset { margin-top: 0; } .blog-header { grid-template-columns: 1fr; gap: 16px; } .blog-subtitle { text-align: left; max-width: 100%; } }
        @media (max-width: 580px) { .blog-grid { grid-template-columns: 1fr; gap: 16px; } .post-card-offset { margin-top: 0; } .blog-section::before { right: -10px; top: -4px; } }
        @media (max-width: 360px) { .card-date-group { font-size: 11px; } .card-footer { flex-direction: column; align-items: flex-start; } }
      `}</style>

      <section id="blog" ref={ref} className="blog-section">
        <div className="blog-inner">
          <div className="blog-header">
            <div>
              <div className="blog-eyebrow">
                <div className="eyebrow-line" />
                <span className="eyebrow-text">Insights &amp; Resources</span>
              </div>
              <h2 className="blog-title">
                Latest <em>Staffing</em><br />Insights
              </h2>
            </div>
            <p className="blog-subtitle">
              Stay informed with our latest articles on offshore staffing, CPA firm growth, and compliance strategies.
            </p>
          </div>

          <div className="blog-grid">
            {posts.map((post, idx) => (
              <div key={idx} className={`post-card ${idx === 1 ? 'post-card-offset' : ''} ${visible ? '' : 'hidden'}`} style={{ transitionDelay: `${idx * 140}ms` }}>
                <div className="card-color-band" style={{ background: post.accent }} />
                <div className="card-body">
                  <div className="card-meta-row">
                    <div className="card-icon-wrap" style={{ background: `${post.accent}14` }}>
                      <post.icon size={18} style={{ color: post.accent }} />
                    </div>
                    <span className="card-number">{post.number}</span>
                  </div>
                  <span className="card-category" style={{ background: `${post.accent}10`, color: post.accent }}>{post.category}</span>
                  <h3 className="card-title">{post.title}</h3>
                  <p className="card-excerpt">{post.excerpt}</p>
                  <div className="card-footer">
                    <div className="card-date-group">
                      <span>{post.date}</span>
                      <Dot size={14} />
                      <span>{post.readTime}</span>
                    </div>
                    <Link to="/blog" className="card-read-link" style={{ color: post.accent }}>
                      Read Article
                      <ArrowUpRight size={14} className="card-arrow" style={{ color: post.accent }} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSection;