import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { experienceData, educationData } from '../data/portfolioData';

export const ExperienceEducationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  return (
    <section id="experience" className="py-20 lg:py-28 bg-white dark:bg-stone-900/40 border-y border-stone-200/80 dark:border-stone-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
              Career History & Credentials
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-950 dark:text-stone-50 tracking-tight">
              Track record of leadership & continuous learning.
            </h2>
          </div>

          {/* Toggle between Experience & Education */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-200/60 dark:bg-stone-800 rounded-xl">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'experience'
                  ? 'bg-white dark:bg-stone-900 text-stone-950 dark:text-stone-50 shadow-xs font-semibold'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-100'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Work Experience</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'education'
                  ? 'bg-white dark:bg-stone-900 text-stone-950 dark:text-stone-50 shadow-xs font-semibold'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-100'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education & Honors</span>
            </button>
          </div>
        </div>

        {/* Experience Timeline */}
        {activeTab === 'experience' && (
          <div className="space-y-8">
            {experienceData.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/60 hover:border-stone-300 dark:hover:border-stone-700 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-stone-950 dark:text-stone-50 tracking-tight">
                      {item.role}
                    </h3>
                    <div className="text-sm font-semibold text-stone-700 dark:text-stone-300">
                      {item.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-stone-500 dark:text-stone-400 tabular-nums">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Concrete achievements */}
                <div className="space-y-2 mb-6">
                  {item.achievements.map((ach, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-stone-700 dark:text-stone-300">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-stone-200/60 dark:border-stone-800/60 text-xs text-stone-500 dark:text-stone-400">
                  <span className="font-medium text-stone-700 dark:text-stone-300">Stack:</span>
                  {item.technologies.map((tech, i) => (
                    <React.Fragment key={tech}>
                      <span>{tech}</span>
                      {i < item.technologies.length - 1 && <span aria-hidden="true">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Education Timeline */}
        {activeTab === 'education' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/60 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-stone-500 dark:text-stone-400 mb-2 tabular-nums">
                    <span>{edu.period}</span>
                    <span className="font-semibold text-stone-700 dark:text-stone-300">{edu.location}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-stone-950 dark:text-stone-50 tracking-tight mb-1">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-medium text-stone-700 dark:text-stone-300 mb-4">
                    {edu.institution}
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-6">
                    {edu.details}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200/80 dark:border-stone-800/80">
                  <span className="text-xs font-semibold uppercase text-stone-500 dark:text-stone-400 block mb-2">
                    Key Modules & Focus
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-stone-600 dark:text-stone-400">
                    {edu.courses.map((course, i) => (
                      <React.Fragment key={course}>
                        <span>{course}</span>
                        {i < edu.courses.length - 1 && <span aria-hidden="true">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
