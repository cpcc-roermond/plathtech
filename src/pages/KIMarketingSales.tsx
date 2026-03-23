import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  ArrowLeft, Megaphone, BarChart2, Zap, FileText, Users, ChevronRight, TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../utils/translations';

// --- SVG: Trend / Funnel Background ---
const FunnelSVG = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
    viewBox="0 0 800 600"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Funnel layers */}
    <path d="M80,80 L720,80 L600,200 L200,200 Z" stroke="#BFA77A" strokeWidth="1.5" fill="none" />
    <path d="M200,220 L600,220 L520,340 L280,340 Z" stroke="#BFA77A" strokeWidth="1.5" fill="none" />
    <path d="M280,360 L520,360 L460,460 L340,460 Z" stroke="#BFA77A" strokeWidth="1.5" fill="none" />
    <path d="M340,475 L460,475 L430,545 L370,545 Z" stroke="#BFA77A" strokeWidth="1.5" fill="none" />
    {/* Trend line overlay */}
    <polyline
      points="100,520 200,450 320,400 440,340 560,260 680,160"
      stroke="#BFA77A"
      strokeWidth="2"
      fill="none"
      opacity="0.6"
    />
    {/* Data points on trend line */}
    {[[100, 520], [200, 450], [320, 400], [440, 340], [560, 260], [680, 160]].map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r={5} fill="#BFA77A" opacity="0.7" />
    ))}
    {/* Vertical dotted grid */}
    {[0, 1, 2, 3, 4, 5, 6].map(i => (
      <line
        key={i}
        x1={100 + i * 100}
        y1="60"
        x2={100 + i * 100}
        y2="560"
        stroke="#BFA77A"
        strokeWidth="0.5"
        opacity="0.2"
        strokeDasharray="4 8"
      />
    ))}
  </svg>
);

// --- SVG: Small megaphone corner ---
const MegaphoneAccentSVG = () => (
  <svg
    className="absolute top-6 right-6 w-20 h-20 opacity-30 pointer-events-none"
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    fill="none"
  >
    <path d="M15,55 L15,30 L50,15 L50,70 Z" stroke="#BFA77A" strokeWidth="2" />
    <rect x="8" y="30" width="10" height="22" rx="4" stroke="#BFA77A" strokeWidth="1.5" fill="none" />
    <path d="M50,32 C60,28 65,40 50,48" stroke="#BFA77A" strokeWidth="1.5" />
    <path d="M50,22 C70,16 76,40 50,58" stroke="#BFA77A" strokeWidth="1" opacity="0.5" />
    <line x1="20" y1="52" x2="20" y2="65" stroke="#BFA77A" strokeWidth="1.5" />
    <line x1="26" y1="52" x2="26" y2="70" stroke="#BFA77A" strokeWidth="1.5" />
  </svg>
);

interface ThemeBlockProps {
  icon: React.ReactNode;
  title: string;
  bullets: string[];
  isVisible: boolean;
  delay: number;
}

const ThemeBlock = ({ icon, title, bullets, isVisible, delay }: ThemeBlockProps) => (
  <div
    className={`relative group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/15 p-8 hover:border-gold/40 transition-all duration-500 hover:shadow-lg hover:shadow-gold/10 h-full">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/10 transition-all duration-500" />

      <div className="relative">
        <div className="w-12 h-12 bg-gold/15 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold/25 transition-colors duration-300">
          <div className="text-gold">{icon}</div>
        </div>
        <h3 className="text-xl font-semibold text-gold mb-5 heading-style">{title}</h3>
        <ul className="space-y-3">
          {bullets.map((bullet, i) => {
            const [bold, ...rest] = bullet.split(':');
            return (
              <li key={i} className="flex items-start gap-3">
                <ChevronRight className="w-4 h-4 text-gold/70 flex-shrink-0 mt-0.5" />
                <span className="text-white/75 text-sm leading-relaxed">
                  <span className="text-white/90 font-medium">{bold}</span>
                  {rest.length > 0 && `:${rest.join(':')}`}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </div>
);

// --- Main Page ---
const KIMarketingSales = () => {
  const { language } = useLanguage();
  const t = useTranslations(language);
  const p = t.kiMarketingSalesPage;

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentVisible, setContentVisible] = useState(false);

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
      ([entry]) => { if (entry.isIntersecting) setContentVisible(true); },
      { threshold: 0.1 }
    );
    if (contentRef.current) observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  const themes = [
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: p.themes.theme1.title,
      bullets: p.themes.theme1.bullets,
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: p.themes.theme2.title,
      bullets: p.themes.theme2.bullets,
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: p.themes.theme3.title,
      bullets: p.themes.theme3.bullets,
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: p.themes.theme4.title,
      bullets: p.themes.theme4.bullets,
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
          style={{ background: 'radial-gradient(circle at 65% 35%, rgba(191,167,122,0.10) 0%, rgba(14,22,36,1) 55%)' }}
        >
          <FunnelSVG />
          <div className="absolute right-8 top-24 opacity-5 pointer-events-none" aria-hidden="true">
            <Megaphone className="w-72 h-72 text-gold" strokeWidth={0.5} />
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
                <MegaphoneAccentSVG />
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
            4 THEMATIC AREAS
        ============================================================ */}
        <section ref={contentRef} className="py-20 bg-gradient-to-b from-[#0a1220] to-navy">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold heading-style mb-4">
                <span className="text-gold">{p.themes.title}</span>
              </h2>
              <p className="text-white/60 body-style max-w-xl mx-auto">
                {p.themes.subtitle}
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
              {themes.map((theme, i) => (
                <ThemeBlock
                  key={i}
                  icon={theme.icon}
                  title={theme.title}
                  bullets={theme.bullets}
                  isVisible={contentVisible}
                  delay={i * 120}
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
                <TrendingUp className="w-10 h-10 text-gold mx-auto mb-4 opacity-80" />
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
                    <Megaphone className="w-8 h-8 text-gold" />
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

export default KIMarketingSales;
