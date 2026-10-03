import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { GraduationCap, Award, Calendar, BookOpen, MapPin, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-[#FAFAF9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-indigo-600 tracking-wider uppercase mb-2">
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Education
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Acquiring theoretical computer science principles, mathematical foundations, and software engineering rigor.
          </p>
        </div>

        {/* Education Timeline / Card */}
        <div className="max-w-3xl">
          <div className="bg-white rounded-2xl border border-stone-200/80 p-7 sm:p-8 shadow-2xs hover:shadow-xs transition-shadow">
            
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-stone-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900 tracking-tight">
                    {PERSONAL_INFO.college}
                  </h3>
                  <p className="text-sm font-semibold text-indigo-600 mt-0.5">
                    {PERSONAL_INFO.degree}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 mt-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-stone-400" />
                      <span>{PERSONAL_INFO.academicYears}</span>
                    </span>
                    <span aria-hidden="true" className="text-stone-300">·</span>
                    <span className="font-medium text-stone-700">Currently in {PERSONAL_INFO.currentYear}</span>
                    <span aria-hidden="true" className="text-stone-300">·</span>
                    <span>Graduation {PERSONAL_INFO.graduationYear}</span>
                  </div>
                </div>
              </div>

              {/* CGPA display */}
              <div className="sm:text-right shrink-0 bg-stone-50 sm:bg-transparent p-3 sm:p-0 rounded-xl border sm:border-0 border-stone-100">
                <div className="text-xs text-stone-400 font-medium">Cumulative GPA</div>
                <div className="text-2xl font-extrabold text-stone-900 tracking-tight flex items-baseline sm:justify-end gap-1">
                  <span className="text-indigo-600">{PERSONAL_INFO.cgpa}</span>
                  <span className="text-xs text-stone-400 font-normal">/ 10.0</span>
                </div>
              </div>
            </div>

            {/* Relevant Coursework & Focus Areas */}
            <div className="pt-6 space-y-3">
              <div className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
                Key Learning Focus &amp; Coursework
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-[#FAFAF9]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Object-Oriented Programming (Java)</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-[#FAFAF9]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Data Structures &amp; Algorithms</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-[#FAFAF9]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Mathematical Foundations &amp; Discrete Math</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-[#FAFAF9]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Computer Architecture Fundamentals</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
