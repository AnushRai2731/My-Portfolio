import { ExperienceItem, ProjectItem, SkillCategory, AwardItem, CertificationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Anush Rai',
  title: 'Software Engineer | Project Lead',
  bio: '4+ years building intelligent AI applications, data analytics workflows, and scalable software systems that reduce operational effort by up to 70%.',
  yearsOfExp: '4+',
  automationEfficiency: '70%',
  certification: 'Azure Certified Pro',
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
        text: 'Architected solutions resulting in a across critical operational pipelines.',
      },
      {
        icon: 'storefront',
        boldText: '100+ enterprise stores',
        text: 'Successfully automated deployment and scaling processes for.',
      },
      {
        icon: 'shield_locked',
        boldText: 'GRC (Governance, Risk, and Compliance)',
        text: 'Ensured stringent standards were met and maintained throughout infrastructure upgrades.',
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
        text: 'Engineered and optimized models achieving for predictive data sorting.',
      },
      {
        icon: 'database',
        boldText: '30% improvement in data retrieval',
        text: 'Refactored core querying services, delivering a speeds.',
      },
      {
        icon: 'swap_driving_apps_wheel',
        boldText: '5M+ record migration',
        text: 'Spearheaded a massive infrastructure shift involving a with zero data loss.',
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
    themeColor: '#00d2ff',
    bgGlow: 'from-primary/10',
    skills: [
      'Google AI Studio (Backend Dev)',
      'Stitch (Frontend Design)',
      'Claude (Chat, Code, Cowork)',
      'GitHub Copilot & M365 Copilot',
      'CoSTAR & Few-Shot Prompting',
      'RAG-Based AI Agents',
      'n8n & Make.com Automation',
      'Custom GPTs & Gemini Gems',
    ],
  },
  {
    id: 'data-ml',
    title: 'Data Analytics & ML',
    icon: 'database',
    description:
      'Transforming raw datasets into actionable intelligence with predictive modeling, statistical analysis, and ETL pipelines.',
    themeColor: '#47d6ff',
    bgGlow: 'from-primary-fixed-dim/10',
    skills: [
      'Python (Pandas, NumPy, Scikit-learn)',
      'SQL & PL/SQL Analytics',
      'TF-IDF & TensorFlow-Hub',
      'Statistical Analysis & ETL',
      'Classification & Embeddings',
      'Streamlit & Matplotlib',
    ],
  },
  {
    id: 'automation',
    title: 'Automation & Integration',
    icon: 'autorenew',
    description:
      'Building robust RPA scripts, SAP GUI integrations, RESTful services, and task scheduling systems.',
    themeColor: '#00fdee',
    bgGlow: 'from-secondary-fixed/10',
    skills: [
      'Python Automation (Selenium)',
      'win32com / Excel COM API',
      'SAP GUI Scripting API',
      'REST APIs (Flask & Django)',
      'JWT Auth, Pagination & Caching',
      'Task Scheduler & Event Logs',
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Development & DevOps',
    icon: 'cloud',
    description:
      'Managing version control, cloud infrastructure, automated regression testing, and CI/CD pipelines.',
    themeColor: '#e9aaff',
    bgGlow: 'from-tertiary/10',
    skills: [
      'Microsoft Azure (VMs & DevOps)',
      'GitLab (Protected Branches, MRs)',
      'Jenkins CI/CD Pipelines',
      'Selenium Regression Testing (90% Flow)',
      'Agile / Scrum & SDLC',
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
    iconColor: 'text-secondary-fixed',
    tags: ['Python', 'SAP GUI Scripting', 'Excel COM API', 'RPA'],
    impactMetric: {
      label: 'Impact Metric:',
      value: 'Automated 100+ stores & saved 120+ hrs/mo',
    },
    actionText: 'View Architecture',
    isFeatured: true,
  },
  {
    id: 'sop-analyzer',
    title: 'AI-Powered SOP & ATS Resume Analyzer',
    description:
      'An advanced RAG-based document intelligence system leveraging prompt engineering (CoSTAR framework, few-shot prompting) and semantic vector search to parse, grade, and summarize resumes and SOPs with 2x research velocity.',
    icon: 'psychology',
    iconColor: 'text-primary',
    tags: ['RAG Architecture', 'CoSTAR Prompting', 'Vector Search', 'Python', 'GPT-4'],
    impactMetric: {
      label: 'Impact Metric:',
      value: 'Reduced manual review time by 75%',
    },
    actionText: 'Test Live Demo',
    isFeatured: true,
  },
  {
    id: 'aistudio-stitch-suite',
    title: 'Full-Stack AI Application Suite (Google AI Studio & Stitch)',
    description:
      'Rapid full-stack AI creation framework pairing Stitch for UI/UX frontend styling with Google AI Studio for server-side Gemini LLM backend logic, API key proxies, and low-latency response orchestration.',
    icon: 'bolt',
    iconColor: 'text-[#00fdee]',
    tags: ['Google AI Studio', 'Stitch UI', 'React', 'TypeScript', 'Node.js'],
    impactMetric: {
      label: 'Development Velocity:',
      value: '3x faster full-stack AI deployment',
    },
    actionText: 'Explore AI Suite',
  },
  {
    id: 'ai-expense-tracker',
    title: 'Autonomous Expense Tracker Agent (n8n & OpenAI)',
    description:
      'Multi-node agentic workflow built with n8n, OpenAI LLMs, Google Sheets database, and automated Gmail alert triggers. Uses conversational memory and credit/debit intent parsing for real-time financial tracking.',
    icon: 'account_balance_wallet',
    iconColor: 'text-primary',
    tags: ['n8n Agent', 'OpenAI API', 'Google Sheets DB', 'Gmail API'],
    impactMetric: {
      label: 'Automation Velocity:',
      value: 'Instant conversational entry & threshold alerts',
    },
    actionText: 'View Agent Workflow',
  },
  {
    id: 'make-gemini-pipeline',
    title: 'Real-Time Gemini Flash Automation Pipeline (Make.com)',
    description:
      'Low-latency autonomous workflow connecting disparate enterprise APIs with Gemini 2.5/2.0 Flash models via Make.com visual scenarios for high-volume text analysis and structured JSON synthesis.',
    icon: 'alt_route',
    iconColor: 'text-tertiary-fixed',
    tags: ['Make.com', 'Gemini Flash 2.5', 'API Integration', 'JSON Synthesis'],
    impactMetric: {
      label: 'Processing Speed:',
      value: '<500ms model inference & zero-code routing',
    },
    actionText: 'View Pipeline Flow',
  },
  {
    id: 'ticket-engine',
    title: 'Intelligent Ticket Classification Engine',
    description:
      'Machine learning classification engine trained on enterprise support logs to automatically route and categorize incoming tickets using NLP and TF-IDF feature extraction.',
    icon: 'psychology',
    iconColor: 'text-tertiary-fixed',
    tags: ['Scikit-Learn', 'NLP', 'TF-IDF', 'Python'],
    accuracyMetric: '85% Precision',
    actionText: 'Try Ticket Classifier',
  },
];

export const AWARDS: AwardItem[] = [
  {
    id: 'award-0',
    title: 'Quarterly Best Performer Award',
    subtitle: 'Tata Consultancy Services',
    description:
      'Recognized for exceptional technical expertise and leadership in guiding a developer team to deliver a complex Excel & SAP automation solution. Transformed intricate business requirements into scalable, intelligent workflows with high client impact.',
    iconName: 'Award',
    color: '#00fdee',
    tag: 'Technical Leadership & SAP Automation',
  },
  {
    id: 'award-1',
    title: 'Spotlight Award',
    subtitle: 'Tata Consultancy Services',
    description:
      'Recognized for exceptional communication skills in translating complex technical analyses into business-friendly insights for senior stakeholders and cross-functional teams.',
    iconName: 'Star',
    color: '#00d2ff',
    tag: 'Leadership & Stakeholder Impact',
  },
  {
    id: 'award-2',
    title: '"Above & Beyond" Initiative Award',
    subtitle: 'Tata Consultancy Services',
    description:
      'Led comprehensive root-cause analysis that stabilized critical production systems and prevented revenue-impacting incidents.',
    iconName: 'Zap',
    color: '#00fdee',
    tag: 'System Reliability',
  },
  {
    id: 'award-3',
    title: 'Team Collaboration Star',
    subtitle: 'Tata Consultancy Services',
    description:
      'Actively mentored junior developers, fostered a supportive team environment, and played a key role in closing skill gaps within engineering teams.',
    iconName: 'Users',
    color: '#e9aaff',
    tag: 'Mentorship & Teamwork',
  },
  {
    id: 'award-4',
    title: 'GEM Award',
    subtitle: 'Tata Consultancy Services',
    description:
      'Delivered high-performance analytics project ahead of schedule while maintaining code quality and documentation standards.',
    iconName: 'Gem',
    color: '#a5e7ff',
    tag: 'Excellence & Velocity',
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

