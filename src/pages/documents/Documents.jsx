import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  Search, Bookmark, Share2, Calendar,
  FileText, ChevronDown, ChevronRight, TrendingUp,
  X, Building2, Filter, ArrowUpRight,
  LayoutGrid, List, ChevronLeft
} from 'lucide-react';

const B  = '#133f77';
const BD = '#0d2d57';
const BL = '#e8eef6';

const HERO_BG = 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80';

export default function TaxationDocuments() {
  const [activeTab,       setActiveTab]       = useState('all');
  const [searchQuery,     setSearchQuery]     = useState('');
  const [selectedYear,    setSelectedYear]    = useState('all');
  const [selectedTaxType, setSelectedTaxType] = useState('all');
  const [sortOrder,       setSortOrder]       = useState('latest');
  const [currentPage,     setCurrentPage]     = useState(1);
  const [bookmarkedDocs,  setBookmarkedDocs]  = useState(new Set());
  const [shareMenuOpen,   setShareMenuOpen]   = useState(null);
  const [viewMode,        setViewMode]        = useState('grid');
  const [filtersOpen,     setFiltersOpen]     = useState(false);
  const shareRef  = useRef(null);
  const filterRef = useRef(null);

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const itemsPerPage = windowWidth < 480
    ? (viewMode === 'grid' ? 4 : 6)
    : windowWidth < 768
    ? (viewMode === 'grid' ? 4 : 6)
    : (viewMode === 'grid' ? 6 : 8);

  useEffect(() => {
    const h = (e) => {
      if (shareRef.current  && !shareRef.current.contains(e.target))  setShareMenuOpen(null);
      if (filterRef.current && !filterRef.current.contains(e.target)) setFiltersOpen(false);
    };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  const allDocuments = [
    { id:1,  title:'GST Annual Return Filing Guidelines',   docNumber:'GSTR-2024-001',     category:'Guidelines',        taxType:'GST',          issueDate:'2024-01-15', lastUpdated:'2024-02-10', description:'Comprehensive guide for annual GST return filing process and requirements.',              fileSize:'2.4 MB', downloads:1245, version:'2.1', visitUrl:'https://www.gst.gov.in/' },
    { id:2,  title:'Income Tax Circular – TDS Deduction',   docNumber:'IT-CIR-2024-045',   category:'Circulars',         taxType:'Income Tax',   issueDate:'2024-02-01', lastUpdated:'2024-02-08', description:'Updates on TDS deduction rates and compliance requirements for the current fiscal year.',  fileSize:'1.8 MB', downloads:2341, version:'1.0', visitUrl:'https://incometaxindia.gov.in/' },
    { id:3,  title:'Form 26AS – Annual Tax Statement',      docNumber:'FORM-26AS-2024',    category:'Forms & Templates', taxType:'Income Tax',   issueDate:'2024-01-10', lastUpdated:'2024-01-10', description:'Template for annual tax credit statement verification and reconciliation.',              fileSize:'856 KB', downloads:3452, version:'3.0', visitUrl:'https://incometaxindia.gov.in/' },
    { id:4,  title:'GST Rate Changes Notification',         docNumber:'GST-NOT-2024-012',  category:'Notifications',     taxType:'GST',          issueDate:'2024-02-05', lastUpdated:'2024-02-05', description:'Official notification regarding changes in GST rates for various commodities and services.', fileSize:'1.2 MB', downloads:1876, version:'1.0', visitUrl:'https://taxconcept.net/gst/' },
    { id:5,  title:'Corporate Tax Filing Checklist',        docNumber:'CT-GUIDE-2024-003', category:'Guidelines',        taxType:'Corporate Tax',issueDate:'2024-01-20', lastUpdated:'2024-02-01', description:'Step-by-step checklist for corporate tax filing compliance and documentation.',          fileSize:'3.1 MB', downloads:987,  version:'1.2', visitUrl:'https://eportal.incometax.gov.in/' },
    { id:6,  title:'ITR-4 Form for Presumptive Income',     docNumber:'ITR-4-2024',        category:'Forms & Templates', taxType:'Income Tax',   issueDate:'2024-01-05', lastUpdated:'2024-01-28', description:'Income tax return form for individuals with presumptive income under section 44AD.',     fileSize:'1.5 MB', downloads:4123, version:'2.0', visitUrl:'https://incometaxindia.gov.in/' },
    { id:7,  title:'TDS Return Filing Guidelines',          docNumber:'TDS-GUIDE-2024-002',category:'Guidelines',        taxType:'TDS',          issueDate:'2023-12-15', lastUpdated:'2024-01-05', description:'Complete guide for quarterly TDS return filing with all required annexures.',            fileSize:'2.1 MB', downloads:1532, version:'1.5', visitUrl:'https://incometaxindia.gov.in/' },
    { id:8,  title:'GST Composition Scheme Circular',       docNumber:'GST-CIR-2024-008',  category:'Circulars',         taxType:'GST',          issueDate:'2024-01-25', lastUpdated:'2024-01-25', description:'Updated guidelines for GST composition scheme eligibility and threshold limits.',        fileSize:'1.4 MB', downloads:2145, version:'1.0', visitUrl:'https://gstcouncil.gov.in/' },
    { id:9,  title:'ITR-1 Sahaj Form',                      docNumber:'ITR-1-2024',        category:'Forms & Templates', taxType:'Income Tax',   issueDate:'2023-11-20', lastUpdated:'2024-01-15', description:'Simplified return form for individuals with salary income up to ₹50 lakh per annum.',   fileSize:'1.1 MB', downloads:5234, version:'2.5', visitUrl:'https://incometaxindia.gov.in/' },
    { id:10, title:'Corporate Tax Rate Notification',       docNumber:'CT-NOT-2023-056',   category:'Notifications',     taxType:'Corporate Tax',issueDate:'2023-10-10', lastUpdated:'2023-12-20', description:'Official notification on revised corporate tax rates and surcharge structures.',          fileSize:'980 KB', downloads:1654, version:'1.0', visitUrl:'https://incometaxindia.gov.in/' },
    { id:11, title:'TDS on Salary Circular',                docNumber:'TDS-CIR-2023-034',  category:'Circulars',         taxType:'TDS',          issueDate:'2023-09-15', lastUpdated:'2023-11-10', description:'Clarifications on TDS deduction from salary payments and perquisite valuation.',        fileSize:'1.6 MB', downloads:2876, version:'1.0', visitUrl:'https://incometaxindia.gov.in/' },
    { id:12, title:'GST Invoice Requirements',              docNumber:'GST-NOT-2023-089',  category:'Notifications',     taxType:'GST',          issueDate:'2023-08-20', lastUpdated:'2023-10-05', description:'Mandatory requirements for GST compliant invoices including e-invoicing norms.',        fileSize:'1.3 MB', downloads:3123, version:'2.0', visitUrl:'https://cbic-gst.gov.in/' },
    { id:13, title:'Form 16 – TDS Certificate',             docNumber:'FORM-16-2024',      category:'Forms & Templates', taxType:'TDS',          issueDate:'2024-01-01', lastUpdated:'2024-01-01', description:'TDS certificate format for salary income issued by employers annually to employees.',   fileSize:'750 KB', downloads:4567, version:'3.0', visitUrl:'https://incometaxindia.gov.in/' },
    { id:14, title:'Income Tax Deduction Guidelines',       docNumber:'IT-GUIDE-2023-021', category:'Guidelines',        taxType:'Income Tax',   issueDate:'2023-07-10', lastUpdated:'2023-12-15', description:'Comprehensive guide on allowable deductions under Chapter VI-A of Income Tax Act.',     fileSize:'2.8 MB', downloads:3234, version:'1.8', visitUrl:'https://incometaxindia.gov.in/' },
    { id:15, title:'Corporate Tax Audit Requirements',      docNumber:'CT-CIR-2023-045',   category:'Circulars',         taxType:'Corporate Tax',issueDate:'2023-06-15', lastUpdated:'2023-09-20', description:'Mandatory audit requirements for corporate entities under section 44AB.',               fileSize:'2.2 MB', downloads:1876, version:'1.0', visitUrl:'https://incometaxindia.gov.in/' },
    { id:16, title:'GST Input Tax Credit Rules',            docNumber:'GST-GUIDE-2023-015',category:'Guidelines',        taxType:'GST',          issueDate:'2023-05-20', lastUpdated:'2023-11-30', description:'Detailed rules for claiming input tax credit under GST with reconciliation procedures.', fileSize:'3.4 MB', downloads:2654, version:'2.3', visitUrl:'https://cbic-gst.gov.in/' },
    { id:17, title:'ITR-2 Form for Capital Gains',          docNumber:'ITR-2-2024',        category:'Forms & Templates', taxType:'Income Tax',   issueDate:'2024-02-01', lastUpdated:'2024-02-01', description:'Return form for individuals with capital gains and income from multiple sources.',      fileSize:'1.7 MB', downloads:2987, version:'2.0', visitUrl:'https://cleartax.in/' },
    { id:18, title:'TDS Payment Deadline Extension',        docNumber:'TDS-NOT-2024-005',  category:'Notifications',     taxType:'TDS',          issueDate:'2024-01-30', lastUpdated:'2024-01-30', description:'Official notification on extended TDS payment deadlines for Q3 FY2023-24.',             fileSize:'890 KB', downloads:3456, version:'1.0', visitUrl:'https://cleartax.in/' },
    { id:19, title:'Corporate Tax Exemption Circular',      docNumber:'CT-CIR-2024-012',   category:'Circulars',         taxType:'Corporate Tax',issueDate:'2024-02-05', lastUpdated:'2024-02-05', description:'Guidelines on corporate tax exemptions for startups registered under DPIIT scheme.',   fileSize:'1.9 MB', downloads:1234, version:'1.0', visitUrl:'https://incometaxindia.gov.in/' },
    { id:20, title:'GST E-Way Bill Guidelines',             docNumber:'GST-GUIDE-2024-006',category:'Guidelines',        taxType:'GST',          issueDate:'2024-01-18', lastUpdated:'2024-02-02', description:'Complete guide for generating and managing GST e-way bills for goods transport.',      fileSize:'2.6 MB', downloads:2123, version:'1.3', visitUrl:'https://cleartax.in/' },
    { id:21, title:'Form 16A – TDS on Non-Salary',         docNumber:'FORM-16A-2024',     category:'Forms & Templates', taxType:'TDS',          issueDate:'2023-12-01', lastUpdated:'2024-01-20', description:'TDS certificate for income other than salary including professional fees and rent.',    fileSize:'680 KB', downloads:3876, version:'2.5', visitUrl:'https://incometaxindia.gov.in/' },
    { id:22, title:'Income Tax Assessment Notification',   docNumber:'IT-NOT-2023-067',   category:'Notifications',     taxType:'Income Tax',   issueDate:'2023-11-05', lastUpdated:'2024-01-10', description:'Updates on income tax assessment procedures under faceless assessment scheme.',         fileSize:'1.5 MB', downloads:2345, version:'1.0', visitUrl:'https://incometaxindia.gov.in/' },
    { id:23, title:'GST Refund Process Guidelines',        docNumber:'GST-GUIDE-2023-028',category:'Guidelines',        taxType:'GST',          issueDate:'2023-10-25', lastUpdated:'2024-01-05', description:'Step-by-step process for claiming GST refunds on exports and inverted duty structure.',  fileSize:'2.9 MB', downloads:1987, version:'2.1', visitUrl:'https://cleartax.in/' },
    { id:24, title:'Corporate Advance Tax Circular',       docNumber:'CT-CIR-2023-078',   category:'Circulars',         taxType:'Corporate Tax',issueDate:'2023-09-30', lastUpdated:'2023-12-28', description:'Guidelines on advance tax payment schedule and interest implications for corporates.', fileSize:'1.7 MB', downloads:1543, version:'1.0', visitUrl:'https://incometaxindia.gov.in/' },
    { id:25, title:'AOC-4: Financial Statements Filing',   docNumber:'MCA-AOC-4-2024',    category:'Forms & Templates', taxType:'MCA Forms',    issueDate:'2024-01-01', lastUpdated:'2024-02-15', description:'Balance Sheet, P&L and Auditor Report filing. Due within 30 days of AGM.',            fileSize:'1.2 MB', downloads:2890, version:'2.0', mcaType:'Annual',      priority:'high',   visitUrl:'https://cleartax.in/' },
    { id:26, title:'MGT-7: Annual Return Filing',          docNumber:'MCA-MGT-7-2024',    category:'Forms & Templates', taxType:'MCA Forms',    issueDate:'2024-01-01', lastUpdated:'2024-02-15', description:'Annual return for most companies. Due within 60 days of AGM completion.',              fileSize:'980 KB', downloads:3120, version:'2.1', mcaType:'Annual',      priority:'high',   visitUrl:'https://cagkcco.com/' },
    { id:27, title:'MGT-7A: Annual Return for OPC',        docNumber:'MCA-MGT-7A-2024',   category:'Forms & Templates', taxType:'MCA Forms',    issueDate:'2024-01-01', lastUpdated:'2024-02-15', description:'Simplified annual return for OPC and Small Companies. Due within 60 days of AGM.',    fileSize:'850 KB', downloads:1890, version:'2.0', mcaType:'Annual',      priority:'high',   visitUrl:'https://legal60.com/' },
    { id:28, title:'DIR-12: Director Appointment',        docNumber:'MCA-DIR-12-2024',   category:'Forms & Templates', taxType:'MCA Forms',    issueDate:'2024-01-01', lastUpdated:'2024-02-10', description:'Form for appointment, resignation or change in Director details and KYC.',            fileSize:'650 KB', downloads:2340, version:'1.5', mcaType:'Event-Based', priority:'medium', visitUrl:'https://taxguru.in/' },
    { id:29, title:'ADT-1: Appointment of Auditor',       docNumber:'MCA-ADT-1-2024',    category:'Forms & Templates', taxType:'MCA Forms',    issueDate:'2024-01-01', lastUpdated:'2024-02-10', description:'Form for filing appointment of statutory auditor within 15 days of AGM.',             fileSize:'580 KB', downloads:1670, version:'1.3', mcaType:'Event-Based', priority:'medium', visitUrl:'https://taxguru.in/' },
    { id:30, title:'DIR-3 KYC: Director Annual KYC',      docNumber:'MCA-DIR-3KYC-2024', category:'Forms & Templates', taxType:'MCA Forms',    issueDate:'2024-01-01', lastUpdated:'2024-02-10', description:'Annual KYC submission for Directors. Mandatory by 30th September every year.',        fileSize:'520 KB', downloads:2890, version:'2.0', mcaType:'Director',    priority:'high',   visitUrl:'https://taxguru.in/' },
  ];

  const categories = ['all','Forms & Templates','Circulars','Notifications','Guidelines'];
  const years      = ['all','2024','2023','2022','2021'];
  const taxTypes   = ['all','GST','Income Tax','Corporate Tax','TDS','MCA Forms'];

  const filtered = useMemo(() => {
    let d = allDocuments;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      d = d.filter(x =>
        x.title.toLowerCase().includes(q) ||
        x.docNumber.toLowerCase().includes(q) ||
        x.description.toLowerCase().includes(q) ||
        x.taxType.toLowerCase().includes(q)
      );
    }
    if (activeTab !== 'all')       d = d.filter(x => x.category === activeTab);
    if (selectedYear !== 'all')    d = d.filter(x => x.issueDate.startsWith(selectedYear));
    if (selectedTaxType !== 'all') d = d.filter(x => x.taxType === selectedTaxType);
    return [...d].sort((a,b) =>
      sortOrder === 'latest'
        ? new Date(b.lastUpdated) - new Date(a.lastUpdated)
        : new Date(a.lastUpdated) - new Date(b.lastUpdated)
    );
  }, [searchQuery, activeTab, selectedYear, selectedTaxType, sortOrder]);

  const totalPages     = Math.ceil(filtered.length / itemsPerPage);
  const start          = (currentPage - 1) * itemsPerPage;
  const pageDocs       = filtered.slice(start, start + itemsPerPage);
  const popularDocs    = useMemo(() => [...allDocuments].sort((a,b) => b.downloads - a.downloads).slice(0,4), []);
  const totalDownloads = allDocuments.reduce((s,d) => s + d.downloads, 0);
  const activeFilters  = [selectedYear!=='all', selectedTaxType!=='all', sortOrder!=='latest'].filter(Boolean).length;

  useEffect(() => setCurrentPage(1), [searchQuery, activeTab, selectedYear, selectedTaxType, sortOrder, viewMode]);

  // ✅ Scroll to top smoothly on every page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const toggleBookmark = id => {
    const s = new Set(bookmarkedDocs);
    s.has(id) ? s.delete(id) : s.add(id);
    setBookmarkedDocs(s);
  };

  const handleShare = (doc, platform) => {
    const url  = doc.visitUrl || window.location.href;
    const text = `${doc.title} – ${doc.description}`;
    const map  = {
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text+'\n'+url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter:  `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
    };
    window.open(map[platform], '_blank', 'width=600,height=400');
    setShareMenuOpen(null);
  };

  const taxTypeColor = t => ({
    'GST':           { bg:'#eff6ff', color:B,          dot:'#3b82f6' },
    'Income Tax':    { bg:'#f0fdf4', color:'#166534',  dot:'#22c55e' },
    'Corporate Tax': { bg:'#fef9c3', color:'#854d0e',  dot:'#eab308' },
    'TDS':           { bg:'#fdf4ff', color:'#7e22ce',  dot:'#a855f7' },
    'MCA Forms':     { bg:'#fff1f2', color:'#9f1239',  dot:'#f43f5e' },
  }[t] || { bg:'#f9fafb', color:'#374151', dot:'#9ca3af' });

  const catColor = c => ({
    'Guidelines':         { bg:'#eff6ff', color:B },
    'Circulars':          { bg:'#f0fdf4', color:'#166534' },
    'Notifications':      { bg:'#fffbeb', color:'#92400e' },
    'Forms & Templates':  { bg:'#fdf4ff', color:'#7e22ce' },
  }[c] || { bg:'#f9fafb', color:'#374151' });

  const ShareMenu = ({ doc }) => (
    <div style={{
      position:'absolute', bottom:'calc(100% + 6px)', right:0,
      background:'#fff', border:'1px solid #e8edf4', borderRadius:10,
      boxShadow:'0 16px 40px rgba(0,0,0,.12)', zIndex:200,
      minWidth:140, overflow:'hidden', animation:'smIn .15s ease',
    }}>
      {[
        { key:'whatsapp', label:'WhatsApp', color:'#25D366', path:'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z' },
        { key:'facebook', label:'Facebook',  color:'#1877F2', path:'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
        { key:'twitter',  label:'Twitter',   color:'#1DA1F2', path:'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
      ].map(({ key, label, color, path }) => (
        <button
          key={key}
          onClick={() => handleShare(doc, key)}
          onMouseEnter={e => e.currentTarget.style.background = '#f8fafc'}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          style={{ display:'flex', alignItems:'center', gap:'0.5rem', padding:'0.55rem 0.875rem', fontSize:'0.75rem', color:'#374151', border:'none', background:'transparent', cursor:'pointer', width:'100%', fontFamily:'Poppins,sans-serif' }}
        >
          <svg fill={color} viewBox="0 0 24 24" style={{width:'0.875rem',height:'0.875rem',flexShrink:0}}><path d={path}/></svg>
          {label}
        </button>
      ))}
    </div>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Poppins:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        .td { font-family:'Poppins',sans-serif; background:#f8fafc; min-height:100vh; color:#1e293b; }

        .td-hero {
          position: relative;
          min-height: 480px;
          background:
            linear-gradient(to bottom, rgba(10,28,58,0.72) 0%, rgba(10,28,58,0.55) 60%, rgba(10,28,58,0.78) 100%),
            url('${HERO_BG}') center center / cover no-repeat;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
        }

        .td-deco { position:absolute; border-radius:50%; border:1px solid rgba(255,255,255,.1); pointer-events:none; }
        .td-deco1 { width:500px;height:500px; top:-200px; right:-120px; }
        .td-deco2 { width:260px;height:260px; bottom:40px; right:180px; opacity:.4; }
        .td-deco3 { width:120px;height:120px; top:60px;   right:340px; opacity:.25; }

        .td-hero-inner {
          max-width: 1240px;
          margin: 0 auto;
          padding: clamp(3rem,7vw,5.5rem) clamp(1rem,4vw,1.5rem) clamp(2rem,4vw,3rem);
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 2rem;
          align-items: flex-start;
          position: relative;
          z-index: 2;
        }

        .td-hero-tag {
          display: inline-flex; align-items: center; gap: .4rem;
          font-size: .65rem; font-weight: 600; letter-spacing: .18em; text-transform: uppercase;
          color: rgba(255,255,255,.65);
          background: rgba(255,255,255,.1); border: 1px solid rgba(255,255,255,.2);
          border-radius: 999px; padding: .3rem .875rem; margin-bottom: .875rem;
        }
        .td-hero-tag-dot { width:5px; height:5px; border-radius:50%; background:#60a5fa; flex-shrink:0; }

        .td-hero h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.7rem, 5vw, 3.6rem);
          font-weight: 700; color: #fff; line-height: 1.12;
          letter-spacing: -.02em; margin-bottom: .75rem;
          word-break: break-word;
        }
        .td-hero h1 em { font-style: italic; color: #93c5fd; }
        .td-hero-sub {
          font-size: clamp(.78rem, 1.8vw, .95rem);
          color: rgba(255,255,255,.68); max-width: 500px;
          line-height: 1.78; font-weight: 300;
        }

        .td-hero-card {
          background: rgba(255,255,255,.1); border: 1px solid rgba(255,255,255,.18);
          border-radius: 14px; padding: 1.1rem 1.25rem;
          backdrop-filter: blur(14px); min-width: 210px;
          align-self: flex-start;
        }
        .td-hero-card-ttl { font-size:.63rem; text-transform:uppercase; letter-spacing:.14em; color:rgba(255,255,255,.5); margin-bottom:.875rem; }
        .td-hero-card-row { display:flex; align-items:center; gap:.625rem; padding:.45rem 0; border-bottom:1px solid rgba(255,255,255,.08); }
        .td-hero-card-row:last-child { border-bottom:none; padding-bottom:0; }
        .td-hero-card-dot { width:6px; height:6px; border-radius:50%; flex-shrink:0; }
        .td-hero-card-txt { font-size:.7rem; color:rgba(255,255,255,.78); line-height:1.35; }

        .td-stats-strip {
          background: rgba(0,0,0,.35);
          backdrop-filter: blur(10px);
          border-top: 1px solid rgba(255,255,255,.1);
          position: relative; z-index: 2;
        }
        .td-stats-inner {
          max-width: 1240px; margin: 0 auto;
          padding: 0 clamp(1rem,4vw,1.5rem);
          display: flex;
        }
        .td-stat {
          flex: 1; padding: clamp(.6rem,.8vw,.9rem) clamp(.75rem,2vw,1.25rem);
          border-right: 1px solid rgba(255,255,255,.08);
          min-width: 0;
        }
        .td-stat:last-child { border-right: none; }
        .td-stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.2rem,3vw,1.7rem); font-weight: 700; color: #fff;
          line-height: 1; margin-bottom: .2rem; white-space: nowrap;
        }
        .td-stat-lbl { font-size: clamp(.5rem,.8vw,.6rem); text-transform: uppercase; letter-spacing: .1em; color: rgba(255,255,255,.42); white-space: nowrap; }

        .td-search-section {
          background: #fff;
          border-bottom: 1px solid #e8edf4;
          box-shadow: 0 4px 24px rgba(19,63,119,.08);
          position: sticky;
          top: 0;
          z-index: 30;
        }
        .td-search-inner {
          max-width: 1240px; margin: 0 auto;
          padding: .75rem clamp(1rem,4vw,1.5rem);
          display: flex; align-items: center; gap: .625rem; flex-wrap: wrap;
        }
        .td-si-wrap {
          flex: 1; min-width: 140px;
          display: flex; align-items: center; gap: .5rem;
        }
        .td-si-wrap > svg { color: #94a3b8; flex-shrink: 0; width:.9rem; height:.9rem; }
        .td-si {
          flex: 1; border: none; outline: none;
          font-family: 'Poppins', sans-serif; font-size: .8rem;
          color: #1e293b; background: transparent; min-width: 0;
        }
        .td-si::placeholder { color: #b8c4d0; }
        .td-divider { width:1px; height:22px; background:#e8edf4; flex-shrink:0; }

        .td-filter-btn {
          display: flex; align-items: center; gap: .35rem;
          font-family: 'Poppins', sans-serif; font-size: .75rem; font-weight: 500;
          color: #475569; border: none; background: transparent;
          cursor: pointer; padding: .375rem .625rem; border-radius: 8px; transition: all .15s;
          white-space: nowrap; flex-shrink: 0;
        }
        .td-filter-btn:hover { background: #f1f5f9; }
        .td-filter-btn.active { background: ${BL}; color: ${B}; }
        .td-filter-badge {
          background: ${B}; color: #fff;
          font-size: .58rem; font-weight: 700;
          width: .9rem; height: .9rem; border-radius: 50%;
          display: inline-flex; align-items: center; justify-content: center;
        }

        .td-vb { display:flex; gap:.2rem; padding:.2rem; background:#f1f5f9; border-radius:8px; flex-shrink:0; }
        .td-vbtn {
          padding:.3rem .45rem; border-radius:6px; border:none;
          background:transparent; color:#94a3b8; cursor:pointer;
          display:flex; align-items:center; transition:all .15s;
        }
        .td-vbtn.on { background:#fff; color:${B}; box-shadow:0 1px 4px rgba(0,0,0,.1); }

        .td-filter-panel {
          background: #fff;
          border-top: 1px solid #f1f5f9;
          border-bottom: 1px solid #e8edf4;
          box-shadow: 0 8px 30px rgba(19,63,119,.08);
        }
        .td-filter-panel-inner {
          max-width: 1240px; margin: 0 auto;
          padding: .875rem clamp(1rem,4vw,1.5rem);
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px,1fr));
          gap: .875rem;
        }
        .td-fg label {
          display: block; font-size: .6rem; font-weight: 600;
          letter-spacing: .1em; text-transform: uppercase; color: #94a3b8; margin-bottom: .35rem;
        }
        .td-sel {
          width: 100%; padding: .45rem 2rem .45rem .7rem;
          border: 1.5px solid #e2e8f0; border-radius: 8px;
          font-family: 'Poppins', sans-serif; font-size: .78rem; color: #1e293b;
          background: #fafbfc url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E") no-repeat right .7rem center;
          appearance: none; outline: none; cursor: pointer;
          transition: border-color .15s, box-shadow .15s;
        }
        .td-sel:focus { border-color:${B}; box-shadow:0 0 0 3px rgba(19,63,119,.1); }
        .td-clear-btn {
          width: 100%; padding: .45rem; border: 1.5px solid ${B};
          border-radius: 8px; color: ${B}; background: transparent;
          cursor: pointer; font: 600 .72rem/1 'Poppins',sans-serif;
          transition: all .15s;
        }
        .td-clear-btn:hover { background: ${BL}; }

        .td-main { max-width:1240px; margin:0 auto; padding:1.5rem clamp(1rem,4vw,1.5rem) 4rem; }

        .td-tabs {
          display: flex; border-bottom: 2px solid #e8edf4;
          overflow-x: auto; scrollbar-width: none; margin-bottom: 1.25rem;
          -webkit-overflow-scrolling: touch;
        }
        .td-tabs::-webkit-scrollbar { display:none; }
        .td-tab {
          padding: .65rem .9rem; font-size: .75rem; font-weight: 500;
          white-space: nowrap; flex-shrink: 0; border: none; background: transparent;
          color: #94a3b8; cursor: pointer; border-bottom: 2.5px solid transparent;
          margin-bottom: -2px; transition: all .15s; font-family: 'Poppins', sans-serif;
        }
        .td-tab:hover { color: #475569; }
        .td-tab.on { color:${B}; border-bottom-color:${B}; font-weight:600; }

        .td-count-row { display:flex; align-items:center; justify-content:space-between; margin-bottom:1.1rem; flex-wrap:wrap; gap:.5rem; }
        .td-count { font-size:.75rem; color:#94a3b8; }
        .td-count strong { color:#475569; font-weight:600; }

        .td-grid {
          display:grid;
          grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
          gap:1rem;
          margin-bottom:1.75rem;
        }

        .td-card {
          background: #fff; border: 1.5px solid #edf1f8; border-radius: 16px;
          overflow: hidden; display: flex; flex-direction: column;
          transition: all .25s cubic-bezier(.4,0,.2,1);
        }
        .td-card:hover { border-color:${B}; transform:translateY(-3px); box-shadow:0 12px 40px rgba(19,63,119,.12); }

        .td-card-top {
          padding: 1.1rem; background: linear-gradient(135deg,#f8fafd,#fff);
          border-bottom: 1px solid #f1f5f9; display: flex; align-items: flex-start; gap: .75rem;
        }
        .td-card-icon {
          width: 2.5rem; height: 2.5rem; border-radius: 11px; background: ${B};
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
          box-shadow: 0 3px 10px rgba(19,63,119,.22);
        }
        .td-card-icon svg  { color:#fff; width:1rem; height:1rem; }
        .td-card-icon.mca  { background: linear-gradient(135deg,#f43f5e,#e11d48); }
        .td-card-meta      { flex:1; min-width:0; }
        .td-card-dn        { font-size:.6rem; font-weight:600; letter-spacing:.07em; text-transform:uppercase; color:#94a3b8; margin-bottom:.3rem; }
        .td-card-t         { font-family:'Cormorant Garamond',serif; font-size:1rem; font-weight:600; color:#0f172a; line-height:1.3; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; }

        .td-card-body  { padding:.9rem 1.1rem; flex:1; display:flex; flex-direction:column; }
        .td-card-desc  { font-size:.75rem; color:#64748b; line-height:1.65; margin-bottom:.75rem; flex:1; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; }

        .td-chips      { display:flex; flex-wrap:wrap; gap:.3rem; margin-bottom:.875rem; }
        .td-chip       { display:inline-flex; align-items:center; gap:.28rem; padding:.18rem .5rem; border-radius:999px; font-size:.6rem; font-weight:600; letter-spacing:.03em; }
        .td-chip-dot   { width:4px; height:4px; border-radius:50%; flex-shrink:0; }

        .td-card-foot  { display:flex; align-items:center; justify-content:space-between; padding-top:.75rem; border-top:1px solid #f1f5f9; flex-wrap:wrap; gap:.4rem; }
        .td-info       { display:flex; align-items:center; gap:.5rem; font-size:.65rem; color:#94a3b8; flex-wrap:wrap; }
        .td-info-i     { display:flex; align-items:center; gap:.22rem; }
        .td-info-i svg { width:.6rem; height:.6rem; }
        .td-btns       { display:flex; align-items:center; gap:.3rem; flex-shrink:0; }

        .td-visit {
          display:inline-flex; align-items:center; gap:.3rem;
          padding:.4rem .75rem; background:${B}; color:#fff; border-radius:7px;
          font-size:.7rem; font-weight:600; text-decoration:none; border:none; cursor:pointer;
          transition:all .15s; letter-spacing:.02em; font-family:'Poppins',sans-serif;
          white-space: nowrap;
        }
        .td-visit:hover { background:${BD}; transform:translateY(-1px); box-shadow:0 4px 14px rgba(19,63,119,.3); }
        .td-visit svg  { width:.65rem; height:.65rem; }

        .td-ib {
          width:1.875rem; height:1.875rem; border-radius:6px; border:1.5px solid #e8edf4;
          background:transparent; display:flex; align-items:center; justify-content:center;
          color:#94a3b8; cursor:pointer; transition:all .15s; flex-shrink:0;
        }
        .td-ib:hover { background:#f8fafc; border-color:#cbd5e1; color:#475569; }
        .td-ib.bm    { background:#fef9c3; border-color:#fbbf24; color:#b45309; }
        .td-ib svg   { width:.75rem; height:.75rem; }
        .td-sw       { position:relative; }

        .td-list { display:flex; flex-direction:column; gap:.625rem; margin-bottom:1.75rem; }
        .td-lcard {
          background:#fff; border:1.5px solid #edf1f8; border-radius:12px;
          padding:.875rem 1.1rem; display:flex; align-items:center; gap:1rem;
          transition:all .2s; flex-wrap:wrap;
        }
        .td-lcard:hover { border-color:${B}; box-shadow:0 5px 20px rgba(19,63,119,.1); transform:translateX(2px); }
        .td-licon      { width:2rem; height:2rem; border-radius:9px; background:${B}; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .td-licon svg  { color:#fff; width:.875rem; height:.875rem; }
        .td-licon.mca  { background:linear-gradient(135deg,#f43f5e,#e11d48); }
        .td-lmain      { flex:1; min-width:0; }
        .td-lt         { font-family:'Cormorant Garamond',serif; font-size:.95rem; font-weight:600; color:#0f172a; line-height:1.3; }
        .td-ls         { font-size:.67rem; color:#94a3b8; margin-top:.12rem; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .td-lright     { display:flex; align-items:center; gap:.4rem; flex-shrink:0; flex-wrap:wrap; justify-content:flex-end; }

        .td-empty { text-align:center; padding:4rem 2rem; border:2px dashed #e8edf4; border-radius:20px; background:#fff; }
        .td-ei    { width:3.5rem; height:3.5rem; background:${BL}; border-radius:14px; display:flex; align-items:center; justify-content:center; margin:0 auto 1rem; }
        .td-ei svg{ color:${B}; width:1.35rem; height:1.35rem; }
        .td-empty h3 { font-family:'Cormorant Garamond',serif; font-size:1.3rem; font-weight:600; color:#374151; margin-bottom:.3rem; }
        .td-empty p  { font-size:.8rem; color:#94a3b8; }

        .td-pg  {
          display:flex; align-items:center; justify-content:space-between;
          background:#fff; border:1.5px solid #edf1f8; border-radius:12px;
          padding:.75rem 1rem; flex-wrap:wrap; gap:.625rem;
        }
        .td-pgl { font-size:.72rem; color:#94a3b8; }
        .td-pgl strong { color:#475569; }
        .td-pgbs { display:flex; gap:.25rem; flex-wrap:wrap; }
        .td-pgb {
          min-width:2rem; height:2rem; padding:0 .45rem; border-radius:7px;
          border:1.5px solid #e8edf4; font-family:'Poppins',sans-serif; font-size:.72rem; font-weight:500;
          color:#475569; background:#fff; cursor:pointer; transition:all .15s;
          display:flex; align-items:center; justify-content:center; gap:.2rem;
        }
        .td-pgb:hover:not(:disabled) { background:#f8fafc; border-color:#cbd5e1; }
        .td-pgb.on  { background:${B}; color:#fff; border-color:${B}; font-weight:600; }
        .td-pgb:disabled { opacity:.35; cursor:not-allowed; }
        .td-ellipsis { color:#cbd5e1; font-size:.72rem; padding:0 .15rem; display:flex; align-items:center; }

        @media (max-width: 1024px) {
          .td-hero-inner { grid-template-columns: 1fr; padding-bottom: clamp(1.5rem,3vw,2.5rem); }
          .td-hero-card { display: none; }
          .td-hero h1 { font-size: clamp(1.8rem, 5vw, 2.8rem); }
          .td-grid { grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); }
        }

        @media (max-width: 768px) {
          .td-hero { min-height: 300px; }
          .td-hero h1 { font-size: clamp(1.5rem, 5vw, 2.2rem); }
          .td-hero-sub { font-size: .82rem; }
          .td-stats-inner { flex-wrap: wrap; }
          .td-stat { flex: 1 1 50%; border-right: none; border-bottom: 1px solid rgba(255,255,255,.08); padding: .65rem 1rem; }
          .td-stat:nth-child(odd) { border-right: 1px solid rgba(255,255,255,.08); }
          .td-stat:nth-last-child(-n+2) { border-bottom: none; }
          .td-search-inner { gap: .5rem; }
          .td-divider { display: none; }
          .td-grid { grid-template-columns: 1fr 1fr; gap: .75rem; }
          .td-card-foot { flex-direction: column; align-items: flex-start; }
          .td-btns { width: 100%; justify-content: flex-end; }
          .td-lcard { gap: .75rem; }
          .td-lright { width: 100%; justify-content: flex-start; margin-top: .5rem; padding-top: .5rem; border-top: 1px solid #f1f5f9; }
          .td-pg { padding: .625rem .875rem; }
          .td-pgl { width: 100%; text-align: center; }
          .td-pgbs { justify-content: center; width: 100%; }
        }

        @media (max-width: 600px) {
          .td-hero { min-height: 260px; }
          .td-hero-inner { padding: 2rem 1rem 1.5rem; }
          .td-hero h1 { font-size: clamp(1.35rem, 6vw, 1.9rem); }
          .td-hero-tag { font-size: .58rem; padding: .25rem .7rem; }
          .td-search-inner { padding: .625rem 1rem; }
          .td-filter-btn span.td-filter-label { display: none; }
          .td-main { padding: 1.25rem 1rem 3rem; }
          .td-grid { grid-template-columns: 1fr; }
          .td-tab { padding: .6rem .7rem; font-size: .7rem; }
          .td-lcard { flex-wrap: wrap; }
          .td-lmain { width: calc(100% - 3rem); }
          .td-pg { flex-direction: column; align-items: center; gap: .5rem; }
        }

        @media (max-width: 400px) {
          .td-hero { min-height: 220px; }
          .td-hero-inner { padding: 1.75rem .875rem 1.25rem; }
          .td-hero h1 { font-size: 1.3rem; }
          .td-stats-inner { flex-wrap: nowrap; }
          .td-stat { flex: 1; padding: .5rem .6rem; }
          .td-stat:nth-child(odd) { border-right: 1px solid rgba(255,255,255,.08); }
          .td-stat-num { font-size: 1.1rem; }
          .td-stat-lbl { font-size: .48rem; letter-spacing: .06em; }
          .td-search-inner { padding: .5rem .875rem; gap: .35rem; }
          .td-si { font-size: .75rem; }
          .td-filter-panel-inner { grid-template-columns: 1fr 1fr; gap: .625rem; }
          .td-main { padding: 1rem .875rem 2.5rem; }
          .td-tab { padding: .55rem .6rem; font-size: .67rem; }
          .td-card-top { padding: .875rem; gap: .625rem; }
          .td-card-body { padding: .75rem .875rem; }
          .td-card-icon { width: 2.25rem; height: 2.25rem; border-radius: 9px; }
          .td-card-t { font-size: .92rem; }
          .td-card-desc { font-size: .72rem; }
          .td-visit { padding: .35rem .625rem; font-size: .67rem; }
          .td-ib { width: 1.75rem; height: 1.75rem; }
          .td-pgb { min-width: 1.875rem; height: 1.875rem; font-size: .68rem; }
          .td-pgb svg { width: .7rem; height: .7rem; }
        }

        @media (min-width: 1440px) {
          .td-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (hover: none) {
          .td-card:hover { transform: none; box-shadow: none; border-color: #edf1f8; }
          .td-lcard:hover { transform: none; box-shadow: none; border-color: #edf1f8; }
        }

        @keyframes smIn { from{opacity:0;transform:scale(.95) translateY(4px)} to{opacity:1;transform:scale(1) translateY(0)} }
      `}</style>

      <div className="td">

        {/* HERO */}
        <section className="td-hero">
          <div className="td-deco td-deco1" />
          <div className="td-deco td-deco2" />
          <div className="td-deco td-deco3" />

          <div className="td-hero-inner">
            <div>
              <div className="td-hero-tag">
                <span className="td-hero-tag-dot" />
                Official Tax Repository
              </div>
              <h1>Taxation <em>Documents</em><br />& Compliance Hub</h1>
              <p className="td-hero-sub">
                Access authoritative tax forms, circulars, notifications and guidelines —
                curated and updated for seamless compliance.
              </p>
            </div>

            <div className="td-hero-card">
              <div className="td-hero-card-ttl">🔥 Trending This Week</div>
              {popularDocs.map(d => {
                const tc = taxTypeColor(d.taxType);
                return (
                  <div key={d.id} className="td-hero-card-row">
                    <div className="td-hero-card-dot" style={{background: tc.dot}} />
                    <div className="td-hero-card-txt">{d.title}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="td-stats-strip">
            <div className="td-stats-inner">
              {[
                { num:`${allDocuments.length}+`,               lbl:'Documents'       },
                { num:'5',                                      lbl:'Tax Categories'  },
                { num:`${(totalDownloads/1000).toFixed(0)}K`,  lbl:'Total Downloads' },
                { num:'2024',                                   lbl:'Latest Update'   },
              ].map(({ num, lbl }) => (
                <div key={lbl} className="td-stat">
                  <div className="td-stat-num">{num}</div>
                  <div className="td-stat-lbl">{lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEARCH BAR */}
        <div className="td-search-section" ref={filterRef}>
          <div className="td-search-inner">
            <div className="td-si-wrap">
              <Search />
              <input
                className="td-si"
                placeholder="Search documents…"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{border:'none',background:'none',cursor:'pointer',color:'#94a3b8',display:'flex',padding:0,alignItems:'center',flexShrink:0}}
                >
                  <X style={{width:'.8rem',height:'.8rem'}} />
                </button>
              )}
            </div>

            <div className="td-divider" />

            <button
              className={`td-filter-btn ${filtersOpen || activeFilters > 0 ? 'active' : ''}`}
              onClick={() => setFiltersOpen(v => !v)}
            >
              <Filter style={{width:'.8rem',height:'.8rem',flexShrink:0}} />
              <span className="td-filter-label">Filters</span>
              {activeFilters > 0 && <span className="td-filter-badge">{activeFilters}</span>}
              <ChevronDown style={{width:'.7rem',height:'.7rem',transform:filtersOpen?'rotate(180deg)':'none',transition:'transform .2s',flexShrink:0}} />
            </button>

            <div className="td-divider" />

            <div className="td-vb">
              <button className={`td-vbtn ${viewMode==='grid'?'on':''}`} onClick={() => setViewMode('grid')} title="Grid view">
                <LayoutGrid style={{width:'.8rem',height:'.8rem'}} />
              </button>
              <button className={`td-vbtn ${viewMode==='list'?'on':''}`} onClick={() => setViewMode('list')} title="List view">
                <List style={{width:'.8rem',height:'.8rem'}} />
              </button>
            </div>
          </div>

          {filtersOpen && (
            <div className="td-filter-panel">
              <div className="td-filter-panel-inner">
                {[
                  { label:'Year',     value:selectedYear,    setter:setSelectedYear,    opts:years.map(y=>({v:y,l:y==='all'?'All Years':y})) },
                  { label:'Tax Type', value:selectedTaxType, setter:setSelectedTaxType, opts:taxTypes.map(t=>({v:t,l:t==='all'?'All Types':t})) },
                  { label:'Sort By',  value:sortOrder,       setter:setSortOrder,       opts:[{v:'latest',l:'Latest First'},{v:'oldest',l:'Oldest First'}] },
                ].map(({ label, value, setter, opts }) => (
                  <div className="td-fg" key={label}>
                    <label>{label}</label>
                    <select className="td-sel" value={value} onChange={e => setter(e.target.value)}>
                      {opts.map(o => <option key={o.v} value={o.v}>{o.l}</option>)}
                    </select>
                  </div>
                ))}
                {activeFilters > 0 && (
                  <div className="td-fg" style={{display:'flex',alignItems:'flex-end'}}>
                    <button
                      className="td-clear-btn"
                      onClick={() => { setSelectedYear('all'); setSelectedTaxType('all'); setSortOrder('latest'); }}
                    >
                      Clear Filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* MAIN CONTENT */}
        <div className="td-main">

          <div className="td-tabs">
            {categories.map(cat => (
              <button
                key={cat}
                className={`td-tab ${activeTab === cat ? 'on' : ''}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat === 'all' ? 'All Documents' : cat}
              </button>
            ))}
          </div>

          <div className="td-count-row">
            <p className="td-count">
              Showing <strong>{Math.min(start+1, filtered.length)}–{Math.min(start+itemsPerPage, filtered.length)}</strong> of <strong>{filtered.length}</strong> documents
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="td-empty">
              <div className="td-ei"><FileText /></div>
              <h3>No documents found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>

          ) : viewMode === 'grid' ? (
            <div className="td-grid">
              {pageDocs.map(doc => {
                const tc = taxTypeColor(doc.taxType);
                const cc = catColor(doc.category);
                return (
                  <div key={doc.id} className="td-card">
                    <div className="td-card-top">
                      <div className={`td-card-icon ${doc.taxType==='MCA Forms'?'mca':''}`}>
                        {doc.taxType === 'MCA Forms' ? <Building2 /> : <FileText />}
                      </div>
                      <div className="td-card-meta">
                        <div className="td-card-dn">{doc.docNumber}</div>
                        <h3 className="td-card-t">{doc.title}</h3>
                      </div>
                    </div>

                    <div className="td-card-body">
                      <p className="td-card-desc">{doc.description}</p>

                      <div className="td-chips">
                        <span className="td-chip" style={{background:cc.bg, color:cc.color}}>{doc.category}</span>
                        <span className="td-chip" style={{background:tc.bg, color:tc.color}}>
                          <span className="td-chip-dot" style={{background:tc.dot}} />
                          {doc.taxType}
                        </span>
                        {doc.mcaType && (
                          <span className="td-chip" style={{background:'#fdf4ff',color:'#7e22ce'}}>{doc.mcaType}</span>
                        )}
                      </div>

                      <div className="td-card-foot">
                        <div className="td-info">
                          <div className="td-info-i">
                            <Calendar />
                            {new Date(doc.issueDate).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'})}
                          </div>
                          <div className="td-info-i">
                            <TrendingUp />
                            {doc.downloads.toLocaleString()}
                          </div>
                          <span style={{color:'#d4d4d4'}}>{doc.fileSize}</span>
                        </div>
                        <div className="td-btns">
                          <div className="td-sw" ref={shareMenuOpen === doc.id ? shareRef : null}>
                            <button className="td-ib" onClick={() => setShareMenuOpen(shareMenuOpen===doc.id ? null : doc.id)}>
                              <Share2 />
                            </button>
                            {shareMenuOpen === doc.id && <ShareMenu doc={doc} />}
                          </div>
                          <button
                            className={`td-ib ${bookmarkedDocs.has(doc.id) ? 'bm' : ''}`}
                            onClick={() => toggleBookmark(doc.id)}
                          >
                            <Bookmark fill={bookmarkedDocs.has(doc.id) ? 'currentColor' : 'none'} />
                          </button>
                          <a href={doc.visitUrl} target="_blank" rel="noopener noreferrer" className="td-visit">
                            Visit <ArrowUpRight />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          ) : (
            <div className="td-list">
              {pageDocs.map(doc => {
                const tc = taxTypeColor(doc.taxType);
                const cc = catColor(doc.category);
                return (
                  <div key={doc.id} className="td-lcard">
                    <div className={`td-licon ${doc.taxType==='MCA Forms'?'mca':''}`}>
                      {doc.taxType === 'MCA Forms' ? <Building2 /> : <FileText />}
                    </div>
                    <div className="td-lmain">
                      <div className="td-lt">{doc.title}</div>
                      <div className="td-ls">{doc.docNumber} · {doc.fileSize} · v{doc.version}</div>
                      <div className="td-chips" style={{marginTop:'.45rem',marginBottom:0}}>
                        <span className="td-chip" style={{background:cc.bg,color:cc.color}}>{doc.category}</span>
                        <span className="td-chip" style={{background:tc.bg,color:tc.color}}>
                          <span className="td-chip-dot" style={{background:tc.dot}} />{doc.taxType}
                        </span>
                      </div>
                    </div>
                    <div className="td-lright">
                      <div style={{fontSize:'.65rem',color:'#94a3b8',textAlign:'right',lineHeight:1.6}}>
                        <div style={{display:'flex',alignItems:'center',gap:'.22rem',justifyContent:'flex-end'}}>
                          <Calendar style={{width:'.6rem',height:'.6rem'}} />
                          {new Date(doc.issueDate).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'})}
                        </div>
                        <div style={{display:'flex',alignItems:'center',gap:'.22rem',justifyContent:'flex-end'}}>
                          <TrendingUp style={{width:'.6rem',height:'.6rem'}} />
                          {doc.downloads.toLocaleString()} downloads
                        </div>
                      </div>
                      <div className="td-sw" ref={shareMenuOpen === doc.id ? shareRef : null}>
                        <button className="td-ib" onClick={() => setShareMenuOpen(shareMenuOpen===doc.id ? null : doc.id)}>
                          <Share2 />
                        </button>
                        {shareMenuOpen === doc.id && <ShareMenu doc={doc} />}
                      </div>
                      <button
                        className={`td-ib ${bookmarkedDocs.has(doc.id) ? 'bm' : ''}`}
                        onClick={() => toggleBookmark(doc.id)}
                      >
                        <Bookmark fill={bookmarkedDocs.has(doc.id) ? 'currentColor' : 'none'} />
                      </button>
                      <a href={doc.visitUrl} target="_blank" rel="noopener noreferrer" className="td-visit">
                        Visit <ArrowUpRight />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* pagination */}
          {filtered.length > 0 && (
            <div className="td-pg">
              <span className="td-pgl">
                <strong>{Math.min(start+1, filtered.length)}–{Math.min(start+itemsPerPage, filtered.length)}</strong> of <strong>{filtered.length}</strong>
              </span>
              <div className="td-pgbs">
                <button className="td-pgb" disabled={currentPage===1} onClick={() => setCurrentPage(p=>p-1)}>
                  <ChevronLeft style={{width:'.75rem',height:'.75rem'}} /> Prev
                </button>
                {Array.from({length:totalPages},(_,i)=>i+1).map(n => {
                  if (n===1 || n===totalPages || (n>=currentPage-1 && n<=currentPage+1))
                    return <button key={n} className={`td-pgb ${currentPage===n?'on':''}`} onClick={() => setCurrentPage(n)}>{n}</button>;
                  if (n===currentPage-2 || n===currentPage+2)
                    return <span key={n} className="td-ellipsis">…</span>;
                  return null;
                })}
                <button className="td-pgb" disabled={currentPage===totalPages} onClick={() => setCurrentPage(p=>p+1)}>
                  Next <ChevronRight style={{width:'.75rem',height:'.75rem'}} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}