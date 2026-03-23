
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'de' | 'en' | 'nl' | 'ar' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  hasCompletedLoading: boolean;
  setHasCompletedLoading: (value: boolean) => void;
}

const VALID_LANGUAGES: Language[] = ['de', 'en', 'nl', 'ar', 'ru'];

const getUrlLanguage = (): Language | null => {
  const params = new URLSearchParams(window.location.search);
  const lang = params.get('lang');
  if (lang && (VALID_LANGUAGES as string[]).includes(lang)) return lang as Language;
  return null;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const urlLang = getUrlLanguage();
  const [language, setLanguage] = useState<Language>(urlLang ?? 'de');
  const [hasCompletedLoading, setHasCompletedLoading] = useState(urlLang !== null);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, hasCompletedLoading, setHasCompletedLoading }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
