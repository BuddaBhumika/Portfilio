import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const GitHubIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LeetCodeIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .271 3.543 5.483 5.483 0 0 0 1.064 1.636l2.969 2.969a5.485 5.485 0 0 0 3.876 1.603 5.434 5.434 0 0 0 3.876-1.603l6.591-6.591a1.375 1.375 0 0 0-1.945-1.945l-6.59 6.591a2.71 2.71 0 0 1-1.931.8 2.716 2.716 0 0 1-1.932-.8l-2.969-2.969a2.746 2.746 0 0 1-.803-1.932c0-.525.148-1.041.427-1.488l3.754-4.018 5.406-5.788a1.375 1.375 0 0 0-.97-2.355z" />
    <path d="M10.802 8.845a1.375 1.375 0 0 0 0 1.945l2.75 2.75h-7.81a1.375 1.375 0 0 0 0 2.75h7.81l-2.75 2.75a1.375 1.375 0 1 0 1.945 1.945l5.097-5.097a1.375 1.375 0 0 0 0-1.945l-5.097-5.097a1.375 1.375 0 0 0-1.945 0z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.95 0-1.72-.78-1.72-1.73s.77-1.73 1.72-1.73 1.73.78 1.73 1.73-.78 1.73-1.73 1.73m1.4 9.74v-8.37H5.06v8.37h2.8z" />
  </svg>
);

export const CodingProfiles: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-[#FAFAF9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-indigo-600 tracking-wider uppercase mb-2">
            Online Presence
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Where I Code &amp; Connect
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Follow my progress directly through real platforms where I commit code, practice algorithms, and connect with fellow developers.
          </p>
        </div>

        {/* 3 Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PERSONAL_INFO.socialLinks.map((profile) => (
            <a
              key={profile.platform}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-7 bg-white hover:bg-[#FAFAF9] rounded-2xl border border-stone-200/80 hover:border-indigo-300 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-stone-100 group-hover:bg-indigo-50 text-stone-800 group-hover:text-indigo-600 flex items-center justify-center transition-colors">
                    {profile.platform === 'GitHub' && <GitHubIcon />}
                    {profile.platform === 'LeetCode' && <LeetCodeIcon />}
                    {profile.platform === 'LinkedIn' && <LinkedInIcon />}
                  </div>

                  <span className="p-1.5 rounded-lg text-stone-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-bold text-stone-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                    {profile.platform}
                  </h3>
                  <span className="text-xs font-mono text-stone-400">
                    @{profile.handle}
                  </span>
                </div>

                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mt-2">
                  {profile.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-medium text-indigo-600 group-hover:text-indigo-700">
                <span>View Profile</span>
                <span aria-hidden="true">&rarr;</span>
              </div>
            </a>
          ))}
        </div>

        {/* Verification Note */}
        <div className="mt-8 text-center text-xs text-stone-400">
          All links open directly in a new tab. No fake problem counts or synthetic statistics.
        </div>

      </div>
    </section>
  );
};
