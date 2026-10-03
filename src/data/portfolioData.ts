/**
 * Portfolio Data for Budda Bhumika
 * 
 * Keep all content centralized here so Bhumika can easily update:
 * - Skills
 * - Future projects
 * - Education & CGPA
 * - Social profiles & resume
 */

export interface SkillItem {
  name: string;
  category: 'Programming' | 'Core' | 'Tools & Technologies';
  status: 'Learning' | 'Practicing' | 'Growing';
  description?: string;
}

export interface LearningCard {
  title: string;
  subtitle: string;
  description: string;
  focusAreas: string[];
}

export interface SocialLink {
  platform: 'GitHub' | 'LeetCode' | 'LinkedIn';
  url: string;
  description: string;
  handle: string;
}

export interface JourneyMilestone {
  title: string;
  stage: string;
  description: string;
  status: 'completed' | 'current' | 'upcoming';
  tag: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: 'in-progress' | 'completed';
}

export interface QualityItem {
  title: string;
  description: string;
  highlight: string;
}

export const PERSONAL_INFO = {
  name: "Budda Bhumika",
  shortName: "Bhumika",
  role: "B.Tech CSE Student | Java & DSA Enthusiast | Aspiring Software Professional",
  college: "GMR Institute of Technology",
  degree: "B.Tech in Computer Science and Engineering",
  currentYear: "2nd Year",
  graduationYear: "2029",
  academicYears: "2025 – 2029",
  cgpa: "8.7",
  email: "bhumikabudda008@gmail.com",
  // Path to local resume PDF in public folder (e.g. /resume.pdf).
  // Bhumika can drop her resume into /public/resume.pdf to activate direct download.
  resumePath: "/resume.pdf",
  resumeAvailable: false, // Set to true once resume.pdf is added in public/
  
  hero: {
    greeting: "Hi, I'm Bhumika.",
    typingRoles: [
      "B.Tech CSE Student",
      "Java Learner",
      "DSA Enthusiast",
      "Problem Solver",
      "Always Learning"
    ],
    tagline: "Learning. Practicing. Improving. Building toward the real world.",
    codeSnippet: `class Bhumika {
    learn();
    practice();
    improve();
    build();
}`
  },

  about: {
    main: "I am a second-year B.Tech Computer Science and Engineering student with a strong interest in Java, Data Structures and Algorithms, and problem-solving. I am continuously working on improving my technical and programming skills through practice and hands-on learning. I am always eager to explore new opportunities, learn new technologies, and gain practical experience. I am looking forward to applying my skills in real-world projects while learning and growing as a software professional.",
    careerTagline: "Exploring • Learning • Building",
    careerStatement: "Currently exploring different areas of software development while strengthening my fundamentals in programming, DSA, and problem-solving.",
    corePhilosophy: "A student who always tries to improve her skills, gain real-world problem-solving experience, and work hard toward becoming a better software professional."
  },

  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/BuddaBhumika",
      description: "Where I build and maintain my coding work.",
      handle: "BuddaBhumika"
    },
    {
      platform: "LeetCode",
      url: "https://leetcode.com/u/25_0531/",
      description: "Where I practice problem-solving and DSA.",
      handle: "25_0531"
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/budda-bhumika",
      description: "Where I connect, learn, and share my professional journey.",
      handle: "budda-bhumika"
    }
  ] as SocialLink[],

  skills: [
    {
      name: "Java",
      category: "Programming",
      status: "Learning",
      description: "Core syntax, OOP principles, methods, memory concepts, and foundational practices."
    },
    {
      name: "Data Structures & Algorithms",
      category: "Core",
      status: "Practicing",
      description: "Linear & non-linear data structures, time-space complexities, and problem-solving patterns."
    },
    {
      name: "Problem Solving",
      category: "Core",
      status: "Growing",
      description: "Breaking down programmatic challenges logically and implementing optimal solutions."
    },
    {
      name: "Git",
      category: "Tools & Technologies",
      status: "Practicing",
      description: "Version control, branching, committing, and tracking code revisions."
    },
    {
      name: "GitHub",
      category: "Tools & Technologies",
      status: "Practicing",
      description: "Remote code repository hosting, open collaboration, and version management."
    },
    {
      name: "HTML",
      category: "Tools & Technologies",
      status: "Learning",
      description: "Semantic web page structuring and foundational markup understanding."
    },
    {
      name: "VS Code",
      category: "Tools & Technologies",
      status: "Practicing",
      description: "Primary development environment, extensions, debugging, and productivity workflows."
    }
  ] as SkillItem[],

  currentlyLearning: [
    {
      title: "Java",
      subtitle: "Language Fundamentals",
      description: "Strengthening programming and object-oriented programming fundamentals.",
      focusAreas: ["OOP concepts (Inheritance, Polymorphism, Encapsulation)", "Clean class architecture", "Java standard library"]
    },
    {
      title: "Data Structures & Algorithms",
      subtitle: "Algorithmic Thinking",
      description: "Practicing core data structures, algorithms, patterns, and problem-solving.",
      focusAreas: ["Arrays, Strings, Linked Lists", "Recursion & Searching", "Time and space complexity analysis"]
    },
    {
      title: "Problem Solving",
      subtitle: "Analytical Approach",
      description: "Learning to approach programming problems logically and efficiently.",
      focusAreas: ["Pattern identification", "Edge-case handling", "Consistent LeetCode problem solving"]
    }
  ] as LearningCard[],

  journeyMilestones: [
    {
      title: "Foundation",
      stage: "Step 1",
      description: "Building academic fundamentals in Computer Science and mathematical logic at GMRIT.",
      status: "completed",
      tag: "Academic Base"
    },
    {
      title: "Java Programming",
      stage: "Step 2",
      description: "Diving into Java syntax, Object-Oriented concepts, and structured application development.",
      status: "completed",
      tag: "Core Language"
    },
    {
      title: "Data Structures & Algorithms",
      stage: "Step 3",
      description: "Learning arrays, lists, stacks, queues, trees, recursion, and algorithm efficiency.",
      status: "current",
      tag: "In Progress"
    },
    {
      title: "Problem Solving",
      stage: "Step 4",
      description: "Practicing algorithmic thinking and solving challenges consistently on LeetCode.",
      status: "current",
      tag: "In Progress"
    },
    {
      title: "First Projects",
      stage: "Step 5",
      description: "Turning conceptual Java & algorithmic knowledge into concrete, functional software applications.",
      status: "upcoming",
      tag: "Next Step"
    },
    {
      title: "Real-world Experience",
      stage: "Step 6",
      description: "Contributing to collaborative software engineering, internships, and production-level solutions.",
      status: "upcoming",
      tag: "Future Goal"
    }
  ] as JourneyMilestone[],

  beyondCode: [
    {
      title: "Curious",
      description: "Always willing to learn something new.",
      highlight: "Inquisitive Mindset"
    },
    {
      title: "Consistent",
      description: "Believes improvement comes from regular practice.",
      highlight: "Daily Practice"
    },
    {
      title: "Hardworking",
      description: "Willing to put in the effort to reach long-term goals.",
      highlight: "Commitment"
    },
    {
      title: "Growth-minded",
      description: "Always looking for ways to improve.",
      highlight: "Continuous Learning"
    }
  ] as QualityItem[],

  projectsSection: {
    title: "From Learning to Building",
    subtitle: "Building My First Projects",
    description: "Every project starts with learning. I am currently strengthening my Java, DSA, and problem-solving skills so I can turn what I learn into meaningful real-world projects.",
    comingSoonNote: "Currently learning, practicing, and preparing to turn ideas into meaningful projects.",
    cardTitle: "First project loading...",
    cardSubtitle: "Learning today. Building tomorrow.",
    // Future projects array: empty right now as requested.
    // When Bhumika creates a project, she can simply append it here!
    completedProjects: [] as ProjectItem[]
  }
};
