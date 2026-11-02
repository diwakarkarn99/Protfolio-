import React, { useState, useEffect } from 'react';
import { initialProfile } from './data/portfolioData';
import { PortfolioProfile, ProjectItem } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceEducationSection } from './components/ExperienceEducationSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ResumeModal } from './components/ResumeModal';
import { ProfileCustomizerDrawer } from './components/ProfileCustomizerDrawer';

export default function App() {
  // Profile state with localStorage persistence
  const [profile, setProfile] = useState<PortfolioProfile>(() => {
    try {
      const saved = localStorage.getItem('portfolio_profile');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.name === 'Suraj Karn') {
          parsed.name = 'Diwakar Karn';
          localStorage.setItem('portfolio_profile', JSON.stringify(parsed));
        }
        return parsed;
      }
    } catch {
      // ignore
    }
    return initialProfile;
  });

  // Dark mode state
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('portfolio_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return true;
    }
  });

  // Active section tracking
  const [activeSection, setActiveSection] = useState<string>('home');

  // Modals and Drawers
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectItem | null>(null);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);
  const [customizerOpen, setCustomizerOpen] = useState<boolean>(false);
  const [preselectedService, setPreselectedService] = useState<string>('');

  // Update HTML class for dark mode
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('portfolio_theme', 'light');
    }
  }, [darkMode]);

  // Section Observer for active navigation link
  useEffect(() => {
    const sectionIds = ['home', 'about', 'projects', 'skills', 'services', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleSaveProfile = (updated: PortfolioProfile) => {
    setProfile(updated);
    try {
      localStorage.setItem('portfolio_profile', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleResetDefaults = () => {
    setProfile(initialProfile);
    try {
      localStorage.removeItem('portfolio_profile');
    } catch {
      // ignore
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 selection:bg-stone-900 selection:text-white dark:selection:bg-white dark:selection:text-stone-900 transition-colors duration-200">
      {/* 3-Zone Navigation Top Bar */}
      <Navbar
        profile={profile}
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
        onOpenCustomizer={() => setCustomizerOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
        activeSection={activeSection}
      />

      <main>
        {/* Hero Section */}
        <HeroSection
          profile={profile}
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* About Me Section (Deep Dive & Principles) */}
        <AboutSection profile={profile} />

        {/* Projects & Bento Works Grid */}
        <ProjectsSection onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)} />

        {/* Technical Skills Section */}
        <SkillsSection />

        {/* Services & Engagement Models */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Career Experience & Education */}
        <ExperienceEducationSection />

        {/* Client & Peer Endorsements */}
        <TestimonialsSection />

        {/* Functional Contact & Inquiry Dispatch */}
        <ContactSection
          profile={profile}
          preselectedService={preselectedService}
        />
      </main>

      {/* Quiet Footer */}
      <Footer
        profile={profile}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Case Study Fullscreen Lightbox Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />

      {/* Printable & Downloadable CV Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        profile={profile}
      />

      {/* Real-Time Profile Customizer Drawer */}
      <ProfileCustomizerDrawer
        isOpen={customizerOpen}
        onClose={() => setCustomizerOpen(false)}
        profile={profile}
        onSaveProfile={handleSaveProfile}
        onResetDefaults={handleResetDefaults}
      />
    </div>
  );
}
