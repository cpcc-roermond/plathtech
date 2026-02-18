import React from 'react';
import { Lightbulb, Target, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../utils/translations';
const About = () => {
  const {
    language
  } = useLanguage();
  const t = useTranslations(language);
  return <section id="about" className="section-spacing">
      <div className="container mx-auto px-6">
        

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Why Both Worlds */}
          <div className="animate-fade-in-up" style={{
          animationDelay: '0.2s'
        }}>
            <div className="glass-morphism rounded-xl p-8">
              <h3 className="text-3xl font-semibold mb-8 heading-style">
                <span className="text-primary">{t.about.whyBothWorlds}</span>
              </h3>
              
              <div className="space-y-6" role="list" aria-label="Unsere drei Säulen">
                <article className="flex items-start" role="listitem">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4 mt-1" aria-hidden="true">
                    <Target className="h-6 w-6 text-primary" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{t.about.strategicDepth.title}</h4>
                    <p className="body-style leading-relaxed">
                      {t.about.strategicDepth.description.split('.').map((sentence, index) => <span key={index}>
                          {sentence.trim()}{sentence.trim() && '.'}
                          {index % 2 === 1 && index < t.about.strategicDepth.description.split('.').length - 2 && <><br /><br /></>}
                          {index % 2 === 0 && index < t.about.strategicDepth.description.split('.').length - 2 && ' '}
                        </span>)}
                    </p>
                  </div>
                </article>

                <article className="flex items-start" role="listitem">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4 mt-1" aria-hidden="true">
                    <Lightbulb className="h-6 w-6 text-primary" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{t.about.technologicalInnovation.title}</h4>
                    <p className="body-style leading-relaxed">
                      {t.about.technologicalInnovation.description.split('.').map((sentence, index) => <span key={index}>
                          {sentence.trim()}{sentence.trim() && '.'}
                          {index % 2 === 1 && index < t.about.technologicalInnovation.description.split('.').length - 2 && <><br /><br /></>}
                          {index % 2 === 0 && index < t.about.technologicalInnovation.description.split('.').length - 2 && ' '}
                        </span>)}
                    </p>
                  </div>
                </article>

                <article className="flex items-start" role="listitem">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4 mt-1" aria-hidden="true">
                    <Users className="h-6 w-6 text-primary" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{t.about.humanExpertise.title}</h4>
                    <p className="body-style leading-relaxed">
                      {t.about.humanExpertise.description.split('.').map((sentence, index) => <span key={index}>
                          {sentence.trim()}{sentence.trim() && '.'}
                          {index % 2 === 1 && index < t.about.humanExpertise.description.split('.').length - 2 && <><br /><br /></>}
                          {index % 2 === 0 && index < t.about.humanExpertise.description.split('.').length - 2 && ' '}
                        </span>)}
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;