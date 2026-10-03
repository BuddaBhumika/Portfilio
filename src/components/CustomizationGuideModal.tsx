import React from 'react';
import { X, Code, FileText, FolderPlus, User, Award, Mail, Sparkles, Check } from 'lucide-react';

interface CustomizationGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomizationGuideModal: React.FC<CustomizationGuideModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const sections = [
    {
      title: "1. How to Add Your Resume PDF",
      icon: <FileText className="w-4 h-4 text-indigo-600" />,
      instructions: "Place your compiled PDF file into the /public folder named as resume.pdf (i.e. /public/resume.pdf). Then in src/data/portfolioData.ts, update resumeAvailable: true. The Resume button will instantly download it!"
    },
    {
      title: "2. How to Add Real Projects Later",
      icon: <FolderPlus className="w-4 h-4 text-emerald-600" />,
      instructions: "When you build your first Java or DSA project, open src/data/portfolioData.ts and add a project object to the completedProjects array with id, title, description, techStack, and githubUrl. It will automatically convert the 'Coming Soon' state into clean project cards!"
    },
    {
      title: "3. How to Add a Profile Photo (When Desired)",
      icon: <User className="w-4 h-4 text-purple-600" />,
      instructions: "If you decide to include your photo later, save your image as /public/profile.jpg. In src/components/Hero.tsx, you can replace or place it next to the floating code snippet card."
    },
    {
      title: "4. How to Update Skills & Currently Learning",
      icon: <Code className="w-4 h-4 text-amber-600" />,
      instructions: "In src/data/portfolioData.ts, locate the skills array. You can add new languages or tools (like Spring Boot, SQL, etc. when you learn them), and update progression status between 'Learning', 'Practicing', and 'Growing'."
    },
    {
      title: "5. How to Enable an Achievements Section",
      icon: <Award className="w-4 h-4 text-rose-600" />,
      instructions: "As you win hackathons, complete certifications, or earn honors, add an achievements array in src/data/portfolioData.ts. A pre-styled component template can be dropped in right below Education."
    },
    {
      title: "6. How to Connect Direct Email Submissions",
      icon: <Mail className="w-4 h-4 text-indigo-600" />,
      instructions: "Currently, the form performs full client validation and triggers a pre-filled email via mailto. To send directly to your inbox without opening the email client, you can plug in Formspree or EmailJS endpoint inside src/components/Contact.tsx."
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-3xl border border-stone-200 shadow-2xl p-6 sm:p-8 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="guide-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 id="guide-title" className="text-lg font-bold text-stone-900">
                Student Developer Customization Guide
              </h3>
              <p className="text-xs text-stone-500">
                Quick reference for Budda Bhumika to update this portfolio anytime
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="p-2 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
            aria-label="Close guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable list */}
        <div className="overflow-y-auto py-5 space-y-4 pr-1">
          {sections.map((sec, i) => (
            <div key={i} className="p-4 bg-[#FAFAF9] rounded-2xl border border-stone-200/80 space-y-1.5">
              <div className="flex items-center gap-2 font-semibold text-xs text-stone-900">
                {sec.icon}
                <span>{sec.title}</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed pl-6">
                {sec.instructions}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
          <span className="text-xs text-stone-400 font-mono">
            Main file: src/data/portfolioData.ts
          </span>
          <button
            onClick={onClose}
            type="button"
            className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors cursor-pointer"
          >
            Got it, thanks!
          </button>
        </div>
      </div>
    </div>
  );
};
