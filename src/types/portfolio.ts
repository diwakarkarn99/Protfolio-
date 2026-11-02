export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
  email: string;
}

export interface MetricItem {
  value: string;
  label: string;
  subtext?: string;
}

export interface PortfolioProfile {
  name: string;
  title: string;
  tagline: string;
  shortBio: string;
  fullBio: string[];
  location: string;
  availability: string;
  email: string;
  phone: string;
  avatarUrl: string;
  workspaceImageUrl: string;
  socials: SocialLinks;
  stats: MetricItem[];
}

export interface SkillItem {
  name: string;
  level: number; // 0 - 100
  experience: string;
  category: 'frontend' | 'backend' | 'design' | 'devops';
  tags: string[];
}

export interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Full-Stack' | 'Fintech' | 'AI & Tools' | 'Design Systems';
  tagline: string;
  description: string;
  image: string;
  technologies: string[];
  year: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  caseStudy: {
    overview: string;
    challenge: string;
    solution: string;
    architecture: string[];
    outcomes: { metric: string; label: string }[];
  };
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  employmentType: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  location: string;
  details: string;
  courses: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  relation: string;
  avatar: string;
}
