import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { 
  CheckCircle, 
  Rocket,
  Phone,
  BriefcaseBusiness,
  Star, 
  Award, 
  TrendingUp, 
  HelpCircle,
  Home,
  FileText,
  Briefcase,
  BarChart3,
  Calendar,
  BookOpen,
  Shield,
  Building,
  Target,
  Lightbulb,
  Clock,
  AlertTriangle,
  Download,
  Mail,
  ChevronRight,
  ArrowRight,
  ExternalLink,
  Users,
  Settings,
  Zap,
  Activity,
  Database,
  DollarSign,
  Menu,
  X
} from 'lucide-react';

// ─────────────────────────────────────────────
//  INCOME TAX DATA (inline regulatoryData)
// ─────────────────────────────────────────────
const regulatoryData = {
  "income-tax": {
    hero: {
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
      title: "Income Tax Compliance & Advisory Services",
      subtitle:
        "End-to-end income tax solutions — from ITR filing and TDS management to tax planning, assessments, and dispute resolution — ensuring full compliance with Indian tax laws.",
      cta: "Get Started Today",
    },

    about: {
      title: "About Our Income Tax Services",
      description:
        "We provide comprehensive income tax services for individuals, HUFs, partnerships, LLPs, and companies. Our expert CA team handles everything from routine ITR filing to complex tax assessments, transfer pricing, and international taxation matters, keeping you compliant and tax-efficient throughout the year.",
      highlights: [
        "ITR filing for all categories — Individuals, HUF, Firms, LLPs, Companies & Trusts",
        "Advance tax computation and timely deposit to avoid interest u/s 234B & 234C",
        "TDS/TCS compliance — deduction, deposit, and quarterly return filing",
        "Tax audit u/s 44AB and preparation of Form 3CA/3CB & 3CD",
        "Representation before Assessing Officer, CIT(A) & ITAT",
        "Tax planning, investment advisory, and capital gains optimisation",
      ],
    },

    regulatoryOverview: {
      title: "Regulatory Framework",
      introduction:
        "India's direct tax system is governed primarily by the Income Tax Act, 1961, administered by the Central Board of Direct Taxes (CBDT) under the Ministry of Finance. The Act imposes tax on income of persons under five heads and prescribes detailed compliance obligations including filing returns, deducting tax at source, maintaining books of accounts, and undergoing audit where applicable.",
      keyAspects: [
        {
          title: "Income Tax Act, 1961",
          description:
            "The principal legislation covering computation of income, deductions, exemptions, and procedural aspects of assessment and appeal.",
          regulations: [
            "Five heads of income: Salary, House Property, PGBP, Capital Gains, Other Sources",
            "Deductions u/s 80C to 80U (up to ₹1.5 lakh under 80C)",
            "New Tax Regime u/s 115BAC with revised slab rates",
            "Presumptive taxation u/s 44AD, 44ADA, 44AE",
          ],
        },
        {
          title: "TDS / TCS Provisions",
          description:
            "Tax Deduction at Source (TDS) and Tax Collection at Source (TCS) ensure advance tax collection at the point of income generation.",
          regulations: [
            "TDS on salaries u/s 192, interest u/s 194A, contractor u/s 194C",
            "TDS on rent u/s 194I, professional fees u/s 194J",
            "TCS on sale of goods u/s 206C, foreign remittance u/s 206C(1G)",
            "Quarterly TDS returns: Form 24Q, 26Q, 27Q, 27EQ",
          ],
        },
        {
          title: "Tax Audit & Accounts",
          description:
            "Mandatory audit of accounts for businesses and professionals exceeding prescribed turnover/gross receipts thresholds.",
          regulations: [
            "Tax audit u/s 44AB for turnover > ₹1 crore (₹10 crore if 95% digital transactions)",
            "Professionals: gross receipts > ₹50 lakh",
            "Form 3CA/3CB (auditor's report) + Form 3CD (statement of particulars)",
            "Due date: 30 September (or 31 October if transfer pricing)",
          ],
        },
        {
          title: "Assessment & Appeals",
          description:
            "Structured scrutiny, assessment, and multi-tier appellate mechanism to resolve tax disputes.",
          regulations: [
            "Faceless Assessment Scheme u/s 144B",
            "Faceless Appeal Scheme before CIT(A)",
            "ITAT — Income Tax Appellate Tribunal",
            "High Court (substantial question of law) & Supreme Court",
          ],
        },
      ],
    },

    detailedFeatures: [
      {
        title: "ITR Filing (All Forms)",
        description:
          "Accurate preparation and e-filing of ITR-1 through ITR-7 for individuals, HUFs, firms, LLPs, companies, and trusts. Includes computation of income, eligible deductions, and reconciliation with Form 26AS / AIS / TIS.",
      },
      {
        title: "TDS Compliance",
        description:
          "End-to-end TDS management — rate determination, monthly challan deposit, quarterly return filing (24Q/26Q/27Q/27EQ), and issuance of Form 16/16A to deductees.",
      },
      {
        title: "Tax Audit & Certification",
        description:
          "Comprehensive tax audit u/s 44AB including preparation of Form 3CA/3CB and detailed Form 3CD with all 41 clauses. Also covers 80-IA, 10B, and transfer-pricing certifications.",
      },
      {
        title: "Tax Planning & Advisory",
        description:
          "Proactive tax planning for individuals and corporates — regime selection (old vs new), capital gains structuring, salary structuring, investment planning, and ESOP taxation guidance.",
      },
      {
        title: "Assessment & Litigation",
        description:
          "Expert representation during faceless scrutiny assessments, CIT(A) appeals, and ITAT proceedings. Drafting submissions, compiling evidence, and negotiating additions to minimise tax demand.",
      },
      {
        title: "International Taxation",
        description:
          "Advisory on DTAA benefits, Form 15CA/15CB for foreign remittances, transfer pricing documentation (Forms 3CEB), FEMA-tax interface, and expatriate taxation.",
      },
    ],

    complianceCalendar: {
      title: "Income Tax Compliance Calendar",
      description:
        "Key due dates for income tax filings, TDS deposits, and advance tax instalments. Missing these dates attracts interest, penalties, and prosecution under the Income Tax Act.",
      deadlines: [
        {
          period: "April – June (Q1)",
          filings: [
            {
              form: "Advance Tax – 1st Instalment",
              description: "15% of estimated annual tax liability payable by all assessees (except senior citizens with no PGBP income)",
              dueDate: "15 June",
            },
            {
              form: "TDS Deposit (April & May)",
              description: "Monthly TDS/TCS challan deposit for amounts deducted in the previous month",
              dueDate: "7th of following month",
            },
            {
              form: "Form 24Q / 26Q / 27Q (Q4 of previous FY)",
              description: "Quarterly TDS return for salary and non-salary payments of Jan–Mar",
              dueDate: "31 May",
            },
          ],
        },
        {
          period: "July – September (Q2)",
          filings: [
            {
              form: "Advance Tax – 2nd Instalment",
              description: "45% of estimated annual tax (cumulative) for all applicable assessees",
              dueDate: "15 September",
            },
            {
              form: "ITR Filing (Non-Audit Cases)",
              description: "Income Tax Return for individuals, HUFs, firms not liable to audit (FY 2024-25)",
              dueDate: "31 July",
            },
            {
              form: "Form 24Q / 26Q (Q1 TDS Return)",
              description: "TDS quarterly return for April–June deductions",
              dueDate: "31 July",
            },
          ],
        },
        {
          period: "October – December (Q3)",
          filings: [
            {
              form: "ITR Filing (Audit / TP Cases)",
              description: "ITR for companies, firms & individuals liable to tax audit / transfer pricing",
              dueDate: "31 October (Audit) / 30 November (TP)",
            },
            {
              form: "Tax Audit Report (Form 3CA/3CB + 3CD)",
              description: "Upload signed tax audit report by the CA on the income tax portal",
              dueDate: "30 September",
            },
            {
              form: "Advance Tax – 3rd Instalment",
              description: "75% of estimated annual tax (cumulative)",
              dueDate: "15 December",
            },
            {
              form: "Form 24Q / 26Q (Q2 TDS Return)",
              description: "TDS quarterly return for July–September deductions",
              dueDate: "31 October",
            },
          ],
        },
        {
          period: "January – March (Q4)",
          filings: [
            {
              form: "Advance Tax – 4th Instalment",
              description: "100% of estimated annual tax (cumulative) — final instalment",
              dueDate: "15 March",
            },
            {
              form: "Updated Return (ITR-U)",
              description: "Filing updated return u/s 139(8A) with additional tax for missed/incorrect disclosures",
              dueDate: "Within 2 years from end of relevant AY",
            },
            {
              form: "Form 24Q / 26Q (Q3 TDS Return)",
              description: "TDS quarterly return for October–December deductions",
              dueDate: "31 January",
            },
          ],
        },
      ],
    },

    industryGuidance: {
      title: "Industry-Specific Tax Guidance",
      description:
        "Income tax implications vary significantly across industries. Our sector experts provide tailored guidance on deductions, exemptions, and compliance nuances relevant to your business.",
      sectors: [
        {
          name: "IT & Startups",
          challenges: [
            "ESOP taxation at two stages — allotment and sale",
            "Section 80-IAC tax holiday eligibility and conditions",
            "Angel tax u/s 56(2)(viib) on share premium above FMV",
            "R&D deduction u/s 35 and weighted deduction eligibility",
          ],
          solutions: [
            "ESOP tax planning and Form 3BC reporting",
            "DPIIT recognition and 80-IAC exemption filing",
            "FMV valuation for angel tax compliance (Rule 11UA)",
            "Scientific research expenditure certification",
          ],
        },
        {
          name: "Real Estate & Builders",
          challenges: [
            "Project completion method vs percentage completion method",
            "Capital gains on land/property — LTCG vs LTCG with indexation",
            "TDS on purchase of immovable property u/s 194IA",
            "Deemed rental income on unsold inventory u/s 23(5)",
          ],
          solutions: [
            "Revenue recognition advisory aligned with Ind AS 115",
            "Capital gains structuring and reinvestment u/s 54/54F",
            "Assistance with Form 26QB filing for property buyers",
            "Joint development agreement taxation advisory",
          ],
        },
        {
          name: "Manufacturing",
          challenges: [
            "Depreciation calculation on block of assets u/s 32",
            "Additional depreciation u/s 32(1)(iia) on new plant & machinery",
            "Section 80IC / 80IE benefits for units in specified areas",
            "Transfer pricing for inter-company transactions",
          ],
          solutions: [
            "Depreciation schedule optimisation across asset classes",
            "Power & energy sector deductions under 80-IA",
            "Location-based tax holiday planning and compliance",
            "Transfer pricing documentation and Form 3CEB filing",
          ],
        },
        {
          name: "Professionals & Freelancers",
          challenges: [
            "Presumptive taxation u/s 44ADA vs actual expense deduction",
            "GST-income tax reconciliation for service professionals",
            "Home office deduction and proportionate expense claims",
            "Foreign income — DTAA benefit and Form 67 filing",
          ],
          solutions: [
            "Regime comparison (44ADA vs regular) and optimal filing",
            "Monthly bookkeeping and year-end reconciliation",
            "Foreign tax credit computation and Form 67 assistance",
            "Advance tax planning to avoid interest u/s 234B/234C",
          ],
        },
      ],
    },

    violations: {
      title: "Violations, Penalties & Consequences",
      description:
        "Non-compliance with income tax provisions attracts a range of penalties, interest charges, and in serious cases, criminal prosecution. Understanding the risk helps you prioritise timely compliance.",
      commonViolations: [
        {
          violation: "Late Filing of ITR",
          penalty: "₹5,000 u/s 234F (₹1,000 if total income ≤ ₹5 lakh). Interest u/s 234A @ 1% per month on tax due.",
          impact: "High",
          prevention: "File by 31 July (non-audit) / 31 October (audit). Set calendar reminders or engage us for auto-filing.",
        },
        {
          violation: "Non-Deduction / Short Deduction of TDS",
          penalty: "Interest u/s 201(1A) @ 1% (non-deduction) / 1.5% (non-deposit) per month + 30% disallowance of expense u/s 40(a)(ia).",
          impact: "Critical",
          prevention: "Monthly TDS calendar with automated rate-check against PAN-linked TDS database.",
        },
        {
          violation: "Concealment of Income / Furnishing Inaccurate Particulars",
          penalty: "Penalty u/s 270A: 50% of tax on under-reported income; 200% in cases of misreporting.",
          impact: "Critical",
          prevention: "Full disclosure in ITR with reconciliation against Form 26AS, AIS, and TIS before filing.",
        },
        {
          violation: "Failure to Get Accounts Audited u/s 44AB",
          penalty: "0.5% of total sales / gross receipts or ₹1.5 lakh, whichever is lower u/s 271B.",
          impact: "High",
          prevention: "Monitor turnover monthly. Appoint CA well before 30 September to complete audit on time.",
        },
        {
          violation: "Non-Payment / Short Payment of Advance Tax",
          penalty: "Interest u/s 234B (1% per month from April to assessment) and 234C (1% per instalment shortfall).",
          impact: "High",
          prevention: "Quarterly advance tax computation based on projected P&L and capital gains.",
        },
        {
          violation: "Failure to Furnish TDS Return",
          penalty: "₹200 per day u/s 234E during default + penalty u/s 271H up to ₹1 lakh.",
          impact: "High",
          prevention: "Automate quarterly return filing calendar for 24Q/26Q/27Q. We track all four quarters.",
        },
      ],
      compoundingProcess: {
        title: "Compounding of Income Tax Offences",
        steps: [
          "Identify the offence and applicable section (e.g., wilful attempt to evade tax u/s 276C)",
          "File compounding application before the competent authority (PCIT / CCIT)",
          "Pay compounding fees as per CBDT compounding guidelines (varies by offence category)",
          "Submit all supporting documents and comply with any additional conditions imposed",
          "Obtain compounding order and ensure no further default on the same provision",
        ],
        benefits: [
          "Avoids prosecution and criminal proceedings",
          "One-time settlement instead of prolonged litigation",
          "Preserves business reputation and director eligibility",
          "Allows fresh start with clean compliance record",
        ],
        timeline: "Typically 3–6 months from application to compounding order, subject to CBDT guidelines",
      },
    },

    caseStudies: {
      title: "Case Studies",
      description:
        "Real-world scenarios where our expertise delivered measurable results for clients across different industries and complexity levels.",
      studies: [
        {
          industry: "E-Commerce Startup",
          title: "Section 80-IAC Tax Holiday & Angel Tax Resolution",
          challenge:
            "A DPIIT-recognised startup received ₹3 crore in funding at a premium. The AO raised an angel tax demand u/s 56(2)(viib) of ₹80 lakh. Simultaneously, the founder was unsure whether the company qualified for 80-IAC exemption.",
          solution:
            "Our team obtained a DCF-based FMV valuation report from a merchant banker (Rule 11UA), submitted a detailed response to the AO demonstrating that the issue price was within FMV. Simultaneously, we filed an 80-IAC application with detailed business plan, DPIIT certificate, and financial projections.",
          outcome:
            "Angel tax demand dropped to nil after AO accepted FMV valuation. The 80-IAC exemption was granted, saving ₹1.8 crore in taxes over three years.",
          impact:
            "Net tax saving of ₹2.6 crore over 3 years. Founders gained confidence to raise Series A without tax cloud over the business.",
        },
        {
          industry: "Real Estate Developer",
          title: "Resolving ₹4.2 Crore Scrutiny Addition on Project Revenue",
          challenge:
            "A mid-size builder received a scrutiny notice where the AO proposed to add ₹4.2 crore treating project completion date as earlier than actual handover, thereby advancing income recognition and triggering tax.",
          solution:
            "We compiled RERA registration, OC certificate, actual customer agreements, and possession letters to establish the correct project completion date. A detailed written submission was filed under the Faceless Assessment Scheme with complete legal precedents on percentage completion method.",
          outcome:
            "Addition reduced to ₹42 lakh (10% of original). Tax demand fell from ₹1.47 crore to ₹14.7 lakh.",
          impact:
            "Saved ₹1.32 crore in tax demand. Client adopted our recommended accounting method prospectively, preventing future disputes.",
        },
        {
          industry: "Manufacturing Unit",
          title: "Transfer Pricing Documentation & Safe Harbour Election",
          challenge:
            "A mid-size manufacturer had ₹28 crore in inter-company transactions with its Singapore subsidiary. The company had no transfer pricing documentation and was at risk of a 2% adjustment penalty.",
          solution:
            "We conducted a thorough FAR (Functions, Assets, Risks) analysis, identified comparable uncontrolled transactions using Prowess database, prepared the master file and local file, and filed Form 3CEB. We also advised the client to elect Safe Harbour under Rule 10TD for eligible IT-enabled services.",
          outcome:
            "Clean transfer pricing assessment with no adjustments. Safe Harbour election reduced compliance cost and eliminated litigation risk on ₹8 crore of eligible transactions.",
          impact:
            "Avoided potential TP addition of ₹2.8 crore and associated penalty. Annual TP compliance cost reduced by 40% through safe harbour.",
        },
        {
          industry: "Senior Professional",
          title: "Foreign Income & DTAA Benefit Claiming for NRI Returnee",
          challenge:
            "A senior executive who returned from the US in FY 2023-24 had salary income in both countries, RSU vesting in the US, and was uncertain about his residential status and DTAA eligibility.",
          solution:
            "We determined his RNOR status for FY 2023-24, computed income attributable to India and the US separately, filed Form 67 to claim foreign tax credit on US taxes paid, and structured the RSU income under Article 15 of the India-US DTAA. We also filed an ITR-2 disclosing all foreign assets in Schedule FA.",
          outcome:
            "Foreign tax credit of ₹6.8 lakh claimed successfully. No double taxation on US salary. Penalty risk on Schedule FA non-disclosure avoided.",
          impact:
            "Net tax saving of ₹6.8 lakh in Year 1. Client now follows a structured annual cross-border tax calendar prepared by our team.",
        },
      ],
    },

    resources: {
      title: "Resources & Tools",
      description:
        "Downloadable templates, checklists, and guides to help you understand and manage your income tax compliance efficiently.",
      tools: [
        {
          name: "Advance Tax Calculator (FY 2025-26)",
          description: "Auto-computes four instalments based on projected income across all heads with old vs new regime comparison.",
          type: "Excel Template",
        },
        {
          name: "TDS Rate Chart AY 2026-27",
          description: "Section-wise TDS rates, threshold limits, and surcharge/cess applicability for all payment categories.",
          type: "PDF Reference Card",
        },
        {
          name: "ITR Checklist — Individuals & HUFs",
          description: "Comprehensive document checklist covering salary slips, Form 16, capital gains statements, foreign assets, and 80C/80D investments.",
          type: "PDF Checklist",
        },
        {
          name: "Capital Gains Computation Sheet",
          description: "LTCG and STCG calculator with CII indexation for FY 2025-26, covering equity, debt MFs, property, and unlisted shares.",
          type: "Excel Template",
        },
      ],
      guides: [
        {
          title: "Complete Guide to New Tax Regime (Section 115BAC) for FY 2025-26",
          topics: ["Slab Rates", "Eligible Deductions", "Regime Comparison", "Switching Rules"],
          readTime: "12 min read",
        },
        {
          title: "TDS Compliance for Businesses: From Deduction to Return Filing",
          topics: ["TDS Sections", "Challan Payment", "Quarterly Returns", "Form 16/16A"],
          readTime: "15 min read",
        },
        {
          title: "Understanding Faceless Assessment & How to Respond",
          topics: ["Faceless Scheme", "Notice Types", "Response Strategy", "Appeal Process"],
          readTime: "10 min read",
        },
        {
          title: "Capital Gains Tax — Property, Shares & Mutual Funds Explained",
          topics: ["LTCG vs STCG", "Indexation", "Section 54/54F", "Grandfathering"],
          readTime: "18 min read",
        },
      ],
    },

    process: {
      title: "Our Compliance Process",
      steps: [
        {
          title: "Data Collection & Review",
          description:
            "We gather all relevant documents — Form 16, bank statements, investment proofs, capital gains statements, Form 26AS, AIS, and TIS — and identify gaps or discrepancies before computation.",
        },
        {
          title: "Computation & Planning",
          description:
            "Our CA team computes income under all applicable heads, evaluates old vs new regime, identifies eligible deductions, and optimises tax liability through lawful planning.",
        },
        {
          title: "Compliance Execution",
          description:
            "We file ITR, deposit advance tax, submit TDS returns, upload audit reports, and respond to any online notices — all within prescribed due dates with confirmation shared with you.",
        },
        {
          title: "Post-Filing Support",
          description:
            "We track refund status, respond to CPC intimations, handle demand notices, and provide year-round advisory so you are never caught off guard by an income tax notice.",
        },
      ],
    },

    faqs: [
      {
        question: "Which ITR form should I file?",
        answer:
          "The correct form depends on your income sources. ITR-1 (Sahaj) is for salaried individuals with income up to ₹50 lakh. ITR-2 covers capital gains and foreign assets. ITR-3 is for business/profession income. ITR-4 (Sugam) is for presumptive income u/s 44AD/44ADA. Companies file ITR-6 and trusts file ITR-7. Our team determines the correct form after reviewing your income profile.",
      },
      {
        question: "What is the difference between old and new tax regime?",
        answer:
          "The old regime has higher slab rates but allows deductions u/s 80C, 80D, HRA, LTA, etc. The new regime (u/s 115BAC) offers lower slab rates but most deductions/exemptions are not available. For FY 2025-26, the new regime is the default. Individuals with significant deductions (80C investments, HRA, home loan interest) may benefit from the old regime. We provide a detailed comparison before your filing.",
      },
      {
        question: "When is a tax audit mandatory?",
        answer:
          "Tax audit u/s 44AB is mandatory for: (1) businesses with turnover exceeding ₹1 crore (₹10 crore if 95% transactions are digital); (2) professionals with gross receipts exceeding ₹50 lakh; (3) persons opting out of presumptive taxation despite eligible turnover; and (4) certain other specified cases. The audit report must be filed by 30 September of the assessment year.",
      },
      {
        question: "I received a notice from the Income Tax Department. What should I do?",
        answer:
          "Do not ignore the notice. Check the section under which it is issued — common notices are u/s 143(1) (intimation), 143(2) (scrutiny), 148 (reassessment), 139(9) (defective return), or 245 (refund adjustment). Each requires a specific response within the stated deadline. Contact us immediately and we will review the notice, prepare a response, and represent you before the AO.",
      },
      {
        question: "What documents are required for ITR filing?",
        answer:
          "Key documents include: Form 16 (from employer), Form 16A (TDS certificates from banks/others), bank account statements, capital gains statements from brokers/AMCs, property sale/purchase documents, investment proofs for 80C/80D, Form 26AS, AIS and TIS from the income tax portal, and PAN/Aadhaar. For business income, add P&L account, balance sheet, GST returns, and loan statements.",
      },
      {
        question: "How is capital gains tax calculated on sale of property?",
        answer:
          "If held for more than 24 months, the gain is Long-Term Capital Gain (LTCG) taxed at 20% with indexation (Cost Inflation Index applied to original purchase price). If held for 24 months or less, it is Short-Term Capital Gain (STCG) taxed at applicable slab rates. Reinvestment in a residential property u/s 54, or in bonds u/s 54EC within prescribed timelines, can reduce or eliminate LTCG. We provide a detailed capital gains computation before you transact.",
      },
      {
        question: "Can I file a revised or updated return after the due date?",
        answer:
          "Yes. A revised return u/s 139(5) can be filed before 31 December of the assessment year to correct errors in the original filing. An updated return (ITR-U) u/s 139(8A) can be filed within 2 years from the end of the relevant assessment year, subject to payment of additional tax of 25% (if filed in Year 1) or 50% (if filed in Year 2) of the additional tax and interest.",
      },
      {
        question: "What is Form 26AS and how does it affect my ITR?",
        answer:
          "Form 26AS is your annual tax statement showing TDS deducted by employers/banks, advance tax paid, self-assessment tax, and high-value transactions reported by third parties. The Income Tax Department now also provides AIS (Annual Information Statement) and TIS (Taxpayer Information Summary) with more granular data including mutual fund purchases, property registrations, and credit card spends. Your ITR must be reconciled with all three before filing to avoid scrutiny.",
      },
    ],

    cta: {
      title: "Ready to File Smart & Stay Compliant?",
      description:
        "Let our expert CA team handle your income tax compliance from end to end — so you focus on growing your business while we ensure you never miss a deadline or pay a rupee more in taxes than required.",
      primaryButton: "Start Your Tax Filing",
      secondaryButton: "Book Free Consultation",
    },
  },
};

// ─────────────────────────────────────────────
//  REGULATORY COMPONENT
// ─────────────────────────────────────────────
const Regulatory = () => {
  const { regulatoryId } = useParams();
  const regulatory = regulatoryData[regulatoryId];
  const [openFaq, setOpenFaq] = useState(null);
  const [activeSection, setActiveSection] = useState("hero");
  const [selectedIndustry, setSelectedIndustry] = useState(0);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "overview", "features", "calendar", "industry", "violations", "cases", "resources", "process", "stats", "faq"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

  if (!regulatory) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4" style={{fontFamily: "'Cormorant Garamond', serif"}}>Regulatory Not Found</h2>
          <Link to="/" className="hover:underline text-sm sm:text-base" style={{color: '#133f77'}}>
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const tableOfContents = [
    { id: "hero", label: "Overview", icon: Home },
    { id: "about", label: "About Service", icon: FileText },
    { id: "overview", label: "Regulatory Framework", icon: BookOpen },
    { id: "features", label: "Key Features", icon: Star },
    { id: "calendar", label: "Compliance Calendar", icon: Calendar },
    { id: "industry", label: "Industry Guidance", icon: Building },
    { id: "violations", label: "Violations & Penalties", icon: AlertTriangle },
    { id: "cases", label: "Case Studies", icon: Target },
    { id: "resources", label: "Resources", icon: Download },
    { id: "process", label: "Our Process", icon: BriefcaseBusiness },
    { id: "faq", label: "FAQ", icon: HelpCircle }
  ];

  const featureIcons = {
    0: FileText,
    1: Building,
    2: BarChart3,
    3: DollarSign,
    4: Shield,
    5: Settings
  };

   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  return (
    <div className="min-h-screen bg-white" style={{fontFamily: "'Poppins', sans-serif"}}>
      
      {/* Hero Section */}
     <section
  className="relative w-full text-white overflow-hidden 
  min-h-[clamp(320px,55vw,600px)] flex items-center"
>
  <div className="absolute inset-0">
    <img
      src={regulatory.hero.image}
      alt="Banner Background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/50"></div>
  </div>

  <div className="absolute inset-0 opacity-5 pointer-events-none">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 35px,
          rgba(255,255,255,.1) 35px,
          rgba(255,255,255,.1) 70px
        )`,
      }}
    ></div>
  </div>

  <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 
  py-12 sm:py-16 md:py-20 lg:py-24">

    <div className="max-w-4xl">

      <div className="mb-6 inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 
      bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
        <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="font-semibold tracking-wide uppercase text-xs sm:text-sm" style={{fontFamily: "'Poppins', sans-serif"}}>
          Premium {regulatoryId?.toUpperCase()} Service
        </span>
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
      font-black mb-6 leading-tight" style={{fontFamily: "'Cormorant Garamond', serif"}}>
        {regulatory.hero.title}
      </h1>

      <p className="text-base sm:text-lg md:text-xl 
      mb-10 leading-relaxed text-white/90 max-w-3xl" style={{fontFamily: "'Poppins', sans-serif"}}>
        {regulatory.hero.subtitle}
      </p>

      <div className="flex flex-col sm:flex-row gap-4">

        <Link to="/contact">
          <button
            className="group w-full sm:w-auto bg-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold 
            hover:bg-black hover:text-white 
            transition-all duration-300 flex items-center 
            justify-center gap-2 shadow-lg text-sm sm:text-base"
            style={{color: '#133f77', fontFamily: "'Poppins', sans-serif"}}
          >
            <span>{regulatory.hero.cta}</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 
            group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>

        <Link to="/contact">
          <button
            className="w-full sm:w-auto border-2 border-white text-white 
            px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold 
            hover:bg-white
            transition-all duration-300 flex items-center 
            justify-center gap-2 text-sm sm:text-base"
            style={{fontFamily: "'Poppins', sans-serif"}}
            onMouseEnter={e => e.currentTarget.style.color='#133f77'}
            onMouseLeave={e => e.currentTarget.style.color='white'}
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Schedule Call</span>
          </button>
        </Link>

      </div>

    </div>
  </div>
</section>


      {/* Mobile Navigation Toggle */}
      <div className="lg:hidden sticky top-0 z-40 bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="py-3 sm:py-4 bg-blue-100 text-white px-4 sm:px-5 mt-5 rounded-lg hover:bg-[#0d3066] transition-colors duration-300 inline-flex items-center gap-2"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" style={{color: '#133f77'}} />}
            <span className="font-bold text-sm sm:text-base" style={{color: '#133f77', fontFamily: "'Poppins', sans-serif"}}>Menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}>
          <div 
            className="fixed left-0 top-0 bottom-0 w-72 xs:w-80 max-w-[85vw] bg-white shadow-2xl overflow-y-auto" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-base sm:text-lg font-black text-black flex items-center gap-2" style={{fontFamily: "'Cormorant Garamond', serif"}}>
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" style={{color: '#133f77'}} />
                  Navigation
                </h3>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} className="text-gray-600" />
                </button>
              </div>
              
              <nav className="space-y-1.5 sm:space-y-2 mb-6" style={{fontFamily: "'Poppins', sans-serif"}}>
                {tableOfContents.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg flex items-center gap-2.5 sm:gap-3 transition-all duration-200 ${
                        activeSection === item.id
                          ? 'text-white font-bold'
                          : 'text-gray-700 hover:bg-blue-50 font-medium'
                      }`}
                      style={activeSection === item.id ? {backgroundColor: '#133f77'} : {}}
                    >
                      <Icon size={16} className="sm:w-[18px] sm:h-[18px] flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{item.label}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Mobile Contact Card */}
              <div className="bg-blue-50 rounded-lg border border-blue-100 text-white rounded-xl p-4 sm:p-6">
                <Mail className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4 bg-blue-200 p-2 rounded-lg" style={{color: '#133f77'}} />
                <h4 className="font-black text-base sm:text-lg mb-2" style={{color: '#133f77', fontFamily: "'Cormorant Garamond', serif"}}>Need Help?</h4>
                <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>
                  Our experts are ready to assist
                </p>
                <Link to='/contact'>
                  <button className="w-full text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-bold hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 border-2 border-transparent"
                    style={{backgroundColor: '#133f77', fontFamily: "'Poppins', sans-serif"}}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor='white'; e.currentTarget.style.color='#133f77'; e.currentTarget.style.borderColor='#133f77'; }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor='#133f77'; e.currentTarget.style.color='white'; e.currentTarget.style.borderColor='transparent'; }}
                  >
                    <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    Contact Us
                  </button>
                </Link>
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-300">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700" style={{fontFamily: "'Poppins', sans-serif"}}>
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>+91 XXXX-XXXXXX</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 xs:py-8 sm:py-12 lg:py-16">
        <div className="flex gap-4 sm:gap-6 lg:gap-10">
          
          {/* Sidebar Navigation - Desktop Only */}
          <aside className="w-64 xl:w-72 flex-shrink-0 hidden lg:block">
            <div className="sticky top-6 space-y-6">
              
              <div className="bg-blue-50 rounded-lg p-5 border border-blue-100 rounded-xl">
                <h3 className="text-base xl:text-lg font-black text-black mb-5 xl:mb-6 flex items-center gap-2" style={{fontFamily: "'Cormorant Garamond', serif"}}>
                  <BookOpen className="w-4 h-4 xl:w-5 xl:h-5" style={{color: '#133f77'}} />
                  Navigation
                </h3>
                <nav className="space-y-1.5 xl:space-y-2" style={{fontFamily: "'Poppins', sans-serif"}}>
                  {tableOfContents.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left px-3 xl:px-4 py-2.5 xl:py-3 rounded-lg flex items-center gap-2.5 xl:gap-3 transition-all duration-200 ${
                          activeSection === item.id
                            ? 'text-white font-bold'
                            : 'text-gray-700 hover:bg-blue-50 font-medium'
                        }`}
                        style={activeSection === item.id ? {backgroundColor: '#133f77'} : {}}
                      >
                        <Icon size={16} className="xl:w-[18px] xl:h-[18px] flex-shrink-0" />
                        <span className="text-xs xl:text-sm">{item.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Contact Card */}
              <div className="bg-blue-50 rounded-lg border border-blue-100 text-white rounded-xl p-5 xl:p-6">
                <Mail className="w-9 h-9 xl:w-10 xl:h-10 mb-3 xl:mb-4 bg-blue-200 p-2 rounded-lg" style={{color: '#133f77'}} />
                <h4 className="font-black text-base xl:text-lg mb-2" style={{color: '#133f77', fontFamily: "'Cormorant Garamond', serif"}}>Need Help?</h4>
                <p className="text-xs xl:text-sm text-gray-700 mb-3 xl:mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>
                  Our experts are ready to assist
                </p>
                <Link to='/contact'>
                  <button className="w-full text-white px-3 xl:px-4 py-2.5 xl:py-3 rounded-lg text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 border-2 border-transparent"
                    style={{backgroundColor: '#133f77', fontFamily: "'Poppins', sans-serif"}}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor='white'; e.currentTarget.style.color='#133f77'; e.currentTarget.style.borderColor='#133f77'; }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor='#133f77'; e.currentTarget.style.color='white'; e.currentTarget.style.borderColor='transparent'; }}
                  >
                    <Mail className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
                    Contact Us
                  </button>
                </Link>
                <div className="mt-3 xl:mt-4 pt-3 xl:pt-4 border-t border-gray-300">
                  <div className="flex items-center gap-2 text-xs xl:text-sm text-gray-700" style={{fontFamily: "'Poppins', sans-serif"}}>
                    <Phone className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
                    <span>+91 XXXX-XXXXXX</span>
                  </div>
                </div>
              </div>

            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            
            {/* About Section */}
            <section id="about" className="mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20">
              <div className="border-2 border-blue-100 rounded-xl p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 bg-white">
                <div className="flex items-center gap-2.5 xs:gap-3 mb-3 xs:mb-4 sm:mb-6">
                  <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#133f77'}}>
                    <FileText className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black text-black" style={{fontFamily: "'Cormorant Garamond', serif"}}>
                    {regulatory.about.title}
                  </h2>
                </div>
                
                <p className="text-gray-600 mb-4 xs:mb-5 sm:mb-6 md:mb-8 lg:mb-10 leading-relaxed text-sm xs:text-base sm:text-lg" style={{fontFamily: "'Poppins', sans-serif"}}>
                  {regulatory.about.description}
                </p>
                
                <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
                  {regulatory.about.highlights.map((highlight, index) => (
                    <div 
                      key={index} 
                      className="group border-2 rounded-lg p-3 xs:p-4 sm:p-6 bg-blue-50 border-blue-100 hover:shadow-lg transition-all duration-300"
                      onMouseEnter={e => e.currentTarget.style.borderColor='#133f77'}
                      onMouseLeave={e => e.currentTarget.style.borderColor=''}
                    >
                      <div className="flex items-start gap-2.5 xs:gap-3 sm:gap-4">
                        <CheckCircle className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5 xs:mt-1" style={{color: '#133f77'}} />
                        <p className="text-gray-800 font-semibold text-xs xs:text-sm sm:text-base leading-relaxed" style={{fontFamily: "'Poppins', sans-serif"}}>
                          {highlight}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Regulatory Overview Section */}
            {regulatory.regulatoryOverview && (
              <section id="overview" className="mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20">
                <div className="bg-blue-50 rounded-lg p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 border-2 border-blue-200">
                  <div className="flex items-center gap-2.5 xs:gap-3 mb-3 xs:mb-4 sm:mb-6">
                    <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#133f77'}}>
                      <BookOpen className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black text-black" style={{fontFamily: "'Cormorant Garamond', serif"}}>
                      {regulatory.regulatoryOverview.title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-700 mb-4 xs:mb-5 sm:mb-6 md:mb-8 lg:mb-10 leading-relaxed text-sm xs:text-base sm:text-lg" style={{fontFamily: "'Poppins', sans-serif"}}>
                    {regulatory.regulatoryOverview.introduction}
                  </p>

                  <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
                    {regulatory.regulatoryOverview.keyAspects.map((aspect, index) => (
                      <div 
                        key={index} 
                        className="bg-white border-2 border-blue-100 rounded-lg p-3 xs:p-4 sm:p-6 transition-all duration-300"
                        onMouseEnter={e => e.currentTarget.style.borderColor='#133f77'}
                        onMouseLeave={e => e.currentTarget.style.borderColor=''}
                      >
                        <h3 className="text-base xs:text-lg sm:text-xl font-black mb-2 xs:mb-3 text-black" style={{fontFamily: "'Cormorant Garamond', serif"}}>
                          {aspect.title}
                        </h3>
                        <p className="text-gray-600 mb-3 xs:mb-4 leading-relaxed text-xs xs:text-sm sm:text-base" style={{fontFamily: "'Poppins', sans-serif"}}>
                          {aspect.description}
                        </p>
                        <div className="space-y-1.5 xs:space-y-2">
                          {aspect.regulations.map((reg, idx) => (
                            <div key={idx} className="flex items-start gap-1.5 xs:gap-2 text-[11px] xs:text-xs sm:text-sm" style={{fontFamily: "'Poppins', sans-serif"}}>
                              <ChevronRight className="w-3.5 h-3.5 xs:w-4 xs:h-4 flex-shrink-0 mt-0.5" style={{color: '#133f77'}} />
                              <span className="text-gray-600">{reg}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Features Section */}
            <section id="features" className="mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20">
              <div className="text-center mb-6 xs:mb-7 sm:mb-8 md:mb-12">
                <div className="inline-flex items-center gap-1.5 xs:gap-2 px-3 xs:px-4 sm:px-6 py-1.5 xs:py-2 bg-blue-50 rounded-full mb-3 xs:mb-4">
                  <Star className="w-3.5 h-3.5 xs:w-4 xs:h-4" style={{color: '#133f77'}} />
                  <span className="font-bold text-[10px] xs:text-xs sm:text-sm text-black uppercase tracking-wide" style={{fontFamily: "'Poppins', sans-serif"}}>
                    Our Services
                  </span>
                </div>
                <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-black mb-3 xs:mb-4 px-4" style={{fontFamily: "'Cormorant Garamond', serif"}}>
                  Comprehensive Solutions
                </h2>
                <p className="text-gray-600 text-sm xs:text-base sm:text-lg max-w-2xl mx-auto px-4" style={{fontFamily: "'Poppins', sans-serif"}}>
                  End-to-end compliance services tailored to your needs
                </p>
              </div>
              
              <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-6">
                {regulatory.detailedFeatures.map((feature, index) => {
                  const FeatureIcon = featureIcons[index] || Settings;
                  return (
                    <div 
                      key={index} 
                      className="group bg-blue-50 border border-blue-100 border-2 rounded-xl p-4 xs:p-5 sm:p-6 md:p-8 hover:shadow-xl transition-all duration-300"
                      onMouseEnter={e => e.currentTarget.style.borderColor='#133f77'}
                      onMouseLeave={e => e.currentTarget.style.borderColor=''}
                    >
                      <div className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-3 xs:mb-4 sm:mb-6 group-hover:text-white transition-all duration-300"
                        onMouseEnter={e => { e.currentTarget.style.backgroundColor='#133f77'; }}
                        onMouseLeave={e => { e.currentTarget.style.backgroundColor=''; }}
                      >
                        <FeatureIcon className="w-5 h-5 xs:w-5.5 xs:h-5.5 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-all duration-300" style={{color: '#133f77'}} />
                      </div>
                      
                      <h3 className="text-base xs:text-lg sm:text-xl font-black text-black mb-2 xs:mb-3" style={{fontFamily: "'Cormorant Garamond', serif"}}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-3 xs:mb-4 text-xs xs:text-sm sm:text-base" style={{fontFamily: "'Poppins', sans-serif"}}>
                        {feature.description}
                      </p>
                     
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Compliance Calendar Section */}
            {regulatory.complianceCalendar && (
              <section id="calendar" className="mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20">
                <div className="border-2 border-gray-200 rounded-xl p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 bg-white">
                  <div className="flex items-center gap-2.5 xs:gap-3 mb-3 xs:mb-4 sm:mb-6">
                    <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#133f77'}}>
                      <Calendar className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black text-black" style={{fontFamily: "'Cormorant Garamond', serif"}}>
                      {regulatory.complianceCalendar.title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-600 mb-4 xs:mb-5 sm:mb-6 md:mb-8 lg:mb-10 leading-relaxed text-sm xs:text-base sm:text-lg" style={{fontFamily: "'Poppins', sans-serif"}}>
                    {regulatory.complianceCalendar.description}
                  </p>

                  <div className="space-y-3 xs:space-y-4 sm:space-y-6">
                    {regulatory.complianceCalendar.deadlines.map((deadline, index) => (
                      <div key={index} className="border-2 border-gray-200 rounded-lg overflow-hidden">
                        <div className="text-white px-3 xs:px-4 sm:px-6 py-2.5 xs:py-3 sm:py-4" style={{backgroundColor: '#133f77'}}>
                          <h3 className="font-black text-sm xs:text-base sm:text-lg" style={{fontFamily: "'Cormorant Garamond', serif"}}>{deadline.period}</h3>
                        </div>
                        
                        <div className="p-3 xs:p-4 sm:p-6 space-y-2.5 xs:space-y-3">
                          {deadline.filings.map((filing, idx) => (
                            <div key={idx} className="flex flex-col sm:flex-row items-start gap-2.5 xs:gap-3 sm:gap-4 p-3 xs:p-4 border border-gray-200 rounded-lg transition-all duration-300"
                              onMouseEnter={e => e.currentTarget.style.borderColor='#133f77'}
                              onMouseLeave={e => e.currentTarget.style.borderColor=''}
                            >
                              <div className="flex-shrink-0 w-7 h-7 xs:w-8 xs:h-8 bg-black text-white rounded-lg flex items-center justify-center font-bold text-xs xs:text-sm">
                                {idx + 1}
                              </div>
                              <div className="flex-1 w-full">
                                <div className="font-black text-black mb-1 text-xs xs:text-sm sm:text-base" style={{fontFamily: "'Cormorant Garamond', serif"}}>{filing.form}</div>
                                <div className="text-gray-600 text-[11px] xs:text-xs sm:text-sm mb-2" style={{fontFamily: "'Poppins', sans-serif"}}>{filing.description}</div>
                                <div className="flex items-center gap-1.5 xs:gap-2 text-[11px] xs:text-xs sm:text-sm font-bold" style={{color: '#133f77', fontFamily: "'Poppins', sans-serif"}}>
                                  <Clock className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
                                  {filing.dueDate}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Industry Guidance Section */}
            {regulatory.industryGuidance && (
              <section id="industry" className="mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20">
                <div className="border-2 border-gray-200 rounded-xl p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 bg-white">
                  <div className="flex items-center gap-2.5 xs:gap-3 mb-3 xs:mb-4 sm:mb-6">
                    <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#133f77'}}>
                      <Building className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black text-black" style={{fontFamily: "'Cormorant Garamond', serif"}}>
                      {regulatory.industryGuidance.title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-600 mb-4 xs:mb-5 sm:mb-6 md:mb-8 lg:mb-10 leading-relaxed text-sm xs:text-base sm:text-lg" style={{fontFamily: "'Poppins', sans-serif"}}>
                    {regulatory.industryGuidance.description}
                  </p>

                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 xs:mb-5 sm:mb-6 md:mb-8">
                    {regulatory.industryGuidance.sectors.map((sector, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedIndustry(index)}
                        className="px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-lg font-bold transition-all duration-300 border-2 text-xs xs:text-sm sm:text-base"
                        style={{
                          backgroundColor: selectedIndustry === index ? '#133f77' : 'white',
                          color: selectedIndustry === index ? 'white' : 'black',
                          borderColor: selectedIndustry === index ? '#133f77' : '#e5e7eb',
                          fontFamily: "'Poppins', sans-serif"
                        }}
                        onMouseEnter={e => { if (selectedIndustry !== index) e.currentTarget.style.borderColor='#133f77'; }}
                        onMouseLeave={e => { if (selectedIndustry !== index) e.currentTarget.style.borderColor='#e5e7eb'; }}
                      >
                        {sector.name}
                      </button>
                    ))}
                  </div>

                  <div className="border-2 border-gray-200 rounded-lg p-4 xs:p-5 sm:p-6 md:p-8">
                    <h3 className="text-xl xs:text-2xl sm:text-3xl font-black text-black mb-3 xs:mb-4 sm:mb-6" style={{fontFamily: "'Cormorant Garamond', serif"}}>
                      {regulatory.industryGuidance.sectors[selectedIndustry].name}
                    </h3>

                    <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
                      <div>
                        <h4 className="text-base xs:text-lg sm:text-xl font-black text-black mb-3 xs:mb-4 flex items-center gap-2" style={{fontFamily: "'Cormorant Garamond', serif"}}>
                          <AlertTriangle className="w-4 h-4 xs:w-5 xs:h-5" style={{color: '#133f77'}} />
                          Key Challenges
                        </h4>
                        <ul className="space-y-2.5 xs:space-y-3">
                          {regulatory.industryGuidance.sectors[selectedIndustry].challenges.map((challenge, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 xs:gap-3 p-2.5 xs:p-3 border border-gray-200 rounded-lg">
                              <ChevronRight className="w-4 h-4 xs:w-5 xs:h-5 flex-shrink-0 mt-0.5 xs:mt-1" style={{color: '#133f77'}} />
                              <span className="text-gray-700 text-xs xs:text-sm sm:text-base" style={{fontFamily: "'Poppins', sans-serif"}}>{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-base xs:text-lg sm:text-xl font-black text-black mb-3 xs:mb-4 flex items-center gap-2" style={{fontFamily: "'Cormorant Garamond', serif"}}>
                          <Lightbulb className="w-4 h-4 xs:w-5 xs:h-5" style={{color: '#133f77'}} />
                          Our Solutions
                        </h4>
                        <ul className="space-y-2.5 xs:space-y-3">
                          {regulatory.industryGuidance.sectors[selectedIndustry].solutions.map((solution, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 xs:gap-3 p-2.5 xs:p-3 border border-gray-200 rounded-lg">
                              <CheckCircle className="w-4 h-4 xs:w-5 xs:h-5 flex-shrink-0 mt-0.5 xs:mt-1" style={{color: '#133f77'}} />
                              <span className="text-gray-700 text-xs xs:text-sm sm:text-base" style={{fontFamily: "'Poppins', sans-serif"}}>{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Violations & Penalties Section */}
            {regulatory.violations && (
              <section id="violations" className="mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20">
                <div className="bg-white border border-gray-200 text-gray-900 rounded-xl p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 border-2">
                  <div className="flex items-center gap-2.5 xs:gap-3 mb-3 xs:mb-4 sm:mb-6">
                    <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#133f77'}}>
                      <AlertTriangle className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black text-black" style={{fontFamily: "'Cormorant Garamond', serif"}}>
                      {regulatory.violations.title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-700 mb-4 xs:mb-5 sm:mb-6 md:mb-8 lg:mb-10 leading-relaxed text-sm xs:text-base sm:text-lg" style={{fontFamily: "'Poppins', sans-serif"}}>
                    {regulatory.violations.description}
                  </p>

                  <div className="space-y-3 xs:space-y-4">
                    {regulatory.violations.commonViolations.map((violation, index) => (
                      <div key={index} className="border-2 border-blue-100 bg-blue-50 rounded-lg p-3 xs:p-4 sm:p-6 transition-all duration-300"
                        onMouseEnter={e => e.currentTarget.style.borderColor='#133f77'}
                        onMouseLeave={e => e.currentTarget.style.borderColor=''}
                      >
                        <div className="flex flex-col sm:flex-row flex-wrap items-start gap-3 xs:gap-4 mb-3 xs:mb-4">
                          <div className="flex-1 min-w-[200px]">
                            <h3 className="text-base xs:text-lg sm:text-xl font-black text-gray-800 mb-2" style={{fontFamily: "'Cormorant Garamond', serif"}}>{violation.violation}</h3>
                            <p className="text-gray-700 text-xs xs:text-sm sm:text-base" style={{fontFamily: "'Poppins', sans-serif"}}>{violation.penalty}</p>
                          </div>
                          <div className={`px-2.5 xs:px-3 sm:px-4 py-1.5 xs:py-2 rounded-lg font-bold text-[11px] xs:text-xs sm:text-sm ${
                            violation.impact === 'Critical' ? 'bg-red-600 text-white' :
                            violation.impact === 'High' ? 'bg-orange-500 text-white' :
                            'bg-yellow-500 text-gray-900'
                          }`} style={{fontFamily: "'Poppins', sans-serif"}}>
                            {violation.impact} Impact
                          </div>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-3 xs:p-4">
                          <div className="flex items-start gap-2">
                            <Shield className="w-4 h-4 xs:w-5 xs:h-5 flex-shrink-0 mt-0.5 xs:mt-1" style={{color: '#133f77'}} />
                            <div>
                              <div className="font-bold text-gray-700 mb-1 text-xs xs:text-sm sm:text-base" style={{fontFamily: "'Cormorant Garamond', serif"}}>Prevention Strategy:</div>
                              <div className="text-gray-600 text-xs xs:text-sm sm:text-base" style={{fontFamily: "'Poppins', sans-serif"}}>{violation.prevention}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {regulatory.violations.compoundingProcess && (
                    <div className="mt-4 xs:mt-5 sm:mt-6 md:mt-8 bg-white text-black rounded-lg p-4 xs:p-5 sm:p-6 md:p-8 border-2 border-gray-300">
                      <h3 className="text-lg xs:text-xl sm:text-2xl font-black mb-3 xs:mb-4 sm:mb-6" style={{fontFamily: "'Cormorant Garamond', serif"}}>{regulatory.violations.compoundingProcess.title}</h3>
                      <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
                        <div>
                          <h4 className="font-bold text-black mb-3 xs:mb-4 text-sm xs:text-base sm:text-lg" style={{fontFamily: "'Cormorant Garamond', serif"}}>Process Steps:</h4>
                          <ol className="space-y-2.5 xs:space-y-3">
                            {regulatory.violations.compoundingProcess.steps.map((step, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 xs:gap-3">
                                <div className="flex-shrink-0 w-6 h-6 xs:w-7 xs:h-7 text-white rounded-full flex items-center justify-center text-xs xs:text-sm font-bold" style={{backgroundColor: '#133f77'}}>
                                  {idx + 1}
                                </div>
                                <span className="text-gray-700 mt-0.5 xs:mt-1 text-xs xs:text-sm sm:text-base" style={{fontFamily: "'Poppins', sans-serif"}}>{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-3 xs:mb-4 text-sm xs:text-base sm:text-lg" style={{fontFamily: "'Cormorant Garamond', serif"}}>Benefits:</h4>
                          <ul className="space-y-2.5 xs:space-y-3">
                            {regulatory.violations.compoundingProcess.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 xs:gap-3">
                                <CheckCircle className="w-4 h-4 xs:w-5 xs:h-5 flex-shrink-0 mt-0.5 xs:mt-1" style={{color: '#133f77'}} />
                                <span className="text-gray-700 text-xs xs:text-sm sm:text-base" style={{fontFamily: "'Poppins', sans-serif"}}>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-3 xs:mt-4 p-3 xs:p-4 bg-blue-50 rounded-lg">
                            <div className="font-bold text-black text-xs xs:text-sm sm:text-base" style={{fontFamily: "'Cormorant Garamond', serif"}}>Timeline:</div>
                            <div className="text-gray-700 text-xs xs:text-sm sm:text-base" style={{fontFamily: "'Poppins', sans-serif"}}>{regulatory.violations.compoundingProcess.timeline}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Case Studies Section */}
            {regulatory.caseStudies && (
              <section id="cases" className="mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20">
                <div className="border-2 border-gray-200 rounded-xl p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 bg-white">
                  <div className="flex items-center gap-2.5 xs:gap-3 mb-3 xs:mb-4 sm:mb-6">
                    <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#133f77'}}>
                      <Target className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black text-black" style={{fontFamily: "'Cormorant Garamond', serif"}}>
                      {regulatory.caseStudies.title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-600 mb-4 xs:mb-5 sm:mb-6 md:mb-8 lg:mb-10 leading-relaxed text-sm xs:text-base sm:text-lg" style={{fontFamily: "'Poppins', sans-serif"}}>
                    {regulatory.caseStudies.description}
                  </p>

                  <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 mb-4 xs:mb-5 sm:mb-6 md:mb-8">
                    {regulatory.caseStudies.studies.map((study, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedCaseStudy(index)}
                        className="text-left p-3 xs:p-4 sm:p-6 rounded-lg transition-all duration-300 border-2"
                        style={{
                          backgroundColor: selectedCaseStudy === index ? '#133f77' : 'white',
                          color: selectedCaseStudy === index ? 'white' : 'black',
                          borderColor: selectedCaseStudy === index ? '#133f77' : '#e5e7eb',
                        }}
                        onMouseEnter={e => { if (selectedCaseStudy !== index) e.currentTarget.style.borderColor='#133f77'; }}
                        onMouseLeave={e => { if (selectedCaseStudy !== index) e.currentTarget.style.borderColor='#e5e7eb'; }}
                      >
                        <div className="text-[11px] xs:text-xs sm:text-sm font-bold mb-1.5 xs:mb-2" style={{
                          color: selectedCaseStudy === index ? 'white' : '#133f77',
                          fontFamily: "'Poppins', sans-serif"
                        }}>
                          {study.industry}
                        </div>
                        <div className="font-black text-sm xs:text-base sm:text-lg" style={{fontFamily: "'Cormorant Garamond', serif"}}>{study.title}</div>
                      </button>
                    ))}
                  </div>

                  <div className="border-2 border-gray-200 rounded-lg p-4 xs:p-5 sm:p-6 md:p-8">
                    <div className="mb-4 xs:mb-5 sm:mb-6">
                      <div className="inline-block px-2.5 xs:px-3 sm:px-4 py-1.5 xs:py-2 text-white rounded-lg font-bold text-[11px] xs:text-xs sm:text-sm mb-2.5 xs:mb-3" style={{backgroundColor: '#133f77', fontFamily: "'Poppins', sans-serif"}}>
                        {regulatory.caseStudies.studies[selectedCaseStudy].industry}
                      </div>
                      <h3 className="text-xl xs:text-2xl sm:text-3xl font-black text-black mb-3 xs:mb-4" style={{fontFamily: "'Cormorant Garamond', serif"}}>
                        {regulatory.caseStudies.studies[selectedCaseStudy].title}
                      </h3>
                    </div>

                    <div className="space-y-3 xs:space-y-4 sm:space-y-6">
                      <div className="bg-gray-50 rounded-lg p-3 xs:p-4 sm:p-6 border-2 border-gray-200">
                        <h4 className="font-black text-black mb-2.5 xs:mb-3 flex items-center gap-2 text-sm xs:text-base sm:text-lg" style={{fontFamily: "'Cormorant Garamond', serif"}}>
                          <AlertTriangle className="w-4 h-4 xs:w-5 xs:h-5" style={{color: '#133f77'}} />
                          The Challenge
                        </h4>
                        <p className="text-gray-700 leading-relaxed text-xs xs:text-sm sm:text-base" style={{fontFamily: "'Poppins', sans-serif"}}>{regulatory.caseStudies.studies[selectedCaseStudy].challenge}</p>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-3 xs:p-4 sm:p-6 border-2 border-gray-200">
                        <h4 className="font-black text-black mb-2.5 xs:mb-3 flex items-center gap-2 text-sm xs:text-base sm:text-lg" style={{fontFamily: "'Cormorant Garamond', serif"}}>
                          <Lightbulb className="w-4 h-4 xs:w-5 xs:h-5" style={{color: '#133f77'}} />
                          Our Solution
                        </h4>
                        <p className="text-gray-700 leading-relaxed text-xs xs:text-sm sm:text-base" style={{fontFamily: "'Poppins', sans-serif"}}>{regulatory.caseStudies.studies[selectedCaseStudy].solution}</p>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-3 xs:p-4 sm:p-6 border-2 border-gray-200">
                        <h4 className="font-black text-black mb-2.5 xs:mb-3 flex items-center gap-2 text-sm xs:text-base sm:text-lg" style={{fontFamily: "'Cormorant Garamond', serif"}}>
                          <CheckCircle className="w-4 h-4 xs:w-5 xs:h-5" style={{color: '#133f77'}} />
                          Outcome
                        </h4>
                        <p className="text-gray-700 leading-relaxed text-xs xs:text-sm sm:text-base" style={{fontFamily: "'Poppins', sans-serif"}}>{regulatory.caseStudies.studies[selectedCaseStudy].outcome}</p>
                      </div>

                      <div className="rounded-lg p-3 xs:p-4 sm:p-6 text-white border-2" style={{backgroundColor: '#133f77', borderColor: '#133f77'}}>
                        <h4 className="font-black mb-1.5 xs:mb-2 flex items-center gap-2 text-sm xs:text-base sm:text-lg" style={{fontFamily: "'Cormorant Garamond', serif"}}>
                          <TrendingUp className="w-4 h-4 xs:w-5 xs:h-5" />
                          Business Impact
                        </h4>
                        <p className="leading-relaxed text-xs xs:text-sm sm:text-base" style={{fontFamily: "'Poppins', sans-serif"}}>{regulatory.caseStudies.studies[selectedCaseStudy].impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Resources Section */}
            {regulatory.resources && (
              <section id="resources" className="mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20">
                <div className="border-2 border-gray-200 rounded-xl p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 bg-white">
                  <div className="flex items-center gap-2.5 xs:gap-3 mb-3 xs:mb-4 sm:mb-6">
                    <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#133f77'}}>
                      <Download className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black text-black" style={{fontFamily: "'Cormorant Garamond', serif"}}>
                      {regulatory.resources.title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-600 mb-4 xs:mb-5 sm:mb-6 md:mb-8 lg:mb-10 leading-relaxed text-sm xs:text-base sm:text-lg" style={{fontFamily: "'Poppins', sans-serif"}}>
                    {regulatory.resources.description}
                  </p>

                  <div className="mb-6 xs:mb-7 sm:mb-8 md:mb-10">
                    <h3 className="text-lg xs:text-xl sm:text-2xl font-black text-black mb-3 xs:mb-4 sm:mb-6" style={{fontFamily: "'Cormorant Garamond', serif"}}>Tools & Templates</h3>
                    <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
                      {regulatory.resources.tools.map((tool, index) => (
                        <div key={index} className="border-2 border-gray-200 rounded-lg p-3 xs:p-4 sm:p-6 transition-all duration-300 group"
                          onMouseEnter={e => e.currentTarget.style.borderColor='#133f77'}
                          onMouseLeave={e => e.currentTarget.style.borderColor=''}
                        >
                          <div className="flex items-start gap-2.5 xs:gap-3 sm:gap-4">
                            <div className="w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0"
                              onMouseEnter={e => e.currentTarget.style.backgroundColor='#133f77'}
                              onMouseLeave={e => e.currentTarget.style.backgroundColor=''}
                            >
                              <Download className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 transition-all duration-300" style={{color: '#133f77'}} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-black text-sm xs:text-base sm:text-lg text-black mb-1.5 xs:mb-2" style={{fontFamily: "'Cormorant Garamond', serif"}}>{tool.name}</h4>
                              <p className="text-gray-600 text-[11px] xs:text-xs sm:text-sm mb-2 xs:mb-3" style={{fontFamily: "'Poppins', sans-serif"}}>{tool.description}</p>
                              <div className="flex items-center justify-between gap-2">
                                <span className="text-[10px] xs:text-xs font-bold" style={{color: '#133f77', fontFamily: "'Poppins', sans-serif"}}>{tool.type}</span>
                                <button className="flex items-center gap-1.5 xs:gap-2 font-bold text-[11px] xs:text-xs sm:text-sm" style={{color: '#133f77', fontFamily: "'Poppins', sans-serif"}}>
                                  <Download className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4" />
                                  Download
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg xs:text-xl sm:text-2xl font-black text-black mb-3 xs:mb-4 sm:mb-6" style={{fontFamily: "'Cormorant Garamond', serif"}}>Comprehensive Guides</h3>
                    <div className="space-y-3 xs:space-y-4">
                      {regulatory.resources.guides.map((guide, index) => (
                        <div key={index} className="border-2 border-gray-200 rounded-lg p-3 xs:p-4 sm:p-6 transition-all duration-300"
                          onMouseEnter={e => e.currentTarget.style.borderColor='#133f77'}
                          onMouseLeave={e => e.currentTarget.style.borderColor=''}
                        >
                          <div className="flex flex-col sm:flex-row items-start justify-between gap-3 xs:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-black text-base xs:text-lg sm:text-xl text-black mb-2 xs:mb-3" style={{fontFamily: "'Cormorant Garamond', serif"}}>{guide.title}</h4>
                              <div className="flex flex-wrap gap-1.5 xs:gap-2 mb-2 xs:mb-3">
                                {guide.topics.map((topic, idx) => (
                                  <span key={idx} className="px-2 xs:px-3 py-0.5 xs:py-1 bg-blue-50 text-gray-700 rounded-full text-[10px] xs:text-xs font-bold border border-gray-200" style={{fontFamily: "'Poppins', sans-serif"}}>
                                    {topic}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="flex flex-col items-start sm:items-end gap-1.5 xs:gap-2 w-full sm:w-auto">
                              <div className="text-[11px] xs:text-xs sm:text-sm text-gray-500 flex items-center gap-1" style={{fontFamily: "'Poppins', sans-serif"}}>
                                <Clock className="w-3 h-3 xs:w-3.5 xs:h-3.5" />
                                {guide.readTime}
                              </div>
                              <button className="flex items-center gap-1.5 xs:gap-2 font-bold text-xs xs:text-sm" style={{color: '#133f77', fontFamily: "'Poppins', sans-serif"}}>
                                Read
                                <ExternalLink className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Process Section */}
            <section id="process" className="mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20">
              <div className="text-center mb-6 xs:mb-7 sm:mb-8 md:mb-12">
                <div className="inline-flex items-center gap-1.5 xs:gap-2 px-3 xs:px-4 sm:px-6 py-1.5 xs:py-2 bg-blue-50 rounded-full mb-3 xs:mb-4">
                  <Briefcase className="w-3.5 h-3.5 xs:w-4 xs:h-4" style={{color: '#133f77'}} />
                  <span className="font-bold text-[10px] xs:text-xs sm:text-sm text-black uppercase tracking-wide" style={{fontFamily: "'Poppins', sans-serif"}}>
                    Our Methodology
                  </span>
                </div>
                <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-black mb-3 xs:mb-4 px-4" style={{fontFamily: "'Cormorant Garamond', serif"}}>
                  {regulatory.process.title}
                </h2>
                <p className="text-gray-600 text-sm xs:text-base sm:text-lg max-w-2xl mx-auto px-4" style={{fontFamily: "'Poppins', sans-serif"}}>
                  Our proven four-step approach ensures seamless compliance
                </p>
              </div>
              
              <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-6">
                {regulatory.process.steps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="bg-white border-2 border-gray-200 rounded-xl p-4 xs:p-5 sm:p-6 md:p-8 hover:shadow-xl transition-all duration-300 group h-full"
                      onMouseEnter={e => e.currentTarget.style.borderColor='#133f77'}
                      onMouseLeave={e => e.currentTarget.style.borderColor=''}
                    >
                      <div className="w-12 h-12 xs:w-13 xs:h-13 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-100 rounded-lg flex items-center justify-center font-black text-lg xs:text-xl sm:text-2xl mb-3 xs:mb-4 sm:mb-6 group-hover:text-white transition-all duration-300"
                        style={{color: '#133f77'}}
                        onMouseEnter={e => { e.currentTarget.style.backgroundColor='#133f77'; e.currentTarget.style.color='white'; }}
                        onMouseLeave={e => { e.currentTarget.style.backgroundColor=''; e.currentTarget.style.color='#133f77'; }}
                      >
                        {index + 1}
                      </div>
                      <h3 className="text-base xs:text-lg sm:text-xl font-black text-black mb-2 xs:mb-3" style={{fontFamily: "'Cormorant Garamond', serif"}}>{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-xs xs:text-sm sm:text-base" style={{fontFamily: "'Poppins', sans-serif"}}>{step.description}</p>
                    </div>
                    
                    {index < regulatory.process.steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 xl:-right-5 transform -translate-y-1/2 z-10">
                        <ChevronRight className="w-5 h-5 xl:w-6 xl:h-6" style={{color: '#133f77'}} />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 xs:mt-7 sm:mt-8 md:mt-10 text-white rounded-xl p-5 xs:p-6 sm:p-8 lg:p-10 text-center" style={{backgroundColor: '#133f77'}}>
                <p className="mb-3 xs:mb-4 sm:mb-6 text-base xs:text-lg sm:text-xl font-medium" style={{fontFamily: "'Poppins', sans-serif"}}>Ready to experience our proven compliance process?</p>
                <button className="bg-white px-6 xs:px-7 sm:px-8 md:px-10 py-2.5 xs:py-3 sm:py-4 rounded-lg font-black hover:bg-black hover:text-white transition-all duration-300 inline-flex items-center gap-2 sm:gap-3 text-sm xs:text-base"
                  style={{color: '#133f77', fontFamily: "'Cormorant Garamond', serif"}}
                >
                  Start Your Journey
                  <Rocket className="w-4 h-4 xs:w-5 xs:h-5" />
                </button>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20">
              <div className="text-center mb-6 xs:mb-7 sm:mb-8 md:mb-12">
                <div className="inline-flex items-center gap-1.5 xs:gap-2 px-3 xs:px-4 sm:px-6 py-1.5 xs:py-2 bg-blue-50 rounded-full mb-3 xs:mb-4">
                  <HelpCircle className="w-3.5 h-3.5 xs:w-4 xs:h-4" style={{color: '#133f77'}} />
                  <span className="font-bold text-[10px] xs:text-xs sm:text-sm text-black uppercase tracking-wide" style={{fontFamily: "'Poppins', sans-serif"}}>
                    Common Questions
                  </span>
                </div>
                <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-black mb-3 xs:mb-4 px-4" style={{fontFamily: "'Cormorant Garamond', serif"}}>
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-600 text-sm xs:text-base sm:text-lg max-w-2xl mx-auto px-4" style={{fontFamily: "'Poppins', sans-serif"}}>
                  Everything you need to know about our services
                </p>
              </div>
              
              <div className="space-y-3 xs:space-y-4 max-w-4xl mx-auto">
                {regulatory.faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
                    onMouseEnter={e => e.currentTarget.style.borderColor='#133f77'}
                    onMouseLeave={e => e.currentTarget.style.borderColor=''}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-4 xs:px-5 sm:px-6 md:px-8 py-3 xs:py-4 sm:py-6 text-left bg-white hover:bg-gray-50 transition flex items-center justify-between group"
                    >
                      <span className="font-black text-sm xs:text-base sm:text-lg text-black pr-3 xs:pr-4" style={{fontFamily: "'Cormorant Garamond', serif"}}>{faq.question}</span>
                      <div className={`flex-shrink-0 w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${openFaq === index ? 'rotate-180 bg-black' : ''}`}
                        style={openFaq !== index ? {backgroundColor: '#133f77'} : {}}
                      >
                        <ChevronRight className="text-white transform rotate-90 w-4 h-4 xs:w-5 xs:h-5" />
                      </div>
                    </button>
                    {openFaq === index && (
                      <div className="px-4 xs:px-5 sm:px-6 md:px-8 py-3 xs:py-4 sm:py-6 bg-gray-50 border-t-2 border-gray-200">
                        <p className="text-gray-700 leading-relaxed text-xs xs:text-sm sm:text-base" style={{fontFamily: "'Poppins', sans-serif"}}>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Final CTA Section */}
            <section className="text-white rounded-xl p-5 xs:p-6 sm:p-8 md:p-10 lg:p-12 text-center" style={{backgroundColor: '#133f77'}}>
              <div className="max-w-3xl mx-auto">
                <h2 className="text-xl xs:text-2xl sm:text-3xl font-black mb-3 xs:mb-4 sm:mb-6" style={{fontFamily: "'Cormorant Garamond', serif"}}>{regulatory.cta.title}</h2>
                <p className="mb-5 xs:mb-6 sm:mb-8 lg:mb-10 text-base xs:text-lg sm:text-xl leading-relaxed text-white/90" style={{fontFamily: "'Poppins', sans-serif"}}>
                  {regulatory.cta.description}
                </p>
                <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 sm:gap-6 justify-center">
                  <button className="group bg-white px-6 xs:px-7 sm:px-8 md:px-10 py-3 xs:py-4 sm:py-5 rounded-lg font-black text-sm xs:text-base sm:text-lg hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 border-2 border-transparent hover:border-white"
                    style={{color: '#133f77', fontFamily: "'Cormorant Garamond', serif"}}
                  >
                    {regulatory.cta.primaryButton}
                    <ArrowRight className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="border-2 border-white text-white px-6 xs:px-7 sm:px-8 md:px-10 py-3 xs:py-4 sm:py-5 rounded-lg font-black text-sm xs:text-base sm:text-lg hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3"
                    style={{fontFamily: "'Poppins', sans-serif"}}
                    onMouseEnter={e => { e.currentTarget.style.color='#133f77'; }}
                    onMouseLeave={e => { e.currentTarget.style.color='white'; }}
                  >
                    <Phone className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
                    {regulatory.cta.secondaryButton}
                  </button>
                </div>

                <div className="mt-6 xs:mt-7 sm:mt-8 md:mt-12 pt-5 xs:pt-6 sm:pt-8 border-t border-white/20">
                  <div className="flex flex-wrap justify-center gap-3 xs:gap-4 sm:gap-6 lg:gap-8 text-[11px] xs:text-xs sm:text-sm" style={{fontFamily: "'Poppins', sans-serif"}}>
                    <div className="flex items-center gap-1.5 xs:gap-2">
                      <CheckCircle className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                      <span>Free Consultation</span>
                    </div>
                    <div className="flex items-center gap-1.5 xs:gap-2">
                      <CheckCircle className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                      <span>Expert Team</span>
                    </div>
                    <div className="flex items-center gap-1.5 xs:gap-2">
                      <CheckCircle className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                      <span>Proven Track Record</span>
                    </div>
                    <div className="flex items-center gap-1.5 xs:gap-2">
                      <CheckCircle className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                      <span>24/7 Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Regulatory;