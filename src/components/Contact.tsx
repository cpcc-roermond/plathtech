
import React from 'react';
import { Phone, Mail, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../utils/translations';

const Contact = () => {
  const { language } = useLanguage();
  const t = useTranslations(language);

  return (
    <section id="contact" className="section-spacing">
      <div className="container mx-auto px-6">
        <div className="text-center large-spacing animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-semibold element-spacing heading-style">
            <span className="text-primary">{t.contact.title}</span>
          </h2>
          <div className="text-xl body-style mx-auto">
            {t.contact.subtitle.split('.').map((sentence, index) => (
              <span key={index}>
                {sentence.trim()}{sentence.trim() && '.'}
                {index % 2 === 1 && index < t.contact.subtitle.split('.').length - 2 && <><br /><br /></>}
                {index % 2 === 0 && index < t.contact.subtitle.split('.').length - 2 && ' '}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {/* Contact Information */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-semibold mb-8 heading-style">
              <span className="text-primary">{t.contact.speakWithUs}</span>
            </h3>
            
            <address className="space-y-6 not-italic">
              <div className="flex items-center glass-morphism rounded-xl p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4" aria-hidden="true">
                  <Phone className="h-6 w-6 text-primary" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{t.contact.phone}</h4>
                  <p className="body-style">
                    <a href="tel:+31641280719" className="hover:text-primary transition-colors">+31-641-280719 (NL)</a>
                  </p>
                  <p className="body-style">
                    <a href="tel:+4915205198771" className="hover:text-primary transition-colors">+49-152-05198771 (DE)</a>
                  </p>
                </div>
              </div>

              <div className="flex items-center glass-morphism rounded-xl p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4" aria-hidden="true">
                  <Mail className="h-6 w-6 text-primary" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{t.contact.email}</h4>
                  <a
                    href="mailto:info@cp-cc.nl"
                    className="body-style text-primary hover:text-primary/80 transition-colors duration-300 cursor-pointer"
                  >
                    info@cp-cc.nl
                  </a>
                </div>
              </div>

              <div className="flex items-center glass-morphism rounded-xl p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4" aria-hidden="true">
                  <MapPin className="h-6 w-6 text-primary" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{t.contact.locations}</h4>
                  <p className="body-style">Dubai Investment Park, Dubai (UAE)</p>
                </div>
              </div>
            </address>
          </div>

          {/* CTA Section */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="glass-morphism rounded-xl p-8 text-center">
              <h3 className="text-2xl font-semibold mb-6 heading-style">
                <span className="text-primary">{t.contact.readyForDialog}</span>
              </h3>
              <div className="body-style mb-8 leading-relaxed text-left">
                {t.contact.dialogDescription.split('.').map((sentence, index) => (
                  <span key={index}>
                    {sentence.trim()}{sentence.trim() && '.'}
                    {index % 2 === 1 && index < t.contact.dialogDescription.split('.').length - 2 && <><br /><br /></>}
                    {index % 2 === 0 && index < t.contact.dialogDescription.split('.').length - 2 && ' '}
                  </span>
                ))}
              </div>
              
              <Link 
                to="/kontakt"
                className="cta-button mb-6"
              >
                <Calendar className="mr-3 h-5 w-5" />
                {t.contact.scheduleAppointment}
              </Link>

              <div className="border-t border-white/20 pt-6">
                <p className="text-sm body-style">
                  {t.contact.orCallDirectly}<br />
                  <span className="text-primary font-medium">+31-641-280719 (NL)</span><br />
                  <span className="text-primary font-medium">+49-152-05198771 (DE)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
