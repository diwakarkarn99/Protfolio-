import React, { useState, useMemo } from 'react';
import { ArrowUpRight, BookOpen, ExternalLink, Github } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';
import { projectsData } from '../data/portfolioData';

interface ProjectsSectionProps {
  onOpenCaseStudy: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenCaseStudy }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Full-Stack', 'Fintech', 'AI & Tools', 'Design Systems'];

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projectsData;
    return projectsData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-stone-50 dark:bg-stone-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
              Selected Works & Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-950 dark:text-stone-50 tracking-tight [text-wrap:balance]">
              Architected for performance, engineered for humans.
            </h2>
            <p className="mt-4 text-stone-600 dark:text-stone-300 text-base leading-relaxed">
              Explore high-throughput systems, generative web surfaces, and enterprise design tokens built from ground up.
            </p>
          </div>

          {/* Interactive Category Filter Tabs (Functional Buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200/60 dark:bg-stone-900 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  activeCategory === cat
                    ? 'bg-white dark:bg-stone-800 text-stone-950 dark:text-stone-100 shadow-xs font-semibold'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const isFeatured = project.featured && index === 0;
            return (
              <div
                key={project.id}
                className={`group rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800/90 bg-white dark:bg-stone-900/70 hover:border-stone-300 dark:hover:border-stone-700 transition-all flex flex-col justify-between shadow-xs ${
                  isFeatured ? 'md:col-span-2' : ''
                }`}
              >
                {/* Visual Media Container */}
                <div
                  className="relative aspect-16/9 overflow-hidden bg-stone-100 dark:bg-stone-950 cursor-pointer"
                  onClick={() => onOpenCaseStudy(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.classList.add(
                          'flex',
                          'items-center',
                          'justify-center',
                          'bg-stone-900',
                          'text-stone-300'
                        );
                        target.parentElement.innerHTML = `<div class="p-6 text-center font-bold text-lg">${project.title}</div>`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-4 py-2 bg-stone-900/80 backdrop-blur-md text-white text-xs font-medium rounded-lg shadow-lg flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Read Deep Dive Case Study</span>
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                  <div>
                    {/* Clean unboxed metadata */}
                    <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400 mb-2">
                      <span className="font-semibold text-stone-800 dark:text-stone-200">
                        {project.category}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                      <span aria-hidden="true">·</span>
                      <span>Production</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-stone-950 dark:text-stone-50 tracking-tight mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-stone-500 dark:text-stone-400 mb-3">
                      {project.tagline}
                    </p>
                    <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech stack metadata */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-stone-500 dark:text-stone-400 pb-6 border-b border-stone-100 dark:border-stone-800/80">
                      {project.technologies.map((tech, idx) => (
                        <React.Fragment key={tech}>
                          <span className="hover:text-stone-900 dark:hover:text-stone-200 transition-colors">
                            {tech}
                          </span>
                          {idx < project.technologies.length - 1 && (
                            <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">
                              /
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="pt-4 flex items-center justify-between">
                      <button
                        onClick={() => onOpenCaseStudy(project)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-950 dark:text-stone-100 hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
                      >
                        <span>Examine Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex items-center gap-3 text-stone-500 dark:text-stone-400">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors p-1"
                            title="View Source on GitHub"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        <button
                          onClick={() => onOpenCaseStudy(project)}
                          className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors p-1"
                          title="View Live Details"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
