import type { SkillCategory, Project, TimelineItem, SocialLink } from '../types';

export const skillsData: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', percentage: 95 },
      { name: 'TypeScript', percentage: 90 },
      { name: 'Next.js', percentage: 88 },
      { name: 'JavaScript', percentage: 95 },
      { name: 'HTML/CSS', percentage: 98 },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', percentage: 85 },
      { name: 'Express', percentage: 85 },
      { name: 'REST APIs', percentage: 92 },
      { name: 'GraphQL', percentage: 80 },
    ]
  },
  {
    title: 'Base de datos',
    skills: [
      { name: 'PostgreSQL', percentage: 82 },
      { name: 'MongoDB', percentage: 80 },
      { name: 'MySQL', percentage: 78 },
      { name: 'Prisma ORM', percentage: 80 },
    ]
  },
  {
    title: 'Cloud · AWS',
    skills: [
      { name: 'AWS', percentage: 72 },
      { name: 'Vercel', percentage: 90 },
      { name: 'Supabase', percentage: 78 },
      { name: 'Docker', percentage: 75 },
    ]
  },
  {
    title: 'Testing · Tools',
    skills: [
      { name: 'Jest / RTL', percentage: 88 },
      { name: 'Git / GitHub', percentage: 95 },
      { name: 'Storybook', percentage: 82 },
      { name: 'CI/CD', percentage: 78 },
    ]
  },
  {
    title: 'Metodologías',
    skills: [
      { name: 'Scrum', percentage: 92 },
      { name: 'SOLID', percentage: 90 },
      { name: 'Kanban', percentage: 85 },
      { name: 'Code Review', percentage: 88 },
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'PetScoutly',
    description: 'Plataforma web para recuperación de mascotas perdidas y gestión de adopciones, con notificaciones push en tiempo real y UI responsiva.',
    stack: ['Next.js', 'React', 'PostgreSQL', 'Prisma', 'OneSignal', 'Vercel'],
    demoUrl: 'https://petscoutly.app/',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Bolivia API',
    description: 'API REST pública con información de destinos turísticos en Bolivia. Panel admin en React + TypeScript y documentación OpenAPI con Docusaurus.',
    stack: ['Node.js', 'Express', 'React', 'TypeScript', 'PostgreSQL', 'Supabase'],
    demoUrl: '#',
    githubUrl: 'https://github.com/jujomago/Bolivia-Places-API'
  },
  {
    id: 3,
    title: 'SISCARD',
    description: 'Solución de gestión de identidad segura con frontend React y servidor de autenticación OpenID en Node.js / Express.',
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'OpenID', 'Material UI'],
    demoUrl: '#',
    githubUrl: '#'
  }
];

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    date: 'Inicios · 2011–2015',
    title: 'Freelance Fullstack',
    description: 'Proyectos web end-to-end: WordPress, PHP (Laravel, CodeIgniter), MySQL, JS. Primeros pasos con React y APIs REST.',
    position: 'left'
  },
  {
    id: 2,
    date: '2015 · Primer rol formal',
    title: 'Fullstack Developer',
    description: 'Plataforma omnicanal de atención al cliente. Stack MEAN: AngularJS, Node.js, Express, MongoDB. Scrum, testing con Mocha.',
    position: 'right'
  },
  {
    id: 3,
    date: '2016 · Salto internacional',
    title: 'Frontend Developer',
    description: 'Proyectos para empresas de EE.UU. en entretenimiento, empleo y gestión de activos. React, TypeScript, Redux Toolkit, GraphQL, Material UI.',
    position: 'left'
  },
  {
    id: 4,
    date: 'Madurez técnica',
    title: 'Release Manager & Tech Lead',
    description: 'Gestión de CI/CD con Jenkins y GitLab. Liderazgo técnico, code reviews, Storybook, Jest, Enzyme y TestCafe.',
    position: 'right'
  },
  {
    id: 5,
    date: '2025 · Presente',
    title: 'Senior Fullstack · Proyectos propios',
    description: 'Plataformas propias con Next.js, PostgreSQL, Prisma y Vercel. Integración de IA en flujos de desarrollo con Vibe Coding.',
    position: 'left'
  }
];

export const socialLinksData: SocialLink[] = [
  {
    icon: 'in',
    label: 'linkedin.com/in/jujomago',
    url: 'https://linkedin.com/in/jujomago'
  },
  {
    icon: '@',
    label: 'email',
    url: 'mailto:jujomago@gmail.com'
  },
  {
    icon: 'gh',
    label: 'github.com/jujomago',
    url: 'https://github.com/jujomago'
  }
];

export const marqueeItems = [
  "React", "TypeScript", "Next.js", "Node.js", "PostgreSQL", "MongoDB",
  "GraphQL", "REST APIs", "AWS", "Docker", "Jest", "Scrum", "SOLID",
  "Storybook", "Prisma", "Vercel"
];

export const typingPhrases = {
  es: [
    "React · TypeScript · Next.js · Node.js",
    "Más de 10 años construyendo para la web.",
    "Del backend al frontend, una sola visión.",
    "Autodidacta. Curioso. Apasionado del código."
  ],
  en: [
    "React · TypeScript · Next.js · Node.js",
    "10+ years building for the web.",
    "From backend to frontend, one vision.",
    "Self-taught. Curious. Passionate about code."
  ]
};
