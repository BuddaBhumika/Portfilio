import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { Hammer, Sparkles, Clock, FolderGit2, ArrowRight, Lightbulb, Bell } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [notified, setNotified] = useState(false);

  return (
    <section id="projects" className="py-20 md:py-28 bg-white border-y border-stone-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-indigo-600 tracking-wider uppercase mb-2">
            Portfolio In Progress
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            {PERSONAL_INFO.projectsSection.title}
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            {PERSONAL_INFO.projectsSection.description}
          </p>
        </div>

        {/* The Intentional "Coming Soon" / Learning to Building Showcase */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-[#FAFAF9] rounded-3xl border border-stone-200/90 p-8 sm:p-12 shadow-sm overflow-hidden">
            
            {/* Ambient subtle decorative light */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none -z-0" />

            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
              
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-white border border-stone-200 shadow-2xs flex items-center justify-center text-indigo-600">
                <FolderGit2 className="w-8 h-8 stroke-[1.75]" />
              </div>

              {/* Tag / Status (Unboxed text with separators per design rules) */}
              <div className="flex items-center gap-2 text-xs font-medium text-stone-500">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                <span>Active Foundation Stage</span>
                <span aria-hidden="true" className="text-stone-300">·</span>
                <span>B.Tech 2nd Year</span>
              </div>

              {/* Main Card Content */}
              <div className="space-y-2 max-w-lg">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                  {PERSONAL_INFO.projectsSection.cardTitle}
                </h3>
                <p className="text-base sm:text-lg font-medium text-indigo-700">
                  {PERSONAL_INFO.projectsSection.cardSubtitle}
                </p>
                <p className="text-sm text-stone-600 leading-relaxed pt-2">
                  {PERSONAL_INFO.projectsSection.comingSoonNote}
                </p>
              </div>

              {/* Subtle Progress Track Visual (Tasteful, showing foundational journey) */}
              <div className="w-full max-w-md pt-3">
                <div className="flex justify-between text-xs text-stone-500 font-mono mb-2">
                  <span>Foundations &amp; DSA</span>
                  <span className="text-indigo-600 font-semibold">Preparing Practical Builds</span>
                </div>
                <div className="h-2 w-full bg-stone-200/80 rounded-full overflow-hidden p-0.5">
                  <div className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full w-2/3 transition-all duration-1000" />
                </div>
                <div className="flex justify-between text-[11px] text-stone-400 mt-2">
                  <span>Core Java &amp; Algorithms</span>
                  <span>Software Applications (Soon)</span>
                </div>
              </div>

              {/* Call to Action to check GitHub */}
              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="https://github.com/BuddaBhumika"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-xl transition-all shadow-2xs hover:shadow-xs"
                >
                  <FolderGit2 className="w-3.5 h-3.5" />
                  <span>Follow on GitHub</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={() => setNotified(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-stone-700 hover:text-stone-900 bg-white hover:bg-stone-100 rounded-xl border border-stone-200 transition-colors cursor-pointer"
                >
                  <Bell className="w-3.5 h-3.5 text-stone-400" />
                  <span>{notified ? 'Bookmarked for later!' : 'Bookmark to revisit'}</span>
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Developer Notes / Easy future expansion box */}
        <div className="mt-12 max-w-3xl mx-auto p-4 bg-stone-50 rounded-xl border border-stone-200/70 text-xs text-stone-500 flex items-start gap-3">
          <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-stone-700">For Future Projects:</span>{' '}
            As Bhumika completes her first software builds, new projects can simply be added to the{' '}
            <code className="px-1.5 py-0.5 bg-stone-200 text-stone-800 rounded font-mono text-[11px]">
              completedProjects
            </code>{' '}
            array in{' '}
            <code className="px-1.5 py-0.5 bg-stone-200 text-stone-800 rounded font-mono text-[11px]">
              src/data/portfolioData.ts
            </code>
            , automatically rendering them as full project cards here.
          </div>
        </div>

      </div>
    </section>
  );
};
