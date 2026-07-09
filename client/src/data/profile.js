// Edit this file with your real info — everything on the page is driven from here.
export const profile = {
  name: 'Your Name',
  title: 'Full-Stack Developer',
  tagline: 'I build fast, reliable web apps end to end — from database to UI.',
  location: 'City, Country',
  email: 'you@example.com',
  resumeUrl: '/resume.pdf', // drop a resume.pdf into client/public/
  socials: [
    { label: 'GitHub', url: 'https://github.com/yourusername' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
  ],
  about:
    "I'm a developer who enjoys turning ideas into working software. Replace this paragraph with a couple of sentences about your background, what you're good at, and what you're looking for.",
  skills: [
    'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB',
    'TypeScript', 'Tailwind CSS', 'Git', 'REST APIs', 'SQL',
  ],
  experience: [
    {
      role: 'Job Title',
      company: 'Company Name',
      period: '2023 — Present',
      description: 'One or two lines about what you did and the impact you had.',
    },
    {
      role: 'Previous Job Title',
      company: 'Previous Company',
      period: '2021 — 2023',
      description: 'One or two lines about what you did and the impact you had.',
    },
  ],
  education: [
    {
      school: 'University / School Name',
      degree: 'Degree, Field of Study',
      period: '2018 — 2022',
    },
  ],
}

// Fallback projects shown if the API/database has none yet.
export const fallbackProjects = [
  {
    title: 'Sample Project',
    description: 'A short description of what this project does and the problem it solves.',
    tech: ['React', 'Node.js', 'MongoDB'],
    link: 'https://github.com/yourusername/sample-project',
  },
]
