import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft, Rocket, Search, Map, Users, TrendingUp, CheckCircle2, ChevronRight, Target, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../utils/translations';

// --- SVG: Neural Network Background Decoration ---
const NeuralNetSVG = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
    viewBox="0 0 800 600"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Connections */}
    {[
      [100, 80, 300, 200], [100, 80, 280, 80], [280, 80, 500, 150],
      [300, 200, 500, 150], [300, 200, 480, 300], [500, 150, 680, 100],
      [500, 150, 660, 260], [480, 300, 660, 260], [480, 300, 650, 420],
      [660, 260, 780, 200], [650, 420, 780, 380], [650, 420, 760, 520],
      [140, 320, 300, 200], [140, 320, 340, 420], [340, 420, 480, 300],
      [340, 420, 480, 520], [480, 520, 650, 420], [100, 480, 340, 420],
      [280, 80, 140, 180], [140, 180, 140, 320],
    ].map(([x1, y1, x2, y2], i) => (
      <line
        key={i}
        x1={x1} y1={y1} x2={x2} y2={y2}
        stroke="#BFA77A"
        strokeWidth="1"
      />
    ))}
    {/* Nodes */}
    {[
      [100, 80], [280, 80], [140, 180], [300, 200], [140, 320],
      [480, 300], [500, 150], [680, 100], [660, 260], [780, 200],
      [650, 420], [780, 380], [760, 520], [340, 420], [480, 520],
      [100, 480],
    ].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 6 : 4} fill="#BFA77A" />
    ))}
  </svg>
);

// --- SVG: Decorative Circuit Pattern ---
const CircuitSVG = () => (
  <svg
    className="absolute bottom-0 right-0 w-64 h-64 opacity-[0.05] pointer-events-none"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M20 100 H60 V60 H100 V20" stroke="#BFA77A" strokeWidth="2" fill="none" />
    <path d="M180 100 H140 V140 H100 V180" stroke="#BFA77A" strokeWidth="2" fill="none" />
    <path d="M100 100 H140 V60 H180" stroke="#BFA77A" strokeWidth="1.5" fill="none" />
    <path d="M100 100 H60 V140 H20" stroke="#BFA77A" strokeWidth="1.5" fill="none" />
    <circle cx="100" cy="100" r="8" stroke="#BFA77A" strokeWidth="2" fill="none" />
    <circle cx="60" cy="60" r="4" fill="#BFA77A" />
    <circle cx="140" cy="60" r="4" fill="#BFA77A" />
    <circle cx="60" cy="140" r="4" fill="#BFA77A" />
    <circle cx="140" cy="140" r="4" fill="#BFA77A" />
    <circle cx="100" cy="20" r="3" fill="#BFA77A" />
    <circle cx="180" cy="100" r="3" fill="#BFA77A" />
    <circle cx="20" cy="100" r="3" fill="#BFA77A" />
    <circle cx="100" cy="180" r="3" fill="#BFA77A" />
  </svg>
);

// --- SVG: Compass / Roadmap Icon ---
const CompassSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 80 80" className={className} aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="40" r="36" stroke="#BFA77A" strokeWidth="2" opacity="0.4" />
    <circle cx="40" cy="40" r="28" stroke="#BFA77A" strokeWidth="1" opacity="0.2" />
    <circle cx="40" cy="40" r="4" fill="#BFA77A" />
    <polygon points="40,14 44,36 40,32 36,36" fill="#BFA77A" opacity="0.9" />
    <polygon points="40,66 36,44 40,48 44,44" fill="#BFA77A" opacity="0.4" />
  </svg>
);

// --- Animated counter for stats ---
const useCountUp = (target: number, duration = 1500, isVisible: boolean) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, isVisible]);
  return count;
};

const StatCard = ({ value, suffix, label, isVisible }: { value: number; suffix: string; label: string; isVisible: boolean }) => {
  const count = useCountUp(value, 1200, isVisible);
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-gold heading-style mb-2">
        {count}{suffix}
      </div>
      <div className="text-white/60 text-sm">{label}</div>
    </div>
  );
};

// --- Process Step Card ---
const ProcessStep = ({
  step, icon, title, description, detail, isVisible, delay
}: {
  step: number; icon: React.ReactNode; title: string; description: string; detail: string;
  isVisible: boolean; delay: number;
}) => (
  <div
    className={`relative group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    {/* Step Number */}
    <div className="absolute -top-5 -left-3 w-10 h-10 bg-gold text-navy rounded-full flex items-center justify-center font-bold text-lg z-10 shadow-lg shadow-gold/40">
      {step}
    </div>

    {/* Card */}
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/15 p-8 hover:border-gold/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-gold/10 h-full">
      {/* Glow on hover */}
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

// --- Kernfrage Card ---
const KernfrageCard = ({
  icon, title, questions, isVisible, delay
}: {
  icon: React.ReactNode; title: string; questions: string[]; isVisible: boolean; delay: number;
}) => (
  <div
    className={`relative group transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gold/15 via-gold/5 to-transparent border border-gold/25 p-7 hover:border-gold/50 transition-all duration-500 h-full">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gold/8 rounded-full blur-2xl group-hover:bg-gold/15 transition-all duration-500" />

      <div className="relative">
        <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-colors duration-300">
          <div className="text-gold">{icon}</div>
        </div>

        <h3 className="text-lg font-semibold text-gold mb-4 heading-style">{title}</h3>

        <ul className="space-y-3">
          {questions.map((q, i) => (
            <li key={i} className="flex items-start gap-2 text-white/75 text-sm leading-relaxed">
              <ChevronRight className="w-4 h-4 text-gold/70 flex-shrink-0 mt-0.5" />
              {q}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

// --- Main Page Component ---
const KIStarthilfe = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const kernfragenRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);

  const [processVisible, setProcessVisible] = useState(false);
  const [kernfragenVisible, setKernfragenVisible] = useState(false);
  const [benefitsVisible, setBenefitsVisible] = useState(false);

  const { language } = useLanguage();
  const t = useTranslations(language);
  const p = t.kiStarthilfePage;

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

  // Mouse-tracking gradient (same as AboutMe/Hero)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xPos = (clientX / innerWidth) * 100;
      const yPos = (clientY / innerHeight) * 100;
      heroRef.current.style.background = `radial-gradient(circle at ${xPos}% ${yPos}%, rgba(191, 167, 122, 0.10) 0%, rgba(14, 22, 36, 1) 55%)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // IntersectionObserver for scroll animations
  useEffect(() => {
    const observe = (ref: React.RefObject<HTMLDivElement>, setter: (v: boolean) => void) => {
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setter(true); },
        { threshold: 0.15 }
      );
      if (ref.current) observer.observe(ref.current);
      return observer;
    };

    const obs1 = observe(processRef, setProcessVisible);
    const obs2 = observe(kernfragenRef, setKernfragenVisible);
    const obs3 = observe(benefitsRef, setBenefitsVisible);

    return () => { obs1.disconnect(); obs2.disconnect(); obs3.disconnect(); };
  }, []);

  const benefits = p.benefits.items;

  return (
    <div className="min-h-screen bg-navy text-white">
      <Header />

      <main>
        {/* ============================================================
            HERO SECTION
        ============================================================ */}
        <section
          ref={heroRef}
          className="relative pt-28 pb-12 md:pt-36 md:pb-20 overflow-hidden transition-all duration-300"
          style={{ background: 'radial-gradient(circle at 60% 40%, rgba(191,167,122,0.10) 0%, rgba(14,22,36,1) 55%)' }}
        >
          {/* Decorative neural net */}
          <NeuralNetSVG />

          {/* Large decorative rocket – background element */}
          <div className="absolute right-8 top-24 opacity-5 pointer-events-none" aria-hidden="true">
            <Rocket className="w-72 h-72 text-gold" strokeWidth={0.5} />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            {/* Back Navigation */}
            <div className="mb-10">
              <Link
                to="/"
                className="inline-flex items-center text-gold hover:text-gold/80 transition-colors duration-300 group"
              >
                <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
                {p.backToHome}
              </Link>
            </div>

            {/* Main Heading */}
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold mb-6 heading-style leading-tight">
                <span className="text-gold">{p.heroHeading}</span>
              </h1>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light italic mb-8 leading-relaxed">
                {p.quote}<span className="text-gold font-medium not-italic">{p.quoteHighlight}</span>"
              </blockquote>

              {/* Intro Paragraph */}
              <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed body-style">
                {p.intro}
              </p>
            </div>

            {/* Scroll indicator */}
            <div className="flex justify-center mt-8">
              <div className="w-px h-16 bg-gradient-to-b from-gold/60 to-transparent animate-pulse" />
            </div>
          </div>
        </section>

        {/* ============================================================
            PROBLEM STATEMENT – large highlight card
        ============================================================ */}
        <section className="pb-12 bg-gradient-to-b from-navy to-[#0a1220]">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 border border-gold/30 p-10 md:p-14 text-center">
                {/* Shimmer */}
                <div className="absolute inset-0 shimmer opacity-30 pointer-events-none" />
                <CompassSVG className="absolute right-6 top-6 w-20 h-20 opacity-30" />
                <CircuitSVG />

                <div className="relative">
                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                    {p.highlightCard}<span className="text-gold font-semibold">{p.highlightCardHighlight}</span>
                    {language === 'de' && ' und liefert fundierte Antworten und realistische Ziele – statt falscher Versprechen.'}
                    {language === 'en' && ' and delivers well-founded answers and realistic goals – no false promises.'}
                    {language === 'nl' && ' en levert onderbouwde antwoorden en realistische doelen – in plaats van loze beloften.'}
                    {language === 'ar' && ' ويقدم إجابات موضوعية وأهدافاً واقعية – بدلاً من الوعود الفارغة.'}
                    {language === 'ru' && ' и даёт взвешенные ответы и реалистичные цели – вместо пустых обещаний.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            3-STEP PROCESS
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

            {/* Connector line for desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 relative">
              {/* Desktop connector */}
              <div className="hidden md:block absolute top-14 left-[16%] right-[16%] h-px bg-gradient-to-r from-gold/40 via-gold/60 to-gold/40 z-0" />

              <ProcessStep
                step={1}
                icon={<Search className="w-7 h-7" />}
                title={p.process.step1.title}
                description={p.process.step1.description}
                detail={p.process.step1.detail}
                isVisible={processVisible}
                delay={0}
              />
              <ProcessStep
                step={2}
                icon={<Map className="w-7 h-7" />}
                title={p.process.step2.title}
                description={p.process.step2.description}
                detail={p.process.step2.detail}
                isVisible={processVisible}
                delay={150}
              />
              <ProcessStep
                step={3}
                icon={<Rocket className="w-7 h-7" />}
                title={p.process.step3.title}
                description={p.process.step3.description}
                detail={p.process.step3.detail}
                isVisible={processVisible}
                delay={300}
              />
            </div>
          </div>
        </section>

        {/* ============================================================
            KERNFRAGEN DER ANALYSE
        ============================================================ */}
        <section ref={kernfragenRef} className="py-24 bg-navy relative overflow-hidden">
          {/* Large decorative background element */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/3 blur-3xl" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold heading-style mb-4">
                <span className="text-gold">{p.coreQuestions.title}</span>
              </h2>
              <p className="text-white/60 body-style max-w-xl mx-auto">
                {p.coreQuestions.subtitle}
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
              <KernfrageCard
                icon={<Target className="w-6 h-6" />}
                title={p.coreQuestions.q1.title}
                questions={p.coreQuestions.q1.questions}
                isVisible={kernfragenVisible}
                delay={0}
              />
              <KernfrageCard
                icon={<TrendingUp className="w-6 h-6" />}
                title={p.coreQuestions.q2.title}
                questions={p.coreQuestions.q2.questions}
                isVisible={kernfragenVisible}
                delay={150}
              />
              <KernfrageCard
                icon={<Users className="w-6 h-6" />}
                title={p.coreQuestions.q3.title}
                questions={p.coreQuestions.q3.questions}
                isVisible={kernfragenVisible}
                delay={300}
              />
            </div>
          </div>
        </section>

        {/* ============================================================
            VISUAL DIVIDER – animated gradient line
        ============================================================ */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        {/* ============================================================
            BENEFITS / VERSPRECHEN
        ============================================================ */}
        <section ref={benefitsRef} className="py-20 bg-gradient-to-b from-navy to-[#0a1220]">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-semibold heading-style mb-4">
                  <span className="text-gold">{p.benefits.title}</span>
                </h2>
              </div>

              {/* 2x2 Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-5 p-6 rounded-2xl glass-morphism border border-white/10 hover:border-gold/30 transition-all duration-500 hover:scale-[1.02] ${
                      benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${i * 100}ms`, transitionDuration: '600ms' }}
                  >
                    <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-gold" />
                    </div>
                    <span className="text-white font-medium text-lg">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Additional context */}
              <div className="mt-10 p-8 rounded-2xl bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 text-center">
                <Brain className="w-10 h-10 text-gold mx-auto mb-4 opacity-80" />
                <p className="text-white/80 leading-relaxed body-style max-w-2xl mx-auto">
                  {p.benefits.closingText}<span className="text-gold font-medium">{p.benefits.closingHighlight}</span>
                  {language === 'de' && ', die Ihr Unternehmen, Ihre Branche und Ihre Mitarbeiter in den Mittelpunkt stellt.'}
                  {language === 'en' && ' that puts your company, your industry and your people at the centre.'}
                  {language === 'nl' && ' die uw organisatie, uw sector en uw medewerkers centraal stelt.'}
                  {language === 'ar' && ' يضع مؤسستكم وقطاعكم وموظفيكم في صميم العمل.'}
                  {language === 'ru' && ', в центре которого ваш бизнес, ваша отрасль и ваши сотрудники.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            CTA SECTION
        ============================================================ */}
        <section className="py-24 bg-[#0a1220]">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              {/* CTA Card */}
              <div className="relative overflow-hidden rounded-3xl text-center">
                {/* Layered background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/25 via-gold/10 to-gold/25 rounded-3xl" />
                <div className="absolute inset-0 shimmer opacity-40 rounded-3xl pointer-events-none" />

                {/* Decorative corner circles */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 p-12 md:p-16">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/20 rounded-2xl mb-6">
                    <Rocket className="w-8 h-8 text-gold" />
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

                  <p className="text-white/40 text-sm mt-6">
                    {p.cta.tagline}
                  </p>
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

export default KIStarthilfe;
