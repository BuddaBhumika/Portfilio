import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { ArrowDown, Send, Sparkles, Terminal, Code2, ExternalLink, Check, Copy } from 'lucide-react';

// Custom icons for coding platforms
const GitHubIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LeetCodeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .271 3.543 5.483 5.483 0 0 0 1.064 1.636l2.969 2.969a5.485 5.485 0 0 0 3.876 1.603 5.434 5.434 0 0 0 3.876-1.603l6.591-6.591a1.375 1.375 0 0 0-1.945-1.945l-6.59 6.591a2.71 2.71 0 0 1-1.931.8 2.716 2.716 0 0 1-1.932-.8l-2.969-2.969a2.746 2.746 0 0 1-.803-1.932c0-.525.148-1.041.427-1.488l3.754-4.018 5.406-5.788a1.375 1.375 0 0 0-.97-2.355z" />
    <path d="M10.802 8.845a1.375 1.375 0 0 0 0 1.945l2.75 2.75h-7.81a1.375 1.375 0 0 0 0 2.75h7.81l-2.75 2.75a1.375 1.375 0 1 0 1.945 1.945l5.097-5.097a1.375 1.375 0 0 0 0-1.945l-5.097-5.097a1.375 1.375 0 0 0-1.945 0z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.95 0-1.72-.78-1.72-1.73s.77-1.73 1.72-1.73 1.73.78 1.73 1.73-.78 1.73-1.73 1.73m1.4 9.74v-8.37H5.06v8.37h2.8z" />
  </svg>
);

export const Hero: React.FC = () => {
  // Typing animation setup
  const roles = PERSONAL_INFO.hero.typingRoles;
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeTab, setActiveTab] = useState<'java' | 'output'>('java');

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseTime = isDeleting ? 40 : 1800;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < currentRole.length) {
          setText(currentRole.slice(0, text.length + 1));
        } else {
          // Pause when word is completely typed, then delete
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (text.length > 0) {
          setText(currentRole.slice(0, text.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, roles]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.hero.codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-gradient-to-tr from-indigo-100/50 via-purple-50/40 to-stone-100/30 blur-3xl -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-amber-50/50 blur-3xl -z-10 pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Intentional Student Brand */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status indicator: Quiet inline text metadata, no bulky pill */}
            <div className="flex items-center gap-2 text-xs font-medium text-stone-600">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>2nd Year Computer Science Student</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="text-stone-500">GMR Institute of Technology</span>
            </div>

            {/* Main Greeting & Dynamic Typing */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.15]">
                {PERSONAL_INFO.hero.greeting}
              </h1>

              {/* Dynamic typing role badge line */}
              <div className="flex items-center gap-2 text-xl sm:text-2xl lg:text-3xl font-semibold text-indigo-700 min-h-[40px]">
                <span className="tracking-tight">{text}</span>
                <span className="w-0.5 h-7 bg-indigo-600 animate-cursor-blink inline-block" aria-hidden="true" />
              </div>
            </div>

            {/* Short Statement */}
            <p className="text-lg sm:text-xl text-stone-600 font-normal leading-relaxed max-w-xl">
              {PERSONAL_INFO.hero.tagline}
            </p>

            {/* CTAs & Socials */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#journey"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-xl shadow-xs hover:shadow-md transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
              >
                <span>Explore My Journey</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-stone-800 bg-white hover:bg-stone-50 active:bg-stone-100 rounded-xl border border-stone-200/90 shadow-2xs hover:shadow-xs transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <span>Let's Connect</span>
                <Send className="w-4 h-4 text-stone-500" />
              </a>
            </div>

            {/* Social Links List */}
            <div className="pt-4 flex items-center gap-3">
              <span className="text-xs font-medium text-stone-400">Profiles:</span>
              <div className="flex items-center gap-2">
                {PERSONAL_INFO.socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200/70 transition-colors border border-stone-200/60 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-500"
                    aria-label={`${link.platform} profile (${link.handle})`}
                    title={`${link.platform}: ${link.description}`}
                  >
                    {link.platform === 'GitHub' && <GitHubIcon />}
                    {link.platform === 'LeetCode' && <LeetCodeIcon />}
                    {link.platform === 'LinkedIn' && <LinkedInIcon />}
                  </a>
                ))}
              </div>
              <span className="text-xs text-stone-400">· Clickable profiles</span>
            </div>

          </div>

          {/* Right Column: Elegant Developer Visual Code Card (NO profile photo as requested) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-stone-900 text-stone-100 rounded-2xl shadow-xl shadow-stone-900/10 border border-stone-800 overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
              
              {/* Window Header */}
              <div className="px-4 py-3 bg-stone-950/80 border-b border-stone-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-stone-400 font-medium">Bhumika.java</span>
                </div>
                
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setActiveTab(activeTab === 'java' ? 'output' : 'java')}
                    type="button"
                    className="px-2 py-0.5 text-[11px] font-mono text-stone-400 hover:text-stone-200 bg-stone-800/80 rounded transition-colors"
                  >
                    {activeTab === 'java' ? 'view output' : 'view code'}
                  </button>
                  <button
                    onClick={handleCopyCode}
                    type="button"
                    className="p-1 text-stone-400 hover:text-stone-200 rounded transition-colors"
                    aria-label="Copy snippet"
                    title="Copy Java code"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Window Content */}
              {activeTab === 'java' ? (
                <div className="p-5 font-mono text-sm leading-relaxed overflow-x-auto">
                  <div className="text-stone-500 select-none text-xs pb-2">
                    // Bhumika's daily student philosophy
                  </div>
                  <div className="space-y-1">
                    <div>
                      <span className="text-purple-400">public class</span>{' '}
                      <span className="text-amber-300 font-semibold">Bhumika</span>{' '}
                      <span className="text-stone-400">{'{'}</span>
                    </div>
                    <div className="pl-5 text-indigo-300">
                      <span className="text-stone-500 select-none text-xs mr-3">01</span>
                      <span className="text-emerald-400">learn</span>();
                    </div>
                    <div className="pl-5 text-indigo-300">
                      <span className="text-stone-500 select-none text-xs mr-3">02</span>
                      <span className="text-emerald-400">practice</span>();
                    </div>
                    <div className="pl-5 text-indigo-300">
                      <span className="text-stone-500 select-none text-xs mr-3">03</span>
                      <span className="text-emerald-400">improve</span>();
                    </div>
                    <div className="pl-5 text-indigo-300">
                      <span className="text-stone-500 select-none text-xs mr-3">04</span>
                      <span className="text-emerald-400">build</span>();
                    </div>
                    <div className="text-stone-400">{'}'}</div>
                  </div>

                  {/* Status strip at bottom of card */}
                  <div className="mt-5 pt-3 border-t border-stone-800/80 flex items-center justify-between text-xs text-stone-400">
                    <span className="flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                      <span>JDK 21 · CSE Core</span>
                    </span>
                    <span className="text-emerald-400/90 font-medium">loop: active</span>
                  </div>
                </div>
              ) : (
                <div className="p-5 font-mono text-xs leading-relaxed text-stone-300 space-y-2">
                  <div className="text-stone-500">// Terminal Execution Output</div>
                  <div className="text-emerald-400">&gt; java Bhumika.java</div>
                  <div className="text-stone-300">
                    [1/4] learn() → Java, Data Structures, OOP Fundamentals
                  </div>
                  <div className="text-stone-300">
                    [2/4] practice() → Solving problems daily on LeetCode
                  </div>
                  <div className="text-stone-300">
                    [3/4] improve() → Iterative learning &amp; feedback
                  </div>
                  <div className="text-stone-300">
                    [4/4] build() → Preparing for real-world applications
                  </div>
                  <div className="pt-2 text-stone-500">Status: In Progress · Next: First Projects</div>
                </div>
              )}

              {/* Quiet footer badge */}
              <div className="px-5 py-2.5 bg-stone-950/60 border-t border-stone-800/60 text-[11px] text-stone-400 flex items-center justify-between">
                <span>GMRIT · B.Tech 2025–2029</span>
                <span>CGPA 8.7</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
