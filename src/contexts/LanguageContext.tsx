
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'de' | 'en' | 'nl' | 'ar' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  hasCompletedLoading: boolean;
  setHasCompletedLoading: (value: boolean) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('de');
  const [hasCompletedLoading, setHasCompletedLoading] = useState(false);

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
