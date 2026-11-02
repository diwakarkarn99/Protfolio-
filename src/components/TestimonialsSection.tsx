import React from 'react';
import { Quote } from 'lucide-react';
import { testimonialsData } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-stone-50 dark:bg-stone-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
            Client & Peer Endorsements
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-950 dark:text-stone-50 tracking-tight [text-wrap:balance]">
            Trusted by founders and engineering leaders.
          </h2>
          <p className="mt-4 text-stone-600 dark:text-stone-300 text-base leading-relaxed">
            Direct feedback from engineering executives and product partners on delivered quality and execution pace.
          </p>
        </div>

        {/* Testimonials 3-in-a-row Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl border border-stone-200 dark:border-stone-800/90 bg-white dark:bg-stone-900/70 flex flex-col justify-between hover:border-stone-300 dark:hover:border-stone-700 transition-all shadow-xs"
            >
              <div>
                <Quote className="w-8 h-8 text-stone-300 dark:text-stone-700 mb-4" />
                <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed mb-6 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-stone-100 dark:border-stone-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-stone-200 dark:bg-stone-800 shrink-0 border border-stone-300 dark:border-stone-700 flex items-center justify-center font-bold text-xs text-stone-600 dark:text-stone-300">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <span className="hidden group-only:inline">
                    {item.author.charAt(0)}
                  </span>
                </div>

                <div>
                  <div className="text-sm font-bold text-stone-950 dark:text-stone-50">
                    {item.author}
                  </div>
                  <div className="text-xs text-stone-500 dark:text-stone-400">
                    {item.role} · {item.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
