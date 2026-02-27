export interface Skill {
  name: string;
  percentage: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  stack: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface TimelineItem {
  id: number;
  date: string;
  title: string;
  description: string;
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
