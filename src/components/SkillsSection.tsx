import React, { useState, useMemo } from 'react';
import { Search, Code2, Server, Layout, ShieldCheck } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Capabilities', icon: Code2 },
    { id: 'frontend', label: 'Frontend Architecture', icon: Layout },
    { id: 'backend', label: 'Backend & Cloud', icon: Server },
    { id: 'design', label: 'Design Systems & UX', icon: Code2 },
    { id: 'devops', label: 'DevOps & Reliability', icon: ShieldCheck },
  ];

  const filteredSkills = useMemo(() => {
    return skillsData.filter((skill) => {
      const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" className="py-20 lg:py-28 bg-stone-50 dark:bg-stone-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
              Technical Stack & Domain Depth
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-950 dark:text-stone-50 tracking-tight">
              Mastered technologies, rigorously battle-tested.
            </h2>
            <p className="mt-4 text-stone-600 dark:text-stone-300 text-base leading-relaxed">
              Every tool in this repertoire has been deployed to production and maintained under real user traffic.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search skill, tool or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-xs bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-900 dark:focus:ring-stone-300"
            />
          </div>
        </div>

        {/* Category Filter Tabs (Interactive Functional Controls) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200/50 dark:bg-stone-900 rounded-xl mb-10 max-w-2xl">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-white dark:bg-stone-800 text-stone-950 dark:text-stone-50 shadow-xs font-semibold'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-6 rounded-2xl border border-stone-200 dark:border-stone-800/90 bg-white dark:bg-stone-900/70 hover:border-stone-300 dark:hover:border-stone-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-base font-bold text-stone-900 dark:text-stone-100 tracking-tight">
                    {skill.name}
                  </h3>
                  <span className="font-mono text-xs font-semibold text-stone-500 dark:text-stone-400 tabular-nums">
                    {skill.experience}
                  </span>
                </div>

                {/* Clean unboxed tags with typographic separator */}
                <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs text-stone-500 dark:text-stone-400 mb-4">
                  {skill.tags.map((tag, i) => (
                    <React.Fragment key={tag}>
                      <span>{tag}</span>
                      {i < skill.tags.length - 1 && <span aria-hidden="true">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Progress Bar with Tabular Numeral */}
              <div className="pt-2">
                <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 mb-1.5">
                  <span>Proficiency</span>
                  <span className="font-mono tabular-nums text-stone-700 dark:text-stone-300 font-medium">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-stone-900 dark:bg-stone-200 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="py-16 text-center text-stone-500 dark:text-stone-400 text-sm">
            No technical skills matching your search query &quot;{searchQuery}&quot;.
          </div>
        )}
      </div>
    </section>
  );
};
