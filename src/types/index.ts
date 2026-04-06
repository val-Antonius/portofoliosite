export interface ProjectMetric {
  label: string;
  value: string;
  isPrimary?: boolean;
  isPositive?: boolean;
  prefix?: string;
  suffix?: string;
}

export interface Project {
  id: string;
  title: string;
  timeline: string;
  type: string;
  description: string;
  impact: string[];
  techTags: string[];
  metrics: ProjectMetric[];
}

export interface Skill {
  name: string;
  category: string;
  proficiency: number; // 0 to 100
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface Chapter {
  id: string;
  keyword: string;
  icon: string;
  subtitle: string;
}

export interface PortfolioData {
  projects: Project[];
  skills: Skill[];
  experience: Experience[];
  chapters: Chapter[];
}
