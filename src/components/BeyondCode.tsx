import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { Compass, Flame, Repeat, Sparkles, TrendingUp, HeartHandshake } from 'lucide-react';

export const BeyondCode: React.FC = () => {
  const getQualityIcon = (title: string) => {
    switch (title) {
      case 'Curious':
        return <Compass className="w-5 h-5 text-indigo-600" />;
      case 'Consistent':
        return <Repeat className="w-5 h-5 text-purple-600" />;
      case 'Hardworking':
        return <Flame className="w-5 h-5 text-amber-600" />;
      case 'Growth-minded':
        return <TrendingUp className="w-5 h-5 text-emerald-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <section className="py-20 md:py-24 bg-[#FAFAF9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-indigo-600 tracking-wider uppercase mb-2">
            Work Ethic &amp; Mindset
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Beyond Code
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            The values and discipline that guide my work every day as a student preparing for professional engineering.
          </p>
        </div>

        {/* Qualities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PERSONAL_INFO.beyondCode.map((quality) => (
            <div
              key={quality.title}
              className="p-6 bg-white rounded-2xl border border-stone-200/80 shadow-2xs hover:shadow-sm hover:border-indigo-200 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-stone-50 border border-stone-200/60 flex items-center justify-center mb-4">
                  {getQualityIcon(quality.title)}
                </div>

                <div className="text-xs font-medium text-stone-400 mb-1">
                  {quality.highlight}
                </div>

                <h3 className="text-base font-bold text-stone-900 tracking-tight mb-2">
                  {quality.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  {quality.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-stone-100 text-[11px] text-stone-400 font-medium">
                Personal Standard
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
