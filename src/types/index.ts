export interface ProjectMetric {
  label: string;
  value: string;
  isPrimary?: boolean;
  isPositive?: boolean;
  prefix?: string;
  suffix?: string;
}

/** A single tier in a categorized tech stack (e.g. { category: "Frontend", items: ["TypeScript", "React"] }) */
export interface TechCategory {
  category: string;
  items: string[];
}

/** A step in a DS/ML pipeline diagram */
export interface PipelineStep {
  label: string;
  description: string;
  icon: string; // lucide icon name
}

export interface Project {
  id: string;
  title: string;
  timeline: string;
  type: string;
  description: string;
  impact: string[];
  category?: 'web' | 'ds-ml';
  techTags: string[];
  metrics: ProjectMetric[];

  // ── Enriched narrative fields ──────────────────────────────────────────────
  /** One-liner hook displayed under the title */
  tagline?: string;
  /** Problem framing for the Rationale Grid (web) or Abstract (ds-ml) */
  problem?: string;
  /** Approach / methodology narrative */
  approach?: string;
  /** Outcome / results narrative */
  outcome?: string;
  /** Ordered list of app screenshot paths relative to /public (e.g. "/pic/mockup_metavision/dashboard.png") */
  mockupImages?: string[];
  /** Tech stack grouped by category — used in CompetencyBadges */
  techStackCategorized?: TechCategory[];
  /** DS/ML only — pipeline steps for the ML Pipeline diagram */
  pipelineSteps?: PipelineStep[];
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
