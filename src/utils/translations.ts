import { Language } from '../contexts/LanguageContext';

export interface Translations {
  // Navigation
  nav: {
    about: string;
    kiSparring: string;
    products: string;
    contact: string;
  };

  // About Me Page
  aboutMe: {
    learnMore: string;
    pageTitle: string;
    backToHome: string;
    whyDifferent: {
      title: string;
      subtitle: string;
      synergy: {
        title: string;
        description: string;
      };
      humanFocus: {
        title: string;
        description: string;
      };
      conclusion: string;
    };
    experience: {
      title: string;
      subtitle: string;
    };
    industries: {
      title: string;
      items: string[];
    };
    certifications: {
      title: string;
      items: string[];
    };
    education: {
      title: string;
      items: string[];
    };
    projects: {
      aiConsulting: {
        title: string;
        period: string;
        description: string;
        items: string[];
      };
      aiImplementation: {
        title: string;
        period: string;
        items: string[];
      };
      tplGkv1: {
        title: string;
        period: string;
        description: string;
      };
      tplGkv2: {
        title: string;
        period: string;
        description: string;
      };
      businessConsulting: {
        title: string;
        period: string;
        items: string[];
      };
      vendorManager: {
        title: string;
        period: string;
        items: string[];
      };
      hardwareRollout: {
        title: string;
        period: string;
        items: string[];
      };
      processDesign: {
        title: string;
        period: string;
        items: string[];
      };
      associateHealth: {
        title: string;
        period: string;
        items: string[];
      };
      associateMedia: {
        title: string;
        period: string;
        items: string[];
      };
    };
  };
  
  // Hero Section
  hero: {
    title1: string;
    title2: string;
    subtitle: string;
    kpi1: {
      prefix: string;
      value: string;
      label: string;
    };
    kpi2: {
      prefix: string;
      value: string;
      label: string;
    };
    kpi3: {
      prefix: string;
      value: string;
      label: string;
    };
  };
  
  // About Section
  about: {
    title: string;
    subtitle: string;
    founderTitle: string;
    founderRole: string;
    founderDescription: string;
    showCertificates: string;
    whyBothWorlds: string;
    strategicDepth: {
      title: string;
      description: string;
    };
    technologicalInnovation: {
      title: string;
      description: string;
    };
    humanExpertise: {
      title: string;
      description: string;
    };
  };
  
  // KI-Sparring Section
  kiSparring: {
    title: string;
    subtitle: string;
    consultationTitle: string;
    description: string;
    feature1: string;
    feature2: string;
    feature3: string;
    bookButton: string;
  };
  
  // Products Section
  products: {
    title: string;
    subtitle: string;
    items: {
      kiStarthilfe: {
        title: string;
        description: string;
      };
      projektmanagement: {
        title: string;
        description: string;
      };
      prozessOptimierung: {
        title: string;
        description: string;
      };
      marketingSales: {
        title: string;
        description: string;
      };
      schulungen: {
        title: string;
        description: string;
      };
      ausschreibungen: {
        title: string;
        description: string;
      };
    };
    learnMore: string;
    ctaButton: string;
  };
  
  // Contact Section
  contact: {
    title: string;
    subtitle: string;
    speakWithUs: string;
    phone: string;
    email: string;
    locations: string;
    readyForDialog: string;
    dialogDescription: string;
    scheduleAppointment: string;
    orCallDirectly: string;
  };
  
  // Contact Form
  contactForm: {
    title: string;
    subtitle: string;
    handPromiseTitle: string;
    handPromiseText: string;
    fields: {
      name: string;
      email: string;
      company: string;
      phone: string;
      subject: string;
      message: string;
    };
    placeholders: {
      name: string;
      email: string;
      company: string;
      phone: string;
      subject: string;
      message: string;
    };
    submitButton: string;
    sending: string;
    orContactDirectly: string;
    backToHome: string;
    successTitle: string;
    successDescription: string;
    errorTitle: string;
    errorDescription: string;
  };
  
  // Privacy Page
  privacy: {
    title: string;
    subtitle: string;
    backToHome: string;
    sections: {
      responsible: {
        title: string;
        content: string;
      };
      dataCollection: {
        title: string;
        websiteVisit: string;
        content: string;
        listItems: string[];
      };
      contact: {
        title: string;
        content: string;
      };
      dataSharing: {
        title: string;
        content: string;
        listItems: string[];
      };
      rights: {
        title: string;
        content: string;
        listItems: string[];
        complaint: string;
      };
      security: {
        title: string;
        content: string;
      };
      updates: {
        title: string;
        content: string;
      };
    };
    lastUpdated: string;
  };
  
  // Header Section
  header: {
    ctaButton: string;
    aiConsultingCta: string;
  };
  
  // Footer
  footer: {
    rights: string;
    privacy: string;
  };

  // NotFound Page
  notFound: {
    title: string;
    message: string;
    backToHome: string;
  };
}

export const translations: Record<Language, Translations> = {
  de: {
    nav: {
      about: 'Über uns',
      kiSparring: 'KI-Sparring buchen',
      products: 'Produkte',
      contact: 'Kontakt'
    },
    aboutMe: {
      learnMore: 'Mehr erfahren',
      pageTitle: 'Warum wir anders sind',
      backToHome: 'Zurück zur Startseite',
      whyDifferent: {
        title: 'BEST OF BOTH WORLDS',
        subtitle: 'Berater-DNA trifft KI-Lab',
        synergy: {
          title: 'Synergie statt Silodenken',
          description: 'Wir übersetzen komplexe KI-Technologien in konkrete Geschäftsprozesse – verständlich für Vorstände, umsetzbar für Teams.'
        },
        humanFocus: {
          title: 'Menschen im Mittelpunkt',
          description: 'Schulungen und Change-Begleitung sind fester Bestandteil jeder Lösung.'
        },
        conclusion: 'Komplexität raus, Wertschöpfung rein – mit der Stärke beider Welten.'
      },
      experience: {
        title: 'Projekterfahrung',
        subtitle: 'Über 10 Jahre Expertise in IT-Consulting und KI-Transformation'
      },
      industries: {
        title: 'Branchen',
        items: ['IT-Dienstleister', 'Gesetzliche Krankenversicherungen', 'Finanzdienstleister', 'Medien und Unterhaltung']
      },
      certifications: {
        title: 'Zertifizierungen',
        items: ['TÜV-zertifizierter AI Consultant', 'PRINCE2® Practitioner', 'ITIL® 2011 Expert', 'Sourcing Governance Foundation', 'SCRUM® Foundation und Product Owner']
      },
      education: {
        title: 'Ausbildung',
        items: ['Gelernter IT-System-Kaufmann (IHK)', 'Studierter Wirtschaftsinformatiker (B.Sc.)']
      },
      projects: {
        aiConsulting: {
          title: 'AI Consulting',
          period: 'Seit April 2024',
          description: 'Beratung zu und Umsetzung von KI-Lösungen',
          items: [
            'Projektleitung und Projektbegleitung: Steuerung der Entwicklung und Bereitstellung von KI-Produkten',
            'Identifikation neuer Geschäftsmöglichkeiten / Prozessoptimierungen durch KI',
            'Erstellung maßgeschneiderter Service-Beschreibungen für KI-Ausschreibungen',
            'Beratung von Unternehmen bei der Integration von KI-Automatisierungen'
          ]
        },
        aiImplementation: {
          title: 'AI Implementierung',
          period: 'Seit April 2024',
          items: [
            'Einführung und Umsetzung von lokalen On-Premise-Chatbot-Lösungen im GKV-Umfeld',
            'Einführung und Umsetzung einer Videobot-Lösung als Support-SPOC für die Website einer GKV',
            'Integration vorhandener Software-Lösungen in das unternehmenseigene LLM',
            'Einführung von KI-gestütztem Reifegrad-Assessment zur schnellen GAP-Analyse',
            'Einführung von KI-gestütztem Decision-Support zur Prüfung von Deliverables gegen Gate-Kriterien',
            'Einführung von KI-gestützten Governance-Checks zwecks EU-AI-Act-Risikoeinstufung',
            'Voll-automatisierte Erstellung von EU-Ausschreibungs-/Vertragsdokumenten',
            'KI-gestützte Prüfung von Prozessen ggü. DSGVO, ISO 27001 & co.'
          ]
        },
        tplGkv1: {
          title: 'Teilprojektleitung IT-Organisation GKV',
          period: 'April 2021 – Dezember 2024',
          description: 'Verantwortung der Verhandlungsgespräche und Erstellung von Vertrags-/Vergabeunterlagen mit Schwerpunkt ITI-Prozessablaufbeschreibungen zur Verlagerung der dezentralen IT-Services an einen externen IT-Dienstleister'
        },
        tplGkv2: {
          title: 'Teilprojektleitung IT-Organisation GKV',
          period: 'April 2019 – Februar 2021',
          description: 'Verantwortung der inhaltlichen und prozessualen Leistungsscheinkonzeption zwischen Auftraggeber/Auftragnehmer einschließlich Prozessen, Leistungskennzahlen sowie Verrechnungsmodellen'
        },
        businessConsulting: {
          title: 'Unternehmensberatung Business Consulting',
          period: 'Juli 2018 – Oktober 2018',
          items: [
            'Konzeptionelle Entwicklung einer Methode zur Ermittlung digitaler Wachstumsstrategien',
            'Technische Umsetzung eines Prototypen im Kontext der digitalen Transformation'
          ]
        },
        vendorManager: {
          title: 'Vendor Manager IT-Organisation Retail-Bank',
          period: 'Oktober 2017 – Juli 2018',
          items: [
            'Schnittstelle zwischen Service Delivery Management des Vendors und der internen IT Organisation',
            'Einleitung von funktionalen und hierarchischen Eskalationen',
            'Proaktive Maßnahmen zur Vermeidung von Eskalationen'
          ]
        },
        hardwareRollout: {
          title: 'Projektleiter Hardware Rollout Retail-Bank',
          period: 'April 2017 – Oktober 2017',
          items: [
            'Austausch von Hardware im Rahmen der Digitalen Transformation',
            'Austausch von europaweit 5000 RSA-Security-Token',
            'Austausch von Altgeräten durch Thin Clients an zahlreichen Standorten'
          ]
        },
        processDesign: {
          title: 'Process Design IT-Organisation Retail-Bank',
          period: 'Januar 2016 – März 2017',
          items: [
            'Ausrichtung der IT-Prozesse im Rahmen der Digitalisierungsstrategie',
            'Konzeptionieren von Cloud- und Virtualisierungslösungen',
            'Einführung der ITIL® ITSM Prozesse',
            'Aufbau eines Kapazitäts- und Verfügbarkeitsplans'
          ]
        },
        associateHealth: {
          title: 'Associate Consultant IT-Organisation Gesundheitswesen',
          period: 'April 2015 – Oktober 2015',
          items: [
            'Optimierung des Service Desks',
            'Analyse und Optimierung des Incident- und Problem Management Prozesses',
            'Aufbau einer CMDB über OMNITRACKER',
            'Einführung von Event Management (Proaktives Monitoring)'
          ]
        },
        associateMedia: {
          title: 'Associate Consultant Medien- und Unterhaltungskonzern',
          period: 'August 2013 – August 2014',
          items: [
            'Digitalisierung und Teil-Automatisierung des Support-Prozesses der Video-on-Demand-Portale',
            'Mail Helpdesk und App-Feedback (iOS und Android)',
            'Testing und Koordination der Fehlerbehebung'
          ]
        }
      }
    },
    hero: {
      title1: 'Best of Both Worlds',
      title2: 'Exactly what you need.',
      subtitle: 'Wir holen verloren geglaubte Zeit zurück – Buy back time with AI.',
      kpi1: {
        prefix: 'Durchschnittlich',
        value: '-50%',
        label: 'Meeting-Zeit'
      },
      kpi2: {
        prefix: 'Durchschnittlich',
        value: '+18%',
        label: 'EBIT-Potenzial'
      },
      kpi3: {
        prefix: 'Maximal',
        value: '8-10 Wochen',
        label: 'bis zum MVP'
      }
    },
    about: {
      title: 'Über uns',
      subtitle: 'Mehr als 10 Jahre Beratung * 3 Jahre KI-Pioniergeist = Ihr Wettbewerbsvorteil',
      founderTitle: 'Christian Plath',
      founderRole: 'Founder & CEO',
      founderDescription: 'Mit über 10 Jahren Erfahrung in der Unternehmensberatung und einem tiefen Verständnis für KI-Technologien bringe ich beide Welten zusammen – traditionelle Beratungsexzellenz und innovative Zukunftstechnologie.',
      showCertificates: 'Zertifikate anzeigen →',
      whyBothWorlds: 'Why Both Worlds?',
      strategicDepth: {
        title: 'Strategische Tiefe',
        description: 'Klassische Beratung mit bewährten Methoden und jahrzehntelanger Erfahrung.'
      },
      technologicalInnovation: {
        title: 'Technologische Innovation',
        description: 'Cutting-edge KI-Lösungen für die Herausforderungen von morgen.'
      },
      humanExpertise: {
        title: 'Menschliche Expertise',
        description: 'KI verstärkt menschliche Intelligenz – ersetzt sie nicht.'
      }
    },
    kiSparring: {
      title: 'KI-Sparring buchen',
      subtitle: 'Nutzen Sie unser kostenloses KI-Sparring für den perfekten Einstieg in Ihre KI-Zukunft.',
      consultationTitle: 'Kostenlose Erstberatung',
      description: 'In einem unverbindlichen einstündigen Gespräch analysieren wir gemeinsam Ihre aktuellen Herausforderungen und zeigen auf, wo KI den größten Mehrwert für Ihr Unternehmen schaffen kann.',
      feature1: '100% kostenlos',
      feature2: 'Unverbindlich',
      feature3: '60 Minuten',
      bookButton: 'Jetzt KI-Sparring buchen'
    },
    products: {
      title: 'Unsere Produkte',
      subtitle: 'Maßgeschneiderte KI-Lösungen für Ihren Erfolg – von der Strategie bis zur Umsetzung.',
      items: {
        kiStarthilfe: {
          title: 'KI-Starthilfe',
          description: 'Strategischer Einstieg in die Künstliche Intelligenz für Ihr Unternehmen.'
        },
        projektmanagement: {
          title: 'Projektmanagement 3.0',
          description: 'KI-gestützte Optimierung Ihrer Projektabläufe und Ressourcenplanung.'
        },
        prozessOptimierung: {
          title: 'KI-Prozess-Optimierung',
          description: 'Automatisierung und Effizienzsteigerung durch intelligente Prozesse.'
        },
        marketingSales: {
          title: 'KI in Marketing & Sales',
          description: 'Revolutionieren Sie Ihre Vertriebsstrategien mit KI-Power.'
        },
        schulungen: {
          title: 'KI-Schulungen',
          description: 'Expertenwissen für Ihre Teams – praxisnah und nachhaltig.'
        },
        ausschreibungen: {
          title: 'KI in Ausschreibungen',
          description: 'Optimierte Ausschreibungsprozesse durch intelligente Automatisierung.'
        }
      },
      learnMore: 'Mehr erfahren →',
      ctaButton: 'Kostenloses Erstgespräch vereinbaren'
    },
    contact: {
      title: 'Kontakt',
      subtitle: 'Bereit für den nächsten Schritt? Lassen Sie uns gemeinsam Ihre KI-Zukunft gestalten.',
      speakWithUs: 'Sprechen Sie mit uns',
      phone: 'Telefon',
      email: 'E-Mail',
      locations: 'Standorte',
      readyForDialog: 'Bereit für den Dialog?',
      dialogDescription: 'Vereinbaren Sie noch heute ein unverbindliches Gespräch und erfahren Sie, wie KI Ihr Unternehmen transformieren kann.',
      scheduleAppointment: 'Termin vereinbaren',
      orCallDirectly: 'Oder rufen Sie uns direkt an:'
    },
    contactForm: {
      title: 'Kontaktformular',
      subtitle: 'Lassen Sie uns gemeinsam über Ihre KI-Zukunft sprechen. Füllen Sie das Formular aus und wir melden uns zeitnah bei Ihnen.',
      handPromiseTitle: 'Hand drauf!',
      handPromiseText: 'Wir bieten Ihnen eine unverbindliche, völlig kostenlose einstündige Sitzung an, in der Sie uns etwas über Ihr Unternehmen und ihre aktuellen Herausforderungen erzählen. Wo brennt es am meisten? Wo benötigen Sie Unterstützung? Ob und inwieweit KI hier weiterhelfen kann, erörtern wir gemeinsam. Um so mehr Angaben Sie bereits im Kontaktformular machen, umso effizienter können wir die Stunde nutzen.',
      fields: {
        name: 'Name *',
        email: 'E-Mail *',
        company: 'Unternehmen',
        phone: 'Telefon',
        subject: 'Betreff *',
        message: 'Nachricht *'
      },
      placeholders: {
        name: 'Ihr vollständiger Name',
        email: 'ihre.email@beispiel.de',
        company: 'Ihr Unternehmen (optional)',
        phone: 'Ihre Telefonnummer (optional)',
        subject: 'Worum geht es?',
        message: 'Beschreiben Sie Ihr Anliegen...'
      },
      submitButton: 'Nachricht senden',
      sending: 'Wird gesendet...',
      orContactDirectly: 'Oder kontaktieren Sie uns direkt:',
      backToHome: 'Zurück zur Startseite',
      successTitle: 'Nachricht gesendet!',
      successDescription: 'Vielen Dank für Ihre Nachricht. Wir melden uns zeitnah bei Ihnen.',
      errorTitle: 'Fehler beim Senden',
      errorDescription: 'Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.'
    },
    privacy: {
      title: 'Datenschutzerklärung',
      subtitle: 'Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst.',
      backToHome: 'Zurück zur Startseite',
      sections: {
        responsible: {
          title: '1. Verantwortlicher',
          content: 'Verantwortlicher für die Datenverarbeitung auf dieser Website ist:'
        },
        dataCollection: {
          title: '2. Erhebung und Speicherung personenbezogener Daten',
          websiteVisit: '2.1 Beim Besuch der Website',
          content: 'Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sog. Logfile gespeichert.',
          listItems: [
            'IP-Adresse des anfragenden Rechners',
            'Datum und Uhrzeit des Zugriffs',
            'Name und URL der abgerufenen Datei',
            'Website, von der aus der Zugriff erfolgt (Referrer-URL)',
            'Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners'
          ]
        },
        contact: {
          title: '3. Kontaktaufnahme',
          content: 'Bei der Kontaktaufnahme mit uns (z.B. per E-Mail oder Telefon) werden die von Ihnen mitgeteilten Daten von uns gespeichert, um Ihre Fragen zu beantworten. Die in diesem Zusammenhang anfallenden Daten löschen wir, nachdem die Speicherung nicht mehr erforderlich ist, oder schränken die Verarbeitung ein, falls gesetzliche Aufbewahrungspflichten bestehen.'
        },
        dataSharing: {
          title: '4. Weitergabe von Daten',
          content: 'Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten Zwecken findet nicht statt. Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:',
          listItems: [
            'Sie Ihre ausdrückliche Einwilligung dazu erteilt haben',
            'die Weitergabe zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist',
            'die Weitergabe zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist'
          ]
        },
        rights: {
          title: '5. Ihre Rechte',
          content: 'Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:',
          listItems: [
            'Recht auf Auskunft',
            'Recht auf Berichtigung oder Löschung',
            'Recht auf Einschränkung der Verarbeitung',
            'Recht auf Widerspruch gegen die Verarbeitung',
            'Recht auf Datenübertragbarkeit'
          ],
          complaint: 'Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.'
        },
        security: {
          title: '6. Datensicherheit',
          content: 'Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. In der Regel handelt es sich dabei um eine 256-Bit-Verschlüsselung. Falls Ihr Browser keine 256-Bit-Verschlüsselung unterstützt, greifen wir stattdessen auf 128-Bit-v3-Technologie zurück.'
        },
        updates: {
          title: '7. Aktualität der Datenschutzerklärung',
          content: 'Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Januar 2025. Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.'
        }
      },
      lastUpdated: 'Stand: Januar 2025'
    },
    header: {
      ctaButton: 'Beratung buchen',
      aiConsultingCta: 'Kostenlose KI-Beratung starten'
    },
    footer: {
      rights: '© 2025 Christian Plath Consulting Company. Alle Rechte vorbehalten.',
      privacy: 'Datenschutz'
    },
    notFound: {
      title: 'Seite nicht gefunden',
      message: 'Die angeforderte Seite existiert leider nicht.',
      backToHome: 'Zurück zur Startseite'
    }
  },
  en: {
    nav: {
      about: 'About Us',
      kiSparring: 'Book AI Sparring',
      products: 'Products',
      contact: 'Contact'
    },
    aboutMe: {
      learnMore: 'Learn more',
      pageTitle: 'Why we are different',
      backToHome: 'Back to homepage',
      whyDifferent: {
        title: 'BEST OF BOTH WORLDS',
        subtitle: 'Consultant DNA meets AI Lab',
        synergy: {
          title: 'Synergy over Silos',
          description: 'We translate complex AI technologies into concrete business processes – understandable for executives, actionable for teams.'
        },
        humanFocus: {
          title: 'People at the Center',
          description: 'Training and change management are integral parts of every solution.'
        },
        conclusion: 'Complexity out, value creation in – with the strength of both worlds.'
      },
      experience: {
        title: 'Project Experience',
        subtitle: 'Over 10 years of expertise in IT consulting and AI transformation'
      },
      industries: {
        title: 'Industries',
        items: ['IT Service Providers', 'Statutory Health Insurance', 'Financial Services', 'Media and Entertainment']
      },
      certifications: {
        title: 'Certifications',
        items: ['TÜV-certified AI Consultant', 'PRINCE2® Practitioner', 'ITIL® 2011 Expert', 'Sourcing Governance Foundation', 'SCRUM® Foundation and Product Owner']
      },
      education: {
        title: 'Education',
        items: ['Qualified IT Business Professional (IHK)', 'Business Informatics (B.Sc.)']
      },
      projects: {
        aiConsulting: {
          title: 'AI Consulting',
          period: 'Since April 2024',
          description: 'Consulting and implementation of AI solutions',
          items: [
            'Project leadership and support: Steering the development and deployment of AI products',
            'Identification of new business opportunities / process optimizations through AI',
            'Creation of customized service descriptions for AI tenders',
            'Advising companies on integrating AI automation solutions'
          ]
        },
        aiImplementation: {
          title: 'AI Implementation',
          period: 'Since April 2024',
          items: [
            'Introduction and implementation of local on-premise chatbot solutions in the statutory health insurance sector',
            'Introduction and implementation of a video bot solution as support SPOC for a statutory health insurer\'s website',
            'Integration of existing software solutions into the company\'s own LLM',
            'Introduction of AI-supported maturity assessment for rapid GAP analysis',
            'Introduction of AI-supported decision support for checking deliverables against gate criteria',
            'Introduction of AI-supported governance checks for EU AI Act risk classification',
            'Fully automated creation of EU tender/contract documents',
            'AI-supported review of processes against GDPR, ISO 27001 & co.'
          ]
        },
        tplGkv1: {
          title: 'Sub-Project Manager IT Organization (Statutory Health Insurance)',
          period: 'April 2021 – December 2024',
          description: 'Responsibility for negotiation meetings and creation of contract/tender documents with focus on IT infrastructure process descriptions for outsourcing of decentralized IT services to an external IT service provider'
        },
        tplGkv2: {
          title: 'Sub-Project Manager IT Organization (Statutory Health Insurance)',
          period: 'April 2019 – February 2021',
          description: 'Responsibility for designing service level agreements between client and contractor, including process definitions, key performance indicators, and billing models'
        },
        businessConsulting: {
          title: 'Business Consulting',
          period: 'July 2018 – October 2018',
          items: [
            'Conceptual development of a method for determining digital growth strategies',
            'Technical implementation of a prototype in the context of digital transformation'
          ]
        },
        vendorManager: {
          title: 'Vendor Manager IT Organization Retail Bank',
          period: 'October 2017 – July 2018',
          items: [
            'Interface between vendor\'s service delivery management and internal IT organization',
            'Initiation of functional and hierarchical escalations',
            'Proactive measures to avoid escalations'
          ]
        },
        hardwareRollout: {
          title: 'Hardware Rollout Project Lead Retail Bank',
          period: 'April 2017 – October 2017',
          items: [
            'Hardware replacement as part of digital transformation',
            'Replacement of 5000 RSA security tokens across Europe',
            'Replacement of legacy devices with thin clients at numerous locations'
          ]
        },
        processDesign: {
          title: 'Process Design IT Organization Retail Bank',
          period: 'January 2016 – March 2017',
          items: [
            'Alignment of IT processes within the digitalization strategy',
            'Conceptualization of cloud and virtualization solutions',
            'Introduction of ITIL® ITSM processes',
            'Development of capacity and availability plans'
          ]
        },
        associateHealth: {
          title: 'Associate Consultant IT Organization Healthcare',
          period: 'April 2015 – October 2015',
          items: [
            'Service desk optimization',
            'Analysis and optimization of incident and problem management processes',
            'Setup of CMDB via OMNITRACKER',
            'Introduction of event management (proactive monitoring)'
          ]
        },
        associateMedia: {
          title: 'Associate Consultant Media and Entertainment',
          period: 'August 2013 – August 2014',
          items: [
            'Digitalization and partial automation of support processes for video-on-demand portals',
            'Mail helpdesk and app feedback (iOS and Android)',
            'Testing and coordination of bug fixing'
          ]
        }
      }
    },
    hero: {
      title1: 'Best of Both Worlds',
      title2: 'Exactly what you need.',
      subtitle: 'We recover lost time – Buy back time with AI.',
      kpi1: {
        prefix: 'Average',
        value: '-50%',
        label: 'Meeting Time'
      },
      kpi2: {
        prefix: 'Average',
        value: '+18%',
        label: 'EBIT Potential'
      },
      kpi3: {
        prefix: 'Maximum',
        value: '8-10 weeks',
        label: 'to MVP'
      }
    },
    about: {
      title: 'About Us',
      subtitle: 'More than 10 years of consulting * 3 years of AI pioneering spirit = Your competitive advantage',
      founderTitle: 'Christian Plath',
      founderRole: 'Founder & CEO',
      founderDescription: 'With over 10 years of experience in management consulting and deep understanding of AI technologies, I bring together both worlds – traditional consulting excellence and innovative future technology.',
      showCertificates: 'View certificates →',
      whyBothWorlds: 'Why Both Worlds?',
      strategicDepth: {
        title: 'Strategic Depth',
        description: 'Classical consulting with proven methods and decades of experience.'
      },
      technologicalInnovation: {
        title: 'Technological Innovation',
        description: 'Cutting-edge AI solutions for tomorrow\'s challenges.'
      },
      humanExpertise: {
        title: 'Human Expertise',
        description: 'AI enhances human intelligence – doesn\'t replace it.'
      }
    },
    kiSparring: {
      title: 'Book AI Sparring',
      subtitle: 'Take advantage of our free AI sparring for the perfect start into your AI future.',
      consultationTitle: 'Free Initial Consultation',
      description: 'In a non-binding one-hour conversation, we analyze your current challenges together and show where AI can create the greatest value for your company.',
      feature1: '100% free',
      feature2: 'Non-binding',
      feature3: '60 minutes',
      bookButton: 'Book AI Sparring Now'
    },
    products: {
      title: 'Our Products',
      subtitle: 'Tailored AI solutions for your success – from strategy to implementation.',
      items: {
        kiStarthilfe: {
          title: 'AI Kickstart',
          description: 'Strategic entry into Artificial Intelligence for your company.'
        },
        projektmanagement: {
          title: 'Project Management 3.0',
          description: 'AI-supported optimization of your project workflows and resource planning.'
        },
        prozessOptimierung: {
          title: 'AI Process Optimization',
          description: 'Automation and efficiency enhancement through intelligent processes.'
        },
        marketingSales: {
          title: 'AI in Marketing & Sales',
          description: 'Revolutionize your sales strategies with AI power.'
        },
        schulungen: {
          title: 'AI Training',
          description: 'Expert knowledge for your teams – practical and sustainable.'
        },
        ausschreibungen: {
          title: 'AI in Tender Processes',
          description: 'Optimized tender and bidding processes through intelligent automation.'
        }
      },
      learnMore: 'Learn more →',
      ctaButton: 'Schedule free consultation'
    },
    contact: {
      title: 'Contact',
      subtitle: 'Ready for the next step? Let\'s shape your AI future together.',
      speakWithUs: 'Speak with us',
      phone: 'Phone',
      email: 'Email',
      locations: 'Locations',
      readyForDialog: 'Ready for dialogue?',
      dialogDescription: 'Schedule a non-binding conversation today and discover how AI can transform your business.',
      scheduleAppointment: 'Schedule appointment',
      orCallDirectly: 'Or call us directly:'
    },
    contactForm: {
      title: 'Contact Form',
      subtitle: 'Let\'s talk about your AI future together. Fill out the form and we\'ll get back to you promptly.',
      handPromiseTitle: 'We promise!',
      handPromiseText: 'We offer you a non-binding, completely free one-hour session where you tell us about your company and current challenges. Where does it hurt most? Where do you need support? Whether and to what extent AI can help here, we\'ll discuss together. The more information you provide in the contact form, the more efficiently we can use the hour.',
      fields: {
        name: 'Name *',
        email: 'Email *',
        company: 'Company',
        phone: 'Phone',
        subject: 'Subject *',
        message: 'Message *'
      },
      placeholders: {
        name: 'Your full name',
        email: 'your.email@example.com',
        company: 'Your company (optional)',
        phone: 'Your phone number (optional)',
        subject: 'What is this about?',
        message: 'Describe your request...'
      },
      submitButton: 'Send message',
      sending: 'Sending...',
      orContactDirectly: 'Or contact us directly:',
      backToHome: 'Back to homepage',
      successTitle: 'Message sent!',
      successDescription: 'Thank you for your message. We will get back to you promptly.',
      errorTitle: 'Error sending',
      errorDescription: 'There was a problem sending your message. Please try again or contact us directly.'
    },
    privacy: {
      title: 'Privacy Policy',
      subtitle: 'We take the protection of your personal data very seriously.',
      backToHome: 'Back to homepage',
      sections: {
        responsible: {
          title: '1. Responsible Party',
          content: 'The responsible party for data processing on this website is:'
        },
        dataCollection: {
          title: '2. Collection and Storage of Personal Data',
          websiteVisit: '2.1 When Visiting the Website',
          content: 'When you access our website, information is automatically sent to our website server by the browser used on your device. This information is temporarily stored in a so-called log file.',
          listItems: [
            'IP address of the requesting computer',
            'Date and time of access',
            'Name and URL of the retrieved file',
            'Website from which access is made (referrer URL)',
            'Browser used and possibly the operating system of your computer'
          ]
        },
        contact: {
          title: '3. Contact',
          content: 'When contacting us (e.g. by email or phone), the data you provide will be stored by us to answer your questions. We delete the data arising in this context after storage is no longer necessary, or restrict processing if legal retention obligations exist.'
        },
        dataSharing: {
          title: '4. Data Sharing',
          content: 'We do not transmit your personal data to third parties for purposes other than those listed below. We only share your personal data with third parties if:',
          listItems: [
            'You have given your express consent to do so',
            'The sharing is necessary for the assertion, exercise or defense of legal claims',
            'The sharing is necessary to fulfill a legal obligation'
          ]
        },
        rights: {
          title: '5. Your Rights',
          content: 'You have the following rights regarding your personal data:',
          listItems: [
            'Right to information',
            'Right to correction or deletion',
            'Right to restriction of processing',
            'Right to object to processing',
            'Right to data portability'
          ],
          complaint: 'You also have the right to complain to a data protection supervisory authority about our processing of your personal data.'
        },
        security: {
          title: '6. Data Security',
          content: 'We use the widespread SSL (Secure Socket Layer) procedure in conjunction with the highest encryption level supported by your browser within the website visit. Usually this is 256-bit encryption. If your browser does not support 256-bit encryption, we use 128-bit v3 technology instead.'
        },
        updates: {
          title: '7. Currency of the Privacy Policy',
          content: 'This privacy policy is currently valid and dated January 2025. Due to the further development of our website and offers or due to changed legal or official requirements, it may be necessary to change this privacy policy.'
        }
      },
      lastUpdated: 'Last updated: January 2025'
    },
    header: {
      ctaButton: 'Book consultation',
      aiConsultingCta: 'Start free AI consultation'
    },
    footer: {
      rights: '© 2025 Christian Plath Consulting Company. All rights reserved.',
      privacy: 'Privacy'
    },
    notFound: {
      title: 'Page not found',
      message: 'The requested page does not exist.',
      backToHome: 'Back to homepage'
    }
  },
  nl: {
    nav: {
      about: 'Over ons',
      kiSparring: 'AI-Sparring boeken',
      products: 'Producten',
      contact: 'Contact'
    },
    aboutMe: {
      learnMore: 'Meer weten',
      pageTitle: 'Waarom wij anders zijn',
      backToHome: 'Terug naar homepage',
      whyDifferent: {
        title: 'BEST OF BOTH WORLDS',
        subtitle: 'Consultant-DNA ontmoet AI-Lab',
        synergy: {
          title: 'Synergie in plaats van Silo-denken',
          description: 'Wij vertalen complexe AI-technologieën naar concrete bedrijfsprocessen – begrijpelijk voor directies, uitvoerbaar voor teams.'
        },
        humanFocus: {
          title: 'Mensen Centraal',
          description: 'Trainingen en change-begeleiding zijn een vast onderdeel van elke oplossing.'
        },
        conclusion: 'Complexiteit eruit, waardecreatie erin – met de kracht van beide werelden.'
      },
      experience: {
        title: 'Projectervaring',
        subtitle: 'Meer dan 10 jaar expertise in IT-consulting en AI-transformatie'
      },
      industries: {
        title: 'Branches',
        items: ['IT-dienstverleners', 'Wettelijke zorgverzekeraars', 'Financiële dienstverleners', 'Media en entertainment']
      },
      certifications: {
        title: 'Certificeringen',
        items: ['TÜV-gecertificeerd AI Consultant', 'PRINCE2® Practitioner', 'ITIL® 2011 Expert', 'Sourcing Governance Foundation', 'SCRUM® Foundation en Product Owner']
      },
      education: {
        title: 'Opleiding',
        items: ['Gediplomeerd IT-bedrijfsspecialist (IHK)', 'Bedrijfsinformatica (B.Sc.)']
      },
      projects: {
        aiConsulting: {
          title: 'AI Consulting',
          period: 'Sinds april 2024',
          description: 'Advies over en implementatie van AI-oplossingen',
          items: [
            'Projectleiding en -begeleiding: Aansturing van de ontwikkeling en uitrol van AI-producten',
            'Identificatie van nieuwe zakelijke kansen / procesoptimalisaties door AI',
            'Opstellen van op maat gemaakte servicebeschrijvingen voor AI-aanbestedingen',
            'Adviseren van bedrijven bij de integratie van AI-automatiseringen'
          ]
        },
        aiImplementation: {
          title: 'AI Implementatie',
          period: 'Sinds april 2024',
          items: [
            'Introductie en implementatie van lokale on-premise chatbot-oplossingen in de wettelijke zorgverzekeringssector',
            'Introductie en implementatie van een videobot-oplossing als support-SPOC voor de website van een wettelijke zorgverzekeraar',
            'Integratie van bestaande software-oplossingen in de eigen LLM van het bedrijf',
            'Introductie van AI-ondersteunde volwassenheidsbeoordeling voor snelle GAP-analyse',
            'Introductie van AI-ondersteunde beslissingsondersteuning voor het controleren van deliverables tegen gate-criteria',
            'Introductie van AI-ondersteunde governance-checks voor EU AI Act-risicoclassificatie',
            'Volledig geautomatiseerde creatie van EU-aanbestedings-/contractdocumenten',
            'AI-ondersteunde controle van processen tegen AVG, ISO 27001 & co.'
          ]
        },
        tplGkv1: {
          title: 'Deelprojectleider IT-organisatie Wettelijke Zorgverzekeraar',
          period: 'April 2021 – December 2024',
          description: 'Verantwoordelijkheid voor onderhandelingsgesprekken en opstellen van contract-/aanbestedingsdocumenten met focus op IT-infrastructuur procesbeschrijvingen voor outsourcing van decentrale IT-diensten naar een externe IT-dienstverlener'
        },
        tplGkv2: {
          title: 'Deelprojectleider IT-organisatie Wettelijke Zorgverzekeraar',
          period: 'April 2019 – Februari 2021',
          description: 'Verantwoordelijkheid voor het ontwerpen van service level agreements tussen opdrachtgever en opdrachtnemer, inclusief procesdefiniëring, KPI\'s en verrekenmodellen'
        },
        businessConsulting: {
          title: 'Business Consulting',
          period: 'Juli 2018 – Oktober 2018',
          items: [
            'Conceptuele ontwikkeling van een methode voor het bepalen van digitale groeistrategieën',
            'Technische implementatie van een prototype in de context van digitale transformatie'
          ]
        },
        vendorManager: {
          title: 'Vendor Manager IT-organisatie Retailbank',
          period: 'Oktober 2017 – Juli 2018',
          items: [
            'Interface tussen service delivery management van de vendor en interne IT-organisatie',
            'Initiëring van functionele en hiërarchische escalaties',
            'Proactieve maatregelen om escalaties te voorkomen'
          ]
        },
        hardwareRollout: {
          title: 'Hardware Rollout Projectleider Retailbank',
          period: 'April 2017 – Oktober 2017',
          items: [
            'Hardware-vervanging als onderdeel van digitale transformatie',
            'Vervanging van 5000 RSA-security tokens in heel Europa',
            'Vervanging van verouderde apparaten door thin clients op talrijke locaties'
          ]
        },
        processDesign: {
          title: 'Process Design IT-organisatie Retailbank',
          period: 'Januari 2016 – Maart 2017',
          items: [
            'Afstemming van IT-processen binnen de digitaliseringsstrategie',
            'Conceptualisering van cloud- en virtualisatie-oplossingen',
            'Introductie van ITIL® ITSM-processen',
            'Opbouw van capaciteits- en beschikbaarheidsplannen'
          ]
        },
        associateHealth: {
          title: 'Associate Consultant IT-organisatie Gezondheidszorg',
          period: 'April 2015 – Oktober 2015',
          items: [
            'Optimalisatie van de service desk',
            'Analyse en optimalisatie van incident- en problem management processen',
            'Opzet van CMDB via OMNITRACKER',
            'Introductie van event management (proactieve monitoring)'
          ]
        },
        associateMedia: {
          title: 'Associate Consultant Media en Entertainment',
          period: 'Augustus 2013 – Augustus 2014',
          items: [
            'Digitalisering en gedeeltelijke automatisering van supportprocessen voor video-on-demand portals',
            'Mail helpdesk en app-feedback (iOS en Android)',
            'Testing en coördinatie van bugfixes'
          ]
        }
      }
    },
    hero: {
      title1: 'Best of Both Worlds',
      title2: 'Precies wat u nodig heeft.',
      subtitle: 'Wij winnen verloren tijd terug – Buy back time with AI.',
      kpi1: {
        prefix: 'Gemiddeld',
        value: '-50%',
        label: 'Meeting-tijd'
      },
      kpi2: {
        prefix: 'Gemiddeld',
        value: '+18%',
        label: 'EBIT-potentieel'
      },
      kpi3: {
        prefix: 'Maximaal',
        value: '8-10 weken',
        label: 'tot MVP'
      }
    },
    about: {
      title: 'Over ons',
      subtitle: 'Meer dan 10 jaar advies * 3 jaar AI-pioniersgeest = Uw concurrentievoordeel',
      founderTitle: 'Christian Plath',
      founderRole: 'Oprichter & CEO',
      founderDescription: 'Met meer dan 10 jaar ervaring in managementadvies en diepgaande kennis van AI-technologieën breng ik beide werelden samen – traditionele consultancy-excellentie en innovatieve toekomsttechnologie.',
      showCertificates: 'Certificaten bekijken →',
      whyBothWorlds: 'Why Both Worlds?',
      strategicDepth: {
        title: 'Strategische diepgang',
        description: 'Klassieke consultancy met bewezen methoden en decennialange ervaring.'
      },
      technologicalInnovation: {
        title: 'Technologische innovatie',
        description: 'Cutting-edge AI-oplossingen voor de uitdagingen van morgen.'
      },
      humanExpertise: {
        title: 'Menselijke expertise',
        description: 'AI versterkt menselijke intelligentie – vervangt deze niet.'
      }
    },
    kiSparring: {
      title: 'AI-Sparring boeken',
      subtitle: 'Maak gebruik van onze gratis AI-sparring voor de perfecte start van uw AI-toekomst.',
      consultationTitle: 'Gratis intakegesprek',
      description: 'In een vrijblijvend gesprek van één uur analyseren we samen uw huidige uitdagingen en tonen we waar AI de grootste meerwaarde kan creëren voor uw organisatie.',
      feature1: '100% gratis',
      feature2: 'Vrijblijvend',
      feature3: '60 minuten',
      bookButton: 'Nu AI-Sparring boeken'
    },
    products: {
      title: 'Onze producten',
      subtitle: 'Op maat gemaakte AI-oplossingen voor uw succes – van strategie tot implementatie.',
      items: {
        kiStarthilfe: {
          title: 'AI-Kickstart',
          description: 'Strategische introductie van Kunstmatige Intelligentie voor uw organisatie.'
        },
        projektmanagement: {
          title: 'Projectmanagement 3.0',
          description: 'AI-ondersteunde optimalisatie van uw projectprocessen en resource-planning.'
        },
        prozessOptimierung: {
          title: 'AI-Procesoptimalisatie',
          description: 'Automatisering en efficiëntieverbetering door intelligente processen.'
        },
        marketingSales: {
          title: 'AI in Marketing & Sales',
          description: 'Revolutioneer uw verkoopstrategieën met AI-kracht.'
        },
        schulungen: {
          title: 'AI-Trainingen',
          description: 'Expertkennis voor uw teams – praktijkgericht en duurzaam.'
        },
        ausschreibungen: {
          title: 'AI in Aanbestedingen',
          description: 'Geoptimaliseerde aanbestedingsprocessen door intelligente automatisering.'
        }
      },
      learnMore: 'Meer weten →',
      ctaButton: 'Gratis adviesgesprek plannen'
    },
    contact: {
      title: 'Contact',
      subtitle: 'Klaar voor de volgende stap? Laten we samen uw AI-toekomst vormgeven.',
      speakWithUs: 'Spreek met ons',
      phone: 'Telefoon',
      email: 'E-mail',
      locations: 'Locaties',
      readyForDialog: 'Klaar voor de dialoog?',
      dialogDescription: 'Plan vandaag nog een vrijblijvend gesprek en ontdek hoe AI uw bedrijf kan transformeren.',
      scheduleAppointment: 'Afspraak plannen',
      orCallDirectly: 'Of bel ons direct:'
    },
    contactForm: {
      title: 'Contactformulier',
      subtitle: 'Laten we samen praten over uw AI-toekomst. Vul het formulier in en wij nemen spoedig contact met u op.',
      handPromiseTitle: 'Wij beloven het!',
      handPromiseText: 'Wij bieden u een vrijblijvende, volledig gratis sessie van één uur aan waarin u ons vertelt over uw organisatie en huidige uitdagingen. Waar doet het het meest pijn? Waar heeft u ondersteuning nodig? Of en in hoeverre AI hier kan helpen, bespreken we samen. Hoe meer informatie u al in het contactformulier verstrekt, hoe efficiënter we het uur kunnen benutten.',
      fields: {
        name: 'Naam *',
        email: 'E-mail *',
        company: 'Bedrijf',
        phone: 'Telefoon',
        subject: 'Onderwerp *',
        message: 'Bericht *'
      },
      placeholders: {
        name: 'Uw volledige naam',
        email: 'uw.email@voorbeeld.nl',
        company: 'Uw bedrijf (optioneel)',
        phone: 'Uw telefoonnummer (optioneel)',
        subject: 'Waar gaat het over?',
        message: 'Beschrijf uw vraag...'
      },
      submitButton: 'Bericht versturen',
      sending: 'Wordt verzonden...',
      orContactDirectly: 'Of neem direct contact met ons op:',
      backToHome: 'Terug naar homepage',
      successTitle: 'Bericht verzonden!',
      successDescription: 'Dank u voor uw bericht. Wij nemen spoedig contact met u op.',
      errorTitle: 'Fout bij verzenden',
      errorDescription: 'Er is een probleem opgetreden bij het verzenden van uw bericht. Probeer het opnieuw of neem direct contact met ons op.'
    },
    privacy: {
      title: 'Privacyverklaring',
      subtitle: 'Wij nemen de bescherming van uw persoonlijke gegevens zeer serieus.',
      backToHome: 'Terug naar homepage',
      sections: {
        responsible: {
          title: '1. Verantwoordelijke',
          content: 'De verantwoordelijke voor gegevensverwerking op deze website is:'
        },
        dataCollection: {
          title: '2. Verzameling en opslag van persoonsgegevens',
          websiteVisit: '2.1 Bij het bezoeken van de website',
          content: 'Bij het openen van onze website wordt automatisch informatie verzonden naar de server van onze website door de browser die op uw apparaat wordt gebruikt. Deze informatie wordt tijdelijk opgeslagen in een zogenaamd logbestand.',
          listItems: [
            'IP-adres van de aanvragende computer',
            'Datum en tijd van toegang',
            'Naam en URL van het opgehaalde bestand',
            'Website van waaruit toegang wordt verkregen (referrer-URL)',
            'Gebruikte browser en eventueel het besturingssysteem van uw computer'
          ]
        },
        contact: {
          title: '3. Contact',
          content: 'Bij het contact opnemen met ons (bijv. per e-mail of telefoon) worden de door u verstrekte gegevens door ons opgeslagen om uw vragen te beantwoorden. Wij verwijderen de in dit verband ontstane gegevens nadat opslag niet langer nodig is, of beperken de verwerking als wettelijke bewaartermijnen bestaan.'
        },
        dataSharing: {
          title: '4. Gegevensdeling',
          content: 'Wij geven uw persoonlijke gegevens niet door aan derden voor andere doeleinden dan hieronder vermeld. Wij delen uw persoonlijke gegevens alleen met derden als:',
          listItems: [
            'U hiervoor uitdrukkelijk toestemming heeft gegeven',
            'De deling noodzakelijk is voor het stellen, uitoefenen of verdedigen van juridische claims',
            'De deling noodzakelijk is om te voldoen aan een wettelijke verplichting'
          ]
        },
        rights: {
          title: '5. Uw rechten',
          content: 'U heeft de volgende rechten betreffende uw persoonsgegevens:',
          listItems: [
            'Recht op informatie',
            'Recht op correctie of verwijdering',
            'Recht op beperking van verwerking',
            'Recht op bezwaar tegen verwerking',
            'Recht op gegevensoverdracht'
          ],
          complaint: 'U heeft ook het recht om een klacht in te dienen bij een toezichthoudende autoriteit voor gegevensbescherming betreffende onze verwerking van uw persoonsgegevens.'
        },
        security: {
          title: '6. Gegevensbeveiliging',
          content: 'Wij gebruiken bij het bezoeken van de website de wijdverspreide SSL-procedure (Secure Socket Layer) in combinatie met het hoogste encryptieniveau dat door uw browser wordt ondersteund. Meestal betreft dit 256-bits encryptie. Als uw browser geen 256-bits encryptie ondersteunt, gebruiken wij in plaats daarvan 128-bits v3-technologie.'
        },
        updates: {
          title: '7. Actualiteit van de privacyverklaring',
          content: 'Deze privacyverklaring is momenteel geldig en gedateerd januari 2025. Door de verdere ontwikkeling van onze website en aanbiedingen of vanwege gewijzigde wettelijke of officiële vereisten kan het noodzakelijk zijn om deze privacyverklaring te wijzigen.'
        }
      },
      lastUpdated: 'Laatst bijgewerkt: januari 2025'
    },
    header: {
      ctaButton: 'Advies boeken',
      aiConsultingCta: 'Gratis AI-advies starten'
    },
    footer: {
      rights: '© 2025 Christian Plath Consulting Company. Alle rechten voorbehouden.',
      privacy: 'Privacy'
    },
    notFound: {
      title: 'Pagina niet gevonden',
      message: 'De opgevraagde pagina bestaat niet.',
      backToHome: 'Terug naar homepage'
    }
  },
  ar: {
    nav: {
      about: 'من نحن',
      kiSparring: 'احجز جلسة استشارية',
      products: 'خدماتنا',
      contact: 'تواصل معنا'
    },
    aboutMe: {
      learnMore: 'اكتشف المزيد',
      pageTitle: 'ما الذي يميزنا',
      backToHome: 'العودة للصفحة الرئيسية',
      whyDifferent: {
        title: 'أفضل ما في العالمين',
        subtitle: 'خبرة استشارية تلتقي بمختبر الذكاء الاصطناعي',
        synergy: {
          title: 'التكامل بدلاً من العزلة',
          description: 'نترجم تقنيات الذكاء الاصطناعي المعقدة إلى عمليات تجارية ملموسة - مفهومة للإدارة العليا، قابلة للتنفيذ من قبل الفرق.'
        },
        humanFocus: {
          title: 'الإنسان في صميم اهتمامنا',
          description: 'التدريب وإدارة التغيير جزء أساسي من كل حل نقدمه.'
        },
        conclusion: 'نبسّط التعقيد ونعظّم القيمة - بقوة كلا العالمين.'
      },
      experience: {
        title: 'خبرتنا في المشاريع',
        subtitle: 'أكثر من 10 سنوات من الخبرة في استشارات تكنولوجيا المعلومات والتحول الرقمي بالذكاء الاصطناعي'
      },
      industries: {
        title: 'القطاعات',
        items: ['مزودو خدمات تكنولوجيا المعلومات', 'التأمين الصحي الحكومي', 'الخدمات المالية', 'الإعلام والترفيه']
      },
      certifications: {
        title: 'الشهادات المهنية',
        items: ['مستشار ذكاء اصطناعي معتمد من TÜV', 'PRINCE2® Practitioner', 'ITIL® 2011 Expert', 'Sourcing Governance Foundation', 'SCRUM® Foundation و Product Owner']
      },
      education: {
        title: 'المؤهلات الأكاديمية',
        items: ['متخصص أعمال تكنولوجيا المعلومات المعتمد (IHK)', 'بكالوريوس نظم المعلومات الإدارية (B.Sc.)']
      },
      projects: {
        aiConsulting: {
          title: 'استشارات الذكاء الاصطناعي',
          period: 'منذ أبريل 2024',
          description: 'تقديم الاستشارات وتنفيذ حلول الذكاء الاصطناعي',
          items: [
            'قيادة المشاريع ودعمها: توجيه تطوير ونشر منتجات الذكاء الاصطناعي',
            'تحديد فرص الأعمال الجديدة وتحسين العمليات من خلال الذكاء الاصطناعي',
            'إعداد مواصفات خدمات مخصصة لمناقصات الذكاء الاصطناعي',
            'تقديم المشورة للشركات حول دمج حلول أتمتة الذكاء الاصطناعي'
          ]
        },
        aiImplementation: {
          title: 'تنفيذ الذكاء الاصطناعي',
          period: 'منذ أبريل 2024',
          items: [
            'تطبيق حلول روبوتات المحادثة المحلية في قطاع التأمين الصحي',
            'تنفيذ حلول روبوت الفيديو كنقطة اتصال للدعم على مواقع التأمين الصحي',
            'دمج الحلول البرمجية الحالية في نموذج اللغة الكبير الخاص بالشركة',
            'تطبيق تقييم النضج المدعوم بالذكاء الاصطناعي للتحليل السريع للفجوات',
            'تنفيذ دعم القرار المدعوم بالذكاء الاصطناعي لمراجعة المخرجات مقابل معايير البوابات',
            'تطبيق فحوصات الحوكمة المدعومة بالذكاء الاصطناعي لتصنيف مخاطر قانون الذكاء الاصطناعي الأوروبي',
            'إنشاء آلي كامل لوثائق المناقصات والعقود الأوروبية',
            'مراجعة العمليات المدعومة بالذكاء الاصطناعي وفقاً للائحة حماية البيانات وISO 27001'
          ]
        },
        tplGkv1: {
          title: 'مدير مشروع فرعي - تنظيم تكنولوجيا المعلومات (التأمين الصحي)',
          period: 'أبريل 2021 - ديسمبر 2024',
          description: 'المسؤولية عن جلسات التفاوض وإعداد وثائق العقود والمناقصات مع التركيز على وصف عمليات البنية التحتية لتكنولوجيا المعلومات لنقل خدمات تكنولوجيا المعلومات اللامركزية إلى مزود خارجي'
        },
        tplGkv2: {
          title: 'مدير مشروع فرعي - تنظيم تكنولوجيا المعلومات (التأمين الصحي)',
          period: 'أبريل 2019 - فبراير 2021',
          description: 'المسؤولية عن تصميم اتفاقيات مستوى الخدمة بين العميل والمقاول، بما في ذلك تعريفات العمليات ومؤشرات الأداء الرئيسية ونماذج الفوترة'
        },
        businessConsulting: {
          title: 'استشارات الأعمال',
          period: 'يوليو 2018 - أكتوبر 2018',
          items: [
            'تطوير منهجية مفاهيمية لتحديد استراتيجيات النمو الرقمي',
            'التنفيذ التقني لنموذج أولي في سياق التحول الرقمي'
          ]
        },
        vendorManager: {
          title: 'مدير الموردين - تنظيم تكنولوجيا المعلومات (بنك تجزئة)',
          period: 'أكتوبر 2017 - يوليو 2018',
          items: [
            'نقطة الاتصال بين إدارة تقديم الخدمات لدى المورد وتنظيم تكنولوجيا المعلومات الداخلي',
            'بدء التصعيدات الوظيفية والهرمية',
            'اتخاذ إجراءات استباقية لتجنب التصعيدات'
          ]
        },
        hardwareRollout: {
          title: 'مدير مشروع نشر الأجهزة (بنك تجزئة)',
          period: 'أبريل 2017 - أكتوبر 2017',
          items: [
            'استبدال الأجهزة كجزء من التحول الرقمي',
            'استبدال 5000 رمز أمان RSA على مستوى أوروبا',
            'استبدال الأجهزة القديمة بعملاء رقيقين في مواقع متعددة'
          ]
        },
        processDesign: {
          title: 'تصميم العمليات - تنظيم تكنولوجيا المعلومات (بنك تجزئة)',
          period: 'يناير 2016 - مارس 2017',
          items: [
            'مواءمة عمليات تكنولوجيا المعلومات ضمن استراتيجية الرقمنة',
            'تصميم حلول السحابة والحوسبة الافتراضية',
            'تطبيق عمليات ITIL® ITSM',
            'بناء خطط القدرة والتوافر'
          ]
        },
        associateHealth: {
          title: 'مستشار مساعد - تنظيم تكنولوجيا المعلومات (الرعاية الصحية)',
          period: 'أبريل 2015 - أكتوبر 2015',
          items: [
            'تحسين مكتب الخدمات',
            'تحليل وتحسين عمليات إدارة الحوادث والمشكلات',
            'إنشاء قاعدة بيانات إدارة التكوين عبر OMNITRACKER',
            'تطبيق إدارة الأحداث (المراقبة الاستباقية)'
          ]
        },
        associateMedia: {
          title: 'مستشار مساعد - الإعلام والترفيه',
          period: 'أغسطس 2013 - أغسطس 2014',
          items: [
            'رقمنة وأتمتة جزئية لعمليات دعم بوابات الفيديو حسب الطلب',
            'دعم البريد الإلكتروني وملاحظات التطبيقات (iOS وAndroid)',
            'الاختبار وتنسيق إصلاح الأخطاء'
          ]
        }
      }
    },
    hero: {
      title1: 'أفضل ما في العالمين',
      title2: 'بالضبط ما تحتاجه.',
      subtitle: 'نستعيد الوقت الضائع - استثمر وقتك بذكاء مع الذكاء الاصطناعي.',
      kpi1: {
        prefix: 'بمعدل',
        value: '-50%',
        label: 'وقت الاجتماعات'
      },
      kpi2: {
        prefix: 'بمعدل',
        value: '+18%',
        label: 'إمكانية زيادة الأرباح'
      },
      kpi3: {
        prefix: 'خلال',
        value: '8-10 أسابيع',
        label: 'للمنتج الأولي'
      }
    },
    about: {
      title: 'من نحن',
      subtitle: 'أكثر من 10 سنوات استشارات × 3 سنوات ريادة في الذكاء الاصطناعي = ميزتك التنافسية',
      founderTitle: 'كريستيان بلاث',
      founderRole: 'المؤسس والرئيس التنفيذي',
      founderDescription: 'بخبرة تتجاوز 10 سنوات في الاستشارات الإدارية وفهم عميق لتقنيات الذكاء الاصطناعي، أجمع بين عالمين - التميز الاستشاري التقليدي وتقنيات المستقبل المبتكرة.',
      showCertificates: 'عرض الشهادات ←',
      whyBothWorlds: 'لماذا نجمع بين العالمين؟',
      strategicDepth: {
        title: 'العمق الاستراتيجي',
        description: 'استشارات كلاسيكية بمنهجيات مثبتة وخبرة عقود.'
      },
      technologicalInnovation: {
        title: 'الابتكار التقني',
        description: 'حلول ذكاء اصطناعي متطورة لتحديات الغد.'
      },
      humanExpertise: {
        title: 'الخبرة البشرية',
        description: 'الذكاء الاصطناعي يعزز الذكاء البشري - لا يحل محله.'
      }
    },
    kiSparring: {
      title: 'احجز جلسة استشارية',
      subtitle: 'استفد من جلستنا الاستشارية المجانية للانطلاق المثالي نحو مستقبلك في الذكاء الاصطناعي.',
      consultationTitle: 'استشارة أولية مجانية',
      description: 'في جلسة غير ملزمة مدتها ساعة، نحلل معاً تحدياتك الحالية ونوضح أين يمكن للذكاء الاصطناعي تحقيق أكبر قيمة لشركتك.',
      feature1: 'مجانية 100%',
      feature2: 'بدون التزام',
      feature3: '60 دقيقة',
      bookButton: 'احجز جلستك الآن'
    },
    products: {
      title: 'خدماتنا',
      subtitle: 'حلول ذكاء اصطناعي مصممة خصيصاً لنجاحك - من الاستراتيجية إلى التنفيذ.',
      items: {
        kiStarthilfe: {
          title: 'انطلاقة الذكاء الاصطناعي',
          description: 'المدخل الاستراتيجي لعالم الذكاء الاصطناعي لشركتك.'
        },
        projektmanagement: {
          title: 'إدارة المشاريع 3.0',
          description: 'تحسين سير العمل وتخطيط الموارد بدعم الذكاء الاصطناعي.'
        },
        prozessOptimierung: {
          title: 'تحسين العمليات بالذكاء الاصطناعي',
          description: 'الأتمتة وتعزيز الكفاءة من خلال العمليات الذكية.'
        },
        marketingSales: {
          title: 'الذكاء الاصطناعي في التسويق والمبيعات',
          description: 'أحدث ثورة في استراتيجيات مبيعاتك بقوة الذكاء الاصطناعي.'
        },
        schulungen: {
          title: 'تدريب الذكاء الاصطناعي',
          description: 'معرفة متخصصة لفرقك - عملية ومستدامة.'
        },
        ausschreibungen: {
          title: 'الذكاء الاصطناعي في المناقصات',
          description: 'تحسين عمليات المناقصات من خلال الأتمتة الذكية.'
        }
      },
      learnMore: 'اكتشف المزيد ←',
      ctaButton: 'احجز استشارتك المجانية'
    },
    contact: {
      title: 'تواصل معنا',
      subtitle: 'مستعد للخطوة التالية؟ لنشكّل معاً مستقبلك في الذكاء الاصطناعي.',
      speakWithUs: 'تحدث معنا',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      locations: 'المواقع',
      readyForDialog: 'مستعد للحوار؟',
      dialogDescription: 'احجز موعداً غير ملزم اليوم واكتشف كيف يمكن للذكاء الاصطناعي تحويل أعمالك.',
      scheduleAppointment: 'احجز موعداً',
      orCallDirectly: 'أو اتصل بنا مباشرة:'
    },
    contactForm: {
      title: 'نموذج التواصل',
      subtitle: 'لنتحدث معاً عن مستقبلك في الذكاء الاصطناعي. أكمل النموذج وسنتواصل معك قريباً.',
      handPromiseTitle: 'وعدنا لك!',
      handPromiseText: 'نقدم لك جلسة مجانية تماماً وغير ملزمة لمدة ساعة، تحدثنا فيها عن شركتك وتحدياتك الحالية. أين تكمن أكبر المشكلات؟ أين تحتاج الدعم؟ سنناقش معاً إمكانية مساعدة الذكاء الاصطناعي وكيفيتها. كلما قدمت معلومات أكثر في النموذج، استفدنا من الساعة بشكل أفضل.',
      fields: {
        name: 'الاسم *',
        email: 'البريد الإلكتروني *',
        company: 'الشركة',
        phone: 'الهاتف',
        subject: 'الموضوع *',
        message: 'الرسالة *'
      },
      placeholders: {
        name: 'اسمك الكامل',
        email: 'بريدك@مثال.com',
        company: 'شركتك (اختياري)',
        phone: 'رقم هاتفك (اختياري)',
        subject: 'ما هو الموضوع؟',
        message: 'صف طلبك...'
      },
      submitButton: 'إرسال الرسالة',
      sending: 'جارٍ الإرسال...',
      orContactDirectly: 'أو تواصل معنا مباشرة:',
      backToHome: 'العودة للصفحة الرئيسية',
      successTitle: 'تم إرسال الرسالة!',
      successDescription: 'شكراً لرسالتك. سنتواصل معك قريباً.',
      errorTitle: 'خطأ في الإرسال',
      errorDescription: 'حدثت مشكلة في إرسال رسالتك. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة.'
    },
    privacy: {
      title: 'سياسة الخصوصية',
      subtitle: 'نأخذ حماية بياناتك الشخصية على محمل الجد.',
      backToHome: 'العودة للصفحة الرئيسية',
      sections: {
        responsible: {
          title: '1. الجهة المسؤولة',
          content: 'الجهة المسؤولة عن معالجة البيانات على هذا الموقع هي:'
        },
        dataCollection: {
          title: '2. جمع وتخزين البيانات الشخصية',
          websiteVisit: '2.1 عند زيارة الموقع',
          content: 'عند الوصول إلى موقعنا، يقوم المتصفح المستخدم على جهازك بإرسال معلومات تلقائياً إلى خادم موقعنا. يتم تخزين هذه المعلومات مؤقتاً في ملف سجل.',
          listItems: [
            'عنوان IP للجهاز المتصل',
            'تاريخ ووقت الوصول',
            'اسم ورابط الملف المطلوب',
            'الموقع الذي تم الوصول منه (رابط المُحيل)',
            'المتصفح المستخدم ونظام التشغيل على جهازك'
          ]
        },
        contact: {
          title: '3. التواصل',
          content: 'عند التواصل معنا (مثلاً عبر البريد الإلكتروني أو الهاتف)، نقوم بتخزين البيانات التي تقدمها للرد على استفساراتك. نحذف هذه البيانات بعد انتفاء الحاجة للتخزين، أو نقيد المعالجة إذا كانت هناك التزامات قانونية بالحفظ.'
        },
        dataSharing: {
          title: '4. مشاركة البيانات',
          content: 'لا ننقل بياناتك الشخصية إلى أطراف ثالثة لأغراض غير المذكورة أدناه. نشارك بياناتك الشخصية مع أطراف ثالثة فقط إذا:',
          listItems: [
            'منحت موافقتك الصريحة على ذلك',
            'كانت المشاركة ضرورية لإثبات أو ممارسة أو الدفاع عن مطالبات قانونية',
            'كانت المشاركة ضرورية للوفاء بالتزام قانوني'
          ]
        },
        rights: {
          title: '5. حقوقك',
          content: 'لديك الحقوق التالية فيما يتعلق ببياناتك الشخصية:',
          listItems: [
            'الحق في الاطلاع',
            'الحق في التصحيح أو الحذف',
            'الحق في تقييد المعالجة',
            'الحق في الاعتراض على المعالجة',
            'الحق في نقل البيانات'
          ],
          complaint: 'لديك أيضاً الحق في تقديم شكوى إلى هيئة رقابة حماية البيانات بشأن معالجتنا لبياناتك الشخصية.'
        },
        security: {
          title: '6. أمن البيانات',
          content: 'نستخدم بروتوكول SSL (طبقة المقابس الآمنة) المنتشر بالاقتران مع أعلى مستوى تشفير يدعمه متصفحك أثناء زيارة الموقع. عادةً ما يكون هذا تشفير 256 بت. إذا كان متصفحك لا يدعم تشفير 256 بت، نستخدم تقنية 128 بت v3 بدلاً من ذلك.'
        },
        updates: {
          title: '7. تحديث سياسة الخصوصية',
          content: 'سياسة الخصوصية هذه سارية حالياً ومؤرخة في يناير 2025. قد يكون من الضروري تعديل هذه السياسة بسبب التطوير المستمر لموقعنا وعروضنا أو بسبب تغير المتطلبات القانونية أو الرسمية.'
        }
      },
      lastUpdated: 'آخر تحديث: يناير 2025'
    },
    header: {
      ctaButton: 'احجز استشارة',
      aiConsultingCta: 'ابدأ استشارتك المجانية'
    },
    footer: {
      rights: '© 2025 Christian Plath Consulting Company. جميع الحقوق محفوظة.',
      privacy: 'الخصوصية'
    },
    notFound: {
      title: 'الصفحة غير موجودة',
      message: 'الصفحة المطلوبة غير موجودة.',
      backToHome: 'العودة للصفحة الرئيسية'
    }
  },
  ru: {
    nav: {
      about: 'О нас',
      kiSparring: 'Записаться на AI-консультацию',
      products: 'Услуги',
      contact: 'Контакты'
    },
    aboutMe: {
      learnMore: 'Узнать больше',
      pageTitle: 'Почему мы отличаемся',
      backToHome: 'Вернуться на главную',
      whyDifferent: {
        title: 'ЛУЧШЕЕ ИЗ ДВУХ МИРОВ',
        subtitle: 'ДНК консультанта встречает лабораторию ИИ',
        synergy: {
          title: 'Синергия вместо разобщённости',
          description: 'Мы переводим сложные AI-технологии в конкретные бизнес-процессы — понятные для руководства, реализуемые командами.'
        },
        humanFocus: {
          title: 'Люди в центре внимания',
          description: 'Обучение и управление изменениями — неотъемлемая часть каждого решения.'
        },
        conclusion: 'Меньше сложности, больше ценности — с силой обоих миров.'
      },
      experience: {
        title: 'Опыт проектов',
        subtitle: 'Более 10 лет экспертизы в IT-консалтинге и AI-трансформации'
      },
      industries: {
        title: 'Отрасли',
        items: ['IT-провайдеры', 'Государственное медицинское страхование', 'Финансовые услуги', 'Медиа и развлечения']
      },
      certifications: {
        title: 'Сертификаты',
        items: ['Сертифицированный AI-консультант TÜV', 'PRINCE2® Practitioner', 'ITIL® 2011 Expert', 'Sourcing Governance Foundation', 'SCRUM® Foundation и Product Owner']
      },
      education: {
        title: 'Образование',
        items: ['Квалифицированный IT-бизнес-специалист (IHK)', 'Бизнес-информатика (B.Sc.)']
      },
      projects: {
        aiConsulting: {
          title: 'AI-консалтинг',
          period: 'С апреля 2024',
          description: 'Консультирование и внедрение AI-решений',
          items: [
            'Руководство проектами: управление разработкой и развёртыванием AI-продуктов',
            'Выявление новых бизнес-возможностей и оптимизация процессов с помощью ИИ',
            'Разработка индивидуальных описаний услуг для AI-тендеров',
            'Консультирование компаний по интеграции AI-автоматизации'
          ]
        },
        aiImplementation: {
          title: 'Внедрение ИИ',
          period: 'С апреля 2024',
          items: [
            'Внедрение локальных чат-ботов в секторе государственного медицинского страхования',
            'Внедрение видео-бота как точки поддержки на сайтах страховых компаний',
            'Интеграция существующих программных решений в корпоративную LLM',
            'Внедрение AI-оценки зрелости для быстрого GAP-анализа',
            'Внедрение AI-поддержки принятия решений для проверки результатов по критериям',
            'Внедрение AI-проверок соответствия для классификации рисков по EU AI Act',
            'Полностью автоматизированное создание тендерной документации ЕС',
            'AI-проверка процессов на соответствие GDPR, ISO 27001 и др.'
          ]
        },
        tplGkv1: {
          title: 'Менеджер подпроекта IT-организации (медицинское страхование)',
          period: 'Апрель 2021 — декабрь 2024',
          description: 'Ответственность за переговоры и подготовку контрактной/тендерной документации с фокусом на описание IT-процессов для аутсорсинга IT-услуг внешнему провайдеру'
        },
        tplGkv2: {
          title: 'Менеджер подпроекта IT-организации (медицинское страхование)',
          period: 'Апрель 2019 — февраль 2021',
          description: 'Ответственность за разработку соглашений об уровне сервиса между заказчиком и исполнителем, включая определения процессов, KPI и модели расчётов'
        },
        businessConsulting: {
          title: 'Бизнес-консалтинг',
          period: 'Июль 2018 — октябрь 2018',
          items: [
            'Концептуальная разработка методологии определения стратегий цифрового роста',
            'Техническая реализация прототипа в контексте цифровой трансформации'
          ]
        },
        vendorManager: {
          title: 'Менеджер по работе с поставщиками IT-организации (розничный банк)',
          period: 'Октябрь 2017 — июль 2018',
          items: [
            'Связующее звено между управлением поставками поставщика и внутренней IT-организацией',
            'Инициирование функциональных и иерархических эскалаций',
            'Проактивные меры по предотвращению эскалаций'
          ]
        },
        hardwareRollout: {
          title: 'Руководитель проекта развёртывания оборудования (розничный банк)',
          period: 'Апрель 2017 — октябрь 2017',
          items: [
            'Замена оборудования в рамках цифровой трансформации',
            'Замена 5000 RSA-токенов безопасности по всей Европе',
            'Замена устаревших устройств на тонкие клиенты в многочисленных локациях'
          ]
        },
        processDesign: {
          title: 'Проектирование процессов IT-организации (розничный банк)',
          period: 'Январь 2016 — март 2017',
          items: [
            'Согласование IT-процессов в рамках стратегии цифровизации',
            'Концептуализация облачных и виртуализационных решений',
            'Внедрение процессов ITIL® ITSM',
            'Разработка планов мощности и доступности'
          ]
        },
        associateHealth: {
          title: 'Младший консультант IT-организации (здравоохранение)',
          period: 'Апрель 2015 — октябрь 2015',
          items: [
            'Оптимизация службы поддержки',
            'Анализ и оптимизация процессов управления инцидентами и проблемами',
            'Создание CMDB через OMNITRACKER',
            'Внедрение управления событиями (проактивный мониторинг)'
          ]
        },
        associateMedia: {
          title: 'Младший консультант (медиа и развлечения)',
          period: 'Август 2013 — август 2014',
          items: [
            'Цифровизация и частичная автоматизация процессов поддержки видео-порталов',
            'Почтовая служба поддержки и обратная связь по приложениям (iOS и Android)',
            'Тестирование и координация исправления ошибок'
          ]
        }
      }
    },
    hero: {
      title1: 'Лучшее из двух миров',
      title2: 'Именно то, что вам нужно.',
      subtitle: 'Мы возвращаем потерянное время — инвестируйте своё время разумно с ИИ.',
      kpi1: {
        prefix: 'В среднем',
        value: '-50%',
        label: 'времени на встречи'
      },
      kpi2: {
        prefix: 'В среднем',
        value: '+18%',
        label: 'потенциал EBIT'
      },
      kpi3: {
        prefix: 'Максимум',
        value: '8-10 недель',
        label: 'до MVP'
      }
    },
    about: {
      title: 'О нас',
      subtitle: 'Более 10 лет консалтинга × 3 года AI-новаторства = Ваше конкурентное преимущество',
      founderTitle: 'Кристиан Плат',
      founderRole: 'Основатель и CEO',
      founderDescription: 'С более чем 10-летним опытом в управленческом консалтинге и глубоким пониманием AI-технологий я объединяю два мира — традиционное консалтинговое мастерство и инновационные технологии будущего.',
      showCertificates: 'Показать сертификаты →',
      whyBothWorlds: 'Почему два мира?',
      strategicDepth: {
        title: 'Стратегическая глубина',
        description: 'Классический консалтинг с проверенными методами и многолетним опытом.'
      },
      technologicalInnovation: {
        title: 'Технологические инновации',
        description: 'Передовые AI-решения для задач завтрашнего дня.'
      },
      humanExpertise: {
        title: 'Человеческая экспертиза',
        description: 'ИИ усиливает человеческий интеллект — не заменяет его.'
      }
    },
    kiSparring: {
      title: 'Записаться на AI-консультацию',
      subtitle: 'Воспользуйтесь нашей бесплатной AI-консультацией для идеального старта в ваше AI-будущее.',
      consultationTitle: 'Бесплатная первичная консультация',
      description: 'В ходе необязывающей часовой беседы мы вместе проанализируем ваши текущие задачи и покажем, где ИИ может создать наибольшую ценность для вашей компании.',
      feature1: '100% бесплатно',
      feature2: 'Без обязательств',
      feature3: '60 минут',
      bookButton: 'Записаться на консультацию'
    },
    products: {
      title: 'Наши услуги',
      subtitle: 'Индивидуальные AI-решения для вашего успеха — от стратегии до реализации.',
      items: {
        kiStarthilfe: {
          title: 'AI-старт',
          description: 'Стратегический вход в мир искусственного интеллекта для вашей компании.'
        },
        projektmanagement: {
          title: 'Управление проектами 3.0',
          description: 'AI-оптимизация рабочих процессов и планирования ресурсов.'
        },
        prozessOptimierung: {
          title: 'AI-оптимизация процессов',
          description: 'Автоматизация и повышение эффективности через интеллектуальные процессы.'
        },
        marketingSales: {
          title: 'ИИ в маркетинге и продажах',
          description: 'Революционизируйте ваши стратегии продаж с силой ИИ.'
        },
        schulungen: {
          title: 'AI-обучение',
          description: 'Экспертные знания для ваших команд — практично и устойчиво.'
        },
        ausschreibungen: {
          title: 'ИИ в тендерах',
          description: 'Оптимизация тендерных процессов через интеллектуальную автоматизацию.'
        }
      },
      learnMore: 'Узнать больше →',
      ctaButton: 'Записаться на бесплатную консультацию'
    },
    contact: {
      title: 'Контакты',
      subtitle: 'Готовы к следующему шагу? Давайте вместе сформируем ваше AI-будущее.',
      speakWithUs: 'Свяжитесь с нами',
      phone: 'Телефон',
      email: 'Эл. почта',
      locations: 'Локации',
      readyForDialog: 'Готовы к диалогу?',
      dialogDescription: 'Запишитесь на необязывающую встречу сегодня и узнайте, как ИИ может трансформировать ваш бизнес.',
      scheduleAppointment: 'Назначить встречу',
      orCallDirectly: 'Или позвоните нам напрямую:'
    },
    contactForm: {
      title: 'Контактная форма',
      subtitle: 'Давайте вместе обсудим ваше AI-будущее. Заполните форму, и мы свяжемся с вами в ближайшее время.',
      handPromiseTitle: 'Наше обещание!',
      handPromiseText: 'Мы предлагаем вам полностью бесплатную и необязывающую часовую сессию, где вы расскажете нам о вашей компании и текущих задачах. Где болит больше всего? Где нужна поддержка? Может ли ИИ помочь и как именно — обсудим вместе. Чем больше информации вы укажете в форме, тем эффективнее мы используем время.',
      fields: {
        name: 'Имя *',
        email: 'Эл. почта *',
        company: 'Компания',
        phone: 'Телефон',
        subject: 'Тема *',
        message: 'Сообщение *'
      },
      placeholders: {
        name: 'Ваше полное имя',
        email: 'ваш.email@пример.com',
        company: 'Ваша компания (необязательно)',
        phone: 'Ваш номер телефона (необязательно)',
        subject: 'О чём пойдёт речь?',
        message: 'Опишите ваш запрос...'
      },
      submitButton: 'Отправить сообщение',
      sending: 'Отправка...',
      orContactDirectly: 'Или свяжитесь с нами напрямую:',
      backToHome: 'Вернуться на главную',
      successTitle: 'Сообщение отправлено!',
      successDescription: 'Спасибо за ваше сообщение. Мы свяжемся с вами в ближайшее время.',
      errorTitle: 'Ошибка отправки',
      errorDescription: 'При отправке сообщения возникла проблема. Пожалуйста, попробуйте снова или свяжитесь с нами напрямую.'
    },
    privacy: {
      title: 'Политика конфиденциальности',
      subtitle: 'Мы серьёзно относимся к защите ваших персональных данных.',
      backToHome: 'Вернуться на главную',
      sections: {
        responsible: {
          title: '1. Ответственная сторона',
          content: 'Ответственной стороной за обработку данных на этом сайте является:'
        },
        dataCollection: {
          title: '2. Сбор и хранение персональных данных',
          websiteVisit: '2.1 При посещении сайта',
          content: 'При доступе к нашему сайту браузер на вашем устройстве автоматически отправляет информацию на сервер нашего сайта. Эта информация временно хранится в так называемом лог-файле.',
          listItems: [
            'IP-адрес запрашивающего устройства',
            'Дата и время доступа',
            'Имя и URL запрошенного файла',
            'Сайт, с которого осуществлён доступ (URL-источник)',
            'Используемый браузер и, возможно, операционная система вашего устройства'
          ]
        },
        contact: {
          title: '3. Контакт',
          content: 'При обращении к нам (например, по электронной почте или телефону) предоставленные вами данные сохраняются для ответа на ваши вопросы. Мы удаляем эти данные после того, как хранение больше не требуется, или ограничиваем обработку при наличии законных обязательств по хранению.'
        },
        dataSharing: {
          title: '4. Передача данных',
          content: 'Мы не передаём ваши персональные данные третьим лицам для целей, отличных от перечисленных ниже. Мы передаём ваши персональные данные третьим лицам только если:',
          listItems: [
            'Вы дали на это явное согласие',
            'Передача необходима для заявления, осуществления или защиты правовых требований',
            'Передача необходима для выполнения юридического обязательства'
          ]
        },
        rights: {
          title: '5. Ваши права',
          content: 'Вы имеете следующие права в отношении ваших персональных данных:',
          listItems: [
            'Право на информацию',
            'Право на исправление или удаление',
            'Право на ограничение обработки',
            'Право на возражение против обработки',
            'Право на переносимость данных'
          ],
          complaint: 'Вы также имеете право подать жалобу в надзорный орган по защите данных относительно нашей обработки ваших персональных данных.'
        },
        security: {
          title: '6. Безопасность данных',
          content: 'При посещении сайта мы используем широко распространённый протокол SSL (Secure Socket Layer) в сочетании с максимальным уровнем шифрования, поддерживаемым вашим браузером. Обычно это 256-битное шифрование. Если ваш браузер не поддерживает 256-битное шифрование, мы используем 128-битную технологию v3.'
        },
        updates: {
          title: '7. Актуальность политики конфиденциальности',
          content: 'Эта политика конфиденциальности актуальна и датирована январём 2025 года. В связи с дальнейшим развитием нашего сайта и предложений или изменением правовых или официальных требований может потребоваться изменение этой политики.'
        }
      },
      lastUpdated: 'Последнее обновление: январь 2025'
    },
    header: {
      ctaButton: 'Записаться на консультацию',
      aiConsultingCta: 'Начать бесплатную AI-консультацию'
    },
    footer: {
      rights: '© 2025 Christian Plath Consulting Company. Все права защищены.',
      privacy: 'Конфиденциальность'
    },
    notFound: {
      title: 'Страница не найдена',
      message: 'Запрошенная страница не существует.',
      backToHome: 'Вернуться на главную'
    }
  }
};

export const useTranslations = (language: Language): Translations => {
  return translations[language];
};
