import { Project, WorkExperience, Education, Skill } from './types';

export const skills: Skill[] = [
  { name: 'React', category: 'frontend', level: 'expert' },
  { name: 'Next.js', category: 'frontend', level: 'expert' },
  { name: 'TypeScript', category: 'frontend', level: 'advanced' },
  { name: 'Tailwind CSS', category: 'frontend', level: 'expert' },
  { name: 'JavaScript', category: 'frontend', level: 'expert' },
  { name: 'HTML5', category: 'frontend', level: 'expert' },
  { name: 'CSS3', category: 'frontend', level: 'expert' },
  // Hi! This is my portfolio website. 
  { name: 'Node.js', category: 'backend', level: 'advanced' },
  { name: 'Express', category: 'backend', level: 'advanced' },
  { name: 'PostgreSQL', category: 'backend', level: 'intermediate' },
  { name: 'REST APIs', category: 'backend', level: 'advanced' },
  { name: 'GraphQL', category: 'backend', level: 'intermediate' },
  { name: 'Git', category: 'tools', level: 'advanced' },
  { name: 'Docker', category: 'tools', level: 'intermediate' },
  { name: 'AWS', category: 'tools', level: 'intermediate' },
  { name: 'AI', category: 'tools', level: 'advanced' },
  { name: 'Cursor', category: 'tools', level: 'advanced' },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Anchor',
    description: 'Presentation of concept habit tracking web application',
    longDescription: 'Habit tracking web application that allows users to track their habits and goals. It is a simple and easy to use application that allows users to track their habits and goals. It is a simple and easy to use application that allows users to track their habits and goals.',
    category: 'Web Application',
    technologies: ['React', 'JavaScript', 'Flask', 'PostgreSQL'],
    images: [
      '/anchor_1.png',
      '/anchor_2.png',
      '/anchor_3.png',
      '/anchor_4.png',
    ],
    featured: true,
    liveUrl: 'https://anchor-1x5j.onrender.com/',
    githubUrl: 'https://github.com/MumbisDev/Anchor',
    challenges: 'Creating real time habit tracking and goal tracking features. Designing the UI/UX to be simple and look modern. First real web app I ever made.' , 
    solutions: "Using pagination to load habits an goals. Polling real time updates for the habit meter.",
    year: 2024,
  },
  {
    id: '2',
    title: 'LeadSender',
    description: 'An application that allows you to automatically send tens, hundreds, or even thousands of emails by parsing spreadsheet data and inserting data into a template.',
    longDescription: 'A robust but simple application allowing complete automation of lead outreach, at the moment it is primarily used with propwire exports for real estate leads. However, template functionality is planned for other spreadsheet exports.',
    category: 'Web Application',
    technologies: ['React', 'Next.js', 'Tailwind CSS 4', 'Shadcn UI', 'Express', 'Medium Editor', 'Supabase', 'SendGrid', 'Vercel'],
    images: [
      '/leadsender_1.png',
      '/leadsender_2.png',
      '/leadsender_3.png',
      '/leadsender_4.png',
    ],
    featured: true,
    liveUrl: 'https://lead-sender-pi.vercel.app/',
    challenges: 'Correctly parsing the spreadsheet data and inserting it into the template.',
    solutions: 'Normalizing header row names, propwire export auto detection, validation for required fields.',
    year: 2025,
  },
  {
    id: '3',
    title: 'Portfolio Website',
    description: 'Personal portfolio website with modern design',
    longDescription: 'A minimalist portfolio website showcasing my work and skills. Built with Next.js and Tailwind CSS, featuring smooth animations, dark mode support, and optimized performance.',
    category: 'Website',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React'],
    images: [
      '/portfolio.png',
      '/portfolio_1.png',
      '/portfolio_3.png',
      '/portfolio_4.png',
    ],
    featured: true,
    githubUrl: 'https://github.com/MumbisDev/MumbisDev.github.io',
    year: 2025,
  },
];

export const workExperience: WorkExperience[] = [
  {
    id: '1',
    company: 'Piedmont Shopper',
    position: 'Technical Support Specialist',
    startDate: '2018-01',
    endDate: '2023-01',
    description: [
      'Performed setup and continuous troubleshooting on computer hardware and software for employees.',
      'Engaged in network maintenance regularly by creating backups and monitoring traffic.',
      'Configured company server for SSH and FTP access, allowing employees to access files anywhere securely.',
    ],
    technologies: ['Linux', 'SSH', 'MacOS', 'Windows', 'Administration'],
  },
  {
    id: '2',
    company: 'Caesars Entertainment',
    position: 'Blackjack Dealer',
    startDate: '2023-07',
    endDate: '2023-11',
    description: [
      'Maintained and carried out blackjack games in a fast-paced environment by utilizing quick math and multitasking.',
      'Secured and managed a rack of cheques at all times and handled large quantities of cash.',
      'Positively interacted with customers no matter their behavior towards me or other people by following standard procedures.'
    ],
    technologies: ['Blackjack', 'Math', 'Multitasking', 'Cash Handling', 'Customer Service'],
  },
];

export const education: Education[] = [
  {
    id: '1',
    institution: 'App Academy',
    degree: 'Certification',
    field: 'Full Stack Web Development',
    startDate: '2024-08',
    endDate: '2025-01',
    description: 'Comprehensive course covering modern web development technologies and best practices.',
  },
];

export const personalInfo = {
  name: 'Z. Oliver Crumpton',
  title: 'Full Stack Developer',
  bio: 'After completing App Academy\'s coding bootcamp, I\'ve been passionate about learning to code and building modern web applications. I leverage Cursor and AI tools to create efficient and high-quality applications that solve real-world problems.',
  email: 'zillcrumpton@gmail.com',
  location: 'Danville, VA',
  resumeUrl: '/Zildjian_Crumpton.pdf',
  socialLinks: {
    github: 'https://github.com/MumbisDev',
    linkedin: 'https://linkedin.com/in/oliver-crumpton',
    x: 'https://x.com/mumbisdev',
  },
};

