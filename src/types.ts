export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  isCurrent?: boolean;
  colorTheme: 'primary' | 'tertiary';
  highlights: {
    icon: string;
    text: string;
    boldText: string;
  }[];
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  themeColor: string;
  bgGlow: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconColor: string;
  tags: string[];
  impactMetric?: {
    label: string;
    value: string;
  };
  accuracyMetric?: string;
  isInternal?: boolean;
  actionText?: string;
  isFeatured?: boolean;
}

export interface AwardItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  iconName: 'Trophy' | 'Zap' | 'Users' | 'Gem' | 'Award' | 'Star';
  color: string;
  tag: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  credentialId?: string;
  skillsGained?: string[];
  featured?: boolean;
  category: 'AI & Data' | 'Cloud' | 'Machine Learning' | 'Software Engineering';
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SOPAnalysisResult {
  summary: string;
  riskScore: number;
  complianceLevel: string;
  keyActionItems: string[];
  extractedMetrics: {
    ruleCount: number;
    estimatedAutomationSavings: string;
    criticalGaps: string[];
  };
}

export interface TicketClassResult {
  category: string;
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  assignedTeam: string;
  confidenceScore: number;
  suggestedSolution: string;
}
