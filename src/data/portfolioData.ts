import {
  PortfolioProfile,
  SkillItem,
  ServiceItem,
  ProjectItem,
  ExperienceItem,
  EducationItem,
  TestimonialItem,
} from '../types/portfolio';

export const initialProfile: PortfolioProfile = {
  name: 'Diwakar Karn',
  title: 'Senior Full-Stack Engineer & UI/UX Architect',
  tagline: 'Bridging engineering rigor and design sensitivity to craft world-class digital products.',
  shortBio:
    'Senior engineer with 7+ years of experience building high-scale distributed applications, mission-critical dashboards, and expressive design systems. Passionate about sub-millisecond interaction speeds, resilient backend services, and clean typography.',
  fullBio: [
    'I build software that balances technical precision with human warmth. Over the past seven years, I have architected web platforms for high-growth tech ventures and enterprise clients, scaling products from initial prototypes to systems serving millions of concurrent requests.',
    'My philosophy is simple: architecture must prioritize longevity over temporary abstractions, and user interfaces must feel instantaneous, accessible, and delightful. I treat code as a deliberate craft, whether writing distributed PostgreSQL queries, configuring microservices, or tuning CSS layout math to the single pixel.',
    'When not coding or refining component tokens, you can find me analyzing open-source compiler tools, experimenting with creative coding algorithms, or mentoring aspiring software developers.',
  ],
  location: 'Available Worldwide / Remote (UTC+5:30)',
  availability: 'Open for Select Consulting & Senior Leadership Roles',
  email: 'surajkarn761@gmail.com',
  phone: '+1 (555) 234-8901',
  avatarUrl: '/src/assets/images/hero_portrait_1793601046394.jpg',
  workspaceImageUrl: '/src/assets/images/about_studio_workspace_1793601046928.jpg',
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://x.com',
    email: 'mailto:surajkarn761@gmail.com',
  },
  stats: [
    { value: '07+', label: 'Years Experience', subtext: 'Full-stack & design systems' },
    { value: '45+', label: 'Shipped Systems', subtext: 'In production across 12 countries' },
    { value: '99.98%', label: 'System SLA', subtext: 'Average uptime across client apps' },
    { value: '18M+', label: 'Active End Users', subtext: 'Served across scaled platforms' },
  ],
};

export const skillsData: SkillItem[] = [
  // Frontend
  { name: 'React 19 & Next.js', level: 96, experience: '7 yrs', category: 'frontend', tags: ['Server Actions', 'RSC', 'Hooks', 'Concurrent Mode'] },
  { name: 'TypeScript', level: 95, experience: '6 yrs', category: 'frontend', tags: ['Strict Mode', 'Generics', 'Type-level Systems'] },
  { name: 'Tailwind CSS & CSS Architecture', level: 98, experience: '6 yrs', category: 'frontend', tags: ['v4', 'Design Tokens', 'Responsive Grids'] },
  { name: 'State Architecture (Zustand / Redux)', level: 92, experience: '5 yrs', category: 'frontend', tags: ['State Machines', 'Optimistic UI', 'Immer'] },
  { name: 'Web Performance & Core Web Vitals', level: 94, experience: '5 yrs', category: 'frontend', tags: ['INP', 'LCP Optimization', 'Code Splitting'] },
  
  // Backend
  { name: 'Node.js & Express / NestJS', level: 92, experience: '6 yrs', category: 'backend', tags: ['REST', 'Event-Driven', 'Streams'] },
  { name: 'PostgreSQL & SQL Engineering', level: 90, experience: '5 yrs', category: 'backend', tags: ['Indexing', 'Query Optimization', 'Migrations'] },
  { name: 'Redis & Distributed Caching', level: 88, experience: '4 yrs', category: 'backend', tags: ['Rate Limiting', 'Pub/Sub', 'Session Store'] },
  { name: 'GraphQL & Apollo / urql', level: 86, experience: '4 yrs', category: 'backend', tags: ['Schema Stitching', 'DataLoader', 'Subscriptions'] },
  
  // Design & Architecture
  { name: 'Design Systems & Component Libraries', level: 96, experience: '6 yrs', category: 'design', tags: ['Tokens', 'Storybook', 'Figma Sync'] },
  { name: 'UI/UX Prototyping (Figma)', level: 90, experience: '5 yrs', category: 'design', tags: ['Auto-layout', 'Variables', 'Design Hand-off'] },
  { name: 'WCAG 2.1 AA Accessibility', level: 94, experience: '5 yrs', category: 'design', tags: ['ARIA', 'Screen Readers', 'Keyboard Nav'] },
  
  // DevOps & Cloud
  { name: 'Docker & Containerization', level: 88, experience: '4 yrs', category: 'devops', tags: ['Multi-stage Builds', 'Compose', 'CI Testing'] },
  { name: 'CI/CD & Cloud Infrastructure', level: 87, experience: '4 yrs', category: 'devops', tags: ['GitHub Actions', 'GCP', 'Vercel', 'AWS'] },
  { name: 'Automated Testing (Vitest / Playwright)', level: 91, experience: '5 yrs', category: 'devops', tags: ['E2E Tests', 'Unit Testing', 'Visual Regression'] },
];

export const servicesData: ServiceItem[] = [
  {
    number: '01',
    title: 'Full-Stack Web Architecture',
    tagline: 'End-to-end resilient applications engineered for scale and speed.',
    description:
      'Designing and building modern web applications with clean domain-driven architecture, robust relational databases, secure API layers, and type-safe frontends.',
    deliverables: [
      'Production-ready React/Next.js and Node.js applications',
      'Database schema modeling, indexing & migration pipelines',
      'Secure authentication, role-based access & API rate limiting',
      'Comprehensive automated test suites (unit, integration & E2E)',
    ],
    technologies: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
  },
  {
    number: '02',
    title: 'Enterprise Design Systems',
    tagline: 'Unified token architectures that bridge designers and engineering teams.',
    description:
      'Creating scalable, accessible component libraries that establish visual coherence across product ecosystems, accelerating feature delivery by up to 40%.',
    deliverables: [
      'Semantic token architecture (colors, typography, spacing, elevation)',
      'WCAG 2.1 AA compliant headless and styled component primitives',
      'Interactive documentation and sandbox environments',
      'Figma-to-code token synchronization pipelines',
    ],
    technologies: ['Tailwind CSS v4', 'Figma', 'Radix Primitives', 'Storybook', 'Motion'],
  },
  {
    number: '03',
    title: 'Performance & Architecture Audits',
    tagline: 'Eliminating latency bottlenecks and streamlining Core Web Vitals.',
    description:
      'Deep forensic analysis of slow load times, bloated bundle payloads, memory leaks, and inefficient database queries with actionable architectural remedies.',
    deliverables: [
      'Core Web Vitals remediation (INP, LCP, CLS scores to 95+)',
      'Bundle size reduction and lazy loading optimization strategy',
      'Query optimization and distributed caching implementation',
      'Executive performance audit report with prioritized roadmap',
    ],
    technologies: ['Chrome DevTools', 'Lighthouse', 'Database Profilers', 'Vite', 'Webpack'],
  },
  {
    number: '04',
    title: 'MVP Acceleration & Technical Advisory',
    tagline: 'From concept to verified product in weeks without compromising quality.',
    description:
      'Partnering with founders and engineering leaders to translate product visions into shippable reality with modular codebases prepared for rapid iteration.',
    deliverables: [
      'Rapid prototype-to-production roadmap execution',
      'Cloud deployment pipelines and staging environments',
      'Technical hiring advisement and code review standards',
      'Architectural documentation and handover workshops',
    ],
    technologies: ['Full Stack', 'Cloud Run', 'GCP', 'PostgreSQL', 'Stripe Integration'],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'alpha-analytics',
    title: 'Alpha Analytics Trading Terminal',
    category: 'Fintech',
    tagline: 'Institutional-grade real-time market telemetry and portfolio risk engine.',
    description:
      'Engineered an ultra-low latency financial dashboard capable of rendering over 5,000 tick updates per second with zero UI thread freezing. Implemented high-contrast dark mode visualizations and tabular data grids.',
    image: '/src/assets/images/project_fintech_platform_1793601046424.jpg',
    technologies: ['React 19', 'TypeScript', 'WebSockets', 'Canvas API', 'Tailwind CSS', 'PostgreSQL'],
    year: '2026',
    liveUrl: '#',
    githubUrl: 'https://github.com',
    featured: true,
    caseStudy: {
      overview:
        'Alpha Analytics wanted to replace their aging legacy desktop platform with a web-native institutional trading console that matches the responsiveness of native C++ applications.',
      challenge:
        'Standard DOM rendering would stutter during high-frequency market events. The platform required sub-16ms frame budgeting while handling continuous WebSocket price feeds and order book depth calculations.',
      solution:
        'Architected an offscreen canvas rendering pipeline paired with Web Workers for incoming order book delta compaction. Built a bespoke virtualization engine with tabular numerals and keyboard-first shortcuts.',
      architecture: [
        'Web Worker thread offloads binary tick calculation and differential sorting',
        'Direct 2D Canvas rendering for candlestick charts with zero React re-renders during bursts',
        'Zustand store with transient subscriptions for order book rows',
        'Redis pub/sub cluster delivering sub-15ms WebSocket fan-out',
      ],
      outcomes: [
        { metric: '5,000+', label: 'Ticks Processed Per Second' },
        { metric: '60 FPS', label: 'Sustained Framerate Under Heavy Volatility' },
        { metric: '42%', label: 'Reduction in Memory Footprint' },
      ],
    },
  },
  {
    id: 'aetheria-studio',
    title: 'Aetheria Spatial Generative Canvas',
    category: 'AI & Tools',
    tagline: 'Infinite spatial canvas for interactive node workflows and visual computing.',
    description:
      'Built a next-generation creative studio interface featuring node-based generative graphs, precision parameter controls, and fluid gesture navigation across an infinite workspace.',
    image: '/src/assets/images/project_ai_canvas_1793601048429.jpg',
    technologies: ['React', 'TypeScript', 'WebGL', 'Zustand', 'CSS Matrix Transforms', 'Node.js'],
    year: '2025',
    liveUrl: '#',
    githubUrl: 'https://github.com',
    featured: true,
    caseStudy: {
      overview:
        'Aetheria needed a web-based creative surface where digital artists and engineers could assemble multi-modal generative networks with real-time visual feedback.',
      challenge:
        'Managing hundreds of interconnected nodes, animated bezier connectors, and preview viewports without performance degradation when zooming across arbitrary scales.',
      solution:
        'Implemented a viewport cull tree that only draws visible nodes in the camera frustum, combined with GPU-accelerated bezier curves and gesture smoothing algorithms.',
      architecture: [
        'Quad-tree spatial index for instant viewport occlusion and selection detection',
        'Hardware-accelerated CSS transform matrix with spring momentum panning',
        'Modular node contract allowing plug-and-play parameter pipelines',
      ],
      outcomes: [
        { metric: '10,000+', label: 'Simultaneous Nodes Handled Smoothly' },
        { metric: '0ms', label: 'Input Latency on Touch & Trackpad Zoom' },
        { metric: '4.9/5', label: 'Average User Workflow Satisfaction' },
      ],
    },
  },
  {
    id: 'aurora-design-system',
    title: 'Aurora Multi-Brand Design System',
    category: 'Design Systems',
    tagline: 'Comprehensive enterprise design token pipeline and accessible component suite.',
    description:
      'Designed and coded a multi-brand token system powering 8 distinct SaaS products with WCAG 2.1 AA compliance, automatic dark mode adaptation, and zero runtime overhead.',
    image: '/src/assets/images/project_design_system_1793601048758.jpg',
    technologies: ['Tailwind CSS v4', 'TypeScript', 'Radix UI', 'Figma Tokens', 'Storybook'],
    year: '2025',
    liveUrl: '#',
    githubUrl: 'https://github.com',
    featured: true,
    caseStudy: {
      overview:
        'An enterprise software group with multiple acquired subsidiaries suffered from visual inconsistencies, repeated code duplication, and slow feature velocity across teams.',
      challenge:
        'Unifying design foundations without forcing monolithic rewrites or breaking custom brand themes required by regional enterprise accounts.',
      solution:
        'Crafted a layered CSS variable token hierarchy (Global -> Semantic -> Component) linked to Figma tokens via automated CI/CD PR generators.',
      architecture: [
        'Single source of truth token repository exporting to CSS, TypeScript, and Figma JSON',
        'Zero-runtime overhead using modern Tailwind CSS v4 variables',
        'Strict automated visual regression testing preventing unintended contrast degradation',
      ],
      outcomes: [
        { metric: '8 Products', label: 'Successfully Unified Under One System' },
        { metric: '38%', label: 'Faster Time-to-Market for New Features' },
        { metric: '100%', label: 'WCAG 2.1 AA Automated Compliance Score' },
      ],
    },
  },
  {
    id: 'pulse-telemetry',
    title: 'Pulse Distributed Fleet Telemetry',
    category: 'Full-Stack',
    tagline: 'Real-time observability platform monitoring global edge server health.',
    description:
      'Developed a distributed telemetry aggregator collecting latency, memory, and throughput metrics across 240 edge nodes worldwide with instant anomaly alerts.',
    image: '/src/assets/images/about_studio_workspace_1793601046928.jpg',
    technologies: ['Node.js', 'PostgreSQL', 'TimescaleDB', 'React', 'Docker', 'Tailwind CSS'],
    year: '2024',
    liveUrl: '#',
    githubUrl: 'https://github.com',
    featured: false,
    caseStudy: {
      overview:
        'Edge infrastructure provider required a lightweight, real-time telemetry console capable of live heartbeat aggregation and anomaly detection across container clusters.',
      challenge:
        'Ingesting millions of telemetry records per hour while preserving microsecond timestamp accuracy and interactive drill-down queries for site reliability engineers.',
      solution:
        'Implemented TimescaleDB hypertable partitioning, sliding window aggregations, and streaming server-sent events for instant anomaly visualization.',
      architecture: [
        'TimescaleDB time-series compression reducing storage footprint by 65%',
        'Lightweight Go/Node telemetry agent with sub-2MB memory consumption',
        'Interactive timeline scrubbers allowing zero-lag historical playback',
      ],
      outcomes: [
        { metric: '240 Nodes', label: 'Monitored with Sub-Second Heartbeats' },
        { metric: '< 50ms', label: 'P99 Query Response for Metric Drill-Downs' },
        { metric: '99.99%', label: 'System Ingestion Reliability' },
      ],
    },
  },
];

export const experienceData: ExperienceItem[] = [
  {
    period: '2023 — Present',
    role: 'Lead Full-Stack & Systems Architect',
    company: 'Apex Cloud & Interface Labs',
    location: 'Remote',
    employmentType: 'Full-Time',
    description:
      'Directing core architecture for next-generation developer tooling, multi-tenant cloud consoles, and the company design system. Mentoring 12 frontend and backend engineers.',
    achievements: [
      'Spearheaded migration to React 19 and modern token architecture, cutting client load times by 44%.',
      'Architected distributed caching and edge routing pipelines handling 15M+ daily requests.',
      'Established engineering RFC culture, CI/CD automated test gates, and accessibility standards.',
    ],
    technologies: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Tailwind CSS'],
  },
  {
    period: '2021 — 2023',
    role: 'Senior Frontend Engineer',
    company: 'Vanguard Digital Platforms',
    location: 'Hybrid',
    employmentType: 'Full-Time',
    description:
      'Led the frontend engineering team building high-performance data analytics suites, financial reporting dashboards, and real-time collaboration tools.',
    achievements: [
      'Engineered virtualized data grid rendering 100K+ rows with 60 FPS scrolling and column sorting.',
      'Reduced web application bundle footprint from 3.2MB to 420KB through aggressive code-splitting.',
      'Championed design-to-code workflow between product designers and engineering squads.',
    ],
    technologies: ['TypeScript', 'React', 'Zustand', 'GraphQL', 'Tailwind CSS', 'Vite'],
  },
  {
    period: '2019 — 2021',
    role: 'Full-Stack Software Engineer',
    company: 'Krypton Interactive',
    location: 'On-site',
    employmentType: 'Full-Time',
    description:
      'Built bespoke web applications, RESTful microservices, and client management portals for fintech and e-commerce clients.',
    achievements: [
      'Designed and delivered 14 customer-facing web platforms on time and under budget.',
      'Implemented robust payment processing integrations and automated reconciliation workflows.',
      'Maintained 99.9% uptime across production Dockerized microservice clusters.',
    ],
    technologies: ['JavaScript', 'Node.js', 'Express', 'PostgreSQL', 'React', 'AWS'],
  },
];

export const educationData: EducationItem[] = [
  {
    period: '2015 — 2019',
    degree: 'Bachelor of Science in Computer Science & Engineering',
    institution: 'National Institute of Technology',
    location: 'Top Tier Honors',
    details:
      'Specialized in Distributed Systems, Algorithm Design, and Human-Computer Interaction (HCI). Graduated Magna Cum Laude with First Class Distinction.',
    courses: ['Distributed Operating Systems', 'Data Structures & Algorithms', 'Compiler Theory', 'Computer Graphics', 'Software Engineering Architecture'],
  },
  {
    period: '2022',
    degree: 'Certified Cloud Solutions Architect',
    institution: 'Google Cloud Platform & CNCF',
    location: 'Professional Credential',
    details:
      'Validated expertise in cloud-native system design, multi-region container orchestration, security hardening, and resilient microservices.',
    courses: ['High-Availability Architecture', 'Container Security', 'Site Reliability Engineering'],
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: '1',
    quote:
      'Diwakar is one of the rare engineers who genuinely understands both deep distributed systems and the subtle nuances of human-grade UI design. He delivered our trading dashboard 3 weeks ahead of schedule, and the performance is flawless.',
    author: 'Elena Rostova',
    role: 'VP of Engineering',
    company: 'Alpha Capital Technologies',
    relation: 'Supervised Diwakar on Alpha Analytics project',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: '2',
    quote:
      'Working with Diwakar felt like adding an entire elite engineering squad to our team. His attention to typographic math, keyboard navigation, and database query optimization transformed our product from a slow prototype into an industry benchmark.',
    author: 'Marcus Vance',
    role: 'Director of Product',
    company: 'Aetheria Labs',
    relation: 'Collaborated on Generative Spatial Studio',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: '3',
    quote:
      'The design system Diwakar engineered saved our engineers hundreds of hours every quarter. Our designers love the Figma token synchronization, and our customers love the blistering speed.',
    author: 'Sarah Chen',
    role: 'Head of Design',
    company: 'Aurora Software Suite',
    relation: 'Design partner on Aurora Design System',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
  },
];
