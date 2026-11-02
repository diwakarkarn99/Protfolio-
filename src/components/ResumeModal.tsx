import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { PortfolioProfile } from '../types/portfolio';
import { experienceData, educationData, skillsData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: PortfolioProfile;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, profile }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 lg:p-8 no-print-bg">
      <div
        className="relative w-full max-w-4xl bg-white text-stone-900 rounded-2xl shadow-2xl overflow-hidden my-4 sm:my-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Control Bar (Hidden when printing) */}
        <div className="no-print flex items-center justify-between px-6 py-4 bg-stone-100 border-b border-stone-200">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-600">
            <span>Curriculum Vitae</span>
            <span aria-hidden="true">·</span>
            <span>{profile.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-stone-500 hover:text-stone-900 rounded-lg transition-colors"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document */}
        <div className="p-8 sm:p-12 space-y-8 bg-white max-h-[85vh] overflow-y-auto print:max-h-none print:overflow-visible print:p-0">
          {/* Header Zone */}
          <div className="border-b border-stone-200 pb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-stone-950">
                {profile.name}
              </h1>
              <p className="text-sm font-semibold text-stone-700 mt-1">
                {profile.title}
              </p>
              <p className="text-xs text-stone-600 max-w-xl mt-2 leading-relaxed">
                {profile.shortBio}
              </p>
            </div>

            <div className="text-xs text-stone-600 space-y-1 sm:text-right shrink-0">
              <div className="flex sm:justify-end items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                <span>{profile.email}</span>
              </div>
              <div className="flex sm:justify-end items-center gap-1.5 font-mono">
                <Phone className="w-3.5 h-3.5" />
                <span>{profile.phone}</span>
              </div>
              <div className="flex sm:justify-end items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>{profile.location}</span>
              </div>
              <div className="flex sm:justify-end items-center gap-1.5 text-stone-500">
                <Globe className="w-3.5 h-3.5" />
                <span>{profile.name.toLowerCase().replace(/\s+/g, '')}.dev</span>
              </div>
            </div>
          </div>

          {/* Technical Competencies Matrix */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1 mb-3">
              Core Technical Competencies
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div>
                <span className="font-semibold block text-stone-900 mb-1">Frontend Engineering</span>
                <p className="text-stone-600 leading-relaxed">
                  React 19, TypeScript, Next.js, Tailwind CSS, State Machines, WebGL
                </p>
              </div>
              <div>
                <span className="font-semibold block text-stone-900 mb-1">Backend & Systems</span>
                <p className="text-stone-600 leading-relaxed">
                  Node.js, Express, PostgreSQL, Redis, GraphQL, Docker
                </p>
              </div>
              <div>
                <span className="font-semibold block text-stone-900 mb-1">Design & Architecture</span>
                <p className="text-stone-600 leading-relaxed">
                  Figma Tokens, Design Systems, WCAG 2.1 AA, Micro-interactions
                </p>
              </div>
              <div>
                <span className="font-semibold block text-stone-900 mb-1">DevOps & Quality</span>
                <p className="text-stone-600 leading-relaxed">
                  CI/CD Pipelines, Vitest, Playwright, Cloud Run, Web Vitals
                </p>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1 mb-4">
              Professional Experience
            </h2>
            <div className="space-y-6">
              {experienceData.map((exp, i) => (
                <div key={i} className="text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-stone-900 mb-1">
                    <span className="text-sm">
                      {exp.role} <span className="font-normal text-stone-600">— {exp.company}</span>
                    </span>
                    <span className="font-mono text-stone-500 text-[11px] tabular-nums">
                      {exp.period} · {exp.location}
                    </span>
                  </div>
                  <p className="text-stone-600 mb-2 leading-relaxed">{exp.description}</p>
                  <ul className="list-disc list-inside space-y-1 text-stone-700">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Credentials */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1 mb-4">
              Education & Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {educationData.map((edu, idx) => (
                <div key={idx} className="border border-stone-200 rounded-lg p-3">
                  <div className="flex items-center justify-between font-mono text-[11px] text-stone-500 mb-1 tabular-nums">
                    <span>{edu.period}</span>
                    <span className="font-medium text-stone-700">{edu.location}</span>
                  </div>
                  <div className="font-bold text-stone-900">{edu.degree}</div>
                  <div className="text-stone-600 mt-0.5">{edu.institution}</div>
                  <p className="text-stone-500 mt-1 text-[11px] leading-relaxed">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
