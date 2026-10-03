import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { BookOpen, Sparkles, Code2, Network, BrainCircuit, ArrowUpRight } from 'lucide-react';

export const CurrentlyLearning: React.FC = () => {
  const getCardIcon = (title: string) => {
    switch (title) {
      case 'Java':
        return <Code2 className="w-6 h-6 text-indigo-600" />;
      case 'Data Structures & Algorithms':
        return <Network className="w-6 h-6 text-purple-600" />;
      case 'Problem Solving':
        return <BrainCircuit className="w-6 h-6 text-emerald-600" />;
      default:
        return <BookOpen className="w-6 h-6 text-indigo-600" />;
    }
  };

  return (
    <section className="py-20 md:py-24 bg-white border-y border-stone-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-indigo-600 tracking-wider uppercase mb-2">
            Active Study
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Currently Learning
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Where my energy and deliberate practice go every day. Developing depth before breadth.
          </p>
        </div>

        {/* 3 Interactive Topic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PERSONAL_INFO.currentlyLearning.map((item) => (
            <div
              key={item.title}
              className="group p-7 bg-[#FAFAF9] hover:bg-white rounded-2xl border border-stone-200/80 hover:border-indigo-200 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-stone-200/80 group-hover:border-indigo-100 flex items-center justify-center mb-5 transition-colors">
                  {getCardIcon(item.title)}
                </div>

                <div className="text-xs font-mono text-stone-400 mb-1">
                  {item.subtitle}
                </div>

                <h3 className="text-lg font-bold text-stone-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-stone-600 text-sm leading-relaxed mt-2.5">
                  {item.description}
                </p>

                {/* Focus areas list */}
                <div className="mt-5 pt-4 border-t border-stone-200/60 space-y-1.5">
                  <div className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider">
                    Core Focus
                  </div>
                  {item.focusAreas.map((area, idx) => (
                    <div key={idx} className="text-xs text-stone-600 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-indigo-500" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 flex items-center justify-between text-xs text-stone-400 font-mono">
                <span>Status: In Progress</span>
                <span className="text-indigo-600 font-sans font-medium">Daily Routine</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
