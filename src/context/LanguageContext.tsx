import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { Language, Translation } from '../types';
import { translations } from '../data/translations';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
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

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
