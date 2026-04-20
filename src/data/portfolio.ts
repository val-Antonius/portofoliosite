import { PortfolioData } from "../types";

export const portfolioData: PortfolioData = {
  chapters: [
    { id: "overview", keyword: "building", icon: "layout-dashboard", subtitle: "Mission Control" },
    { id: "work", keyword: "delivering", icon: "briefcase", subtitle: "Selected Projects" },
    { id: "skills", keyword: "analytical", icon: "radar", subtitle: "Technical Expertise" },
    { id: "about", keyword: "systematic", icon: "user", subtitle: "Methodology" },
    { id: "contact", keyword: "reachable", icon: "mail", subtitle: "Communications" },
  ],
  projects: [
    {
      id: "vision-plus",
      title: "Vision+ Workflow Automation",
      timeline: "Aug 2024 - Dec 2024",
      type: "Workflow Management",
      description: "Developed a web-based collaborative workflow management system for the Planning and Scheduling division. The system orchestrates cross-team workflows for film metadata preparation and broadcast scheduling by centralizing task ownership, status tracking, and data handover.",
      impact: [
        "Reduced cross-team coordination and rework cycles by approximately 30–40%.",
        "Improved workflow visibility and minimized rework caused by inconsistent metadata.",
        "Resulted in faster end-to-end content readiness."
      ],
      category: 'web',
      techTags: ["JavaScript", "SQL", "Workflows", "Dashboard"],
      metrics: [
        { label: "Coordination Time", value: "40", prefix: "-", suffix: "%", isPrimary: true, isPositive: true },
        { label: "Process Visibility", value: "100", suffix: "%", isPositive: true },
        { label: "Data Consistency", value: "95", suffix: "%", isPositive: true }
      ]
    },
    {
      id: "smart-dashboard",
      title: "Smart Operational & Decision Support System",
      timeline: "Mar 2025 - Nov 2025",
      type: "Decision Support",
      description: "A web-based smart operational management and decision support system for laundry business operations. Applies a dual-application architecture to separate transactional and analytical workloads, ensuring scalable and reliable data processing. Integrated Ollama LLM to generate automated business insight narratives.",
      impact: [
        "Reduced managerial analysis time from 30 minutes to 5–7 minutes per session.",
        "Automated core workflows including POS transactions, inventory control, and customer management.",
        "Achieved 90% functional stability in black-box testing."
      ],
      category: 'web',
      techTags: ["TypeScript", "Ollama LLM", "Analytics", "POS"],
      metrics: [
        { label: "Analysis Time", value: "7", suffix: "m", isPrimary: true, isPositive: true },
        { label: "Functional Stability", value: "90", suffix: "%", isPositive: true },
        { label: "UAT Score", value: "88.9", suffix: "%", isPositive: true }
      ]
    },
    {
      id: "disa",
      title: "DISA - Asset Management",
      timeline: "Jul 2025 - Aug 2025",
      type: "Asset Tracking",
      description: "A web-based tools and materials management application to support asset tracking, borrowing, and return workflows. Enables real-time visibility of asset availability, borrowing status, and overdue items.",
      impact: [
        "Streamlined operational workflows by digitizing borrowing and return processes.",
        "Improved accountability, traceability, and operational efficiency."
      ],
      category: 'web',
      techTags: ["Web App", "Dashboards", "Tracking"],
      metrics: [
        { label: "Traceability", value: "100", suffix: "%", isPositive: true },
        { label: "Digitization", value: "100", suffix: "%", isPositive: true },
        { label: "Efficiency", value: "80", suffix: "%", isPositive: true }
      ]
    },
    {
      id: "sikumelawit",
      title: "SIKUMELAWIT - IoT Palm Oil Quality",
      timeline: "Oct 2023 - Nov 2023",
      type: "IoT & Mobile App",
      description: "Mobile application aimed at providing accurate information about the quality of palm oil through color-based turbidity detection. Registered as intellectual property by the Directorate General of Intellectual Property (DJKI).",
      impact: [
        "Successfully identified palm oil quality as suitable or unsuitable for use based on turbidity.",
        "Official copyright recognition by DJKI, valid for 50 years."
      ],
      category: 'web',
      techTags: ["IoT", "Mobile UI/UX", "System Architecture"],
      metrics: [
        { label: "Detection Accuracy", value: "95", suffix: "%", isPositive: true },
        { label: "IP Registration", value: "100", suffix: "%", isPositive: true },
        { label: "Copyright validity", value: "50", suffix: "y", isPositive: true }
      ]
    }
  ],
  skills: [
    { name: "JavaScript", category: "Programming", proficiency: 95 },
    { name: "TypeScript", category: "Programming", proficiency: 90 },
    { name: "PHP", category: "Programming", proficiency: 85 },
    { name: "Python", category: "Programming", proficiency: 80 },
    { name: "SQL", category: "Data & Analytics", proficiency: 90 },
    { name: "Tableau", category: "Data & Analytics", proficiency: 85 },
    { name: "RapidMiner", category: "Data & Analytics", proficiency: 85 },
    { name: "Pentaho", category: "Data & Analytics", proficiency: 80 },
    { name: "Figma", category: "UI/UX", proficiency: 90 },
    { name: "COBIT", category: "Governance", proficiency: 80 }
  ],
  experience: [
    {
      role: "Internship Program",
      company: "Vision+",
      location: "Jakarta, Indonesia",
      period: "Aug 2024 - Dec 2024",
      bullets: [
        "Developed Vision+ Workflow Automation, orchestrating cross-team workflows for film metadata preparation and scheduling.",
        "Reduced cross-team coordination and rework cycles by approximately 30–40%.",
        "Improved workflow visibility and minimized rework from inconsistent metadata versions."
      ]
    }
  ]
};
