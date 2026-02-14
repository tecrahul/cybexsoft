import {
  Cloud,
  Cog,
  Laptop,
  LayoutTemplate,
  Server,
  Shield,
  Smartphone,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  outcomes: string[];
  achievement: string;
};

export type ServiceDetail = {
  slug: Service["id"];
  headline: string;
  overview: string;
  heroImage: string;
  logoIds: string[];
  kpis: Array<{ label: string; value: string }>;
  diagram: Array<{ phase: string; title: string; description: string }>;
  deliverables: string[];
  engagements: string[];
};

export const services: Service[] = [
  {
    id: "software-development",
    title: "Software Development",
    description: "Modern web, enterprise, and custom software systems built for scale and security.",
    icon: Laptop,
    outcomes: ["Product Engineering", "Enterprise Apps", "API Architecture"],
    achievement: "Cut release cycle from 3 weeks to 5 days",
  },
  {
    id: "it-infrastructure-management",
    title: "IT Infrastructure Management",
    description: "Design, optimize, and maintain reliable infrastructure across hybrid environments.",
    icon: Server,
    outcomes: ["Network Reliability", "Capacity Planning", "Operational SLAs"],
    achievement: "Sustained 99.98% platform uptime for critical workloads",
  },
  {
    id: "devops-services-automation",
    title: "DevOps Services & Automation",
    description: "Streamline delivery with CI/CD, IaC, and observability-first operational workflows.",
    icon: Workflow,
    outcomes: ["CI/CD Pipelines", "Infrastructure as Code", "Release Automation"],
    achievement: "Increased deployment frequency by 8x in 90 days",
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions (AWS, Azure, GCP)",
    description: "Cloud strategy, migration, and cost-aware platform engineering for resilient systems.",
    icon: Cloud,
    outcomes: ["Cloud Migration", "FinOps", "Multi-Cloud Strategy"],
    achievement: "Reduced cloud spend by 31% with FinOps controls",
  },
  {
    id: "server-maintenance-monitoring",
    title: "Server Maintenance & Monitoring",
    description: "Proactive monitoring, patching, incident response, and uptime-focused server management.",
    icon: Shield,
    outcomes: ["24/7 Monitoring", "Incident Response", "Performance Tuning"],
    achievement: "Lowered P1 incidents by 62% year-over-year",
  },
  {
    id: "mobile-web-app-development",
    title: "Mobile & Web App Development",
    description: "Cross-platform and native app development with performant frontend architectures.",
    icon: Smartphone,
    outcomes: ["Cross Platform", "Native iOS/Android", "Frontend Performance"],
    achievement: "Shipped 2x faster with reusable frontend platform",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "Research-driven product design systems focused on usability, clarity, and conversion.",
    icon: LayoutTemplate,
    outcomes: ["Design Systems", "UX Research", "Prototyping"],
    achievement: "Improved conversion rate by 24% after redesign",
  },
  {
    id: "it-consulting-strategy",
    title: "IT Consulting & Strategy",
    description: "Technology roadmaps aligned with business objectives, governance, and growth plans.",
    icon: Sparkles,
    outcomes: ["Technology Roadmaps", "Risk Assessment", "Architecture Reviews"],
    achievement: "Aligned multi-year roadmap across 4 business units",
  },
  {
    id: "project-management-digital-transformation",
    title: "Project Management & Digital Transformation",
    description: "Lead transformation initiatives with delivery governance and measurable outcomes.",
    icon: Cog,
    outcomes: ["Program Leadership", "PMO Support", "Change Management"],
    achievement: "Delivered transformation program 6 weeks ahead of plan",
  },
];

const simpleIcon = (slug: string, color: string) => `https://cdn.simpleicons.org/${slug}/${color}`;

export const techLogos: Record<string, { name: string; image: string }> = {
  aws: { name: "AWS", image: simpleIcon("amazonaws", "FF9900") },
  azure: { name: "Microsoft Azure", image: simpleIcon("microsoftazure", "0078D4") },
  gcp: { name: "Google Cloud", image: simpleIcon("googlecloud", "4285F4") },
  cloudflare: { name: "Cloudflare", image: simpleIcon("cloudflare", "F38020") },
  kubernetes: { name: "Kubernetes", image: simpleIcon("kubernetes", "326CE5") },
  docker: { name: "Docker", image: simpleIcon("docker", "2496ED") },
  terraform: { name: "Terraform", image: simpleIcon("terraform", "844FBA") },
  githubActions: { name: "GitHub Actions", image: simpleIcon("githubactions", "2088FF") },
  gitlab: { name: "GitLab CI", image: simpleIcon("gitlab", "FC6D26") },
  jenkins: { name: "Jenkins", image: simpleIcon("jenkins", "D24939") },
  postman: { name: "Postman", image: simpleIcon("postman", "FF6C37") },
  nodejs: { name: "Node.js", image: simpleIcon("nodedotjs", "5FA04E") },
  typescript: { name: "TypeScript", image: simpleIcon("typescript", "3178C6") },
  javascript: { name: "JavaScript", image: simpleIcon("javascript", "F7DF1E") },
  python: { name: "Python", image: simpleIcon("python", "3776AB") },
  java: { name: "Java", image: simpleIcon("openjdk", "ED8B00") },
  csharp: { name: "C#", image: simpleIcon("csharp", "512BD4") },
  go: { name: "Go", image: simpleIcon("go", "00ADD8") },
  react: { name: "React", image: simpleIcon("react", "61DAFB") },
  nextjs: { name: "Next.js", image: simpleIcon("nextdotjs", "111111") },
  vue: { name: "Vue.js", image: simpleIcon("vuedotjs", "4FC08D") },
  angular: { name: "Angular", image: simpleIcon("angular", "DD0031") },
  express: { name: "Express", image: simpleIcon("express", "6B7280") },
  springBoot: { name: "Spring Boot", image: simpleIcon("spring", "6DB33F") },
  dotnet: { name: ".NET", image: simpleIcon("dotnet", "512BD4") },
  graphql: { name: "GraphQL", image: simpleIcon("graphql", "E10098") },
  flutter: { name: "Flutter", image: simpleIcon("flutter", "02569B") },
  figma: { name: "Figma", image: simpleIcon("figma", "F24E1E") },
  postgresql: { name: "PostgreSQL", image: simpleIcon("postgresql", "4169E1") },
  mysql: { name: "MySQL", image: simpleIcon("mysql", "4479A1") },
  mongodb: { name: "MongoDB", image: simpleIcon("mongodb", "47A248") },
  redis: { name: "Redis", image: simpleIcon("redis", "DC382D") },
  prometheus: { name: "Prometheus", image: simpleIcon("prometheus", "E6522C") },
  grafana: { name: "Grafana", image: simpleIcon("grafana", "F46800") },
  nginx: { name: "Nginx", image: simpleIcon("nginx", "009639") },
  apache: { name: "Apache HTTP Server", image: simpleIcon("apachehttpserver", "D22128") },
  jira: { name: "Jira", image: simpleIcon("jira", "0052CC") },
};

export const serviceDetails: Record<Service["id"], ServiceDetail> = {
  "software-development": {
    slug: "software-development",
    headline: "Product engineering programs for web, enterprise, and custom software.",
    overview:
      "We design and build secure, maintainable software platforms with modern architecture patterns, strong delivery governance, and measurable business outcomes.",
    heroImage: "/service-visuals/software-development.svg",
    logoIds: [
      "typescript",
      "javascript",
      "python",
      "java",
      "csharp",
      "go",
      "react",
      "nextjs",
      "vue",
      "angular",
      "nodejs",
      "express",
      "springBoot",
      "dotnet",
      "postgresql",
      "mysql",
      "mongodb",
      "redis",
      "nginx",
      "apache",
      "docker",
      "kubernetes",
      "githubActions",
      "gitlab",
      "jenkins",
      "postman",
      "graphql",
      "jira",
    ],
    kpis: [
      { label: "Average Release Improvement", value: "4.2x" },
      { label: "Defect Escape Reduction", value: "48%" },
      { label: "Time-to-Market Gain", value: "37%" },
    ],
    diagram: [
      {
        phase: "01",
        title: "Discovery & Architecture",
        description: "Business workflows, system boundaries, and domain models are aligned first.",
      },
      {
        phase: "02",
        title: "Implementation Sprints",
        description: "Feature development with CI standards, code review gates, and QA automation.",
      },
      {
        phase: "03",
        title: "Quality & Security",
        description: "Performance testing, security scans, and release readiness validation.",
      },
      {
        phase: "04",
        title: "Production Rollout",
        description: "Controlled rollout with observability, runbooks, and support transfer.",
      },
    ],
    deliverables: [
      "Reference architecture and system blueprint",
      "Frontend and backend implementation",
      "API contracts and integration services",
      "Automated test pipelines and release workflows",
      "Documentation and operational handover",
      "Post-launch optimization roadmap",
    ],
    engagements: [
      "Greenfield platform development",
      "Legacy modernization and re-platforming",
      "Enterprise workflow automation",
    ],
  },
  "it-infrastructure-management": {
    slug: "it-infrastructure-management",
    headline: "Resilient infrastructure operations across on-prem, hybrid, and cloud estates.",
    overview:
      "We establish a stable, scalable infrastructure foundation with proactive capacity planning, standardized operations, and governance built for enterprise continuity.",
    heroImage: "/service-visuals/it-infrastructure-management.svg",
    logoIds: ["nginx", "docker", "kubernetes", "prometheus", "grafana", "jira"],
    kpis: [
      { label: "Availability Uplift", value: "99.98%" },
      { label: "Incident Volume Reduction", value: "41%" },
      { label: "Provisioning Time Cut", value: "63%" },
    ],
    diagram: [
      {
        phase: "01",
        title: "Infrastructure Audit",
        description: "Current-state topology, risk posture, and bottlenecks are mapped.",
      },
      {
        phase: "02",
        title: "Standardization",
        description: "Naming, environments, access controls, and baseline configurations are unified.",
      },
      {
        phase: "03",
        title: "Reliability Engineering",
        description: "Monitoring, alerting, and incident workflows are deployed and tuned.",
      },
      {
        phase: "04",
        title: "Operational Governance",
        description: "SLA reporting, capacity management, and change controls are institutionalized.",
      },
    ],
    deliverables: [
      "Infrastructure topology and governance playbook",
      "Monitoring and alerting framework",
      "SLA and incident response model",
      "Capacity forecasting and lifecycle plans",
      "Access/security baseline enforcement",
      "Operations dashboard and KPI reporting",
    ],
    engagements: [
      "Hybrid infrastructure stabilization",
      "Data center to cloud transition support",
      "Managed infrastructure operations model",
    ],
  },
  "devops-services-automation": {
    slug: "devops-services-automation",
    headline: "CI/CD and automation pipelines that increase release speed without risk.",
    overview:
      "Our DevOps programs connect development, security, and operations with automated workflows that improve delivery velocity and platform reliability.",
    heroImage: "/service-visuals/devops-services-automation.svg",
    logoIds: ["githubActions", "docker", "kubernetes", "terraform", "prometheus", "grafana"],
    kpis: [
      { label: "Deployment Frequency", value: "8x" },
      { label: "Lead Time Reduction", value: "58%" },
      { label: "Rollback Recovery Speed", value: "3.4x" },
    ],
    diagram: [
      {
        phase: "01",
        title: "Pipeline Discovery",
        description: "Current delivery lifecycle and bottlenecks are baseline-measured.",
      },
      {
        phase: "02",
        title: "Automation Blueprint",
        description: "Build, test, security, and deploy stages are modeled as policy-driven pipelines.",
      },
      {
        phase: "03",
        title: "Platform Integration",
        description: "IaC, secrets, environments, and release approvals are fully integrated.",
      },
      {
        phase: "04",
        title: "Continuous Optimization",
        description: "Deployment metrics and failure trends guide ongoing improvements.",
      },
    ],
    deliverables: [
      "CI/CD architecture and standards",
      "Automated build/test/deploy workflows",
      "Infrastructure as Code modules",
      "Environment promotion strategy",
      "Release governance and controls",
      "Delivery telemetry dashboards",
    ],
    engagements: [
      "DevOps transformation for product teams",
      "Release engineering modernization",
      "SRE-aligned delivery enablement",
    ],
  },
  "cloud-solutions": {
    slug: "cloud-solutions",
    headline: "Cloud strategy and engineering across AWS, Azure, and Google Cloud.",
    overview:
      "We help organizations migrate, modernize, and optimize workloads on cloud with secure architecture, cost governance, and high-availability operations.",
    heroImage: "/service-visuals/cloud-solutions.svg",
    logoIds: ["aws", "azure", "gcp", "terraform", "kubernetes", "prometheus"],
    kpis: [
      { label: "Cloud Cost Optimization", value: "31%" },
      { label: "Migration Delivery Success", value: "97%" },
      { label: "Critical Uptime", value: "99.99%" },
    ],
    diagram: [
      {
        phase: "01",
        title: "Cloud Readiness",
        description: "Applications, data, and operational constraints are assessed for migration.",
      },
      {
        phase: "02",
        title: "Landing Zone Design",
        description: "Identity, networking, governance, and security controls are implemented.",
      },
      {
        phase: "03",
        title: "Migration & Modernization",
        description: "Workloads are moved and optimized with phased cutover plans.",
      },
      {
        phase: "04",
        title: "FinOps & Operations",
        description: "Cost controls, observability, and performance optimization run continuously.",
      },
    ],
    deliverables: [
      "Cloud reference architecture",
      "Landing zone and governance setup",
      "Migration wave planning",
      "Security and compliance controls",
      "FinOps dashboard and budget guardrails",
      "Cloud operations runbooks",
    ],
    engagements: [
      "Cloud adoption strategy",
      "Multi-cloud operating model",
      "Cloud-native platform modernization",
    ],
  },
  "server-maintenance-monitoring": {
    slug: "server-maintenance-monitoring",
    headline: "24/7 server reliability with proactive monitoring and maintenance operations.",
    overview:
      "We keep business-critical workloads stable with a proactive operating model that combines monitoring, patching, incident response, and performance tuning.",
    heroImage: "/service-visuals/server-maintenance-monitoring.svg",
    logoIds: ["prometheus", "grafana", "nginx", "docker", "jira", "aws"],
    kpis: [
      { label: "P1 Incident Reduction", value: "62%" },
      { label: "MTTR Improvement", value: "2.9x" },
      { label: "Maintenance Window Efficiency", value: "44%" },
    ],
    diagram: [
      {
        phase: "01",
        title: "Monitoring Baseline",
        description: "Health indicators, alerting thresholds, and escalation paths are defined.",
      },
      {
        phase: "02",
        title: "Preventive Maintenance",
        description: "Patch cadence, backup validation, and security hardening tasks are scheduled.",
      },
      {
        phase: "03",
        title: "Incident Response",
        description: "On-call workflows, runbooks, and communication protocols are activated.",
      },
      {
        phase: "04",
        title: "Continuous Tuning",
        description: "Capacity and performance data inform optimization actions every cycle.",
      },
    ],
    deliverables: [
      "Monitoring and alert strategy",
      "Server hardening and patch schedule",
      "Incident runbooks and response matrix",
      "Backup and disaster-recovery checks",
      "Performance and capacity tuning logs",
      "Monthly reliability reporting",
    ],
    engagements: [
      "Managed server operations",
      "Mission-critical workload monitoring",
      "Incident response and reliability remediation",
    ],
  },
  "mobile-web-app-development": {
    slug: "mobile-web-app-development",
    headline: "Mobile and web app delivery with modern UX and scalable architectures.",
    overview:
      "From product concept to production launch, we design and build high-performance web and mobile applications aligned to real user journeys and growth targets.",
    heroImage: "/service-visuals/mobile-web-app-development.svg",
    logoIds: ["react", "flutter", "nodejs", "postgresql", "figma", "githubActions"],
    kpis: [
      { label: "Launch Speed Improvement", value: "2x" },
      { label: "App Performance Gain", value: "46%" },
      { label: "User Activation Uplift", value: "29%" },
    ],
    diagram: [
      {
        phase: "01",
        title: "Product Discovery",
        description: "User needs, journeys, and MVP priorities are defined with stakeholders.",
      },
      {
        phase: "02",
        title: "Design & Prototyping",
        description: "Interaction models and UI system are validated through clickable prototypes.",
      },
      {
        phase: "03",
        title: "App Engineering",
        description: "Frontend, backend, and integration layers are implemented in agile sprints.",
      },
      {
        phase: "04",
        title: "Launch & Scale",
        description: "Analytics, performance tuning, and roadmap iteration drive post-launch growth.",
      },
    ],
    deliverables: [
      "Product discovery and feature roadmap",
      "UX wireframes and design system",
      "Web and mobile app implementation",
      "API and backend service integration",
      "QA, release, and app-store readiness",
      "Post-launch analytics instrumentation",
    ],
    engagements: [
      "B2B product platform launches",
      "Customer portal modernization",
      "Cross-platform mobile app delivery",
    ],
  },
  "ui-ux-design": {
    slug: "ui-ux-design",
    headline: "Human-centered UI/UX systems that improve adoption and conversion.",
    overview:
      "Our design team blends research, product strategy, and design systems to create clear, trustworthy user experiences that perform in complex domains.",
    heroImage: "/service-visuals/ui-ux-design.svg",
    logoIds: ["figma", "react", "jira", "githubActions", "nodejs", "postgresql"],
    kpis: [
      { label: "Conversion Improvement", value: "24%" },
      { label: "Task Completion Gain", value: "33%" },
      { label: "Design Consistency", value: "95%" },
    ],
    diagram: [
      {
        phase: "01",
        title: "Research & Heuristics",
        description: "User interviews, analytics, and UX audits identify friction points.",
      },
      {
        phase: "02",
        title: "Interaction Modeling",
        description: "Information architecture and journey maps shape end-to-end flows.",
      },
      {
        phase: "03",
        title: "Design System Build",
        description: "Reusable components and visual standards are crafted for scale.",
      },
      {
        phase: "04",
        title: "Validation & Iteration",
        description: "Usability testing and experimentation optimize conversion outcomes.",
      },
    ],
    deliverables: [
      "UX research findings and opportunity map",
      "User journey and IA blueprints",
      "High-fidelity UI prototypes",
      "Design system and component library",
      "Accessibility and usability validation",
      "Handoff documentation for engineering",
    ],
    engagements: [
      "Enterprise UI modernization",
      "Product redesign and conversion optimization",
      "Design system implementation programs",
    ],
  },
  "it-consulting-strategy": {
    slug: "it-consulting-strategy",
    headline: "Technology strategy aligned with business goals and execution reality.",
    overview:
      "We provide executive-level IT advisory, architecture guidance, and transformation planning to help organizations make high-confidence technology decisions.",
    heroImage: "/service-visuals/it-consulting-strategy.svg",
    logoIds: ["aws", "azure", "gcp", "terraform", "jira", "postgresql"],
    kpis: [
      { label: "Strategy-to-Execution Alignment", value: "92%" },
      { label: "Program Risk Reduction", value: "39%" },
      { label: "Investment Efficiency", value: "27%" },
    ],
    diagram: [
      {
        phase: "01",
        title: "Business Context Mapping",
        description: "Strategic objectives, constraints, and capability gaps are aligned.",
      },
      {
        phase: "02",
        title: "Target-State Definition",
        description: "Operating model and technology architecture are designed.",
      },
      {
        phase: "03",
        title: "Roadmap Prioritization",
        description: "Initiatives are sequenced by value, risk, and implementation complexity.",
      },
      {
        phase: "04",
        title: "Execution Governance",
        description: "KPIs, steering rhythms, and decision controls drive sustained delivery.",
      },
    ],
    deliverables: [
      "Technology maturity and risk assessment",
      "Target-state architecture and operating model",
      "Transformation roadmap and initiative backlog",
      "Investment and vendor evaluation framework",
      "Governance model and KPI scorecard",
      "Executive advisory and quarterly reviews",
    ],
    engagements: [
      "CIO/CTO strategic advisory",
      "Architecture and portfolio planning",
      "Technology due diligence programs",
    ],
  },
  "project-management-digital-transformation": {
    slug: "project-management-digital-transformation",
    headline: "Program governance and delivery leadership for enterprise transformation.",
    overview:
      "We run transformation programs with disciplined PMO practices, transparent progress tracking, and cross-functional coordination to ensure outcomes land on time.",
    heroImage: "/service-visuals/project-management-digital-transformation.svg",
    logoIds: ["jira", "githubActions", "aws", "azure", "nodejs", "grafana"],
    kpis: [
      { label: "On-Time Milestone Delivery", value: "94%" },
      { label: "Program Visibility", value: "100%" },
      { label: "Change Adoption Score", value: "88%" },
    ],
    diagram: [
      {
        phase: "01",
        title: "Program Mobilization",
        description: "Governance structure, workstreams, and accountability matrix are established.",
      },
      {
        phase: "02",
        title: "Delivery Orchestration",
        description: "Execution cadence, risk management, and dependency control are enforced.",
      },
      {
        phase: "03",
        title: "Stakeholder Alignment",
        description: "Business and technical teams align through clear communication rhythms.",
      },
      {
        phase: "04",
        title: "Adoption & Handover",
        description: "Enablement plans and operational transition secure lasting impact.",
      },
    ],
    deliverables: [
      "Program charter and governance framework",
      "Integrated roadmap and milestone plan",
      "Risk, issue, and dependency control board",
      "Executive status and KPI reporting",
      "Change management and enablement plan",
      "Operational handover and continuity model",
    ],
    engagements: [
      "Enterprise transformation office support",
      "Complex multi-vendor program leadership",
      "PMO setup and delivery acceleration",
    ],
  },
};

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.id === slug);
}

export function getServiceDetailBySlug(slug: string) {
  return serviceDetails[slug as Service["id"]];
}

export const stats = [
  { label: "Projects Delivered", value: "220+" },
  { label: "Enterprise Clients", value: "60+" },
  { label: "Average Uptime", value: "99.98%" },
  { label: "Cloud Cost Savings", value: "31%" },
];

export const whyCybexSoft = [
  {
    title: "Architecture-first execution",
    description: "Solutions designed for long-term maintainability, not one-off launches.",
  },
  {
    title: "Cross-functional teams",
    description: "Engineers, designers, and consultants collaborate in one delivery squad.",
  },
  {
    title: "Security and compliance by default",
    description: "Built-in governance patterns for enterprise environments and regulated data.",
  },
  {
    title: "Transparent delivery model",
    description: "Weekly milestones, measurable KPIs, and clear communication from kickoff to handoff.",
  },
];

export const testimonials = [
  {
    quote:
      "CybexSoft rebuilt our aging infrastructure and reduced deployment time from days to under 30 minutes.",
    name: "Amanda Li",
    role: "VP Engineering",
    company: "NorthGrid Retail",
  },
  {
    quote:
      "Their team combines strategy and execution. We launched our customer platform on schedule with zero downtime.",
    name: "Derrick Coleman",
    role: "CTO",
    company: "Finlite Capital",
  },
  {
    quote:
      "From UI/UX to DevOps automation, they delivered a polished product and a scalable operating model.",
    name: "Priya Raman",
    role: "Product Director",
    company: "Crestwell Health",
  },
];

export const portfolio = [
  {
    slug: "fintech-cloud-modernization",
    title: "Fintech Cloud Modernization Program",
    industry: "Financial Services",
    summary:
      "Migrated a monolithic lending system to a cloud-native architecture across AWS and Azure.",
    impact: ["42% Faster Releases", "31% Cost Reduction", "99.99% Availability"],
    image: "/case-study-fintech.svg",
  },
  {
    slug: "healthcare-platform-delivery",
    title: "Healthcare Digital Platform Delivery",
    industry: "Healthcare",
    summary:
      "Built a HIPAA-aware patient engagement platform with mobile apps and secure API integrations.",
    impact: ["120k Monthly Users", "40% Ticket Reduction", "SOC2 Ready"],
    image: "/case-study-healthcare.svg",
  },
  {
    slug: "logistics-devops-transformation",
    title: "Logistics DevOps Transformation",
    industry: "Logistics",
    summary:
      "Implemented CI/CD, observability, and infrastructure automation for a global logistics operator.",
    impact: ["8x Deployment Frequency", "62% Fewer Incidents", "24/7 Visibility"],
    image: "/case-study-logistics.svg",
  },
];

export const blogPosts = [
  {
    slug: "how-enterprises-scale-with-platform-engineering",
    title: "How Enterprises Scale with Platform Engineering",
    excerpt:
      "Platform engineering is reshaping how teams ship software. Here is a practical model for adoption.",
    content: [
      "Platform engineering enables product teams to move faster by standardizing infrastructure, tooling, and delivery workflows.",
      "The most effective programs start with service templates, self-service environments, and centralized observability.",
      "A successful transition requires governance guardrails and product-thinking inside infrastructure teams.",
    ],
    category: "DevOps",
    readTime: "6 min read",
    publishedAt: "January 16, 2026",
  },
  {
    slug: "cloud-cost-optimization-playbook-2026",
    title: "Cloud Cost Optimization Playbook for 2026",
    excerpt:
      "A tactical playbook to reduce cloud spend without sacrificing reliability or velocity.",
    content: [
      "Cloud cost optimization is not just a finance project; it is an architecture and product decision discipline.",
      "Prioritize rightsizing, autoscaling audits, and environment lifecycle automation before committing to large migration programs.",
      "Treat FinOps dashboards as operational tooling tied directly to release and capacity planning cadences.",
    ],
    category: "Cloud",
    readTime: "7 min read",
    publishedAt: "December 22, 2025",
  },
  {
    slug: "building-digital-transformation-roadmaps-that-ship",
    title: "Building Digital Transformation Roadmaps That Actually Ship",
    excerpt:
      "Why many transformation initiatives stall and how to structure roadmaps around execution reality.",
    content: [
      "Transformation roadmaps fail when they prioritize ambition over sequencing and operating model changes.",
      "Break programs into 90-day value increments with clear ownership across engineering and business stakeholders.",
      "Maintain a measurable scorecard that balances speed, reliability, adoption, and cost signals.",
    ],
    category: "Strategy",
    readTime: "5 min read",
    publishedAt: "November 4, 2025",
  },
];

export const openings = [
  {
    title: "Senior Full-Stack Engineer",
    location: "Remote (US)",
    type: "Full-time",
    summary: "Build modern web platforms and contribute to architecture decisions across enterprise projects.",
  },
  {
    title: "Cloud Infrastructure Consultant",
    location: "San Francisco, CA / Hybrid",
    type: "Full-time",
    summary: "Lead cloud migration and infrastructure modernization engagements across AWS, Azure, and GCP.",
  },
  {
    title: "Product Designer (UI/UX)",
    location: "Remote (Americas)",
    type: "Contract",
    summary: "Design scalable product experiences and design systems for B2B and enterprise clients.",
  },
];
