import React, { useState } from 'react';
import {
  Compass,
  Monitor,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  Globe,
  Award,
  Terminal,
} from 'lucide-react';
import { PortfolioProfile } from '../types/portfolio';

interface AboutSectionProps {
  profile: PortfolioProfile;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => {
  const [activeTab, setActiveTab] = useState<'story' | 'studio' | 'principles' | 'facts'>('story');

  const principles = [
    {
      number: '01',
      title: 'Architecture Before Abstraction',
      description:
        'Resist premature framework layers. We optimize for code readability, explicit data flows, and maintainable domain models that junior and senior engineers can understand instantly.',
      icon: Layers,
    },
    {
      number: '02',
      title: 'Sub-50ms Interaction Budget',
      description:
        'Software should never feel sluggish. Every button tap, tab change, and filter trigger executes within 50ms with zero frame drops or layout thrashing.',
      icon: Zap,
    },
    {
      number: '03',
      title: 'Accessible by Foundation',
      description:
        'Accessibility is not an afterthought or checklist. From semantic HTML structure to high-contrast WCAG AA ratios and keyboard focus rings, digital products should serve every human.',
      icon: CheckCircle2,
    },
    {
      number: '04',
      title: 'Symbiosis of Logic & Beauty',
      description:
        'A technically robust system without aesthetic dignity creates friction; a beautiful interface with fragile backend code collapses under pressure. True mastery lives at their intersection.',
      icon: Sparkles,
    },
  ];

  const studioSetup = [
    { category: 'Hardware', items: ['Calibrated Studio Display (Tokyo Minimalist Desk)', 'Split Custom Mechanical Keyboards (Gateron Oil Kings)', 'Apple M3 Max 64GB Unified Memory Workstation'] },
    { category: 'Editor & Shell', items: ['Neovim + VSCode with strict ESLint / Prettier rules', 'Ghostty / tmux terminal with custom dotfiles', 'Fish shell with automated project aliases'] },
    { category: 'Design Suite', items: ['Figma with Variables & Token Synchronization', 'Clean UI Kit architectures & Storybook sandboxes', 'Contrast & WCAG automated inspection plugins'] },
    { category: 'Backend & Cloud', items: ['Dockerized local PostgreSQL & Redis clusters', 'Cloud Run & Kubernetes staging deployment pipelines', 'Postman & k6 load testing scripts'] },
  ];

  const quickFacts = [
    { label: 'Primary Focus', value: 'Full-Stack Distributed Systems & UI Architecture' },
    { label: 'Years Active', value: '7+ Years (2019 — Present)' },
    { label: 'Education', value: 'B.S. in Computer Science & Engineering' },
    { label: 'Time Zone', value: 'UTC+5:30 (Flexible overlap with US, EU, and APAC)' },
    { label: 'Languages', value: 'English (Fluent), Hindi, Nepali' },
    { label: 'Code Philosophy', value: 'Clarity, resilience, zero unnecessary dependencies' },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white dark:bg-stone-900/60 border-y border-stone-200/80 dark:border-stone-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-950 dark:text-stone-50 tracking-tight [text-wrap:balance]">
            Crafting software with algorithmic rigor and visual poise.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed">
            I specialize in engineering full-stack platforms where performance, clean architecture, and intuitive design converge.
          </p>
        </div>

        {/* Interactive Exploration Navigation */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-stone-100 dark:bg-stone-800/80 rounded-xl mb-12 max-w-xl">
          <button
            onClick={() => setActiveTab('story')}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
              activeTab === 'story'
                ? 'bg-white dark:bg-stone-900 text-stone-950 dark:text-white shadow-xs font-semibold'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Story & Philosophy</span>
          </button>

          <button
            onClick={() => setActiveTab('studio')}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
              activeTab === 'studio'
                ? 'bg-white dark:bg-stone-900 text-stone-950 dark:text-white shadow-xs font-semibold'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
            }`}
          >
            <Monitor className="w-4 h-4" />
            <span>Studio & Toolchain</span>
          </button>

          <button
            onClick={() => setActiveTab('principles')}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
              activeTab === 'principles'
                ? 'bg-white dark:bg-stone-900 text-stone-950 dark:text-white shadow-xs font-semibold'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>Core Principles</span>
          </button>

          <button
            onClick={() => setActiveTab('facts')}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
              activeTab === 'facts'
                ? 'bg-white dark:bg-stone-900 text-stone-950 dark:text-white shadow-xs font-semibold'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>Quick Facts</span>
          </button>
        </div>

        {/* Tab 1: Story & Philosophy */}
        {activeTab === 'story' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6 text-stone-700 dark:text-stone-300 text-base sm:text-lg leading-relaxed">
              {profile.fullBio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900">
                  <div className="font-semibold text-stone-900 dark:text-stone-100 flex items-center gap-2 text-sm">
                    <Award className="w-4 h-4 text-amber-500" />
                    Engineering Discipline
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 mt-2 leading-normal">
                    Trained in computer science algorithms, database internals, and concurrency control.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900">
                  <div className="font-semibold text-stone-900 dark:text-stone-100 flex items-center gap-2 text-sm">
                    <Sparkles className="w-4 h-4 text-indigo-500" />
                    Design System Pioneer
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 mt-2 leading-normal">
                    Obsessed with token math, typography scales, optical alignment, and zero-pill UI clarity.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900 shadow-xs">
                <img
                  src={profile.workspaceImageUrl}
                  alt={`${profile.name} developer workspace`}
                  referrerPolicy="no-referrer"
                  className="w-full aspect-4/3 object-cover hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="p-5 bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800">
                  <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
                    <span className="font-medium text-stone-900 dark:text-stone-200">The Creative Lab</span>
                    <span className="font-mono">Calibrated 4K · Walnut setup</span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 mt-2">
                    Where ideas turn into structured, production-tested software with zero compromise on usability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Studio & Toolchain */}
        {activeTab === 'studio' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900 shadow-xs">
                <img
                  src={profile.workspaceImageUrl}
                  alt="Workstation setup"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-16/10 object-cover"
                />
                <div className="p-4 bg-stone-50 dark:bg-stone-900/90 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-stone-800 dark:text-stone-200" />
                    <span className="font-semibold text-stone-900 dark:text-stone-200">Focused Environment</span>
                  </div>
                  <span>High-Fidelity Workstation</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {studioSetup.map((category) => (
                <div
                  key={category.category}
                  className="p-5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50/70 dark:bg-stone-900/60"
                >
                  <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100 tracking-tight mb-3">
                    {category.category}
                  </h3>
                  <ul className="space-y-2 text-xs text-stone-600 dark:text-stone-400">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-stone-400 mt-0.5">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Core Principles */}
        {activeTab === 'principles' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((principle) => {
              const Icon = principle.icon;
              return (
                <div
                  key={principle.number}
                  className="p-6 sm:p-8 rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/40 hover:bg-stone-50 dark:hover:bg-stone-900/80 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-stone-200/60 dark:bg-stone-800/80 flex items-center justify-center text-stone-900 dark:text-stone-100">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-sm font-semibold text-stone-400 dark:text-stone-600 tabular-nums">
                      {principle.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-stone-950 dark:text-stone-50 tracking-tight mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 4: Quick Facts */}
        {activeTab === 'facts' && (
          <div className="max-w-3xl mx-auto rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/50 overflow-hidden p-6 sm:p-8">
            <h3 className="text-lg font-bold text-stone-950 dark:text-stone-50 mb-6 tracking-tight">
              Curated Profile Highlights
            </h3>
            <div className="divide-y divide-stone-200 dark:divide-stone-800/80">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm">
                  <span className="font-medium text-stone-500 dark:text-stone-400">{fact.label}</span>
                  <span className="font-semibold text-stone-900 dark:text-stone-100 text-left sm:text-right">
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
