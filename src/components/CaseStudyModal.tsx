import React, { useEffect } from 'react';
import { X, ArrowUpRight, Github, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-2xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/50">
          <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
            <span className="font-semibold text-stone-900 dark:text-stone-100">{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>Case Study</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Case Study"
            className="p-1.5 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Banner */}
        <div className="relative aspect-16/8 bg-stone-950 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 dark:text-stone-50 tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm font-medium text-stone-500 dark:text-stone-400 mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Quantitative Outcomes Strip */}
          <div className="p-6 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50/70 dark:bg-stone-950/50 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {project.caseStudy.outcomes.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-2xl font-extrabold font-mono tabular-nums text-stone-950 dark:text-stone-50">
                  {item.metric}
                </span>
                <span className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100">
                The Engineering Challenge
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                {project.caseStudy.challenge}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100">
                The Architectural Solution
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                {project.caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Core Technical Highlights */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100">
              Technical Implementation Highlights
            </h3>
            <div className="space-y-2.5">
              {project.caseStudy.architecture.map((arch, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-700 dark:text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{arch}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stack & Links */}
          <div className="pt-6 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400">
              <span className="font-semibold text-stone-700 dark:text-stone-300">Technologies:</span>
              {project.technologies.map((t, i) => (
                <React.Fragment key={t}>
                  <span>{t}</span>
                  {i < project.technologies.length - 1 && <span aria-hidden="true">·</span>}
                </React.Fragment>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-lg transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              )}
              <a
                href="#contact"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-stone-900 dark:bg-stone-100 dark:text-stone-900 rounded-lg hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors"
              >
                <span>Discuss Similar System</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
