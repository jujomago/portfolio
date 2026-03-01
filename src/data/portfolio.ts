import type { SkillCategory, Project, TimelineItem, SocialLink } from '../types';

export const skillsData: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', percentage: 95 },
      { name: 'TypeScript', percentage: 90 },
      { name: 'Next.js', percentage: 80 },
      { name: 'JavaScript', percentage: 95 },
      { name: 'HTML/CSS', percentage: 98 },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', percentage: 70 },
      { name: 'Express', percentage: 80 },
      { name: 'REST APIs', percentage: 80 },
      { name: 'GraphQL', percentage: 70 },
      { name: 'Socket.io', percentage: 40 },
    ]
  },
  {
    title: 'Base de datos',
    skills: [
      { name: 'PostgreSQL', percentage: 82 },
      { name: 'MongoDB', percentage: 80 },
      { name: 'MySQL', percentage: 90 },
      { name: 'Prisma ORM', percentage: 80 },
      { name: 'Firebase', percentage: 60 },
    ]
  },
  {
    title: 'Cloud · DevOps',
    skills: [
      { name: 'AWS', percentage: 70 },
      { name: 'Vercel', percentage: 80 },
      { name: 'Supabase', percentage: 70 },
      { name: 'Docker', percentage: 75 },
      { name: 'CI/CD', percentage: 78 },
    ]
  },
  {
    title: 'AI Development',
    skills: [
      { name: 'Claude (Sonnet/Opus)', percentage: 95 },
      { name: 'Gemini (Flash/CLI)', percentage: 90 },
      { name: 'OpenAI Codex', percentage: 85 },
      { name: 'Cursor / Windsurf', percentage: 95 },
      { name: 'v0 / Bolt / Lovable', percentage: 92 },
    ]
  },
  {
    title: 'Testing · Metodologías',
    skills: [
      { name: 'Jest / RTL', percentage: 80 },
      { name: 'Git / GitHub', percentage: 95 },
      { name: 'Storybook', percentage: 80 },
      { name: 'Scrum', percentage: 92 },
      { name: 'SOLID', percentage: 90 },
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'PetScoutly',
    description: 'Plataforma web para recuperación de mascotas perdidas y gestión de adopciones, con notificaciones push en tiempo real y UI responsiva.',
    stack: ['Next.js', 'React', 'PostgreSQL', 'Prisma', 'OneSignal', 'Vercel'],
    images: [
      'https://images.unsplash.com/photo-1544568100-847a948585b9?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&h=400&fit=crop',
    ],
    demoUrl: 'https://petscoutly.app/',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Bolivia REST API',
    description: 'API REST pública con información de destinos turísticos en Bolivia. Panel admin en React + TypeScript y documentación OpenAPI con Docusaurus.',
    stack: ['Node.js', 'Express', 'React', 'TypeScript', 'PostgreSQL', 'Supabase'],
    images: [
      'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=600&h=400&fit=crop',
    ],
    demoUrl: 'https://bolivia-places-api.vercel.app/reference',
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
  "Storybook", "Prisma", "Vercel", "Claude", "Gemini", "Cursor", "Windsurf",
  "v0", "Bolt.new", "Lovable", "Supabase", "CI/CD"
];


