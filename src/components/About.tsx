import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { Compass, GraduationCap, Target, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white border-y border-stone-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold text-indigo-600 tracking-wider uppercase mb-2">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Curious student. Grounded learner.
          </h2>
          <div className="mt-2 text-sm text-stone-500 font-medium">
            {PERSONAL_INFO.about.careerTagline}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-7 sm:p-8 bg-[#FAFAF9] rounded-2xl border border-stone-200/80 shadow-2xs">
              <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-normal">
                {PERSONAL_INFO.about.main}
              </p>
            </div>

            {/* Career Direction Block */}
            <div className="p-6 sm:p-7 bg-stone-50 rounded-2xl border border-stone-200/80 space-y-3">
              <div className="flex items-center gap-2.5 text-stone-900 font-semibold text-sm">
                <Compass className="w-4 h-4 text-indigo-600" />
                <span>Career Direction &amp; Focus</span>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed">
                {PERSONAL_INFO.about.careerStatement}
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-stone-500">
                <span className="font-medium text-stone-700">Approach:</span>
                <span>Fundamentals first, practical application next.</span>
              </div>
            </div>

            {/* Philosophy quote */}
            <div className="border-l-2 border-indigo-500 pl-4 py-1">
              <p className="text-sm italic text-stone-600">
                "{PERSONAL_INFO.about.corePhilosophy}"
              </p>
            </div>
          </div>

          {/* Quick Academic Snapshot Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#FAFAF9] p-6 sm:p-7 rounded-2xl border border-stone-200/80 shadow-2xs space-y-5">
              <h3 className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
                Academic Snapshot
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-stone-900">{PERSONAL_INFO.degree}</div>
                    <div className="text-xs text-stone-500">{PERSONAL_INFO.college}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-stone-900">Current Standing</div>
                    <div className="text-xs text-stone-500">
                      {PERSONAL_INFO.currentYear} · Expected Graduation {PERSONAL_INFO.graduationYear}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-stone-900">Cumulative GPA</div>
                    <div className="text-xs text-stone-500 font-medium">
                      <span className="text-indigo-600 font-semibold">{PERSONAL_INFO.cgpa}</span> / 10.0 scale
                    </div>
                  </div>
                </div>
              </div>

              {/* Student Commitment */}
              <div className="pt-4 border-t border-stone-200/70 space-y-2">
                <div className="text-xs font-medium text-stone-800">What I value most right now:</div>
                <ul className="text-xs text-stone-600 space-y-1.5">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Consistency in writing clean Java code</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Understanding problem complexity before coding</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Receptive to mentorship and feedback</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Email contact prompt */}
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200/60 flex items-center justify-between text-xs">
              <span className="text-stone-500">Open for student collaborations</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                Send an email &rarr;
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
