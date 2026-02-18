import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft, Briefcase, GraduationCap, Award, Building2, Sparkles, Bot, Brain, Cpu, Users, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../utils/translations';

interface TimelineItemProps {
  title: string;
  period: string;
  description?: string;
  items?: string[];
  icon: React.ReactNode;
  isAI?: boolean;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, period, description, items, icon, isAI, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const hasExpandableContent = items && items.length > 3;

  return (
    <div
      ref={itemRef}
      className={`relative pl-8 md:pl-12 pb-12 last:pb-0 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-gold/60 via-gold/30 to-transparent" />

      {/* Timeline Dot with Icon */}
      <div className={`absolute left-0 top-0 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
        isAI
          ? 'bg-gradient-to-br from-gold via-gold/80 to-amber-600 shadow-lg shadow-gold/40'
          : 'bg-gradient-to-br from-secondary-light to-secondary border-2 border-gold/30'
      } ${isVisible ? 'scale-100' : 'scale-0'}`}>
        <div className={`${isAI ? 'text-navy' : 'text-gold'}`}>
          {icon}
        </div>
        {isAI && (
          <div className="absolute inset-0 rounded-full animate-ping bg-gold/30" style={{ animationDuration: '2s' }} />
        )}
      </div>

      {/* Content Card */}
      <div className={`group relative overflow-hidden rounded-xl transition-all duration-500 ${
        isAI
          ? 'bg-gradient-to-br from-gold/20 via-gold/10 to-transparent border border-gold/40 hover:border-gold/60'
          : 'glass-morphism hover:bg-white/15'
      }`}>
        {/* Shimmer Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 shimmer" />
        </div>

        <div className="relative p-6">
          {/* Period Badge */}
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm mb-3 ${
            isAI
              ? 'bg-gold/20 text-gold border border-gold/30'
              : 'bg-white/10 text-white/80 border border-white/20'
          }`}>
            {isAI && <Sparkles className="w-3 h-3" />}
            {period}
          </div>

          {/* Title */}
          <h3 className={`text-xl font-semibold mb-3 heading-style ${isAI ? 'text-gold' : 'text-white'}`}>
            {title}
          </h3>

          {/* Description */}
          {description && (
            <p className="body-style text-white/80 mb-4">{description}</p>
          )}

          {/* Items List */}
          {items && items.length > 0 && (
            <ul className="space-y-2">
              {(isExpanded ? items : items.slice(0, 3)).map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-white/70 text-sm"
                  style={{
                    animation: isExpanded && idx >= 3 ? `fadeIn 0.3s ease-out forwards` : 'none',
                    animationDelay: `${(idx - 3) * 50}ms`
                  }}
                >
                  <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${isAI ? 'bg-gold' : 'bg-gold/60'}`} />
                  {item}
                </li>
              ))}
            </ul>
          )}

          {/* Expand Button */}
          {hasExpandableContent && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 flex items-center gap-1 text-gold/80 hover:text-gold text-sm transition-colors"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  Weniger anzeigen
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  +{items.length - 3} weitere
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const AboutMe = () => {
  const { language } = useLanguage();
  const t = useTranslations(language);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xPos = (clientX / innerWidth) * 100;
      const yPos = (clientY / innerHeight) * 100;
      heroRef.current.style.background = `radial-gradient(circle at ${xPos}% ${yPos}%, rgba(191, 167, 122, 0.08) 0%, rgba(14, 22, 36, 1) 60%)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      ...t.aboutMe.projects.aiConsulting,
      icon: <Bot className="w-5 h-5" />,
      isAI: true
    },
    {
      ...t.aboutMe.projects.aiImplementation,
      icon: <Cpu className="w-5 h-5" />,
      isAI: true
    },
    {
      ...t.aboutMe.projects.tplGkv1,
      icon: <Briefcase className="w-5 h-5" />,
      isAI: false
    },
    {
      ...t.aboutMe.projects.tplGkv2,
      icon: <Briefcase className="w-5 h-5" />,
      isAI: false
    },
    {
      ...t.aboutMe.projects.businessConsulting,
      icon: <Brain className="w-5 h-5" />,
      isAI: false
    },
    {
      ...t.aboutMe.projects.vendorManager,
      icon: <Users className="w-5 h-5" />,
      isAI: false
    },
    {
      ...t.aboutMe.projects.hardwareRollout,
      icon: <Briefcase className="w-5 h-5" />,
      isAI: false
    },
    {
      ...t.aboutMe.projects.processDesign,
      icon: <Briefcase className="w-5 h-5" />,
      isAI: false
    },
    {
      ...t.aboutMe.projects.associateHealth,
      icon: <Briefcase className="w-5 h-5" />,
      isAI: false
    },
    {
      ...t.aboutMe.projects.associateMedia,
      icon: <Briefcase className="w-5 h-5" />,
      isAI: false
    }
  ];

  return (
    <div className="min-h-screen bg-navy text-white">
      <Header />

      <main ref={heroRef} className="pt-32 pb-20 bg-background transition-all duration-300">
        <div className="container mx-auto px-6">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center text-gold hover:text-gold/80 transition-colors duration-300 group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
              {t.aboutMe.backToHome}
            </Link>
          </div>

          {/* Hero Section - Why Different */}
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              {t.aboutMe.whyDifferent.subtitle}
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold mb-6 heading-style">
              <span className="text-gold">{t.aboutMe.whyDifferent.title}</span>
            </h1>
          </div>

          {/* Why Different Cards */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Synergy Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gold/20 via-gold/10 to-transparent border border-gold/30 p-8 hover:border-gold/50 transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl group-hover:bg-gold/20 transition-all duration-500" />
                <div className="relative">
                  <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center mb-4">
                    <Brain className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-gold mb-3 heading-style">
                    {t.aboutMe.whyDifferent.synergy.title}
                  </h3>
                  <p className="body-style text-white/80">
                    {t.aboutMe.whyDifferent.synergy.description}
                  </p>
                </div>
              </div>

              {/* Human Focus Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gold/20 via-gold/10 to-transparent border border-gold/30 p-8 hover:border-gold/50 transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl group-hover:bg-gold/20 transition-all duration-500" />
                <div className="relative">
                  <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center mb-4">
                    <Users className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-gold mb-3 heading-style">
                    {t.aboutMe.whyDifferent.humanFocus.title}
                  </h3>
                  <p className="body-style text-white/80">
                    {t.aboutMe.whyDifferent.humanFocus.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Conclusion Banner */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-gold/30 via-gold/20 to-gold/30 p-8 text-center">
              <div className="absolute inset-0 shimmer opacity-50" />
              <p className="relative text-xl md:text-2xl font-semibold text-white heading-style">
                {t.aboutMe.whyDifferent.conclusion}
              </p>
            </div>
          </div>

          {/* Credentials Section */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Industries */}
              <div className="glass-morphism rounded-2xl p-6 hover:bg-white/15 transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="text-lg font-semibold text-gold heading-style">{t.aboutMe.industries.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {t.aboutMe.industries.items.map((item, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 text-sm bg-white/10 border border-white/20 rounded-full text-white/80 hover:bg-gold/20 hover:border-gold/30 hover:text-gold transition-all duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="glass-morphism rounded-2xl p-6 hover:bg-white/15 transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="text-lg font-semibold text-gold heading-style">{t.aboutMe.certifications.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {t.aboutMe.certifications.items.map((item, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1.5 text-sm rounded-full transition-all duration-300 ${
                        index === 0
                          ? 'bg-gold/30 border border-gold/50 text-gold font-medium'
                          : 'bg-white/10 border border-white/20 text-white/80 hover:bg-gold/20 hover:border-gold/30 hover:text-gold'
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="glass-morphism rounded-2xl p-6 hover:bg-white/15 transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="text-lg font-semibold text-gold heading-style">{t.aboutMe.education.title}</h3>
                </div>
                <div className="space-y-3">
                  {t.aboutMe.education.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 text-white/80"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Project Experience Section */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 heading-style">
                <span className="text-gold">{t.aboutMe.experience.title}</span>
              </h2>
              <p className="body-style text-white/70 max-w-2xl mx-auto">
                {t.aboutMe.experience.subtitle}
              </p>
            </div>

            {/* Timeline */}
            <div className="relative ml-5">
              {projects.map((project, index) => (
                <TimelineItem
                  key={index}
                  title={project.title}
                  period={project.period}
                  description={project.description}
                  items={project.items}
                  icon={project.icon}
                  isAI={project.isAI}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-3xl mx-auto mt-20 text-center">
            <div className="glass-morphism rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 heading-style text-white">
                {language === 'de' ? 'Bereit für Ihre KI-Transformation?' : language === 'en' ? 'Ready for your AI transformation?' : 'Klaar voor uw AI-transformatie?'}
              </h3>
              <p className="body-style text-white/70 mb-6">
                {language === 'de'
                  ? 'Lassen Sie uns gemeinsam herausfinden, wie KI Ihr Unternehmen voranbringen kann.'
                  : language === 'en'
                    ? 'Let\'s discover together how AI can drive your business forward.'
                    : 'Laten we samen ontdekken hoe AI uw bedrijf vooruit kan helpen.'}
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gold/30"
              >
                {language === 'de' ? 'Kontakt aufnehmen' : language === 'en' ? 'Get in touch' : 'Neem contact op'}
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default AboutMe;
