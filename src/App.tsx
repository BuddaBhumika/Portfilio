import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Journey } from './components/Journey.tsx';
import { Skills } from './components/Skills.tsx';
import { CodingProfiles } from './components/CodingProfiles.tsx';
import { ProjectsSection } from './components/ProjectsSection.tsx';
import { Education } from './components/Education.tsx';
import { CurrentlyLearning } from './components/CurrentlyLearning.tsx';
import { BeyondCode } from './components/BeyondCode.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { ResumeModal } from './components/ResumeModal.tsx';
import { CustomizationGuideModal } from './components/CustomizationGuideModal.tsx';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [guideModalOpen, setGuideModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#1C1917] selection:bg-indigo-100 selection:text-indigo-900 font-sans antialiased">
      {/* 1. Navigation Bar */}
      <Navbar onOpenResumeModal={() => setResumeModalOpen(true)} />

      {/* Main Content */}
      <main>
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Me */}
        <About />

        {/* 4. Learning Journey */}
        <Journey />

        {/* 5. Skills */}
        <Skills />

        {/* 6. Coding Profiles ("Where I Code") */}
        <CodingProfiles />

        {/* 7. Building My First Projects ("From Learning to Building") */}
        <ProjectsSection />

        {/* 8. Education */}
        <Education />

        {/* 9. Currently Learning */}
        <CurrentlyLearning />

        {/* 10. Beyond Code */}
        <BeyondCode />

        {/* 11. Contact ("Let's Build Something Someday.") */}
        <Contact />
      </main>

      {/* 12. Footer */}
      <Footer onOpenGuideModal={() => setGuideModalOpen(true)} />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      <CustomizationGuideModal
        isOpen={guideModalOpen}
        onClose={() => setGuideModalOpen(false)}
      />
    </div>
  );
}
