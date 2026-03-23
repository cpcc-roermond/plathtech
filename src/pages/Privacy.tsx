
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../utils/translations';

const Privacy = () => {
  const { language } = useLanguage();
  const t = useTranslations(language);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-navy text-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-gold hover:text-gold/80 transition-colors duration-300"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t.privacy.backToHome}
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 heading-style">
              <span className="text-gold">{t.privacy.title}</span>
            </h1>
            <p className="text-xl body-style max-w-3xl mx-auto">
              {t.privacy.subtitle}
            </p>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            <div className="glass-morphism rounded-xl p-8 md:p-12 space-y-8">
              
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gold heading-style">{t.privacy.sections.responsible.title}</h2>
                <div className="body-style space-y-2">
                  <p>{t.privacy.sections.responsible.content}</p>
                  <div className="bg-navy/30 p-4 rounded-lg mt-4">
                    <p className="font-medium">PLATHTECH INNOVATION & ARTIFICIAL INTELLIGENCE RESEARCH & CONSULTANCIES L.L.C S.O.C</p>
                    <p>Managing Director: Christian Plath</p>
                    <p>Office S1-252</p>
                    <p>PROPERTY INVESTMENT OFFICE 4-S1</p>
                    <p>Dubai Investment Park First</p>
                    <p>Dubai, United Arab Emirates</p>
                    <p>Makani No: 14468 66589</p>
                    <p>E-Mail: info@cp-cc.nl</p>
                    <p>Telefon: +31-641-280719</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gold heading-style">{t.privacy.sections.dataCollection.title}</h2>
                <div className="body-style space-y-4">
                  <h3 className="text-lg font-medium text-white">{t.privacy.sections.dataCollection.websiteVisit}</h3>
                  <p>{t.privacy.sections.dataCollection.content}</p>
                  <p>{language === 'de' ? 'Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:' : 'The following information is collected without your intervention and stored until automated deletion:'}</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    {t.privacy.sections.dataCollection.listItems.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gold heading-style">{t.privacy.sections.contact.title}</h2>
                <div className="body-style space-y-4">
                  <p>{t.privacy.sections.contact.content}</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gold heading-style">{t.privacy.sections.dataSharing.title}</h2>
                <div className="body-style">
                  <p>{t.privacy.sections.dataSharing.content}</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-4">
                    {t.privacy.sections.dataSharing.listItems.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gold heading-style">{t.privacy.sections.rights.title}</h2>
                <div className="body-style space-y-4">
                  <p>{t.privacy.sections.rights.content}</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    {t.privacy.sections.rights.listItems.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <p className="mt-4">{t.privacy.sections.rights.complaint}</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gold heading-style">{t.privacy.sections.security.title}</h2>
                <div className="body-style">
                  <p>{t.privacy.sections.security.content}</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gold heading-style">{t.privacy.sections.updates.title}</h2>
                <div className="body-style">
                  <p>{t.privacy.sections.updates.content}</p>
                </div>
              </section>

              <div className="border-t border-white/20 pt-8 mt-12">
                <p className="text-sm body-style text-center">
                  {t.privacy.lastUpdated}
                </p>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
