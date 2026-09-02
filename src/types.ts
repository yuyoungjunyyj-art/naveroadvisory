export type Language = 'en' | 'ko';
export type Theme = 'dark' | 'light';

export interface NavItem {
  id: string;
  label: {
    en: string;
    ko: string;
  };
  href: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: {
    en: string;
    ko: string;
  };
  subtitle: {
    en: string;
    ko: string;
  };
  description: {
    en: string;
    ko: string;
  };
  deliverables: {
    en: string[];
    ko: string[];
  };
  image: string;
  iconName: string;
  badge: {
    en: string;
    ko: string;
  };
}

export interface ProcessStep {
  step: string;
  title: {
    en: string;
    ko: string;
  };
  subtitle: {
    en: string;
    ko: string;
  };
  description: {
    en: string;
    ko: string;
  };
  keyActivities: {
    en: string[];
    ko: string[];
  };
  duration: {
    en: string;
    ko: string;
  };
  image: string;
}

export interface CaseStudy {
  id: string;
  title: {
    en: string;
    ko: string;
  };
  client: string;
  sector: {
    en: string;
    ko: string;
  };
  location: string;
  description: {
    en: string;
    ko: string;
  };
  impact: {
    en: string[];
    ko: string[];
  };
  hasBeforeAfter?: boolean;
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: {
    en: string;
    ko: string;
  };
  afterLabel?: {
    en: string;
    ko: string;
  };
  image: string;
}

export interface AssessmentQuestion {
  id: string;
  question: {
    en: string;
    ko: string;
  };
  options: {
    label: {
      en: string;
      ko: string;
    };
    value: string;
    score: number;
    tip: {
      en: string;
      ko: string;
    };
  }[];
}

export interface MetricItem {
  value: string;
  label: {
    en: string;
    ko: string;
  };
  sublabel: {
    en: string;
    ko: string;
  };
}
