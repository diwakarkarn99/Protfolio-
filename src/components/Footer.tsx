import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { PortfolioProfile } from '../types/portfolio';

interface FooterProps {
  profile: PortfolioProfile;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-100 dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 text-xs py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-stone-200 dark:border-stone-800/80">
          <div>
            <div className="text-sm font-bold text-stone-950 dark:text-stone-100 tracking-tight">
              {profile.name}
            </div>
            <div className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
              {profile.title}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a href="#about" className="hover:text-stone-950 dark:hover:text-stone-100 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-stone-950 dark:hover:text-stone-100 transition-colors">
              Skills
            </a>
            <a href="#services" className="hover:text-stone-950 dark:hover:text-stone-100 transition-colors">
              Services
            </a>
            <a href="#projects" className="hover:text-stone-950 dark:hover:text-stone-100 transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-stone-950 dark:hover:text-stone-100 transition-colors">
              Experience
            </a>
            <button
              onClick={onOpenResume}
              className="hover:text-stone-950 dark:hover:text-stone-100 transition-colors"
            >
              Resume CV
            </button>
            <a href="#contact" className="hover:text-stone-950 dark:hover:text-stone-100 transition-colors">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-stone-500 hover:text-stone-950 dark:hover:text-stone-100 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-stone-500 hover:text-stone-950 dark:hover:text-stone-100 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={profile.socials.twitter}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-stone-500 hover:text-stone-950 dark:hover:text-stone-100 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-2 text-stone-500 hover:text-stone-950 dark:hover:text-stone-100 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-stone-500 dark:text-stone-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} {profile.name}. Handcrafted with React 19, TypeScript, and Tailwind CSS.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-stone-900 dark:hover:text-stone-200 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
