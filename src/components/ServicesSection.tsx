import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { servicesData } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white dark:bg-stone-900/40 border-y border-stone-200/80 dark:border-stone-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
            Services & Engagements
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-950 dark:text-stone-50 tracking-tight [text-wrap:balance]">
            High-impact technical offerings tailored for ambitious teams.
          </h2>
          <p className="mt-4 text-stone-600 dark:text-stone-300 text-base leading-relaxed">
            Whether accelerating a seed-stage MVP or hardening an enterprise design infrastructure, I deliver production outcomes with clear milestones.
          </p>
        </div>

        {/* Services Grid: Editorial layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.number}
              className="p-8 sm:p-10 rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/60 hover:border-stone-300 dark:hover:border-stone-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline justify-between mb-4">
                  <span className="font-mono text-sm font-bold text-stone-400 dark:text-stone-500 tabular-nums">
                    {service.number}.
                  </span>
                  <span className="text-xs text-stone-500 dark:text-stone-400">Fixed or Retainer</span>
                </div>

                <h3 className="text-2xl font-bold text-stone-950 dark:text-stone-50 tracking-tight mb-2">
                  {service.title}
                </h3>
                <p className="text-xs font-medium text-stone-500 dark:text-stone-400 mb-4">
                  {service.tagline}
                </p>
                <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables list */}
                <div className="space-y-2.5 mb-8">
                  <div className="text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500">
                    Typical Deliverables
                  </div>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-700 dark:text-stone-300">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & CTA button */}
              <div className="pt-6 border-t border-stone-200/80 dark:border-stone-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400">
                  {service.technologies.map((tech, idx) => (
                    <React.Fragment key={tech}>
                      <span>{tech}</span>
                      {idx < service.technologies.length - 1 && <span aria-hidden="true">/</span>}
                    </React.Fragment>
                  ))}
                </div>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-stone-900 dark:text-stone-100 hover:text-stone-600 dark:hover:text-stone-300 transition-colors shrink-0 whitespace-nowrap"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
