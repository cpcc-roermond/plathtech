
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../utils/translations';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language } = useLanguage();
  const t = useTranslations(language);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'backdrop-blur-xl bg-background/90 border-b border-primary/20 shadow-2xl' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section - Links */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex flex-col items-center group cursor-pointer transform transition-all duration-500 hover:scale-105" aria-label="Zur Startseite">
                {/* Lion Logo - Made twice as large */}
                <div className="relative mb-2">
                  <img
                    src="/logos/logo1fffff.png"
                    alt="PLATHTECH - Innovation & AI Consultancy Logo"
                    className="h-40 w-auto opacity-90 group-hover:opacity-100 transition-all duration-300 filter drop-shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gold/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"></div>
                </div>

                {/* Decorative Lines without Logo */}
                <div className="flex items-center" aria-hidden="true">
                  <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold/80 group-hover:to-gold transition-all duration-500"></div>
                  <div className="w-6 mx-3"></div>
                  <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold/80 group-hover:to-gold transition-all duration-500"></div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation - Rechts */}
            <div className="hidden lg:flex items-center space-x-8">
              {isHomePage && (
                <>
                  <nav className="flex items-center space-x-8" aria-label="Hauptnavigation">
                    {[
                      { id: 'about', label: t.nav.about },
                      { id: 'ki-sparring', label: t.nav.kiSparring },
                      { id: 'products', label: t.nav.products },
                      { id: 'contact', label: t.nav.contact }
                    ].map((item, index) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="relative text-white/90 hover:text-primary transition-all duration-300 font-light text-base group"
                        style={{ animationDelay: `${index * 0.1}s` }}
                        aria-label={`Navigiere zu ${item.label}`}
                      >
                        {item.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-500" aria-hidden="true"></span>
                        <span className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" aria-hidden="true"></span>
                      </button>
                    ))}
                  </nav>

                  {/* Header CTA */}
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="ml-6 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 text-sm font-medium"
                  >
                    {t.header.ctaButton}
                  </button>
                </>
              )}

              {/* Language Switcher */}
              <div className={isHomePage ? "ml-4" : ""}>
                <LanguageSwitcher />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-4">
              <LanguageSwitcher />
              {isHomePage && (
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="relative p-2 text-white hover:text-gold transition-all duration-300 group"
                  aria-label={isMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
                  aria-expanded={isMenuOpen}
                  aria-controls="mobile-menu"
                >
                  <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300" aria-hidden="true"></div>
                  {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu - only on homepage */}
      {isHomePage && (
        <nav
          id="mobile-menu"
          className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          aria-label="Mobile Navigation"
          aria-hidden={!isMenuOpen}
        >
          <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" aria-hidden="true"></div>
          <div className={`relative h-full flex flex-col justify-center items-center space-y-8 transform transition-all duration-700 ${
            isMenuOpen ? 'translate-y-0 scale-100' : 'translate-y-10 scale-95'
          }`}>
            {[
              { id: 'about', label: t.nav.about },
              { id: 'ki-sparring', label: t.nav.kiSparring },
              { id: 'products', label: t.nav.products },
              { id: 'contact', label: t.nav.contact }
            ].map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-2xl text-white/90 hover:text-primary transition-all duration-500 font-light group"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isMenuOpen ? 1 : 0,
                  transition: `all 0.6s ease ${index * 0.1}s`
                }}
                aria-label={`Navigiere zu ${item.label}`}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                {item.label}
                <span className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" aria-hidden="true"></span>
              </button>
            ))}
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
