import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  ArrowLeft, FileText, Building2, Briefcase, CheckCircle2, AlertCircle, Scale, ChevronRight, ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../utils/translations';

// --- SVG: Document Stack Background ---
const DocumentStackSVG = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
    viewBox="0 0 800 600"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Back document */}
    <rect x="180" y="80" width="260" height="340" rx="8" stroke="#BFA77A" strokeWidth="1.5" fill="none" transform="rotate(-8 310 250)" />
    {/* Middle document */}
    <rect x="170" y="70" width="260" height="340" rx="8" stroke="#BFA77A" strokeWidth="1.5" fill="none" transform="rotate(-3 300 240)" />
    {/* Front document */}
    <rect x="160" y="60" width="260" height="340" rx="8" stroke="#BFA77A" strokeWidth="2" fill="none" />
    {/* Document lines */}
    {[100, 125, 150, 175, 200, 225, 250, 275].map((y, i) => (
      <line key={i} x1="190" y1={y} x2={390 - (i % 3 === 0 ? 30 : 0)} y2={y} stroke="#BFA77A" strokeWidth="1" opacity="0.5" />
    ))}
    {/* Second document stack on right */}
    <rect x="400" y="100" width="220" height="300" rx="8" stroke="#BFA77A" strokeWidth="1.5" fill="none" transform="rotate(5 510 250)" />
    <rect x="390" y="90" width="220" height="300" rx="8" stroke="#BFA77A" strokeWidth="1.5" fill="none" transform="rotate(2 500 240)" />
    <rect x="380" y="80" width="220" height="300" rx="8" stroke="#BFA77A" strokeWidth="2" fill="none" />
    {/* Document lines right */}
    {[120, 145, 170, 195, 220, 245, 270].map((y, i) => (
      <line key={i} x1="405" y1={y} x2={580 - (i % 2 === 0 ? 20 : 0)} y2={y} stroke="#BFA77A" strokeWidth="1" opacity="0.4" />
    ))}
    {/* Connector / scale beam */}
    <line x1="290" y1="420" x2="490" y2="420" stroke="#BFA77A" strokeWidth="1.5" opacity="0.4" />
    <line x1="390" y1="380" x2="390" y2="480" stroke="#BFA77A" strokeWidth="2" />
    <circle cx="390" cy="380" r="5" fill="#BFA77A" />
    {/* Scale pans */}
    <path d="M240,420 Q290,440 340,420" stroke="#BFA77A" strokeWidth="1.5" fill="none" />
    <path d="M440,420 Q490,440 540,420" stroke="#BFA77A" strokeWidth="1.5" fill="none" />
    {/* Ground */}
    <line x1="350" y1="480" x2="430" y2="480" stroke="#BFA77A" strokeWidth="2" />
  </svg>
);

// --- SVG: Scale accent for highlight card ---
const ScaleAccentSVG = () => (
  <svg
    className="absolute right-6 top-6 w-20 h-20 opacity-30 pointer-events-none"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <line x1="40" y1="12" x2="40" y2="68" stroke="#BFA77A" strokeWidth="2" />
    <line x1="14" y1="28" x2="66" y2="28" stroke="#BFA77A" strokeWidth="2" />
    <path d="M14,28 Q20,42 26,28" stroke="#BFA77A" strokeWidth="1.5" fill="none" />
    <path d="M54,28 Q60,42 66,28" stroke="#BFA77A" strokeWidth="1.5" fill="none" />
    <circle cx="40" cy="12" r="4" fill="#BFA77A" opacity="0.8" />
    <line x1="32" y1="68" x2="48" y2="68" stroke="#BFA77A" strokeWidth="2" />
  </svg>
);

interface SideCardProps {
  icon: React.ReactNode;
  sideLabel: string;
  title: string;
  items: { heading: string; description: string }[];
  isVisible: boolean;
  delay: number;
  accentColor: string;
}

const SideCard = ({ icon, sideLabel, title, items, isVisible, delay, accentColor }: SideCardProps) => (
  <div
    className={`relative group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className={`relative overflow-hidden rounded-2xl border p-8 hover:scale-[1.01] transition-all duration-500 hover:shadow-xl hover:shadow-gold/10 h-full ${accentColor}`}>
      <div className="absolute top-0 right-0 w-40 h-40 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/10 transition-all duration-500" />
      <div className="relative">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 bg-gold/20 rounded-xl flex items-center justify-center group-hover:bg-gold/30 transition-colors duration-300">
            <div className="text-gold">{icon}</div>
          </div>
          <div>
            <div className="text-gold/60 text-xs font-semibold uppercase tracking-widest">{sideLabel}</div>
            <h3 className="text-xl font-semibold text-gold heading-style">{title}</h3>
          </div>
        </div>

        <div className="space-y-5">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-gold/70 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-white/90 font-medium text-sm mb-1">{item.heading}</p>
                <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// --- Main Page ---
const KIAusschreibungen = () => {
  const { language } = useLanguage();
  const t = useTranslations(language);
  const p = t.kiAusschreibungenPage;

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const painRef = useRef<HTMLDivElement>(null);
  const [contentVisible, setContentVisible] = useState(false);
  const [painVisible, setPainVisible] = useState(false);

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
    const obs1 = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setPainVisible(true); },
      { threshold: 0.15 }
    );
    const obs2 = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setContentVisible(true); },
      { threshold: 0.1 }
    );
    if (painRef.current) obs1.observe(painRef.current);
    if (contentRef.current) obs2.observe(contentRef.current);
    return () => { obs1.disconnect(); obs2.disconnect(); };
  }, []);

  const painPoints = p.painPoints.items;

  const customerItems = p.sides.customer.items;

  const providerItems = p.sides.provider.items;

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
          style={{ background: 'radial-gradient(circle at 55% 45%, rgba(191,167,122,0.10) 0%, rgba(14,22,36,1) 55%)' }}
        >
          <DocumentStackSVG />
          <div className="absolute right-8 top-24 opacity-5 pointer-events-none" aria-hidden="true">
            <FileText className="w-72 h-72 text-gold" strokeWidth={0.5} />
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
                <ScaleAccentSVG />
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
            PAIN POINTS
        ============================================================ */}
        <section className="py-16 bg-gradient-to-b from-[#0a1220] to-navy">
          <div ref={painRef} className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold heading-style mb-10 text-center">
                <span className="text-gold">{p.painPoints.title}</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {painPoints.map((point, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-3 p-5 rounded-xl border border-white/10 bg-white/5 transition-all duration-600 ${painVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <AlertCircle className="w-5 h-5 text-gold/60 flex-shrink-0 mt-0.5" />
                    <span className="text-white/75 text-sm leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            TWO SIDES
        ============================================================ */}
        <section ref={contentRef} className="py-20 bg-navy relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/3 blur-3xl" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold heading-style mb-4">
                <span className="text-gold">{p.sides.title}</span>
              </h2>
              <p className="text-white/60 body-style max-w-xl mx-auto">
                {p.sides.subtitle}
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
              <SideCard
                icon={<Building2 className="w-6 h-6" />}
                sideLabel={p.sides.customer.sideLabel}
                title={p.sides.customer.title}
                items={customerItems}
                isVisible={contentVisible}
                delay={0}
                accentColor="bg-gradient-to-br from-gold/15 via-gold/5 to-transparent border-gold/25 hover:border-gold/50"
              />
              <SideCard
                icon={<Briefcase className="w-6 h-6" />}
                sideLabel={p.sides.provider.sideLabel}
                title={p.sides.provider.title}
                items={providerItems}
                isVisible={contentVisible}
                delay={150}
                accentColor="bg-gradient-to-br from-white/10 via-white/5 to-transparent border-white/15 hover:border-gold/40"
              />
            </div>
          </div>
        </section>

        {/* ============================================================
            RESULT STATEMENT
        ============================================================ */}
        <section className="py-16 bg-gradient-to-b from-navy to-[#0a1220]">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 text-center">
                <ShieldCheck className="w-10 h-10 text-gold mx-auto mb-4 opacity-80" />
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
        <section className="py-12 bg-gradient-to-b from-[#0a1220] to-navy">
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
        <section className="py-24 bg-navy">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/25 via-gold/10 to-gold/25 rounded-3xl" />
                <div className="absolute inset-0 shimmer opacity-40 rounded-3xl pointer-events-none" />
                <div className="absolute top-0 left-0 w-40 h-40 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 p-12 md:p-16">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/20 rounded-2xl mb-6">
                    <Scale className="w-8 h-8 text-gold" />
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

export default KIAusschreibungen;
