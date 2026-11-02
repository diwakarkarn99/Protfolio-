import React from 'react';
import { ArrowUpRight, Download, Mail, Github, Linkedin, Twitter, Sparkles } from 'lucide-react';
import { PortfolioProfile } from '../types/portfolio';

interface HeroSectionProps {
  profile: PortfolioProfile;
  onOpenResume: () => void;
  onSelectProjectTab?: (tab: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ profile, onOpenResume }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Subtle background glow effect (non-distracting) */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-stone-300/20 dark:bg-stone-800/25 blur-[120px] pointer-events-none -z-10 rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Editorial Kicker with clean unboxed status */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-stone-600 dark:text-stone-400 mb-6">
              <span className="inline-flex items-center gap-1.5 text-stone-900 dark:text-stone-200 font-semibold tracking-wide uppercase text-[11px]">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                {profile.title}
              </span>
              <span aria-hidden="true" className="text-stone-400 dark:text-stone-600">·</span>
              <span>Available for 2026 Projects</span>
              <span aria-hidden="true" className="text-stone-400 dark:text-stone-600">·</span>
              <span>Remote Worldwide</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-950 dark:text-stone-50 leading-[1.08] mb-6 [text-wrap:balance]">
              Engineering resilient systems with{' '}
              <span className="text-stone-500 dark:text-stone-400 underline decoration-stone-300 dark:decoration-stone-700 decoration-1 underline-offset-8">
                human-grade
              </span>{' '}
              clarity.
            </h1>

            {/* Lead Copy */}
            <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed mb-8 max-w-2xl">
              {profile.shortBio}
            </p>

            {/* Interactive CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-stone-900 dark:bg-stone-100 dark:text-stone-950 rounded-xl hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors shadow-sm whitespace-nowrap shrink-0"
              >
                <span>View Selected Works</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-stone-800 dark:text-stone-200 bg-stone-200/70 dark:bg-stone-900/80 hover:bg-stone-300/70 dark:hover:bg-stone-800 border border-stone-300/60 dark:border-stone-800 rounded-xl transition-colors whitespace-nowrap shrink-0"
              >
                <Mail className="w-4 h-4" />
                <span>Hire Me</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors whitespace-nowrap shrink-0"
                title="Download or preview professional CV"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Social Links & Quick Contact info */}
            <div className="pt-6 border-t border-stone-200 dark:border-stone-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-stone-600 dark:text-stone-400 text-sm">
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-stone-950 dark:hover:text-stone-100 transition-colors flex items-center gap-1.5"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-xs">GitHub</span>
                </a>
                <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">/</span>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-stone-950 dark:hover:text-stone-100 transition-colors flex items-center gap-1.5"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="text-xs">LinkedIn</span>
                </a>
                <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">/</span>
                <a
                  href={profile.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-stone-950 dark:hover:text-stone-100 transition-colors flex items-center gap-1.5"
                  aria-label="Twitter Profile"
                >
                  <Twitter className="w-4 h-4" />
                  <span className="text-xs">X / Twitter</span>
                </a>
              </div>

              <div className="text-xs text-stone-500 dark:text-stone-400 font-mono tabular-nums">
                {profile.email}
              </div>
            </div>
          </div>

          {/* Right Column: Hero Portrait Visual Container */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900 shadow-md">
              <img
                src={profile.avatarUrl}
                alt={`${profile.name} - ${profile.title}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                onError={(e) => {
                  // Fallback container in case of error
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                  if (target.parentElement) {
                    target.parentElement.classList.add(
                      'flex',
                      'items-center',
                      'justify-center',
                      'bg-stone-800',
                      'text-stone-200'
                    );
                    target.parentElement.innerHTML = `
                      <div class="p-8 text-center">
                        <span class="text-4xl font-bold tracking-tight">${profile.name}</span>
                        <p class="text-sm text-stone-400 mt-2">${profile.title}</p>
                      </div>
                    `;
                  }
                }}
              />

              {/* Minimal caption badge */}
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-stone-950/75 dark:bg-stone-900/85 backdrop-blur-md rounded-xl border border-white/10 text-white flex items-center justify-between text-xs">
                <div>
                  <div className="font-semibold">{profile.name}</div>
                  <div className="text-[11px] text-stone-300">Staff-level Engineering & Architecture</div>
                </div>
                <div className="font-mono text-[11px] text-stone-400 tabular-nums">EST. 2019</div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Metrics Strip below hero split */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-stone-200 dark:border-stone-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {profile.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight font-mono tabular-nums text-stone-950 dark:text-stone-100">
                  {stat.value}
                </span>
                <span className="text-sm font-semibold text-stone-800 dark:text-stone-200 mt-1">
                  {stat.label}
                </span>
                {stat.subtext && (
                  <span className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                    {stat.subtext}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
