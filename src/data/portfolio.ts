import type { SkillCategory, Project, Lab, TimelineItem, SocialLink } from '../types';

export const skillsData: SkillCategory[] = [
  {
    title: { es: 'Frontend', en: 'Frontend' },
    skills: [
      { name: 'React', percentage: 95 },
      { name: 'TypeScript', percentage: 90 },
      { name: 'Next.js', percentage: 80 },
      { name: 'JavaScript', percentage: 95 },
      { name: 'HTML/CSS', percentage: 98 },
    ]
  },
  {
    title: { es: 'Backend', en: 'Backend' },
    skills: [
      { name: 'Node.js', percentage: 70 },
      { name: 'Express', percentage: 80 },
      { name: 'REST APIs', percentage: 80 },
      { name: 'GraphQL', percentage: 70 },
      { name: 'Socket.io', percentage: 40 },
    ]
  },
  {
    title: { es: 'Base de datos', en: 'Databases' },
    skills: [
      { name: 'PostgreSQL', percentage: 82 },
      { name: 'MongoDB', percentage: 80 },
      { name: 'MySQL', percentage: 90 },
      { name: 'Prisma ORM', percentage: 80 },
      { name: 'Firebase', percentage: 60 },
    ]
  },
  {
    title: { es: 'Cloud · DevOps', en: 'Cloud · DevOps' },
    skills: [
      { name: 'AWS', percentage: 70 },
      { name: 'Vercel', percentage: 80 },
      { name: 'Supabase', percentage: 70 },
      { name: 'Docker', percentage: 75 },
      { name: 'CI/CD', percentage: 78 },
    ]
  },
  {
    title: { es: 'AI Development', en: 'AI Development' },
    skills: [
      { name: 'Claude (Sonnet/Opus)', percentage: 95 },
      { name: 'Gemini (Flash/CLI)', percentage: 90 },
      { name: 'OpenAI Codex', percentage: 85 },
      { name: 'Cursor / Windsurf', percentage: 95 },
      { name: 'v0 / Bolt / Lovable', percentage: 92 },
    ]
  },
  {
    title: { es: 'Testing · Metodologías', en: 'Testing · Methods' },
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
    title: { es: 'PetScoutly', en: 'PetScoutly' },
    description: {
      es: 'Plataforma PWA para el reporte inmediato de mascotas perdidas y gestión de adopciones con alertas en tiempo real. La solución ofrece una interfaz responsiva y notificaciones push críticas, optimizando los tiempos de respuesta y centralizando el bienestar animal en una web app.',
      en: 'A responsive PWA for instant lost pet reporting and adoption management featuring real-time push notifications. This solution streamlines animal rescue by connecting communities through a high-performance web interface, ensuring fast alerts and organized pet recovery workflows.'
    },
    stack: ['Next.js', 'React', 'PostgreSQL', 'Prisma', 'OneSignal', 'Vercel'],
    images: [
      '/projects/petscoutly/screen1.webp',
      '/projects/petscoutly/screen2.webp',
      '/projects/petscoutly/screen3.webp',
      '/projects/petscoutly/screen4.webp',
    ],
    demoUrl: 'https://petscoutly.app/',
    githubUrl: '#'
  },
  {
    id: 2,
    title: { es: 'Bolivia REST API', en: 'Bolivia REST API' },
    description: {
      es: 'API REST pública de destinos turísticos en Bolivia. Provee datos estructurados sobre rutas y locaciones nacionales, contando con documentación interactiva basada en el estándar OpenAPI y Scalar. Facilita la integración de desarrolladores mediante un cliente de pruebas dinámico.',
      en: 'Public REST API for Bolivia’s tourist destinations, providing structured data on travel routes and locations. It features modern, interactive OpenAPI documentation powered by Scalar, offering a seamless developer experience with a built-in testing playground for all endpoints.'
    },
    stack: ['Node.js', 'Express', 'React', 'TypeScript', 'PostgreSQL', 'Supabase'],
    images: [
      '/projects/bolivia-api/screen1.webp',
      '/projects/bolivia-api/screen2.webp',
      '/projects/bolivia-api/screen3.webp',
    ],
    demoUrl: 'https://bolivia-places-api.vercel.app/reference',
    githubUrl: 'https://github.com/jujomago/Bolivia-Places-API'
  },
  {
    id: 3,
    title: { es: 'Vet REST API', en: 'Vet REST API' },
    description: {
      es: 'API REST robusta para la gestión de clínicas veterinarias. Incluye autenticación JWT, gestión de pacientes (mascotas), sistema de citas y documentación interactiva con Swagger. Diseñada bajo una arquitectura MVC escalable.',
      en: 'A robust REST API for veterinary clinic management. It includes JWT authentication, patient (pet) management, an appointment system, and interactive Swagger documentation. Designed with a scalable MVC architecture.'
    },
    stack: ['Node.js', 'Express', 'TypeScript', 'Prisma', 'PostgreSQL', 'Swagger', 'Zod'],
    images: ['/projects/vet-api/swagger.png'],
    demoUrl: 'https://api-vet-urrt.onrender.com/api-docs/',
    githubUrl: 'https://github.com/jujomago/api-vet'
  },
  {
    id: 4,
    title: { es: 'RBAC Admin System', en: 'RBAC Admin System' },
    description: {
      es: 'Plataforma administrativa avanzada para la gestión de control de acceso basado en roles (RBAC). Permite la administración granular de usuarios, creación dinámica de roles con validación de unicidad en tiempo real y asignación de permisos con una interfaz minimalista y funcional.',
      en: 'An advanced administrative platform for Role-Based Access Control (RBAC) management. Features granular user administration, dynamic role creation with real-time uniqueness validation, and permission assignment within a minimalist and functional interface.'
    },
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'React Hook Form', 'LocalStorage API'],
    images: ['/projects/siscard/preview.png'],
    demoUrl: '#',
    githubUrl: 'https://github.com/jujomago/users_roles_mngmt'
  }
];

export const labsData: Lab[] = [
  {
    id: 1,
    title: { es: 'Editor de Pixel Art', en: 'Pixel Art Editor' },
    description: {
      es: 'Editor de arte pixel con matriz 20x20, sistema de colores numerados, selección múltiple, atajos de teclado, plantillas predefinidas y exportación a PNG/JSON. Construido con JavaScript vanilla, HTML5, CSS3 y Canvas API.',
      en: 'Pixel art editor with 20x20 grid, numbered color system, multi-selection, keyboard shortcuts, predefined templates and PNG/JSON export. Built with vanilla JavaScript, HTML5, CSS3 and Canvas API.'
    },
    githubUrl: 'https://github.com/jujomago/pixelArtEditor',
    image: 'https://raw.githubusercontent.com/jujomago/pixelArtEditor/main/screenshot.png',
    demoUrl: 'https://jujomago.github.io/pixelArtEditor/',
    tags: ['JavaScript ES6+', 'HTML5', 'CSS3', 'Canvas API']
  },
  {
    id: 2,
    title: { es: 'Lista Pokémon Virtualizada', en: 'Pokemon Virtualized List' },
    description: {
      es: 'Aplicación React con TypeScript que implementa autenticación y visualización de datos de la PokéAPI con más de 2000 elementos. Usa virtualización para optimizar el rendimiento.',
      en: 'React TypeScript application implementing authentication and PokéAPI data visualization with over 2000 elements. Uses virtualization for performance optimization.'
    },
    githubUrl: 'https://github.com/jujomago/pokemon-lista',
    image: '/labs/pokelista.png',
    demoUrl: 'https://jujomago.github.io/pokemon-lista/',
    tags: ['React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Virtualization']
  },
  {
    id: 3,
    title: { es: 'Interfaz Mobile con Swipe Gestures', en: 'Mobile Interface with Swipe Gestures' },
    description: {
      es: 'Layout simple de tabs y páginas que funcionan con gestos de swipe. Interfaz móvil táctil con navegación intuitiva mediante gestos.',
      en: 'Simple layout of tabs and pages that work with swipe gestures. Touch mobile interface with intuitive gesture navigation.'
    },
    githubUrl: 'https://github.com/jujomago/CustomMobileInterfaz',
    demoUrl: 'https://jujomago.github.io/CustomMobileInterfaz/gestures_jt.html',
    image: '/labs/mobile.png',
    tags: ['Mobile UI', 'Touch Gestures', 'JavaScript', 'CSS3', 'HTML5']
  }
];

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    date: { es: 'Inicios · 2011–2015', en: 'Early years · 2011–2015' },
    title: { es: 'Freelance Fullstack', en: 'Freelance Fullstack' },
    description: {
      es: 'Proyectos web end-to-end: WordPress, PHP (Laravel, CodeIgniter), MySQL, JS. Primeros pasos con React y desarrollo de APIs REST.',
      en: 'End-to-end web projects: WordPress, PHP (Laravel, CodeIgniter), MySQL, JS. First steps with React and REST APIs development.'
    },
    position: 'left'
  },
  {
    id: 2,
    date: { es: '2015 · Primer rol formal', en: '2015 · First formal role' },
    title: { es: 'Fullstack Developer', en: 'Fullstack Developer' },
    description: {
      es: 'Plataforma omnicanal de atención al cliente. Stack MEAN: AngularJS, Node.js, Express, MongoDB. Scrum, testing con Mocha.',
      en: 'Omnichannel customer service platform. MEAN stack: AngularJS, Node.js, Express, MongoDB. Scrum, mocha testing.'
    },
    position: 'right'
  },
  {
    id: 3,
    date: { es: '2016 · Salto internacional', en: '2016 · International leap' },
    title: { es: 'Frontend Developer', en: 'Frontend Developer' },
    description: {
      es: 'Proyectos para empresas de EE.UU. en sectores de entretenimiento, empleo y gestión de activos. React, TypeScript, Redux Toolkit, GraphQL, Material UI.',
      en: 'Projects for US companies in entertainment, jobs, and asset management sectors. React, TypeScript, Redux Toolkit, GraphQL, Material UI.'
    },
    position: 'left'
  },
  {
    id: 4,
    date: { es: 'Madurez técnica', en: 'Technical maturity' },
    title: { es: 'Release Manager & Tech Lead', en: 'Release Manager & Tech Lead' },
    description: {
      es: 'Gestión de CI/CD con Jenkins y GitLab. Liderazgo técnico, code reviews, Storybook, Jest, Enzyme y TestCafe.',
      en: 'CI/CD management with Jenkins and GitLab. Technical leadership, code reviews, Storybook, Jest, Enzyme and TestCafe.'
    },
    position: 'right'
  },
  {
    id: 5,
    date: { es: '2025 · Presente', en: '2025 · Present' },
    title: { es: 'Senior Fullstack · Proyectos propios', en: 'Senior Fullstack · Own projects' },
    description: {
      es: 'Desarrollo de plataformas propias con Next.js, PostgreSQL, Prisma y Vercel. Integración de IA en flujos de desarrollo con herramientas de Vibe Coding.',
      en: 'Development of own platforms with Next.js, PostgreSQL, Prisma and Vercel. AI integration in development workflows with Vibe Coding tools.'
    },
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


