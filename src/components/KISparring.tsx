
import React from 'react';
import { Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../utils/translations';

const KISparring = () => {
  const { language } = useLanguage();
  const t = useTranslations(language);

  return (
    <section id="ki-sparring" className="py-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 heading-style">
            <span className="text-gold">{t.kiSparring.title}</span>
          </h2>
          <p className="text-xl body-style max-w-3xl mx-auto">
            {t.kiSparring.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-morphism rounded-xl p-8 md:p-12 text-center animate-fade-in-up">
            <div className="mb-8">
              <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-10 w-10 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-semibold mb-6 heading-style">
                <span className="text-gold">{t.kiSparring.consultationTitle}</span>
              </h3>
              <p className="text-lg body-style leading-relaxed mb-8 max-w-2xl mx-auto">
                {t.kiSparring.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="flex items-center justify-center md:justify-start">
                <CheckCircle className="h-6 w-6 text-gold mr-3 flex-shrink-0" />
                <span className="body-style">{t.kiSparring.feature1}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <CheckCircle className="h-6 w-6 text-gold mr-3 flex-shrink-0" />
                <span className="body-style">{t.kiSparring.feature2}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <CheckCircle className="h-6 w-6 text-gold mr-3 flex-shrink-0" />
                <span className="body-style">{t.kiSparring.feature3}</span>
              </div>
            </div>

            <Link 
              to="/kontakt"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-navy bg-gold rounded-lg hover:bg-gold/90 transition-colors duration-300 group"
            >
              <Calendar className="mr-3 h-5 w-5" />
              {t.kiSparring.bookButton}
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KISparring;
