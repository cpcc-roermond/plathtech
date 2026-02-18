
import React from 'react';
import { Rocket, LayoutDashboard, TrendingUp, Megaphone, GraduationCap, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../utils/translations';

const Products = () => {
  const { language } = useLanguage();
  const t = useTranslations(language);

  const products = [
    {
      icon: Rocket,
      title: t.products.items.kiStarthilfe.title,
      description: t.products.items.kiStarthilfe.description
    },
    {
      icon: LayoutDashboard,
      title: t.products.items.projektmanagement.title,
      description: t.products.items.projektmanagement.description
    },
    {
      icon: TrendingUp,
      title: t.products.items.prozessOptimierung.title,
      description: t.products.items.prozessOptimierung.description
    },
    {
      icon: Megaphone,
      title: t.products.items.marketingSales.title,
      description: t.products.items.marketingSales.description
    },
    {
      icon: GraduationCap,
      title: t.products.items.schulungen.title,
      description: t.products.items.schulungen.description
    },
    {
      icon: FileText,
      title: t.products.items.ausschreibungen.title,
      description: t.products.items.ausschreibungen.description
    }
  ];

  return (
    <section id="products" className="section-spacing relative">
      <div className="container mx-auto px-6">
        <div className="text-center large-spacing animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl heading-style element-spacing">
            <span className="text-primary">{t.products.title}</span>
          </h2>
          <div className="text-xl body-style mx-auto leading-relaxed">
            {t.products.subtitle.split('.').map((sentence, index) => (
              <span key={index}>
                {sentence.trim()}{sentence.trim() && '.'}
                {index % 2 === 1 && index < t.products.subtitle.split('.').length - 2 && <><br /><br /></>}
                {index % 2 === 0 && index < t.products.subtitle.split('.').length - 2 && ' '}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Unsere Beratungsleistungen">
          {products.map((product, index) => (
            <article
              key={index}
              className="glass-morphism rounded-xl p-8 hover:bg-white/20 transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              role="listitem"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/30 transition-colors duration-300" aria-hidden="true">
                  <product.icon className="h-6 w-6 text-primary" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="text-xl heading-style">{product.title}</h3>
              </div>
              <p className="body-style leading-relaxed">
                {product.description.split('.').map((sentence, sentenceIndex) => (
                  <span key={sentenceIndex}>
                    {sentence.trim()}{sentence.trim() && '.'}
                    {sentenceIndex % 1 === 0 && sentenceIndex < product.description.split('.').length - 2 && <><br /></>}
                  </span>
                ))}
              </p>
            </article>
          ))}
        </div>

        {/* Products CTA Section */}
        <div className="text-center mt-16 animate-fade-in-up">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="cta-button"
          >
            <span className="mr-2">📅</span>
            {t.products.ctaButton}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
