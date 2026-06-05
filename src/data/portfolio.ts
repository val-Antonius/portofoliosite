import { PortfolioData } from "../types";

export const portfolioData: PortfolioData = {
  chapters: [
    {
      id: "overview",
      keyword: "building",
      icon: "layout-dashboard",
      subtitle: "Mission Control",
      headingFormula: {
        question: "Is there someone who can actually build this?",
        answer: "There is. **Open now.**"
      }
    },
    {
      id: "work",
      keyword: "delivering",
      icon: "briefcase",
      subtitle: "Selected Projects",
      headingFormula: {
        question: "Can I see what you've actually shipped?",
        answer: "Five. **All in production.**"
      }
    },
    {
      id: "about",
      keyword: "systematic",
      icon: "user",
      subtitle: "Field Notes",
      headingFormula: {
        question: "How do you think about systems?",
        answer: "Constraints **first.**"
      }
    },
    {
      id: "contact",
      keyword: "reachable",
      icon: "mail",
      subtitle: "Communications",
      headingFormula: {
        question: "Is it worth reaching out?",
        answer: "If it's a **real** problem — always."
      }
    },
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
      tagline: "Operational control and business analytics for high-volume laundry operations, built as two separate cognitive layers.",
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
      link: "https://github.com/val-Antonius/whser.git",
      metrics: [
        { label: "Analysis Time", value: "7", suffix: "m", isPrimary: true, isPositive: true },
        { label: "Functional Stability", value: "90", suffix: "%", isPositive: true },
        { label: "UAT Score", value: "88.9", suffix: "%", isPositive: true },
      ],
      // TODO: Replace with actual screenshots when available
      mockupImages: [
        "/pic/mockup_whser/role.png",
        "/pic/mockup_whser/admin_dashboard.png",
        "/pic/mockup_whser/admin_createorder.png",
        "/pic/mockup_whser/admin_orderdetail.png",
        "/pic/mockup_whser/admin_cancelorder.png",
        "/pic/mockup_whser/admin_payment.png",
        "/pic/mockup_whser/admin_inventory.png",
        "/pic/mockup_whser/owner_dashboard.png",
        "/pic/mockup_whser/owner_insight.png",
        "/pic/mockup_whser/owner_recommendation.png",
        "/pic/mockup_whser/owner_snapshots.png",
        "/pic/mockup_whser/owner_tasks.png",

      ],
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
      link: "https://inventory.dafalabs.net/",
      metrics: [
        { label: "Traceability", value: "100", suffix: "%", isPositive: true },
        { label: "Digitization", value: "100", suffix: "%", isPositive: true },
        { label: "Efficiency Gain", value: "80", suffix: "%", isPositive: true },
      ],
      mockupImages: [
        "/pic/mockup_disa/dashboard.png",
        "/pic/mockup_disa/aset_regist.png",
        "/pic/mockup_disa/aset_detail.png",
        "/pic/mockup_disa/borrow_return_flow.png",
        "/pic/mockup_disa/overdue_manage.png",
        "/pic/mockup_disa/analytics.png",
        "/pic/mockup_disa/log_act.png",
      ],
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
      mockupFrame: "mobile",
    },

    // ─────────────────────────────────────────────────────────────────────────
    // DS/ML PROJECTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "credit-scoring-umkm",
      title: "Predictive Credit Scoring for Indonesian SMEs",
      timeline: "2025",
      type: "Machine Learning & Decision Support",
      tagline: "Credit risk assessment with explainable predictions — built for loan officers, not just data scientists.",
      description: "End-to-end ML pipeline for credit risk assessment targeting Indonesian SME lending. Combines XGBoost with SHAP explainability to produce both a probability of default and a per-applicant breakdown of the factors driving that prediction, surfaced through an interactive Streamlit dashboard with threshold override capability.",
      problem: "SME credit evaluation in Indonesia relies on manual review that is slow, inconsistent across officers, and unable to explain rejection reasons to applicants. The core challenge is not just building an accurate model, but operationalizing the decision threshold and making each prediction auditable by non-technical lending staff.",
      approach: "Trained an XGBoost classifier on 150,000 applicant records using a stratified 60/20/20 split with SMOTE applied exclusively to the training set to prevent data leakage. RobustScaler handled extreme outliers in income and utilization features. Eight domain-driven features were engineered from credit history data, including a severity-weighted late payment score. The decision threshold was tuned on the validation set via F1 maximization and persisted as a versioned JSON artifact alongside the model and scaler. SHAP TreeExplainer generates both global feature importance and per-applicant force plots.",
      outcome: "XGBoost outperformed LightGBM and logistic regression baselines on both AUC-ROC and minority-class F1. The Streamlit app allows lending teams to adjust the decision threshold in real time to simulate different risk appetites without retraining the model. Every prediction is accompanied by a SHAP force plot explaining which features drove the outcome.",
      impact: [
        "Achieved 86.4% AUC-ROC and 0.4421 F1-minority on held-out test set, representing a 38% improvement over the LightGBM baseline on minority-class detection.",
        "Detected 55% of defaults pre-approval, with projected annual savings of $374K for a 10,000-loan portfolio.",
        "Decision threshold operationalized as a version-controlled artifact, enabling risk policy changes without model retraining.",
        "Reduced average credit decision time from 30-60 minutes to under 1 minute through automated scoring.",
      ],
      category: "ds-ml",
      techTags: ["Python", "XGBoost", "SHAP", "Optuna", "Streamlit", "Scikit-learn", "Machine Learning", "Credit Risk"],
      techStackCategorized: [
        { category: "Data / Features", items: ["Pandas", "NumPy", "RobustScaler", "SMOTE"] },
        { category: "Modeling", items: ["XGBoost", "LightGBM", "Logistic Regression", "Optuna"] },
        { category: "Explainability", items: ["SHAP", "TreeExplainer", "Force Plots"] },
        { category: "Deployment", items: ["Streamlit", "Python", "Pickle", "JSON"] },
      ],
      link: "https://github.com/val-Antonius/credit-scoring-umkm",
      metrics: [
        { label: "AUC-ROC", value: "86.4", suffix: "%", isPrimary: true, isPositive: true },
        { label: "F1-Minority", value: "0.4421", isPositive: true },
        { label: "Default Detection Rate", value: "55", suffix: "%", isPositive: true },
        { label: "Decision Speed", value: "50", suffix: "x faster", isPositive: true },
      ],
      pipelineSteps: [
        { label: "EDA & Profiling", description: "Analyze 150K applicant records for class imbalance (6.8% default), missing values, and outlier distribution across income and utilization features.", icon: "bar-chart-2" },
        { label: "Feature Engineering", description: "Engineer 8 domain-driven features including severity-weighted late payment score, income-per-dependent, and binned utilization risk. Apply RobustScaler fit on training set only.", icon: "git-branch" },
        { label: "Stratified Split & SMOTE", description: "Split 60/20/20 with stratification to preserve class ratio. Apply SMOTE exclusively on the training set to avoid data leakage into validation and test sets.", icon: "database" },
        { label: "Model Training & Tuning", description: "Train XGBoost with 50-trial Optuna hyperparameter search. Evaluate against LightGBM and logistic regression baselines using AUC-ROC and F1-minority.", icon: "cpu" },
        { label: "Threshold Optimization", description: "Sweep decision threshold on validation set, select F1-maximizing value (0.5354), and persist as a versioned JSON artifact alongside the model and scaler.", icon: "sliders" },
        { label: "SHAP & Dashboard", description: "Compute SHAP values via TreeExplainer. Surface per-applicant force plots and global feature importance in a Streamlit app with real-time threshold override.", icon: "layout-dashboard" },
      ],
    },
    {
      id: "xflair-nutmeg-prediction",
      title: "xFlair: Nutmeg Frequency Prediction for WC 2026",
      timeline: "2025",
      type: "Sports Analytics & Predictive Modelling",
      tagline: "Quantifying flair — predicting a skill that no analytics system has modelled before.",
      description: "Sports analytics pipeline that predicts expected nutmeg frequency per match for attacking players at the 2026 World Cup. Built on 522,885 StatsBomb event records from three international tournaments, using a Player-Match time-series formulation to ensure temporal integrity and zero data leakage.",
      problem: "Nutmeg frequency is a proxy for attacking creativity and 1v1 risk-taking that conventional football statistics do not capture. No predictive system exists for it, and naive aggregation approaches produce a mathematical tautology where the target variable is derivable directly from the input features.",
      approach: "Redesigned the data architecture from player-level aggregation to a Player-Match formulation, where each row represents one match and features are constructed exclusively from prior matches using shift(1) rolling windows. A temporal train/test split (cutoff: 30 June 2024) ensures the model only learns from the past to predict the future. XGBoost Regressor with strong regularization handles the small dataset (664 rows). SHAP provides both global and per-player feature attribution. A three-page Streamlit app includes a Model Integrity page that explicitly surfaces calibration charts and known limitations.",
      outcome: "Achieved 27.9% MAE improvement over the global mean baseline with a train/test performance ratio of 1.1x, indicating no meaningful overfitting. The Player-Match reformulation successfully eliminated the tautology present in the initial architecture.",
      impact: [
        "Achieved MAE of 0.306 against a baseline of 0.424, a 27.9% improvement with no data leakage.",
        "Resolved a Mathematical Tautology in the initial architecture by redesigning from player-level to Player-Match granularity.",
        "Processed 522,885 StatsBomb events across three international tournaments to produce per-player predictions.",
        "Model Integrity page transparently surfaces calibration charts and dataset limitations, rather than presenting only favorable results.",
      ],
      category: "ds-ml",
      techTags: ["Python", "XGBoost", "SHAP", "StatsBomb", "Sports Analytics", "Time-Series", "Streamlit"],
      techStackCategorized: [
        { category: "Data / Features", items: ["StatsBombpy", "Pandas", "NumPy", "Rolling Windows"] },
        { category: "Modeling", items: ["XGBoost Regressor", "Poisson Regressor", "Time-Series Split"] },
        { category: "Explainability", items: ["SHAP", "Feature Attribution", "Calibration Analysis"] },
        { category: "Deployment", items: ["Streamlit", "Plotly", "Python", "Pickle"] },
      ],
      link: "https://github.com/val-Antonius/xflair",
      metrics: [
        { label: "MAE Improvement", value: "27.9", suffix: "%", isPrimary: true, isPositive: true },
        { label: "Events Processed", value: "522,885", isPositive: true },
        { label: "Train/Test Ratio", value: "1.1", suffix: "x", isPositive: true },
        { label: "Data Leakage", value: "Zero", isPositive: true },
      ],
      pipelineSteps: [
        { label: "Event Collection", description: "Pull 522,885 match events from StatsBomb Open Data across WC 2022, Euro 2024, and Copa America 2024 using the statsbombpy API.", icon: "database" },
        { label: "Dribble Filtering", description: "Filter to dribble events for flair positions (winger, striker, CAM) with a minimum of 5 attempts per player. Identify 4,027 dribble events including 354 nutmegs.", icon: "filter" },
        { label: "Player-Match Formulation", description: "Aggregate to Player-Match granularity. Construct rolling features using shift(1) to ensure each row only contains information available before match T.", icon: "git-branch" },
        { label: "Temporal Split", description: "Split train and test sets by match date (cutoff: 30 June 2024) to prevent future data leakage into training.", icon: "calendar" },
        { label: "Model Training", description: "Train XGBoost Regressor with strong regularization (reg_alpha=1.0, reg_lambda=2.0, max_depth=2). Compare against Poisson Regressor and global mean baseline.", icon: "cpu" },
        { label: "SHAP & Dashboard", description: "Generate global and per-player SHAP feature attributions. Deploy three-page Streamlit app: Flair Index ranking, Player Lab with confidence intervals, and Model Integrity page.", icon: "layout-dashboard" },
      ],
    },
    {
      id: "whser-laundry-platform",
      title: "WHSER: Laundry Management & Decision Support Platform",
      timeline: "2025",
      type: "Full-Stack System & Business Intelligence",
      tagline: "Operational control and business analytics for high-volume laundry operations, built as two separate cognitive layers.",
      description: "Full-stack laundry management platform with a dual-layer architecture: a real-time operational layer for daily staff workflows and an immutable analytical layer for owner decision-making. Built on a 20-table normalized MySQL schema with 50+ TypeScript API endpoints, and includes a local LLM integration for human-approved operational recommendations.",
      problem: "High-volume laundry businesses running on spreadsheets and manual tracking consistently lose orders, breach SLAs without early warning, mismanage inventory costs, and have no visibility into profitability by service type. Bolting analytics onto a transactional system creates database lock contention and produces reports that change retroactively when data is edited.",
      approach: "Separated operational and analytical concerns at the architectural level. The operational layer handles real-time POS, a 12-state order workflow engine with immutable audit logs, inventory consumption tracking, and exception recording. The analytical layer works exclusively on period-locked data snapshots that cannot be modified after creation. Eight KPIs are computed against a same-period baseline with configurable significance thresholds. A local LLM (Gemma 3 4B via Ollama) generates operational recommendations from owner-written insights, with an explicit human approval step before any recommendation becomes an executable task.",
      outcome: "Phases 1 through 3 are fully deployed. The dual-layer design eliminates lock contention between transactional queries and reporting, and immutable snapshots ensure historical reports remain stable regardless of subsequent data corrections. The human-in-the-loop LLM pipeline keeps decision authority with the owner while surfacing data-driven suggestions.",
      impact: [
        "Eliminated lost orders through order-centric architecture with a complete, immutable audit trail across all 12 workflow states.",
        "Reduced manual administrative overhead by an estimated 30 hours per week through automated order tracking and KPI calculation.",
        "Eight KPIs computed per snapshot with baseline comparison and three-tier significance detection, translating raw transactional data into actionable business intelligence.",
        "Immutable snapshot design ensures financial reports remain stable for audit purposes regardless of subsequent operational data changes.",
      ],
      category: "ds-ml",
      techTags: ["Next.js", "TypeScript", "MySQL", "React", "Ollama", "LLM", "Business Intelligence", "Full-Stack"],
      techStackCategorized: [
        { category: "Frontend", items: ["Next.js 14", "React", "TypeScript", "jsPDF"] },
        { category: "Backend", items: ["Next.js API Routes", "Prepared Statements", "Connection Pooling"] },
        { category: "Database", items: ["MySQL", "Normalized Schema (3NF)", "Triggers", "Foreign Keys"] },
        { category: "Analytics & AI", items: ["Snapshot Engine", "KPI Calculation Service", "Ollama", "Gemma 3 4B"] },
      ],
      link: "https://github.com/val-Antonius/whser",
      metrics: [
        { label: "Database Tables", value: "20", isPrimary: true, isPositive: true },
        { label: "API Endpoints", value: "50", suffix: "+", isPositive: true },
        { label: "KPIs Computed", value: "8", isPositive: true },
        { label: "Admin Time Saved", value: "30", suffix: "h/week", isPositive: true },
      ],
      pipelineSteps: [
        { label: "Order Intake (POS)", description: "Admin captures customer order with automatic price calculation, SLA deadline assignment, and unique order number generation. MySQL transaction ensures atomicity.", icon: "shopping-cart" },
        { label: "Workflow Engine", description: "Order moves through 12 states defined by a per-service process blueprint. Each transition is validated against the blueprint and logged immutably to order_status_log.", icon: "git-branch" },
        { label: "Inventory & Exceptions", description: "Staff records actual material consumption per process step. Atomic triggers update stock levels. Quality exceptions (rewash, damage, loss) are logged with metadata and severity.", icon: "package" },
        { label: "Snapshot Creation", description: "Owner triggers a period snapshot. All orders, transactions, and exceptions within the date range are aggregated and frozen as an immutable record.", icon: "camera" },
        { label: "KPI Calculation", description: "Eight KPIs are computed from the snapshot data and compared against the previous same-period baseline. Each metric is flagged as normal, attention, or critical based on configurable variance thresholds.", icon: "bar-chart-2" },
        { label: "Insight & LLM Recommendation", description: "Owner records a manual insight against the metrics. Gemma 3 generates targeted recommendations, which the owner reviews and approves before they are converted into assigned staff tasks.", icon: "cpu" },
      ],
    },
    {
      id: "supply-chain-pipeline",
      title: "Auditable Supply Chain Analytics Pipeline",
      timeline: "May 2026",
      type: "Data Engineering & Prescriptive Analytics",
      tagline: "Translating 180k rows of historical retail transactions into prescriptive inventory decisions.",
      description: "An end-to-end supply chain analytics pipeline processing 180,519 records of historical logistics data. The system integrates exploratory data analysis, SQL metric extraction, time-series forecasting, and mathematical inventory optimization to generate automated purchase recommendations.",
      problem: "Traditional supply chain dashboards rely on reactive reporting that displays past logistics failures without providing operational guidance. Operations managers track high late delivery rates and low fill rates but lack the integrated data structures needed to calculate precise reorder points before stockouts occur.",
      approach: "Built a five-stage data pipeline using Python, SQL, Excel, and Power BI. Extracted baseline KPIs that revealed a 54.83% overall late rate. Developed Holt-Winters and Moving Average forecasting models in Python, trimming data post-September 2017 to prevent a 240% MAPE explosion caused by transactional anomalies. Calculated dynamic safety stocks and economic order quantities in Excel, then merged all stages using a master Python integration script to feed a unified Power BI data model.",
      outcome: "Resolved granular discrepancies between category-level demand signals and SKU-level parameters. The integrated pipeline transitioned reporting from reactive to prescriptive, identifying an under-ordered high-risk SKU and generating an automated alert to purchase 12 units ahead of a projected 33.2% demand spike.",
      impact: [
        "Uncovered critical logistics bottlenecks including a 95.32% late delivery rate for premium First Class shipping.",
        "Prevented a 240% forecasting model error explosion by diagnosing and removing corrupted historical data periods.",
        "Automated the alignment of multi-granular supply chain inputs into a reproducible and auditable master data sheet."
      ],
      category: "ds-ml",
      techTags: ["Python", "SQL", "Excel", "Power BI", "Time Series Forecasting", "Inventory Management"],
      techStackCategorized: [
        { category: "Data / Exploration", items: ["Python", "Pandas", "SQLite"] },
        { category: "Forecasting", items: ["Statsmodels", "Holt-Winters", "Moving Average"] },
        { category: "Optimization", items: ["Excel", "Safety Stock Formulas", "EOQ"] },
        { category: "Visualization", items: ["Power BI", "Data Modeling"] }
      ],
      link: "https://github.com/username/supply-chain-analytics-pipeline",
      metrics: [
        { label: "Overall Late Rate", value: "54.83", suffix: "%", isPrimary: true, isPositive: false },
        { label: "First Class Late Rate", value: "95.32", suffix: "%", isPositive: false },
        { label: "Order Fill Rate", value: "36.06", suffix: "%", isPositive: true }
      ],
      pipelineSteps: [
        { label: "Data Ingestion & EDA", description: "Load and clean 180,519 historical records to evaluate initial distribution patterns.", icon: "database" },
        { label: "SQL KPI Analysis", description: "Calculate baseline operational metrics including shipping mode late rates and order fill rates.", icon: "git-branch" },
        { label: "Demand Forecasting", description: "Evaluate Holt-Winters and Moving Average models while filtering out unreliable intermittent demand channels.", icon: "cpu" },
        { label: "Inventory Optimization", description: "Apply mathematical formulas to compute economic order quantities and dynamic safety stocks in Excel.", icon: "bar-chart-2" },
        { label: "Dashboard Deployment", description: "Build a predictive early warning system in Power BI to surface prescriptive reorder alerts.", icon: "layout-dashboard" }
      ]
    },
  ],
  skills: [
    // Programming
    { name: "JavaScript", category: "Programming", proficiency: 95 },
    { name: "TypeScript", category: "Programming", proficiency: 90 },
    { name: "Python", category: "Programming", proficiency: 80 },
    // Frontend
    { name: "React", category: "Frontend", proficiency: 88 },
    // Backend
    { name: "Node.js", category: "Backend", proficiency: 82 },
    { name: "REST API Design", category: "Backend", proficiency: 85 },
    // Data & Analytics
    { name: "SQL", category: "Data & Analytics", proficiency: 90 },
    { name: "Machine Learning", category: "Data & Analytics", proficiency: 78 },
    { name: "XGBoost / SHAP", category: "Data & Analytics", proficiency: 75 },
    // Engineering
    { name: "System Architecture", category: "Engineering", proficiency: 85 },
    { name: "IoT Integration", category: "Engineering", proficiency: 72 },
    // Design
    { name: "Figma", category: "UI/UX", proficiency: 90 },
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
  contact: {
    email: "thonybo6661@gmail.com",
    github: "https://github.com/val-Antonius",
    linkedin: "https://www.linkedin.com/in/antonius-valentino",
    location: "Jakarta, Indonesia",
  },
};
