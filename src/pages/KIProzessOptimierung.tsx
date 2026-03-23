import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  ArrowLeft, TrendingUp, Search, Shield, Wrench, Calculator, Lightbulb, Rocket, ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../utils/translations';

// --- SVG: Process Flow Nodes ---
const ProcessFlowSVG = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
    viewBox="0 0 800 600"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Row 1: nodes */}
    {[120, 380, 640].map((cx, i) => (
      <React.Fragment key={`n1-${i}`}>
        <circle cx={cx} cy={160} r={40} stroke="#BFA77A" strokeWidth="1.5" fill="none" />
        <circle cx={cx} cy={160} r={6} fill="#BFA77A" />
      </React.Fragment>
    ))}
    {/* Row 2: nodes */}
    {[120, 380, 640].map((cx, i) => (
      <React.Fragment key={`n2-${i}`}>
        <circle cx={cx} cy={420} r={40} stroke="#BFA77A" strokeWidth="1.5" fill="none" />
        <circle cx={cx} cy={420} r={6} fill="#BFA77A" />
      </React.Fragment>
    ))}
    {/* Horizontal connectors row 1 */}
    <line x1="162" y1="160" x2="338" y2="160" stroke="#BFA77A" strokeWidth="1.5" markerEnd="url(#arrow)" />
    <line x1="422" y1="160" x2="598" y2="160" stroke="#BFA77A" strokeWidth="1.5" />
    {/* Arrow heads */}
    <polygon points="335,154 348,160 335,166" fill="#BFA77A" />
    <polygon points="595,154 608,160 595,166" fill="#BFA77A" />
    {/* Vertical connector right column */}
    <line x1="640" y1="202" x2="640" y2="378" stroke="#BFA77A" strokeWidth="1.5" />
    <polygon points="634,375 640,390 646,375" fill="#BFA77A" />
    {/* Horizontal connectors row 2 (reversed) */}
    <line x1="598" y1="420" x2="422" y2="420" stroke="#BFA77A" strokeWidth="1.5" />
    <polygon points="425,414 412,420 425,426" fill="#BFA77A" />
    <line x1="338" y1="420" x2="162" y2="420" stroke="#BFA77A" strokeWidth="1.5" />
    <polygon points="165,414 152,420 165,426" fill="#BFA77A" />
    {/* Step numbers */}
    {['1', '2', '3', '4', '5', '6'].map((n, i) => {
      const cx = i < 3 ? [120, 380, 640][i] : [640, 380, 120][i - 3];
      const cy = i < 3 ? 160 : 420;
      return (
        <text key={n} x={cx} y={cy + 5} textAnchor="middle" fill="#BFA77A" fontSize="14" fontWeight="600" opacity="0.8">
          {n}
        </text>
      );
    })}
    {/* Decorative grid background */}
    {[0, 1, 2, 3, 4, 5].map(i => (
      <line key={`dg${i}`} x1={50 + i * 140} y1="50" x2={50 + i * 140} y2="550" stroke="#BFA77A" strokeWidth="0.5" opacity="0.2" />
    ))}
  </svg>
);

// --- SVG: Gear corner decoration ---
const GearSVG = () => (
  <svg
    className="absolute bottom-0 right-0 w-64 h-64 opacity-[0.05] pointer-events-none"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="100" cy="100" r="50" stroke="#BFA77A" strokeWidth="3" fill="none" />
    <circle cx="100" cy="100" r="25" stroke="#BFA77A" strokeWidth="2" fill="none" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
      const rad = (angle * Math.PI) / 180;
      const x1 = 100 + 50 * Math.cos(rad);
      const y1 = 100 + 50 * Math.sin(rad);
      const x2 = 100 + 65 * Math.cos(rad);
      const y2 = 100 + 65 * Math.sin(rad);
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#BFA77A" strokeWidth="8" strokeLinecap="round" />;
    })}
    <circle cx="100" cy="100" r="8" fill="#BFA77A" />
  </svg>
);

interface ProcessStepProps {
  step: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  detail: string;
  isVisible: boolean;
  delay: number;
}

const ProcessStep = ({ step, icon, title, description, detail, isVisible, delay }: ProcessStepProps) => (
  <div
    className={`relative group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="absolute -top-5 -left-3 w-10 h-10 bg-gold text-navy rounded-full flex items-center justify-center font-bold text-lg z-10 shadow-lg shadow-gold/40">
      {step}
    </div>
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/15 p-8 hover:border-gold/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-gold/10 h-full">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="w-14 h-14 bg-gold/15 rounded-xl flex items-center justify-center mb-5 group-hover:bg-gold/25 transition-colors duration-300">
        <div className="text-gold">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold text-gold mb-3 heading-style">{title}</h3>
      <p className="text-white/80 body-style mb-4 leading-relaxed">{description}</p>
      <p className="text-white/50 text-sm italic border-l-2 border-gold/30 pl-3">{detail}</p>
    </div>
  </div>
);

// --- Main Page ---
const KIProzessOptimierung = () => {
  const { language } = useLanguage();
  const t = useTranslations(language);
  const p = t.kiGeschaeftsoptimierungPage;

  const heroRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const [processVisible, setProcessVisible] = useState(false);

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
      ([entry]) => { if (entry.isIntersecting) setProcessVisible(true); },
      { threshold: 0.1 }
    );
    if (processRef.current) observer.observe(processRef.current);
    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: <Search className="w-7 h-7" />,
      title: p.process.step1.title,
      description: p.process.step1.description,
      detail: p.process.step1.detail,
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: p.process.step2.title,
      description: p.process.step2.description,
      detail: p.process.step2.detail,
    },
    {
      icon: <Wrench className="w-7 h-7" />,
      title: p.process.step3.title,
      description: p.process.step3.description,
      detail: p.process.step3.detail,
    },
    {
      icon: <Calculator className="w-7 h-7" />,
      title: p.process.step4.title,
      description: p.process.step4.description,
      detail: p.process.step4.detail,
    },
    {
      icon: <Lightbulb className="w-7 h-7" />,
      title: p.process.step5.title,
      description: p.process.step5.description,
      detail: p.process.step5.detail,
    },
    {
      icon: <Rocket className="w-7 h-7" />,
      title: p.process.step6.title,
      description: p.process.step6.description,
      detail: p.process.step6.detail,
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
          style={{ background: 'radial-gradient(circle at 55% 35%, rgba(191,167,122,0.10) 0%, rgba(14,22,36,1) 55%)' }}
        >
          <ProcessFlowSVG />
          <div className="absolute right-8 top-24 opacity-5 pointer-events-none" aria-hidden="true">
            <TrendingUp className="w-72 h-72 text-gold" strokeWidth={0.5} />
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
                {p.quote}<span className="text-gold font-medium not-italic">{p.quoteHighlight}</span>
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
            INTRO CARD
        ============================================================ */}
        <section className="pb-12 bg-gradient-to-b from-navy to-[#0a1220]">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 border border-gold/30 p-10 md:p-14 text-center">
                <div className="absolute inset-0 shimmer opacity-30 pointer-events-none" />
                <GearSVG />
                <div className="relative">
                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                    {p.highlightCard}{' '}
                    <span className="text-gold font-semibold">{p.highlightCardHighlight}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            6-STEP PROCESS
        ============================================================ */}
        <section ref={processRef} className="py-20 bg-gradient-to-b from-[#0a1220] to-navy">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold heading-style mb-4">
                <span className="text-gold">{p.process.title}</span>
              </h2>
              <p className="text-white/60 body-style max-w-xl mx-auto">
                {p.process.subtitle}
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
              {steps.map((s, i) => (
                <ProcessStep
                  key={i}
                  step={i + 1}
                  icon={s.icon}
                  title={s.title}
                  description={s.description}
                  detail={s.detail}
                  isVisible={processVisible}
                  delay={i * 100}
                />
              ))}
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
                    <TrendingUp className="w-8 h-8 text-gold" />
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

export default KIProzessOptimierung;
