import React, { useState } from 'react';
import { PERSONAL_INFO, SkillItem } from '../data/portfolioData.ts';
import { Code, Cpu, Wrench, Layers, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Programming' | 'Core' | 'Tools & Technologies'>('All');

  const categories = ['All', 'Programming', 'Core', 'Tools & Technologies'] as const;

  const filteredSkills = selectedCategory === 'All'
    ? PERSONAL_INFO.skills
    : PERSONAL_INFO.skills.filter(s => s.category === selectedCategory);

  const getStatusBadge = (status: SkillItem['status']) => {
    switch (status) {
      case 'Learning':
        return {
          label: 'Learning',
          textColor: 'text-amber-800',
          dotColor: 'bg-amber-500'
        };
      case 'Practicing':
        return {
          label: 'Practicing',
          textColor: 'text-indigo-800',
          dotColor: 'bg-indigo-500'
        };
      case 'Growing':
        return {
          label: 'Growing',
          textColor: 'text-emerald-800',
          dotColor: 'bg-emerald-500'
        };
    }
  };

  const getSkillIcon = (name: string) => {
    switch (name) {
      case 'Java':
        return <Code className="w-5 h-5 text-indigo-600" />;
      case 'Data Structures & Algorithms':
        return <Layers className="w-5 h-5 text-purple-600" />;
      case 'Problem Solving':
        return <Cpu className="w-5 h-5 text-indigo-600" />;
      case 'Git':
      case 'GitHub':
      case 'VS Code':
      case 'HTML':
        return <Wrench className="w-5 h-5 text-stone-600" />;
      default:
        return <Terminal className="w-5 h-5 text-stone-600" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-white border-y border-stone-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <div className="text-xs font-semibold text-indigo-600 tracking-wider uppercase mb-2">
              Technical Skillset
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
              My Current Skills
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
              No artificial percentages or exaggerated metrics. Just honest dedication to mastering core programming fundamentals and daily practice.
            </p>
          </div>

          {/* Category Filter Buttons (Functional Segmented Control) */}
          <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-xl border border-stone-200/70 self-start md:self-auto overflow-x-auto max-w-full">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => {
            const badge = getStatusBadge(skill.status);
            return (
              <div
                key={skill.name}
                className="group p-6 bg-[#FAFAF9] hover:bg-white rounded-2xl border border-stone-200/80 hover:border-indigo-200 shadow-2xs hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-indigo-50 border border-stone-200/80 group-hover:border-indigo-100 flex items-center justify-center transition-colors">
                      {getSkillIcon(skill.name)}
                    </div>

                    {/* Progression label: quiet text with status dot, no candy pill */}
                    <div className="flex items-center gap-1.5 text-xs font-medium">
                      <span className={`w-2 h-2 rounded-full ${badge.dotColor}`} />
                      <span className={badge.textColor}>{badge.label}</span>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-stone-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                    {skill.name}
                  </h3>

                  <div className="text-xs font-medium text-stone-400 mt-0.5 mb-2">
                    {skill.category}
                  </div>

                  {skill.description && (
                    <p className="text-xs text-stone-600 leading-relaxed font-normal">
                      {skill.description}
                    </p>
                  )}
                </div>

                <div className="mt-5 pt-3 border-t border-stone-200/60 flex items-center justify-between text-[11px] text-stone-500">
                  <span>Continuous Practice</span>
                  <span className="font-mono text-stone-400">active</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Honest Progression Philosophy Strip */}
        <div className="mt-12 p-5 bg-stone-50 rounded-2xl border border-stone-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-indigo-600" />
            <span className="text-xs font-medium text-stone-700">
              Progression indicators:
            </span>
            <div className="flex items-center gap-3 text-xs text-stone-500">
              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Learning (Syntax &amp; theory)</span>
              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> Practicing (Active implementation)</span>
              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Growing (Refining problem-solving)</span>
            </div>
          </div>
          <span className="text-xs text-stone-400">Zero artificial percentages</span>
        </div>

      </div>
    </section>
  );
};
