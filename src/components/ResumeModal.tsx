import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { X, FileText, Download, Mail, ExternalLink, CheckCircle2, AlertCircle, Info } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl border border-stone-200 shadow-2xl p-6 sm:p-8 overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-modal-title"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 p-2 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-500"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 id="resume-modal-title" className="text-xl font-bold text-stone-900 tracking-tight">
              Curriculum Vitae / Resume
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              {PERSONAL_INFO.name} · B.Tech Computer Science &amp; Engineering
            </p>
          </div>
        </div>

        {/* Overview Box */}
        <div className="bg-[#FAFAF9] rounded-2xl border border-stone-200/80 p-5 space-y-4 mb-6 text-xs text-stone-700">
          <div className="flex items-center justify-between pb-3 border-b border-stone-200/60">
            <div>
              <span className="font-semibold text-stone-900">Current Academic Status</span>
              <div className="text-stone-500">2nd Year B.Tech CSE · GMRIT</div>
            </div>
            <div className="text-right">
              <span className="font-semibold text-indigo-600 text-sm">CGPA {PERSONAL_INFO.cgpa}</span>
              <div className="text-stone-400">Class of 2029</div>
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="font-semibold text-stone-900">Core Technical Focus</div>
            <div className="text-stone-600 flex flex-wrap gap-x-2 gap-y-1">
              <span>· Java</span>
              <span>· Data Structures &amp; Algorithms</span>
              <span>· Problem Solving</span>
              <span>· Git / GitHub</span>
              <span>· HTML</span>
            </div>
          </div>

          {/* Transparent guidance note */}
          <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200/70 text-amber-900 text-xs flex items-start gap-2.5">
            <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong>Resume file note:</strong> Bhumika is actively updating her resume. To enable direct one-click PDF downloading, she can place her file at <code className="font-mono bg-amber-100/80 px-1 py-0.5 rounded">/public/resume.pdf</code> and set <code className="font-mono bg-amber-100/80 px-1 py-0.5 rounded">resumeAvailable: true</code> in <code className="font-mono bg-amber-100/80 px-1 py-0.5 rounded">src/data/portfolioData.ts</code>.
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a
            href={`mailto:${PERSONAL_INFO.email}?subject=Requesting%20Resume%20for%20Budda%20Bhumika`}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-xs transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Request via Email</span>
          </a>

          <a
            href="https://www.linkedin.com/in/budda-bhumika"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors"
          >
            <span>View LinkedIn</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
};
