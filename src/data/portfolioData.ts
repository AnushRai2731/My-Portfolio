import { ExperienceItem, ProjectItem, SkillCategory, AwardItem, CertificationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Anush Rai',
  title: 'Software Engineer | Project Lead',
  badgeRole: 'ANUSH RAI • PROJECT LEAD',
  bio: '4+ years engineering scalable AI systems, automated RPA pipelines, and full-stack software that reduce operational friction and boost productivity.',
  yearsOfExp: '4+ Years',
  workflowsCount: '15+ Workflows',
  certification: 'Azure Pro',
  location: 'Bangalore, India / Remote',
  email: 'anushrai2016@gmail.com',
  github: 'https://github.com/anushrai',
  linkedin: 'https://linkedin.com/in/anushrai',
  twitter: 'https://twitter.com/anushrai',
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Project Lead',
    company: 'Tata Consultancy Services (TCS)',
    period: 'May 2026 — Present',
    isCurrent: true,
    colorTheme: 'primary',
    highlights: [
      {
        icon: 'insights',
        boldText: '65% reduction in manual effort',
        text: 'Architected solutions resulting in a across critical operational pipelines: 65% reduction in manual effort',
      },
      {
        icon: 'storefront',
        boldText: '100+ enterprise stores',
        text: 'Successfully automated deployment and scaling processes for 100+ enterprise stores',
      },
      {
        icon: 'shield_locked',
        boldText: 'GRC (Governance, Risk, and Compliance)',
        text: 'Ensured stringent standards were met and maintained throughout infrastructure upgrades: GRC (Governance, Risk, and Compliance)',
      },
    ],
  },
  {
    id: 'exp-2',
    role: 'Software Developer',
    company: 'Tata Consultancy Services (TCS)',
    period: 'July 2022 — May 2026',
    isCurrent: false,
    colorTheme: 'tertiary',
    highlights: [
      {
        icon: 'model_training',
        boldText: '85% ML accuracy',
        text: 'Engineered and optimized models achieving for predictive data sorting: 85% ML accuracy',
      },
      {
        icon: 'database',
        boldText: '30% improvement in data retrieval',
        text: 'Refactored core querying services, delivering a speed: 30% improvement in data retrieval',
      },
      {
        icon: 'swap_driving_apps_wheel',
        boldText: '5M+ record migration',
        text: 'Spearheaded a massive infrastructure shift involving a with zero data loss: 5M+ record migration',
      },
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'ai-development',
    title: 'AI Development & Platforms',
    icon: 'smart_toy',
    description:
      'Architecting full-stack AI applications, RAG agents, and prompt-engineered workflows with modern development platforms.',
    themeColor: '#00e5ff',
    bgGlow: 'from-cyan-500/10',
    skills: [
      'GOOGLE AI STUDIO (BACKEND DEV)',
      'STITCH (FRONTEND DESIGN)',
      'CLAUDE (CHAT, CODE, COWORK)',
      'GITHUB COPILOT & M365 COPILOT',
      'COSTAR & FEW-SHOT PROMPTING',
      'RAG-BASED AI AGENTS',
      'N8N & MAKE.COM AUTOMATION',
      'CUSTOM GPTS & GEMINI GEMS',
    ],
  },
  {
    id: 'data-ml',
    title: 'Data Analytics & ML',
    icon: 'database',
    description:
      'Transforming raw datasets into actionable intelligence with predictive modeling, statistical analysis, and ETL pipelines.',
    themeColor: '#22d3ee',
    bgGlow: 'from-teal-500/10',
    skills: [
      'PYTHON (PANDAS, NUMPY, SCIKIT-LEARN)',
      'MYSQL & SQL ANALYTICS',
      'TF-IDF & TENSORFLOW-HUB',
      'STATISTICAL ANALYSIS & ETL',
      'CLASSIFICATION & EMBEDDINGS',
      'STREAMLIT & MATPLOTLIB',
    ],
  },
  {
    id: 'automation',
    title: 'Automation & Integration',
    icon: 'autorenew',
    description:
      'Building robust RPA scripts, SAP GUI integrations, RESTful services, and task scheduling systems.',
    themeColor: '#22d3ee',
    bgGlow: 'from-cyan-500/10',
    skills: [
      'PYTHON AUTOMATION (SELENIUM)',
      'WIN32COM / EXCEL COM API',
      'SAP GUI SCRIPTING API',
      'REST APIS (FLASK & DJANGO)',
      'JWT AUTH, PAGINATION & CACHING',
      'TASK SCHEDULER & EVENT LOGS',
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Development & DevOps',
    icon: 'cloud',
    description:
      'Managing version control, cloud infrastructure, automated regression testing, and CI/CD pipelines.',
    themeColor: '#a78bfa',
    bgGlow: 'from-purple-500/10',
    skills: [
      'MICROSOFT AZURE (VMS & DEVOPS)',
      'GITLAB (PROTECTED BRANCHES, MRS)',
      'JENKINS CI/CD PIPELINES',
      'SELENIUM REGRESSION TESTING (90% FLOW)',
      'AGILE / SCRUM & SDLC',
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'sap-excel-automation',
    title: 'Enterprise SAP & Excel Automation Engine',
    description:
      'Quarterly award-winning automation solution leveraging Python (win32com/Excel COM, SAP GUI Scripting API) to streamline complex data extraction, invoice processing, and SAP record updates across multi-store retail supply chains.',
    icon: 'inventory_2',
    iconColor: 'text-[#22D3EE]',
    tags: ['PYTHON', 'SAP GUI SCRIPTING', 'EXCEL COM API', 'RPA'],
    impactMetric: {
      label: 'IMPACT METRIC',
      value: 'Automated 100+ stores & saved 120+ hrs/mo',
    },
    actionText: 'VIEW ARCHITECTURE',
    isFeatured: true,
  },
  {
    id: 'sop-analyzer',
    title: 'AI-Powered SOP & ATS Resume Analyzer',
    description:
      'An advanced RAG-based document intelligence system leveraging prompt engineering (COSTAR framework, few-shot prompting) and semantic vector search to parse, grade, and summarize resumes and SOPs with 2x research velocity.',
    icon: 'psychology',
    iconColor: 'text-[#22D3EE]',
    tags: ['RAG ARCHITECTURE', 'COSTAR PROMPTING', 'VECTOR SEARCH', 'PYTHON', 'GPT-4'],
    impactMetric: {
      label: 'IMPACT METRIC',
      value: 'Reduced manual review time by 75%',
    },
    actionText: 'TEST LIVE DEMO',
    isFeatured: true,
  },
  {
    id: 'aistudio-stitch-suite',
    title: 'Full-Stack AI Application Suite (Google AI Studio & Stitch)',
    description:
      'Rapid full-stack AI creation framework pairing Stitch for UI/UX frontend styling with Google AI Studio for server-side Gemini LLM backend logic, API key proxies, and low-latency response orchestration.',
    icon: 'bolt',
    iconColor: 'text-[#F472B6]',
    tags: ['GOOGLE AI STUDIO', 'STITCH UI', 'REACT', 'TYPESCRIPT', 'NODE.JS'],
    impactMetric: {
      label: 'DEVELOPMENT VELOCITY',
      value: '3x faster full-stack AI deployment',
    },
    actionText: 'EXPLORE AI SUITE',
  },
  {
    id: 'ai-expense-tracker',
    title: 'Autonomous Expense Tracker Agent (n8n & OpenAI)',
    description:
      'Multi-node agentic workflow built with n8n, OpenAI LLMs, Google Sheets database, and automated Gmail alert triggers. Uses conversational memory and credit/debit intent parsing for real-time financial tracking.',
    icon: 'account_balance_wallet',
    iconColor: 'text-[#22D3EE]',
    tags: ['N8N AGENT', 'OPENAI API', 'GOOGLE SHEETS DB', 'GMAIL API'],
    impactMetric: {
      label: 'AUTOMATION VELOCITY',
      value: 'Instant conversational entry & threshold alerts',
    },
    actionText: 'VIEW AGENT WORKFLOW',
  },
  {
    id: 'make-gemini-pipeline',
    title: 'Real-Time Gemini Flash Automation Pipeline (Make.com)',
    description:
      'Low-latency autonomous workflow connecting disparate enterprise APIs with Gemini 2.5/2.0 Flash models via Make.com visual scenarios for high-volume text analysis and structured JSON synthesis.',
    icon: 'alt_route',
    iconColor: 'text-[#38BDF8]',
    tags: ['MAKE.COM', 'GEMINI FLASH 2.5', 'API INTEGRATION', 'JSON SYNTHESIS'],
    impactMetric: {
      label: 'PROCESSING SPEED',
      value: '<500ms model inference & zero-code routing',
    },
    actionText: 'VIEW PIPELINE FLOW',
  },
  {
    id: 'ticket-engine',
    title: 'Intelligent Ticket Classification Engine',
    description:
      'Machine learning classification engine trained on enterprise support logs to automatically route and categorize incoming tickets using NLP and TF-IDF feature extraction.',
    icon: 'psychology',
    iconColor: 'text-[#22D3EE]',
    tags: ['SCIKIT-LEARN', 'NLP', 'TF-IDF', 'PYTHON'],
    accuracyMetric: '85% Precision',
    actionText: 'TRY TICKET CLASSIFIER',
  },
];

export const AWARDS: AwardItem[] = [
  {
    id: 'award-0',
    title: 'Quarterly Best Performer Award',
    subtitle: 'TATA CONSULTANCY SERVICES',
    description:
      'Recognized for exceptional technical expertise and leadership in guiding a developer team to deliver a complex Excel & SAP automation solution. Transformed intricate business requirements into scalable, intelligent workflows with high client impact.',
    iconName: 'Award',
    color: '#22D3EE',
    tag: 'TECHNICAL LEADERSHIP & SAP AUTOMATION',
  },
  {
    id: 'award-1',
    title: 'Spotlight Award',
    subtitle: 'TATA CONSULTANCY SERVICES',
    description:
      'Recognized for exceptional communication skills in translating complex technical analyses into business-friendly insights for senior stakeholders and cross-functional teams.',
    iconName: 'Star',
    color: '#22D3EE',
    tag: 'LEADERSHIP & STAKEHOLDER IMPACT',
  },
  {
    id: 'award-2',
    title: '"Above & Beyond" Initiative Award',
    subtitle: 'TATA CONSULTANCY SERVICES',
    description:
      'Led comprehensive root-cause analysis that stabilized critical production systems and prevented revenue-impacting incidents.',
    iconName: 'Zap',
    color: '#A78BFA',
    tag: 'SYSTEM RELIABILITY',
  },
  {
    id: 'award-3',
    title: 'Team Collaboration Star',
    subtitle: 'TATA CONSULTANCY SERVICES',
    description:
      'Actively mentored junior developers, fostered a supportive team environment, and played a key role in closing skill gaps within engineering teams.',
    iconName: 'Users',
    color: '#A78BFA',
    tag: 'MENTORSHIP & TEAMWORK',
  },
  {
    id: 'award-4',
    title: 'GEM Award',
    subtitle: 'TATA CONSULTANCY SERVICES',
    description:
      'Delivered high-performance analytics project ahead of schedule while maintaining code quality and documentation standards.',
    iconName: 'Gem',
    color: '#22D3EE',
    tag: 'EXCELLENCE & VELOCITY',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-1',
    title: 'Certified AI-Powered Data Analytics Specialist',
    issuer: 'be10x (AI Career Accelerator)',
    date: 'July 30, 2026',
    credentialId: 'BE10X-AIDA-2026',
    skillsGained: ['Claude Cowork & Claude Code', 'AI Data Analysis', 'Autonomous Workflows'],
    featured: true,
    category: 'AI & Data',
  },
  {
    id: 'cert-2',
    title: 'Certified AI Office & Productivity Specialist',
    issuer: 'be10x (AI Career Accelerator)',
    date: 'July 21, 2026',
    credentialId: 'BE10X-AIOP-2026',
    skillsGained: ['AI Foundations & Prompting', '2x Research Velocity', 'Office Productivity'],
    featured: true,
    category: 'AI & Data',
  },
  {
    id: 'cert-3',
    title: 'AI Tools Workshop Certificate',
    issuer: 'be10x',
    date: 'June 28, 2026',
    credentialId: 'BE10X-AITW-2026',
    skillsGained: ['AI Data Analytics (<30m)', 'AI Code Debugging (<10m)', 'AI Presentations (<5m)'],
    featured: true,
    category: 'AI & Data',
  },
  {
    id: 'cert-4',
    title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    date: '2023',
    skillsGained: ['Cloud Infrastructure', 'Azure Services', 'Security & Compliance'],
    featured: true,
    category: 'Cloud',
  },
  {
    id: 'cert-5',
    title: 'Machine Learning & AI Foundations: Classification Modeling',
    issuer: 'LinkedIn Learning',
    skillsGained: ['Classification Models', 'Predictive Modeling', 'Model Evaluation'],
    category: 'Machine Learning',
  },
  {
    id: 'cert-6',
    title: 'NLP with Python for Machine Learning',
    issuer: 'Udemy',
    skillsGained: ['Natural Language Processing', 'Text Vectorization', 'NLTK & Sentiment Analysis'],
    category: 'Machine Learning',
  },
  {
    id: 'cert-7',
    title: 'Python Data Structures & Algorithms',
    issuer: 'Coursera',
    skillsGained: ['Algorithm Design', 'Data Structures', 'Performance Optimization'],
    category: 'Software Engineering',
  },
  {
    id: 'cert-8',
    title: 'Python for Data Science',
    issuer: 'LinkedIn Learning',
    skillsGained: ['Pandas & NumPy', 'Data Wrangling', 'Exploratory Analysis'],
    category: 'AI & Data',
  },
];


