import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  ArrowLeft, GraduationCap, RefreshCw, BookOpen, Sparkles, ChevronRight, Brain
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../utils/translations';

// --- SVG: Learning / Growth Tree ---
const GrowthTreeSVG = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
    viewBox="0 0 800 600"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Trunk */}
    <line x1="400" y1="560" x2="400" y2="350" stroke="#BFA77A" strokeWidth="4" />
    {/* Main branches */}
    <line x1="400" y1="430" x2="220" y2="280" stroke="#BFA77A" strokeWidth="2.5" />
    <line x1="400" y1="390" x2="600" y2="250" stroke="#BFA77A" strokeWidth="2.5" />
    <line x1="400" y1="350" x2="400" y2="200" stroke="#BFA77A" strokeWidth="2" />
    {/* Sub-branches left */}
    <line x1="220" y1="280" x2="120" y2="180" stroke="#BFA77A" strokeWidth="1.5" />
    <line x1="220" y1="280" x2="260" y2="160" stroke="#BFA77A" strokeWidth="1.5" />
    <line x1="220" y1="280" x2="160" y2="260" stroke="#BFA77A" strokeWidth="1" />
    {/* Sub-branches right */}
    <line x1="600" y1="250" x2="680" y2="150" stroke="#BFA77A" strokeWidth="1.5" />
    <line x1="600" y1="250" x2="640" y2="300" stroke="#BFA77A" strokeWidth="1" />
    <line x1="600" y1="250" x2="550" y2="150" stroke="#BFA77A" strokeWidth="1.5" />
    {/* Sub-branches center */}
    <line x1="400" y1="260" x2="340" y2="160" stroke="#BFA77A" strokeWidth="1.5" />
    <line x1="400" y1="260" x2="460" y2="140" stroke="#BFA77A" strokeWidth="1.5" />
    {/* Leaf nodes */}
    {[
      [120, 180], [260, 160], [160, 260], [340, 160], [460, 140],
      [400, 200], [550, 150], [680, 150], [640, 300],
    ].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r={i % 2 === 0 ? 10 : 7} fill="none" stroke="#BFA77A" strokeWidth="1.5" />
    ))}
    {/* Small inner circles (leaves) */}
    {[
      [120, 180], [260, 160], [680, 150], [340, 160], [460, 140],
    ].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r={4} fill="#BFA77A" opacity="0.7" />
    ))}
    {/* Ground line */}
    <line x1="250" y1="565" x2="550" y2="565" stroke="#BFA77A" strokeWidth="1" opacity="0.4" />
    {/* Roots */}
    <line x1="400" y1="560" x2="310" y2="590" stroke="#BFA77A" strokeWidth="2" />
    <line x1="400" y1="560" x2="490" y2="590" stroke="#BFA77A" strokeWidth="2" />
    <line x1="400" y1="560" x2="380" y2="595" stroke="#BFA77A" strokeWidth="1.5" />
  </svg>
);

// --- SVG: Book accent for card ---
const BookAccentSVG = () => (
  <svg
    className="absolute bottom-0 right-0 w-48 h-48 opacity-[0.06] pointer-events-none"
    viewBox="0 0 160 160"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    fill="none"
  >
    <rect x="20" y="20" width="120" height="140" rx="6" stroke="#BFA77A" strokeWidth="2" />
    <line x1="20" y1="50" x2="140" y2="50" stroke="#BFA77A" strokeWidth="1.5" />
    <line x1="50" y1="20" x2="50" y2="160" stroke="#BFA77A" strokeWidth="1.5" />
    {[65, 80, 95, 110, 125].map(y => (
      <line key={y} x1="65" y1={y} x2="130" y2={y} stroke="#BFA77A" strokeWidth="1" opacity="0.5" />
    ))}
    <circle cx="35" cy="35" r="8" stroke="#BFA77A" strokeWidth="1.5" />
  </svg>
);

interface PillarCardProps {
  icon: React.ReactNode;
  title: string;
  heading: string;
  items: { bold: string; text: string }[];
  isVisible: boolean;
  delay: number;
}

const PillarCard = ({ icon, title, heading, items, isVisible, delay }: PillarCardProps) => (
  <div
    className={`relative group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gold/15 via-gold/5 to-transparent border border-gold/25 p-8 hover:border-gold/50 transition-all duration-500 hover:scale-[1.01] hover:shadow-xl hover:shadow-gold/10 h-full">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold/8 rounded-full blur-2xl group-hover:bg-gold/15 transition-all duration-500" />

      <div className="relative">
        <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-colors duration-300">
          <div className="text-gold">{icon}</div>
        </div>

        <div className="text-gold/60 text-xs font-semibold uppercase tracking-widest mb-2">{title}</div>
        <h3 className="text-xl font-semibold text-gold mb-5 heading-style">{heading}</h3>

        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i}>
              <p className="text-white/90 font-medium text-sm mb-1">{item.bold}</p>
              <p className="text-white/65 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// --- Main Page ---
const KISchulungen = () => {
  const { language } = useLanguage();
  const t = useTranslations(language);
  const p = t.kiSchulungenPage;

  const heroRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);
  const [pillarsVisible, setPillarsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const prevTitle = document.title;
    document.title = p.pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute('content') ?? '';
    metaDesc?.setAttribute('content', p.metaDescription);
    return () => {
      document.title = prevTitle;
      metaDesc?.setAttribute('content', prevDesc);
    };
  }, [p.pageTitle, p.metaDescription]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const xPos = (e.clientX / window.innerWidth) * 100;
      const yPos = (e.clientY / window.innerHeight) * 100;
      heroRef.current.style.background = `radial-gradient(circle at ${xPos}% ${yPos}%, rgba(191, 167, 122, 0.10) 0%, rgba(14, 22, 36, 1) 55%)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setPillarsVisible(true); },
      { threshold: 0.1 }
    );
    if (pillarsRef.current) observer.observe(pillarsRef.current);
    return () => observer.disconnect();
  }, []);

  const pillars = [
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: p.pillars.pillar1.title,
      heading: p.pillars.pillar1.heading,
      items: p.pillars.pillar1.items,
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: p.pillars.pillar2.title,
      heading: p.pillars.pillar2.heading,
      items: p.pillars.pillar2.items,
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: p.pillars.pillar3.title,
      heading: p.pillars.pillar3.heading,
      items: p.pillars.pillar3.items,
    },
  ];

  return (
    <div className="min-h-screen bg-navy text-white">
      <Header />
      <main>

        {/* ============================================================
            HERO
        ============================================================ */}
        <section
          ref={heroRef}
          className="relative pt-28 pb-12 md:pt-36 md:pb-20 overflow-hidden transition-all duration-300"
          style={{ background: 'radial-gradient(circle at 50% 40%, rgba(191,167,122,0.10) 0%, rgba(14,22,36,1) 55%)' }}
        >
          <GrowthTreeSVG />
          <div className="absolute right-8 top-24 opacity-5 pointer-events-none" aria-hidden="true">
            <GraduationCap className="w-72 h-72 text-gold" strokeWidth={0.5} />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="mb-10">
              <Link
                to="/"
                className="inline-flex items-center text-gold hover:text-gold/80 transition-colors duration-300 group"
              >
                <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
                {p.backToHome}
              </Link>
            </div>

            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold mb-6 heading-style leading-tight">
                <span className="text-gold">{p.heroHeading}</span>
              </h1>
              <blockquote className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light italic mb-8 leading-relaxed">
                {p.quote}
                <span className="text-gold font-medium not-italic">{p.quoteHighlight}</span>
              </blockquote>
              <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed body-style">
                {p.intro}
              </p>
            </div>

            <div className="flex justify-center mt-8">
              <div className="w-px h-16 bg-gradient-to-b from-gold/60 to-transparent animate-pulse" />
            </div>
          </div>
        </section>

        {/* ============================================================
            PROBLEM STATEMENT
        ============================================================ */}
        <section className="pb-12 bg-gradient-to-b from-navy to-[#0a1220]">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 border border-gold/30 p-10 md:p-14 text-center">
                <div className="absolute inset-0 shimmer opacity-30 pointer-events-none" />
                <BookAccentSVG />
                <div className="relative">
                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                    {p.problemStatement}{' '}
                    <span className="text-gold font-semibold">{p.problemHighlight}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            3 PILLARS
        ============================================================ */}
        <section ref={pillarsRef} className="py-20 bg-gradient-to-b from-[#0a1220] to-navy">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold heading-style mb-4">
                <span className="text-gold">{p.pillars.title}</span>
              </h2>
              <p className="text-white/60 body-style max-w-xl mx-auto">
                {p.pillars.subtitle}
              </p>
            </div>

            <div ref={pillarsRef} className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
              {pillars.map((pillar, i) => (
                <PillarCard
                  key={i}
                  icon={pillar.icon}
                  title={pillar.title}
                  heading={pillar.heading}
                  items={pillar.items}
                  isVisible={pillarsVisible}
                  delay={i * 150}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            RESULT STATEMENT
        ============================================================ */}
        <section className="py-16 bg-navy">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 text-center">
                <Brain className="w-10 h-10 text-gold mx-auto mb-4 opacity-80" />
                <p className="text-white/80 leading-relaxed body-style max-w-2xl mx-auto text-lg">
                  {p.resultStatement}{' '}
                  <span className="text-gold font-medium">{p.resultHighlight}</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        {/* ============================================================
            TAG PILLS
        ============================================================ */}
        <section className="py-12 bg-gradient-to-b from-navy to-[#0a1220]">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-3">
              {p.tags.map((tag, i) => (
                <span key={i} className="px-5 py-2 rounded-full border border-gold/30 text-gold/80 text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            CTA
        ============================================================ */}
        <section className="py-24 bg-[#0a1220]">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/25 via-gold/10 to-gold/25 rounded-3xl" />
                <div className="absolute inset-0 shimmer opacity-40 rounded-3xl pointer-events-none" />
                <div className="absolute top-0 left-0 w-40 h-40 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 p-12 md:p-16">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/20 rounded-2xl mb-6">
                    <GraduationCap className="w-8 h-8 text-gold" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-semibold heading-style text-white mb-4">
                    {p.cta.heading}<span className="text-gold">{p.cta.headingHighlight}</span>
                  </h2>
                  <p className="text-white/70 body-style text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                    {p.cta.text}
                  </p>
                  <Link
                    to="/kontakt"
                    className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-gold text-navy font-semibold text-base md:text-lg rounded-xl hover:bg-gold/90 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-gold/40 neumorphism-gold"
                  >
                    <span>📅</span>
                    {p.cta.button}
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                  <p className="text-white/40 text-sm mt-6">{p.cta.tagline}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default KISchulungen;
