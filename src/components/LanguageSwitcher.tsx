
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-3" role="group" aria-label="Sprachwahl">
      <button
        onClick={() => setLanguage('de')}
        className={`flex items-center justify-center w-10 h-7 rounded-md transition-all duration-300 transform hover:scale-110 ${
          language === 'de'
            ? 'ring-2 ring-gold ring-opacity-80 scale-110 shadow-lg'
            : 'hover:scale-105 opacity-80 hover:opacity-100 hover:shadow-md'
        }`}
        title="Deutsch"
        aria-label="Sprache auf Deutsch setzen"
        aria-pressed={language === 'de'}
      >
        <div className="w-full h-full rounded-md overflow-hidden shadow-sm border border-gray-300" aria-hidden="true">
          <div className="w-full h-1/3 bg-black"></div>
          <div className="w-full h-1/3 bg-red-600"></div>
          <div className="w-full h-1/3 bg-yellow-400"></div>
        </div>
      </button>

      <button
        onClick={() => setLanguage('en')}
        className={`flex items-center justify-center w-10 h-7 rounded-md transition-all duration-300 transform hover:scale-110 ${
          language === 'en'
            ? 'ring-2 ring-gold ring-opacity-80 scale-110 shadow-lg'
            : 'hover:scale-105 opacity-80 hover:opacity-100 hover:shadow-md'
        }`}
        title="English"
        aria-label="Set language to English"
        aria-pressed={language === 'en'}
      >
        <div className="w-full h-full rounded-md overflow-hidden relative shadow-sm border border-gray-300 bg-blue-800" aria-hidden="true">
          {/* Union Jack - Blue Background */}
          <div className="w-full h-full bg-blue-800"></div>

          {/* White diagonal crosses (Saint Andrew's Cross) */}
          <div className="absolute inset-0">
            {/* Diagonal lines from corners */}
            <div className="absolute w-full h-0.5 bg-white transform rotate-45 origin-center" style={{ top: '50%', left: '-20%', width: '140%' }}></div>
            <div className="absolute w-full h-0.5 bg-white transform -rotate-45 origin-center" style={{ top: '50%', left: '-20%', width: '140%' }}></div>
          </div>

          {/* Red diagonal crosses (Saint Patrick's Cross) */}
          <div className="absolute inset-0">
            <div className="absolute w-full h-px bg-red-600 transform rotate-45 origin-center" style={{ top: '50%', left: '-20%', width: '140%' }}></div>
            <div className="absolute w-full h-px bg-red-600 transform -rotate-45 origin-center" style={{ top: '50%', left: '-20%', width: '140%' }}></div>
          </div>

          {/* White horizontal and vertical lines (Saint George's Cross background) */}
          <div className="absolute inset-0">
            <div className="absolute w-full h-1 bg-white top-1/2 transform -translate-y-0.5"></div>
            <div className="absolute h-full w-1 bg-white left-1/2 transform -translate-x-0.5"></div>
          </div>

          {/* Red horizontal and vertical lines (Saint George's Cross) */}
          <div className="absolute inset-0">
            <div className="absolute w-full h-0.5 bg-red-600 top-1/2 transform -translate-y-px"></div>
            <div className="absolute h-full w-0.5 bg-red-600 left-1/2 transform -translate-x-px"></div>
          </div>
        </div>
      </button>

      <button
        onClick={() => setLanguage('nl')}
        className={`flex items-center justify-center w-10 h-7 rounded-md transition-all duration-300 transform hover:scale-110 ${
          language === 'nl'
            ? 'ring-2 ring-gold ring-opacity-80 scale-110 shadow-lg'
            : 'hover:scale-105 opacity-80 hover:opacity-100 hover:shadow-md'
        }`}
        title="Nederlands"
        aria-label="Stel taal in op Nederlands"
        aria-pressed={language === 'nl'}
      >
        <div className="w-full h-full rounded-md overflow-hidden shadow-sm border border-gray-300" aria-hidden="true">
          <div className="w-full h-1/3 bg-red-600"></div>
          <div className="w-full h-1/3 bg-white"></div>
          <div className="w-full h-1/3 bg-blue-600"></div>
        </div>
      </button>

      <button
        onClick={() => setLanguage('ar')}
        className={`flex items-center justify-center w-10 h-7 rounded-md transition-all duration-300 transform hover:scale-110 ${
          language === 'ar'
            ? 'ring-2 ring-gold ring-opacity-80 scale-110 shadow-lg'
            : 'hover:scale-105 opacity-80 hover:opacity-100 hover:shadow-md'
        }`}
        title="العربية (UAE)"
        aria-label="تعيين اللغة إلى العربية"
        aria-pressed={language === 'ar'}
      >
        <div className="w-full h-full rounded-md overflow-hidden shadow-sm border border-gray-300 relative" aria-hidden="true">
          {/* UAE Flag - Green, White, Black horizontal stripes with red vertical bar on left */}
          <div className="w-full h-1/3 bg-green-600"></div>
          <div className="w-full h-1/3 bg-white"></div>
          <div className="w-full h-1/3 bg-black"></div>
          {/* Red vertical bar on left */}
          <div className="absolute left-0 top-0 h-full w-1/4 bg-red-600"></div>
        </div>
      </button>

      <button
        onClick={() => setLanguage('ru')}
        className={`flex items-center justify-center w-10 h-7 rounded-md transition-all duration-300 transform hover:scale-110 ${
          language === 'ru'
            ? 'ring-2 ring-gold ring-opacity-80 scale-110 shadow-lg'
            : 'hover:scale-105 opacity-80 hover:opacity-100 hover:shadow-md'
        }`}
        title="Русский"
        aria-label="Установить русский язык"
        aria-pressed={language === 'ru'}
      >
        <div className="w-full h-full rounded-md overflow-hidden shadow-sm border border-gray-300" aria-hidden="true">
          {/* Russian Flag - White, Blue, Red horizontal stripes */}
          <div className="w-full h-1/3 bg-white"></div>
          <div className="w-full h-1/3 bg-blue-600"></div>
          <div className="w-full h-1/3 bg-red-600"></div>
        </div>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
