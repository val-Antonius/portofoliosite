"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface CVSidePanelProps {
  isOpen: boolean;
  onClose: () => void;
}

// Data CV di-embed langsung agar sesuai dengan pembaruan termutakhir
const cvData = {
  profile: "Information Systems graduate bridging system architecture and data science. Experienced in developing end-to-end, auditable machine learning pipelines, operational dashboards, and web-based workflow automation tools. Strong in analytical problem-solving and system thinking, with a proven ability to deploy predictive models and translate complex technical processes into transparent, actionable business insights.",
  education: [
    {
      degree: "Bachelor of Information System",
      institution: "Telkom University",
      period: "Sep 2021 - Jan 2026"
    }
  ],
  experience: [
    {
      role: "Practicum Assistant",
      company: "Telkom University",
      location: "Jakarta, Indonesia",
      period: "Sep 2023 - June 2025",
      bullets: [
        "Supported end-to-end practicum operations across 4 Information Systems courses: Database Systems, Data Mining, Data Warehouse & Business Intelligence, and Accounting Information Systems.",
        "Mentored students in SQL, database design, ETL workflows, business intelligence concepts, and data analysis problem-solving.",
        "Reviewed and graded student submissions, exams, and project deliverables while maintaining evaluation quality and academic standards.",
        "Developed supporting practicum materials, technical exercises, and case-based learning resources.",
        "Collaborated with lecturers and academic teams to ensure smooth execution of weekly practicum sessions and academic assessments."
      ]
    },
    {
      role: "Internship Program",
      company: "Vision+",
      location: "Jakarta, Indonesia",
      period: "Aug 2024 - Dec 2024",
      bullets: [
        "Assisted planning and scheduling activities for operational workflows within the content production team.",
        "Coordinated with cross-functional stakeholders to align timelines and resource availability.",
        "Identified recurring delays and bottlenecks during scheduling discussions, contributing insights for process improvement.",
        "Gained exposure to real-world operational workflows in a media streaming environment."
      ]
    }
  ],
  projects: [
    {
      name: "Predictive Credit Scoring System",
      period: "Mar 2026 - Apr 2026",
      bullets: [
        "Developed a functional, web-based credit scoring system designed to automate loan eligibility evaluations using historical customer data.",
        "Integrated an interpretability module using SHAP (SHapley Additive exPlanations) to ensure every credit decision is accompanied by a transparent, auditable rationale.",
        "Architected the full system lifecycle, encompassing data preprocessing, feature engineering, and model deployment into an interactive Streamlit application.",
        "Designed the system output to provide actionable risk scores, enabling credit analysts to expedite decision-making while maintaining high standards of risk assessment."
      ]
    },
    {
      name: "Whser - Smart Operational Dashboard & Decision Support System",
      period: "Mar 2025 - Nov 2025",
      bullets: [
        "Developed a web-based smart operational management and decision support system as a final year project to support laundry business operations. The system automates core workflows including transaction processing, inventory control, and customer management, while providing an intelligent dashboard that transforms operational data into actionable business insights. Reducing managerial analysis time by approximately 60% per session. Achieved 90% functional stability in black-box testing across 198 test cases and a User Acceptance Test score of 88.9%.",
        "Built an end-to-end web-based operational system covering POS transactions and Order Processing, inventory, and customer management.",
        "Designed and implemented an intelligent decision support dashboard using a pattern-context-insight approach.",
        "Implemented an immutable data snapshot mechanism to preserve historical operational data for accurate analysis.",
        "Integrated a local Large Language Model (LLM) via Ollama to generate automated business insight narratives."
      ]
    },
    {
      name: "DISA Tooltrack",
      period: "Jul 2025 - Aug 2025",
      bullets: [
        "Developed a web-based tools and materials management application to support asset tracking, borrowing, and return workflows. The system manages tools and consumable materials through a centralized dashboard, enabling real-time visibility of asset availability, borrowing status, overdue items, and activity history.",
        "Built a web-based asset management system covering tools, materials, and unit-level tracking.",
        "Implemented borrowing and return workflows with due date management and overdue status handling.",
        "Designed an activity monitoring module to record transaction history and user actions.",
        "Developed an interactive dashboard to present asset statistics, availability, and recent activities.",
        "Implemented role-oriented interfaces to support daily operational use and reporting needs."
      ]
    },
    {
      name: "Vision+ Internship (Workflow Management System)",
      period: "Aug 2024 - Dec 2024",
      bullets: [
        "Developed a web-based collaborative workflow management system for the Planning and Scheduling division. The system orchestrates cross-team workflows for film metadata preparation and broadcast scheduling by centralizing task ownership, status tracking, and data handover between planning, scheduling, and CMS processes. The implementation reduced cross-team coordination and rework cycles by approximately 30-40%."
      ]
    },
    {
      name: "Sistem Informasi Pengecekan Kualitas Minyak Sawit Berbasis IoT (SIKUMELAWIT)",
      period: "Oct 2023 - Nov 2023",
      bullets: [
        "Designing the system architecture and the application's user interface. SIKUMELAWIT is a mobile application created by Telkom University Jakarta, that aims to provide accurate information about the quality of palm oil through color-based turbidity detection, including the successful identification percentage of palm oil quality as either suitable or unsuitable for use."
      ]
    }
  ],
  publications: [
    {
      title: "IoT-Based Palm Oil Quality Information System Module on Directorate General of Intellectual Property (DJKI), Ministry of Law and Human Rights, Republic of Indonesia",
      period: "Feb 2024",
      description: "Registered intellectual property in the form of a copyrighted instructional module documenting the design and implementation of an IoT-based information system for palm oil quality monitoring. The work is officially recorded by the Directorate General of Intellectual Property (DJKI) under Indonesian Copyright Law, with Universitas Telkom as the copyright holder. The author is listed as a contributing creator (co-creator) among the registered inventors. Copyright protection is valid for 50 years from the date of first publication."
    }
  ],
  skills: [
    { category: "Data Science & MLOps", items: "MLflow, DVC, SHAP, Streamlit, SQL, Tableau, RapidMiner, Pentaho Data Integration" },
    { category: "UI/UX & Product Design", items: "Figma (UI/UX Design, Prototyping & Editorial-Style Layouts)" },
    { category: "IT Governance & Modeling", items: "COBIT, Visual Paradigm" },
    { category: "Programming & Development", items: "Python, JavaScript, TypeScript, PHP, FastAPI, Docker, Git" },
    { category: "Soft Skills", items: "Analytical problem solver, critical thinker, fast learner with strong self-initiative, capable of independent execution and clear technical communication." }
  ]
};

export default function CVSidePanel({ isOpen, onClose }: CVSidePanelProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#1C1A17] backdrop-blur-sm cursor-pointer"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="relative w-full max-w-[520px] h-full bg-card shadow-2xl border-l border-border flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="font-display text-3xl text-primary">Curriculum Vitae</h2>
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-amber-bg transition-colors text-secondary hover:text-amber"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 md:p-10 text-primary font-sans relative">
              {/* PROFILE SECTION */}
              <div className="mb-10">
                <h3 className="text-[11px] font-sans text-secondary uppercase tracking-widest mb-4">Profile</h3>
                <p className="text-base leading-relaxed text-primary">
                  {cvData.profile}
                </p>
              </div>

              {/* EDUCATION SECTION */}
              <div className="mb-10">
                <h3 className="text-[11px] font-sans text-secondary uppercase tracking-widest mb-4">Education</h3>
                <div className="space-y-6">
                  {cvData.education.map((edu, idx) => (
                    <div key={idx} className="relative pl-6 border-l border-border">
                      <div className="absolute w-2 h-2 rounded-full bg-border -left-[4px] top-1.5" />
                      <h4 className="font-bold text-primary text-lg">{edu.degree}</h4>
                      <div className="text-sm text-secondary mb-1">{edu.institution}</div>
                      <div className="text-xs font-mono text-secondary">{edu.period}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* EXPERIENCE SECTION */}
              <div className="mb-10">
                <h3 className="text-[11px] font-sans text-secondary uppercase tracking-widest mb-4">Experience</h3>
                <div className="space-y-8">
                  {cvData.experience.map((exp, idx) => (
                    <div key={idx} className="relative pl-6 border-l border-border">
                      <div className="absolute w-2.5 h-2.5 rounded-full bg-amber -left-[5px] top-1.5" />
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                        <h4 className="font-bold text-primary text-lg">{exp.role}</h4>
                        <span className="text-sm font-mono text-secondary mt-1 md:mt-0">{exp.period}</span>
                      </div>
                      <div className="text-sm text-secondary mb-3">{exp.company} • {exp.location}</div>
                      <ul className="text-sm space-y-2 list-disc ml-4 text-primary/80 leading-relaxed">
                        {exp.bullets.map((bullet, bidx) => (
                          <li key={bidx}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* PROJECTS SECTION */}
              <div className="mb-10">
                <h3 className="text-[11px] font-sans text-secondary uppercase tracking-widest mb-4">Projects</h3>
                <div className="space-y-8">
                  {cvData.projects.map((proj, idx) => (
                    <div key={idx} className="relative pl-6 border-l border-border">
                      <div className="absolute w-2.5 h-2.5 rounded-full bg-amber -left-[5px] top-1.5" />
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                        <h4 className="font-bold text-primary text-lg">{proj.name}</h4>
                        <span className="text-sm font-mono text-secondary mt-1 md:mt-0 min-w-max md:ml-4">{proj.period}</span>
                      </div>
                      <ul className="text-sm space-y-2 list-disc ml-4 text-primary/80 leading-relaxed mt-3">
                        {proj.bullets.map((bullet, bidx) => (
                          <li key={bidx}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* PUBLICATIONS SECTION */}
              <div className="mb-10">
                <h3 className="text-[11px] font-sans text-secondary uppercase tracking-widest mb-4">Publications</h3>
                <div className="space-y-6">
                  {cvData.publications.map((pub, idx) => (
                    <div key={idx} className="relative pl-6 border-l border-border">
                      <div className="absolute w-2 h-2 rounded-full bg-border -left-[4px] top-1.5" />
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                        <h4 className="font-bold text-primary text-lg">{pub.title}</h4>
                      </div>
                      <div className="text-xs font-mono text-secondary mb-3">{pub.period}</div>
                      <p className="text-sm text-primary/80 leading-relaxed">
                        {pub.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* SKILLS SECTION */}
              <div>
                <h3 className="text-[11px] font-sans text-secondary uppercase tracking-widest mb-4">Skills</h3>
                <div className="space-y-4">
                  {cvData.skills.map((skill, idx) => (
                    <div key={idx} className="relative pl-6 border-l border-border">
                      <div className="absolute w-2 h-2 rounded-full bg-border -left-[4px] top-1.5" />
                      <h4 className="font-bold text-primary text-sm mb-1">{skill.category}</h4>
                      <p className="text-sm text-primary/80 leading-relaxed">
                        {skill.items}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}