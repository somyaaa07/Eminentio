export const regulatoryData = {
  roc: {
    title: "ROC Filings",
    description: "Complete Ministry of Corporate Affairs compliance solutions.",
    features: [
      "ROC Filings",
      "Annual Returns",
      "Board Resolutions",
      "Statutory Registers"
    ],

    hero: {
      title: "MCA & ROC Compliance Services",
      subtitle:
        "End-to-end compliance under Companies Act and Ministry of Corporate Affairs.",
      image: "/banner-img/mca-c.png",
      cta: "Get MCA Support"
    },

    about: {
      title: "Stay Compliant with Companies Act",
      description:
        "We assist companies in fulfilling mandatory ROC filings, annual returns, and maintaining statutory registers under MCA regulations.",
      highlights: [
        "Annual ROC filings",
        "Board meeting compliance",
        "Statutory register maintenance",
        "Companies Act advisory"
      ]
    },

    regulatoryOverview: {
      title: "Companies Act Framework",
      introduction: "The Companies Act, 2013 provides a comprehensive framework for incorporation, management, and dissolution of companies in India. MCA (Ministry of Corporate Affairs) is the regulatory body overseeing compliance.",
      keyAspects: [
        {
          title: "Incorporation & Registration",
          description: "Process and requirements for company formation including name approval, registration, and certificate of incorporation.",
          regulations: ["SPICe+ form", "AOA & MOA", "DIN allocation", "PAN & TAN"]
        },
        {
          title: "Annual Compliances",
          description: "Mandatory annual filings including financial statements, annual returns, and director disclosures.",
          regulations: ["AOC-4 filing", "MGT-7 filing", "DIR-3 KYC", "DPT-3 filing"]
        },
        {
          title: "Board & Meeting Requirements",
          description: "Regulations governing board meetings, general meetings, and committee meetings.",
          regulations: ["Board meeting frequency", "AGM requirements", "Notice requirements", "Minutes maintenance"]
        },
        {
          title: "Director Duties & Liabilities",
          description: "Responsibilities of directors including fiduciary duties, disclosure obligations, and liability provisions.",
          regulations: ["Conflict of interest", "Related party transactions", "Board report", "Director appointments"]
        }
      ]
    },

    complianceCalendar: {
      title: "MCA Compliance Calendar",
      description: "Never miss critical ROC deadlines with our comprehensive filing calendar",
      deadlines: [
        {
          period: "Quarterly",
          filings: [
            { form: "Board Meeting", description: "Mandatory board meeting every quarter", dueDate: "Within 120 days of previous meeting" },
            { form: "E-form ADT-1", description: "Appointment of auditor (if applicable)", dueDate: "Within 15 days of AGM" }
          ]
        },
        {
          period: "Annual",
          filings: [
            { form: "AOC-4", description: "Filing of financial statements and annual accounts", dueDate: "Within 30 days of AGM" },
            { form: "MGT-7", description: "Annual return filing", dueDate: "Within 60 days of AGM" },
            { form: "DIR-3 KYC", description: "Director KYC filing", dueDate: "By 30th September annually" },
            { form: "Annual General Meeting", description: "Hold AGM within stipulated time", dueDate: "Within 6 months of FY end (30th September)" },
            { form: "ADT-1", description: "Appointment/re-appointment of auditors", dueDate: "Within 15 days of AGM" },
            { form: "DPT-3", description: "Return of deposits", dueDate: "On or before 30th June annually" }
          ]
        },
        {
          period: "Event-Based",
          filings: [
            { form: "DIR-12", description: "Changes in directors (appointment/resignation)", dueDate: "Within 30 days of change" },
            { form: "MGT-14", description: "Filing of board/shareholder resolutions", dueDate: "Within 30 days of passing resolution" },
            { form: "SH-7", description: "Alteration in share capital", dueDate: "Within 30 days of alteration" },
            { form: "INC-22", description: "Notice of situation/change of registered office", dueDate: "Within 30 days of change" },
            { form: "INC-28", description: "Change in name of company", dueDate: "Within 30 days of special resolution" }
          ]
        },
        {
          period: "Periodic Compliance",
          filings: [
            { form: "Board Meetings", description: "Minimum 4 board meetings per year", dueDate: "Gap not more than 120 days" },
            { form: "Audit Committee Meeting", description: "For applicable companies", dueDate: "At least 4 times a year" },
            { form: "Statutory Registers", description: "Maintenance of mandatory registers", dueDate: "Ongoing" }
          ]
        }
      ]
    },

    industryGuidance: {
      title: "Entity-Specific MCA Compliance",
      description: "Tailored compliance solutions for different company types",
      sectors: [
        {
          name: "Private Limited Companies",
          challenges: [
            "Minimum 2 directors and 2 shareholders requirement",
            "Restrictions on transfer of shares",
            "Compliance with related party transaction norms",
            "Maintenance of statutory books and registers"
          ],
          solutions: [
            "Director appointment and KYC compliance",
            "Share transfer documentation and filing",
            "RPT policy framework and approval matrix",
            "Digital register maintenance systems"
          ]
        },
        {
          name: "One Person Company (OPC)",
          challenges: [
            "Nominee director appointment requirement",
            "Conversion to private limited on threshold breach",
            "Annual compliance with relaxed norms",
            "Limited business activity restrictions"
          ],
          solutions: [
            "Nominee appointment documentation",
            "Threshold monitoring and timely conversion",
            "Simplified compliance management",
            "Business expansion advisory"
          ]
        },
        {
          name: "Public Limited Companies",
          challenges: [
            "Minimum 7 shareholders and 3 directors",
            "Mandatory audit committee and nomination committee",
            "Stringent disclosure and transparency requirements",
            "Quarterly compliance monitoring"
          ],
          solutions: [
            "Board constitution and committee formation",
            "Comprehensive compliance calendar",
            "Disclosure framework implementation",
            "Quarterly compliance tracking"
          ]
        },
        {
          name: "Section 8 Companies (NPO)",
          challenges: [
            "License renewal and compliance with objectives",
            "Restrictions on profit distribution",
            "Minimum 2 directors requirement",
            "Application of income for charitable purposes"
          ],
          solutions: [
            "License maintenance and renewal support",
            "Governance framework for NPOs",
            "Director compliance management",
            "Fund utilization tracking and reporting"
          ]
        },
        {
          name: "Foreign Companies",
          challenges: [
            "Filing of FC-1 and FC-2 forms",
            "Annual accounts filing in prescribed format",
            "Changes in directors and authorized representatives",
            "Compliance with Indian accounting standards"
          ],
          solutions: [
            "Foreign company registration assistance",
            "Ongoing filing and disclosure support",
            "Liaison with Indian representatives",
            "Accounting standard compliance advisory"
          ]
        },
        {
          name: "Startups & Small Companies",
          challenges: [
            "Exemptions under small company criteria",
            "Startup India registration benefits",
            "Compliance relaxations and their applicability",
            "Cost-effective compliance management"
          ],
          solutions: [
            "Small company criteria assessment",
            "Startup registration and benefits advisory",
            "Optimized compliance frameworks",
            "Affordable compliance packages"
          ]
        }
      ]
    },

    violations: {
      title: "Common MCA Violations & Penalties",
      description: "Understanding non-compliance risks and ensuring timely adherence",
      commonViolations: [
        {
          violation: "Delayed Filing of Annual Returns (MGT-7)",
          impact: "High",
          penalty: "₹100 per day of delay (company) + ₹100 per day per officer in default. Maximum penalty can go up to ₹5 lakh for company",
          prevention: "Automated compliance calendar, advance preparation of annual return, timely AGM scheduling"
        },
        {
          violation: "Non-filing of Financial Statements (AOC-4)",
          impact: "Critical",
          penalty: "₹1,000 per day of delay for company and every officer. Can lead to striking off of company name from register",
          prevention: "Timely audit completion, advance board meeting scheduling, systematic documentation"
        },
        {
          violation: "Non-compliance with Board Meeting Requirements",
          impact: "High",
          penalty: "₹25,000 fine for company and ₹5,000 for each director. Repeated violations can lead to director disqualification",
          prevention: "Quarterly board meeting calendar, automated reminders, proper notice and agenda circulation"
        },
        {
          violation: "Failure to File DIR-3 KYC",
          impact: "Critical",
          penalty: "DIN becomes deactivated/marked as 'Deactivated due to non-filing of DIR-3 KYC'. Penalty of ₹5,000 for delayed filing",
          prevention: "Annual DIR-3 KYC filing reminder system, director database maintenance"
        },
        {
          violation: "Non-maintenance of Statutory Registers",
          impact: "Medium",
          penalty: "₹50,000 fine for company and ₹1,000 per day for continuing violation per officer",
          prevention: "Digital statutory register systems, regular updates, dedicated compliance personnel"
        },
        {
          violation: "Acceptance of Deposits without Compliance",
          impact: "Critical",
          penalty: "Imprisonment up to 7 years and fine up to ₹50 crore. Company liable to refund with interest",
          prevention: "Understanding deposit regulations, legal opinion for any fund raising, proper documentation"
        }
      ],
      strikeOffProcess: {
        title: "Company Strike-Off & Dormant Status",
        strikeOff: {
          grounds: [
            "Non-filing of financial statements/annual returns for continuous 2 years",
            "Non-commencement of business within 1 year of incorporation",
            "Not carrying on business for 2 immediately preceding financial years",
            "Defunct company"
          ],
          consequences: ["Company name removed from ROC", "Dissolution of company", "Assets vest with government", "Revival requires NCLT approval"]
        },
        dormantStatus: {
          eligibility: "Company formed for future project or holding asset with no significant accounting transactions",
          process: ["File MSC-1 along with indemnity bond", "File MSC-3 every year", "File MSC-4 for becoming active again"],
          benefits: ["Reduced compliance burden", "Lower penalties", "Easy revival process"]
        }
      }
    },

    caseStudies: {
      title: "MCA Compliance Success Stories",
      description: "How we've helped companies maintain perfect ROC compliance",
      studies: [
        {
          title: "Startup to Public Company - Complete Transformation",
          industry: "Technology",
          challenge: "A rapidly growing tech startup needed to convert from private to public limited company in preparation for listing. The company had pending compliances for 2 years including unfiled annual returns, board meeting gaps, and unresolved audit qualifications.",
          solution: "We conducted comprehensive compliance audit, filed all pending forms with condonation applications, regularized board meetings, resolved audit qualifications, and executed seamless conversion to public limited company. Post-conversion, established robust compliance framework with quarterly reviews.",
          outcome: "All 18 pending compliances cleared within 90 days. Successful conversion to public limited company. Zero compliance gaps at the time of SEBI due diligence for IPO.",
          impact: "Enabled ₹800 crore IPO, established compliance culture preventing future violations"
        },
        {
          title: "Preventing Strike-Off - Last Minute Rescue",
          industry: "Manufacturing",
          challenge: "A manufacturing company received strike-off notice from ROC for non-filing of returns for 2 consecutive years. The company had been dormant but directors were unaware of ongoing compliance requirements.",
          solution: "Filed urgent representation against strike-off notice with detailed explanation. Simultaneously filed all pending returns (4 years of AOC-4 and MGT-7) with additional fees and condonation. Regularized director KYC and updated registered office details.",
          outcome: "Strike-off proceedings dropped by ROC. Company restored to active status with all compliances up to date.",
          impact: "Saved company from dissolution, preserved ₹50 crore asset base, avoided NCLT revival proceedings costing ₹10+ lakh"
        },
        {
          title: "Section 8 Company - License Renewal & Compliance",
          industry: "Non-Profit",
          challenge: "An educational trust operating as Section 8 company faced potential license cancellation due to non-compliance with charitable objects and delayed filing of annual documents.",
          solution: "Prepared detailed report demonstrating application of funds for charitable purposes, regularized all pending filings, restructured activities to align with MOA objectives, and established quarterly compliance review mechanism.",
          outcome: "License retained, compliance status restored, received appreciation from ROC for improved governance.",
          impact: "Continued operations serving 5,000+ students annually, maintained tax exemptions worth ₹2 crore per year"
        },
        {
          title: "Multi-Subsidiary Group - Centralized Compliance Management",
          industry: "Retail",
          challenge: "A retail group with 25 subsidiary companies faced compliance chaos with multiple missed deadlines, inconsistent documentation, and lack of centralized oversight. Annual compliance cost was ₹40 lakh with frequent penalties.",
          solution: "Implemented group-level compliance management system with centralized calendar, standardized documentation templates, automated reminder systems, and dedicated compliance team. Created dashboard for real-time compliance status tracking across all entities.",
          outcome: "Zero missed deadlines in subsequent 3 years. Reduced compliance cost by 35% through efficiency. Avoided penalties worth ₹15 lakh annually.",
          impact: "Improved governance ratings, investor confidence increased, streamlined operations across group"
        }
      ]
    },

    resources: {
      title: "MCA Compliance Resources",
      description: "Essential tools and guides for maintaining corporate compliance",
      tools: [
        {
          name: "Annual Compliance Checklist",
          description: "Month-wise compliance calendar for companies",
          type: "Excel Template"
        },
        {
          name: "Board Resolution Templates",
          description: "Ready-to-use templates for common board resolutions",
          type: "Word Documents"
        },
        {
          name: "Statutory Register Formats",
          description: "Prescribed formats for all mandatory registers",
          type: "Excel Templates"
        },
        {
          name: "Fee Calculator",
          description: "Calculate ROC filing fees including additional fees for delays",
          type: "Interactive Tool"
        },
        {
          name: "Form Requirement Matrix",
          description: "Quick reference for which form to file for different events",
          type: "PDF Guide"
        },
        {
          name: "MCA Notification Tracker",
          description: "Updates on latest MCA circulars and rule changes",
          type: "Email Alerts"
        }
      ],
      guides: [
        {
          title: "Company Incorporation Guide",
          topics: ["Name approval", "SPICe+ filing", "Post-incorporation compliance", "Initial statutory registers"],
          readTime: "20 min"
        },
        {
          title: "Annual Filing Handbook",
          topics: ["AOC-4 preparation", "MGT-7 filing", "AGM compliance", "Board report requirements"],
          readTime: "25 min"
        },
        {
          title: "Director Compliance Manual",
          topics: ["DIN application", "DIR-3 KYC", "Appointment/resignation procedures", "Disclosure requirements"],
          readTime: "15 min"
        },
        {
          title: "Statutory Meetings Guide",
          topics: ["Board meeting requirements", "AGM/EGM procedures", "Notice requirements", "Minutes drafting"],
          readTime: "18 min"
        }
      ]
    },

    detailedFeatures: [
      {
        icon: "📑",
        title: "ROC Filings",
        description: "Filing of forms such as AOC-4, MGT-7, DIR-3 KYC and others."
      },
      {
        icon: "📅",
        title: "Annual Returns",
        description: "Preparation and filing of annual financial statements."
      },
      {
        icon: "✍️",
        title: "Board Resolutions",
        description: "Drafting and maintaining board resolutions and minutes."
      },
      {
        icon: "📚",
        title: "Statutory Registers",
        description: "Maintenance of mandatory registers under Companies Act."
      },
      {
        icon: "🏛️",
        title: "Company Incorporation",
        description: "End-to-end support for company registration and incorporation."
      },
      {
        icon: "🔄",
        title: "Compliance Tracking",
        description: "Ongoing monitoring and compliance calendar management."
      }
    ],

    process: {
      title: "Our ROC Filing Process",
      steps: [
        { number: "01", title: "Review", description: "Check compliance requirements." },
        { number: "02", title: "Documentation", description: "Prepare required documents." },
        { number: "03", title: "Filing", description: "Submit forms with ROC." },
        { number: "04", title: "Ongoing Support", description: "Continuous compliance monitoring." }
      ]
    },

    faqs: [
      {
        question: "Who needs MCA compliance?",
        answer:
          "All companies registered under the Companies Act must comply with MCA filing requirements."
      },
      {
        question: "What is the penalty for delayed filing of annual returns?",
        answer:
          "For MGT-7 (annual return), the penalty is ₹100 per day of delay for the company and ₹100 per day for every officer in default. For AOC-4 (financial statements), it's ₹1,000 per day for company and every officer. The total penalty can go up to ₹5 lakh for the company."
      },
      {
        question: "What is DIR-3 KYC and when should it be filed?",
        answer:
          "DIR-3 KYC is an annual KYC filing required for all directors holding a Director Identification Number (DIN). It must be filed between April 1st and September 30th every year. Non-filing leads to deactivation of DIN and penalty of ₹5,000."
      },
      {
        question: "How many board meetings are mandatory in a year?",
        answer:
          "Minimum 4 board meetings must be held every year with maximum gap of 120 days between two consecutive meetings. At least one meeting must be held in each half of the calendar year. Violation attracts penalty of ₹25,000 for company and ₹5,000 per director."
      },
      {
        question: "What happens if my company doesn't file returns for 2 years?",
        answer:
          "If a company fails to file financial statements or annual returns for continuous 2 years, the Registrar may initiate strike-off proceedings. The company name can be removed from the register of companies, leading to dissolution. Revival requires NCLT proceedings which are time-consuming and expensive."
      },
      {
        question: "What is a small company and what are the exemptions?",
        answer:
          "A small company is one with paid-up capital not exceeding ₹4 crore and turnover not exceeding ₹40 crore. Exemptions include: no requirement for cash flow statement, relaxed board report requirements, lesser quorum for meetings, and certain compliance relaxations. One-person companies and Section 8 companies cannot be classified as small companies."
      },
      {
        question: "Can I file forms after the due date?",
        answer:
          "Yes, most forms can be filed after due date with payment of additional fees. The additional fee structure is: up to 30 days delay - normal additional fees; 31-60 days - 2 times additional fees; 61-90 days - 4 times; 91-180 days - 6 times; beyond 180 days - 10 times normal additional fees. Some forms require condonation of delay."
      },
      {
        question: "What statutory registers must a company maintain?",
        answer:
          "Mandatory registers include: Register of Members, Register of Debenture Holders, Foreign Register (if applicable), Register of Loans/Guarantees/Securities, Register of Investments, Register of Contracts in which Directors are interested, Register of Directors and KMP, Register of Charges, and Minutes Books. These must be maintained at registered office and available for inspection."
      }
    ],

    cta: {
      title: "Stay MCA Compliant",
      description: "Avoid penalties with timely ROC filings.",
      primaryButton: "Book MCA Consultation",
      secondaryButton: "Talk to Compliance Expert"
    }
  },

  fema: {
    title: "FEMA / RBI Compliance",
    description: "Complete FEMA compliance, foreign transaction reporting, and RBI regulatory services.",
    features: [
      "FDI Reporting",
      "ODI Compliance",
      "FC-GPR Filing",
      "Annual Return Filing",
      "NBFC Compliance",
      "RBI Returns",
      "Foreign Remittance Reporting",
      "KYC Compliance"
    ],

    hero: {
      title: "FEMA & RBI Compliance Services",
      subtitle:
        "Expert assistance for foreign investments, cross-border transactions, RBI reporting, and NBFC regulatory requirements.",
      image: "/banner-img/about.png",
      cta: "Get FEMA / RBI Consultation"
    },

    about: {
      title: "Foreign Exchange & RBI Compliance Made Easy",
      description:
        "We assist businesses in complying with FEMA regulations related to foreign investments, overseas transactions, and reporting requirements, as well as complete RBI compliance services including periodic reporting, regulatory filings, and advisory for financial institutions and businesses.",
      highlights: [
        "FDI & ODI reporting support",
        "RBI compliance filing",
        "Foreign remittance advisory",
        "NBFC regulatory compliance",
        "Penalty avoidance guidance",
        "KYC & AML compliance"
      ]
    },

    regulatoryOverview: {
      title: "Understanding FEMA & RBI Regulations",
      introduction: "The Foreign Exchange Management Act (FEMA) was enacted in 1999 to consolidate and amend the law relating to foreign exchange with the objective of facilitating external trade and payments. The Reserve Bank of India (RBI) is the central banking institution of India, controlling monetary policy and regulating the financial system including NBFCs, payment systems, and foreign exchange operations.",
      keyAspects: [
        {
          title: "Foreign Direct Investment (FDI)",
          description: "Governs investment by foreign entities in Indian companies through equity instruments, convertible debentures, or compulsorily convertible preference shares.",
          regulations: ["Automatic Route", "Government Route", "Sectoral Caps", "Entry Routes"]
        },
        {
          title: "Overseas Direct Investment (ODI)",
          description: "Regulates investments made by Indian entities in foreign companies through equity, debt instruments, or guarantees.",
          regulations: ["Financial Commitment Route", "Permitted Sectors", "Funding Requirements", "Annual Performance Reports"]
        },
        {
          title: "NBFC Regulations",
          description: "Comprehensive framework governing Non-Banking Financial Companies including registration, capital requirements, and operational guidelines.",
          regulations: ["Registration Requirements", "Capital Adequacy Norms", "Asset Classification", "Prudential Norms"]
        },
        {
          title: "KYC & AML Framework",
          description: "Know Your Customer and Anti-Money Laundering guidelines to prevent financial crimes and ensure customer due diligence.",
          regulations: ["Customer Identification", "Risk Categorization", "Ongoing Monitoring", "Suspicious Transaction Reporting"]
        },
        {
          title: "External Commercial Borrowings",
          description: "Framework for Indian entities to raise commercial loans from non-resident lenders.",
          regulations: ["Track I - Medium/Long Term", "Track II - Foreign Currency/Rupee Loans", "All-in-Cost Ceilings", "End-use Restrictions"]
        },
        {
          title: "Payment Systems",
          description: "Regulations for payment aggregators, wallets, prepaid instruments, and digital payment platforms.",
          regulations: ["PA-PG Guidelines", "PPI Master Directions", "Interoperability Norms", "Security Standards"]
        }
      ]
    },

    complianceCalendar: {
      title: "FEMA & RBI Compliance Calendar",
      description: "Stay ahead with our comprehensive compliance calendar for all FEMA and RBI-related deadlines",
      deadlines: [
        {
          period: "Monthly",
          filings: [
            { form: "LEC Return", description: "Return of Foreign Liabilities and Assets", dueDate: "7th of following month" },
            { form: "ECB-2 Return", description: "ECB monthly information return", dueDate: "7th of following month" },
            { form: "NBS-1/NBS-7", description: "Monthly statement of position for NBFCs", dueDate: "15th of following month" },
            { form: "ALM Statement", description: "Asset-Liability Management return", dueDate: "15th of following month" },
            { form: "CTR Filing", description: "Cash Transaction Report", dueDate: "15th of following month" }
          ]
        },
        {
          period: "Quarterly",
          filings: [
            { form: "FDI Returns", description: "Reporting of FDI received", dueDate: "Within 30 days of quarter end" },
            { form: "FLA-RBI Return", description: "Return on Foreign Liabilities and Assets", dueDate: "15th day of succeeding quarter" },
            { form: "NBS-2/NBS-8", description: "Prudential norms return for NBFCs", dueDate: "30 days after quarter end" },
            { form: "NBS-3", description: "Certificate of compliance (deposit-taking NBFCs)", dueDate: "30 days after quarter end" },
            { form: "Fraud Reporting", description: "Fraud incidents and prevention report", dueDate: "15 days after quarter end" }
          ]
        },
        {
          period: "Annual",
          filings: [
            { form: "FC-GPR", description: "Foreign Currency - Gross Provisional Return", dueDate: "Within 30 days from closure of FY" },
            { form: "Annual Return on FLA", description: "Comprehensive FLA return", dueDate: "July 15th" },
            { form: "ODI Annual Performance", description: "Annual Performance Report for ODI", dueDate: "Within 6 months of FY end" },
            { form: "NBS-9", description: "Annual statement of capital funds", dueDate: "30th June" },
            { form: "Statutory Audit Report", description: "Annual audited financials with auditor's report", dueDate: "As per AGM timeline" },
            { form: "Compliance Certificate", description: "Annual statutory compliance certificate", dueDate: "30th June" }
          ]
        },
        {
          period: "Event-Based",
          filings: [
            { form: "ARF/FC-TRS", description: "Advance Reporting Form/Transfer of Shares", dueDate: "Within 60 days of receipt/transfer" },
            { form: "LLP-I", description: "Foreign Investment in LLP", dueDate: "Within 30 days of investment" },
            { form: "ODI Declaration", description: "Overseas investment declaration", dueDate: "Within 6 months of investment" },
            { form: "STR", description: "Suspicious Transaction Report", dueDate: "Within 7 days of suspicion" },
            { form: "Change in Management", description: "Intimation of director/CEO changes", dueDate: "Within 15 days of change" },
            { form: "Material Changes", description: "Reporting of material operational changes", dueDate: "Immediate intimation" }
          ]
        }
      ]
    },

    industryGuidance: {
      title: "Industry-Specific FEMA & RBI Compliance",
      description: "Tailored compliance solutions for different sectors",
      sectors: [
        {
          name: "E-Commerce & Technology",
          icon: "💻",
          challenges: [
            "FDI in marketplace vs inventory model",
            "Compliance with Press Note 2 of 2016",
            "Cross-border payment gateway regulations",
            "Data localization and FEMA implications"
          ],
          solutions: [
            "Structuring advice for permissible business models",
            "Regulatory filings for technology investments",
            "Compliance framework for digital payments"
          ]
        },
        {
          name: "Microfinance Institutions",
          icon: "🏦",
          challenges: [
            "Fair practices code implementation",
            "Interest rate cap compliance",
            "Over-indebtedness prevention",
            "Household income assessment requirements"
          ],
          solutions: [
            "Automated interest rate monitoring",
            "Credit bureau integration for indebtedness check",
            "Field officer training programs",
            "Responsible lending framework implementation"
          ]
        },
        {
          name: "Pharmaceuticals & Healthcare",
          icon: "⚕️",
          challenges: [
            "FDI caps in pharmaceutical sector",
            "Technology transfer agreements",
            "Royalty and technical know-how payments",
            "Clinical trial remittances"
          ],
          solutions: [
            "Regulatory approvals for FDI",
            "Compliance for research collaborations",
            "Technology transfer pricing"
          ]
        },
        {
          name: "Real Estate & Construction",
          icon: "🏢",
          challenges: [
            "FDI restrictions in real estate",
            "Minimum area and capitalization requirements",
            "Repatriation of sale proceeds",
            "Joint venture structuring"
          ],
          solutions: [
            "Investment structuring advice",
            "Compliance with sectoral conditions",
            "Exit and repatriation planning"
          ]
        },
        {
          name: "Fintech & Payment Companies",
          icon: "💳",
          challenges: [
            "PA-PG authorization requirements",
            "Data localization mandates",
            "Customer grievance redressal timelines",
            "Cybersecurity and system audit compliance"
          ],
          solutions: [
            "RBI authorization application support",
            "Data infrastructure advisory",
            "Grievance management system setup",
            "IS audit and cybersecurity framework"
          ]
        },
        {
          name: "Startups & Innovation",
          icon: "🚀",
          challenges: [
            "Convertible note structuring",
            "ESOP grants to foreign employees",
            "Foreign funding compliance",
            "Valuation and pricing guidelines"
          ],
          solutions: [
            "Funding round compliance",
            "ESOP and equity advisory",
            "RBI reporting and filings"
          ]
        }
      ]
    },

    violations: {
      title: "Common FEMA & RBI Violations & Penalties",
      description: "Understanding risks and ensuring compliance to avoid penalties",
      commonViolations: [
        {
          violation: "Delayed or Non-filing of Returns",
          impact: "High",
          penalty: "Up to 3 times the sum involved or ₹2 lakh per day (whichever is higher)",
          prevention: "Automated compliance tracking and timely filing reminders"
        },
        {
          violation: "Unauthorized Foreign Investment",
          impact: "Critical",
          penalty: "Compounding fees up to ₹1 crore plus regularization requirements",
          prevention: "Pre-investment regulatory review and structuring advice"
        },
        {
          violation: "KYC Non-Compliance",
          impact: "Critical",
          penalty: "Monetary penalty up to ₹1 crore, license cancellation in severe cases",
          prevention: "Robust KYC systems, periodic audits, staff training"
        },
        {
          violation: "Capital Adequacy Breach",
          impact: "Critical",
          penalty: "Restrictions on business operations, mandatory corrective action",
          prevention: "Regular capital monitoring, infusion planning"
        },
        {
          violation: "Non-realization of Export Proceeds",
          impact: "High",
          penalty: "Penalty up to 3 times the amount plus investigation",
          prevention: "Export documentation and follow-up systems"
        },
        {
          violation: "Non-reporting of Suspicious Transactions",
          impact: "Critical",
          penalty: "Penalty up to ₹1 lakh, prosecution under PMLA",
          prevention: "Transaction monitoring systems, staff awareness programs"
        }
      ],
      compoundingProcess: {
        title: "FEMA Compounding Process",
        steps: [
          "Detection or self-disclosure of violation",
          "Application for compounding to RBI",
          "Payment of compounding fee",
          "Submission of compliance documents",
          "RBI review and order",
          "Implementation of regularization measures"
        ],
        timeline: "Typically 6-12 months",
        benefits: ["Avoids prosecution", "Regularizes non-compliant transactions", "Restores compliance status"]
      }
    },

    caseStudies: {
      title: "Success Stories & Case Studies",
      description: "Real-world examples of how we've helped clients navigate FEMA & RBI compliance",
      studies: [
        {
          title: "Global Tech Investment - $50M FDI Structuring",
          industry: "Technology",
          challenge: "A US-based venture capital firm wanted to invest $50 million in an Indian SaaS startup. The investment involved multiple tranches, convertible instruments, and anti-dilution protections that needed careful FEMA structuring.",
          solution: "We structured the investment through a combination of compulsorily convertible preference shares (CCPS) and equity shares, ensuring compliance with automatic route provisions and pricing guidelines under FEMA.",
          outcome: "Successful investment closure within 45 days, all regulatory filings completed, and ongoing compliance framework established.",
          impact: "Zero delays, 100% regulatory compliance, enabling the startup to scale operations"
        },
        {
          title: "NBFC Registration - From Application to Approval",
          industry: "Fintech Lending",
          challenge: "A fintech startup providing digital lending solutions needed NBFC-ICC registration to scale operations. The founders had limited understanding of RBI requirements and faced complexity in documentation and compliance frameworks.",
          solution: "We handled end-to-end registration including business plan preparation, financial projections, NOF certification, and RBI application. Post-registration, we established complete compliance infrastructure including NPA recognition systems, ALM framework, and periodic return filing mechanisms.",
          outcome: "NBFC registration certificate obtained within 8 months. Compliance framework established for sustainable operations with zero regulatory gaps.",
          impact: "Enabled company to raise ₹100 crore in debt funding, scaled lending book from ₹10 crore to ₹500 crore in 2 years"
        },
        {
          title: "E-commerce Platform - Marketplace Model Compliance",
          industry: "E-commerce",
          challenge: "A growing e-commerce marketplace had inadvertently violated FDI regulations by providing discounts funded by foreign investors, risking their entire business model.",
          solution: "We conducted a comprehensive compliance audit, restructured their business operations to align with Press Note 2 guidelines, and filed for compounding of past violations.",
          outcome: "Successful regularization of past violations, restructured operations within compliant framework, saved business from shutdown.",
          impact: "Business continuity ensured, ₹15 crore in potential penalties avoided"
        },
        {
          title: "KYC Compliance Overhaul - Avoided Penalties",
          industry: "Microfinance",
          challenge: "An MFI with 50,000+ customers faced RBI inspection highlighting serious KYC deficiencies including incomplete documentation, lack of risk categorization, and missing beneficial ownership verification.",
          solution: "Conducted comprehensive KYC audit of entire customer base, implemented digital KYC collection system, trained 200+ field officers, established centralized KYC review team, and developed real-time compliance dashboards.",
          outcome: "Remediated 95% of KYC gaps within 6 months. Passed RBI follow-up inspection with zero major observations.",
          impact: "Avoided potential penalty of ₹2+ crore, restored regulatory standing, prevented license suspension"
        }
      ]
    },

    resources: {
      title: "FEMA & RBI Resources & Tools",
      description: "Helpful resources to understand and comply with FEMA and RBI regulations",
      tools: [
        {
          name: "FEMA Compliance Checklist",
          description: "Comprehensive checklist for FDI, ODI, and other FEMA transactions",
          type: "Downloadable PDF",
          icon: "📋"
        },
        {
          name: "NBFC Compliance Checklist",
          description: "Comprehensive checklist covering all NBFC compliance requirements",
          type: "Excel Template",
          icon: "📊"
        },
        {
          name: "Sectoral FDI Cap Calculator",
          description: "Quick reference tool for FDI limits across different sectors",
          type: "Interactive Tool",
          icon: "🧮"
        },
        {
          name: "NPA Classification Calculator",
          description: "Tool for determining asset classification and provisioning requirements",
          type: "Interactive Tool",
          icon: "📈"
        },
        {
          name: "Filing Calendar Template",
          description: "Customizable compliance calendar for your organization",
          type: "Excel Template",
          icon: "📅"
        },
        {
          name: "FEMA & RBI Amendment Tracker",
          description: "Regular updates on regulatory changes and amendments",
          type: "Newsletter",
          icon: "📰"
        }
      ],
      guides: [
        {
          title: "FDI for Beginners: A Complete Guide",
          topics: ["Understanding FDI routes", "Sectoral caps", "Pricing guidelines", "Reporting requirements"],
          readTime: "15 min"
        },
        {
          title: "ODI Compliance Handbook",
          topics: ["Investment limits", "Approval process", "Funding norms", "Annual reporting"],
          readTime: "20 min"
        },
        {
          title: "NBFC Registration: Step-by-Step Guide",
          topics: ["Eligibility criteria", "Documentation requirements", "Application process", "Post-registration compliance"],
          readTime: "20 min"
        },
        {
          title: "KYC & AML Compliance Handbook",
          topics: ["Customer identification", "Risk categorization", "Suspicious transaction reporting", "Record keeping"],
          readTime: "25 min"
        }
      ],
      regulations: [
        { name: "FEMA Act, 1999", link: "#", category: "Primary Legislation" },
        { name: "FDI Policy (Consolidated)", link: "#", category: "Investment" },
        { name: "Master Direction on Reporting", link: "#", category: "Compliance" },
        { name: "ECB Master Direction", link: "#", category: "Borrowing" },
        { name: "ODI Master Direction", link: "#", category: "Overseas Investment" },
        { name: "NBFC Master Directions", link: "#", category: "NBFC Regulation" }
      ]
    },

    detailedFeatures: [
      {
        icon: "🏦",
        title: "FDI Reporting",
        description:
          "Filing of FC-GPR and other required forms for foreign direct investment transactions."
      },
      {
        icon: "🌏",
        title: "ODI Compliance",
        description:
          "Overseas Direct Investment compliance and reporting under FEMA guidelines."
      },
      {
        icon: "🏛️",
        title: "NBFC Compliance",
        description:
          "Compliance support for NBFC registration, reporting, and RBI regulations."
      },
      {
        icon: "📑",
        title: "RBI Returns Filing",
        description:
          "Preparation and submission of periodic RBI returns including NBS, ALM, and others."
      },
      {
        icon: "🔐",
        title: "KYC & AML Compliance",
        description:
          "Ensuring compliance with Know Your Customer and Anti-Money Laundering guidelines."
      },
      {
        icon: "⚖️",
        title: "Compounding Services",
        description:
          "Expert assistance in compounding of FEMA violations and regularization."
      }
    ],

    process: {
      title: "Our FEMA & RBI Compliance Process",
      steps: [
        { number: "01", title: "Assessment", description: "Identify applicable FEMA and RBI provisions." },
        { number: "02", title: "Documentation", description: "Prepare required investment and transaction documents." },
        { number: "03", title: "Filing", description: "Submit forms with RBI through authorized portals." },
        { number: "04", title: "Monitoring", description: "Ongoing compliance tracking and advisory support." }
      ]
    },

    faqs: [
      {
        question: "Who needs FEMA compliance?",
        answer:
          "Businesses receiving foreign investment or making overseas investments must comply with FEMA regulations. This includes Indian companies with FDI, Indian entities making ODI, exporters, importers, and any entity involved in foreign exchange transactions."
      },
      {
        question: "Who needs RBI compliance?",
        answer:
          "NBFCs, financial institutions, payment system operators, and businesses dealing with foreign exchange transactions require RBI compliance."
      },
      {
        question: "What is FC-GPR?",
        answer:
          "FC-GPR (Foreign Currency - Gross Provisional Return) is a form filed with RBI for reporting foreign investment in Indian companies. It must be filed within 30 days from the closure of financial year in which FDI was received."
      },
      {
        question: "What are the penalties for FEMA violations?",
        answer:
          "FEMA violations can attract penalties up to three times the sum involved in contravention. For continued violations, additional penalties up to ₹2 lakh per day can be imposed. However, violations can be compounded by paying appropriate fees to RBI."
      },
      {
        question: "How to register an NBFC with RBI?",
        answer:
          "NBFC registration requires minimum net owned funds (₹2 crore for most categories), submission of application with detailed business plan, and approval from RBI. The process typically takes 6-12 months."
      },
      {
        question: "What is the penalty for KYC violations?",
        answer:
          "KYC violations can attract monetary penalties up to ₹1 crore depending on severity. Repeated violations can lead to license cancellation and criminal prosecution under Prevention of Money Laundering Act (PMLA)."
      },
      {
        question: "What is the difference between automatic and government route for FDI?",
        answer:
          "Under automatic route, FDI is allowed without prior government approval, subject to sectoral caps and entry conditions. Government route requires prior approval from relevant ministry/FIPB for sectors where FDI is not permitted under automatic route."
      },
      {
        question: "What is CRAR and what is the minimum requirement for NBFCs?",
        answer:
          "CRAR (Capital to Risk-weighted Assets Ratio) measures capital adequacy of NBFCs. RBI mandates minimum CRAR of 15% for all NBFCs. This ensures the entity has sufficient capital buffer to absorb potential losses."
      }
    ],

    cta: {
      title: "Ensure Smooth Foreign Transactions & RBI Compliance",
      description: "Stay compliant with FEMA regulations and RBI guidelines. Avoid penalties.",
      primaryButton: "Book FEMA / RBI Consultation",
      secondaryButton: "Talk to Expert"
    }
  },

  labour: {
    title: "Labour Law Compliance",
    description: "End-to-end labour law compliance solutions for businesses of all sizes.",
    features: [
      "PF & ESI Compliance",
      "Labour Law Registrations",
      "Payroll Compliance",
      "Factory & Shop Act"
    ],

    hero: {
      title: "Labour Law Compliance Services",
      subtitle:
        "Comprehensive support for PF, ESI, payroll, and all statutory labour law requirements under Indian law.",
      image: "/banner-img/labour.png",
      cta: "Get Labour Law Support"
    },

    about: {
      title: "Stay Compliant with Labour Laws",
      description:
        "We provide end-to-end labour law compliance services including PF/ESI registrations, payroll statutory compliance, factory act registrations, and advisory for businesses across industries.",
      highlights: [
        "PF & ESI registration and filing",
        "Payroll statutory compliance",
        "Factory & Shops Act registration",
        "Contract labour compliance"
      ]
    },

    regulatoryOverview: {
      title: "Labour Law Regulatory Framework",
      introduction: "India's labour law framework encompasses a wide range of central and state legislation governing employment, wages, social security, industrial relations, and working conditions. The government has recently consolidated 29 central labour laws into 4 Labour Codes for simplified compliance.",
      keyAspects: [
        {
          title: "Social Security Laws",
          description: "Framework covering provident fund, employee state insurance, gratuity, and other social security benefits for employees.",
          regulations: ["Employees' Provident Fund Act", "ESI Act 1948", "Payment of Gratuity Act", "Maternity Benefit Act"]
        },
        {
          title: "Wages & Compensation",
          description: "Regulations governing minimum wages, payment of wages, bonus, and other compensation-related provisions.",
          regulations: ["Minimum Wages Act", "Payment of Wages Act", "Payment of Bonus Act", "Equal Remuneration Act"]
        },
        {
          title: "Industrial Relations",
          description: "Framework for managing employer-employee disputes, trade unions, and industrial actions.",
          regulations: ["Industrial Disputes Act", "Trade Unions Act", "Industrial Employment Standing Orders", "Code on Industrial Relations 2020"]
        },
        {
          title: "Working Conditions",
          description: "Regulations governing hours of work, leave entitlements, workplace safety, and employment conditions.",
          regulations: ["Factories Act 1948", "Shops & Establishments Act", "Contract Labour Act", "Building & Other Construction Workers Act"]
        }
      ]
    },

    complianceCalendar: {
      title: "Labour Law Compliance Calendar",
      description: "Stay on top of all critical labour law deadlines",
      deadlines: [
        {
          period: "Monthly",
          filings: [
            { form: "PF ECR Filing", description: "Electronic Challan cum Return for Provident Fund", dueDate: "15th of following month" },
            { form: "ESI Contribution", description: "Employee State Insurance monthly contribution", dueDate: "15th of following month" },
            { form: "PT Return", description: "Professional Tax return (state-specific)", dueDate: "Varies by state" },
            { form: "TDS on Salaries", description: "Tax Deducted at Source on employee salaries", dueDate: "7th of following month" }
          ]
        },
        {
          period: "Quarterly",
          filings: [
            { form: "PF Return (Form 6A)", description: "Annual member-wise contribution (quarterly reconciliation)", dueDate: "25 days after quarter end" },
            { form: "TDS Return (24Q)", description: "Quarterly TDS return for salary", dueDate: "31 days after quarter end" },
            { form: "ESI Return (Form 6)", description: "Half-yearly ESI contribution return", dueDate: "11th of month following half-year" }
          ]
        },
        {
          period: "Annual",
          filings: [
            { form: "PF Annual Return", description: "Annual PF return submission", dueDate: "30th April" },
            { form: "Bonus Payment", description: "Annual bonus to eligible employees", dueDate: "Within 8 months of close of accounting year" },
            { form: "Maternity Benefit Register", description: "Annual register of maternity benefit claims", dueDate: "Annually" },
            { form: "Form 16 Issuance", description: "TDS certificate to employees", dueDate: "31st May" }
          ]
        },
        {
          period: "Event-Based",
          filings: [
            { form: "New Employee PF Enrollment", description: "UAN generation and PF enrollment for new joinees", dueDate: "Within 1 month of joining" },
            { form: "ESI Registration of Employee", description: "Registration of new employee under ESI", dueDate: "Within 10 days of joining" },
            { form: "Gratuity Payment", description: "Payment of gratuity upon employee leaving after 5 years", dueDate: "Within 30 days of due date" }
          ]
        }
      ]
    },

    industryGuidance: {
      title: "Industry-Specific Labour Law Compliance",
      description: "Tailored compliance solutions for different industries",
      sectors: [
        {
          name: "IT & Software",
          icon: "💻",
          challenges: [
            "PF applicability for high-salary employees",
            "ESOP and variable pay structuring",
            "Work from home and remote work policies",
            "Contract and gig worker compliance"
          ],
          solutions: [
            "Salary structuring advisory",
            "ESOP tax and compliance guidance",
            "Remote work policy frameworks",
            "Gig worker compliance advisory"
          ]
        },
        {
          name: "Manufacturing & Factory",
          icon: "🏭",
          challenges: [
            "Factories Act registration and renewal",
            "Shift work and overtime compliance",
            "Safety officer and welfare officer appointment",
            "Contract labour license under CLRA"
          ],
          solutions: [
            "Factory license registration and renewal",
            "Leave and attendance compliance systems",
            "Safety compliance framework",
            "Contract labour compliance management"
          ]
        },
        {
          name: "Retail & E-commerce",
          icon: "🛍️",
          challenges: [
            "Shops & Establishments Act state-wise compliance",
            "Part-time and seasonal worker compliance",
            "Sunday working and holiday compliance",
            "Multiple state registration management"
          ],
          solutions: [
            "State-wise Shops Act registration",
            "Attendance and leave management",
            "Multi-state compliance framework",
            "Festive season compliance advisory"
          ]
        },
        {
          name: "Construction",
          icon: "🏗️",
          challenges: [
            "BOCW (Building & Construction Workers) compliance",
            "Contract labour on-site compliance",
            "Workmen compensation and safety",
            "Migrant worker compliance"
          ],
          solutions: [
            "BOCW cess registration and payment",
            "On-site contract labour compliance",
            "Workmen compensation policy guidance",
            "Migrant worker registration"
          ]
        },
        {
          name: "Hospitality & F&B",
          icon: "🍽️",
          challenges: [
            "Tips and service charge compliance",
            "Night work and extended hours regulations",
            "Seasonal staffing compliance",
            "State-specific hotel/restaurant regulations"
          ],
          solutions: [
            "Wage and tips compliance advisory",
            "Night shift allowance frameworks",
            "Seasonal employment structuring",
            "State-specific license and permit guidance"
          ]
        },
        {
          name: "Healthcare",
          icon: "⚕️",
          challenges: [
            "Clinical establishment act compliance",
            "Doctor and medical staff employment terms",
            "On-call duty and overtime regulations",
            "ESI compliance for medical establishments"
          ],
          solutions: [
            "Clinical establishment registration",
            "Employment contract structuring",
            "Duty roster and overtime compliance",
            "ESI and PF compliance management"
          ]
        }
      ]
    },

    violations: {
      title: "Common Labour Law Violations & Penalties",
      description: "Understanding non-compliance risks under labour laws",
      commonViolations: [
        {
          violation: "Non-payment / Delayed PF Contributions",
          impact: "High",
          penalty: "Interest @ 12% p.a. on delayed payment + damages up to 25% of arrears. Criminal prosecution for willful default.",
          prevention: "Automated payroll systems with PF deduction and timely challan generation"
        },
        {
          violation: "ESI Non-compliance",
          impact: "High",
          penalty: "Interest @ 12% p.a. + damages up to 25% of arrears. Prosecution under ESI Act.",
          prevention: "Regular salary review for ESI applicability, timely enrollment and contribution"
        },
        {
          violation: "Minimum Wages Violation",
          impact: "Critical",
          penalty: "Imprisonment up to 6 months and/or fine up to ₹500 per instance. Repeated violations attract higher penalties.",
          prevention: "Regular minimum wage updates, state-wise wage revision tracking"
        },
        {
          violation: "Non-maintenance of Statutory Registers",
          impact: "Medium",
          penalty: "Fine up to ₹10,000 for first offence, up to ₹20,000 for subsequent offences",
          prevention: "Digital register maintenance systems, periodic audits"
        },
        {
          violation: "Factories Act Non-compliance",
          impact: "High",
          penalty: "Fine up to ₹2 lakh and imprisonment up to 2 years. Closure of factory in severe cases.",
          prevention: "Factory license renewal, safety officer appointment, periodic compliance audits"
        },
        {
          violation: "Non-payment of Gratuity",
          impact: "High",
          penalty: "Simple interest at 10% per annum plus damages up to ₹1 lakh. Criminal prosecution possible.",
          prevention: "Gratuity provision and payment tracking system"
        }
      ]
    },

    caseStudies: {
      title: "Labour Law Compliance Success Stories",
      description: "How we've helped businesses navigate complex labour law requirements",
      studies: [
        {
          title: "Manufacturing Company - Full Labour Compliance Overhaul",
          industry: "Manufacturing",
          challenge: "A mid-sized manufacturing unit with 500+ employees faced inspection notices for non-compliance with Factories Act, irregular PF deposits, and absence of statutory registers.",
          solution: "Conducted comprehensive labour law audit, regularized all PF/ESI arrears, obtained factory license renewal, appointed safety officer, and established digital compliance systems for ongoing adherence.",
          outcome: "All notices resolved, zero penalties post-compliance overhaul. Passed subsequent labour department inspection with commendation.",
          impact: "Avoided penalties exceeding ₹25 lakh, improved employee relations and retention"
        },
        {
          title: "IT Company - Payroll Compliance Framework",
          industry: "IT & Software",
          challenge: "A rapidly scaling IT firm with employees across 8 states lacked standardized payroll compliance, resulting in inconsistent PF/ESI deductions, wrong salary structures, and missed professional tax filings.",
          solution: "Designed unified payroll compliance framework, implemented automated deduction systems, handled state-wise PT registrations, and established monthly compliance review process.",
          outcome: "100% compliance achieved across all states within 3 months. Zero audit observations from subsequent PF/ESI inspections.",
          impact: "Saved ₹18 lakh in potential penalties, enabled seamless employee onboarding across states"
        },
        {
          title: "Retail Chain - Multi-State Shops Act Compliance",
          industry: "Retail",
          challenge: "A retail chain with 200+ stores across 15 states struggled with state-wise Shops and Establishments Act compliances, leading to show cause notices in 6 states.",
          solution: "Mapped applicable state laws for each store location, obtained pending registrations, regularized non-compliances, and established centralized monitoring with state-specific compliance calendars.",
          outcome: "All notices resolved, 100% registration compliance achieved, zero violations in subsequent year.",
          impact: "Prevented store closures, avoided fines exceeding ₹30 lakh, streamlined multi-state operations"
        }
      ]
    },

    resources: {
      title: "Labour Law Compliance Resources",
      description: "Essential tools and guides for managing labour compliance",
      tools: [
        {
          name: "Labour Law Compliance Checklist",
          description: "State-wise and central law compliance checklist",
          type: "Excel Template",
          icon: "📋"
        },
        {
          name: "PF & ESI Calculator",
          description: "Automated calculator for PF, ESI, and gratuity contributions",
          type: "Interactive Tool",
          icon: "🧮"
        },
        {
          name: "Minimum Wages Rate Card",
          description: "State-wise minimum wage rates updated quarterly",
          type: "PDF Guide",
          icon: "📊"
        },
        {
          name: "Labour Law Notification Tracker",
          description: "Updates on latest amendments and notifications",
          type: "Newsletter",
          icon: "📰"
        }
      ],
      guides: [
        {
          title: "PF & ESI Compliance Guide",
          topics: ["Registration process", "Contribution calculation", "Monthly filing", "Inspection preparedness"],
          readTime: "20 min"
        },
        {
          title: "Factory Act Compliance Handbook",
          topics: ["License requirements", "Safety provisions", "Working hours", "Welfare measures"],
          readTime: "25 min"
        },
        {
          title: "Labour Codes - What You Need to Know",
          topics: ["Code on Wages", "Industrial Relations Code", "Social Security Code", "Occupational Safety Code"],
          readTime: "18 min"
        }
      ]
    },

    detailedFeatures: [
      {
        icon: "💰",
        title: "PF & ESI Compliance",
        description:
          "Registration, monthly contributions, and filing for Provident Fund and Employee State Insurance."
      },
      {
        icon: "📋",
        title: "Labour Law Registrations",
        description:
          "Factory license, Shops Act, Contract Labour, and all other statutory registrations."
      },
      {
        icon: "🧾",
        title: "Payroll Compliance",
        description:
          "Ensuring payroll is structured and processed in compliance with all applicable labour laws."
      },
      {
        icon: "⚙️",
        title: "Factory & Shop Act",
        description:
          "Compliance advisory and filings under Factories Act and Shops & Establishments Act."
      },
      {
        icon: "📚",
        title: "Statutory Registers",
        description:
          "Maintenance of all mandatory registers and records under labour legislation."
      },
      {
        icon: "🔍",
        title: "Labour Audit",
        description:
          "Comprehensive audit of labour law compliance and gap identification."
      }
    ],

    process: {
      title: "Our Labour Law Compliance Process",
      steps: [
        { number: "01", title: "Assessment", description: "Identify applicable labour laws and obligations." },
        { number: "02", title: "Registration", description: "Obtain all required registrations and licenses." },
        { number: "03", title: "Filing", description: "Timely submission of all statutory returns and challans." },
        { number: "04", title: "Monitoring", description: "Ongoing compliance tracking and advisory support." }
      ]
    },

    faqs: [
      {
        question: "Which businesses need PF registration?",
        answer:
          "Every establishment employing 20 or more employees is mandatorily required to register under the Employees' Provident Fund and Miscellaneous Provisions Act, 1952. Establishments with fewer than 20 employees can also voluntarily register. Once covered, coverage continues even if employee count falls below 20."
      },
      {
        question: "What is the employer's contribution to PF?",
        answer:
          "The employer contributes 12% of the employee's basic salary and dearness allowance to PF. Of this, 8.33% goes to the Employees' Pension Scheme (EPS) and 3.67% to the EPF account. An additional 0.5% is contributed to EDLI (Employees' Deposit Linked Insurance) and 0.85% towards EPF administrative charges."
      },
      {
        question: "Who is covered under ESI?",
        answer:
          "All employees earning up to ₹21,000 per month (₹25,000 for persons with disability) in establishments covered under ESI Act are eligible for ESI. The employer's contribution is 3.25% and employee's contribution is 0.75% of wages. Establishments with 10 or more employees (in certain states 20) are covered."
      },
      {
        question: "What is the minimum wage in India?",
        answer:
          "Minimum wages vary by state, industry, and category of worker (skilled, semi-skilled, unskilled). The central government sets minimum wages for scheduled employments under its jurisdiction, while state governments set wages for other categories. Minimum wages are revised periodically and must be tracked carefully for each location and category of employees."
      },
      {
        question: "When is gratuity payable?",
        answer:
          "Gratuity is payable to an employee who has completed 5 years of continuous service on separation (retirement, resignation, death, or disablement). The formula is: (Last drawn salary × 15 days × years of service) / 26. Maximum gratuity is ₹20 lakh. Payment must be made within 30 days of the due date."
      },
      {
        question: "What are the new Labour Codes?",
        answer:
          "The government has consolidated 29 central labour laws into 4 Labour Codes: (1) Code on Wages, 2019; (2) Industrial Relations Code, 2020; (3) Code on Social Security, 2020; and (4) Occupational Safety, Health and Working Conditions Code, 2020. These simplify compliance, broaden coverage, and introduce new definitions of wages, fixed-term employment, and gig workers. Implementation is pending in most states."
      }
    ],

    cta: {
      title: "Ensure Full Labour Law Compliance",
      description: "Stay compliant with all labour regulations and avoid penalties.",
      primaryButton: "Book Labour Law Consultation",
      secondaryButton: "Talk to Expert"
    }
  },

  "company-reg": {
    title: "Company Registration",
    description: "End-to-end company registration and incorporation services.",
    features: [
      "Private Limited Company",
      "Public Limited Company",
      "One Person Company",
      "Section 8 Company"
    ],

    hero: {
      title: "Company Registration Services",
      subtitle:
        "Fast, hassle-free company incorporation with complete post-registration compliance support.",
      image: "/banner-img/sebi.png",
      cta: "Register Your Company"
    },

    about: {
      title: "Start Your Business the Right Way",
      description:
        "We provide complete company registration services including name approval, document preparation, MCA filing, and post-incorporation compliance setup. Our experts guide you from idea to incorporated entity.",
      highlights: [
        "Fast-track incorporation support",
        "Name availability search",
        "Document drafting & filing",
        "Post-registration compliance setup"
      ]
    },

    regulatoryOverview: {
      title: "Company Registration Framework",
      introduction: "Companies in India are incorporated under the Companies Act, 2013 through the Ministry of Corporate Affairs (MCA). The process is fully online through the MCA21 portal. Different types of companies suit different business needs and have varying compliance requirements.",
      keyAspects: [
        {
          title: "Private Limited Company",
          description: "Most popular structure for startups and SMEs offering limited liability, separate legal entity, and ease of investment.",
          regulations: ["Minimum 2 directors & 2 shareholders", "No public share offering", "Restrictions on share transfer", "Annual MCA filings"]
        },
        {
          title: "Public Limited Company",
          description: "Suitable for larger businesses planning to raise funds from the public through stock exchanges.",
          regulations: ["Minimum 3 directors & 7 shareholders", "Mandatory audit committee", "Stricter disclosure norms", "Can list on stock exchanges"]
        },
        {
          title: "One Person Company (OPC)",
          description: "Ideal for solo entrepreneurs wanting limited liability with a single member structure.",
          regulations: ["Single member and director", "Nominee director required", "Relaxed compliance norms", "Auto-conversion threshold at ₹2 crore turnover"]
        },
        {
          title: "Section 8 Company (NPO)",
          description: "For non-profit organizations, NGOs, and charitable institutions with special licensing from MCA.",
          regulations: ["Minimum 2 directors", "No profit distribution", "Charitable objectives only", "Tax exemption eligibility"]
        }
      ]
    },

    complianceCalendar: {
      title: "Post-Registration Compliance Calendar",
      description: "Key deadlines after your company is incorporated",
      deadlines: [
        {
          period: "Immediate (Within 30 days of Incorporation)",
          filings: [
            { form: "INC-20A", description: "Declaration of commencement of business (for companies with share capital)", dueDate: "Within 180 days of incorporation" },
            { form: "Bank Account Opening", description: "Open current account in company name", dueDate: "Within 30 days" },
            { form: "Registered Office Setup", description: "Ensure registered office is operational", dueDate: "Within 30 days" }
          ]
        },
        {
          period: "Annual",
          filings: [
            { form: "AOC-4", description: "Financial statements filing", dueDate: "Within 30 days of AGM" },
            { form: "MGT-7", description: "Annual return filing", dueDate: "Within 60 days of AGM" },
            { form: "DIR-3 KYC", description: "Director KYC", dueDate: "By 30th September" },
            { form: "Annual General Meeting", description: "First AGM within 18 months, then within 6 months of FY end", dueDate: "30th September" }
          ]
        },
        {
          period: "Ongoing",
          filings: [
            { form: "Board Meetings", description: "Minimum 4 per year, gap not more than 120 days", dueDate: "Every quarter" },
            { form: "Statutory Registers", description: "Maintain all mandatory registers", dueDate: "Ongoing" },
            { form: "Tax Registrations", description: "GST, TAN, and other applicable tax registrations", dueDate: "As applicable" }
          ]
        }
      ]
    },

    industryGuidance: {
      title: "Right Structure for Your Business",
      description: "Choosing the appropriate entity type based on your business needs",
      sectors: [
        {
          name: "Startups & Tech Companies",
          icon: "🚀",
          challenges: [
            "Choosing the right structure for VC funding",
            "ESOP pool creation",
            "International expansion structuring",
            "Convertible note and SAFE compliance"
          ],
          solutions: [
            "Private Limited structure advisory",
            "ESOP scheme setup and drafting",
            "Holding company structuring",
            "Investor-friendly articles drafting"
          ]
        },
        {
          name: "Family Businesses",
          icon: "👨‍👩‍👧",
          challenges: [
            "Succession planning and shareholding structure",
            "Converting from proprietorship/partnership",
            "Family governance and shareholder agreements",
            "Tax-efficient restructuring"
          ],
          solutions: [
            "Shareholding structure advisory",
            "Smooth conversion assistance",
            "Shareholders agreement drafting",
            "Tax optimization while incorporating"
          ]
        },
        {
          name: "E-commerce & Retail",
          icon: "🛒",
          challenges: [
            "FDI restrictions in e-commerce",
            "Multi-state operations setup",
            "Marketplace vs inventory model structuring",
            "GST registration across states"
          ],
          solutions: [
            "Compliant structure design",
            "Multi-state compliance setup",
            "Business model documentation",
            "GST and tax registration support"
          ]
        },
        {
          name: "Professionals & Consultants",
          icon: "👔",
          challenges: [
            "LLP vs Private Limited decision",
            "Professional liability protection",
            "Tax efficiency for professionals",
            "Compliance burden management"
          ],
          solutions: [
            "Structure comparison and advisory",
            "Limited liability setup",
            "Tax-efficient structuring",
            "Minimal compliance framework"
          ]
        },
        {
          name: "Non-Profits & NGOs",
          icon: "🤝",
          challenges: [
            "Section 8 vs Trust vs Society decision",
            "80G and 12A tax exemption eligibility",
            "FCRA registration for foreign funding",
            "Charitable object documentation"
          ],
          solutions: [
            "Entity selection advisory",
            "Tax exemption application support",
            "FCRA registration assistance",
            "MOA drafting for charitable purposes"
          ]
        },
        {
          name: "Manufacturing & Export",
          icon: "🏭",
          challenges: [
            "Single plant vs holding company structure",
            "Export-oriented unit structuring",
            "FDI for joint ventures",
            "SEZ and industrial park setup"
          ],
          solutions: [
            "Multi-entity structuring advisory",
            "EOU/SEZ compliance setup",
            "JV structuring and documentation",
            "Industrial license and registration"
          ]
        }
      ]
    },

    violations: {
      title: "Common Registration & Post-Incorporation Issues",
      description: "Avoid common pitfalls after company registration",
      commonViolations: [
        {
          violation: "Not filing INC-20A (Commencement of Business)",
          impact: "Critical",
          penalty: "Company cannot commence business or exercise borrowing powers. Officers liable to ₹50,000 penalty. Company may be struck off.",
          prevention: "File INC-20A within 180 days of incorporation after depositing subscribed capital"
        },
        {
          violation: "Delayed First Board Meeting",
          impact: "High",
          penalty: "Penalty of ₹25,000 for company and ₹5,000 for each director in default",
          prevention: "Schedule first board meeting within 30 days of incorporation"
        },
        {
          violation: "Not maintaining Registered Office",
          impact: "High",
          penalty: "Penalty of ₹1,000 per day up to ₹1 lakh. Company may be struck off for non-maintenance.",
          prevention: "Ensure registered office is operational and receives all communications"
        },
        {
          violation: "Non-issuance of Share Certificates",
          impact: "Medium",
          penalty: "Penalty of ₹25,000 to ₹5 lakh for company; ₹10,000 to ₹1 lakh for officers",
          prevention: "Issue share certificates within 2 months of incorporation or allotment"
        }
      ]
    },

    caseStudies: {
      title: "Company Registration Success Stories",
      description: "How we've helped entrepreneurs start their journey right",
      studies: [
        {
          title: "Tech Startup - Fast-Track Incorporation for VC Funding",
          industry: "Technology",
          challenge: "A founding team had 30 days to incorporate and set up governance structures before a VC term sheet expired. They needed Private Limited incorporation with investor-friendly articles, ESOP scheme, and shareholder agreement.",
          solution: "Fast-tracked incorporation, drafted customized articles of association with protective provisions, set up ESOP scheme for 15% pool, and prepared shareholder agreement with anti-dilution, right of first refusal, and drag-along provisions.",
          outcome: "Incorporation completed in 7 working days. All governance documents ready for VC due diligence.",
          impact: "₹5 crore seed round closed successfully. Startup went on to raise Series A of ₹35 crore"
        },
        {
          title: "Family Business - Proprietorship to Private Limited Conversion",
          industry: "Manufacturing",
          challenge: "A 30-year-old family business operating as proprietorship wanted to convert to Private Limited company to bring in institutional investors and ensure business succession.",
          solution: "Structured shareholding across three generations, converted business with proper business transfer agreement, set up family constitution and shareholders agreement, and ensured seamless transfer of all contracts and licenses.",
          outcome: "Smooth conversion with zero business disruption, institutional investor onboarded within 6 months.",
          impact: "Raised ₹20 crore growth capital, established clear succession plan"
        },
        {
          title: "NGO - Section 8 Registration with Tax Exemptions",
          industry: "Non-Profit",
          challenge: "An educational foundation wanted to formalize operations as a Section 8 company and obtain 80G and 12A tax exemptions to attract CSR funding from corporates.",
          solution: "Incorporated Section 8 company with appropriate charitable objects, obtained MCA license, applied for and received both 80G and 12A exemptions, and set up governance framework compliant with Companies Act.",
          outcome: "Registration and both tax exemptions obtained within 4 months.",
          impact: "Secured CSR grants worth ₹1.2 crore in first year, expanded programs to 3 additional states"
        }
      ]
    },

    resources: {
      title: "Company Registration Resources",
      description: "Guides and tools for your incorporation journey",
      tools: [
        {
          name: "Company Name Availability Checker",
          description: "Check if your preferred company name is available",
          type: "Online Tool",
          icon: "🔍"
        },
        {
          name: "Entity Type Comparison Guide",
          description: "Compare Private Limited, LLP, OPC and other structures",
          type: "PDF Guide",
          icon: "📋"
        },
        {
          name: "Document Checklist",
          description: "All documents required for company registration",
          type: "Checklist",
          icon: "✅"
        },
        {
          name: "Government Fee Calculator",
          description: "Calculate MCA registration fees based on authorized capital",
          type: "Interactive Tool",
          icon: "🧮"
        }
      ],
      guides: [
        {
          title: "How to Register a Private Limited Company",
          topics: ["Eligibility and prerequisites", "Name approval process", "SPICe+ filing", "Post-incorporation steps"],
          readTime: "15 min"
        },
        {
          title: "OPC vs Private Limited: Which is Right for You?",
          topics: ["Key differences", "Compliance requirements", "Conversion rules", "Tax implications"],
          readTime: "10 min"
        },
        {
          title: "Startup India: Benefits and Registration",
          topics: ["Eligibility criteria", "Registration process", "Tax benefits", "Compliance exemptions"],
          readTime: "12 min"
        }
      ]
    },

    detailedFeatures: [
      {
        icon: "🏢",
        title: "Private Limited Company",
        description:
          "Complete registration support for Private Limited companies including name approval, DIN, and MCA filings."
      },
      {
        icon: "📈",
        title: "Public Limited Company",
        description:
          "Incorporation of Public Limited companies with full compliance setup."
      },
      {
        icon: "👤",
        title: "One Person Company",
        description:
          "Simple and fast OPC registration for solo entrepreneurs."
      },
      {
        icon: "❤️",
        title: "Section 8 Company",
        description:
          "Incorporation of non-profit companies with Section 8 license and tax exemption support."
      },
      {
        icon: "🌐",
        title: "Foreign Company Registration",
        description:
          "Assistance for foreign companies setting up Indian subsidiaries or branch offices."
      },
      {
        icon: "🔄",
        title: "Conversion Services",
        description:
          "Proprietorship/Partnership to Company, OPC to Private Limited, and other conversions."
      }
    ],

    process: {
      title: "Our Company Registration Process",
      steps: [
        { number: "01", title: "Consultation", description: "Understand your business and recommend the right structure." },
        { number: "02", title: "Name Approval", description: "Search and apply for company name via MCA RUN/SPICe+." },
        { number: "03", title: "Incorporation", description: "File SPICe+ with all required documents and obtain Certificate of Incorporation." },
        { number: "04", title: "Post-Incorporation", description: "Bank account, statutory registers, and compliance setup." }
      ]
    },

    faqs: [
      {
        question: "How long does company registration take?",
        answer:
          "With all documents in order, a Private Limited company can be incorporated in 7-10 working days. The process involves name reservation (1-2 days), document preparation (2-3 days), and MCA processing (3-5 days). Delays can occur due to name objections or document deficiencies."
      },
      {
        question: "What is the minimum capital required to incorporate a company?",
        answer:
          "There is no minimum paid-up capital requirement for incorporation of a Private Limited or OPC. You can start with ₹1 lakh authorized capital and pay-up any amount as subscribed capital. For Public Limited companies, minimum paid-up capital of ₹5 lakh is required."
      },
      {
        question: "What documents are required for company registration?",
        answer:
          "For Indian directors/shareholders: PAN card, Aadhaar, passport-sized photograph, address proof (bank statement/utility bill). For registered office: Utility bill (not older than 2 months) + NOC from owner/rent agreement. The company's MOA and AOA are drafted and filed as part of incorporation."
      },
      {
        question: "What is DIN and who needs it?",
        answer:
          "DIN (Director Identification Number) is a unique 8-digit number assigned to every individual intending to be appointed as director of a company. It is obtained through the MCA portal. Every proposed director must have a DIN before incorporation. DIN requires annual KYC (DIR-3 KYC) to remain active."
      },
      {
        question: "Can a foreign national be a director of an Indian company?",
        answer:
          "Yes, a foreign national can be a director of an Indian company. However, at least one director must be a resident of India (stayed in India for 182+ days in the previous calendar year). Foreign nationals need to obtain DIN and provide notarized/apostilled identity and address documents."
      },
      {
        question: "What is INC-20A and is it mandatory?",
        answer:
          "INC-20A is a mandatory declaration of commencement of business that must be filed by every company (with share capital) before commencing business operations or exercising borrowing powers. It must be filed within 180 days of incorporation, confirming that each subscriber has paid for shares. Non-filing attracts ₹50,000 penalty and the company remains restrained from business activities."
      }
    ],

    cta: {
      title: "Start Your Business Today",
      description: "Get your company registered quickly with expert guidance.",
      primaryButton: "Register My Company",
      secondaryButton: "Talk to Expert"
    }
  },

  llp: {
    title: "LLP Formation",
    description: "Complete Limited Liability Partnership registration and compliance services.",
    features: [
      "LLP Registration",
      "LLP Agreement Drafting",
      "Annual Filings",
      "Partner Compliance"
    ],

    hero: {
      title: "LLP Formation Services",
      subtitle:
        "Register your Limited Liability Partnership with expert guidance on LLP agreement, filings, and ongoing compliance.",
      image: "/banner-img/llp.png",
      cta: "Form Your LLP"
    },

    about: {
      title: "The Smart Choice for Professionals & Partners",
      description:
        "We provide end-to-end LLP formation services including registration, LLP agreement drafting, partner compliance, and annual return filing. LLPs combine the flexibility of a partnership with the protection of limited liability.",
      highlights: [
        "Fast LLP registration",
        "Customized LLP agreement",
        "Annual filing compliance",
        "Partner admission/exit support"
      ]
    },

    regulatoryOverview: {
      title: "LLP Regulatory Framework",
      introduction: "Limited Liability Partnerships (LLPs) in India are governed by the Limited Liability Partnership Act, 2008 and rules thereunder, administered by the Ministry of Corporate Affairs (MCA). LLPs combine the features of a partnership firm and a company, offering limited liability to partners with minimal compliance requirements.",
      keyAspects: [
        {
          title: "LLP Formation",
          description: "Process of registering an LLP with minimum 2 designated partners and filing LLP Agreement with MCA.",
          regulations: ["Minimum 2 partners", "DPIN for designated partners", "LLP Agreement filing", "Certificate of Incorporation"]
        },
        {
          title: "LLP Agreement",
          description: "The core constitutional document of an LLP governing rights, duties, profit sharing, and management.",
          regulations: ["Profit sharing ratio", "Designated partner rights", "Partner admission/exit", "Decision making procedures"]
        },
        {
          title: "Annual Compliance",
          description: "Annual filings required to keep the LLP in good standing with MCA.",
          regulations: ["Form 11 - Annual Return", "Form 8 - Statement of Accounts", "Income Tax Return", "Audit requirements"]
        },
        {
          title: "Partner Compliance",
          description: "Regulatory requirements for adding or removing partners and changes in designated partners.",
          regulations: ["DPIN requirements", "Partner consent documentation", "Form 4 for partner changes", "LLP Agreement amendment"]
        }
      ]
    },

    complianceCalendar: {
      title: "LLP Compliance Calendar",
      description: "Annual compliance requirements for your LLP",
      deadlines: [
        {
          period: "Annual",
          filings: [
            { form: "Form 11", description: "Annual Return of LLP", dueDate: "60 days from closure of financial year (30th May)" },
            { form: "Form 8", description: "Statement of Accounts and Solvency", dueDate: "30 days from end of 6 months of financial year (30th October)" },
            { form: "Income Tax Return", description: "Income tax return for LLP", dueDate: "31st July (non-audit) / 31st October (audit)" },
            { form: "DPIN KYC", description: "KYC for designated partners (DIR-3 KYC)", dueDate: "30th September" }
          ]
        },
        {
          period: "Event-Based",
          filings: [
            { form: "Form 4", description: "Changes in partners or designated partners", dueDate: "Within 30 days of change" },
            { form: "Form 3", description: "Amendment to LLP Agreement", dueDate: "Within 30 days of amendment" },
            { form: "Form 15", description: "Change in registered office", dueDate: "Within 30 days of change" },
            { form: "Form 27", description: "Registration of charges", dueDate: "Within 30 days of creation of charge" }
          ]
        }
      ]
    },

    industryGuidance: {
      title: "Who Should Choose LLP?",
      description: "Industry-specific advantages of the LLP structure",
      sectors: [
        {
          name: "Chartered Accountants & CS Firms",
          icon: "📊",
          challenges: [
            "Professional liability protection",
            "Multi-partner firm management",
            "ICAI/ICSI regulations on LLP formation",
            "Partner profit sharing and exit"
          ],
          solutions: [
            "LLP structure compliant with professional body norms",
            "Customized LLP agreement for CA/CS firms",
            "Partner admission and exit documentation",
            "Firm succession planning"
          ]
        },
        {
          name: "Law Firms",
          icon: "⚖️",
          challenges: [
            "Bar Council regulations on law firm structures",
            "Partnership deed vs LLP agreement",
            "Client confidentiality and liability protection",
            "Senior partner retirement planning"
          ],
          solutions: [
            "LLP formation compliant with Bar Council norms",
            "Specialized law firm LLP agreements",
            "Partner liability structuring",
            "Succession documentation"
          ]
        },
        {
          name: "Consultancy & Advisory Firms",
          icon: "💼",
          challenges: [
            "Tax transparency with limited liability",
            "Multiple partner management",
            "Foreign partner compliance",
            "Profit sharing and capital contribution"
          ],
          solutions: [
            "Tax-efficient LLP structuring",
            "Multi-partner agreement drafting",
            "FEMA compliance for foreign partners",
            "Flexible profit distribution mechanisms"
          ]
        },
        {
          name: "Real Estate & Construction",
          icon: "🏗️",
          challenges: [
            "Project-specific LLP formation",
            "FDI compliance for LLP",
            "RERA compliance for LLP developers",
            "Land holding in LLP"
          ],
          solutions: [
            "Project LLP structuring",
            "FEMA filing for FDI in LLP",
            "RERA registration support",
            "Land holding compliance"
          ]
        },
        {
          name: "Technology Startups",
          icon: "💻",
          challenges: [
            "LLP vs Private Limited decision",
            "Limitations on ESOP in LLP",
            "VC funding constraints in LLP",
            "Conversion to Private Limited for scaling"
          ],
          solutions: [
            "Structure selection advisory",
            "Profit sharing as alternative to ESOP",
            "Funding options for LLPs",
            "Smooth LLP to Pvt Ltd conversion"
          ]
        },
        {
          name: "Trading & Import-Export",
          icon: "🚢",
          challenges: [
            "GST registration for LLP",
            "FEMA compliance for export proceeds",
            "Multi-city operations in LLP",
            "Bank credit facilities for LLP"
          ],
          solutions: [
            "GST and trade registration",
            "Export compliance framework",
            "Multi-location operations setup",
            "Banking relationship advisory"
          ]
        }
      ]
    },

    violations: {
      title: "Common LLP Violations & Penalties",
      description: "Key non-compliance risks for LLPs",
      commonViolations: [
        {
          violation: "Delayed Filing of Form 11 (Annual Return)",
          impact: "High",
          penalty: "₹100 per day of delay. No maximum cap — delays of months can result in lakhs in penalties",
          prevention: "Mark compliance calendar, engage compliance professional for timely filing"
        },
        {
          violation: "Delayed Filing of Form 8 (Accounts)",
          impact: "High",
          penalty: "₹100 per day of delay. LLP and designated partners both liable",
          prevention: "Finalize accounts by September, file Form 8 before October 30"
        },
        {
          violation: "Not Filing LLP Agreement within 30 Days",
          impact: "Medium",
          penalty: "₹100 per day of delay in filing LLP Agreement (Form 3)",
          prevention: "File Form 3 within 30 days of LLP incorporation"
        },
        {
          violation: "Operating without Designated Partner",
          impact: "Critical",
          penalty: "Every partner liable as in partnership firm — limited liability protection lost. Penalty of ₹10,000",
          prevention: "Maintain minimum 2 designated partners at all times"
        }
      ]
    },

    caseStudies: {
      title: "LLP Formation Success Stories",
      description: "How we've helped professionals and businesses set up their LLPs",
      studies: [
        {
          title: "CA Firm - Converting Partnership to LLP",
          industry: "Professional Services",
          challenge: "A 15-partner CA firm wanted to convert from traditional partnership to LLP to protect individual partners from liability of other partners and bring in new young partners without restructuring the entire firm.",
          solution: "Guided conversion from partnership firm to LLP, drafted comprehensive LLP agreement with differential profit sharing, partner seniority provisions, new partner admission terms, and retirement planning clauses compliant with ICAI guidelines.",
          outcome: "Smooth conversion completed in 45 days. LLP agreement satisfying all ICAI requirements. 3 new partners onboarded within 6 months.",
          impact: "Firm expanded to 18 partners, enhanced brand credibility, attracted larger clients"
        },
        {
          title: "Real Estate JV - Project-Specific LLP",
          industry: "Real Estate",
          challenge: "Two real estate developers wanted to jointly develop a residential project but needed to ring-fence liabilities of this project from their individual companies while also attracting FDI from a Singapore-based fund.",
          solution: "Created project-specific LLP, structured profit sharing between Indian and foreign partners, filed LLP-I for FDI compliance, drafted exit provisions tied to project completion milestones.",
          outcome: "LLP formed and operational within 3 weeks. FDI of $8 million received with full FEMA compliance.",
          impact: "Successful project completion, clean exit for foreign investor, zero liability bleed-over to parent entities"
        }
      ]
    },

    resources: {
      title: "LLP Formation Resources",
      description: "Everything you need to know about LLP registration and compliance",
      tools: [
        {
          name: "LLP vs Pvt Ltd Comparison",
          description: "Detailed comparison of LLP and Private Limited company structures",
          type: "PDF Guide",
          icon: "📊"
        },
        {
          name: "LLP Agreement Template",
          description: "Customizable LLP agreement template for professionals",
          type: "Word Document",
          icon: "📝"
        },
        {
          name: "LLP Fee Calculator",
          description: "Calculate government fees for LLP registration and filings",
          type: "Interactive Tool",
          icon: "🧮"
        },
        {
          name: "Annual Compliance Reminder",
          description: "Calendar tool for LLP annual filing deadlines",
          type: "Calendar Integration",
          icon: "📅"
        }
      ],
      guides: [
        {
          title: "How to Register an LLP in India",
          topics: ["DPIN application", "Name reservation", "LLP Agreement", "Incorporation certificate"],
          readTime: "12 min"
        },
        {
          title: "LLP Agreement Essentials",
          topics: ["Mandatory clauses", "Profit sharing", "Partner rights", "Exit provisions"],
          readTime: "15 min"
        },
        {
          title: "LLP Annual Compliance Guide",
          topics: ["Form 8 filing", "Form 11 filing", "Audit requirements", "Income tax compliance"],
          readTime: "10 min"
        }
      ]
    },

    detailedFeatures: [
      {
        icon: "🤝",
        title: "LLP Registration",
        description:
          "Complete LLP registration including DPIN, name reservation, and Certificate of Incorporation."
      },
      {
        icon: "📝",
        title: "LLP Agreement Drafting",
        description:
          "Customized LLP Agreement covering profit sharing, rights, duties, and exit provisions."
      },
      {
        icon: "📅",
        title: "Annual Filings",
        description:
          "Timely filing of Form 11, Form 8, and income tax returns for your LLP."
      },
      {
        icon: "👥",
        title: "Partner Changes",
        description:
          "Assistance with partner admission, resignation, and related MCA filings."
      },
      {
        icon: "🔄",
        title: "Conversion Services",
        description:
          "Conversion of Partnership Firm to LLP, or LLP to Private Limited Company."
      },
      {
        icon: "⚖️",
        title: "LLP Compliance Advisory",
        description:
          "Ongoing advisory for LLP regulatory compliance and best practices."
      }
    ],

    process: {
      title: "Our LLP Formation Process",
      steps: [
        { number: "01", title: "Consultation", description: "Understand business needs and confirm LLP as the right structure." },
        { number: "02", title: "DPIN & Name", description: "Obtain DPIN for designated partners and reserve LLP name." },
        { number: "03", title: "Incorporation", description: "File FiLLiP form and LLP Agreement for incorporation." },
        { number: "04", title: "Post-Formation", description: "Bank account, PAN, GST, and compliance setup." }
      ]
    },

    faqs: [
      {
        question: "What is the difference between LLP and Partnership Firm?",
        answer:
          "Key differences: LLP partners have limited liability (protected from actions of other partners), while partnership firm partners have unlimited joint liability. LLP is a separate legal entity; partnership firm is not. LLP requires MCA registration; partnership requires only Registrar of Firms registration (optional in most states). LLP has higher compliance requirements but more credibility."
      },
      {
        question: "What is the minimum number of partners for an LLP?",
        answer:
          "An LLP requires a minimum of 2 partners, at least 2 of whom must be designated partners (responsible for compliance). At least one designated partner must be an Indian resident. There is no maximum limit on the number of partners in an LLP."
      },
      {
        question: "What is DPIN?",
        answer:
          "DPIN (Designated Partner Identification Number) is a unique identification number for designated partners of an LLP, similar to DIN for directors of companies. It is obtained through the MCA portal. For individuals who already have a DIN, the same number serves as DPIN."
      },
      {
        question: "Does an LLP require mandatory audit?",
        answer:
          "An LLP is required to get its accounts audited by a Chartered Accountant if its turnover exceeds ₹40 lakh or its contribution exceeds ₹25 lakh in any financial year. LLPs below these thresholds can file unaudited financial statements but must have them signed by designated partners."
      },
      {
        question: "Can a company be a partner in an LLP?",
        answer:
          "Yes, a company (Indian or foreign) can be a partner in an LLP. For foreign entities, FEMA compliance is required. The company must authorize a natural person to represent it in the LLP. However, for professional LLPs (CA, CS firms), professional bodies may restrict corporate membership."
      },
      {
        question: "What are the tax benefits of an LLP?",
        answer:
          "LLPs are taxed at a flat rate of 30% (plus surcharge and cess) — same as partnership firms. Unlike companies, LLPs are not subject to Dividend Distribution Tax (DDT) on profit distribution to partners. Partners' share of profit is not taxable in their hands. LLPs can claim deductions for partner remuneration and interest on capital within prescribed limits."
      }
    ],

    cta: {
      title: "Form Your LLP Today",
      description: "Get your LLP registered with expert guidance and complete compliance support.",
      primaryButton: "Register My LLP",
      secondaryButton: "Talk to Expert"
    }
  },

  msme: {
    title: "MSME Registration",
    description: "Quick and easy MSME/Udyam registration with complete benefit advisory.",
    features: [
      "Udyam Registration",
      "MSME Certificate",
      "Benefit Advisory",
      "Scheme Assistance"
    ],

    hero: {
      title: "MSME / Udyam Registration Services",
      subtitle:
        "Register your business as an MSME and unlock government schemes, subsidies, and priority sector benefits.",
      image: "/banner-img/msme.png",
      cta: "Register as MSME"
    },

    about: {
      title: "Unlock the Power of MSME Status",
      description:
        "We assist micro, small, and medium enterprises in obtaining Udyam Registration and leveraging the full range of government benefits, subsidies, credit schemes, and priority sector advantages available to MSMEs.",
      highlights: [
        "Quick Udyam Registration",
        "MSME benefits advisory",
        "Government scheme assistance",
        "Priority sector credit guidance"
      ]
    },

    regulatoryOverview: {
      title: "MSME Regulatory Framework",
      introduction: "Micro, Small and Medium Enterprises (MSMEs) are defined under the MSMED Act, 2006 as amended by the Atmanirbhar Bharat package. From July 2020, the classification is based on investment in plant & machinery and annual turnover. Registration is done through the Udyam Registration portal (udyamregistration.gov.in).",
      keyAspects: [
        {
          title: "MSME Classification",
          description: "Classification of enterprises into Micro, Small and Medium based on investment and turnover criteria.",
          regulations: [
            "Micro: Investment ≤ ₹1 crore & Turnover ≤ ₹5 crore",
            "Small: Investment ≤ ₹10 crore & Turnover ≤ ₹50 crore",
            "Medium: Investment ≤ ₹50 crore & Turnover ≤ ₹250 crore"
          ]
        },
        {
          title: "Udyam Registration",
          description: "Online, paperless, self-declaration based registration process replacing the earlier Udyog Aadhaar registration.",
          regulations: ["PAN-linked registration", "GST integration", "Aadhaar-based verification", "Zero cost registration"]
        },
        {
          title: "Credit Benefits",
          description: "Priority sector lending, CGTMSE guarantee cover, and preferential interest rates for MSMEs.",
          regulations: ["Priority Sector Lending (PSL)", "CGTMSE cover up to ₹5 crore", "Collateral-free loans", "Reduced interest rates"]
        },
        {
          title: "Government Schemes",
          description: "Access to various central and state government schemes for MSMEs.",
          regulations: ["PMEGP scheme", "CLCSS technology upgradation", "Market Development Assistance", "ZED certification"]
        }
      ]
    },

    complianceCalendar: {
      title: "MSME Compliance & Renewal Calendar",
      description: "Key dates and requirements for MSME registered entities",
      deadlines: [
        {
          period: "Annual",
          filings: [
            { form: "Udyam Certificate Update", description: "Update investment and turnover details annually for reclassification", dueDate: "After ITR filing (before 31st March)" },
            { form: "MSME Samadhaan Filing", description: "File for delayed payment recovery from buyers", dueDate: "As and when delayed payments arise" }
          ]
        },
        {
          period: "MSME Buyer Compliance",
          filings: [
            { form: "MSME Payment Compliance", description: "Buyers must pay MSME suppliers within 45 days (15 days if no agreement)", dueDate: "Within 45 days of supply" },
            { form: "Half-Yearly Return (Specified Companies)", description: "Companies buying from MSMEs must file half-yearly return with MCA", dueDate: "Within 30 days of April and October" }
          ]
        }
      ]
    },

    industryGuidance: {
      title: "MSME Benefits by Sector",
      description: "How MSME registration helps different types of businesses",
      sectors: [
        {
          name: "Manufacturing Units",
          icon: "🏭",
          challenges: [
            "Technology upgradation financing",
            "Raw material procurement costs",
            "Export market access",
            "Quality certification costs"
          ],
          solutions: [
            "CLCSS subsidy for technology upgradation (15% subsidy up to ₹15 lakh)",
            "GeM portal access for government procurement",
            "Export promotion capital goods scheme",
            "ZED and ISO certification fee reimbursement"
          ]
        },
        {
          name: "Service Businesses",
          icon: "💼",
          challenges: [
            "Working capital access",
            "Government tender eligibility",
            "Skill development funding",
            "Marketing and branding support"
          ],
          solutions: [
            "CGTMSE collateral-free credit",
            "25% procurement reservation in government tenders",
            "PMKVY and MSME skill programs",
            "MSME market development assistance"
          ]
        },
        {
          name: "Food & Agro Processing",
          icon: "🌾",
          challenges: [
            "Cold chain infrastructure costs",
            "Food safety certification",
            "Market linkage with large retailers",
            "PLI scheme eligibility"
          ],
          solutions: [
            "PMFME scheme subsidies for food processing",
            "FSSAI registration fee concession",
            "GeM and e-commerce platform onboarding",
            "PLI scheme advisory for eligible categories"
          ]
        },
        {
          name: "Retail & Trading",
          icon: "🛒",
          challenges: [
            "GST compliance costs",
            "MSME delayed payment recovery",
            "Digital payments adoption",
            "Inventory financing"
          ],
          solutions: [
            "GST portal MSME benefits",
            "MSME Samadhaan for payment recovery",
            "Digital payment adoption subsidies",
            "Bank credit and inventory financing advisory"
          ]
        },
        {
          name: "Startups & Entrepreneurs",
          icon: "🚀",
          challenges: [
            "Initial capital access",
            "Government procurement access",
            "Incubation and mentoring support",
            "Patent and IP cost reduction"
          ],
          solutions: [
            "Mudra Loan and PMEGP scheme advisory",
            "GeM registration and startup portal",
            "SIDBI incubation scheme access",
            "Patent fee reimbursement under MSME scheme"
          ]
        },
        {
          name: "Textile & Handloom",
          icon: "🧵",
          challenges: [
            "Powerloom modernization costs",
            "Common facility access",
            "Export market development",
            "Cluster development"
          ],
          solutions: [
            "SITP and ATUFS scheme advisory",
            "MSME cluster development programme",
            "Export facilitation through AEPC",
            "Handloom cluster support"
          ]
        }
      ]
    },

    violations: {
      title: "MSME Payment Compliance - Buyer Obligations",
      description: "Key compliance requirements for companies buying from MSMEs",
      commonViolations: [
        {
          violation: "Delayed Payment to MSME Suppliers",
          impact: "High",
          penalty: "Compound interest at 3 times RBI bank rate on delayed amount. Interest accrues from date of supply or agreed date.",
          prevention: "Set up payment tracking for MSME vendors, pay within 45 days (15 days without agreement)"
        },
        {
          violation: "Non-filing of Half-Yearly Return by Specified Companies",
          impact: "Medium",
          penalty: "Penalty of ₹25,000 for first offence and ₹25,000-₹75,000 for subsequent offences",
          prevention: "File MCA Form (MSME-I) within 30 days of April and October"
        }
      ]
    },

    caseStudies: {
      title: "MSME Registration Success Stories",
      description: "How MSME status transformed businesses",
      studies: [
        {
          title: "Manufacturer - ₹45 Lakh Technology Subsidy",
          industry: "Auto Components Manufacturing",
          challenge: "A small auto-component manufacturer with outdated machinery was losing business to larger competitors but lacked capital for technology upgradation.",
          solution: "Obtained Udyam Registration, applied under CLCSS scheme for technology upgradation subsidy, facilitated collateral-free bank loan under CGTMSE, and registered on GeM portal for government supplier access.",
          outcome: "Received 15% subsidy (₹45 lakh) on new CNC machinery, secured CGTMSE-backed loan of ₹2 crore, and got first government order of ₹30 lakh through GeM.",
          impact: "Production capacity doubled, revenue grew 80% in 2 years, employment increased from 25 to 60 workers"
        },
        {
          title: "Service Firm - Government Tender Success",
          industry: "IT Services",
          challenge: "A small IT services company was repeatedly losing government tenders to large corporations despite lower pricing and better service quality.",
          solution: "Registered as MSME, availed 25% procurement reservation for MSMEs in government tenders, registered on GeM portal, and applied for relevant MSME certifications to strengthen tender applications.",
          outcome: "Won 3 government contracts within 6 months of MSME registration worth ₹1.2 crore total.",
          impact: "Government contracts now form 40% of revenue, stable cash flow enabled team expansion"
        },
        {
          title: "Food Processor - PMFME Scheme Benefit",
          industry: "Food Processing",
          challenge: "A home-based food processing unit making traditional pickles and preserves wanted to formalize, scale production, and access retail markets but lacked capital.",
          solution: "Registered as Micro enterprise under Udyam, applied for PMFME scheme (PM Formalisation of Micro Food Processing Enterprises), obtained 35% credit-linked subsidy for food processing machinery and branding.",
          outcome: "Received ₹10 lakh subsidy, FSSAI license obtained, products listed in 3 retail chains.",
          impact: "Revenue grew from ₹5 lakh to ₹45 lakh per annum within 18 months"
        }
      ]
    },

    resources: {
      title: "MSME Resources & Scheme Guide",
      description: "Complete guide to MSME benefits and schemes",
      tools: [
        {
          name: "MSME Classification Tool",
          description: "Check if your business qualifies as Micro, Small, or Medium",
          type: "Interactive Tool",
          icon: "🧮"
        },
        {
          name: "MSME Scheme Finder",
          description: "Find government schemes applicable to your business",
          type: "Online Tool",
          icon: "🔍"
        },
        {
          name: "MSME Benefits Checklist",
          description: "Complete list of benefits available after Udyam Registration",
          type: "PDF Guide",
          icon: "📋"
        },
        {
          name: "Delayed Payment Calculator",
          description: "Calculate interest on delayed MSME payments",
          type: "Interactive Tool",
          icon: "📊"
        }
      ],
      guides: [
        {
          title: "Udyam Registration: Step-by-Step Guide",
          topics: ["Eligibility", "Online registration process", "Documents needed", "Certificate download"],
          readTime: "10 min"
        },
        {
          title: "Top 10 MSME Government Schemes",
          topics: ["CGTMSE", "CLCSS", "PMEGP", "Market Development Assistance"],
          readTime: "15 min"
        },
        {
          title: "MSME & GeM Portal: Selling to Government",
          topics: ["GeM registration", "Catalog creation", "Tender bidding", "Payment process"],
          readTime: "12 min"
        }
      ],
      regulations: [
        { name: "MSMED Act, 2006", link: "#", category: "Primary Legislation" },
        { name: "Udyam Registration Guidelines", link: "#", category: "Registration" },
        { name: "CGTMSE Scheme", link: "#", category: "Credit Guarantee" },
        { name: "MSME Samadhaan Portal", link: "#", category: "Payment Recovery" }
      ]
    },

    detailedFeatures: [
      {
        icon: "⚙️",
        title: "Udyam Registration",
        description:
          "Fast and accurate Udyam Registration to officially recognize your MSME status."
      },
      {
        icon: "📜",
        title: "MSME Certificate",
        description:
          "Obtain your Udyam Certificate for use in tenders, bank applications, and scheme eligibility."
      },
      {
        icon: "💡",
        title: "Benefit Advisory",
        description:
          "Expert guidance on all government benefits, subsidies, and schemes available to your MSME."
      },
      {
        icon: "🏦",
        title: "Credit Scheme Assistance",
        description:
          "Support for CGTMSE, Mudra Loans, and other priority sector credit schemes."
      },
      {
        icon: "🛒",
        title: "GeM Portal Registration",
        description:
          "Register on Government e-Marketplace (GeM) to sell to government departments."
      },
      {
        icon: "💸",
        title: "Delayed Payment Recovery",
        description:
          "Assistance with MSME Samadhaan portal for recovering delayed payments from buyers."
      }
    ],

    process: {
      title: "Our MSME Registration Process",
      steps: [
        { number: "01", title: "Eligibility Check", description: "Verify MSME classification based on investment and turnover." },
        { number: "02", title: "Document Collection", description: "Gather PAN, Aadhaar, GST, and business details." },
        { number: "03", title: "Registration", description: "File on Udyam portal and obtain Udyam Certificate." },
        { number: "04", title: "Benefit Advisory", description: "Guide on applicable schemes, subsidies, and advantages." }
      ]
    },

    faqs: [
      {
        question: "Who can register as MSME?",
        answer:
          "Any enterprise engaged in manufacturing, production, processing, or preservation of goods, or providing services, can register as MSME. This includes proprietorships, partnership firms, HUFs, companies, LLPs, trusts, and cooperative societies. The enterprise must meet the investment and turnover criteria for Micro, Small, or Medium classification."
      },
      {
        question: "What is Udyam Registration?",
        answer:
          "Udyam Registration is the official online process for registering MSMEs, launched in July 2020 replacing the earlier Udyog Aadhaar system. Registration is free, paperless, and based on self-declaration linked with PAN and GST databases. Upon registration, a unique Udyam Registration Number and Udyam Certificate are issued."
      },
      {
        question: "What are the main benefits of MSME Registration?",
        answer:
          "Key benefits include: priority sector lending with lower interest rates; CGTMSE collateral-free credit guarantee up to ₹5 crore; 25% reservation in government procurement; protection against delayed payments (interest at 3x RBI rate on delayed payments); various subsidies (technology upgradation, patent, ISO, barcode); electricity bill concessions; reduced fees for government registrations; and access to various central and state government schemes."
      },
      {
        question: "Is GST registration mandatory for Udyam Registration?",
        answer:
          "GST registration is mandatory for Udyam Registration for enterprises that are mandatorily required to obtain GST registration (turnover above threshold, inter-state supplies, etc.). Enterprises not required to obtain GST registration can register on Udyam without GST. However, from April 1, 2021, PAN is mandatory for all new Udyam Registrations."
      },
      {
        question: "Can I update my MSME registration details?",
        answer:
          "Yes, Udyam Registration details must be updated annually. Investment and turnover figures are auto-populated from IT returns and GST data. If there are changes in business activity, ownership, or other details, these can be updated on the Udyam portal. Reclassification (e.g., from Micro to Small) happens automatically based on updated financial data."
      },
      {
        question: "What is MSME Samadhaan?",
        answer:
          "MSME Samadhaan is an online portal (https://samadhaan.msme.gov.in) where MSME suppliers can file applications against buyers who have not paid within the stipulated 45 days (or 15 days if no agreement). The Micro and Small Enterprise Facilitation Council (MSEFC) adjudicates these disputes. Buyers are liable to pay compound interest at 3 times RBI bank rate on delayed amounts."
      }
    ],

    cta: {
      title: "Register as MSME Today",
      description: "Unlock government benefits, subsidies, and credit schemes for your business.",
      primaryButton: "Register as MSME",
      secondaryButton: "Know Your Benefits"
    }
  }
};