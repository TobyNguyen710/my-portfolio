// Edit this file with your real info — everything on the page is driven from here.
export const profile = {
  name: 'Toby Nguyen',
  title: 'Computer Science Student',
  tagline:
    'Computer Science student graduating June 2026 with hands-on experience in software development, system troubleshooting, and web development.',
  location: 'Calgary, AB, Canada',
  phone: '+1 (902) 916-6193',
  email: 'ductoby2003@gmail.com',
  resumeUrl: '/resume.pdf', // drop a resume.pdf into client/public/
  socials: [
    { label: 'GitHub', url: 'https://github.com/TobyNguyen710' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/toby-nguyen2003/' },
  ],
  about:
    'Computer Science student graduating in June 2026 with hands-on experience in software development, system troubleshooting, and web development. Strong problem-solver with experience developing technical solutions and collaborating on projects, seeking opportunities to contribute and grow in a professional technology environment.',
  skillGroups: [
    {
      category: 'Languages',
      skills: ['Python', 'Java', 'JavaScript', 'C++', 'C#', 'SQL'],
    },
    {
      category: 'Computer Science Fundamentals',
      skills: ['Object-Oriented Design', 'Algorithms', 'Data Structures', 'Operating Systems'],
    },
    {
      category: 'Software Engineering',
      skills: ['Agile Development', 'Version Control (Git)', 'Unit Testing', 'Code Optimization'],
    },
    {
      category: 'Tools & Platforms',
      skills: ['GitHub', 'Azure DevOps', 'Microsoft Office', 'SharePoint'],
    },
  ],
  experience: [
    {
      role: 'Front-end Developer',
      company: 'Defitkit',
      period: 'May 2025 — August 2025',
      location: 'Vietnam (Remote) · Based in Calgary, AB',
      bullets: [
        'Developed and maintained the front-end of the Defitkit website using TypeScript, troubleshooting UI issues, debugging client-side errors, and ensuring cross-browser compatibility to provide a stable user experience.',
        'Assisted in implementing a secure login system using Cloudflare, configuring basic security settings and supporting website protection against unauthorized access and common web threats.',
      ],
    },
    {
      role: 'Sales Associate and Technical Support',
      company: 'Bee House Canada Inc.',
      period: 'May 2023 — Aug 2023',
      location: 'Charlottetown, PE',
      bullets: [
        'Assisted in configuring and securing Point-of-Sale (POS) systems, ensuring reliable data flow and integrity.',
        'Generated actionable insights from sales data to optimize inventory management and reduce waste.',
        'Supported digital transformation initiatives and basic troubleshooting for software and hardware systems.',
      ],
    },
  ],
  education: [
    {
      school: 'University of British Columbia',
      degree: 'Bachelor of Science (Major: Computer Science)',
      period: 'Sep 2021 — June 2026',
      details: 'GPA: 3.3',
      bullets: [
        'Relevant Coursework: Data Structures & Algorithms, Operating Systems, Software Engineering, Object-Oriented Programming',
        "Dean's List (2023, 2024)",
      ],
    },
  ],
  additional: [
    {
      title: 'Math Tutor',
      period: '2019 — 2021',
      description: 'Tutored high school students in advanced mathematics and logical problem-solving.',
    },
  ],
}

// Fallback projects shown if the API/database has none yet.
export const fallbackProjects = [
  {
    title: 'SoccerNet AI',
    period: 'January 2026 — April 2026',
    location: 'Kelowna, BC',
    description:
      'GPU-accelerated computer vision pipeline in Python that automatically recognizes jersey numbers from soccer broadcast footage using the SoccerNet Jersey-2023 dataset.',
    bullets: [
      'Built a GPU-accelerated computer vision pipeline in Python to automatically recognize jersey numbers from soccer broadcast footage using the SoccerNet Jersey-2023 dataset.',
      'Integrated YOLOv8 pose estimation to isolate player torso regions, and applied NAFNet image restoration (denoising, deblurring, super-resolution) to improve legibility of low-quality frames.',
      'Implemented a dual-backend legibility classifier combining a fine-tuned ResNet34 model with a heuristic fallback, and used a Groq-hosted vision LLM to perform final jersey number extraction with confidence scoring.',
    ],
    tech: ['Python', 'YOLOv8', 'ResNet34', 'Computer Vision'],
    link: 'https://github.com/TobyNguyen710/SoccerNet-Weights-Malding',
  },
  {
    title: 'Digital Work Artifact Mining System',
    period: 'September 2025 — April 2026',
    location: 'Kelowna, BC',
    description:
      'Python-based desktop application that parses zipped project folders and extracts structured insights from code, documents, and media files.',
    bullets: [
      'Developed a Python-based desktop application to parse zipped project folders and extract structured insights from code, documents, and media files.',
      'Implemented file validation, error handling, duplicate detection, and user consent controls to ensure secure and reliable data processing.',
      'Designed a logging-based service layer to store, retrieve, and manage project metadata, skills, and resume information.',
    ],
    tech: ['Python'],
    link: 'https://github.com/COSC-499-W2025/capstone-project-team-10',
  },
  {
    title: 'Platformer Game (Aurelia)',
    period: 'January 2025 — April 2025',
    location: 'Kelowna, BC',
    description: 'A functional and fun platformer game built with Unity and C#.',
    bullets: [
      'Developed functional and fun platformer game using Unity and C#.',
      'Implemented modular player state machine (idle/run/jump/attack).',
      'Designed enemy AI with patrol/chase/attack states.',
      'Built hit detection and combat feedback system.',
    ],
    tech: ['Unity', 'C#'],
    link: 'https://github.com/notbaopham/Aurelia',
    secondaryLink: { label: 'Play on web', url: 'https://dawnlurkers.itch.io/aurelia' },
  },
  {
    title: 'Garden/Orchard Management App (Gardenly)',
    period: 'September 2024 — December 2024',
    location: 'Kelowna, BC',
    description: 'Real-time garden data synchronization app built with Android Studio and Firebase.',
    bullets: [
      'Developed real-time garden data synchronization for a Garden Managing app using Android Studio and Firebase.',
      'Implemented user authentication.',
      'Designed and deployed database architecture for gardens and user information.',
    ],
    tech: ['Android Studio', 'Firebase'],
    link: 'https://github.com/P-nguye/COSC341_Project',
  },
  {
    title: 'Discord Clone (Accord)',
    period: 'January 2024 — April 2024',
    location: 'Kelowna, BC',
    description: 'Real-time messaging and data synchronization app modeled after Discord.',
    bullets: [
      'Developed and optimized real-time messaging and data synchronization for a Discord clone app using React and MongoDB.',
      'Implemented real-time communication and user authentication.',
      'Designed and deployed cloud-hosted database architecture for chat history storage.',
    ],
    tech: ['React', 'MongoDB'],
    link: 'https://github.com/ColinLefter/Accord',
  },
]
