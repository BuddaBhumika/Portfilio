import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { CheckCircle2, Loader2, Clock, ArrowRight, Milestone } from 'lucide-react';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-20 md:py-28 bg-[#FAFAF9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-semibold text-indigo-600 tracking-wider uppercase mb-2">
            Learning Roadmap
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            My Learning Journey
          </h2>
          <p className="mt-3 text-stone-600 text-base leading-relaxed">
            I believe meaningful software engineering starts with rock-solid foundations. Here is how I am structuring my growth as a B.Tech Computer Science student.
          </p>
        </div>

        {/* Desktop & Mobile Timeline */}
        <div className="relative">
          {/* Vertical line connector */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 bg-stone-200 -translate-x-1/2" aria-hidden="true" />

          <div className="space-y-10 md:space-y-12">
            {PERSONAL_INFO.journeyMilestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              const isCompleted = milestone.status === 'completed';
              const isCurrent = milestone.status === 'current';
              const isUpcoming = milestone.status === 'upcoming';

              return (
                <div
                  key={milestone.title}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } gap-6 md:gap-0`}
                >
                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 pl-14 md:pl-0 ${isEven ? 'md:pl-10 text-left' : 'md:pr-10 md:text-right'}`}>
                    <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-2xs hover:shadow-xs transition-shadow">
                      
                      {/* Step & Status row */}
                      <div className={`flex items-center gap-2 mb-2 ${isEven ? '' : 'md:justify-end'}`}>
                        <span className="text-xs font-mono text-stone-400 font-medium">
                          {milestone.stage}
                        </span>
                        <span aria-hidden="true" className="text-stone-300">·</span>
                        {isCompleted && (
                          <span className="text-xs font-medium text-emerald-700">Completed</span>
                        )}
                        {isCurrent && (
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
                            Current Focus
                          </span>
                        )}
                        {isUpcoming && (
                          <span className="text-xs font-medium text-stone-400">Next Horizon</span>
                        )}
                      </div>

                      <h3 className="text-lg font-bold text-stone-900 tracking-tight mb-1.5">
                        {milestone.title}
                      </h3>

                      <p className="text-sm text-stone-600 leading-relaxed font-normal">
                        {milestone.description}
                      </p>

                      <div className={`mt-3 pt-3 border-t border-stone-100 flex items-center gap-2 text-xs text-stone-500 ${isEven ? '' : 'md:justify-end'}`}>
                        <span className="font-medium text-stone-700">Focus:</span>
                        <span>{milestone.tag}</span>
                      </div>
                    </div>
                  </div>

                  {/* Center Node / Icon */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    {isCompleted && (
                      <div className="w-9 h-9 rounded-full bg-emerald-50 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center shadow-xs">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                    )}
                    {isCurrent && (
                      <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-md ring-4 ring-indigo-100">
                        <Loader2 className="w-5 h-5 animate-spin" />
                      </div>
                    )}
                    {isUpcoming && (
                      <div className="w-9 h-9 rounded-full bg-stone-100 border-2 border-stone-300 text-stone-400 flex items-center justify-center">
                        <Clock className="w-4 h-4" />
                      </div>
                    )}
                  </div>

                  {/* Empty side for layout balance */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Intentional Bottom Note */}
        <div className="mt-16 p-6 bg-white rounded-2xl border border-stone-200/80 max-w-2xl mx-auto text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 uppercase tracking-wider">
            <Milestone className="w-3.5 h-3.5" />
            <span>Intentional Growth</span>
          </div>
          <p className="text-sm text-stone-600 leading-relaxed">
            I am currently strengthening my programming fundamentals in Java and DSA. My next milestone is synthesizing this algorithmic knowledge into meaningful, hands-on software projects.
          </p>
        </div>

      </div>
    </section>
  );
};
