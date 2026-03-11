import React, { useEffect, useRef, useState } from 'react';
import { FileText, TrendingUp, Shield, ArrowUpRight, Dot } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    icon: FileText,
    category: 'Tax Planning',
    number: '01',
    title: '2024 Tax Deduction Guide',
    date: 'February 5, 2026',
    readTime: '6 min read',
    excerpt: 'Discover all the deductions you might be missing this tax season and learn how to maximize your savings with our comprehensive guide.',
    accent: '#133f77',
  },
  {
    icon: TrendingUp,
    category: 'Business Tax',
    number: '02',
    title: 'Small Business Tax Tips',
    date: 'February 1, 2026',
    readTime: '8 min read',
    excerpt: 'Essential strategies for small business owners to reduce tax liability and improve cash flow throughout the year.',
    accent: '#133f77',
  },
  {
    icon: Shield,
    category: 'Financial Planning',
    number: '03',
    title: 'Retirement Planning Strategies',
    date: 'January 28, 2026',
    readTime: '5 min read',
    excerpt: 'Maximize your retirement savings with these tax-efficient strategies that will secure your financial future.',
    accent: '#133f77',
  },
];

const BlogSection = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.06 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500&display=swap');

        .blog-section {
          background:  #f4f7fb;
          padding: 100px 0 120px;
          position: relative;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }

        .blog-section::before {
          content: 'INSIGHTS';
          position: absolute;
          top: -10px;
          right: -20px;
          font-family: 'Playfair Display', serif;
          font-size: clamp(80px, 12vw, 160px);
          font-weight: 900;
          color: rgba(19,63,119,0.04);
          line-height: 1;
          pointer-events: none;
          user-select: none;
          letter-spacing: -4px;
        }

        .blog-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
        }

        .blog-header {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: flex-end;
          margin-bottom: 64px;
          gap: 32px;
        }

        .blog-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }

        .eyebrow-line {
          width: 32px;
          height: 1.5px;
          background: #133f77;
        }

        .eyebrow-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #133f77;
        }

        .blog-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.4rem, 5vw, 3.8rem);
          font-weight: 700;
          color: #0d1b2e;
          line-height: 1.1;
          letter-spacing: -1.5px;
          margin: 0;
        }

        .blog-title em {
          font-style: italic;
          color: #133f77;
        }

        .blog-subtitle {
          font-size: 14px;
          font-weight: 300;
          color: #7a8394;
          max-width: 320px;
          line-height: 1.7;
          margin: 0;
          text-align: right;
          align-self: flex-end;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: start;
        }

        @media (max-width: 900px) {
          .blog-grid { grid-template-columns: 1fr 1fr; }
          .blog-header { grid-template-columns: 1fr; }
          .blog-subtitle { text-align: left; }
        }
        @media (max-width: 580px) {
          .blog-grid { grid-template-columns: 1fr; }
          .blog-inner { padding: 0 20px; }
        }

        .post-card {
          background: #fff;
          border-radius: 4px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.6s ease,
                      translate 0.6s ease;
        }

        .post-card:nth-child(2) {
          margin-top: 40px;
        }

        .post-card.hidden {
          opacity: 0;
          translate: 0 28px;
        }

        .post-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(13,27,46,0.13);
        }

        .post-card:hover .card-arrow {
          transform: translate(3px, -3px);
        }

        .post-card:hover .card-number {
          opacity: 1;
        }

        .card-color-band {
          height: 4px;
          width: 100%;
          transition: height 0.3s ease;
        }

        .post-card:hover .card-color-band {
          height: 6px;
        }

        .card-body {
          padding: 30px 28px 28px;
        }

        .card-meta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .card-icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .card-number {
          font-family: 'Playfair Display', serif;
          font-size: 56px;
          font-weight: 900;
          color: rgba(0,0,0,0.5);
          line-height: 1;
          opacity: 0.6;
          transition: opacity 0.3s ease;
          user-select: none;
          letter-spacing: -2px;
        }

        .card-category {
          display: inline-block;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 2px;
          margin-bottom: 14px;
        }

        .card-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.3rem;
          font-weight: 700;
          color: #0d1b2e;
          line-height: 1.3;
          margin: 0 0 12px;
          letter-spacing: -0.3px;
        }

        .card-excerpt {
          font-size: 13.5px;
          font-weight: 300;
          color: #6b7480;
          line-height: 1.75;
          margin: 0 0 24px;
        }

        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 18px;
          border-top: 1px solid #f0ede8;
        }

        .card-date-group {
          display: flex;
          align-items: center;
          gap: 2px;
          color: #9ea8b3;
          font-size: 12px;
        }

        .card-read-link {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12.5px;
          font-weight: 500;
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: gap 0.25s ease;
        }

        .card-read-link:hover {
          gap: 10px;
        }

        .card-arrow {
          transition: transform 0.3s ease;
        }
      `}</style>

      <section id="blog" ref={ref} className="blog-section">
        <div className="blog-inner">

          {/* Header */}
          <div className="blog-header">
            <div>
              <div className="blog-eyebrow">
                <div className="eyebrow-line" />
                <span className="eyebrow-text">Insights &amp; Tips</span>
              </div>
              <h2 className="blog-title">
                Latest <em>Tax</em><br />Insights
              </h2>
            </div>
            <p className="blog-subtitle">
              Stay informed with our latest articles on tax strategies and financial planning.
            </p>
          </div>

          {/* Cards */}
          <div className="blog-grid">
            {posts.map((post, idx) => (
              <div
                key={idx}
                className={`post-card ${visible ? '' : 'hidden'}`}
                style={{ transitionDelay: `${idx * 140}ms` }}
              >
                <div className="card-color-band" style={{ background: post.accent }} />

                <div className="card-body">
                  <div className="card-meta-row">
                    <div
                      className="card-icon-wrap"
                      style={{ background: `${post.accent}14` }}
                    >
                      <post.icon size={18} style={{ color: post.accent }} />
                    </div>
                    <span className="card-number">{post.number}</span>
                  </div>

                  <span
                    className="card-category"
                    style={{
                      background: `${post.accent}10`,
                      color: post.accent,
                    }}
                  >
                    {post.category}
                  </span>

                  <h3 className="card-title">{post.title}</h3>
                  <p className="card-excerpt">{post.excerpt}</p>

                  <div className="card-footer">
                    <div className="card-date-group">
                      <span>{post.date}</span>
                      <Dot size={14} />
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      to="/blog"
                      className="card-read-link"
                      style={{ color: post.accent }}
                    >
                      Read Article
                      <ArrowUpRight
                        size={14}
                        className="card-arrow"
                        style={{ color: post.accent }}
                      />
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