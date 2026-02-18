
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import KISparring from '../components/KISparring';
import Products from '../components/Products';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';
import { useLanguage } from '../contexts/LanguageContext';

const Index = () => {
  const { hasCompletedLoading, setHasCompletedLoading } = useLanguage();
  const isLoading = !hasCompletedLoading;

  useEffect(() => {
    // Fade in animation on page load (only after loading is complete)
    if (!isLoading) {
      document.body.style.opacity = '0';
      document.body.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        document.body.style.transition = 'all 0.6s ease-out';
        document.body.style.opacity = '1';
        document.body.style.transform = 'translateY(0)';
      }, 100);

      // Intersection Observer for scroll animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-blur-to-clear');
          }
        });
      }, observerOptions);

      // Observe all sections
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        observer.observe(section);
      });

      return () => {
        sections.forEach((section) => {
          observer.unobserve(section);
        });
      };
    }
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setHasCompletedLoading(true);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main id="main-content" role="main">
        <Hero />
        <About />
        <KISparring />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
