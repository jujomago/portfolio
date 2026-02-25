import { useState, useEffect } from 'react';
import type { Language, Translation } from '../types';
import { translations } from '../data/translations';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('jm-lang');
    if (saved && (saved === 'es' || saved === 'en')) {
      return saved;
    }
    const browser = navigator.language || (navigator as any).userLanguage || 'es';
    return browser.startsWith('es') ? 'es' : 'en';
  });

  const [currentTranslations, setCurrentTranslations] = useState<Translation>(translations[language]);

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('jm-lang', language);
    setCurrentTranslations(translations[language]);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const t = (key: string): string => {
    return currentTranslations[key] || key;
  };

  return { language, toggleLanguage, t };
};
