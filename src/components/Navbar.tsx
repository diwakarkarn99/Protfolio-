import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, SlidersHorizontal, FileText } from 'lucide-react';
import { PortfolioProfile } from '../types/portfolio';

interface NavbarProps {
  profile: PortfolioProfile;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenCustomizer: () => void;
  onOpenResume: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  darkMode,
  onToggleDarkMode,
  onOpenCustomizer,
  onOpenResume,
  activeSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-stone-50/90 dark:bg-stone-950/90 backdrop-blur-md border-b border-stone-200/80 dark:border-stone-800/80 shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#home"
          className="text-lg sm:text-xl font-bold tracking-tight text-stone-900 dark:text-stone-50 hover:text-stone-600 dark:hover:text-stone-300 transition-colors whitespace-nowrap shrink-0"
        >
          {profile.name}
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600 dark:text-stone-400">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors py-1 whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'text-stone-900 dark:text-white font-semibold border-b-2 border-stone-900 dark:border-white'
                    : 'hover:text-stone-900 dark:hover:text-stone-100'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action + compact utility controls */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          {/* Quick Resume Button */}
          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white bg-stone-200/60 dark:bg-stone-800/60 hover:bg-stone-200 dark:hover:bg-stone-800 rounded-lg transition-colors whitespace-nowrap shrink-0"
            title="View & Download Resume CV"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={onToggleDarkMode}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white rounded-lg hover:bg-stone-200/50 dark:hover:bg-stone-800/50 transition-colors"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Live Profile Customizer */}
          <button
            onClick={onOpenCustomizer}
            className="p-2 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white rounded-lg hover:bg-stone-200/50 dark:hover:bg-stone-800/50 transition-colors"
            title="Edit Portfolio Profile"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>

          {/* Primary Action CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-stone-900 dark:bg-stone-100 dark:text-stone-950 rounded-lg hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors whitespace-nowrap shrink-0 shadow-xs"
          >
            Hire Me
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white rounded-lg hover:bg-stone-200/50 dark:hover:bg-stone-800/50 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-50/98 dark:bg-stone-950/98 border-b border-stone-200 dark:border-stone-800 px-6 py-5 shadow-lg backdrop-blur-md">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-medium text-stone-700 dark:text-stone-200 hover:text-stone-950 dark:hover:text-white border-b border-stone-100 dark:border-stone-800/60"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex-1 py-2 text-xs font-medium text-stone-800 dark:text-stone-200 bg-stone-200/70 dark:bg-stone-800 rounded-lg text-center"
              >
                View Resume CV
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 py-2 text-xs font-semibold text-white bg-stone-900 dark:bg-white dark:text-stone-900 rounded-lg text-center"
              >
                Hire Me
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
