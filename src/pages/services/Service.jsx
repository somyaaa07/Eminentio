import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { servicesData } from "./data";
import {
  CheckCircle, Star, HelpCircle, Home, FileText, BarChart3,
  BriefcaseBusiness, Menu, X, ChevronDown, ArrowUp, ArrowRight,
  Phone, ChevronRight, Trophy, ThumbsUp, Clock, Headphones,
} from "lucide-react";

/* ─── Fonts ─── */
const FontInjector = () => {
  useEffect(() => {
    const l = document.createElement("link");
    l.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400;1,600&family=Poppins:wght@300;400;500;600&display=swap";
    l.rel = "stylesheet";
    document.head.appendChild(l);
    return () => document.head.removeChild(l);
  }, []);
  return null;
};

const css = `
*,*::before,*::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --navy:       #133f77;
  --navy-d:     #0d2e57;
  --navy-l:     #1a5299;
  --navy-pale:  #eef3fb;
  --cream:      #f8f5ef;
  --white:      #ffffff;
  --text:       #16213e;
  --sub:        #4b5563;
  --muted:      #9ca3af;
  --border:     #e2e8f4;
  --shadow-sm:  0 2px 8px rgba(13,46,87,.07);
  --shadow-md:  0 8px 32px rgba(13,46,87,.12);
  --shadow-lg:  0 20px 60px rgba(13,46,87,.16);
  --r-sm:  8px;
  --r-md:  14px;
  --r-lg:  22px;
}

.sp {
  font-family: 'Poppins', sans-serif;
  color: var(--text);
  background: var(--white);
  -webkit-font-smoothing: antialiased;
}

/* ══════════════════════════════
   HERO
══════════════════════════════ */
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute; inset: 0;
  background-size: cover;
  background-position: center top;
  transform: scale(1.07);
  transition: transform 10s ease;
}
.hero:hover .hero-bg { transform: scale(1); }

.hero-overlay {
  position: absolute; inset: 0; z-index: 1;
  background: linear-gradient(
    to bottom,
    rgba(8,22,46,0.85) 0%,
    rgba(8,22,46,0.60) 50%,
    rgba(8,22,46,0.30) 100%
  );
}
.hero-overlay::after {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(ellipse at center, transparent 55%, rgba(5,15,35,.45) 100%);
}

.hero-accent-bar {
  position: absolute; top: 0; left: 0; right: 0;
  height: 3px; z-index: 3;
  background: linear-gradient(90deg, var(--navy-l), var(--navy), #1e6cc8);
}

.hero-body {
  position: relative; z-index: 2; width: 100%;
  max-width: 1300px; margin: 0 auto;
  padding: clamp(60px, 10vh, 110px) clamp(16px, 5vw, 72px) clamp(48px, 8vh, 96px);
}

.hero-tag {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,.1);
  border: 1px solid rgba(255,255,255,.18);
  color: rgba(255,255,255,.85);
  padding: 5px 14px; border-radius: 100px;
  font-size: .65rem; font-weight: 600;
  letter-spacing: .15em; text-transform: uppercase;
  margin-bottom: 18px;
}
.hero-tag-dot {
  width: 5px; height: 5px; border-radius: 50%;
  background: rgba(255,255,255,.6); flex-shrink: 0;
}

.hero-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.4rem, 7vw, 5.5rem);
  font-weight: 700; color: #fff;
  line-height: 1.07; margin-bottom: 18px;
  max-width: 820px;
  text-shadow: 0 2px 20px rgba(0,0,0,.3);
}

.hero-sub {
  font-size: clamp(.88rem, 1.5vw, 1.08rem);
  color: rgba(255,255,255,.68); line-height: 1.8;
  max-width: 540px; font-weight: 300; margin-bottom: 32px;
}

.hero-actions { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 48px; }

.btn-hero-primary {
  display: inline-flex; align-items: center; gap: 8px;
  background: #fff; color: var(--navy-d);
  padding: 12px 26px; border-radius: var(--r-sm); border: 2px solid #fff;
  font-family: 'Poppins', sans-serif; font-size: .82rem; font-weight: 600;
  cursor: pointer; text-decoration: none; transition: all .22s;
  box-shadow: 0 4px 20px rgba(0,0,0,.2);
  white-space: nowrap;
}
.btn-hero-primary:hover {
  background: transparent; color: #fff;
  box-shadow: 0 6px 28px rgba(0,0,0,.3); transform: translateY(-2px);
}

.btn-hero-ghost {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,.08); color: rgba(255,255,255,.88);
  padding: 11px 22px; border-radius: var(--r-sm);
  border: 1.5px solid rgba(255,255,255,.3);
  font-family: 'Poppins', sans-serif; font-size: .82rem; font-weight: 400;
  cursor: pointer; text-decoration: none; transition: all .22s;
  backdrop-filter: blur(6px); white-space: nowrap;
}
.btn-hero-ghost:hover { border-color: rgba(255,255,255,.65); background: rgba(255,255,255,.14); color: #fff; }

/* Stats strip */
.hero-stats {
  display: flex; flex-wrap: wrap; gap: 0;
  border: 1px solid rgba(255,255,255,.12);
  border-radius: var(--r-md); overflow: hidden;
  background: rgba(255,255,255,.07);
  backdrop-filter: blur(12px);
  width: fit-content; max-width: 100%;
}
.h-stat {
  padding: 16px 28px; text-align: center;
  border-right: 1px solid rgba(255,255,255,.12);
  flex: 1; min-width: 100px;
}
.h-stat:last-child { border-right: none; }
.h-stat-val {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700; color: #fff; line-height: 1;
}
.h-stat-lbl {
  font-size: .6rem; color: rgba(255,255,255,.5);
  margin-top: 4px; letter-spacing: .06em; text-transform: uppercase;
}

.hero-wave { position: absolute; bottom: -1px; left: 0; width: 100%; z-index: 3; }

/* ══════════════════════════════
   MOBILE STICKY NAV BAR
══════════════════════════════ */
.mob-bar {
  display: none;
  position: sticky; top: 0; z-index: 50;
  background: var(--navy-d);
  padding: 0 16px;
  align-items: center; justify-content: space-between;
  box-shadow: 0 2px 16px rgba(5,18,50,.25);
}
@media (max-width: 1023px) { .mob-bar { display: flex; } }

.mob-bar-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1rem; font-weight: 600; color: #fff;
  padding: 14px 0; white-space: nowrap; overflow: hidden;
  text-overflow: ellipsis; max-width: 60vw;
}
.mob-bar-menu {
  display: flex; align-items: center; gap: 7px;
  background: rgba(255,255,255,.1);
  border: 1px solid rgba(255,255,255,.2);
  color: #fff; padding: 7px 13px; border-radius: 6px;
  font-family: 'Poppins', sans-serif; font-size: .74rem; font-weight: 500;
  cursor: pointer; transition: all .2s; flex-shrink: 0;
}
.mob-bar-menu:hover { background: rgba(255,255,255,.18); }

/* ══════════════════════════════
   DRAWER
══════════════════════════════ */
.drawer { position: fixed; inset: 0; z-index: 200; }
.drawer-dim {
  position: absolute; inset: 0;
  background: rgba(5,14,35,.7); backdrop-filter: blur(4px);
}
.drawer-panel {
  position: absolute; right: 0; top: 0; bottom: 0;
  width: min(300px, 85vw);
  background: var(--white); overflow-y: auto; padding-bottom: 48px;
  box-shadow: -12px 0 48px rgba(0,0,0,.2);
  animation: slideIn .26s cubic-bezier(.22,.1,.36,1);
}
@keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }

.drawer-top {
  display: flex; justify-content: space-between; align-items: center;
  padding: 20px 20px 16px;
  border-bottom: 1px solid var(--border); margin-bottom: 10px;
}
.drawer-logo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.2rem; font-weight: 700; color: var(--navy-d);
}
.drawer-close {
  background: none; border: none; cursor: pointer;
  padding: 6px; color: var(--muted); border-radius: 6px; transition: background .2s;
}
.drawer-close:hover { background: var(--border); }
.drawer-nav { padding: 0 12px; display: flex; flex-direction: column; gap: 3px; }
.drawer-cta {
  margin: 20px 14px 0;
  background: linear-gradient(135deg, var(--navy-d), var(--navy-l));
  border-radius: var(--r-md); padding: 22px 18px;
}
.drawer-cta-h { font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; color: #fff; margin-bottom: 6px; }
.drawer-cta-p { font-size: .72rem; color: rgba(255,255,255,.55); margin-bottom: 14px; line-height: 1.6; }

/* ══════════════════════════════
   NAV ITEMS
══════════════════════════════ */
.nav-item {
  display: flex; align-items: center; gap: 10px;
  padding: 9px 12px; font-size: .8rem; font-weight: 400;
  color: var(--sub); cursor: pointer; border: none; background: none;
  text-align: left; font-family: 'Poppins', sans-serif; width: 100%;
  border-left: 3px solid transparent; border-radius: 0 8px 8px 0;
  transition: all .18s;
}
.nav-item:hover { color: var(--navy); background: var(--navy-pale); }
.nav-item.on {
  color: var(--navy); background: var(--navy-pale);
  border-left-color: var(--navy); font-weight: 600;
}

/* ══════════════════════════════
   LAYOUT
══════════════════════════════ */
.wrap { max-width: 1300px; margin: 0 auto; padding: 0 clamp(16px, 5vw, 72px); }

.page-grid {
  display: grid;
  grid-template-columns: 248px 1fr;
  gap: 0 60px;
  padding-top: 72px; padding-bottom: 120px;
  align-items: start;
}
@media (max-width: 1023px) {
  .page-grid { grid-template-columns: 1fr; gap: 0; padding-top: 48px; padding-bottom: 80px; }
  .sidebar { display: none !important; }
}

/* ══════════════════════════════
   SIDEBAR
══════════════════════════════ */
.sidebar { position: sticky; top: 28px; }

.sidebar-card {
  background: var(--white); border: 1px solid var(--border);
  border-radius: var(--r-lg); overflow: hidden;
  box-shadow: var(--shadow-sm);
}
.sidebar-head {
  background: linear-gradient(135deg, var(--navy-d) 0%, var(--navy-l) 100%);
  padding: 20px 18px 16px;
}
.sidebar-head-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.18rem; color: #fff; font-weight: 600;
}
.sidebar-head-sub { font-size: .7rem; color: rgba(255,255,255,.55); margin-top: 3px; }

.sidebar-nav { padding: 10px 10px 14px; display: flex; flex-direction: column; gap: 2px; }
.sidebar-lbl {
  font-size: .58rem; font-weight: 700; letter-spacing: .16em;
  text-transform: uppercase; color: var(--muted); padding: 8px 12px 5px; display: block;
}
.sidebar-footer { border-top: 1px solid var(--border); padding: 16px 16px 18px; }
.sidebar-footer-label {
  font-size: .66rem; color: var(--muted); margin-bottom: 10px; text-align: center;
}

/* ══════════════════════════════
   BUTTONS
══════════════════════════════ */
.btn-solid {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  background: var(--navy-d); color: #fff;
  padding: 11px 22px; border-radius: var(--r-sm); border: 2px solid var(--navy-d);
  font-family: 'Poppins', sans-serif; font-size: .82rem; font-weight: 600;
  cursor: pointer; text-decoration: none; transition: all .22s; white-space: nowrap;
}
.btn-solid:hover { background: var(--navy); border-color: var(--navy); transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn-solid.full { width: 100%; }

/* ══════════════════════════════
   SECTION PATTERN
══════════════════════════════ */
.sec { margin-bottom: 80px; }
@media (max-width: 640px) { .sec { margin-bottom: 60px; } }

.sec-kicker {
  display: flex; align-items: center; gap: 8px;
  font-size: .62rem; font-weight: 700; letter-spacing: .2em;
  text-transform: uppercase; color: var(--navy); margin-bottom: 8px;
}
.sec-kicker-dot {
  width: 5px; height: 5px; border-radius: 50%;
  background: var(--navy); flex-shrink: 0;
}
.sec-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.8rem, 3.5vw, 2.9rem);
  font-weight: 700; color: var(--navy-d); line-height: 1.12; margin-bottom: 12px;
}
.sec-rule {
  width: 44px; height: 3px; border-radius: 2px;
  background: linear-gradient(90deg, var(--navy), var(--navy-l));
  margin-bottom: 24px;
}

/* ══════════════════════════════
   ABOUT
══════════════════════════════ */
.about-body {
  font-size: clamp(.9rem, 1.5vw, 1rem);
  line-height: 1.9; color: var(--sub);
  font-weight: 300; max-width: 700px; margin-bottom: 32px;
}

.hl-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 10px;
}
@media (max-width: 480px) { .hl-grid { grid-template-columns: 1fr; } }

.hl-card {
  display: flex; align-items: flex-start; gap: 12px;
  padding: 16px; background: var(--white);
  border: 1px solid var(--border); border-radius: var(--r-md);
  transition: all .22s; cursor: default;
}
.hl-card:hover { border-color: var(--navy); transform: translateY(-2px); box-shadow: var(--shadow-md); }
.hl-card-icon {
  width: 32px; height: 32px; border-radius: 50%;
  background: var(--navy-pale); display: flex; align-items: center;
  justify-content: center; flex-shrink: 0; margin-top: 1px;
}
.hl-card-text { font-size: .84rem; font-weight: 500; color: var(--text); line-height: 1.55; }

/* ══════════════════════════════
   FEATURES
══════════════════════════════ */
.feat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}
@media (max-width: 480px) { .feat-grid { grid-template-columns: 1fr; } }

.feat-card {
  background: var(--white); border: 1px solid var(--border);
  border-radius: var(--r-md); padding: 24px 20px;
  transition: all .26s; position: relative; overflow: hidden;
}
.feat-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, var(--navy-d), var(--navy-l), #4a9ee8);
  transform: scaleX(0); transform-origin: left; transition: transform .32s;
}
.feat-card:hover::before { transform: scaleX(1); }
.feat-card:hover { border-color: rgba(19,63,119,.2); transform: translateY(-4px); box-shadow: var(--shadow-lg); }
.feat-card h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.1rem, 2vw, 1.22rem);
  font-weight: 700; color: var(--navy-d); margin-bottom: 8px; line-height: 1.3;
}
.feat-card p { font-size: .82rem; color: var(--sub); line-height: 1.8; }

/* ══════════════════════════════
   PROCESS
══════════════════════════════ */
.proc-grid { display: flex; flex-direction: column; gap: 10px; }

.proc-card {
  display: grid; grid-template-columns: 64px 1fr;
  background: var(--white); border: 1px solid var(--border);
  border-radius: var(--r-md); overflow: hidden; transition: all .22s;
}
.proc-card:hover { box-shadow: var(--shadow-md); transform: translateX(3px); border-color: rgba(19,63,119,.25); }

.proc-num-col {
  background: linear-gradient(180deg, var(--navy-d), var(--navy));
  display: flex; align-items: center; justify-content: center;
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  font-weight: 700; color: rgba(255,255,255,.9);
  min-height: 88px; flex-shrink: 0; transition: background .22s;
}
.proc-card:hover .proc-num-col { background: linear-gradient(180deg, var(--navy), var(--navy-l)); }

.proc-content { padding: 18px 22px; }
.proc-content h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1rem, 2vw, 1.15rem);
  font-weight: 700; color: var(--navy-d); margin-bottom: 5px;
}
.proc-content p { font-size: .82rem; color: var(--sub); line-height: 1.8; }

.proc-cta {
  display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap; gap: 16px; margin-top: 24px;
  padding: clamp(20px, 4vw, 30px) clamp(20px, 5vw, 36px);
  background: linear-gradient(135deg, var(--cream), #ede9e0);
  border: 1px solid var(--border); border-radius: var(--r-md);
}
.proc-cta-text {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  font-style: italic; color: var(--navy-d);
}

/* ══════════════════════════════
   STATS
══════════════════════════════ */
.stats-strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-radius: var(--r-lg); overflow: hidden;
  box-shadow: var(--shadow-lg);
}
@media (max-width: 768px) { .stats-strip { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 380px)  { .stats-strip { grid-template-columns: 1fr; } }

.stat-cell {
  background: linear-gradient(160deg, var(--navy-d) 0%, #0f3a73 100%);
  padding: clamp(28px, 5vw, 44px) clamp(12px, 3vw, 20px);
  text-align: center; position: relative; overflow: hidden;
  border-right: 1px solid rgba(255,255,255,.08); transition: background .25s;
}
.stat-cell:last-child { border-right: none; }
@media (max-width: 768px) {
  .stat-cell:nth-child(2) { border-right: none; }
  .stat-cell:nth-child(3) { border-top: 1px solid rgba(255,255,255,.08); }
  .stat-cell:nth-child(4) { border-top: 1px solid rgba(255,255,255,.08); }
}
@media (max-width: 380px) {
  .stat-cell { border-right: none; border-top: 1px solid rgba(255,255,255,.08); }
  .stat-cell:first-child { border-top: none; }
}
.stat-cell:hover { background: linear-gradient(160deg, var(--navy) 0%, #164a90 100%); }
.stat-cell::after {
  content: attr(data-n); position: absolute; right: -8px; bottom: -14px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 5rem; font-weight: 700; line-height: 1;
  color: rgba(255,255,255,.05); pointer-events: none; user-select: none;
}

.stat-icon {
  width: 42px; height: 42px; border-radius: 10px;
  background: rgba(255,255,255,.1);
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 12px; color: rgba(255,255,255,.85);
}
.stat-val {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.2rem, 4vw, 2.9rem); font-weight: 700; color: #fff; line-height: 1;
}
.stat-lbl {
  font-size: .63rem; font-weight: 500; color: rgba(255,255,255,.45);
  margin-top: 8px; text-transform: uppercase; letter-spacing: .1em;
}

/* ══════════════════════════════
   FAQ
══════════════════════════════ */
.faq-wrap { border-radius: var(--r-md); overflow: hidden; border: 1px solid var(--border); }
.faq-row { border-bottom: 1px solid var(--border); }
.faq-row:last-child { border-bottom: none; }

.faq-q {
  width: 100%; text-align: left; background: var(--white); border: none;
  padding: clamp(14px, 2.5vw, 20px) clamp(16px, 3vw, 24px);
  display: flex; align-items: center; justify-content: space-between; gap: 14px;
  font-family: 'Poppins', sans-serif; font-weight: 500;
  font-size: clamp(.82rem, 1.5vw, .88rem);
  color: var(--navy-d); cursor: pointer; transition: background .18s;
}
.faq-q:hover { background: var(--cream); }
.faq-q.open { background: var(--navy-pale); color: var(--navy); }

.faq-chevron { flex-shrink: 0; transition: transform .25s; color: var(--muted); }
.faq-chevron.open { transform: rotate(180deg); color: var(--navy); }

.faq-a {
  background: var(--cream);
  padding: clamp(14px, 2.5vw, 18px) clamp(16px, 3vw, 24px) clamp(16px, 3vw, 22px);
  font-size: clamp(.82rem, 1.5vw, .86rem);
  line-height: 1.9; color: var(--sub); font-weight: 300;
  border-top: 1px solid var(--border);
  animation: fadeIn .2s ease;
}
@keyframes fadeIn { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }

/* ══════════════════════════════
   CTA BLOCK
══════════════════════════════ */
.cta-block {
  background: linear-gradient(135deg, var(--navy-d) 0%, #1652a0 100%);
  border-radius: var(--r-lg);
  padding: clamp(40px, 7vw, 72px) clamp(24px, 7%, 80px);
  position: relative; overflow: hidden;
  display: grid; grid-template-columns: 1fr auto;
  align-items: center; gap: clamp(24px, 5vw, 56px);
}
@media (max-width: 700px) { .cta-block { grid-template-columns: 1fr; } }

.cta-block::before {
  content: ''; position: absolute; right: -80px; top: -80px;
  width: 280px; height: 280px; border-radius: 50%;
  border: 1px solid rgba(255,255,255,.07); pointer-events: none;
}
.cta-block::after {
  content: ''; position: absolute; right: 60px; bottom: -100px;
  width: 200px; height: 200px; border-radius: 50%;
  border: 1px solid rgba(255,255,255,.06); pointer-events: none;
}

.cta-tag {
  display: inline-flex; align-items: center; gap: 8px;
  font-size: .62rem; font-weight: 700; letter-spacing: .2em;
  text-transform: uppercase; color: rgba(255,255,255,.45); margin-bottom: 14px;
}
.cta-tag::before { content: ''; width: 18px; height: 1.5px; background: rgba(255,255,255,.35); }

.cta-block h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.7rem, 3.5vw, 2.9rem);
  color: #fff; line-height: 1.18; margin-bottom: 12px; font-weight: 700;
}
.cta-block p { font-size: clamp(.88rem, 1.5vw, .96rem); color: rgba(255,255,255,.5); font-weight: 300; line-height: 1.8; max-width: 460px; }

.cta-actions { display: flex; flex-direction: column; gap: 10px; flex-shrink: 0; min-width: 180px; }
@media (max-width: 700px) { .cta-actions { flex-direction: row; flex-wrap: wrap; min-width: unset; } }

.btn-cta-primary {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  background: #fff; color: var(--navy-d);
  padding: 13px 24px; border-radius: var(--r-sm); border: 2px solid #fff;
  font-family: 'Poppins', sans-serif; font-size: .82rem; font-weight: 600;
  cursor: pointer; text-decoration: none; transition: all .22s; white-space: nowrap;
}
.btn-cta-primary:hover { background: transparent; color: #fff; transform: translateY(-2px); box-shadow: 0 8px 28px rgba(0,0,0,.2); }

.btn-cta-phone {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  background: rgba(255,255,255,.1); color: rgba(255,255,255,.78);
  padding: 12px 22px; border-radius: var(--r-sm);
  border: 1.5px solid rgba(255,255,255,.22);
  font-family: 'Poppins', sans-serif; font-size: .82rem; font-weight: 400;
  cursor: pointer; text-decoration: none; transition: all .22s;
  white-space: nowrap; backdrop-filter: blur(6px);
}
.btn-cta-phone:hover { background: rgba(255,255,255,.18); border-color: rgba(255,255,255,.5); color: #fff; }

/* ══════════════════════════════
   SCROLL FAB
══════════════════════════════ */
.fab {
  position: fixed; bottom: clamp(20px, 4vw, 30px); right: clamp(16px, 4vw, 28px);
  z-index: 100; width: 44px; height: 44px; border-radius: 50%; border: none;
  background: var(--navy-d); color: #fff;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 6px 24px rgba(13,46,87,.35); cursor: pointer;
  transition: all .2s; animation: popIn .3s ease;
}
@keyframes popIn { from { transform: scale(0); opacity: 0; } to { transform: scale(1); opacity: 1; } }
.fab:hover { background: var(--navy); transform: translateY(-3px); }

/* ══════════════════════════════
   MOBILE TWEAKS  ≤ 480px
══════════════════════════════ */
@media (max-width: 480px) {
  .hero { min-height: 100svh; }
  .hero-stats { width: 100%; }
  .h-stat { padding: 14px 16px; }
  .hero-actions { gap: 8px; }
  .btn-hero-primary, .btn-hero-ghost { width: 100%; justify-content: center; }
  .proc-card { grid-template-columns: 52px 1fr; }
  .proc-num-col { font-size: 1.1rem; min-height: 78px; }
  .proc-cta { flex-direction: column; align-items: flex-start; }
  .cta-block { padding: 36px 20px; }
}

/* ══════════════════════════════
   TABLET  768px – 1023px
══════════════════════════════ */
@media (min-width: 768px) and (max-width: 1023px) {
  .feat-grid { grid-template-columns: repeat(2, 1fr); }
  .hl-grid   { grid-template-columns: repeat(2, 1fr); }
  .hero-title { font-size: clamp(2.8rem, 6vw, 4rem); }
}

/* ══════════════════════════════
   LARGE SCREENS  ≥ 1440px
══════════════════════════════ */
@media (min-width: 1440px) {
  .hero-body { padding-bottom: 112px; }
  .page-grid { gap: 0 80px; }
}
`;

/* ══════════════════════════════════════════
   COMPONENT
══════════════════════════════════════════ */
const ServicePage = () => {
  const { serviceId } = useParams();
  const service = servicesData[serviceId];

  const [openFaq, setOpenFaq] = useState(null);
  const [active, setActive]   = useState("hero");
  const [drawer, setDrawer]   = useState(false);
  const [showFab, setShowFab] = useState(false);

  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [serviceId]);

  useEffect(() => {
    const ids = ["hero", "about", "features", "process", "stats", "faq"];
    const onScroll = () => {
      setShowFab(window.scrollY > 400);
      const off = window.scrollY + 130;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && off >= el.offsetTop && off < el.offsetTop + el.offsetHeight) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id) => {
    setDrawer(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: "smooth" });
    setActive(id);
  };

  const nav = [
    { id: "hero",     label: "Overview",     Icon: Home },
    { id: "about",    label: "About",        Icon: FileText },
    { id: "features", label: "Key Features", Icon: Star },
    { id: "process",  label: "Our Process",  Icon: BriefcaseBusiness },
    { id: "stats",    label: "Our Impact",   Icon: BarChart3 },
    { id: "faq",      label: "FAQ",          Icon: HelpCircle },
  ];

  const NavItems = ({ iconSize = 14 }) => nav.map(({ id, label, Icon }) => (
    <button key={id} className={`nav-item${active === id ? " on" : ""}`} onClick={() => goTo(id)}>
      <Icon size={iconSize} style={{ flexShrink: 0 }} /> {label}
    </button>
  ));

  if (!service) return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Poppins',sans-serif", padding: "20px" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(4rem,12vw,7rem)", fontWeight: 700, color: "#e2e8f4", lineHeight: 1 }}>404</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.4rem,4vw,2rem)", color: "#0d2e57", margin: "16px 0 10px" }}>Service Not Found</h2>
        <Link to="/" style={{ color: "#133f77", fontWeight: 600, fontSize: ".88rem" }}>← Return Home</Link>
      </div>
    </div>
  );

  return (
    <>
      <FontInjector />
      <style>{css}</style>
      <div className="sp">

        {/* ══ HERO ══ */}
        <section id="hero" className="hero">
          <div className="hero-bg" style={{ backgroundImage: `url(${service.hero.image})` }} />
          <div className="hero-overlay" />
          <div className="hero-accent-bar" />

          {/* Breadcrumb REMOVED */}

          <div className="hero-body">
            <div className="hero-tag">
              <span className="hero-tag-dot" />
              Premium Service
            </div>
            <h1 className="hero-title">{service.hero.title}</h1>
            <p className="hero-sub">{service.hero.subtitle}</p>

            <div className="hero-actions">
              <Link to="/contact">
                <button className="btn-hero-primary">
                  {service.hero.cta} <ArrowRight size={15} />
                </button>
              </Link>
           
            </div>

            <div className="hero-stats">
              {[
                { val: "500+", lbl: "Projects Done" },
                { val: "98%",  lbl: "Satisfaction"  },
                { val: "15+",  lbl: "Years Exp."    },
              ].map((s, i) => (
                <div key={i} className="h-stat">
                  <div className="h-stat-val">{s.val}</div>
                  <div className="h-stat-lbl">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ MOBILE STICKY BAR ══ */}
        <div className="mob-bar">
          <span className="mob-bar-title">{service.hero.title}</span>
          <button className="mob-bar-menu" onClick={() => setDrawer(true)}>
            <Menu size={15} /> Sections
          </button>
        </div>

        {/* ══ DRAWER ══ */}
        {drawer && (
          <div className="drawer">
            <div className="drawer-dim" onClick={() => setDrawer(false)} />
            <div className="drawer-panel">
              <div className="drawer-top">
                <span className="drawer-logo">Navigate</span>
                <button className="drawer-close" onClick={() => setDrawer(false)}>
                  <X size={20} />
                </button>
              </div>
              <nav className="drawer-nav">
                <NavItems iconSize={14} />
              </nav>
              <div className="drawer-cta">
                <p className="drawer-cta-h">Need Help?</p>
                <p className="drawer-cta-p">Our team is ready to assist you today.</p>
                <Link to="/contact">
                  <button className="btn-solid full">Contact Us <ArrowRight size={13} /></button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* ══ MAIN BODY ══ */}
        <div className="wrap">
          <div className="page-grid">

            {/* Sidebar */}
            <aside className="sidebar">
              <div className="sidebar-card">
                <div className="sidebar-head">
                  <div className="sidebar-head-title">On This Page</div>
                  <div className="sidebar-head-sub">Jump to any section</div>
                </div>
                <div className="sidebar-nav">
                  <span className="sidebar-lbl">Sections</span>
                  <NavItems iconSize={13} />
                </div>
                <div className="sidebar-footer">
                  <div className="sidebar-footer-label">Ready to take the next step?</div>
                  <Link to="/contact">
                    <button className="btn-solid full">
                      Free Consultation <ArrowRight size={13} />
                    </button>
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main */}
            <main>

              {/* ABOUT */}
              <section id="about" className="sec">
                <div className="sec-kicker"><span className="sec-kicker-dot" />Our Service</div>
                <h2 className="sec-title">{service.about.title}</h2>
                <div className="sec-rule" />
                <p className="about-body">{service.about.description}</p>
                <div className="hl-grid">
                  {service.about.highlights.map((h, i) => (
                    <div key={i} className="hl-card">
                      <div className="hl-card-icon">
                        <CheckCircle size={15} color="#133f77" />
                      </div>
                      <span className="hl-card-text">{h}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* FEATURES */}
              <section id="features" className="sec">
                <div className="sec-kicker"><span className="sec-kicker-dot" />What We Offer</div>
                <h2 className="sec-title">Key Features &amp; Services</h2>
                <div className="sec-rule" />
                <div className="feat-grid">
                  {service.detailedFeatures.map((f, i) => (
                    <div key={i} className="feat-card">
                      <h3>{f.title}</h3>
                      <p>{f.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* PROCESS */}
              <section id="process" className="sec">
                <div className="sec-kicker"><span className="sec-kicker-dot" />Methodology</div>
                <h2 className="sec-title">{service.process.title}</h2>
                <div className="sec-rule" />
                <div className="proc-grid">
                  {service.process.steps.map((step, i) => (
                    <div key={i} className="proc-card">
                      <div className="proc-num-col">{String(i + 1).padStart(2, "0")}</div>
                      <div className="proc-content">
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="proc-cta">
                  <p className="proc-cta-text">"Ready to start your journey with us?"</p>
                  <Link to="/contact">
                    <button className="btn-solid">Get Started <ArrowRight size={14} /></button>
                  </Link>
                </div>
              </section>

              {/* STATS */}
              <section id="stats" className="sec">
                <div className="sec-kicker"><span className="sec-kicker-dot" />Track Record</div>
                <h2 className="sec-title">Our Impact in Numbers</h2>
                <div className="sec-rule" />
                <div className="stats-strip">
                  {[
                    { val: "500+", lbl: "Projects Completed", Icon: Trophy,     n: "500" },
                    { val: "98%",  lbl: "Client Satisfaction", Icon: ThumbsUp,  n: "98"  },
                    { val: "15+",  lbl: "Years Experience",    Icon: Clock,      n: "15"  },
                    { val: "24/7", lbl: "Support Available",   Icon: Headphones, n: "247" },
                  ].map((s, i) => (
                    <div key={i} className="stat-cell" data-n={s.n}>
                      <div className="stat-icon"><s.Icon size={20} strokeWidth={1.6} /></div>
                      <div className="stat-val">{s.val}</div>
                      <div className="stat-lbl">{s.lbl}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section id="faq" className="sec">
                <div className="sec-kicker"><span className="sec-kicker-dot" />Questions</div>
                <h2 className="sec-title">Frequently Asked Questions</h2>
                <div className="sec-rule" />
                <div className="faq-wrap">
                  {service.faqs.map((faq, i) => (
                    <div key={i} className="faq-row">
                      <button
                        className={`faq-q${openFaq === i ? " open" : ""}`}
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      >
                        <span>{faq.question}</span>
                        <ChevronDown size={16} className={`faq-chevron${openFaq === i ? " open" : ""}`} />
                      </button>
                      {openFaq === i && <div className="faq-a">{faq.answer}</div>}
                    </div>
                  ))}
                </div>
              </section>

              {/* CTA */}
              <section className="cta-block">
                <div>
                  <div className="cta-tag">Get Started Today</div>
                  <h2>{service.cta.title}</h2>
                  <p>{service.cta.description}</p>
                </div>
                <div className="cta-actions">
                  <Link to="/contact" style={{ textDecoration: "none" }}>
                    <button className="btn-cta-primary">
                      {service.cta.primaryButton} <ArrowRight size={14} />
                    </button>
                  </Link>
                  <a href="tel:+919999999999" style={{ textDecoration: "none" }}>
                    <button className="btn-cta-phone">
                      <Phone size={14} /> {service.cta.secondaryButton}
                    </button>
                  </a>
                </div>
              </section>

            </main>
          </div>
        </div>

        {/* FAB */}
        {showFab && (
          <button className="fab" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Scroll to top">
            <ArrowUp size={18} />
          </button>
        )}

      </div>
    </>
  );
};

export default ServicePage;