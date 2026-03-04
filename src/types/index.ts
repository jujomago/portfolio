export interface Skill {
  name: string;
  percentage: number;
}

export interface SkillCategory {
  title: { es: string; en: string };
  skills: Skill[];
}

export interface Project {
  id: number;
  title: { es: string; en: string };
  description: { es: string; en: string };
  stack: string[];
  images: string[];
  demoUrl: string;
  githubUrl: string;
}

export interface TimelineItem {
  id: number;
  date: { es: string; en: string };
  title: { es: string; en: string };
  description: { es: string; en: string };
  position: 'left' | 'right';
}

export interface SocialLink {
  icon: string;
  label: string;
  url: string;
}

export interface Translation {
  [key: string]: string;
}

export interface Translations {
  es: Translation;
  en: Translation;
}

export type Theme = 'dark' | 'light';
export type Language = 'es' | 'en';
