import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft, LayoutDashboard, Clock, Zap, CheckSquare, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../utils/translations';

// --- SVG: Dashboard Grid Pattern ---
const DashboardSVG = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
    viewBox="0 0 800 600"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Grid lines */}
    {[0, 1, 2, 3, 4].map(i => (
      <line key={`h${i}`} x1="80" y1={100 + i * 100} x2="720" y2={100 + i * 100} stroke="#BFA77A" strokeWidth="0.8" opacity="0.4" />
    ))}
    {[0, 1, 2, 3, 4, 5, 6].map(i => (
      <line key={`v${i}`} x1={80 + i * 107} y1="100" x2={80 + i * 107} y2="500" stroke="#BFA77A" strokeWidth="0.8" opacity="0.4" />
    ))}
    {/* Dashboard cards */}
    <rect x="100" y="120" width="170" height="90" rx="8" stroke="#BFA77A" strokeWidth="1.5" fill="none" />
    <rect x="300" y="120" width="170" height="90" rx="8" stroke="#BFA77A" strokeWidth="1.5" fill="none" />
    <rect x="500" y="120" width="200" height="90" rx="8" stroke="#BFA77A" strokeWidth="1.5" fill="none" />
    <rect x="100" y="240" width="380" height="130" rx="8" stroke="#BFA77A" strokeWidth="1.5" fill="none" />
    <rect x="510" y="240" width="190" height="130" rx="8" stroke="#BFA77A" strokeWidth="1.5" fill="none" />
    {/* Bar chart inside wide card */}
    {[20, 35, 25, 55, 45].map((h, i) => (
      <rect key={`bar${i}`} x={130 + i * 60} y={370 - h} width="30" height={h} rx="4" fill="#BFA77A" opacity="0.3" />
    ))}
    {/* Donut ring in small cards */}
    <circle cx="185" cy="165" r="28" stroke="#BFA77A" strokeWidth="2" fill="none" opacity="0.6" />
    <circle cx="185" cy="165" r="16" stroke="#BFA77A" strokeWidth="1" fill="none" opacity="0.3" />
    <circle cx="385" cy="165" r="28" stroke="#BFA77A" strokeWidth="2" fill="none" opacity="0.6" />
    <circle cx="385" cy="165" r="16" stroke="#BFA77A" strokeWidth="1" fill="none" opacity="0.3" />
    {/* Checklist in right card */}
    {[0, 1, 2, 3].map(i => (
      <React.Fragment key={i}>
        <circle cx="530" cy={260 + i * 24} r="5" fill="#BFA77A" opacity={0.8 - i * 0.15} />
        <line x1="545" y1={260 + i * 24} x2="685" y2={260 + i * 24} stroke="#BFA77A" strokeWidth="1.2" opacity={0.7 - i * 0.1} />
      </React.Fragment>
    ))}
    <circle cx="530" cy={260 + 4 * 24} r="5" stroke="#BFA77A" strokeWidth="1.5" fill="none" opacity="0.4" />
  </svg>
);

// --- SVG: Calendar corner decoration ---
const CalendarCornerSVG = () => (
  <svg
    className="absolute bottom-0 right-0 w-56 h-56 opacity-[0.06] pointer-events-none"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect x="20" y="30" width="160" height="150" rx="10" stroke="#BFA77A" strokeWidth="2" fill="none" />
    <line x1="20" y1="65" x2="180" y2="65" stroke="#BFA77A" strokeWidth="2" />
    {[0, 1, 2, 3, 4, 5, 6].map(i => (
      <line key={i} x1={43 + i * 23} y1="65" x2={43 + i * 23} y2="180" stroke="#BFA77A" strokeWidth="0.7" opacity="0.5" />
    ))}
    {[0, 1, 2, 3].map(i => (
      <line key={i} x1="20" y1={88 + i * 23} x2="180" y2={88 + i * 23} stroke="#BFA77A" strokeWidth="0.7" opacity="0.5" />
    ))}
    <rect x="60" y="12" width="10" height="28" rx="5" fill="#BFA77A" />
    <rect x="130" y="12" width="10" height="28" rx="5" fill="#BFA77A" />
    <rect x="43" y="70" width="20" height="16" rx="3" fill="#BFA77A" opacity="0.45" />
    <rect x="112" y="93" width="20" height="16" rx="3" fill="#BFA77A" opacity="0.3" />
    <rect x="135" y="116" width="20" height="16" rx="3" fill="#BFA77A" opacity="0.5" />
    <rect x="66" y="139" width="20" height="16" rx="3" fill="#BFA77A" opacity="0.25" />
  </svg>
);

// --- Benefit Card ---
const BenefitCard = ({
  icon, title, description, isVisible, delay
}: {
  icon: React.ReactNode; title: string; description: string; isVisible: boolean; delay: number;
}) => (
  <div
    className={`relative group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/15 p-8 hover:border-gold/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-gold/10 h-full">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="w-14 h-14 bg-gold/15 rounded-xl flex items-center justify-center mb-5 group-hover:bg-gold/25 transition-colors duration-300">
        <div className="text-gold">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold text-gold mb-3 heading-style">{title}</h3>
      <p className="text-white/80 body-style leading-relaxed">{description}</p>
    </div>
  </div>
);

// --- Main Page ---
const Projektmanagement = () => {
  const { language } = useLanguage();
  const t = useTranslations(language);
  const p = t.projektmanagementPage;

  const heroRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const [benefitsVisible, setBenefitsVisible] = useState(false);

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
      ([entry]) => { if (entry.isIntersecting) setBenefitsVisible(true); },
      { threshold: 0.15 }
    );
    if (benefitsRef.current) observer.observe(benefitsRef.current);
    return () => observer.disconnect();
  }, []);

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
          style={{ background: 'radial-gradient(circle at 60% 40%, rgba(191,167,122,0.10) 0%, rgba(14,22,36,1) 55%)' }}
        >
          <DashboardSVG />
          <div className="absolute right-8 top-24 opacity-5 pointer-events-none" aria-hidden="true">
            <LayoutDashboard className="w-72 h-72 text-gold" strokeWidth={0.5} />
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
                <CalendarCornerSVG />
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
            FOKUS · SETUP · ERGEBNIS
        ============================================================ */}
        <section className="py-16 bg-gradient-to-b from-[#0a1220] to-navy">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
              {[
                {
                  label: p.strips.focus.label,
                  text: p.strips.focus.text,
                },
                {
                  label: p.strips.setup.label,
                  text: p.strips.setup.text,
                },
                {
                  label: p.strips.result.label,
                  text: p.strips.result.text,
                },
              ].map((item, i) => (
                <div key={i} className="p-7 rounded-2xl border border-white/10 bg-white/5 text-center">
                  <div className="text-gold font-semibold text-xs uppercase tracking-widest mb-3">{item.label}</div>
                  <p className="text-white/70 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            3 BENEFITS
        ============================================================ */}
        <section ref={benefitsRef} className="py-20 bg-navy">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold heading-style mb-4">
                <span className="text-gold">{p.benefits.title}</span>
              </h2>
              <p className="text-white/60 body-style max-w-xl mx-auto">
                {p.benefits.subtitle}
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
              <BenefitCard
                icon={<Clock className="w-7 h-7" />}
                title={p.benefits.card1.title}
                description={p.benefits.card1.description}
                isVisible={benefitsVisible}
                delay={0}
              />
              <BenefitCard
                icon={<Zap className="w-7 h-7" />}
                title={p.benefits.card2.title}
                description={p.benefits.card2.description}
                isVisible={benefitsVisible}
                delay={150}
              />
              <BenefitCard
                icon={<CheckSquare className="w-7 h-7" />}
                title={p.benefits.card3.title}
                description={p.benefits.card3.description}
                isVisible={benefitsVisible}
                delay={300}
              />
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
                    <LayoutDashboard className="w-8 h-8 text-gold" />
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

export default Projektmanagement;
