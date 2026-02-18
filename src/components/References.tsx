
import React from 'react';
import { Quote } from 'lucide-react';

const References = () => {
  const cases = [
    {
      problem: 'Ineffiziente Meeting-Kultur',
      solution: 'KI-gestützte Agenda-Optimierung',
      kpi: '-35% Meeting-Zeit',
      industry: 'Automotive'
    },
    {
      problem: 'Manuelle Prozessabläufe',
      solution: 'Intelligente Automatisierung',
      kpi: '+25% Produktivität',
      industry: 'Manufacturing'
    },
    {
      problem: 'Verlorene Sales-Leads',
      solution: 'KI-Predictive Analytics',
      kpi: '+40% Conversion',
      industry: 'Technology'
    }
  ];

  const testimonials = [
    {
      quote: "CPCC hat unsere Erwartungen übertroffen. Die KI-Implementierung war nahtlos und die Ergebnisse beeindruckend.",
      author: "Dr. Michael Weber",
      position: "CEO, TechCorp AG",
      company: "TechCorp AG"
    },
    {
      quote: "Endlich ein Partner, der KI nicht nur versteht, sondern auch praktisch umsetzt. Hervorragende Beratung.",
      author: "Sarah Mueller",
      position: "CTO, InnovateLab",
      company: "InnovateLab"
    }
  ];

  return (
    <section id="references" className="py-20 bg-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 heading-style">
            Praxis & <span className="text-gold">Referenzen</span>
          </h2>
          <p className="text-xl body-style max-w-3xl mx-auto">
            Messbare Erfolge für unsere Kunden – von der ersten Idee bis zum nachhaltigen Ergebnis.
          </p>
        </div>

        {/* Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cases.map((case_study, index) => (
            <div 
              key={index}
              className="glass-morphism rounded-xl p-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-sm text-gold mb-3 font-medium">{case_study.industry}</div>
              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-red-300">Problem</h4>
                <p className="text-sm body-style">{case_study.problem}</p>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-blue-300">Lösung</h4>
                <p className="text-sm body-style">{case_study.solution}</p>
              </div>
              <div className="border-t border-white/20 pt-4">
                <div className="text-2xl font-semibold text-gold">{case_study.kpi}</div>
                <div className="text-xs opacity-60">Verbesserung</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-morphism rounded-xl p-8 animate-fade-in-up"
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              <Quote className="h-8 w-8 text-gold mb-4 opacity-60" />
              <p className="text-lg mb-6 body-style leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-gold font-semibold">{testimonial.author.charAt(0)}</span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm opacity-60">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;
