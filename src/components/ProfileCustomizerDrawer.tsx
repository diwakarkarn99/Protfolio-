import React, { useState } from 'react';
import { X, RotateCcw, Check, SlidersHorizontal, Sparkles } from 'lucide-react';
import { PortfolioProfile } from '../types/portfolio';

interface ProfileCustomizerDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  profile: PortfolioProfile;
  onSaveProfile: (updated: PortfolioProfile) => void;
  onResetDefaults: () => void;
}

export const ProfileCustomizerDrawer: React.FC<ProfileCustomizerDrawerProps> = ({
  isOpen,
  onClose,
  profile,
  onSaveProfile,
  onResetDefaults,
}) => {
  const [formData, setFormData] = useState<PortfolioProfile>(profile);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Sync if profile prop changes
  React.useEffect(() => {
    setFormData(profile);
  }, [profile]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveProfile(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-950/60 backdrop-blur-xs flex justify-end">
      <div
        className="w-full max-w-lg bg-white dark:bg-stone-900 border-l border-stone-200 dark:border-stone-800 h-full flex flex-col shadow-2xl transition-all"
        role="dialog"
        aria-modal="true"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 dark:border-stone-800">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-stone-700 dark:text-stone-300" />
            <h2 className="text-base font-bold text-stone-950 dark:text-stone-50">
              Customize Portfolio
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onResetDefaults}
              className="p-2 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
              title="Reset to default details"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
              aria-label="Close drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5 overflow-y-auto flex-1">
          <div className="p-3 bg-stone-100 dark:bg-stone-800/60 rounded-xl text-xs text-stone-600 dark:text-stone-300 flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <div>
              Quickly personalize your portfolio name, professional title, contact information, and biography. Changes reflect instantly and persist in your browser.
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-stone-500 dark:text-stone-400 mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2 text-sm bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-lg text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-1 focus:ring-stone-900 dark:focus:ring-stone-100"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-stone-500 dark:text-stone-400 mb-1.5">
              Professional Title
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3.5 py-2 text-sm bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-lg text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-1 focus:ring-stone-900 dark:focus:ring-stone-100"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-stone-500 dark:text-stone-400 mb-1.5">
              Work Email
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3.5 py-2 text-sm bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-lg text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-1 focus:ring-stone-900 dark:focus:ring-stone-100"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-stone-500 dark:text-stone-400 mb-1.5">
              Phone / WhatsApp
            </label>
            <input
              type="text"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3.5 py-2 text-sm bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-lg text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-1 focus:ring-stone-900 dark:focus:ring-stone-100"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-stone-500 dark:text-stone-400 mb-1.5">
              Location & Timezone
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-3.5 py-2 text-sm bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-lg text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-1 focus:ring-stone-900 dark:focus:ring-stone-100"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-stone-500 dark:text-stone-400 mb-1.5">
              Hero Introduction Bio
            </label>
            <textarea
              rows={3}
              value={formData.shortBio}
              onChange={(e) => setFormData({ ...formData, shortBio: e.target.value })}
              className="w-full px-3.5 py-2 text-sm bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-lg text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-1 focus:ring-stone-900 dark:focus:ring-stone-100"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-stone-500 dark:text-stone-400 mb-1.5">
              Availability Status
            </label>
            <input
              type="text"
              value={formData.availability}
              onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
              className="w-full px-3.5 py-2 text-sm bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-lg text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-1 focus:ring-stone-900 dark:focus:ring-stone-100"
            />
          </div>

          <div className="pt-4 border-t border-stone-200 dark:border-stone-800">
            <span className="block text-xs font-semibold uppercase text-stone-500 dark:text-stone-400 mb-3">
              Social Links
            </span>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="GitHub URL"
                value={formData.socials.github}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    socials: { ...formData.socials, github: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2 text-xs bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-lg text-stone-900 dark:text-stone-100"
              />
              <input
                type="text"
                placeholder="LinkedIn URL"
                value={formData.socials.linkedin}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    socials: { ...formData.socials, linkedin: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2 text-xs bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-lg text-stone-900 dark:text-stone-100"
              />
              <input
                type="text"
                placeholder="Twitter / X URL"
                value={formData.socials.twitter}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    socials: { ...formData.socials, twitter: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2 text-xs bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-lg text-stone-900 dark:text-stone-100"
              />
            </div>
          </div>

          {/* Drawer Actions */}
          <div className="pt-6 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-stone-600 dark:text-stone-300 hover:text-stone-900 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-stone-900 dark:bg-stone-100 dark:text-stone-900 rounded-lg hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Saved!</span>
                </>
              ) : (
                <span>Save Changes</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
