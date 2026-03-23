import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../utils/translations';
const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const {
    language
  } = useLanguage();
  const t = useTranslations(language);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const {
        clientX,
        clientY
      } = e;
      const {
        innerWidth,
        innerHeight
      } = window;
      const xPos = clientX / innerWidth * 100;
      const yPos = clientY / innerHeight * 100;
      heroRef.current.style.background = `radial-gradient(circle at ${xPos}% ${yPos}%, rgba(191, 167, 122, 0.03) 0%, rgba(14, 22, 36, 1) 50%)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-24">
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-background/60 pointer-events-none"></div>

      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => <div key={i} className="absolute w-1 h-1 bg-gold/20 rounded-full animate-pulse" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${3 + Math.random() * 2}s`
      }} />)}
      </div>

      {/* Enhanced Background Logo - Removed gray overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-3 pointer-events-none" aria-hidden="true">
        <div className="relative">
          <img src="/logos/logo2.jpg" alt="" className="w-full h-full object-contain max-w-7xl filter blur-sm" loading="lazy" />
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Enhanced Main Heading - Fixed sizing */}
          <div className="relative mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl display-style leading-[0.95]">
              <span className="relative inline-block text-white">
                {t.hero.title1}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-1000 blur-3xl"></div>
              </span>
              <br />
              <span className="relative inline-block text-gold bg-gradient-to-r from-gold to-gold/70 bg-clip-text text-transparent">
                {t.hero.title2}
                <div className="absolute -inset-4 bg-gold/10 opacity-0 hover:opacity-100 transition-opacity duration-1000 blur-2xl"></div>
              </span>
            </h1>
          </div>
          
          {/* Enhanced Subtitle with better line breaks */}
          <div className="text-lg md:text-xl body-style mb-12 max-w-4xl mx-auto relative">
            <p className="relative inline-block leading-relaxed">
              {t.hero.subtitle.split('.').map((sentence, index) => <span key={index} className="text-2xl font-bold">
                  {sentence.trim()}{sentence.trim() && '.'}
                  {index % 2 === 1 && index < t.hero.subtitle.split('.').length - 2 && <><br /><br /></>}
                  {index % 2 === 0 && index < t.hero.subtitle.split('.').length - 2 && ' '}
                </span>)}
              <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
            </p>
          </div>

          {/* Enhanced KPI Tiles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
            {[{
            ...t.hero.kpi1,
            delay: '0s'
          }, {
            ...t.hero.kpi2,
            delay: '0.2s'
          }, {
            ...t.hero.kpi3,
            delay: '0.4s'
          }].map((kpi, index) => <div key={index} className="group relative overflow-hidden" style={{
            animationDelay: kpi.delay
          }}>
                <div className="glass-morphism rounded-2xl p-6 hover:bg-white/25 transition-all duration-700 transform hover:scale-105 hover:rotate-1 relative z-10">
                  <div className="text-sm nav-style text-white mb-2 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                    {kpi.prefix}
                  </div>
                  <div className="text-2xl md:text-3xl display-style text-gold mb-3 group-hover:scale-110 transition-transform duration-500">
                    {kpi.value}
                  </div>
                  <div className="text-base nav-style opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                    {kpi.label}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl blur-xl"></div>
              </div>)}
          </div>

          {/* Über uns Section */}
          <div className="text-center large-spacing animate-fade-in-up mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold element-spacing heading-style">
              <span className="text-primary">{t.about.title}</span>
            </h2>
            <div className="text-3xl font-bold body-style mx-auto text-white">
              {t.about.subtitle.split('.').map((sentence, index) => <span key={index} className="font-bold">
                  {sentence.trim()}{sentence.trim() && '.'}
                  {index % 2 === 1 && index < t.about.subtitle.split('.').length - 2 && <><br /><br /></>}
                  {index % 2 === 0 && index < t.about.subtitle.split('.').length - 2 && ' '}
                </span>)}
            </div>
          </div>

          {/* Founder Section moved from About */}
          <div className="animate-fade-in-up mb-12 max-w-4xl mx-auto">
            <div className="glass-morphism rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden mr-6">
                  <img src="/lovable-uploads/a475cb2a-a5db-4345-8e08-2e4dc3215d2d.png" alt="Christian Plath - Gründer und Managing Director PLATHTECH" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{t.about.founderTitle}</h3>
                  <p className="text-gold font-medium">{t.about.founderRole}</p>
                </div>
              </div>
              <div className="body-style leading-relaxed text-left">
                {t.about.founderDescription.split('.').map((sentence, index) => <span key={index}>
                    {sentence.trim()}{sentence.trim() && '.'}
                    {index % 2 === 1 && index < t.about.founderDescription.split('.').length - 2 && <><br /><br /></>}
                    {index % 2 === 0 && index < t.about.founderDescription.split('.').length - 2 && ' '}
                  </span>)}
              </div>
              <Link
                to="/ueber-mich"
                className="inline-flex items-center gap-2 mt-6 text-gold hover:text-gold/80 transition-all duration-300 group font-medium text-left"
              >
                {t.aboutMe.learnMore}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;