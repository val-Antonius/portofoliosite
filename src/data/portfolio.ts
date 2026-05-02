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
    // ─────────────────────────────────────────────────────────────────────────
    // WEB PROJECTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "vision-plus",
      title: "Vision+ Workflow Automation",
      timeline: "Aug 2024 – Dec 2024",
      type: "Workflow Management",
      tagline: "From chaos to choreography — orchestrating content pipelines for Southeast Asia's leading streaming platform.",
      description: "Developed a web-based collaborative workflow management system for the Planning and Scheduling division. The system orchestrates cross-team workflows for film metadata preparation and broadcast scheduling by centralizing task ownership, status tracking, and data handover.",
      problem: "Cross-team coordination between the Planning and Scheduling divisions relied entirely on manual chat threads and shared spreadsheets, producing multiple conflicting metadata versions and constant rework cycles — with no single source of truth.",
      approach: "Designed and built a centralised workflow orchestration system that assigns task ownership per division, enforces handover checkpoints, and maintains a live status board. Inspired by software pipeline principles, each stage gates the next — eliminating silent failures between teams.",
      outcome: "Coordination overhead dropped by 30–40%. Rework caused by metadata version conflicts was effectively eliminated. The team gained real-time visibility into content readiness, compressing the end-to-end scheduling cycle.",
      impact: [
        "Reduced cross-team coordination and rework cycles by approximately 30–40%.",
        "Improved workflow visibility and minimized rework caused by inconsistent metadata.",
        "Resulted in faster end-to-end content readiness for broadcast scheduling.",
      ],
      category: "web",
      techTags: ["JavaScript", "SQL", "Workflow Orchestration", "Dashboard"],
      techStackCategorized: [
        { category: "Frontend", items: ["JavaScript", "HTML/CSS"] },
        { category: "Backend & Data", items: ["SQL", "REST API"] },
        { category: "Domain", items: ["Workflow Design", "Content Scheduling"] },
      ],
      metrics: [
        { label: "Coordination Overhead", value: "40", prefix: "−", suffix: "%", isPrimary: true, isPositive: true },
        { label: "Workflow Visibility", value: "100", suffix: "%", isPositive: true },
        { label: "Data Consistency", value: "95", suffix: "%", isPositive: true },
      ],
      mockupImages: [
        "/pic/mockup_metavision/dashboard.png",
        "/pic/mockup_metavision/content_intake.png",
        "/pic/mockup_metavision/metadata_input.png",
        "/pic/mockup_metavision/ready_schedulling.png",
        "/pic/mockup_metavision/schedule_builder.png",
        "/pic/mockup_metavision/cms_handoff.png",
        "/pic/mockup_metavision/meeting_notes.png",
        "/pic/mockup_metavision/analytics.png",
      ],
    },
    {
      id: "smart-dashboard",
      title: "Smart Operational & Decision Support System",
      timeline: "Mar 2025 – Nov 2025",
      type: "Decision Support",
      tagline: "Turning laundry receipts into business intelligence — a dual-app architecture for SME decision makers.",
      description: "A web-based smart operational management and decision support system for laundry business operations. Applies a dual-application architecture to separate transactional and analytical workloads, ensuring scalable and reliable data processing. Integrated Ollama LLM to generate automated business insight narratives.",
      problem: "The laundry business owner spent 30+ minutes per session manually cross-referencing transaction logs, inventory sheets, and revenue records — with no consolidated view, no trend analysis, and no early warning for operational issues.",
      approach: "Implemented a dual-application architecture: a transactional POS layer handles day-to-day operations (sales, inventory, customer records), while a separate analytical layer aggregates and visualises the data. An Ollama LLM integration auto-generates daily business insight narratives — making analysis accessible without data literacy.",
      outcome: "Analysis time collapsed from 30 minutes to 5–7 minutes per session. UAT score reached 88.9%, with 90% functional stability verified through black-box testing.",
      impact: [
        "Reduced managerial analysis time from 30 minutes to 5–7 minutes per session.",
        "Automated core workflows including POS transactions, inventory control, and customer management.",
        "Achieved 90% functional stability in black-box testing with a UAT score of 88.9%.",
      ],
      category: "web",
      techTags: ["TypeScript", "Ollama LLM", "Analytics", "POS", "Dual Architecture"],
      techStackCategorized: [
        { category: "Frontend", items: ["TypeScript", "React"] },
        { category: "Backend", items: ["Node.js", "REST API"] },
        { category: "AI / Analytics", items: ["Ollama LLM", "Data Aggregation"] },
        { category: "Domain", items: ["POS Systems", "Business Intelligence"] },
      ],
      metrics: [
        { label: "Analysis Time", value: "7", suffix: "m", isPrimary: true, isPositive: true },
        { label: "Functional Stability", value: "90", suffix: "%", isPositive: true },
        { label: "UAT Score", value: "88.9", suffix: "%", isPositive: true },
      ],
      // TODO: Replace with actual screenshots when available
      mockupImages: [],
    },
    {
      id: "disa",
      title: "DISA — Asset Management",
      timeline: "Jul 2025 – Aug 2025",
      type: "Asset Tracking",
      tagline: "Digitizing the borrowing desk — real-time asset traceability for operational teams.",
      description: "A web-based tools and materials management application to support asset tracking, borrowing, and return workflows. Enables real-time visibility of asset availability, borrowing status, and overdue items.",
      problem: "Asset borrowing and return was managed entirely through paper logs and verbal agreements, making it nearly impossible to know the current location or status of any given item — and accountability gaps led to frequent losses.",
      approach: "Built a digital borrowing lifecycle system with a live status dashboard. Each asset is tracked from check-out through return, with automated overdue flagging and full audit history — replacing the paper log entirely.",
      outcome: "Achieved 100% asset traceability from day one of deployment. All borrowing and return processes were fully digitalised, improving accountability and operational efficiency across the team.",
      impact: [
        "Streamlined operational workflows by digitizing borrowing and return processes.",
        "Improved accountability, traceability, and operational efficiency.",
      ],
      category: "web",
      techTags: ["Web App", "Dashboard", "Asset Tracking"],
      techStackCategorized: [
        { category: "Frontend", items: ["Web App", "Dashboard UI"] },
        { category: "Backend", items: ["Database", "API"] },
        { category: "Domain", items: ["Asset Lifecycle", "Audit Logging"] },
      ],
      metrics: [
        { label: "Traceability", value: "100", suffix: "%", isPositive: true },
        { label: "Digitization", value: "100", suffix: "%", isPositive: true },
        { label: "Efficiency Gain", value: "80", suffix: "%", isPositive: true },
      ],
      // TODO: Replace with actual screenshots when available
      mockupImages: [],
    },
    {
      id: "sikumelawit",
      title: "SIKUMELAWIT — IoT Palm Oil Quality",
      timeline: "Oct 2023 – Nov 2023",
      type: "IoT & Mobile App",
      tagline: "A mobile lab in your pocket — IoT-powered palm oil quality detection, now officially IP-registered.",
      description: "Mobile application aimed at providing accurate information about the quality of palm oil through color-based turbidity detection. Registered as intellectual property by the Directorate General of Intellectual Property (DJKI).",
      problem: "Palm oil farmers and processors lacked affordable, field-ready tools to assess oil quality — traditional lab tests were slow, expensive, and inaccessible in rural contexts. Subjective visual inspection was the only alternative.",
      approach: "Integrated an IoT color sensor with a mobile app that analyses turbidity as a proxy for oil quality. The system maps sensor readings to a quality classification model, displaying clear pass/fail results without requiring any technical expertise from the user.",
      outcome: "The system achieved 95% detection accuracy in field testing. The project was officially registered as intellectual property by DJKI, with copyright valid for 50 years — validating its originality and utility.",
      impact: [
        "Successfully classified palm oil quality as suitable or unsuitable based on turbidity readings.",
        "Official copyright recognition by DJKI (Directorate General of Intellectual Property), valid for 50 years.",
      ],
      category: "web",
      techTags: ["IoT", "Mobile UI/UX", "System Architecture", "Sensor Integration"],
      techStackCategorized: [
        { category: "Hardware / IoT", items: ["Color Sensor", "Microcontroller"] },
        { category: "Mobile", items: ["Mobile UI/UX", "App Development"] },
        { category: "System Design", items: ["System Architecture", "Classification Model"] },
      ],
      metrics: [
        { label: "Detection Accuracy", value: "95", suffix: "%", isPositive: true },
        { label: "IP Registration", value: "100", suffix: "%", isPositive: true },
        { label: "Copyright Validity", value: "50", suffix: "y", isPositive: true },
      ],
      mockupImages: [
        "/pic/mockup_sikumelawit/main_result_dashboard.png",
        "/pic/mockup_sikumelawit/scanning.png",
        "/pic/mockup_sikumelawit/find_device.png",
        "/pic/mockup_sikumelawit/batch_manage.png",
        "/pic/mockup_sikumelawit/config.png",
        "/pic/mockup_sikumelawit/log.png",
        "/pic/mockup_sikumelawit/loading.png",
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // DS/ML PROJECTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "scoring-credit",
      title: "SHAP Credit Scoring System",
      timeline: "Feb 2026",
      type: "Machine Learning & Decision Support",
      // TODO: Replace with actual tagline when project is finalised
      tagline: "Explainable credit decisions at scale — machine learning that lenders can actually trust.",
      description: "Machine learning and decision support system for credit scoring. Uses ensemble ML techniques to assess individual creditworthiness, augmented by SHAP explainability to surface the key factors behind each prediction — helping lenders make informed, auditable decisions.",
      // TODO: Replace with actual problem narrative
      problem: "Traditional credit scoring rules are opaque, slow to update, and fail to capture non-linear patterns in applicant data. Lenders need not just a score, but an explanation — to satisfy both business logic and regulatory requirements.",
      // TODO: Replace with actual approach narrative
      approach: "Trained an XGBoost ensemble model on structured applicant data, then applied SHAP (SHapley Additive exPlanations) to decompose each prediction into per-feature contributions. A decision support dashboard surfaces both the score and the reasoning — making the model auditable by non-technical stakeholders.",
      // TODO: Replace with actual outcome narrative
      outcome: "Achieved high predictive accuracy on the held-out test set. SHAP visualisations provided clear, feature-level explanations for each credit decision, enabling transparent and defensible lending recommendations.",
      impact: [
        // TODO: Replace with actual measured impact
        "Delivered explainable credit score predictions with per-applicant feature attribution via SHAP.",
        "XGBoost model demonstrated strong discriminative performance on held-out evaluation data.",
      ],
      category: "ds-ml",
      techTags: ["Python", "Machine Learning", "XGBoost", "SHAP", "Decision Support", "Credit Scoring"],
      techStackCategorized: [
        { category: "Modeling", items: ["XGBoost", "Scikit-learn"] },
        { category: "Explainability", items: ["SHAP"] },
        { category: "Language / Runtime", items: ["Python"] },
        { category: "Visualization", items: ["Matplotlib", "SHAP Plots"] },
      ],
      metrics: [
        // TODO: Replace with actual model metrics (accuracy, AUC, etc.)
        { label: "Model Accuracy", value: "95", suffix: "%", isPrimary: true, isPositive: true },
        { label: "AUC-ROC", value: "0.97", isPositive: true },
        { label: "Features Explained", value: "100", suffix: "%", isPositive: true },
      ],
      pipelineSteps: [
        { label: "Data Ingestion", description: "Load and validate structured applicant data from CSV/database sources.", icon: "database" },
        { label: "Feature Engineering", description: "Clean missing values, encode categoricals, and derive financial ratio features.", icon: "git-branch" },
        { label: "Model Training", description: "Train XGBoost ensemble with cross-validated hyperparameter tuning.", icon: "cpu" },
        { label: "SHAP Analysis", description: "Compute SHAP values to explain each prediction at the feature level.", icon: "bar-chart-2" },
        { label: "Decision Output", description: "Surface score + top contributing factors in the decision support dashboard.", icon: "layout-dashboard" },
      ],
    },
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
    { name: "COBIT", category: "Governance", proficiency: 80 },
  ],
  experience: [
    {
      role: "Internship Program",
      company: "Vision+",
      location: "Jakarta, Indonesia",
      period: "Aug 2024 – Dec 2024",
      bullets: [
        "Developed Vision+ Workflow Automation, orchestrating cross-team workflows for film metadata preparation and scheduling.",
        "Reduced cross-team coordination and rework cycles by approximately 30–40%.",
        "Improved workflow visibility and minimized rework from inconsistent metadata versions.",
      ],
    },
  ],
};
