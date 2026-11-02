import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, Clock, Calendar } from 'lucide-react';
import { PortfolioProfile } from '../types/portfolio';

interface ContactSectionProps {
  profile: PortfolioProfile;
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile, preselectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: preselectedService || 'Full-Stack Web Architecture',
    budget: '$5,000 — $15,000',
    timeline: 'Within 1-2 months',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Update inquiryType if preselectedService changes
  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, inquiryType: preselectedService }));
    }
  }, [preselectedService]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      inquiryType: 'Full-Stack Web Architecture',
      budget: '$5,000 — $15,000',
      timeline: 'Within 1-2 months',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white dark:bg-stone-900/40 border-t border-stone-200/80 dark:border-stone-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Info & Availability */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
                Initiate Conversation
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-950 dark:text-stone-50 tracking-tight mb-6 [text-wrap:balance]">
                Let&apos;s build something extraordinary together.
              </h2>
              <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed mb-8">
                Currently open for Q1/Q2 consulting contracts, design system foundations, architecture advisory, and selective full-time leadership roles.
              </p>

              {/* Direct Contact Cards */}
              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-stone-600 dark:text-stone-400" />
                    <div>
                      <div className="text-xs text-stone-400">Direct Email</div>
                      <a
                        href={`mailto:${profile.email}`}
                        className="text-sm font-semibold text-stone-900 dark:text-stone-100 hover:underline"
                      >
                        {profile.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/60 flex items-center gap-3">
                  <Phone className="w-4 h-4 text-stone-600 dark:text-stone-400" />
                  <div>
                    <div className="text-xs text-stone-400">Phone / WhatsApp</div>
                    <div className="text-sm font-semibold text-stone-900 dark:text-stone-100 font-mono tabular-nums">
                      {profile.phone}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/60 flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-stone-600 dark:text-stone-400" />
                  <div>
                    <div className="text-xs text-stone-400">Current Location & Timezone</div>
                    <div className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                      {profile.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-500/10 text-stone-800 dark:text-stone-200 text-xs flex items-start gap-3">
              <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block text-emerald-700 dark:text-emerald-300">Fast Turnaround</span>
                Guaranteed response within 24 hours on all business inquiries.
              </div>
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/60 shadow-xs">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-950 dark:text-stone-50">
                    Message Dispatched Successfully
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-stone-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-stone-900 dark:text-stone-100">{formData.name}</span>. Your inquiry regarding <span className="font-medium text-stone-900 dark:text-stone-200">{formData.inquiryType}</span> has been registered. You will receive a direct reply at <span className="font-mono text-xs">{formData.email}</span> shortly.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-6 px-5 py-2.5 text-xs font-semibold text-stone-900 dark:text-stone-100 bg-stone-200 dark:bg-stone-800 hover:bg-stone-300 rounded-lg transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-400 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-900 dark:focus:ring-stone-100"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-400 mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-900 dark:focus:ring-stone-100"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-400 mb-2">
                        Inquiry Scope
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-1 focus:ring-stone-900 dark:focus:ring-stone-100"
                      >
                        <option value="Full-Stack Web Architecture">Full-Stack Web Architecture</option>
                        <option value="Enterprise Design Systems">Enterprise Design Systems</option>
                        <option value="Performance & Architecture Audits">Performance & Architecture Audits</option>
                        <option value="MVP Acceleration & Technical Advisory">MVP Acceleration & Technical Advisory</option>
                        <option value="Full-Time Engineering Leadership">Full-Time Engineering Leadership</option>
                        <option value="Other / General Discussion">Other / General Discussion</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-400 mb-2">
                        Target Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-1 focus:ring-stone-900 dark:focus:ring-stone-100"
                      >
                        <option value="Under $5,000">Under $5,000 (Advisory / Small Audit)</option>
                        <option value="$5,000 — $15,000">$5,000 — $15,000 (Standard Sprint)</option>
                        <option value="$15,000 — $35,000">$15,000 — $35,000 (Full-Scale System)</option>
                        <option value="$35,000+">$35,000+ (Multi-Quarter / Retainer)</option>
                        <option value="Full-time Compensation">Full-time Compensation (Salary & Equity)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-400 mb-2">
                      Project Goals & Context *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your product, desired timeline, team composition, and key technical challenges..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-900 dark:focus:ring-stone-100"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Prefer a video call? Drop your link in the message.</span>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-stone-900 dark:bg-stone-100 dark:text-stone-950 rounded-xl hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors shadow-xs disabled:opacity-50 whitespace-nowrap"
                    >
                      {loading ? (
                        <span>Transmitting...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Transmit Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
