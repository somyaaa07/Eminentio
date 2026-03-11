// regulatoryData.js
// Complete sample data for the Regulatory component
// Usage: import { regulatoryData } from './data';

export const regulatoryData = {

  // ─────────────────────────────────────────────
  // GST COMPLIANCE
  // ─────────────────────────────────────────────
  gst: {
    hero: {
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80",
      title: "GST Compliance & Filing Services",
      subtitle:
        "End-to-end Goods & Services Tax compliance — from registration to annual returns — handled by India's top chartered accountants.",
      cta: "Get Started Today",
    },

    about: {
      title: "About Our GST Services",
      description:
        "We provide comprehensive GST compliance solutions for businesses of all sizes. Our team of experienced tax professionals ensures that your GST filings are accurate, timely, and fully compliant with the latest CBIC circulars and GST Council notifications.",
      highlights: [
        "GSTIN Registration within 3–5 working days",
        "Monthly, quarterly & annual return filing (GSTR-1, 3B, 9, 9C)",
        "Input Tax Credit (ITC) reconciliation & optimisation",
        "GST audit support and departmental notices handling",
        "E-invoice & e-way bill management",
        "Dedicated CA assigned to your account",
      ],
    },

    regulatoryOverview: {
      title: "GST Regulatory Framework",
      introduction:
        "The Goods and Services Tax (GST) is a comprehensive indirect tax levied on the supply of goods and services in India. Introduced on 1 July 2017, it subsumed over 17 central and state taxes and has four rate slabs — 5%, 12%, 18% and 28%. Compliance is governed by the CGST Act 2017, IGST Act 2017, and respective state GST acts.",
      keyAspects: [
        {
          title: "Registration",
          description:
            "Every supplier with aggregate turnover exceeding ₹40 lakh (₹20 lakh for special category states) must register under GST.",
          regulations: [
            "Section 22 – Persons liable for registration",
            "Section 24 – Compulsory registration in certain cases",
            "Rule 8 – Application for registration",
            "Form GST REG-01 to REG-30",
          ],
        },
        {
          title: "Returns & Compliance",
          description:
            "Registered taxpayers must file various returns based on turnover and category — monthly, quarterly or annually.",
          regulations: [
            "GSTR-1 – Outward supplies",
            "GSTR-3B – Monthly self-assessed return",
            "GSTR-9 – Annual return",
            "GSTR-9C – Reconciliation statement (audit)",
          ],
        },
        {
          title: "Input Tax Credit",
          description:
            "ITC allows businesses to reduce output tax liability by the tax already paid on inputs, subject to conditions under Section 16.",
          regulations: [
            "Section 16 – Eligibility & conditions for ITC",
            "Section 17 – Apportionment of credit",
            "Rule 36 – Documentary requirements",
            "GSTR-2B auto-drafted ITC statement",
          ],
        },
        {
          title: "E-Invoice & E-Way Bill",
          description:
            "Businesses with turnover above ₹5 crore must generate e-invoices; e-way bills are mandatory for goods movement exceeding ₹50,000.",
          regulations: [
            "Notification 13/2020-CT – E-invoicing mandate",
            "Rule 138 – E-way bill provisions",
            "GSTN IRP portal integration",
            "IRN generation and cancellation rules",
          ],
        },
      ],
    },

    detailedFeatures: [
      {
        title: "GST Registration",
        description:
          "Hassle-free GSTIN registration for new businesses including normal taxpayers, composition dealers, non-resident taxable persons, and e-commerce operators.",
      },
      {
        title: "Return Filing",
        description:
          "Accurate and timely filing of GSTR-1, GSTR-3B, GSTR-4, GSTR-9 and GSTR-9C with reconciliation of books vs portal data.",
      },
      {
        title: "ITC Reconciliation",
        description:
          "Detailed GSTR-2B vs purchase register reconciliation to maximise eligible ITC claims and identify mismatches proactively.",
      },
      {
        title: "GST Audit & Assessment",
        description:
          "Comprehensive audit support, departmental scrutiny replies, assessment proceedings, and appeal filing before GST authorities.",
      },
      {
        title: "E-Invoice Management",
        description:
          "End-to-end e-invoicing setup, IRN generation, QR code printing, and integration with your ERP/accounting software.",
      },
      {
        title: "Advisory & Planning",
        description:
          "Strategic GST planning, classification opinions, ruling applications, and ongoing advisory on GST Council amendments.",
      },
    ],

    complianceCalendar: {
      title: "GST Compliance Calendar",
      description:
        "Stay ahead of every deadline with our structured compliance calendar. Missing due dates attracts late fees of ₹50/day (₹20/day for nil returns) plus 18% interest.",
      deadlines: [
        {
          period: "Monthly Deadlines",
          filings: [
            {
              form: "GSTR-1",
              description: "Outward supply details for the previous month",
              dueDate: "11th of every month",
            },
            {
              form: "GSTR-3B",
              description: "Monthly self-assessed summary return",
              dueDate: "20th of every month",
            },
            {
              form: "GSTR-7",
              description: "TDS deductors return",
              dueDate: "10th of every month",
            },
            {
              form: "GSTR-8",
              description: "E-commerce operator TCS return",
              dueDate: "10th of every month",
            },
          ],
        },
        {
          period: "Quarterly Deadlines",
          filings: [
            {
              form: "GSTR-1 (QRMP)",
              description: "Outward supplies for QRMP scheme taxpayers",
              dueDate: "13th of month following quarter",
            },
            {
              form: "GSTR-3B (QRMP)",
              description: "Quarterly summary return for small taxpayers",
              dueDate: "22nd/24th of month following quarter",
            },
            {
              form: "GSTR-4",
              description: "Composition scheme annual return (quarterly filing)",
              dueDate: "18th of month following quarter",
            },
          ],
        },
        {
          period: "Annual Deadlines",
          filings: [
            {
              form: "GSTR-9",
              description: "Annual return for regular taxpayers",
              dueDate: "31st December of following FY",
            },
            {
              form: "GSTR-9C",
              description: "Self-certified reconciliation statement",
              dueDate: "31st December of following FY",
            },
          ],
        },
      ],
    },

    industryGuidance: {
      title: "Industry-Specific GST Guidance",
      description:
        "GST applicability varies significantly across industries. Our sector specialists provide tailored advice for your business type.",
      sectors: [
        {
          name: "Manufacturing",
          challenges: [
            "Complex multi-stage supply chain ITC reconciliation",
            "Job work provisions and 180-day ITC reversal rules",
            "Classification disputes on composite/mixed supplies",
            "E-way bill compliance for inter-state movement",
          ],
          solutions: [
            "Automated ITC tracker integrated with ERP",
            "Job work register maintenance and compliance",
            "HSN classification advisory from our legal team",
            "Bulk e-way bill generation and tracking tool",
          ],
        },
        {
          name: "E-Commerce",
          challenges: [
            "TCS compliance for marketplace operators",
            "Multi-state registration requirements",
            "Returns vs. cancellation tax treatment",
            "OIDAR services for digital platforms",
          ],
          solutions: [
            "GSTR-8 filing and TCS reconciliation",
            "Multi-GSTIN management under single dashboard",
            "Automated credit note handling workflow",
            "OIDAR registration and return filing",
          ],
        },
        {
          name: "Real Estate",
          challenges: [
            "Under-construction vs ready property GST applicability",
            "Works contract classification",
            "ITC reversal on exempt supplies",
            "Joint development agreement taxation",
          ],
          solutions: [
            "Project-wise ITC tracking and reversal computation",
            "Works contract tax rate advisory",
            "Proportionate ITC reversal calculation",
            "JDA transaction structuring for GST efficiency",
          ],
        },
        {
          name: "Exports & Imports",
          challenges: [
            "Zero-rated supply refund claims",
            "IGST refund vs. LUT/bond mechanism",
            "Deemed exports and related party transactions",
            "Customs duty and GST interface",
          ],
          solutions: [
            "Refund application filing and follow-up",
            "LUT filing and renewal management",
            "Deemed export benefit calculation",
            "Integrated customs + GST compliance calendar",
          ],
        },
      ],
    },

    violations: {
      title: "GST Violations & Penalties",
      description:
        "Non-compliance with GST laws can result in significant financial penalties and legal proceedings. Understanding the penalty framework helps businesses stay vigilant.",
      commonViolations: [
        {
          violation: "Late Filing of GSTR-3B",
          penalty: "₹50/day (₹20/day for nil return) + 18% interest on unpaid tax",
          impact: "High",
          prevention: "Set automated reminders 5 days before due date; use our auto-filing service.",
        },
        {
          violation: "Excess ITC Claim",
          penalty:
            "100% of the excess ITC claimed, plus interest @ 24% p.a.",
          impact: "Critical",
          prevention: "Monthly GSTR-2B reconciliation before filing GSTR-3B.",
        },
        {
          violation: "Non-Issuance of Tax Invoice",
          penalty: "₹10,000 or the tax amount evaded, whichever is higher",
          impact: "High",
          prevention: "Implement e-invoicing system integrated with your billing software.",
        },
        {
          violation: "E-Way Bill Violations",
          penalty: "₹10,000 or tax on goods, whichever is higher; goods may be seized",
          impact: "Critical",
          prevention: "Generate e-way bill before dispatch; use our bulk generation tool.",
        },
        {
          violation: "Fraud / Wilful Tax Evasion",
          penalty:
            "100–300% of tax evaded; prosecution up to 5 years imprisonment",
          impact: "Critical",
          prevention: "Maintain complete audit trail; never claim ITC on fake invoices.",
        },
      ],
      compoundingProcess: {
        title: "Compounding of GST Offences",
        steps: [
          "File an application for compounding before the Commissioner",
          "Pay the compounding fee as determined (minimum ₹10,000)",
          "Commissioner examines facts and issues compounding order",
          "Pay balance compounding amount within 30 days",
          "Prosecution proceedings dropped upon payment",
        ],
        benefits: [
          "Avoids lengthy prosecution and criminal proceedings",
          "Reduced financial impact compared to full penalty",
          "Business reputation protected",
          "Faster resolution — typically 60–90 days",
        ],
        timeline: "Usually resolved within 60–90 days of application",
      },
    },

    caseStudies: {
      title: "Client Success Stories",
      description:
        "Real-world examples of how we have helped businesses resolve GST challenges and achieve compliance excellence.",
      studies: [
        {
          industry: "FMCG Manufacturing",
          title: "₹2.8 Cr ITC Recovery for Packaged Foods Manufacturer",
          challenge:
            "A mid-sized FMCG company had accumulated ₹2.8 crore in blocked ITC over 3 years due to GSTR-2A vs. purchase register mismatches and supplier non-filing.",
          solution:
            "Our team performed a comprehensive ledger audit, identified 340+ supplier mismatches, issued vendor compliance notices, and filed rectified returns with detailed reconciliation statements.",
          outcome:
            "Successfully recovered ₹2.1 crore ITC within 6 months; remaining ₹0.7 crore under appeal with strong documentation.",
          impact:
            "Cash flow improved by ₹2.1 crore; compliance rating upgraded to 'A' on GST portal; zero adverse audit observations in subsequent department scrutiny.",
        },
        {
          industry: "E-Commerce Marketplace",
          title: "Multi-State GST Setup for Pan-India D2C Brand",
          challenge:
            "A D2C brand scaling nationally needed GST registrations in 18 states within 45 days, along with a compliant return filing mechanism and TCS management.",
          solution:
            "Parallel processing of all 18 state registrations, custom GSTIN-wise return tracker, and integration of our compliance software with their Shopify + Tally stack.",
          outcome:
            "All 18 GSTINs obtained within 38 days; automated monthly filing across all states; zero late filing penalties in first 12 months.",
          impact:
            "Brand launched pan-India on schedule; compliance overhead reduced by 80% through automation; ₹14 lakh annual saving on compliance costs.",
        },
        {
          industry: "Real Estate Developer",
          title: "GST Refund of ₹1.2 Cr for Under-Construction Projects",
          challenge:
            "A Pune-based developer had accumulated ₹1.2 crore in excess IGST paid on steel and cement imports used for affordable housing projects eligible for 1% GST.",
          solution:
            "Prepared detailed project-wise refund applications under Rule 89, computed proportionate ITC reversal, and appeared before adjudicating authority for personal hearing.",
          outcome:
            "Refund of ₹89 lakh sanctioned; balance ₹31 lakh under second appeal with high probability of success based on recent AAAR ruling.",
          impact:
            "Developer's working capital position strengthened; established precedent for future project refund claims estimated at ₹3–4 crore over next 3 years.",
        },
        {
          industry: "IT Services Export",
          title: "LUT Filing & Zero-Rated Export Compliance for SaaS Company",
          challenge:
            "A Bengaluru SaaS startup was paying IGST on all software exports (₹60 lakh/year) without knowing they could export under LUT without payment of tax.",
          solution:
            "Filed LUT for current FY, amended past returns to claim IGST refunds for 2 preceding years, and set up automated annual LUT renewal process.",
          outcome:
            "IGST refund of ₹1.2 crore for past 2 years received; zero IGST outflow going forward through LUT mechanism.",
          impact:
            "₹1.2 crore immediate cash recovery; ₹60 lakh annual cash flow improvement; company now fully LUT-compliant with zero GST cost on exports.",
        },
      ],
    },

    resources: {
      title: "GST Resources & Tools",
      description:
        "Download our free templates, checklists and guides to strengthen your internal GST compliance processes.",
      tools: [
        {
          name: "GSTR-2B Reconciliation Template",
          description:
            "Excel template to reconcile GSTR-2B auto-drafted ITC with purchase register",
          type: "Excel Template",
        },
        {
          name: "GST Compliance Checklist",
          description:
            "Month-end checklist covering all GST filing, payment and reconciliation tasks",
          type: "PDF Checklist",
        },
        {
          name: "ITC Reversal Calculator",
          description:
            "Automated calculator for Rule 42/43 ITC reversal on exempt and non-business use",
          type: "Excel Calculator",
        },
        {
          name: "HSN Code Finder",
          description:
            "Searchable HSN/SAC code database with applicable GST rates and exemptions",
          type: "Interactive Tool",
        },
      ],
      guides: [
        {
          title: "Complete Guide to GST Registration in India 2024",
          topics: ["Registration", "Documents", "Threshold", "Types"],
          readTime: "12 min read",
        },
        {
          title: "How to File GSTR-9 Annual Return — Step by Step",
          topics: ["Annual Return", "Reconciliation", "GSTR-9C", "Audit"],
          readTime: "18 min read",
        },
        {
          title: "Maximising Input Tax Credit — Legal Strategies",
          topics: ["ITC", "GSTR-2B", "Vendor Management", "Blocked Credits"],
          readTime: "15 min read",
        },
        {
          title: "E-Invoicing Under GST — Implementation Guide",
          topics: ["IRN", "QR Code", "IRP Integration", "Exemptions"],
          readTime: "10 min read",
        },
      ],
    },

    process: {
      title: "Our 4-Step GST Compliance Process",
      steps: [
        {
          title: "Discovery & Setup",
          description:
            "We analyse your business model, turnover, supply types and existing compliance status to design a customised GST compliance plan.",
        },
        {
          title: "Data Collection",
          description:
            "Secure collection of invoices, purchase registers, bank statements and stock records through our encrypted client portal.",
        },
        {
          title: "Reconciliation & Filing",
          description:
            "Our CAs reconcile your books with GSTN data, resolve mismatches with vendors, and file accurate returns well before the due date.",
        },
        {
          title: "Review & Advisory",
          description:
            "Post-filing review, ITC optimisation suggestions, and monthly compliance health report delivered to your inbox.",
        },
      ],
    },

    faqs: [
      {
        question: "Who needs to register for GST in India?",
        answer:
          "Any person or business with aggregate annual turnover exceeding ₹40 lakh (₹20 lakh for North-Eastern and hill states) must register. Certain categories like inter-state suppliers, e-commerce sellers, and TDS/TCS deductors must register regardless of turnover.",
      },
      {
        question: "What is the difference between GSTR-1 and GSTR-3B?",
        answer:
          "GSTR-1 is a statement of outward supplies (sales) — it does not involve tax payment. GSTR-3B is a summary return where you declare both outward and inward supplies and pay the net tax liability after adjusting eligible ITC. Both must be filed monthly (or quarterly under QRMP).",
      },
      {
        question: "Can I claim ITC on all my business purchases?",
        answer:
          "ITC can be claimed on most business purchases used for taxable supplies, subject to conditions under Section 16. Blocked credits under Section 17(5) — such as motor vehicles for personal use, food & beverages, club memberships, and construction of immovable property — are not eligible for ITC.",
      },
      {
        question: "What is the QRMP scheme and who is eligible?",
        answer:
          "The Quarterly Return Monthly Payment (QRMP) scheme allows taxpayers with aggregate turnover up to ₹5 crore to file GSTR-1 and GSTR-3B quarterly while paying tax monthly via challan (PMT-06). It reduces compliance burden for smaller businesses.",
      },
      {
        question: "How long does GST registration take?",
        answer:
          "If all documents are in order and no queries are raised by the GST officer, registration is granted within 7 working days. With our service, we typically obtain GSTIN within 3–5 working days by ensuring complete and accurate documentation from the start.",
      },
      {
        question: "What documents are needed for GST registration?",
        answer:
          "Key documents include PAN of entity/proprietor, Aadhaar of promoters, proof of business address (electricity bill/rent agreement), bank account details, photographs, and incorporation documents for companies. Our team provides a customised checklist based on your business structure.",
      },
    ],

    cta: {
      title: "Ready to Simplify Your GST Compliance?",
      description:
        "Join 2,000+ businesses that trust us with their GST compliance. Get a free 30-minute consultation with a senior CA today.",
      primaryButton: "Book Free Consultation",
      secondaryButton: "Call Our GST Expert",
    },
  },


  // ─────────────────────────────────────────────
  // MCA / ROC COMPLIANCE
  // ─────────────────────────────────────────────
  mca: {
    hero: {
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600&q=80",
      title: "MCA / ROC Compliance Services",
      subtitle:
        "Complete company law compliance — annual filings, board meetings, statutory registers and ROC forms — managed by our expert CS team.",
      cta: "Ensure Compliance Now",
    },

    about: {
      title: "About Our MCA / ROC Services",
      description:
        "We provide end-to-end Ministry of Corporate Affairs (MCA) compliance services for private limited companies, public companies, LLPs and OPCs. Our Company Secretaries ensure your entity remains in good standing with the Registrar of Companies at all times.",
      highlights: [
        "Annual filing of AOC-4 (Financial Statements) and MGT-7A",
        "Board meeting and AGM secretarial support",
        "Statutory register maintenance (Members, Directors, Charges)",
        "Director KYC (DIR-3 KYC) annual filing",
        "Change in directors, registered office and share capital",
        "LLP Annual Return (Form 11) and Statement of Accounts (Form 8)",
      ],
    },

    regulatoryOverview: {
      title: "MCA Regulatory Framework",
      introduction:
        "Company law compliance in India is governed primarily by the Companies Act, 2013 and the Limited Liability Partnership Act, 2008, administered by the Ministry of Corporate Affairs (MCA) through the Registrar of Companies (ROC). Non-compliance attracts additional fees, penalties, and in serious cases, strike-off of the company.",
      keyAspects: [
        {
          title: "Annual Filings",
          description:
            "Every company must file its financial statements and annual return with the ROC within prescribed timelines after the AGM.",
          regulations: [
            "Section 92 – Annual Return (MGT-7/7A)",
            "Section 137 – Filing of financial statements (AOC-4)",
            "Section 96 – Annual General Meeting",
            "Section 129 – Financial statements preparation",
          ],
        },
        {
          title: "Board & General Meetings",
          description:
            "Companies must hold statutory meetings, pass resolutions, maintain minutes, and file necessary forms with ROC.",
          regulations: [
            "Section 173 – Board meeting frequency requirements",
            "Section 101 – Notice of general meeting",
            "Section 117 – Resolutions requiring ROC filing",
            "Secretarial Standards SS-1 and SS-2",
          ],
        },
        {
          title: "Director Compliance",
          description:
            "Directors must maintain their DIN, file KYC annually, and disclose interests in other entities to remain compliant.",
          regulations: [
            "Section 152 – Appointment of directors",
            "Rule 12A – DIR-3 KYC annual filing",
            "Section 184 – Disclosure of interest (MBP-1)",
            "Section 164 – Disqualification of directors",
          ],
        },
        {
          title: "Share Capital Changes",
          description:
            "Any alteration in share capital — increase, buyback, or transfer — requires regulatory approvals and ROC intimation.",
          regulations: [
            "Section 62 – Further issue of share capital",
            "Section 68 – Buy-back of securities",
            "Section 56 – Transfer of shares (SH-4)",
            "PAS-3 – Return of allotment",
          ],
        },
      ],
    },

    detailedFeatures: [
      {
        title: "Annual ROC Filings",
        description:
          "Timely preparation and filing of AOC-4, MGT-7/7A, and all event-based forms to keep your company fully compliant.",
      },
      {
        title: "Secretarial Services",
        description:
          "Complete board meeting and AGM management — notices, agenda, minutes, resolutions and statutory register updates.",
      },
      {
        title: "Director Services",
        description:
          "DIN application, DIR-3 KYC, appointment/resignation filings, and DIN deactivation prevention.",
      },
      {
        title: "Share Capital Management",
        description:
          "Issue of shares, rights issue, bonus shares, share transfers, and maintenance of share register.",
      },
      {
        title: "Company Amendments",
        description:
          "Name change, object clause amendments, registered office change, MOA/AOA alteration — end to end.",
      },
      {
        title: "Strike-Off & Closure",
        description:
          "Voluntary strike-off under Fast Track Exit (FTE) scheme and winding up advisory for defunct companies.",
      },
    ],

    complianceCalendar: {
      title: "MCA Compliance Calendar",
      description:
        "Key annual deadlines for private limited companies. Additional fees of ₹100/day (no upper cap for certain forms) apply on late filing.",
      deadlines: [
        {
          period: "April – June",
          filings: [
            {
              form: "DIR-3 KYC",
              description: "Annual KYC for all DIN holders",
              dueDate: "30th September",
            },
            {
              form: "MBP-1",
              description:
                "Director's disclosure of interest at first board meeting of FY",
              dueDate: "First Board Meeting of FY",
            },
          ],
        },
        {
          period: "July – September",
          filings: [
            {
              form: "AOC-4",
              description:
                "Filing of financial statements within 30 days of AGM",
              dueDate: "30 days from AGM (typically 29th October)",
            },
            {
              form: "MGT-7A",
              description:
                "Annual return for small companies within 60 days of AGM",
              dueDate: "60 days from AGM (typically 28th November)",
            },
            {
              form: "AGM",
              description:
                "Annual General Meeting to be held within 6 months of financial year end",
              dueDate: "30th September",
            },
          ],
        },
        {
          period: "October – December",
          filings: [
            {
              form: "MSME Form 1",
              description:
                "Half-yearly return for outstanding dues to MSMEs > 45 days",
              dueDate: "31st October (Apr–Sep period)",
            },
            {
              form: "DPT-3",
              description: "Annual return for deposits and outstanding loans",
              dueDate: "30th June",
            },
          ],
        },
      ],
    },

    industryGuidance: {
      title: "Entity-Type Specific Guidance",
      description:
        "MCA compliance requirements vary by entity type and size. Our CS team provides tailored support for each entity category.",
      sectors: [
        {
          name: "Private Limited Company",
          challenges: [
            "Tracking multiple annual and event-based filing deadlines",
            "Maintaining statutory registers and minutes books",
            "Director disqualification due to missed filings",
            "CARO reporting requirements for statutory auditors",
          ],
          solutions: [
            "Automated compliance calendar with email/SMS alerts",
            "Digital statutory register maintenance on our platform",
            "Director KYC filing reminder service",
            "CARO checklist preparation and auditor coordination",
          ],
        },
        {
          name: "LLP",
          challenges: [
            "Form 11 (Annual Return) and Form 8 (Statement of Accounts) deadlines",
            "Partner changes and capital contribution amendments",
            "Designated partner DIN and DPIN compliance",
            "LLP agreement amendments",
          ],
          solutions: [
            "Form 8 & 11 preparation and filing",
            "Partner admission/resignation filing",
            "Designated partner KYC management",
            "LLP deed supplementary deed drafting",
          ],
        },
        {
          name: "Public Company",
          challenges: [
            "Secretarial audit mandatory under Section 204",
            "SEBI regulations for listed entities",
            "Larger board and committee requirements",
            "Independent director appointment and training",
          ],
          solutions: [
            "Secretarial audit by practicing company secretary",
            "SEBI compliance calendar management",
            "Board structure advisory and documentation",
            "ID onboarding and IICA training coordination",
          ],
        },
        {
          name: "OPC (One Person Company)",
          challenges: [
            "Mandatory conversion on exceeding turnover/capital thresholds",
            "Nominee director appointment and consent",
            "Simplified but distinct filing requirements",
            "Transition compliance during conversion",
          ],
          solutions: [
            "Turnover monitoring and conversion advisory",
            "Nominee consent documentation (INC-3)",
            "OPC-specific compliance calendar",
            "End-to-end conversion to Private Limited support",
          ],
        },
      ],
    },

    violations: {
      title: "MCA Violations & Penalties",
      description:
        "Delays and defaults under the Companies Act 2013 attract heavy additional fees and can result in director disqualification or company strike-off.",
      commonViolations: [
        {
          violation: "Non-Filing of Annual Return (MGT-7)",
          penalty:
            "Additional fee of ₹100/day; directors liable under Section 92(5); disqualification after 3 consecutive defaults",
          impact: "Critical",
          prevention: "Engage a CS retainer to file within 60 days of AGM.",
        },
        {
          violation: "Late AGM or Non-Holding of AGM",
          penalty:
            "Company fined ₹1 lakh; each defaulting officer fined ₹1 lakh + ₹5,000/day continuing default",
          impact: "High",
          prevention: "Schedule AGM in calendar at start of financial year.",
        },
        {
          violation: "DIR-3 KYC Not Filed",
          penalty:
            "DIN deactivated — director cannot digitally sign any MCA forms until KYC filed with ₹5,000 penalty",
          impact: "High",
          prevention: "Set annual reminder for September 30 DIR-3 KYC deadline.",
        },
        {
          violation: "Failure to Maintain Statutory Registers",
          penalty:
            "Fine on company ₹1–5 lakh; fine on officer ₹25,000–1 lakh",
          impact: "High",
          prevention: "Use digital statutory register platform with auto-update on each corporate event.",
        },
      ],
      strikeOffProcess: {
        title: "Company Strike-Off & Revival",
        strikeOff: {
          grounds: [
            "Non-commencement of business within 2 years of incorporation",
            "Not carrying on business for 2 consecutive financial years",
            "Non-filing of annual returns and financial statements for 2+ consecutive years",
          ],
          consequences: [
            "Company name removed from ROC register",
            "Directors disqualified under Section 164(2)",
            "Bank accounts frozen; assets vest with government",
            "Criminal liability for directors under Section 447",
          ],
        },
        dormantStatus: {
          eligibility:
            "Companies with no significant transactions for 2+ years and no outstanding litigation may apply for dormant status under Section 455.",
          process: [
            "Board resolution approving application for dormant status",
            "File Form MSC-1 with ROC along with prescribed fees",
            "ROC issues certificate of dormant company",
            "File Form MSC-3 (annual return for dormant companies) each year",
            "Apply in Form MSC-4 to restore active status when operations resume",
          ],
          benefits: [
            "Reduced compliance burden — minimal annual filing",
            "Protects company name and legal existence",
            "Avoids strike-off proceedings",
            "Lower annual maintenance cost",
          ],
        },
      },
    },

    caseStudies: {
      title: "Client Success Stories",
      description:
        "How we helped businesses avoid penalties, revive struck-off companies, and streamline their ROC compliance.",
      studies: [
        {
          industry: "Technology Startup",
          title: "Director DIN Revival & ₹3.2 Lakh Penalty Waiver",
          challenge:
            "Three co-founders of a Hyderabad tech startup had their DINs deactivated due to missed DIR-3 KYC filings, blocking all MCA filings for 18 months.",
          solution:
            "Filed DIR-3 KYC for all three directors with supporting documents, applied for condonation of delay, and simultaneously resolved backlog of 4 pending annual filings.",
          outcome:
            "All three DINs reactivated within 7 working days; backlog cleared with ₹1.2 lakh additional fees (vs ₹3.2 lakh initial liability after negotiated condonation).",
          impact:
            "Company was able to raise its Series A funding round on schedule; no further compliance defaults in subsequent 2 years.",
        },
        {
          industry: "Manufacturing SME",
          title: "Revival of Struck-Off Company & Asset Recovery",
          challenge:
            "A family-owned manufacturing firm had its company struck off by ROC after missing annual filings for 3 years during a family dispute.",
          solution:
            "Filed NCLT application for restoration under Section 252, submitted all pending ROC filings simultaneously, and obtained NCLT order for revival within 5 months.",
          outcome:
            "Company restored to active status; all pending filings regularised; directors' disqualification removed through NCLT order.",
          impact:
            "Business operations resumed; ₹2.8 crore of frozen bank balance released; manufacturing contracts honoured; family retained business asset.",
        },
      ],
    },

    resources: {
      title: "MCA Resources & Tools",
      description:
        "Free tools and guides to help you stay on top of ROC compliance requirements.",
      tools: [
        {
          name: "MCA Annual Compliance Checklist",
          description:
            "Month-by-month checklist of all ROC filings for a private limited company",
          type: "PDF Checklist",
        },
        {
          name: "Board Meeting Agenda Template",
          description: "Standard board meeting agenda and minutes template per SS-1",
          type: "Word Template",
        },
        {
          name: "Statutory Registers Tracker",
          description:
            "Excel-based tracker for all 16 statutory registers under Companies Act",
          type: "Excel Template",
        },
        {
          name: "Director Disqualification Checker",
          description:
            "Check DIN status and disqualification dates on MCA portal — step-by-step guide",
          type: "PDF Guide",
        },
      ],
      guides: [
        {
          title: "Annual Compliance Guide for Private Limited Companies 2024",
          topics: ["AOC-4", "MGT-7A", "AGM", "DIR-3 KYC"],
          readTime: "15 min read",
        },
        {
          title: "How to Close or Strike Off a Private Limited Company",
          topics: ["Strike-Off", "STK-2", "FTE Scheme", "Winding Up"],
          readTime: "12 min read",
        },
        {
          title: "Director Disqualification — Causes, Check & Cure",
          topics: ["Section 164", "DIN Deactivation", "NCLT Relief", "Condonation"],
          readTime: "10 min read",
        },
      ],
    },

    process: {
      title: "Our 4-Step MCA Compliance Process",
      steps: [
        {
          title: "Compliance Audit",
          description:
            "We review your MCA master data, past filing history, and statutory registers to identify gaps and pending obligations.",
        },
        {
          title: "Document Preparation",
          description:
            "Our CS team prepares all required forms, board resolutions, financial statements and supporting documents.",
        },
        {
          title: "Filing & Follow-Up",
          description:
            "All forms filed on MCA21 portal with digital signatures; SRN tracked and approval monitored proactively.",
        },
        {
          title: "Confirmation & Records",
          description:
            "Filing confirmations shared with you; statutory registers updated; next due dates communicated.",
        },
      ],
    },

    faqs: [
      {
        question: "When must a Private Limited Company hold its AGM?",
        answer:
          "Every private limited company must hold its first AGM within 9 months from the end of the first financial year. Subsequent AGMs must be held within 6 months from the end of each financial year (i.e., by 30th September for companies with 31st March year-end). The gap between two AGMs cannot exceed 15 months.",
      },
      {
        question: "What is DIR-3 KYC and when is it due?",
        answer:
          "DIR-3 KYC is an annual filing mandatory for all DIN holders to verify their personal details with MCA. It must be filed every year by 30th September. Failure to file results in DIN deactivation, which prevents the director from signing any MCA forms until the KYC is filed with a ₹5,000 penalty.",
      },
      {
        question: "What is the difference between AOC-4 and MGT-7?",
        answer:
          "AOC-4 is filed to submit the company's financial statements (Balance Sheet, P&L, Directors' Report, Auditor's Report) with the ROC — due within 30 days of AGM. MGT-7/7A is the Annual Return containing details of shareholders, directors, and key corporate events — due within 60 days of AGM.",
      },
      {
        question: "Can a struck-off company be revived?",
        answer:
          "Yes. A struck-off company can be revived by filing an application before the NCLT (National Company Law Tribunal) under Section 252 of the Companies Act, 2013 within 20 years of strike-off. The NCLT may restore the company if it is satisfied that the strike-off was unjust or the company was carrying on business at the time.",
      },
      {
        question: "Is a Company Secretary mandatory for all companies?",
        answer:
          "A whole-time Company Secretary is mandatory for companies with paid-up share capital of ₹10 crore or more. For smaller companies, a practising CS can be engaged for secretarial audit and compliance certifications. All companies benefit from CS advisory for maintaining statutory registers, conducting board meetings, and ROC filings.",
      },
    ],

    cta: {
      title: "Stay Fully Compliant with MCA Requirements",
      description:
        "Avoid director disqualification and hefty penalties. Our experienced CS team handles all your ROC filings so you can focus on growing your business.",
      primaryButton: "Get a Free Compliance Review",
      secondaryButton: "Speak to Our CS Team",
    },
  },


  // ─────────────────────────────────────────────
  // INCOME TAX COMPLIANCE
  // ─────────────────────────────────────────────
  incometax: {
    hero: {
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80",
      title: "Income Tax Compliance & Filing",
      subtitle:
        "Expert income tax return filing, tax planning, TDS compliance, and assessment representation for individuals and businesses.",
      cta: "File Your Return Now",
    },

    about: {
      title: "About Our Income Tax Services",
      description:
        "From simple ITR filing to complex business tax assessments, our team of experienced Chartered Accountants provides comprehensive income tax services. We ensure maximum legitimate tax savings while maintaining full compliance with the Income Tax Act, 1961.",
      highlights: [
        "ITR filing for individuals, HUFs, firms, LLPs and companies",
        "TDS return filing (Forms 24Q, 26Q, 27Q, 27EQ) and TDS reconciliation",
        "Advance tax computation and payment scheduling",
        "Tax audit under Section 44AB",
        "Assessment and appeal representation before CIT(A) and ITAT",
        "International taxation — DTAA benefits, Form 15CA/CB",
      ],
    },

    regulatoryOverview: {
      title: "Income Tax Regulatory Framework",
      introduction:
        "Income tax in India is levied under the Income Tax Act, 1961, administered by the Central Board of Direct Taxes (CBDT) through the Income Tax Department. Tax is computed on total income from five heads: Salary, House Property, Business/Profession, Capital Gains, and Other Sources. The Finance Act amends rates and provisions each year.",
      keyAspects: [
        {
          title: "Return Filing",
          description:
            "Every person whose total income exceeds the basic exemption limit must file an ITR within the prescribed due date.",
          regulations: [
            "Section 139 – Mandatory and voluntary return filing",
            "Section 139(1) – Due dates by taxpayer category",
            "Section 234A/B/C – Interest on delayed filing/payment",
            "Section 271F – Penalty for non-filing",
          ],
        },
        {
          title: "TDS/TCS",
          description:
            "Tax Deduction at Source and Tax Collection at Source require deductors/collectors to deduct, deposit and file quarterly returns.",
          regulations: [
            "Sections 192–206CCA – TDS provisions",
            "Section 206C – TCS provisions",
            "Form 24Q/26Q/27Q/27EQ – Quarterly TDS returns",
            "Form 16/16A/27D – TDS certificates",
          ],
        },
        {
          title: "Tax Audit",
          description:
            "Businesses with turnover exceeding ₹1 crore (₹10 crore for digital transactions) and professionals with receipts above ₹50 lakh must get accounts audited under Section 44AB.",
          regulations: [
            "Section 44AB – Tax audit requirement",
            "Form 3CA/3CB – Tax audit report formats",
            "Form 3CD – Statement of particulars",
            "Section 271B – Penalty for non-audit ₹1.5 lakh",
          ],
        },
        {
          title: "Assessments & Appeals",
          description:
            "CBDT conducts scrutiny assessments, best judgment assessments, and reassessments. Taxpayers have appellate remedies up to the Supreme Court.",
          regulations: [
            "Section 143(3) – Scrutiny assessment",
            "Section 148 – Reopening of assessment",
            "Section 246A – Appeals to CIT(A)/NFAC",
            "Section 253 – Appeals to ITAT",
          ],
        },
      ],
    },

    detailedFeatures: [
      {
        title: "ITR Filing",
        description:
          "Accurate preparation and filing of all ITR forms — ITR-1 to ITR-7 — with complete income computation, deduction optimisation and e-verification.",
      },
      {
        title: "TDS Compliance",
        description:
          "End-to-end TDS management — rate determination, monthly deposits, quarterly return filing (24Q/26Q), and Form 16/16A generation.",
      },
      {
        title: "Tax Audit",
        description:
          "Comprehensive tax audit under Section 44AB with preparation of Form 3CA/3CB and detailed Form 3CD with all 44 clauses.",
      },
      {
        title: "Tax Planning",
        description:
          "Year-round tax planning for individuals and businesses — investments under 80C/80D, HRA, NPS, LTCG harvesting, and business deductions.",
      },
      {
        title: "Assessment Support",
        description:
          "Expert representation in scrutiny assessments, notice responses under Sections 143(2)/148, and appeals before CIT(A), ITAT, High Court.",
      },
      {
        title: "International Tax",
        description:
          "DTAA analysis, Form 15CA/CB certification, FBAR compliance, foreign income disclosure, and transfer pricing documentation.",
      },
    ],

    complianceCalendar: {
      title: "Income Tax Compliance Calendar",
      description:
        "Key income tax deadlines. Missing due dates attracts interest under Section 234A (1%/month on tax) and penalties up to 200% of tax in evasion cases.",
      deadlines: [
        {
          period: "Q1 (April – June)",
          filings: [
            {
              form: "Advance Tax (1st Instalment)",
              description: "15% of estimated annual tax liability",
              dueDate: "15th June",
            },
            {
              form: "Form 24Q/26Q (Q4 of prev FY)",
              description: "TDS return for January–March quarter",
              dueDate: "31st May",
            },
            {
              form: "Form 16",
              description: "TDS certificate for salary employees",
              dueDate: "15th June",
            },
          ],
        },
        {
          period: "Q2 (July – September)",
          filings: [
            {
              form: "Advance Tax (2nd Instalment)",
              description: "45% of estimated annual tax (cumulative)",
              dueDate: "15th September",
            },
            {
              form: "ITR Filing (Non-Audit Cases)",
              description: "Individuals, HUFs, firms not requiring audit",
              dueDate: "31st July",
            },
            {
              form: "Form 24Q/26Q (Q1)",
              description: "TDS return for April–June quarter",
              dueDate: "31st July",
            },
          ],
        },
        {
          period: "Q3 (October – December)",
          filings: [
            {
              form: "ITR Filing (Audit Cases)",
              description: "Companies, audit-required firms and individuals",
              dueDate: "31st October",
            },
            {
              form: "Tax Audit Report (Form 3CB/3CD)",
              description: "Tax audit report submission",
              dueDate: "30th September",
            },
            {
              form: "Advance Tax (3rd Instalment)",
              description: "75% of estimated annual tax (cumulative)",
              dueDate: "15th December",
            },
          ],
        },
        {
          period: "Q4 (January – March)",
          filings: [
            {
              form: "Advance Tax (4th Instalment)",
              description: "100% of estimated annual tax",
              dueDate: "15th March",
            },
            {
              form: "Updated Return (ITR-U)",
              description: "Filing or correcting returns up to 2 years back",
              dueDate: "31st March (2 years from end of relevant AY)",
            },
          ],
        },
      ],
    },

    industryGuidance: {
      title: "Taxpayer Category Guidance",
      description:
        "Income tax obligations differ significantly by taxpayer category. Our CAs provide specialised advice for each type.",
      sectors: [
        {
          name: "Salaried Individuals",
          challenges: [
            "Optimising deductions under Sections 80C, 80D, HRA, LTA",
            "Old regime vs new regime tax calculation",
            "Multiple Form 16s from different employers",
            "Reporting foreign income, ESOP gains, and RSUs",
          ],
          solutions: [
            "Personalised old vs new regime comparison",
            "Investment planning calendar for maximum 80C benefit",
            "Consolidated ITR filing with all Form 16 reconciliation",
            "ESOP and RSU tax computation and disclosure",
          ],
        },
        {
          name: "Business Owners",
          challenges: [
            "Correct head of income classification",
            "Presumptive taxation vs regular books",
            "Depreciation computation under Income Tax Act",
            "Disallowances under Section 40A(3), 43B",
          ],
          solutions: [
            "Income classification and structuring advisory",
            "Section 44AD/44ADA vs regular computation analysis",
            "Block-wise depreciation workings",
            "Compliance with cash payment limits and deduction timing",
          ],
        },
        {
          name: "Companies & LLPs",
          challenges: [
            "MAT / AMT computation and credit utilisation",
            "Transfer pricing documentation for related party transactions",
            "Section 80-IC/80-IB/80-JJAA deductions",
            "Tax provision and deferred tax computation",
          ],
          solutions: [
            "MAT/AMT credit register maintenance",
            "Transfer pricing study and Form 3CEB filing",
            "Industrial deduction benefit analysis",
            "AS-22/Ind-AS 12 deferred tax computation",
          ],
        },
        {
          name: "NRIs & Foreign Nationals",
          challenges: [
            "Residential status determination",
            "DTAA applicability and benefit claim",
            "NRE/NRO account income reporting",
            "Foreign asset disclosure in Schedule FA",
          ],
          solutions: [
            "Detailed residential status analysis for each FY",
            "DTAA certificate and Form 10F filing",
            "NRI-specific ITR preparation with FEMA compliance",
            "Foreign asset inventory and Schedule FA preparation",
          ],
        },
      ],
    },

    violations: {
      title: "Income Tax Violations & Penalties",
      description:
        "The Income Tax Act provides for a graduated penalty structure ranging from interest charges for delays to heavy penalties and prosecution for concealment and fraud.",
      commonViolations: [
        {
          violation: "Late Filing of ITR",
          penalty:
            "₹5,000 penalty (₹1,000 if income ≤ ₹5 lakh); interest @ 1% per month under Section 234A",
          impact: "High",
          prevention:
            "File ITR before 31st July (non-audit) or 31st October (audit cases).",
        },
        {
          violation: "Concealment of Income / Wrong Deduction",
          penalty:
            "Penalty of 100–300% of tax sought to be evaded under Section 271(1)(c)",
          impact: "Critical",
          prevention: "Full disclosure of all income sources; avoid claiming ineligible deductions.",
        },
        {
          violation: "Failure to Deduct TDS",
          penalty:
            "Disallowance of 30% of expense + interest @ 1–1.5% per month + penalty equal to TDS amount",
          impact: "Critical",
          prevention:
            "Implement TDS compliance calendar; deduct and deposit by 7th of each month.",
        },
        {
          violation: "Non-Filing of TDS Returns",
          penalty:
            "₹200/day late fee under Section 234E + minimum ₹10,000 penalty under Section 271H",
          impact: "High",
          prevention: "File 24Q/26Q quarterly within due dates; use our auto-filing service.",
        },
      ],
      enforcementMechanism: {
        title: "Income Tax Assessment & Enforcement Process",
        steps: [
          "ITR filed by taxpayer; AIS/TIS data cross-verified by CBDT systems",
          "Automated scrutiny selection under CASS or manual selection",
          "Notice under Section 143(2) issued within 3 months of filing",
          "Taxpayer submits response, documents and explanations online",
          "Assessment order passed by AO under Section 143(3)",
          "Demand raised or refund issued; taxpayer may file appeal",
        ],
        consequences: [
          "Tax demand with interest under Sections 234A/B/C",
          "Penalty under Section 270A for underreporting (50–200% of tax)",
          "Prosecution under Section 276C for wilful evasion",
          "Attachment of bank accounts and property for recovery",
        ],
        timeline: "Scrutiny assessment must be completed within 9 months from the end of FY in which return was filed",
      },
    },

    caseStudies: {
      title: "Client Success Stories",
      description:
        "How our tax experts have saved clients from heavy demands and recovered rightful refunds.",
      studies: [
        {
          industry: "IT Professional",
          title: "₹18 Lakh ESOP Tax Demand Overturned at CIT(A)",
          challenge:
            "A senior software engineer received a ₹18 lakh demand after the AO taxed his ESOP perquisite twice — once as salary perquisite and again as capital gain on the same shares.",
          solution:
            "Filed detailed appeal before CIT(A) with computation showing double taxation, relied on CBDT circular and Delhi ITAT precedents establishing correct treatment.",
          outcome:
            "Full demand of ₹18 lakh overturned by CIT(A); refund of ₹6 lakh (taxes paid under protest) received within 45 days.",
          impact:
            "Client saved ₹24 lakh (₹18 lakh demand dropped + ₹6 lakh refund); precedent used to handle similar cases for 12 other employees of the same company.",
        },
        {
          industry: "Manufacturing Company",
          title: "Transfer Pricing Adjustment of ₹4.2 Cr Reduced to ₹0",
          challenge:
            "A mid-sized exporter received a ₹4.2 crore transfer pricing adjustment on exports to its Singapore subsidiary, claimed to be below arm's length price.",
          solution:
            "Prepared comprehensive TP study using CUP method with 14 comparable uncontrolled transactions, filed DRP objections, and provided economic analysis supporting arm's length pricing.",
          outcome:
            "DRP accepted our analysis; TP adjustment reduced to nil; no further addition to income.",
          impact:
            "Tax saving of ₹1.47 crore (35% of ₹4.2 crore adjustment); company's export structure validated for future years; TP documentation strengthened.",
        },
      ],
    },

    resources: {
      title: "Income Tax Resources",
      description:
        "Practical tools and guides to simplify your income tax compliance and planning.",
      tools: [
        {
          name: "Old vs New Tax Regime Comparison Calculator",
          description:
            "Input your income and deductions to instantly compare tax liability under both regimes",
          type: "Excel Calculator",
        },
        {
          name: "TDS Rate Chart FY 2024-25",
          description: "Comprehensive TDS rate chart for all payment categories including surcharge",
          type: "PDF Reference",
        },
        {
          name: "Advance Tax Calculator",
          description:
            "Estimate instalment-wise advance tax to avoid Section 234C interest",
          type: "Excel Calculator",
        },
        {
          name: "Capital Gains Computation Template",
          description: "STCG/LTCG computation with indexation for property, shares and MFs",
          type: "Excel Template",
        },
      ],
      guides: [
        {
          title: "Which ITR Form Should You File? Complete Guide 2024",
          topics: ["ITR-1", "ITR-2", "ITR-3", "ITR-4", "ITR-5/6/7"],
          readTime: "10 min read",
        },
        {
          title: "Tax-Saving Guide Under Old Regime — All Deductions Explained",
          topics: ["80C", "80D", "HRA", "NPS", "Home Loan"],
          readTime: "20 min read",
        },
        {
          title: "How to Respond to Income Tax Notices — A Practical Guide",
          topics: ["143(1)", "143(2)", "148", "Section 131", "DIN verification"],
          readTime: "15 min read",
        },
      ],
    },

    process: {
      title: "Our 4-Step Tax Filing Process",
      steps: [
        {
          title: "Income Gathering",
          description:
            "We collect all income documents — Form 16, bank statements, capital gains statements, rental income, and foreign income details — through our secure portal.",
        },
        {
          title: "Tax Computation",
          description:
            "Our CA prepares a detailed income computation, maximises eligible deductions, and computes optimal tax liability under applicable regime.",
        },
        {
          title: "Review & Filing",
          description:
            "Computation shared with you for review; ITR filed on Income Tax portal with digital signature or EVC; acknowledgement provided.",
        },
        {
          title: "Post-Filing Support",
          description:
            "Refund status tracking, response to any defective return notices, and year-round advisory on TDS, advance tax, and tax planning.",
        },
      ],
    },

    faqs: [
      {
        question: "Who needs to file an income tax return in India?",
        answer:
          "You must file an ITR if your total income exceeds the basic exemption limit (₹2.5 lakh for below-60, ₹3 lakh for 60–80, ₹5 lakh for 80+) under old regime; ₹3 lakh basic exemption applies under new regime. Filing is also mandatory if you have foreign assets, are a company/firm regardless of income, or have high-value transactions (deposit > ₹1 crore, foreign travel > ₹2 lakh, etc.).",
      },
      {
        question: "What is the difference between old and new tax regime?",
        answer:
          "The old regime allows deductions under Sections 80C, 80D, HRA, home loan interest etc., but has higher tax slabs. The new regime (default from FY 2023-24) has lower slab rates but does not allow most deductions. The new regime is beneficial for those with fewer investments, while the old regime benefits those with significant deductions.",
      },
      {
        question: "Can I revise my ITR after filing?",
        answer:
          "Yes. A revised return can be filed under Section 139(5) to correct errors or omissions in the original return. The revised return must be filed before 31st December of the assessment year. You can also file an Updated Return (ITR-U) under Section 139(8A) within 2 years of the end of the assessment year, with an additional tax of 25–50% of the incremental tax.",
      },
      {
        question: "What is TDS and who is required to deduct it?",
        answer:
          "TDS (Tax Deducted at Source) is a mechanism where the payer deducts income tax from payments such as salary, rent, professional fees, interest, etc., before making payment. Any person or entity making prescribed payments above threshold amounts must deduct TDS, deposit it with the government by the 7th of the following month, and file quarterly TDS returns.",
      },
      {
        question: "How far back can the Income Tax Department reopen my case?",
        answer:
          "For income escaping assessment of ₹50 lakh or more, the department can reopen cases up to 10 years. For smaller amounts, the limit is 3 years from the end of the relevant assessment year. Cases where search operations are conducted have separate timelines under Section 153A.",
      },
    ],

    cta: {
      title: "Expert Tax Guidance for Every Taxpayer",
      description:
        "Whether you're a salaried individual or a large corporation, our CA team ensures accurate filing, maximum savings, and zero compliance risk.",
      primaryButton: "File My Return Now",
      secondaryButton: "Talk to a CA",
    },
  },
};