import React, { useEffect, useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState('Künstliche Intelligenz wird kalibriert...');
  const [showLanguageSelection, setShowLanguageSelection] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setShowLanguageSelection(true), 300);
          return 100;
        }
        
        // Change status message at 50% progress
        if (prev >= 50 && statusMessage === 'Künstliche Intelligenz wird kalibriert...') {
          setStatusMessage('Beraterwissen wird komprimiert...');
        }
        
        return prev + 1.9; // Increased from 1.33 to 1.9 to make it 30% faster (70% of original time)
      });
    }, 28); // Reduced from 40ms to 28ms for 30% speed increase

    return () => clearInterval(timer);
  }, [statusMessage]);

  const handleLanguageConfirm = () => {
    onLoadingComplete();
  };

  return (
    <div className="fixed inset-0 z-50 bg-navy overflow-hidden" role="dialog" aria-modal="true" aria-label="Ladebildschirm">
      {/* Company Logo */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-10">
        <img
          src="/logos/logo1fffff.png"
          alt="PLATHTECH - Innovation & AI Consultancy Logo"
          className="w-96 h-96 object-contain animate-pulse"
        />
      </div>

      {/* Technology Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23BFA77A' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3Ccircle cx='15' cy='15' r='0.5'/%3E%3Ccircle cx='45' cy='15' r='0.5'/%3E%3Ccircle cx='15' cy='45' r='0.5'/%3E%3Ccircle cx='45' cy='45' r='0.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Animated Circuit Lines */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent animate-pulse-line"
            style={{
              width: '100%',
              top: `${15 + i * 10}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
        {[...Array(6)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent animate-pulse-line"
            style={{
              height: '100%',
              left: `${20 + i * 12}%`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Central Loading Animation */}
      <div className="absolute inset-0 flex items-end justify-center pb-20">
        <div className="text-center">
          {/* Spinning Logo Animation */}
          <div className="relative mb-8">
            <div className="w-24 h-24 mx-auto relative">
              {/* Outer Ring */}
              <div className="absolute inset-0 border-2 border-gold/30 rounded-full animate-spin" 
                   style={{ animationDuration: '3s' }} />
              {/* Inner Ring */}
              <div className="absolute inset-2 border-2 border-gold/50 rounded-full animate-spin" 
                   style={{ animationDuration: '2s', animationDirection: 'reverse' }} />
              {/* Center Dot */}
              <div className="absolute inset-8 bg-gold rounded-full animate-pulse" />
              
              {/* Orbiting Dots */}
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-gold/80 rounded-full animate-spin"
                  style={{
                    top: '50%',
                    left: '50%',
                    transformOrigin: '0 0',
                    transform: `rotate(${i * 90}deg) translateX(30px) translateY(-4px)`,
                    animationDuration: '4s',
                    animationDelay: `${i * 0.25}s`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Language Selection or Loading Text */}
          {showLanguageSelection ? (
            <div className="mb-6">
              <h2 className="text-2xl font-playfair font-semibold text-white mb-4">
                Sprache wählen / Choose Language / Kies taal / اختر اللغة / Выбрать язык
              </h2>
              <div className="flex justify-center mb-6">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setLanguage('de')}
                    className={`flex items-center justify-center w-16 h-11 rounded-md transition-all duration-300 transform hover:scale-110 ${
                      language === 'de'
                        ? 'ring-2 ring-gold ring-opacity-80 scale-110 shadow-lg'
                        : 'hover:scale-105 opacity-80 hover:opacity-100 hover:shadow-md'
                    }`}
                    title="Deutsch"
                    aria-label="Sprache auf Deutsch setzen"
                    aria-pressed={language === 'de'}
                  >
                    <div className="w-full h-full rounded-md overflow-hidden shadow-sm border border-gray-300">
                      <div className="w-full h-1/3 bg-black"></div>
                      <div className="w-full h-1/3 bg-red-600"></div>
                      <div className="w-full h-1/3 bg-yellow-400"></div>
                    </div>
                  </button>

                  <button
                    onClick={() => setLanguage('en')}
                    className={`flex items-center justify-center w-16 h-11 rounded-md transition-all duration-300 transform hover:scale-110 ${
                      language === 'en'
                        ? 'ring-2 ring-gold ring-opacity-80 scale-110 shadow-lg'
                        : 'hover:scale-105 opacity-80 hover:opacity-100 hover:shadow-md'
                    }`}
                    title="English"
                    aria-label="Set language to English"
                    aria-pressed={language === 'en'}
                  >
                    <div className="w-full h-full rounded-md overflow-hidden relative shadow-sm border border-gray-300 bg-blue-800">
                      <div className="w-full h-full bg-blue-800"></div>
                      <div className="absolute inset-0">
                        <div className="absolute w-full h-1 bg-white transform rotate-45 origin-center" style={{ top: '50%', left: '-20%', width: '140%' }}></div>
                        <div className="absolute w-full h-1 bg-white transform -rotate-45 origin-center" style={{ top: '50%', left: '-20%', width: '140%' }}></div>
                      </div>
                      <div className="absolute inset-0">
                        <div className="absolute w-full h-0.5 bg-red-600 transform rotate-45 origin-center" style={{ top: '50%', left: '-20%', width: '140%' }}></div>
                        <div className="absolute w-full h-0.5 bg-red-600 transform -rotate-45 origin-center" style={{ top: '50%', left: '-20%', width: '140%' }}></div>
                      </div>
                      <div className="absolute inset-0">
                        <div className="absolute w-full h-2 bg-white top-1/2 transform -translate-y-1"></div>
                        <div className="absolute h-full w-2 bg-white left-1/2 transform -translate-x-1"></div>
                      </div>
                      <div className="absolute inset-0">
                        <div className="absolute w-full h-1 bg-red-600 top-1/2 transform -translate-y-0.5"></div>
                        <div className="absolute h-full w-1 bg-red-600 left-1/2 transform -translate-x-0.5"></div>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => setLanguage('nl')}
                    className={`flex items-center justify-center w-16 h-11 rounded-md transition-all duration-300 transform hover:scale-110 ${
                      language === 'nl'
                        ? 'ring-2 ring-gold ring-opacity-80 scale-110 shadow-lg'
                        : 'hover:scale-105 opacity-80 hover:opacity-100 hover:shadow-md'
                    }`}
                    title="Nederlands"
                    aria-label="Stel taal in op Nederlands"
                    aria-pressed={language === 'nl'}
                  >
                    <div className="w-full h-full rounded-md overflow-hidden shadow-sm border border-gray-300">
                      <div className="w-full h-1/3 bg-red-600"></div>
                      <div className="w-full h-1/3 bg-white"></div>
                      <div className="w-full h-1/3 bg-blue-600"></div>
                    </div>
                  </button>

                  <button
                    onClick={() => setLanguage('ar')}
                    className={`flex items-center justify-center w-16 h-11 rounded-md transition-all duration-300 transform hover:scale-110 ${
                      language === 'ar'
                        ? 'ring-2 ring-gold ring-opacity-80 scale-110 shadow-lg'
                        : 'hover:scale-105 opacity-80 hover:opacity-100 hover:shadow-md'
                    }`}
                    title="العربية (UAE)"
                    aria-label="تعيين اللغة إلى العربية"
                    aria-pressed={language === 'ar'}
                  >
                    <div className="w-full h-full rounded-md overflow-hidden shadow-sm border border-gray-300 relative">
                      <div className="w-full h-1/3 bg-green-600"></div>
                      <div className="w-full h-1/3 bg-white"></div>
                      <div className="w-full h-1/3 bg-black"></div>
                      <div className="absolute left-0 top-0 h-full w-1/4 bg-red-600"></div>
                    </div>
                  </button>

                  <button
                    onClick={() => setLanguage('ru')}
                    className={`flex items-center justify-center w-16 h-11 rounded-md transition-all duration-300 transform hover:scale-110 ${
                      language === 'ru'
                        ? 'ring-2 ring-gold ring-opacity-80 scale-110 shadow-lg'
                        : 'hover:scale-105 opacity-80 hover:opacity-100 hover:shadow-md'
                    }`}
                    title="Русский"
                    aria-label="Установить русский язык"
                    aria-pressed={language === 'ru'}
                  >
                    <div className="w-full h-full rounded-md overflow-hidden shadow-sm border border-gray-300">
                      <div className="w-full h-1/3 bg-white"></div>
                      <div className="w-full h-1/3 bg-blue-600"></div>
                      <div className="w-full h-1/3 bg-red-600"></div>
                    </div>
                  </button>
                </div>
              </div>
              <button
                onClick={handleLanguageConfirm}
                className="bg-gradient-to-r from-gold to-gold/80 text-navy px-8 py-3 rounded-lg font-semibold hover:from-gold/90 hover:to-gold/70 transition-all duration-300 transform hover:scale-105"
              >
                {language === 'de' ? 'Weiter' : language === 'en' ? 'Continue' : language === 'nl' ? 'Doorgaan' : language === 'ar' ? 'متابعة' : 'Продолжить'}
              </button>
            </div>
          ) : (
            <div className="mb-6">
              <h2 className="text-2xl font-playfair font-semibold text-white mb-2">
                Loading...
              </h2>
              <p className="text-gold/80 font-inter text-sm mb-4">
                (Keine Sorge, dauert nicht so lange wie ein Beratungsprojekt)
              </p>
              <p className="text-white font-inter text-sm">
                {statusMessage}
              </p>
            </div>
          )}

          {/* Progress Bar - only show when loading */}
          {!showLanguageSelection && (
            <div className="w-64 mx-auto">
              <div className="w-full bg-white/10 rounded-full h-1 mb-2">
                <div 
                  className="bg-gradient-to-r from-gold to-gold/80 h-1 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="text-gold/60 text-sm font-inter">
                {Math.round(progress)}%
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
