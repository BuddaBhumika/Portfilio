import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { Mail, Send, Copy, Check, ArrowUpRight, MessageSquare, AlertCircle, Sparkles } from 'lucide-react';

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

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please include a short message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }
    return newErrors;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Frontend handling:
    // To ensure authentic behavior without pretending a fake cloud API sent it,
    // we generate a ready-to-send mailto action and present a transparent confirmation UI.
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Open email client with pre-filled content as fallback
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-stone-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold text-indigo-600 tracking-wider uppercase mb-2">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Let's Build Something Someday.
          </h2>
          <p className="mt-3 text-stone-600 text-base leading-relaxed">
            Whether it's an opportunity to learn, collaborate, or gain real-world experience, I'd love to connect.
          </p>
        </div>

        {/* 2-Column Layout: Direct Details vs Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Email & Profiles */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Email Card */}
            <div className="p-7 bg-[#FAFAF9] rounded-2xl border border-stone-200/80 shadow-2xs space-y-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>

              <div>
                <div className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
                  Direct Email
                </div>
                <div className="text-base sm:text-lg font-bold text-stone-900 tracking-tight mt-1 select-all break-all">
                  {PERSONAL_INFO.email}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Hello%20Bhumika`}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-2xs transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Email Me</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-stone-700 bg-white hover:bg-stone-100 rounded-lg border border-stone-200 transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-stone-500" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Profiles List */}
            <div className="p-6 bg-[#FAFAF9] rounded-2xl border border-stone-200/80 space-y-4">
              <div className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
                Connect on Platforms
              </div>

              <div className="space-y-3">
                {PERSONAL_INFO.socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-stone-50 border border-stone-200/70 transition-all text-xs text-stone-700 hover:text-stone-900 group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-stone-500 group-hover:text-indigo-600 transition-colors">
                        {link.platform === 'GitHub' && <GitHubIcon />}
                        {link.platform === 'LeetCode' && <LeetCodeIcon />}
                        {link.platform === 'LinkedIn' && <LinkedInIcon />}
                      </span>
                      <span className="font-semibold">{link.platform}</span>
                      <span className="text-stone-400 font-mono text-[11px]">@{link.handle}</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-indigo-600 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAFAF9] p-7 sm:p-9 rounded-3xl border border-stone-200/90 shadow-2xs">
              
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                    Send a Message
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Feel free to reach out for opportunities, academic discussions, or guidance.
                  </p>
                </div>
                <MessageSquare className="w-5 h-5 text-stone-400" />
              </div>

              {submitted ? (
                <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-3 animate-in fade-in duration-300">
                  <div className="flex items-center gap-2 text-emerald-800 font-semibold text-sm">
                    <Check className="w-5 h-5 text-emerald-600" />
                    <span>Message Ready &amp; Email Client Triggered!</span>
                  </div>
                  <p className="text-xs text-emerald-700 leading-relaxed">
                    Thank you for reaching out, <strong>{formData.name}</strong>. If your mail client didn't open automatically, you can also write directly to{' '}
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="underline font-semibold">
                      {PERSONAL_INFO.email}
                    </a>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="mt-2 text-xs font-medium text-emerald-800 underline hover:text-emerald-900"
                  >
                    Send another note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-stone-700 mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Sharma"
                      className={`w-full px-4 py-2.5 text-sm bg-white rounded-xl border ${
                        errors.name ? 'border-rose-400 focus:border-rose-500' : 'border-stone-200 focus:border-indigo-500'
                      } text-stone-900 placeholder:text-stone-400 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-100 transition-colors`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-stone-700 mb-1.5">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@example.com"
                      className={`w-full px-4 py-2.5 text-sm bg-white rounded-xl border ${
                        errors.email ? 'border-rose-400 focus:border-rose-500' : 'border-stone-200 focus:border-indigo-500'
                      } text-stone-900 placeholder:text-stone-400 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-100 transition-colors`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-stone-700 mb-1.5">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Bhumika, I saw your portfolio and wanted to reach out regarding..."
                      className={`w-full px-4 py-2.5 text-sm bg-white rounded-xl border ${
                        errors.message ? 'border-rose-400 focus:border-rose-500' : 'border-stone-200 focus:border-indigo-500'
                      } text-stone-900 placeholder:text-stone-400 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-100 transition-colors resize-y`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-xl shadow-xs transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Processing...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Transparent Developer note per prompt instructions */}
                  <div className="pt-3 text-[11px] text-stone-400 leading-relaxed text-center">
                    Validates inputs and opens direct email client. To hook up Formspree or EmailJS API directly, check{' '}
                    <code className="px-1 bg-stone-200 text-stone-700 rounded font-mono">
                      src/components/Contact.tsx
                    </code>.
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
