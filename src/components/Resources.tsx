
import React from 'react';
import { FileText, CheckSquare, Calendar } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      type: 'Whitepaper',
      title: 'KI-Transformation Roadmap 2024',
      description: 'Ihr Leitfaden für eine erfolgreiche KI-Integration',
      icon: FileText,
      downloadUrl: '#'
    },
    {
      type: 'Checklist',
      title: 'AI-Readiness Assessment',
      description: 'Prüfen Sie die KI-Bereitschaft Ihres Unternehmens',
      icon: CheckSquare,
      downloadUrl: '#'
    },
    {
      type: 'Whitepaper',
      title: 'ROI von KI-Projekten',
      description: 'Messbare Erfolge und Bewertungskriterien',
      icon: FileText,
      downloadUrl: '#'
    }
  ];

  const events = [
    {
      date: '15. März 2024',
      title: 'KI Executive Breakfast',
      location: 'Frankfurt am Main',
      type: 'Networking Event'
    },
    {
      date: '22. März 2024',
      title: 'AI Implementation Workshop',
      location: 'München',
      type: 'Workshop'
    },
    {
      date: '05. April 2024',
      title: 'Future of Work Summit',
      location: 'Berlin',
      type: 'Conference'
    }
  ];

  return (
    <section id="resources" className="py-20 bg-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 heading-style">
            <span className="text-gold">Ressourcen</span>
          </h2>
          <p className="text-xl body-style max-w-3xl mx-auto">
            Wertvolle Einblicke und praktische Tools für Ihre KI-Journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Downloads */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-semibold mb-8 heading-style">
              Downloads & <span className="text-gold">Checklisten</span>
            </h3>
            <div className="space-y-6">
              {resources.map((resource, index) => (
                <div 
                  key={index}
                  className="glass-morphism rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-gold/30 transition-colors duration-300">
                      <resource.icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="text-xs text-gold font-medium px-2 py-1 bg-gold/20 rounded-full mr-3">
                          {resource.type}
                        </span>
                      </div>
                      <h4 className="font-semibold mb-2">{resource.title}</h4>
                      <p className="text-sm body-style mb-3">{resource.description}</p>
                      <div className="text-gold font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Download →
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Events */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold mb-8 heading-style">
              Kommende <span className="text-gold">Events</span>
            </h3>
            <div className="space-y-6">
              {events.map((event, index) => (
                <div 
                  key={index}
                  className="glass-morphism rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-gold/30 transition-colors duration-300">
                      <Calendar className="h-6 w-6 text-gold" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="text-xs text-gold font-medium px-2 py-1 bg-gold/20 rounded-full mr-3">
                          {event.type}
                        </span>
                        <span className="text-sm opacity-60">{event.date}</span>
                      </div>
                      <h4 className="font-semibold mb-2">{event.title}</h4>
                      <p className="text-sm body-style mb-3">{event.location}</p>
                      <div className="text-gold font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Teilnehmen →
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
