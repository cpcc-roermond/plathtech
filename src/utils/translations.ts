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

  // KI-Starthilfe Page
  kiStarthilfePage: {
    pageTitle: string;
    metaDescription: string;
    backToHome: string;
    heroHeading: string;
    quote: string;
    quoteHighlight: string;
    intro: string;
    highlightCard: string;
    highlightCardHighlight: string;
    process: {
      title: string;
      subtitle: string;
      step1: { title: string; description: string; detail: string; };
      step2: { title: string; description: string; detail: string; };
      step3: { title: string; description: string; detail: string; };
    };
    coreQuestions: {
      title: string;
      subtitle: string;
      q1: { title: string; questions: string[]; };
      q2: { title: string; questions: string[]; };
      q3: { title: string; questions: string[]; };
    };
    benefits: {
      title: string;
      items: string[];
      closingText: string;
      closingHighlight: string;
    };
    cta: {
      heading: string;
      headingHighlight: string;
      text: string;
      button: string;
      tagline: string;
    };
  };

  // Projektmanagement 3.0 Page
  projektmanagementPage: {
    pageTitle: string;
    metaDescription: string;
    backToHome: string;
    heroHeading: string;
    quote: string;
    intro: string;
    problemStatement: string;
    problemHighlight: string;
    strips: {
      focus: { label: string; text: string; };
      setup: { label: string; text: string; };
      result: { label: string; text: string; };
    };
    benefits: {
      title: string;
      subtitle: string;
      card1: { title: string; description: string; };
      card2: { title: string; description: string; };
      card3: { title: string; description: string; };
    };
    tags: string[];
    cta: {
      heading: string;
      headingHighlight: string;
      text: string;
      button: string;
      tagline: string;
    };
  };

  // KI-Geschäftsoptimierung Page
  kiGeschaeftsoptimierungPage: {
    pageTitle: string;
    metaDescription: string;
    backToHome: string;
    heroHeading: string;
    quote: string;
    quoteHighlight: string;
    intro: string;
    highlightCard: string;
    highlightCardHighlight: string;
    process: {
      title: string;
      subtitle: string;
      step1: { title: string; description: string; detail: string; };
      step2: { title: string; description: string; detail: string; };
      step3: { title: string; description: string; detail: string; };
      step4: { title: string; description: string; detail: string; };
      step5: { title: string; description: string; detail: string; };
      step6: { title: string; description: string; detail: string; };
    };
    tags: string[];
    cta: {
      heading: string;
      headingHighlight: string;
      text: string;
      button: string;
      tagline: string;
    };
  };

  // KI in Marketing & Sales Page
  kiMarketingSalesPage: {
    pageTitle: string;
    metaDescription: string;
    backToHome: string;
    heroHeading: string;
    quote: string;
    quoteHighlight: string;
    intro: string;
    problemStatement: string;
    problemHighlight: string;
    themes: {
      title: string;
      subtitle: string;
      theme1: { title: string; bullets: string[]; };
      theme2: { title: string; bullets: string[]; };
      theme3: { title: string; bullets: string[]; };
      theme4: { title: string; bullets: string[]; };
    };
    resultStatement: string;
    resultHighlight: string;
    tags: string[];
    cta: {
      heading: string;
      headingHighlight: string;
      text: string;
      button: string;
      tagline: string;
    };
  };

  // KI-Schulungen Page
  kiSchulungenPage: {
    pageTitle: string;
    metaDescription: string;
    backToHome: string;
    heroHeading: string;
    quote: string;
    quoteHighlight: string;
    intro: string;
    problemStatement: string;
    problemHighlight: string;
    pillars: {
      title: string;
      subtitle: string;
      pillar1: {
        title: string;
        heading: string;
        items: { bold: string; text: string; }[];
      };
      pillar2: {
        title: string;
        heading: string;
        items: { bold: string; text: string; }[];
      };
      pillar3: {
        title: string;
        heading: string;
        items: { bold: string; text: string; }[];
      };
    };
    resultStatement: string;
    resultHighlight: string;
    tags: string[];
    cta: {
      heading: string;
      headingHighlight: string;
      text: string;
      button: string;
      tagline: string;
    };
  };

  // KI in Ausschreibungen Page
  kiAusschreibungenPage: {
    pageTitle: string;
    metaDescription: string;
    backToHome: string;
    heroHeading: string;
    quote: string;
    quoteHighlight: string;
    intro: string;
    problemStatement: string;
    problemHighlight: string;
    painPoints: {
      title: string;
      items: string[];
    };
    sides: {
      title: string;
      subtitle: string;
      customer: {
        sideLabel: string;
        title: string;
        items: { heading: string; description: string; }[];
      };
      provider: {
        sideLabel: string;
        title: string;
        items: { heading: string; description: string; }[];
      };
    };
    resultStatement: string;
    resultHighlight: string;
    tags: string[];
    cta: {
      heading: string;
      headingHighlight: string;
      text: string;
      button: string;
      tagline: string;
    };
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
          title: 'KI-Geschäftsoptimierung',
          description: 'Automatisierung und Effizienzsteigerung durch intelligente Prozesse.'
        },
        marketingSales: {
          title: 'KI in Marketing & Sales',
          description: 'Revolutionieren Sie Ihre Vertriebsstrategien mit KI-Power.'
        },
        schulungen: {
          title: 'KI-Schulungen & Transformation',
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
    },
    kiStarthilfePage: {
      pageTitle: 'KI-Starthilfe & Potentialanalyse | CPCC – Christian Plath Consulting Company',
      metaDescription: 'CPCC KI-Starthilfe: Individuelle Potentialanalyse für Ihr Unternehmen. Wir identifizieren echte Pain Points, analysieren Ihren KI-Status-Quo und liefern einen klaren, realistischen KI-Fahrplan – ohne falsche Versprechen.',
      backToHome: 'Zurück zur Startseite',
      heroHeading: 'KI-Starthilfe',
      quote: '„Wir wissen, dass KI wichtig ist – aber ',
      quoteHighlight: 'wo fangen wir an?',
      intro: 'Überall wird von KI gesprochen, doch was bringt das konkret für Ihr Unternehmen? Bevor teure Tools lizenziert oder planlose Projekte gestartet werden, braucht es Klarheit.',
      highlightCard: 'Unsere Potentialanalyse ',
      highlightCardHighlight: 'durchleuchtet Ihren Geschäftsbereich',
      process: {
        title: 'Wie die Analyse abläuft',
        subtitle: 'Drei klar definierte Schritte – von der ersten Bestandsaufnahme bis zum fertigen Fahrplan.',
        step1: { title: 'Fokus', description: 'Gezielte Identifikation von echten Pain Points, bei denen KI und Automatisierung eine entscheidende Rolle spielen können.', detail: 'Wir schauen genau hin – ohne Buzzwords, ohne Schönfärberei.' },
        step2: { title: 'Das Setup', description: 'Gemeinsame Bestandsaufnahme Ihres aktuellen Status Quo – welche Tools sind bereits im Einsatz und welches Know-How ist im Team vorhanden?', detail: 'Analyse Ihrer digitalen Infrastruktur und Ihrer Mitarbeiterkompetenzen.' },
        step3: { title: 'Das Ergebnis', description: 'Ein klarer Fahrplan, der aufzeigt, welche konkreten Auswirkungen KI auf Ihre Dienstleistungen hat und wie Sie Ihr Geschäftsmodell optimieren können.', detail: 'Konkret, realistisch, umsetzbar – kein Theorie-Papier.' },
      },
      coreQuestions: {
        title: 'Kernfragen der Analyse',
        subtitle: 'Drei zentrale Dimensionen, die wir gemeinsam mit Ihnen beleuchten.',
        q1: { title: 'Bedarfsermittlung', questions: ['Welche Pain Points existieren in Ihrem Geschäftsbereich wirklich?', 'Welche Tools sind bereits im Einsatz?', 'Wo entstehen heute unnötige Reibungsverluste?'] },
        q2: { title: 'Strategie', questions: ['Wo kann KI Prozesse und Personal unterstützen?', 'Wo kann KI tatsächlich ersetzen?', 'Was ist realistisch – heute und morgen?'] },
        q3: { title: 'Befähigung', questions: ['Welches Know-How ist im Team vorhanden?', 'Wie können Mitarbeiter KI produktiv nutzen?', 'Welche Schulungen sind sinnvoll?'] },
      },
      benefits: {
        title: 'Was Sie bekommen',
        items: ['Ehrliche Einschätzung', 'Realistische Ziele', 'Individuelle Status-Quo-Analyse', 'Klarer KI-Fahrplan'],
        closingText: 'Kein generisches Konzept von der Stange – sondern eine ',
        closingHighlight: 'maßgeschneiderte Analyse',
      },
      cta: {
        heading: 'Bereit für Ihren ',
        headingHighlight: 'KI-Fahrplan?',
        text: 'In einem unverbindlichen Erstgespräch klären wir gemeinsam, wie eine individuelle Potentialanalyse für Ihr Unternehmen aussehen kann.',
        button: 'Kostenloses Erstgespräch vereinbaren',
        tagline: 'Kostenlos · Unverbindlich · Persönlich',
      },
    },
    projektmanagementPage: {
      pageTitle: 'Projektmanagement 3.0 | CPCC – Christian Plath Consulting Company',
      metaDescription: 'Projektmanagement 3.0 vereint klassische PM-Frameworks mit Künstlicher Intelligenz. Entlasten Sie Ihr PMO, automatisieren Sie den Projektalltag und kaufen Sie sich Ihre Zeit zurück.',
      backToHome: 'Zurück zur Startseite',
      heroHeading: 'Projektmanagement 3.0',
      quote: '„Stellen Sie sich vor, Ihre Projekte managen sich dank KI fast von selbst."',
      intro: 'Klassische PM-Frameworks vereint mit modernster Künstlicher Intelligenz – damit Ihr Team endlich wieder Zeit für das hat, was wirklich zählt.',
      problemStatement: 'Das PMO ist chronisch überlastet und Ihr Team verbringt den halben Tag in unproduktiven Meetings, statt das eigentliche Projekt voranzutreiben.',
      problemHighlight: 'Projektmanagement 3.0 löst genau diese Pain Points durch intelligente Automatisierung des Projektalltags – und kauft Ihnen Ihre Zeit zurück.',
      strips: {
        focus: { label: 'Fokus', text: 'Befreiung Ihres Teams von administrativen PMO-Aufgaben durch intelligente Automatisierung des Projektalltags.' },
        setup: { label: 'Setup', text: 'Integration smarter KI-Assistenten in Ihre bestehenden Meeting-Routinen und Projekt-Strukturen.' },
        result: { label: 'Ergebnis', text: 'Drastische Zeitersparnis und spürbar effizientere Meetings – Sie kaufen sich Ihre Zeit mit der Hilfe von KI einfach zurück.' },
      },
      benefits: {
        title: 'Ihre Vorteile auf einen Blick',
        subtitle: 'Drei konkrete Hebel, mit denen KI Ihren Projektalltag sofort entlastet.',
        card1: { title: 'Smarte Meeting-Kultur', description: 'Automatische Agenda-Erstellung und strukturierte Abläufe sorgen dafür, dass Sie nicht mehr den ganzen Tag in Calls festhängen.' },
        card2: { title: 'Nahtlose Delegation', description: 'Automatische Aufgabenzuweisung direkt aus dem Gespräch heraus, ganz ohne händisches Protokollieren.' },
        card3: { title: 'Lückenloses Tracking', description: 'Die automatische Deadline-Verfolgung übernimmt das lästige Follow-up und schont wertvolle PMO-Ressourcen.' },
      },
      tags: ['✓ Klassische Frameworks & KI vereint', '✓ Entlastung der PMO-Ressourcen', '✓ Mehr Zeit fürs Daily Business'],
      cta: {
        heading: 'Bereit, Ihr PMO zu ',
        headingHighlight: 'entlasten?',
        text: 'Lassen Sie uns gemeinsam herausfinden, wo KI in Ihrem Projektmanagement den größten Hebel bietet. Kostenlos und unverbindlich.',
        button: 'Kostenloses Erstgespräch vereinbaren',
        tagline: 'Kostenlos · Unverbindlich · Persönlich',
      },
    },
    kiGeschaeftsoptimierungPage: {
      pageTitle: 'KI-Geschäftsoptimierung | CPCC – Christian Plath Consulting Company',
      metaDescription: 'KI-Prozess-Optimierung in 6 Schritten: Von der Use-Case-Identifikation über DSGVO-konforme Tool-Evaluierung bis zur reibungslosen Implementierung. Strukturiert, sicher, kostenbewusst.',
      backToHome: 'Zurück zur Startseite',
      heroHeading: 'KI-Geschäftsoptimierung',
      quote: '„Nicht jeder Prozess muss zwanghaft automatisiert werden – ',
      quoteHighlight: 'wir finden die, bei denen es sich wirklich lohnt."',
      intro: 'Von der Use-Case-Identifikation über DSGVO-konforme Evaluierung bis zur begleiteten Implementierung – strukturiert, sicher und kostenbewusst.',
      highlightCard: 'KI-Projekte scheitern nicht an der Technologie – sie scheitern an fehlender Struktur, Datenschutzrisiken und falsch gewählten Modellen.',
      highlightCardHighlight: 'Unser 6-stufiger Prozess bringt Ordnung, Sicherheit und Kosteneffizienz in Ihre KI-Integration.',
      process: {
        title: 'Der 6-stufige Prozess',
        subtitle: 'Von der ersten Analyse bis zum produktiven Betrieb – kein Schritt wird übersprungen.',
        step1: {
          title: 'Use-Case-Generierung',
          description: 'Gezielte Identifikation der Use-Cases, die in Ihrem Unternehmen durch KI echten Mehrwert bieten. Wir analysieren Ihre Geschäftsbereiche und decken auf, wo KI Prozesse messbar beschleunigt, Fehlerquoten senkt oder Personal sinnvoll entlastet.',
          detail: 'Nicht jeder Prozess muss zwanghaft automatisiert werden – wir fokussieren auf echten Mehrwert.',
        },
        step2: {
          title: 'Daten- & Datenschutz-Klassifizierung',
          description: 'Evaluierung der identifizierten Use-Cases nach Datenschutz-Klassen. Mit einer eigens entwickelten Checkliste und einem detaillierten Fragenkatalog prüfen wir jeden Prozessschritt auf DSGVO-Konformität und die Anforderungen des EU-AI-Acts.',
          detail: 'Sicherheit ist das Fundament jeder KI-Integration.',
        },
        step3: {
          title: 'Tool- & Modellevaluierung',
          description: 'Marktstandard oder Maßanzug? Wir prüfen, ob DSGVO-konforme Lösungen in Ihrer eigenen Umgebung laufen müssen oder ob gehostete Services möglich sind – von ChatGPT und Claude bis zu On-Premise-Modellen wie Llama oder der europäischen Lösung Mistral.',
          detail: 'Gezieltes Testing findet die technologisch perfekte Passform für Ihren Anwendungsfall.',
        },
        step4: {
          title: 'Kostenevaluierung & Right-Sizing',
          description: 'Die laufenden Kosten von LLMs sind extrem unterschiedlich. Einfache Use-Cases können durch kleine, hocheffiziente Modelle realisiert werden, die bis zu 90 % weniger kosten als große Modelle – bei vergleichbarer Qualität für die jeweilige Spezialaufgabe.',
          detail: 'Wir berechnen diese Hebel für Sie und garantieren maximal effizienten Betrieb.',
        },
        step5: {
          title: 'Fundierte Empfehlung',
          description: 'Nach Abschluss der Evaluierung und Kostenkalkulation erhalten Sie eine glasklare, fundierte Handlungsempfehlung. Transparent, nachvollziehbar und auf Ihre spezifische Situation zugeschnitten.',
          detail: 'Kein Vendor-Lock-in, keine versteckten Präferenzen – nur die beste Lösung für Sie.',
        },
        step6: {
          title: 'Begleitete Implementierung',
          description: 'Wir lassen Sie mit der Strategie nicht allein. Die gewählte Lösung wird reibungslos in Ihre bestehende Systemlandschaft integriert – mit aktiver Begleitung, bis sie sofort echten Mehrwert liefert.',
          detail: 'Von der ersten Zeile bis zum produktiven Betrieb.',
        },
      },
      tags: ['✓ DSGVO- & EU-AI-Act-konform', '✓ Right-Sizing für Ihr Budget', '✓ Von der Analyse bis zur Implementierung'],
      cta: {
        heading: 'Bereit für den ersten ',
        headingHighlight: 'Use-Case?',
        text: 'Lassen Sie uns gemeinsam herausfinden, welcher Prozess in Ihrem Unternehmen den größten KI-Hebel bietet. Strukturiert, sicher und mit glasklarer Kostentransparenz.',
        button: 'Kostenloses Erstgespräch vereinbaren',
        tagline: 'Kostenlos · Unverbindlich · Persönlich',
      },
    },
    kiMarketingSalesPage: {
      pageTitle: 'KI in Marketing & Sales | CPCC – Christian Plath Consulting Company',
      metaDescription: 'KI-gestützter B2B-Vertrieb und Marketing: Echte Customer Insights, Echtzeit-Konkurrenzanalysen, automatisierte Lead-Generierung und skalierbare Content-Erstellung für mehr Pipeline und kürzere Sales-Cycles.',
      backToHome: 'Zurück zur Startseite',
      heroHeading: 'KI in Marketing & Sales',
      quote: '„Ihr Vertrieb und Marketing auf dem nächsten Level. Von der Lead-Generierung bis zum Abschluss –',
      quoteHighlight: ' KI-gestützt, zielgruppengenau und grenzenlos skalierbar."',
      intro: 'Die Zeiten, in denen ein einfacher KI-Prompt für einen Wettbewerbsvorteil reichte, sind vorbei. Heute brauchen Sie exklusive Methoden und Datenquellen, um den entscheidenden Informationsvorsprung zu sichern.',
      problemStatement: '„Wir brauchen mehr Pipeline, kürzere Sales-Cycles und bessere Conversion." – Sie haben ambitionierte OKRs, aber das operative Tagesgeschäft bremst Sie aus?',
      problemHighlight: 'Wir zeigen Ihnen, wie KI Ihren gesamten B2B-Vertriebsprozess messbar beschleunigt. Nicht als theoretische Spielerei, sondern als echter Motor für Ihre KPIs.',
      themes: {
        title: 'Vier Hebel für Ihren Vertriebserfolg',
        subtitle: 'Von der Marktanalyse bis zum Closing – KI greift an jedem entscheidenden Punkt ein.',
        theme1: {
          title: 'Deep Analytics & Strategie',
          bullets: [
            'Echte Customer Insights: Statt langweiliger Umfragen analysieren wir echte Marktdaten und zeigen Ihnen exakt, was Ihre Kunden lieben und was sie frustriert.',
            'Unfairer Informationsvorsprung: Konkurrenz- und Marktanalysen basierend auf Live-Echtzeitdaten – auf einem Level, das Ihr Wettbewerb mit Standard-KI-Abfragen niemals erreichen kann.',
            'Fundierte Planung: Entwicklung belastbarer, datengetriebener Marketing-Strategien statt Gießkannen-Prinzip.',
          ],
        },
        theme2: {
          title: 'Lead-Generierung & Conversion',
          bullets: [
            'Smarte Lead-Engine: KI-gestützte Lead-Generierung und Partner-Akquise, die exakt auf Deep Analytics aufbaut.',
            'Globale Skalierung: Zielgruppenspezifische Angebotserstellung auf Knopfdruck – maßgeschneidert und in über 50 Sprachen.',
            'Präzises Targeting: Datenbasierte Persona-Erstellung und tiefgreifende Zielgruppen-Segmentierung statt Bauchgefühl.',
          ],
        },
        theme3: {
          title: 'Content & Storytelling',
          bullets: [
            'Content auf Knopfdruck: Erstellung hochkonvertierender Werbetexte, Landing Pages und Newsletter in Minuten statt Tagen.',
            'Storytelling, das verkauft: Inhalte, die exakt auf die analysierten echten Pain Points Ihrer B2B-Entscheider zugeschnitten sind.',
          ],
        },
        theme4: {
          title: 'Team-Enablement & Sales-Excellence',
          bullets: [
            'Live-Unterstützung: Echtzeit-Schulungen und smarte Einwandsbehandlung für Ihre Reps direkt während laufender Vertriebsgespräche.',
            'Schneller produktiv: Radikal verkürztes Onboarding neuer Mitarbeiter durch KI-gestützte Wissensvermittlung.',
          ],
        },
      },
      resultStatement: 'Das Ergebnis: Mehr Pipeline, bessere Conversion, drastisch verkürzte Sales-Cycles – messbar an Ihren KPIs und mit einem',
      resultHighlight: 'Team, das sich endlich wieder aufs Verkaufen konzentrieren kann.',
      tags: ['✓ B2B-Fokus', '✓ Echte Insights statt Standard-KI', '✓ Skalierbar in 50+ Sprachen', '✓ Vom Content bis zum Closing'],
      cta: {
        heading: 'Bereit für mehr ',
        headingHighlight: 'Pipeline?',
        text: 'Lassen Sie uns in einem ersten Gespräch herausfinden, an welchem Punkt im Funnel KI den größten Hebel für Ihren Vertrieb bietet.',
        button: 'Kostenloses Erstgespräch vereinbaren',
        tagline: 'Kostenlos · Unverbindlich · Persönlich',
      },
    },
    kiSchulungenPage: {
      pageTitle: 'KI-Schulungen & Transformation | CPCC – Christian Plath Consulting Company',
      metaDescription: 'KI-Schulungen und Transformation: Wir verwandeln Angst vor KI in Kompetenz. Maßgeschneiderte Schulungen, Kulturwandel und Integration – damit Ihr Team KI souverän beherrscht.',
      backToHome: 'Zurück zur Startseite',
      heroHeading: 'KI-Schulungen & Transformation',
      quote: '„Schulungen, Kulturwandel und Integration –',
      quoteHighlight: ' maßgeschneidert auf Ihre Organisation."',
      intro: 'Wir bringen KI-Kompetenz in Ihr Unternehmen – nicht als abstraktes IT-Projekt, sondern als echten Kulturwandel, der jeden Mitarbeiter mitnimmt.',
      problemStatement: '„Unsere Mitarbeiter haben Angst vor KI – und wir wissen nicht, wo wir anfangen sollen." Das ist normal. KI verändert nicht nur Prozesse, sondern auch die Art, wie wir arbeiten.',
      problemHighlight: 'Die Frage ist nicht, ob KI kommt, sondern wie Sie Ihr Team darauf vorbereiten.',
      pillars: {
        title: 'Drei Säulen der KI-Transformation',
        subtitle: 'Von der ersten Begegnung mit KI bis zur tief verankerten, souveränen Nutzung im Arbeitsalltag.',
        pillar1: {
          title: 'Säule 1',
          heading: 'Kulturwandel & Mindset',
          items: [
            { bold: 'Angst in Neugier verwandeln', text: 'Wir holen Ihre Mitarbeiter und Führungskräfte dort ab, wo sie stehen. Wir bauen Vorbehalte gezielt ab und zeigen die immensen Chancen einer KI-freundlichen Unternehmenskultur auf.' },
            { bold: 'Der neue „Way of Working"', text: 'KI wird nicht als lästiges IT-Sonderprojekt verstanden, sondern tief in der DNA Ihres Unternehmens und im täglichen Handeln etabliert.' },
          ],
        },
        pillar2: {
          title: 'Säule 2',
          heading: 'Praxisnahe Schulungen',
          items: [
            { bold: 'Relevanz statt Theorie', text: 'Keine langweiligen Standard-Vorträge. Wir entwickeln unternehmens- und aufgabenbezogene Schulungen, die exakt auf die individuellen Herausforderungen Ihrer Abteilungen zugeschnitten sind.' },
            { bold: 'Hands-on Umsetzung', text: 'Wir zeigen ganz konkret an Ihren eigenen Prozessen: Wie genau können Ihre Mitarbeiter KI ab sofort produktiv und sicher nutzen?' },
          ],
        },
        pillar3: {
          title: 'Säule 3',
          heading: 'Integration & „Magie"',
          items: [
            { bold: 'Die richtige Dosis', text: 'Wir analysieren messerscharf: Wo ist KI lediglich eine sinnvolle Ergänzung? Wo wird sie zum integralen Bestandteil von dem, was bereits da ist?' },
            { bold: 'Der Wow-Effekt', text: 'Wir identifizieren gemeinsam die speziellen Hebel und Prozesse in Ihrem Unternehmen, bei denen der gezielte KI-Einsatz echte „Magie" erzeugt und den Arbeitsalltag radikal erleichtert.' },
          ],
        },
      },
      resultStatement: 'Das Ergebnis: Ein Team, das KI nicht fürchtet, sondern souverän beherrscht – und ein Unternehmen, das',
      resultHighlight: 'nie wieder durch veraltete Prozesse ausgebremst wird, sondern seine Ressourcen für echte Innovationen freispielt.',
      tags: ['✓ Maßgeschneiderte Schulungen', '✓ Kulturwandel begleiten', '✓ Von der Angst zur Kompetenz'],
      cta: {
        heading: 'Bereit, Ihr Team zu ',
        headingHighlight: 'befähigen?',
        text: 'Lassen Sie uns gemeinsam herausfinden, welche Schulungsform und welcher Transformationsansatz am besten zu Ihrer Organisation und Ihren Mitarbeitern passt.',
        button: 'Kostenloses Erstgespräch vereinbaren',
        tagline: 'Kostenlos · Unverbindlich · Persönlich',
      },
    },
    kiAusschreibungenPage: {
      pageTitle: 'KI in Ausschreibungen | CPCC – Christian Plath Consulting Company',
      metaDescription: 'KI in Ausschreibungen: Messerscharfe Analyse und wasserdichte Dokumentation für ausschreibende Organisationen und anbietende Unternehmen. DSGVO-konform, juristisch belastbar.',
      backToHome: 'Zurück zur Startseite',
      heroHeading: 'KI in Ausschreibungen',
      quote: '„Messerscharfe Analyse. Wasserdichte Dokumentation.',
      quoteHighlight: ' Für beide Seiten des Tisches."',
      intro: 'Ob Sie ausschreiben oder sich bewerben: Wir bringen KI in den gesamten Ausschreibungsprozess – präziser, schneller und juristisch belastbar.',
      problemStatement: '„Ausschreibungen sind ein Zeitfresser – und am Ende bleibt immer Unsicherheit." – Anforderungskataloge mit hunderten Kriterien, Lösungsdesigns, die interpretiert werden müssen, Bewertungen, die juristisch standhalten sollen.',
      problemHighlight: 'Wir bringen KI in diesen Prozess – auf beiden Seiten.',
      painPoints: {
        title: 'Pain Points, die wir lösen',
        items: [
          'Unklare oder zu generische Leistungsbeschreibungen',
          'Fehlende Vergleichbarkeit von Angeboten',
          'Zeitaufwendige Erstellung und Abstimmung von Dokumenten',
          'Schwierige Bewertung komplexer IT-/KI-/Cloud-Lösungen',
          'Risiko von „Buzzword-Angeboten" ohne echte Substanz',
          'Mangelnde Nachvollziehbarkeit von Entscheidungen',
        ],
      },
      sides: {
        title: 'Für jede Seite des Tisches',
        subtitle: 'Unsere Unterstützung ist auf beide Rollen im Ausschreibungsprozess zugeschnitten.',
        customer: {
          sideLabel: 'Für ausschreibende Organisationen',
          title: 'Als Kunde ausschreiben',
          items: [
            { heading: 'Leistungsbeschreibungen erstellen', description: 'Präzise, vollständige Anforderungskataloge – keine vergessenen Kriterien, keine Interpretationsspielräume.' },
            { heading: 'Bewertungskriterien entwickeln', description: 'Objektive, nachvollziehbare Bewertungsmatrizen, die einer juristischen Prüfung standhalten.' },
            { heading: 'Lösungsdesigns systematisch auswerten', description: 'Systematischer Abgleich der eingereichten Unterlagen gegen alle Anforderungen. Entscheidende Kleinigkeiten in Nebensätzen und Anhängen werden nicht mehr übersehen.' },
            { heading: 'Buzzwords entlarven', description: 'KI-gestützte Extraktion von Kerninhalten und direkter Vergleich von Anbieterlösungen. Identifikation von Risiken, Schwächen oder reiner Marketing-Sprache ohne Substanz.' },
            { heading: 'Vergabeentscheidungen absichern', description: 'Lückenlose Dokumentation jeder Bewertungsentscheidung – Audit-Trail inklusive.' },
          ],
        },
        provider: {
          sideLabel: 'Für anbietende Unternehmen',
          title: 'Als Provider bewerben',
          items: [
            { heading: 'Ausschreibungen analysieren', description: 'Schnelle Extraktion der Kern-Anforderungen. Was wird wirklich verlangt? Wo liegen die Fallstricke?' },
            { heading: 'Lückenlose Dokumente sicherstellen', description: 'Automatische Prüfung Ihrer Leistungsbeschreibungen und Lösungsdesigns auf Lücken, Widersprüche und Unklarheiten.' },
            { heading: 'Präzisierung & Harmonisierung', description: 'Konkrete Vorschläge zur Präzisierung und Harmonisierung von Begriffen und Strukturen konsistent über alle Dokumente hinweg.' },
            { heading: 'Effizienz auf Knopfdruck', description: 'Schnelle Erstellung von RFP-/RFI-Entwürfen auf Basis weniger Stichpunkte. Strukturierte Angebote, die alle Kriterien adressieren – nichts vergessen, nichts doppelt.' },
            { heading: 'Vertragsverhandlungen vorbereiten', description: 'Analyse von Vertragsentwürfen auf Risiken und kritische Klauseln. Vorbereitung messerscharfer Verhandlungsargumente auf Basis identifizierter Schwächen.' },
          ],
        },
      },
      resultStatement: 'Das Ergebnis: Deutlich reduzierte Durchlaufzeiten, höhere Qualität und Klarheit der Anforderungen, bessere Vergleichbarkeit von Anbietern sowie',
      resultHighlight: 'fundiertere, nachvollziehbare Entscheidungen mit drastisch reduziertem Risiko bei Vertragsabschluss – egal auf welcher Seite des Tisches Sie sitzen.',
      tags: ['✓ Für Kunden und Provider', '✓ DSGVO-konform', '✓ Juristisch belastbare Dokumentation'],
      cta: {
        heading: 'Nächste Ausschreibung mit ',
        headingHighlight: 'klarem Vorsprung?',
        text: 'Lassen Sie uns besprechen, wie KI Ihre nächste Ausschreibung – ob als Auftraggeber oder Bieter – schneller, präziser und rechtssicherer macht.',
        button: 'Kostenloses Erstgespräch vereinbaren',
        tagline: 'Kostenlos · Unverbindlich · Persönlich',
      },
    },
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
          title: 'AI Business Optimisation',
          description: 'Automation and efficiency enhancement through intelligent processes.'
        },
        marketingSales: {
          title: 'AI in Marketing & Sales',
          description: 'Revolutionize your sales strategies with AI power.'
        },
        schulungen: {
          title: 'AI Training & Transformation',
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
    },
    kiStarthilfePage: {
      pageTitle: 'AI Kickstart & Potential Analysis | CPCC – Christian Plath Consulting Company',
      metaDescription: 'CPCC AI Kickstart: Individual AI potential analysis for your business. We identify real pain points, assess your current AI landscape and deliver a clear, realistic AI roadmap – no empty promises.',
      backToHome: 'Back to homepage',
      heroHeading: 'AI Kickstart',
      quote: '"We know AI matters – but ',
      quoteHighlight: 'where do we start?',
      intro: 'Everyone is talking about AI, but what does it actually mean for your business? Before licensing expensive tools or launching unfocused projects, you need clarity.',
      highlightCard: 'Our potential analysis ',
      highlightCardHighlight: 'examines your business in depth',
      process: {
        title: 'How the analysis works',
        subtitle: 'Three clearly defined steps – from the initial stocktake to the finished roadmap.',
        step1: { title: 'Focus', description: 'Targeted identification of real pain points where AI and automation can make a decisive difference.', detail: 'We look closely – no buzzwords, no sugarcoating.' },
        step2: { title: 'The Assessment', description: 'A joint review of your current status quo – which tools are already in use and what AI knowledge exists within your team?', detail: 'Analysing your digital infrastructure and your team\'s capabilities.' },
        step3: { title: 'The Outcome', description: 'A clear roadmap showing the concrete impact AI can have on your services and how you can optimise your business model.', detail: 'Concrete, realistic, actionable – not just a theory paper.' },
      },
      coreQuestions: {
        title: 'Key areas of analysis',
        subtitle: 'Three core dimensions we explore together with you.',
        q1: { title: 'Needs Assessment', questions: ['Which pain points really exist in your business?', 'Which tools are already being used?', 'Where are unnecessary friction points today?'] },
        q2: { title: 'Strategy', questions: ['Where can AI support processes and people?', 'Where can AI genuinely replace tasks?', 'What is realistic – today and tomorrow?'] },
        q3: { title: 'Enablement', questions: ['What AI knowledge is available in your team?', 'How can your employees use AI productively?', 'Which training measures make sense?'] },
      },
      benefits: {
        title: 'What you get',
        items: ['Honest assessment', 'Realistic goals', 'Individual status quo analysis', 'A clear AI roadmap'],
        closingText: 'No off-the-shelf concept – but a ',
        closingHighlight: 'tailored analysis',
      },
      cta: {
        heading: 'Ready for your ',
        headingHighlight: 'AI roadmap?',
        text: 'In a no-obligation initial conversation, we\'ll explore together what an individual potential analysis could look like for your business.',
        button: 'Book a free initial consultation',
        tagline: 'Free · No obligation · Personal',
      },
    },
    projektmanagementPage: {
      pageTitle: 'Project Management 3.0 | CPCC – Christian Plath Consulting Company',
      metaDescription: 'Project Management 3.0 unites classical PM frameworks with Artificial Intelligence. Relieve your PMO, automate day-to-day project work and buy back your time.',
      backToHome: 'Back to homepage',
      heroHeading: 'Project Management 3.0',
      quote: '"Imagine your projects practically managing themselves thanks to AI."',
      intro: 'Classical PM frameworks combined with cutting-edge Artificial Intelligence – so your team finally has time for what truly matters.',
      problemStatement: 'Your PMO is chronically overloaded and your team spends half the day in unproductive meetings instead of actually driving the project forward.',
      problemHighlight: 'Project Management 3.0 solves exactly these pain points through intelligent automation of day-to-day project work – and buys back your time.',
      strips: {
        focus: { label: 'Focus', text: 'Freeing your team from administrative PMO tasks through intelligent automation of day-to-day project work.' },
        setup: { label: 'Setup', text: 'Integrating smart AI assistants into your existing meeting routines and project structures.' },
        result: { label: 'Result', text: 'Dramatic time savings and noticeably more efficient meetings – buy back your time with the help of AI.' },
      },
      benefits: {
        title: 'Your benefits at a glance',
        subtitle: 'Three concrete levers through which AI immediately relieves your project workload.',
        card1: { title: 'Smart Meeting Culture', description: 'Automatic agenda creation and structured workflows ensure you no longer spend the entire day stuck in calls.' },
        card2: { title: 'Seamless Delegation', description: 'Automatic task assignment directly from the conversation – no manual note-taking required.' },
        card3: { title: 'Complete Tracking', description: 'Automatic deadline tracking takes over the tedious follow-up and preserves valuable PMO resources.' },
      },
      tags: ['✓ Classical frameworks & AI combined', '✓ Relief for PMO resources', '✓ More time for daily business'],
      cta: {
        heading: 'Ready to relieve your ',
        headingHighlight: 'PMO?',
        text: 'Let us find out together where AI offers the greatest leverage in your project management. Free and non-binding.',
        button: 'Book a free initial consultation',
        tagline: 'Free · No obligation · Personal',
      },
    },
    kiGeschaeftsoptimierungPage: {
      pageTitle: 'AI Business Optimisation | CPCC – Christian Plath Consulting Company',
      metaDescription: 'AI process optimisation in 6 steps: From use-case identification through GDPR-compliant tool evaluation to seamless implementation. Structured, secure, cost-conscious.',
      backToHome: 'Back to homepage',
      heroHeading: 'AI Business Optimisation',
      quote: '"Not every process needs to be forced into automation – ',
      quoteHighlight: 'we find the ones where it genuinely pays off."',
      intro: 'From use-case identification through GDPR-compliant evaluation to guided implementation – structured, secure and cost-conscious.',
      highlightCard: 'AI projects don\'t fail because of the technology – they fail due to a lack of structure, data protection risks and poorly chosen models.',
      highlightCardHighlight: 'Our 6-step process brings order, security and cost-efficiency to your AI integration.',
      process: {
        title: 'The 6-step process',
        subtitle: 'From the first analysis through to live operation – no step is skipped.',
        step1: {
          title: 'Use-Case Generation',
          description: 'Targeted identification of the use cases that deliver real value in your organisation through AI. We analyse your business areas and uncover where AI measurably accelerates processes, reduces error rates or meaningfully relieves your staff.',
          detail: 'Not every process needs to be forced into automation – we focus on genuine value.',
        },
        step2: {
          title: 'Data & Privacy Classification',
          description: 'Evaluation of identified use cases against data protection classes. Using a purpose-built checklist and detailed questionnaire, we assess every process step for GDPR compliance and EU AI Act requirements.',
          detail: 'Security is the foundation of every AI integration.',
        },
        step3: {
          title: 'Tool & Model Evaluation',
          description: 'Off-the-shelf or bespoke? We assess whether GDPR-compliant solutions must run in your own environment or whether hosted services are possible – from ChatGPT and Claude to on-premise models such as Llama or the European solution Mistral.',
          detail: 'Targeted testing finds the technologically perfect fit for your use case.',
        },
        step4: {
          title: 'Cost Evaluation & Right-Sizing',
          description: 'The running costs of LLMs vary enormously. Simple use cases can be handled by small, highly efficient models that cost up to 90% less than large models – with comparable quality for the specific task.',
          detail: 'We calculate these levers for you and guarantee maximally efficient operation.',
        },
        step5: {
          title: 'Informed Recommendation',
          description: 'After completing the evaluation and cost calculation, you receive a crystal-clear, well-founded recommendation. Transparent, comprehensible and tailored to your specific situation.',
          detail: 'No vendor lock-in, no hidden preferences – only the best solution for you.',
        },
        step6: {
          title: 'Guided Implementation',
          description: 'We don\'t leave you alone with the strategy. The chosen solution is seamlessly integrated into your existing system landscape – with active support until it immediately delivers real value.',
          detail: 'From the first line of code to live operation.',
        },
      },
      tags: ['✓ GDPR & EU AI Act compliant', '✓ Right-sizing for your budget', '✓ From analysis to implementation'],
      cta: {
        heading: 'Ready for the first ',
        headingHighlight: 'use case?',
        text: 'Let us find out together which process in your organisation offers the greatest AI leverage. Structured, secure and with crystal-clear cost transparency.',
        button: 'Book a free initial consultation',
        tagline: 'Free · No obligation · Personal',
      },
    },
    kiMarketingSalesPage: {
      pageTitle: 'AI in Marketing & Sales | CPCC – Christian Plath Consulting Company',
      metaDescription: 'AI-powered B2B sales and marketing: Real customer insights, real-time competitive analysis, automated lead generation and scalable content creation for more pipeline and shorter sales cycles.',
      backToHome: 'Back to homepage',
      heroHeading: 'AI in Marketing & Sales',
      quote: '"Your sales and marketing at the next level. From lead generation to closing –',
      quoteHighlight: ' AI-powered, audience-precise and infinitely scalable."',
      intro: 'The days when a simple AI prompt was enough to gain a competitive advantage are over. Today you need exclusive methods and data sources to secure the decisive information edge.',
      problemStatement: '"We need more pipeline, shorter sales cycles and better conversion." – You have ambitious OKRs, but day-to-day operations are slowing you down?',
      problemHighlight: 'We show you how AI measurably accelerates your entire B2B sales process. Not as a theoretical exercise, but as a genuine driver for your KPIs.',
      themes: {
        title: 'Four levers for your sales success',
        subtitle: 'From market analysis to closing – AI intervenes at every decisive point.',
        theme1: {
          title: 'Deep Analytics & Strategy',
          bullets: [
            'Real Customer Insights: Instead of dull surveys, we analyse real market data and show you exactly what your customers love and what frustrates them.',
            'Unfair Information Advantage: Competitive and market analyses based on live real-time data – at a level your competitors can never reach with standard AI queries.',
            'Informed Planning: Development of robust, data-driven marketing strategies instead of a scatter-gun approach.',
          ],
        },
        theme2: {
          title: 'Lead Generation & Conversion',
          bullets: [
            'Smart Lead Engine: AI-powered lead generation and partner acquisition that builds directly on deep analytics.',
            'Global Scaling: Target-audience-specific proposal creation at the push of a button – tailored and in over 50 languages.',
            'Precise Targeting: Data-driven persona creation and in-depth audience segmentation instead of gut instinct.',
          ],
        },
        theme3: {
          title: 'Content & Storytelling',
          bullets: [
            'Content at the Push of a Button: Creation of high-converting ad copy, landing pages and newsletters in minutes rather than days.',
            'Storytelling that Sells: Content precisely tailored to the analysed real pain points of your B2B decision-makers.',
          ],
        },
        theme4: {
          title: 'Team Enablement & Sales Excellence',
          bullets: [
            'Live Support: Real-time coaching and smart objection handling for your reps directly during live sales conversations.',
            'Faster to Productivity: Radically shortened onboarding of new staff through AI-powered knowledge transfer.',
          ],
        },
      },
      resultStatement: 'The result: More pipeline, better conversion, drastically shortened sales cycles – measurable against your KPIs and with a',
      resultHighlight: 'team that can finally focus on selling again.',
      tags: ['✓ B2B focus', '✓ Real insights instead of standard AI', '✓ Scalable in 50+ languages', '✓ From content to closing'],
      cta: {
        heading: 'Ready for more ',
        headingHighlight: 'pipeline?',
        text: 'Let us find out in an initial conversation at which point in the funnel AI offers the greatest leverage for your sales team.',
        button: 'Book a free initial consultation',
        tagline: 'Free · No obligation · Personal',
      },
    },
    kiSchulungenPage: {
      pageTitle: 'AI Training & Transformation | CPCC – Christian Plath Consulting Company',
      metaDescription: 'AI training and transformation: We turn fear of AI into competence. Tailored training, cultural change and integration – so your team masters AI with confidence.',
      backToHome: 'Back to homepage',
      heroHeading: 'AI Training & Transformation',
      quote: '"Training, cultural change and integration –',
      quoteHighlight: ' tailored to your organisation."',
      intro: 'We bring AI competence into your company – not as an abstract IT project, but as a genuine cultural transformation that brings every employee along.',
      problemStatement: '"Our employees are afraid of AI – and we don\'t know where to start." That\'s normal. AI changes not only processes, but also the way we work.',
      problemHighlight: 'The question is not whether AI is coming, but how you prepare your team for it.',
      pillars: {
        title: 'Three pillars of AI transformation',
        subtitle: 'From the first encounter with AI to deeply embedded, confident use in daily work.',
        pillar1: {
          title: 'Pillar 1',
          heading: 'Cultural Change & Mindset',
          items: [
            { bold: 'Turning fear into curiosity', text: 'We meet your employees and managers where they are. We proactively break down reservations and highlight the enormous opportunities of an AI-friendly corporate culture.' },
            { bold: 'The new way of working', text: 'AI is not understood as a tiresome IT side project, but embedded deeply in the DNA of your organisation and in daily actions.' },
          ],
        },
        pillar2: {
          title: 'Pillar 2',
          heading: 'Practical Training',
          items: [
            { bold: 'Relevance over theory', text: 'No boring standard presentations. We develop company- and task-specific training sessions precisely tailored to the individual challenges of your departments.' },
            { bold: 'Hands-on implementation', text: 'We demonstrate concretely using your own processes: how exactly can your employees use AI productively and safely right away?' },
          ],
        },
        pillar3: {
          title: 'Pillar 3',
          heading: 'Integration & "Magic"',
          items: [
            { bold: 'The right dose', text: 'We analyse with precision: where is AI merely a useful addition? Where does it become an integral part of what already exists?' },
            { bold: 'The wow effect', text: 'Together we identify the specific levers and processes in your organisation where targeted AI deployment creates real "magic" and radically simplifies everyday working life.' },
          ],
        },
      },
      resultStatement: 'The result: A team that doesn\'t fear AI but masters it confidently – and an organisation that',
      resultHighlight: 'is never again held back by outdated processes, but frees up its resources for genuine innovation.',
      tags: ['✓ Tailored training programmes', '✓ Guiding cultural change', '✓ From fear to competence'],
      cta: {
        heading: 'Ready to empower your ',
        headingHighlight: 'team?',
        text: 'Let us find out together which training format and transformation approach best suits your organisation and your employees.',
        button: 'Book a free initial consultation',
        tagline: 'Free · No obligation · Personal',
      },
    },
    kiAusschreibungenPage: {
      pageTitle: 'AI in Tender Processes | CPCC – Christian Plath Consulting Company',
      metaDescription: 'AI in tenders: Sharp analysis and watertight documentation for procuring organisations and bidding companies. GDPR-compliant, legally sound.',
      backToHome: 'Back to homepage',
      heroHeading: 'AI in Tender Processes',
      quote: '"Sharp analysis. Watertight documentation.',
      quoteHighlight: ' For both sides of the table."',
      intro: 'Whether you are issuing or bidding on a tender: we bring AI into the entire tender process – more precise, faster and legally sound.',
      problemStatement: '"Tenders are a time sink – and uncertainty always remains at the end." – Requirements catalogues with hundreds of criteria, solution designs that need interpreting, evaluations that must withstand legal scrutiny.',
      problemHighlight: 'We bring AI into this process – on both sides.',
      painPoints: {
        title: 'Pain points we solve',
        items: [
          'Vague or overly generic service descriptions',
          'Lack of comparability between tenders',
          'Time-consuming creation and alignment of documents',
          'Difficult evaluation of complex IT/AI/cloud solutions',
          'Risk of "buzzword tenders" without real substance',
          'Insufficient traceability of decisions',
        ],
      },
      sides: {
        title: 'For every side of the table',
        subtitle: 'Our support is tailored to both roles in the tender process.',
        customer: {
          sideLabel: 'For procuring organisations',
          title: 'Issuing as a client',
          items: [
            { heading: 'Creating service descriptions', description: 'Precise, complete requirements catalogues – no forgotten criteria, no room for interpretation.' },
            { heading: 'Developing evaluation criteria', description: 'Objective, comprehensible scoring matrices that withstand legal scrutiny.' },
            { heading: 'Systematically evaluating solution designs', description: 'Systematic comparison of submitted documents against all requirements. Critical details buried in subclauses and appendices are no longer overlooked.' },
            { heading: 'Unmasking buzzwords', description: 'AI-powered extraction of key content and direct comparison of vendor solutions. Identification of risks, weaknesses or pure marketing language without substance.' },
            { heading: 'Securing award decisions', description: 'Complete documentation of every evaluation decision – including a full audit trail.' },
          ],
        },
        provider: {
          sideLabel: 'For bidding companies',
          title: 'Bidding as a provider',
          items: [
            { heading: 'Analysing tenders', description: 'Rapid extraction of core requirements. What is really being asked for? Where are the pitfalls?' },
            { heading: 'Ensuring complete documents', description: 'Automatic review of your service descriptions and solution designs for gaps, contradictions and ambiguities.' },
            { heading: 'Clarification & harmonisation', description: 'Concrete proposals to clarify and harmonise terms and structures consistently across all documents.' },
            { heading: 'Efficiency at the push of a button', description: 'Rapid creation of RFP/RFI drafts from just a few bullet points. Structured proposals that address all criteria – nothing forgotten, nothing duplicated.' },
            { heading: 'Preparing contract negotiations', description: 'Analysis of contract drafts for risks and critical clauses. Preparation of razor-sharp negotiation arguments based on identified weaknesses.' },
          ],
        },
      },
      resultStatement: 'The result: Significantly reduced turnaround times, higher quality and clarity of requirements, better comparability of vendors and',
      resultHighlight: 'better-informed, traceable decisions with drastically reduced risk at contract signing – regardless of which side of the table you sit on.',
      tags: ['✓ For clients and providers', '✓ GDPR-compliant', '✓ Legally sound documentation'],
      cta: {
        heading: 'Next tender with a ',
        headingHighlight: 'clear advantage?',
        text: 'Let us discuss how AI makes your next tender – whether as a client or bidder – faster, more precise and legally more secure.',
        button: 'Book a free initial consultation',
        tagline: 'Free · No obligation · Personal',
      },
    },
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
          title: 'AI-Bedrijfsoptimalisatie',
          description: 'Automatisering en efficiëntieverbetering door intelligente processen.'
        },
        marketingSales: {
          title: 'AI in Marketing & Sales',
          description: 'Revolutioneer uw verkoopstrategieën met AI-kracht.'
        },
        schulungen: {
          title: 'AI-Training & Transformatie',
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
    },
    kiStarthilfePage: {
      pageTitle: 'AI-Starthulp & Potentiaalanalyse | CPCC – Christian Plath Consulting Company',
      metaDescription: 'CPCC AI-Starthulp: Individuele potentiaalanalyse voor uw organisatie. Wij identificeren echte knelpunten, analyseren uw huidige AI-situatie en leveren een helder, realistisch AI-stappenplan – zonder loze beloften.',
      backToHome: 'Terug naar de startpagina',
      heroHeading: 'AI-Starthulp',
      quote: '"We weten dat AI belangrijk is – maar ',
      quoteHighlight: 'waar beginnen we?',
      intro: 'Iedereen heeft het over AI, maar wat levert het concreet op voor uw organisatie? Voordat dure tools worden gelicenseerd of ongestructureerde projecten worden opgestart, is helderheid nodig.',
      highlightCard: 'Onze potentiaalanalyse ',
      highlightCardHighlight: 'doorlicht uw bedrijfsdomein',
      process: {
        title: 'Hoe de analyse verloopt',
        subtitle: 'Drie duidelijk omschreven stappen – van de eerste inventarisatie tot het afgeronde stappenplan.',
        step1: { title: 'Focus', description: 'Gerichte identificatie van echte knelpunten waarbij AI en automatisering een doorslaggevende rol kunnen spelen.', detail: 'Wij kijken nauwkeurig – zonder buzzwords, zonder mooipraterij.' },
        step2: { title: 'De inventarisatie', description: 'Gezamenlijke inventarisatie van uw huidige situatie – welke tools zijn al in gebruik en welke AI-kennis is aanwezig in uw team?', detail: 'Analyse van uw digitale infrastructuur en de competenties van uw medewerkers.' },
        step3: { title: 'Het resultaat', description: 'Een helder stappenplan dat aantoont welke concrete impact AI heeft op uw dienstverlening en hoe u uw businessmodel kunt optimaliseren.', detail: 'Concreet, realistisch, uitvoerbaar – geen theoretisch rapport.' },
      },
      coreQuestions: {
        title: 'Kernvragen van de analyse',
        subtitle: 'Drie centrale dimensies die we samen met u in kaart brengen.',
        q1: { title: 'Behoefteanalyse', questions: ['Welke knelpunten bestaan er werkelijk in uw bedrijfsdomein?', 'Welke tools zijn al in gebruik?', 'Waar ontstaan vandaag onnodige efficiëntieverliezen?'] },
        q2: { title: 'Strategie', questions: ['Waar kan AI processen en medewerkers ondersteunen?', 'Waar kan AI taken daadwerkelijk vervangen?', 'Wat is realistisch – vandaag en morgen?'] },
        q3: { title: 'Bekwaming', questions: ['Welke AI-kennis is aanwezig in uw team?', 'Hoe kunnen medewerkers AI productief inzetten?', 'Welke trainingen zijn zinvol?'] },
      },
      benefits: {
        title: 'Wat u krijgt',
        items: ['Eerlijke beoordeling', 'Realistische doelen', 'Individuele statusanalyse', 'Helder AI-stappenplan'],
        closingText: 'Geen generiek concept van de plank – maar een ',
        closingHighlight: 'maatwerkanalyse',
      },
      cta: {
        heading: 'Klaar voor uw ',
        headingHighlight: 'AI-stappenplan?',
        text: 'In een vrijblijvend kennismakingsgesprek bespreken we samen hoe een individuele potentiaalanalyse voor uw organisatie eruit kan zien.',
        button: 'Gratis kennismakingsgesprek inplannen',
        tagline: 'Gratis · Vrijblijvend · Persoonlijk',
      },
    },
    projektmanagementPage: {
      pageTitle: 'Projectmanagement 3.0 | CPCC – Christian Plath Consulting Company',
      metaDescription: 'Projectmanagement 3.0 combineert klassieke PM-frameworks met kunstmatige intelligentie. Ontlast uw PMO, automatiseer de dagelijkse projectroutine en koop uw tijd terug.',
      backToHome: 'Terug naar homepage',
      heroHeading: 'Projectmanagement 3.0',
      quote: '"Stel u voor dat uw projecten zich dankzij AI bijna vanzelf managen."',
      intro: 'Klassieke PM-frameworks gecombineerd met geavanceerde kunstmatige intelligentie – zodat uw team eindelijk weer tijd heeft voor wat er echt toe doet.',
      problemStatement: 'Uw PMO is chronisch overbelast en uw team brengt de helft van de dag door in onproductieve vergaderingen in plaats van het project daadwerkelijk vooruit te helpen.',
      problemHighlight: 'Projectmanagement 3.0 lost precies deze knelpunten op door intelligente automatisering van de dagelijkse projectroutine – en koopt uw tijd terug.',
      strips: {
        focus: { label: 'Focus', text: 'Uw team bevrijden van administratieve PMO-taken door intelligente automatisering van de dagelijkse projectroutine.' },
        setup: { label: 'Setup', text: 'Integratie van slimme AI-assistenten in uw bestaande vergaderstructuren en projectprocessen.' },
        result: { label: 'Resultaat', text: 'Drastische tijdsbesparing en merkbaar efficiëntere vergaderingen – koop uw tijd terug met behulp van AI.' },
      },
      benefits: {
        title: 'Uw voordelen in één oogopslag',
        subtitle: 'Drie concrete hefbomen waarmee AI uw dagelijkse projectwerk direct ontlast.',
        card1: { title: 'Slimme vergadercultuur', description: 'Automatische agendasamenstelling en gestructureerde werkwijzen zorgen ervoor dat u niet meer de hele dag vastzit in calls.' },
        card2: { title: 'Naadloze delegatie', description: 'Automatische taakverdeling direct vanuit het gesprek – geen handmatig notuleren meer nodig.' },
        card3: { title: 'Volledige opvolging', description: 'Automatische deadlinetracking neemt de vervelende follow-up over en spaart waardevolle PMO-capaciteit.' },
      },
      tags: ['✓ Klassieke frameworks & AI gecombineerd', '✓ Ontlasting van PMO-capaciteit', '✓ Meer tijd voor dagelijkse werkzaamheden'],
      cta: {
        heading: 'Klaar om uw ',
        headingHighlight: 'PMO te ontlasten?',
        text: 'Laten we samen ontdekken waar AI in uw projectmanagement de grootste impact heeft. Gratis en vrijblijvend.',
        button: 'Gratis kennismakingsgesprek inplannen',
        tagline: 'Gratis · Vrijblijvend · Persoonlijk',
      },
    },
    kiGeschaeftsoptimierungPage: {
      pageTitle: 'AI-bedrijfsoptimalisatie | CPCC – Christian Plath Consulting Company',
      metaDescription: 'AI-procesoptimalisatie in 6 stappen: Van use-caseidentificatie via AVG-conforme toolevaluatie tot soepele implementatie. Gestructureerd, veilig, kostensbewust.',
      backToHome: 'Terug naar homepage',
      heroHeading: 'AI-bedrijfsoptimalisatie',
      quote: '"Niet elk proces hoeft geforceerd geautomatiseerd te worden – ',
      quoteHighlight: 'wij vinden de processen waar het echt loont."',
      intro: 'Van use-caseidentificatie via AVG-conforme evaluatie tot begeleide implementatie – gestructureerd, veilig en kostensbewust.',
      highlightCard: 'AI-projecten mislukken niet door de technologie – ze mislukken door gebrek aan structuur, privacyrisico\'s en verkeerd gekozen modellen.',
      highlightCardHighlight: 'Ons 6-stappenproces brengt orde, veiligheid en kostenefficiëntie in uw AI-integratie.',
      process: {
        title: 'Het 6-stappenproces',
        subtitle: 'Van de eerste analyse tot productieve ingebruikname – geen enkele stap wordt overgeslagen.',
        step1: {
          title: 'Use-casegeneratie',
          description: 'Gerichte identificatie van de use cases die in uw organisatie echte meerwaarde opleveren via AI. We analyseren uw bedrijfsonderdelen en ontdekken waar AI processen meetbaar versnelt, foutpercentages verlaagt of medewerkers zinvol ontlast.',
          detail: 'Niet elk proces hoeft geforceerd geautomatiseerd te worden – wij focussen op echte meerwaarde.',
        },
        step2: {
          title: 'Data- & privacyclassificatie',
          description: 'Evaluatie van de geïdentificeerde use cases naar privacyclassen. Met een eigen checklist en een gedetailleerde vragenlijst toetsen we elke processtap op AVG-conformiteit en de vereisten van de EU AI Act.',
          detail: 'Veiligheid is het fundament van elke AI-integratie.',
        },
        step3: {
          title: 'Tool- & modelevaluatie',
          description: 'Standaardoplossing of maatwerk? We onderzoeken of AVG-conforme oplossingen in uw eigen omgeving moeten draaien of dat gehoste diensten mogelijk zijn – van ChatGPT en Claude tot on-premise modellen zoals Llama of de Europese oplossing Mistral.',
          detail: 'Gericht testen vindt de technologisch perfecte match voor uw use case.',
        },
        step4: {
          title: 'Kostenevaluatie & right-sizing',
          description: 'De lopende kosten van LLM\'s lopen sterk uiteen. Eenvoudige use cases kunnen worden gerealiseerd met kleine, hoogefficiënte modellen die tot 90% minder kosten dan grote modellen – bij vergelijkbare kwaliteit voor de specifieke taak.',
          detail: 'Wij berekenen deze hefbomen voor u en garanderen maximaal efficiënte werking.',
        },
        step5: {
          title: 'Onderbouwde aanbeveling',
          description: 'Na afronding van de evaluatie en kostencalculatie ontvangt u een glashelder, onderbouwd advies. Transparant, navolgbaar en toegesneden op uw specifieke situatie.',
          detail: 'Geen vendor lock-in, geen verborgen voorkeuren – alleen de beste oplossing voor u.',
        },
        step6: {
          title: 'Begeleide implementatie',
          description: 'We laten u niet alleen achter met de strategie. De gekozen oplossing wordt naadloos geïntegreerd in uw bestaande systeemlandschap – met actieve begeleiding totdat het direct echte meerwaarde levert.',
          detail: 'Van de eerste regel code tot productieve ingebruikname.',
        },
      },
      tags: ['✓ AVG- & EU AI Act-conform', '✓ Right-sizing voor uw budget', '✓ Van analyse tot implementatie'],
      cta: {
        heading: 'Klaar voor de eerste ',
        headingHighlight: 'use case?',
        text: 'Laten we samen ontdekken welk proces in uw organisatie de grootste AI-hefboom biedt. Gestructureerd, veilig en met volledige kostentransparantie.',
        button: 'Gratis kennismakingsgesprek inplannen',
        tagline: 'Gratis · Vrijblijvend · Persoonlijk',
      },
    },
    kiMarketingSalesPage: {
      pageTitle: 'AI in Marketing & Sales | CPCC – Christian Plath Consulting Company',
      metaDescription: 'AI-ondersteunde B2B-verkoop en marketing: Echte klantinzichten, realtime concurrentieanalyses, geautomatiseerde leadgeneratie en schaalbare contentcreatie voor meer pipeline en kortere salescycli.',
      backToHome: 'Terug naar homepage',
      heroHeading: 'AI in Marketing & Sales',
      quote: '"Uw verkoop en marketing naar het volgende niveau. Van leadgeneratie tot afsluiting –',
      quoteHighlight: ' AI-ondersteund, doelgroepgericht en grenzeloos schaalbaar."',
      intro: 'De tijd dat een eenvoudige AI-prompt volstond voor een concurrentievoordeel is voorbij. Vandaag heeft u exclusieve methoden en databronnen nodig om de beslissende informatievoorsprong te verzekeren.',
      problemStatement: '"We hebben meer pipeline, kortere salescycli en betere conversie nodig." – U heeft ambitieuze OKR\'s, maar de dagelijkse operatie remt u af?',
      problemHighlight: 'Wij laten u zien hoe AI uw volledige B2B-verkoopproces meetbaar versnelt. Niet als theoretisch experiment, maar als echte motor voor uw KPI\'s.',
      themes: {
        title: 'Vier hefbomen voor uw verkoopsucces',
        subtitle: 'Van marktanalyse tot afsluiting – AI grijpt in op elk beslissend moment.',
        theme1: {
          title: 'Diepgaande analyses & strategie',
          bullets: [
            'Echte klantinzichten: In plaats van saaie enquêtes analyseren we echte marktdata en laten we u exact zien wat uw klanten waarderen en wat hen frustreert.',
            'Oneerlijk informatievoorsprong: Concurrentie- en marktanalyses op basis van live realtimedata – op een niveau dat uw concurrenten met standaard-AI-zoekopdrachten nooit kunnen bereiken.',
            'Onderbouwde planning: Ontwikkeling van robuuste, datagedreven marketingstrategieën in plaats van het gietertjesbeginsel.',
          ],
        },
        theme2: {
          title: 'Leadgeneratie & conversie',
          bullets: [
            'Slimme leadmotor: AI-ondersteunde leadgeneratie en partneracquisitie die exact voortbouwt op diepgaande analyses.',
            'Wereldwijde schaalbaarheid: Doelgroepspecifieke aanbodcreatie op verzoek – op maat gemaakt en in meer dan 50 talen.',
            'Precies targeting: Datagedreven personacreatie en diepgaande doelgroepsegmentatie in plaats van buikgevoel.',
          ],
        },
        theme3: {
          title: 'Content & storytelling',
          bullets: [
            'Content op verzoek: Creatie van hoogconverterende advertentieteksten, landingspagina\'s en nieuwsbrieven in minuten in plaats van dagen.',
            'Storytelling dat verkoopt: Inhoud die precies is afgestemd op de geanalyseerde echte knelpunten van uw B2B-beslissers.',
          ],
        },
        theme4: {
          title: 'Teamontwikkeling & verkoopexcellentie',
          bullets: [
            'Live ondersteuning: Realtime training en slimme bezwaarbehandeling voor uw verkopers direct tijdens lopende verkoopgesprekken.',
            'Sneller productief: Radicaal verkort onboarding van nieuwe medewerkers via AI-ondersteunde kennisoverdracht.',
          ],
        },
      },
      resultStatement: 'Het resultaat: Meer pipeline, betere conversie, drastisch verkorte salescycli – meetbaar aan uw KPI\'s en met een',
      resultHighlight: 'team dat zich eindelijk weer kan concentreren op verkopen.',
      tags: ['✓ B2B-focus', '✓ Echte inzichten in plaats van standaard-AI', '✓ Schaalbaar in 50+ talen', '✓ Van content tot afsluiting'],
      cta: {
        heading: 'Klaar voor meer ',
        headingHighlight: 'pipeline?',
        text: 'Laten we in een eerste gesprek ontdekken op welk punt in de funnel AI de grootste hefboom biedt voor uw verkoop.',
        button: 'Gratis kennismakingsgesprek inplannen',
        tagline: 'Gratis · Vrijblijvend · Persoonlijk',
      },
    },
    kiSchulungenPage: {
      pageTitle: 'AI-trainingen & transformatie | CPCC – Christian Plath Consulting Company',
      metaDescription: 'AI-trainingen en transformatie: Wij zetten angst voor AI om in competentie. Maatgerichte trainingen, cultuurverandering en integratie – zodat uw team AI zelfverzekerd beheerst.',
      backToHome: 'Terug naar homepage',
      heroHeading: 'AI-trainingen & transformatie',
      quote: '"Trainingen, cultuurverandering en integratie –',
      quoteHighlight: ' op maat van uw organisatie."',
      intro: 'Wij brengen AI-competentie in uw organisatie – niet als abstract IT-project, maar als echte cultuurverandering die elke medewerker meeneemt.',
      problemStatement: '"Onze medewerkers zijn bang voor AI – en we weten niet waar we moeten beginnen." Dat is normaal. AI verandert niet alleen processen, maar ook de manier waarop we werken.',
      problemHighlight: 'De vraag is niet óf AI komt, maar hoe u uw team erop voorbereidt.',
      pillars: {
        title: 'Drie pijlers van AI-transformatie',
        subtitle: 'Van de eerste kennismaking met AI tot diep verankerd, zelfverzekerd gebruik in de dagelijkse praktijk.',
        pillar1: {
          title: 'Pijler 1',
          heading: 'Cultuurverandering & mindset',
          items: [
            { bold: 'Angst omzetten in nieuwsgierigheid', text: 'We halen uw medewerkers en leidinggevenden op waar ze staan. We bouwen voorbehouden gericht af en laten de immense kansen van een AI-vriendelijke bedrijfscultuur zien.' },
            { bold: 'De nieuwe manier van werken', text: 'AI wordt niet begrepen als een vervelend IT-nevenproject, maar diep verankerd in de DNA van uw organisatie en in het dagelijks handelen.' },
          ],
        },
        pillar2: {
          title: 'Pijler 2',
          heading: 'Praktijkgerichte trainingen',
          items: [
            { bold: 'Relevantie boven theorie', text: 'Geen saaie standaardpresentaties. We ontwikkelen organisatie- en taakgerichte trainingen die precies zijn afgestemd op de individuele uitdagingen van uw afdelingen.' },
            { bold: 'Hands-on uitvoering', text: 'We laten heel concreet aan de hand van uw eigen processen zien: hoe kunnen uw medewerkers AI direct productief en veilig inzetten?' },
          ],
        },
        pillar3: {
          title: 'Pijler 3',
          heading: 'Integratie & "magie"',
          items: [
            { bold: 'De juiste dosis', text: 'We analyseren scherp: waar is AI slechts een zinvolle aanvulling? Waar wordt het een integraal onderdeel van wat er al is?' },
            { bold: 'Het wow-effect', text: 'We identificeren samen de specifieke hefbomen en processen in uw organisatie waar gericht AI-gebruik echte "magie" creëert en de dagelijkse werkpraktijk radicaal verlicht.' },
          ],
        },
      },
      resultStatement: 'Het resultaat: Een team dat AI niet vreest, maar zelfverzekerd beheerst – en een organisatie die',
      resultHighlight: 'nooit meer wordt afgeremd door verouderde processen, maar zijn middelen vrijmaakt voor echte innovaties.',
      tags: ['✓ Maatgerichte trainingen', '✓ Cultuurverandering begeleiden', '✓ Van angst naar competentie'],
      cta: {
        heading: 'Klaar om uw team te ',
        headingHighlight: 'bekwamen?',
        text: 'Laten we samen ontdekken welke trainingsvorm en welke transformatieaanpak het beste past bij uw organisatie en uw medewerkers.',
        button: 'Gratis kennismakingsgesprek inplannen',
        tagline: 'Gratis · Vrijblijvend · Persoonlijk',
      },
    },
    kiAusschreibungenPage: {
      pageTitle: 'AI in aanbestedingen | CPCC – Christian Plath Consulting Company',
      metaDescription: 'AI in aanbestedingen: Scherpe analyse en waterdichte documentatie voor aanbestedende organisaties en inschrijvende bedrijven. AVG-conform, juridisch solide.',
      backToHome: 'Terug naar homepage',
      heroHeading: 'AI in aanbestedingen',
      quote: '"Scherpe analyse. Waterdichte documentatie.',
      quoteHighlight: ' Voor beide kanten van de tafel."',
      intro: 'Of u nu aanbesteedt of inschrijft: wij brengen AI in het volledige aanbestedingsproces – preciezer, sneller en juridisch solide.',
      problemStatement: '"Aanbestedingen zijn een tijdvreter – en er blijft altijd onzekerheid." – Eisenlijsten met honderden criteria, oplossingsontwerpen die geïnterpreteerd moeten worden, beoordelingen die juridisch stand moeten houden.',
      problemHighlight: 'Wij brengen AI in dit proces – aan beide kanten.',
      painPoints: {
        title: 'Knelpunten die wij oplossen',
        items: [
          'Onduidelijke of te generieke servicebeschrijvingen',
          'Gebrek aan vergelijkbaarheid van offertes',
          'Tijdrovende opstelling en afstemming van documenten',
          'Moeilijke beoordeling van complexe IT-/AI-/cloudoplossingen',
          'Risico op "buzzwordoffertes" zonder echte inhoud',
          'Onvoldoende navolgbaarheid van beslissingen',
        ],
      },
      sides: {
        title: 'Voor elke kant van de tafel',
        subtitle: 'Onze ondersteuning is afgestemd op beide rollen in het aanbestedingsproces.',
        customer: {
          sideLabel: 'Voor aanbestedende organisaties',
          title: 'Aanbesteden als opdrachtgever',
          items: [
            { heading: 'Servicebeschrijvingen opstellen', description: 'Precieze, volledige eisenlijsten – geen vergeten criteria, geen interpretatieruimte.' },
            { heading: 'Beoordelingscriteria ontwikkelen', description: 'Objectieve, navolgbare beoordelingsmatrices die een juridische toets doorstaan.' },
            { heading: 'Oplossingsontwerpen systematisch evalueren', description: 'Systematische vergelijking van ingediende stukken met alle eisen. Cruciale details in bijzinnen en bijlagen worden niet meer over het hoofd gezien.' },
            { heading: 'Buzzwords ontmaskeren', description: 'AI-ondersteunde extractie van kerninhoud en directe vergelijking van leveranciersoplossingen. Identificatie van risico\'s, zwaktes of pure marketingtaal zonder inhoud.' },
            { heading: 'Gunningsbeslissingen borgen', description: 'Volledige documentatie van elke beoordelingsbeslissing – inclusief audittrail.' },
          ],
        },
        provider: {
          sideLabel: 'Voor inschrijvende bedrijven',
          title: 'Inschrijven als aanbieder',
          items: [
            { heading: 'Aanbestedingen analyseren', description: 'Snelle extractie van de kernvereisten. Wat wordt er echt gevraagd? Waar liggen de valkuilen?' },
            { heading: 'Volledige documenten waarborgen', description: 'Automatische controle van uw servicebeschrijvingen en oplossingsontwerpen op lacunes, tegenstrijdigheden en onduidelijkheden.' },
            { heading: 'Verduidelijking & harmonisatie', description: 'Concrete voorstellen voor verduidelijking en harmonisatie van begrippen en structuren consistent door alle documenten heen.' },
            { heading: 'Efficiëntie op verzoek', description: 'Snelle opstelling van RFP-/RFI-concepten op basis van enkele steekwoorden. Gestructureerde offertes die alle criteria adresseren – niets vergeten, niets dubbel.' },
            { heading: 'Contractonderhandelingen voorbereiden', description: 'Analyse van contractontwerpen op risico\'s en kritische clausules. Voorbereiding van scherpe onderhandelingsargumenten op basis van geïdentificeerde zwaktes.' },
          ],
        },
      },
      resultStatement: 'Het resultaat: Aanzienlijk kortere doorlooptijden, hogere kwaliteit en helderheid van eisen, betere vergelijkbaarheid van aanbieders en',
      resultHighlight: 'beter onderbouwde, navolgbare beslissingen met drastisch verminderd risico bij contractsluiting – ongeacht welke kant van de tafel u zit.',
      tags: ['✓ Voor opdrachtgevers en aanbieders', '✓ AVG-conform', '✓ Juridisch solide documentatie'],
      cta: {
        heading: 'Volgende aanbesteding met een ',
        headingHighlight: 'duidelijke voorsprong?',
        text: 'Laten we bespreken hoe AI uw volgende aanbesteding – als opdrachtgever of inschrijver – sneller, preciezer en juridisch zekerder maakt.',
        button: 'Gratis kennismakingsgesprek inplannen',
        tagline: 'Gratis · Vrijblijvend · Persoonlijk',
      },
    },
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
          title: 'تحسين الأعمال بالذكاء الاصطناعي',
          description: 'الأتمتة وتعزيز الكفاءة من خلال العمليات الذكية.'
        },
        marketingSales: {
          title: 'الذكاء الاصطناعي في التسويق والمبيعات',
          description: 'أحدث ثورة في استراتيجيات مبيعاتك بقوة الذكاء الاصطناعي.'
        },
        schulungen: {
          title: 'تدريب الذكاء الاصطناعي والتحول',
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
    },
    kiStarthilfePage: {
      pageTitle: 'بداية ذكية مع الذكاء الاصطناعي | CPCC',
      metaDescription: 'CPCC: تحليل إمكانات الذكاء الاصطناعي لمؤسستك. نحدد نقاط الألم الحقيقية، ونحلل وضعكم الحالي، ونقدم خارطة طريق واقعية وواضحة – بدلاً من الوعود الفارغة.',
      backToHome: 'العودة إلى الصفحة الرئيسية',
      heroHeading: 'الانطلاقة الذكية',
      quote: '«نعلم أن الذكاء الاصطناعي مهم – لكن ',
      quoteHighlight: 'من أين نبدأ؟',
      intro: 'يتحدث الجميع عن الذكاء الاصطناعي، لكن ما الفائدة الفعلية لمؤسستكم؟ قبل الاستثمار في أدوات مكلفة أو إطلاق مشاريع غير مدروسة، تحتاجون إلى وضوح حقيقي.',
      highlightCard: 'يتناول تحليل الإمكانات لدينا ',
      highlightCardHighlight: 'واقع عملكم بعمق',
      process: {
        title: 'كيف يسير التحليل',
        subtitle: 'ثلاث خطوات محددة بوضوح – من الجرد الأولي إلى خارطة الطريق الجاهزة.',
        step1: { title: 'التركيز', description: 'تحديد دقيق لنقاط الألم الحقيقية حيث يمكن للذكاء الاصطناعي والأتمتة أن يُحدثا فرقاً حاسماً.', detail: 'ننظر بعمق – دون مصطلحات رنانة، دون تجميل للواقع.' },
        step2: { title: 'التقييم', description: 'جرد مشترك لوضعكم الحالي – أي الأدوات قيد الاستخدام وما مستوى الخبرة بالذكاء الاصطناعي لدى فريقكم؟', detail: 'تحليل بنيتكم الرقمية وكفاءات موظفيكم.' },
        step3: { title: 'النتيجة', description: 'خارطة طريق واضحة توضح التأثير الفعلي للذكاء الاصطناعي على خدماتكم وكيفية تحسين نموذج أعمالكم.', detail: 'ملموس، واقعي، قابل للتنفيذ – لا مجرد ورقة نظرية.' },
      },
      coreQuestions: {
        title: 'محاور التحليل الأساسية',
        subtitle: 'ثلاثة أبعاد جوهرية نستكشفها معكم.',
        q1: { title: 'تحديد الاحتياجات', questions: ['ما نقاط الألم الحقيقية في مجال عملكم؟', 'أي الأدوات قيد الاستخدام حالياً؟', 'أين تنشأ الاختناقات غير الضرورية اليوم؟'] },
        q2: { title: 'الاستراتيجية', questions: ['أين يمكن للذكاء الاصطناعي دعم العمليات والكوادر؟', 'أين يمكنه الاستعاضة عن المهام فعلياً؟', 'ما الواقعي – اليوم وغداً؟'] },
        q3: { title: 'التمكين', questions: ['ما مستوى معرفة فريقكم بالذكاء الاصطناعي؟', 'كيف يمكن لموظفيكم استخدامه بإنتاجية؟', 'أي برامج تدريب تستحق الاستثمار؟'] },
      },
      benefits: {
        title: 'ما ستحصلون عليه',
        items: ['تقييم صادق', 'أهداف واقعية', 'تحليل مخصص للوضع الراهن', 'خارطة طريق واضحة للذكاء الاصطناعي'],
        closingText: 'لا قوالب جاهزة – بل ',
        closingHighlight: 'تحليل مصمم خصيصاً',
      },
      cta: {
        heading: 'مستعدون لـ',
        headingHighlight: 'خارطة طريق الذكاء الاصطناعي؟',
        text: 'في محادثة أولية غير ملزمة، نستكشف معاً كيف يمكن أن يبدو تحليل الإمكانات المخصص لمؤسستكم.',
        button: 'احجز استشارتك الأولى المجانية',
        tagline: 'مجاني · غير ملزم · شخصي',
      },
    },
    projektmanagementPage: {
      pageTitle: 'إدارة المشاريع 3.0 | CPCC – Christian Plath Consulting Company',
      metaDescription: 'إدارة المشاريع 3.0 تجمع بين أطر إدارة المشاريع الكلاسيكية والذكاء الاصطناعي. خففوا العبء عن مكتب إدارة المشاريع، وأتمتوا المهام اليومية، واستردوا وقتكم.',
      backToHome: 'العودة إلى الصفحة الرئيسية',
      heroHeading: 'إدارة المشاريع 3.0',
      quote: '„تخيّلوا أن مشاريعكم تُدير نفسها تقريباً بفضل الذكاء الاصطناعي."',
      intro: 'أطر إدارة المشاريع الكلاسيكية مدمجة مع أحدث تقنيات الذكاء الاصطناعي – لمنح فريقكم الوقت الذي يحتاجه للتركيز على ما يهم حقاً.',
      problemStatement: 'مكتب إدارة المشاريع لديكم يعاني من إرهاق مزمن، وفريقكم يقضي نصف يومه في اجتماعات غير منتجة بدلاً من دفع المشروع نحو الأمام.',
      problemHighlight: 'إدارة المشاريع 3.0 تحل هذه المشكلات تحديداً من خلال الأتمتة الذكية للمهام اليومية – وتستعيد وقتكم.',
      strips: {
        focus: { label: 'التركيز', text: 'تحرير فريقكم من المهام الإدارية لمكتب إدارة المشاريع من خلال الأتمتة الذكية للمهام اليومية.' },
        setup: { label: 'الإعداد', text: 'دمج مساعدين ذكيين بالذكاء الاصطناعي في روتين اجتماعاتكم الحالية وهياكل مشاريعكم.' },
        result: { label: 'النتيجة', text: 'توفير جذري للوقت واجتماعات أكثر كفاءة ملموسة – استردوا وقتكم بمساعدة الذكاء الاصطناعي.' },
      },
      benefits: {
        title: 'مزاياكم في لمحة',
        subtitle: 'ثلاثة محركات ملموسة يخفف بها الذكاء الاصطناعي أعباء مشاريعكم اليومية فوراً.',
        card1: { title: 'ثقافة اجتماعات ذكية', description: 'إعداد جداول الأعمال تلقائياً وتسلسل عمل منظم يضمن عدم قضاء يومكم كله في المكالمات.' },
        card2: { title: 'تفويض سلس', description: 'توزيع المهام تلقائياً مباشرة من المحادثة دون الحاجة إلى تدوين يدوي.' },
        card3: { title: 'متابعة شاملة', description: 'تتبع المواعيد النهائية تلقائياً يتولى المتابعة المرهقة ويحافظ على موارد مكتب إدارة المشاريع الثمينة.' },
      },
      tags: ['✓ أطر كلاسيكية والذكاء الاصطناعي معاً', '✓ تخفيف العبء عن مكتب إدارة المشاريع', '✓ مزيد من الوقت للأعمال اليومية'],
      cta: {
        heading: 'مستعدون لتخفيف العبء عن ',
        headingHighlight: 'مكتب إدارة مشاريعكم؟',
        text: 'دعونا نكتشف معاً أين يقدم الذكاء الاصطناعي أكبر أثر في إدارة مشاريعكم. مجاناً وبدون التزام.',
        button: 'احجز استشارتك الأولى المجانية',
        tagline: 'مجاني · غير ملزم · شخصي',
      },
    },
    kiGeschaeftsoptimierungPage: {
      pageTitle: 'تحسين الأعمال بالذكاء الاصطناعي | CPCC – Christian Plath Consulting Company',
      metaDescription: 'تحسين العمليات بالذكاء الاصطناعي في 6 خطوات: من تحديد حالات الاستخدام عبر تقييم الأدوات المتوافق مع DSGVO وصولاً إلى التنفيذ السلس. منظم، آمن، واعٍ للتكاليف.',
      backToHome: 'العودة إلى الصفحة الرئيسية',
      heroHeading: 'تحسين الأعمال بالذكاء الاصطناعي',
      quote: '„ليس كل عملية بحاجة إلى أتمتة إجبارية – ',
      quoteHighlight: 'نحن نجد تلك التي تستحق ذلك حقاً."',
      intro: 'من تحديد حالات الاستخدام عبر التقييم المتوافق مع DSGVO وصولاً إلى التنفيذ المرافق – منظم، آمن وواعٍ للتكاليف.',
      highlightCard: 'مشاريع الذكاء الاصطناعي لا تفشل بسبب التكنولوجيا – تفشل بسبب غياب الهيكل، ومخاطر حماية البيانات، والنماذج الخاطئة.',
      highlightCardHighlight: 'عمليتنا المكونة من 6 خطوات تجلب النظام والأمان وكفاءة التكلفة إلى تكامل الذكاء الاصطناعي لديكم.',
      process: {
        title: 'العملية المكونة من 6 خطوات',
        subtitle: 'من التحليل الأول حتى التشغيل الفعلي – لا تُتجاوز أي خطوة.',
        step1: {
          title: 'توليد حالات الاستخدام',
          description: 'تحديد دقيق لحالات الاستخدام التي تحقق قيمة حقيقية في مؤسستكم من خلال الذكاء الاصطناعي. نحلل مجالات أعمالكم ونكشف أين يُسرّع الذكاء الاصطناعي العمليات بشكل قابل للقياس ويخفض معدلات الأخطاء أو يُخفف العبء بشكل ذي معنى.',
          detail: 'ليست كل عملية بحاجة إلى أتمتة إجبارية – نحن نركز على القيمة الحقيقية.',
        },
        step2: {
          title: 'تصنيف البيانات والخصوصية',
          description: 'تقييم حالات الاستخدام المحددة وفق فئات حماية البيانات. باستخدام قائمة مراجعة معدة خصيصاً وكتالوج استفسارات مفصل، نفحص كل خطوة عملية للتوافق مع DSGVO ومتطلبات EU-AI-Act.',
          detail: 'الأمان هو أساس أي تكامل للذكاء الاصطناعي.',
        },
        step3: {
          title: 'تقييم الأدوات والنماذج',
          description: 'معيار السوق أم حل مخصص؟ نفحص ما إذا كانت الحلول المتوافقة مع DSGVO يجب تشغيلها في بيئتكم الخاصة أم يمكن استخدام الخدمات المستضافة – من ChatGPT وClaude إلى النماذج المحلية كـ Llama أو الحل الأوروبي Mistral.',
          detail: 'الاختبار الموجه يجد التناسب التقني المثالي لحالة استخدامكم.',
        },
        step4: {
          title: 'تقييم التكاليف والتحجيم الصحيح',
          description: 'تتفاوت التكاليف الجارية للـ LLMs تفاوتاً كبيراً. حالات الاستخدام البسيطة يمكن تحقيقها بنماذج صغيرة عالية الكفاءة تكلف ما يصل إلى 90% أقل من النماذج الكبيرة – بجودة مماثلة للمهمة المتخصصة.',
          detail: 'نحسب هذه المحركات لكم ونضمن تشغيلاً بأقصى كفاءة.',
        },
        step5: {
          title: 'توصية مدروسة',
          description: 'بعد إتمام التقييم وحساب التكاليف، تحصلون على توصية واضحة ومدروسة. شفافة، مفهومة، ومصممة لوضعكم المحدد.',
          detail: 'لا ارتباط بمورد واحد، لا تفضيلات خفية – فقط الحل الأفضل لكم.',
        },
        step6: {
          title: 'تنفيذ مرافق',
          description: 'لا نتركوكم وحدكم مع الاستراتيجية. يُدمج الحل المختار بسلاسة في مشهد أنظمتكم الحالية – مع دعم فعال حتى يقدم قيمة حقيقية فوراً.',
          detail: 'من السطر الأول حتى التشغيل الإنتاجي.',
        },
      },
      tags: ['✓ متوافق مع DSGVO وEU-AI-Act', '✓ تحجيم صحيح لميزانيتكم', '✓ من التحليل إلى التنفيذ'],
      cta: {
        heading: 'مستعدون لأول ',
        headingHighlight: 'حالة استخدام؟',
        text: 'دعونا نكتشف معاً أي عملية في مؤسستكم تحمل أكبر إمكانية للذكاء الاصطناعي. منظم، آمن، وبشفافية تامة في التكاليف.',
        button: 'احجز استشارتك الأولى المجانية',
        tagline: 'مجاني · غير ملزم · شخصي',
      },
    },
    kiMarketingSalesPage: {
      pageTitle: 'الذكاء الاصطناعي في التسويق والمبيعات | CPCC – Christian Plath Consulting Company',
      metaDescription: 'مبيعات وتسويق B2B مدعوم بالذكاء الاصطناعي: رؤى عملاء حقيقية، تحليل تنافسي في الوقت الفعلي، توليد عملاء محتملين آلي ومحتوى قابل للتوسع لمزيد من الفرص ودورات مبيعات أقصر.',
      backToHome: 'العودة إلى الصفحة الرئيسية',
      heroHeading: 'الذكاء الاصطناعي في التسويق والمبيعات',
      quote: '„مبيعاتكم وتسويقكم على المستوى التالي. من توليد العملاء المحتملين حتى الإغلاق –',
      quoteHighlight: ' مدعوم بالذكاء الاصطناعي، دقيق للجمهور المستهدف وقابل للتوسع بلا حدود."',
      intro: 'انتهت الأيام التي كان فيها موجه ذكاء اصطناعي بسيط كافياً لتحقيق ميزة تنافسية. اليوم تحتاجون إلى أساليب وبيانات حصرية لتأمين التفوق المعلوماتي الحاسم.',
      problemStatement: '„نحتاج إلى مزيد من الفرص، ودورات مبيعات أقصر، وتحويل أفضل." – لديكم OKRs طموحة، لكن العمليات اليومية تعيقكم؟',
      problemHighlight: 'نريكم كيف يُسرّع الذكاء الاصطناعي عملية B2B بأكملها بشكل قابل للقياس. ليس كتمرين نظري، بل كمحرك حقيقي لـ KPIs الخاصة بكم.',
      themes: {
        title: 'أربعة محركات لنجاح مبيعاتكم',
        subtitle: 'من تحليل السوق حتى الإغلاق – يتدخل الذكاء الاصطناعي في كل نقطة حاسمة.',
        theme1: {
          title: 'التحليلات العميقة والاستراتيجية',
          bullets: [
            'رؤى عملاء حقيقية: بدلاً من الاستطلاعات المملة نحلل بيانات السوق الفعلية ونريكم بالضبط ما يحبه عملاؤكم وما يُحبطهم.',
            'تفوق معلوماتي غير عادل: تحليلات تنافسية وسوقية مبنية على بيانات فعلية في الوقت الفعلي – على مستوى لا يمكن لمنافسيكم تحقيقه بالاستعلامات القياسية.',
            'تخطيط مدروس: تطوير استراتيجيات تسويقية قوية مبنية على البيانات بدلاً من الأساليب العشوائية.',
          ],
        },
        theme2: {
          title: 'توليد العملاء المحتملين والتحويل',
          bullets: [
            'محرك عملاء ذكي: توليد عملاء محتملين واستقطاب شركاء مدعوم بالذكاء الاصطناعي مبني تماماً على التحليلات العميقة.',
            'توسع عالمي: إنشاء عروض مخصصة للجمهور المستهدف بضغطة زر – مصممة خصيصاً وبأكثر من 50 لغة.',
            'استهداف دقيق: إنشاء شخصيات مبنية على البيانات وتقسيم متعمق للجمهور بدلاً من الحدس.',
          ],
        },
        theme3: {
          title: 'المحتوى والسرد القصصي',
          bullets: [
            'محتوى بضغطة زر: إنشاء نصوص إعلانية عالية التحويل وصفحات هبوط ونشرات بريدية في دقائق بدلاً من أيام.',
            'سرد قصصي يُقنع بالشراء: محتوى مصمم بدقة بناءً على نقاط الألم الحقيقية المحللة لمتخذي قرارات B2B لديكم.',
          ],
        },
        theme4: {
          title: 'تطوير الفريق وتميز المبيعات',
          bullets: [
            'دعم مباشر: تدريب في الوقت الفعلي ومعالجة اعتراضات ذكية لممثلي المبيعات مباشرة أثناء المحادثات الجارية.',
            'إنتاجية أسرع: تأهيل موظفين جدد بشكل مختصر جذرياً عبر نقل المعرفة المدعوم بالذكاء الاصطناعي.',
          ],
        },
      },
      resultStatement: 'النتيجة: مزيد من الفرص، تحويل أفضل، دورات مبيعات أقصر جذرياً – قابلة للقياس على KPIs الخاصة بكم ومع',
      resultHighlight: 'فريق يمكنه أخيراً التركيز على البيع مجدداً.',
      tags: ['✓ تركيز على B2B', '✓ رؤى حقيقية بدلاً من AI قياسي', '✓ قابل للتوسع بأكثر من 50 لغة', '✓ من المحتوى حتى الإغلاق'],
      cta: {
        heading: 'مستعدون لمزيد من ',
        headingHighlight: 'الفرص؟',
        text: 'دعونا نكتشف في محادثة أولى في أي نقطة من مسار المبيعات يقدم الذكاء الاصطناعي أكبر أثر لفريق مبيعاتكم.',
        button: 'احجز استشارتك الأولى المجانية',
        tagline: 'مجاني · غير ملزم · شخصي',
      },
    },
    kiSchulungenPage: {
      pageTitle: 'تدريبات الذكاء الاصطناعي والتحول | CPCC – Christian Plath Consulting Company',
      metaDescription: 'تدريبات الذكاء الاصطناعي والتحول: نحوّل الخوف من الذكاء الاصطناعي إلى كفاءة. تدريبات مخصصة، تغيير ثقافي وتكامل – حتى يتقن فريقكم الذكاء الاصطناعي بثقة.',
      backToHome: 'العودة إلى الصفحة الرئيسية',
      heroHeading: 'تدريبات الذكاء الاصطناعي والتحول',
      quote: '„التدريبات، التغيير الثقافي والتكامل –',
      quoteHighlight: ' مصممة خصيصاً لمؤسستكم."',
      intro: 'نجلب كفاءة الذكاء الاصطناعي إلى مؤسستكم – ليس كمشروع تقنية معلومات مجرد، بل كتحول ثقافي حقيقي يصحب كل موظف.',
      problemStatement: '„موظفونا يخافون من الذكاء الاصطناعي – ولا نعرف من أين نبدأ." هذا أمر طبيعي. الذكاء الاصطناعي لا يغير العمليات فحسب، بل يغير أسلوب عملنا أيضاً.',
      problemHighlight: 'السؤال ليس ما إذا كان الذكاء الاصطناعي قادماً، بل كيف تُعدّون فريقكم له.',
      pillars: {
        title: 'ثلاثة ركائز للتحول نحو الذكاء الاصطناعي',
        subtitle: 'من أول لقاء مع الذكاء الاصطناعي وصولاً إلى الاستخدام الواثق الراسخ في الحياة المهنية اليومية.',
        pillar1: {
          title: 'الركيزة الأولى',
          heading: 'التغيير الثقافي وعقلية العمل',
          items: [
            { bold: 'تحويل الخوف إلى فضول', text: 'نستقبل موظفيكم وقياداتكم من حيث هم. نبني التحفظات تدريجياً ونُظهر الفرص الهائلة لثقافة مؤسسية صديقة للذكاء الاصطناعي.' },
            { bold: 'أسلوب العمل الجديد', text: 'لا يُفهم الذكاء الاصطناعي على أنه مشروع تقنية معلومات ثانوي مزعج، بل يُرسّخ بعمق في هوية مؤسستكم وفي العمل اليومي.' },
          ],
        },
        pillar2: {
          title: 'الركيزة الثانية',
          heading: 'تدريبات عملية',
          items: [
            { bold: 'الصلة بالواقع فوق النظرية', text: 'لا محاضرات قياسية مملة. نطور تدريبات مرتبطة بالمؤسسة والمهام مصممة بدقة لتلبية التحديات الفردية لأقسامكم.' },
            { bold: 'تطبيق عملي', text: 'نُظهر بشكل ملموس باستخدام عملياتكم الخاصة: كيف يمكن لموظفيكم استخدام الذكاء الاصطناعي بإنتاجية وأمان فوراً؟' },
          ],
        },
        pillar3: {
          title: 'الركيزة الثالثة',
          heading: 'التكامل والـ"سحر"',
          items: [
            { bold: 'الجرعة المناسبة', text: 'نحلل بدقة: أين يكون الذكاء الاصطناعي مجرد إضافة مفيدة؟ وأين يصبح جزءاً لا يتجزأ مما هو موجود بالفعل؟' },
            { bold: 'أثر الإبهار', text: 'نحدد معاً المحركات والعمليات الخاصة في مؤسستكم حيث يُنتج الاستخدام الموجه للذكاء الاصطناعي "سحراً" حقيقياً ويُيسّر الحياة المهنية اليومية بشكل جذري.' },
          ],
        },
      },
      resultStatement: 'النتيجة: فريق لا يخشى الذكاء الاصطناعي بل يتقنه بثقة – ومؤسسة',
      resultHighlight: 'لا تُعاق أبداً بعمليات قديمة، بل تحرر مواردها للابتكارات الحقيقية.',
      tags: ['✓ تدريبات مخصصة', '✓ مرافقة التغيير الثقافي', '✓ من الخوف إلى الكفاءة'],
      cta: {
        heading: 'مستعدون لتمكين ',
        headingHighlight: 'فريقكم؟',
        text: 'دعونا نكتشف معاً أي شكل من أشكال التدريب وأي نهج للتحول يتناسب أكثر مع مؤسستكم وموظفيكم.',
        button: 'احجز استشارتك الأولى المجانية',
        tagline: 'مجاني · غير ملزم · شخصي',
      },
    },
    kiAusschreibungenPage: {
      pageTitle: 'الذكاء الاصطناعي في المناقصات | CPCC – Christian Plath Consulting Company',
      metaDescription: 'الذكاء الاصطناعي في المناقصات: تحليل دقيق وتوثيق محكم للمنظمات المُعلنة والشركات المقدِّمة. متوافق مع DSGVO، صالح قانونياً.',
      backToHome: 'العودة إلى الصفحة الرئيسية',
      heroHeading: 'الذكاء الاصطناعي في المناقصات',
      quote: '„تحليل دقيق. توثيق محكم.',
      quoteHighlight: ' لكلا جانبي الطاولة."',
      intro: 'سواء كنتم تُعلنون أو تتقدمون: نجلب الذكاء الاصطناعي إلى عملية المناقصة بأكملها – بدقة أعلى، وأسرع، وصالحاً قانونياً.',
      problemStatement: '„المناقصات مضيعة للوقت – وتبقى الشكوك دائماً في النهاية." – كتالوجات متطلبات بمئات المعايير، تصاميم حلول تحتاج إلى تفسير، تقييمات يجب أن تصمد أمام الفحص القانوني.',
      problemHighlight: 'نجلب الذكاء الاصطناعي إلى هذه العملية – على كلا الجانبين.',
      painPoints: {
        title: 'المشكلات التي نحلها',
        items: [
          'مواصفات الخدمات الغامضة أو العامة جداً',
          'غياب إمكانية المقارنة بين العروض',
          'الوقت الطويل في إعداد الوثائق والتنسيق',
          'صعوبة تقييم حلول تكنولوجيا المعلومات/الذكاء الاصطناعي/السحابة المعقدة',
          'خطر "عروض المصطلحات الرنانة" بدون جوهر حقيقي',
          'ضعف إمكانية تتبع القرارات',
        ],
      },
      sides: {
        title: 'لكل جانب من الطاولة',
        subtitle: 'دعمنا مصمم لكلا الدورين في عملية المناقصة.',
        customer: {
          sideLabel: 'للمنظمات المُعلنة عن المناقصات',
          title: 'الإعلان كمشترٍ',
          items: [
            { heading: 'إعداد مواصفات الخدمة', description: 'كتالوجات متطلبات دقيقة وكاملة – لا معايير منسية، لا مجال للتفسير.' },
            { heading: 'تطوير معايير التقييم', description: 'مصفوفات تقييم موضوعية ومفهومة تصمد أمام الفحص القانوني.' },
            { heading: 'التقييم المنهجي لتصاميم الحلول', description: 'مقارنة منهجية للوثائق المقدمة مع جميع المتطلبات. التفاصيل الحاسمة في الجمل الفرعية والمرفقات لن تُغفل بعد الآن.' },
            { heading: 'كشف المصطلحات الرنانة', description: 'استخراج المحتوى الأساسي بالذكاء الاصطناعي ومقارنة مباشرة لحلول المزودين. تحديد المخاطر والنقاط الضعيفة أو لغة التسويق البحتة بدون جوهر.' },
            { heading: 'تأمين قرارات الترسية', description: 'توثيق كامل لكل قرار تقييمي – مع مسار تدقيق شامل.' },
          ],
        },
        provider: {
          sideLabel: 'للشركات المتقدمة بعروض',
          title: 'التقديم كمزوّد',
          items: [
            { heading: 'تحليل المناقصات', description: 'استخراج سريع للمتطلبات الأساسية. ماذا يُطلب فعلاً؟ أين تكمن المزالق؟' },
            { heading: 'ضمان اكتمال الوثائق', description: 'مراجعة تلقائية لمواصفات خدماتكم وتصاميم حلولكم بحثاً عن الثغرات والتناقضات والغموض.' },
            { heading: 'التدقيق والتوحيد', description: 'مقترحات ملموسة لتدقيق المصطلحات والهياكل وتوحيدها بشكل متسق عبر جميع الوثائق.' },
            { heading: 'الكفاءة بضغطة زر', description: 'إعداد سريع لمسودات RFP/RFI بناءً على نقاط محدودة. عروض منظمة تعالج جميع المعايير – لا شيء منسي، لا شيء مكرر.' },
            { heading: 'الاستعداد لمفاوضات العقود', description: 'تحليل مسودات العقود بحثاً عن المخاطر والبنود الحرجة. إعداد حجج تفاوضية حادة مبنية على نقاط الضعف المحددة.' },
          ],
        },
      },
      resultStatement: 'النتيجة: أوقات معالجة أقصر بشكل ملحوظ، جودة ووضوح أعلى للمتطلبات، مقارنة أفضل للمزودين،',
      resultHighlight: 'قرارات مدروسة وقابلة للتتبع مع مخاطر أدنى جذرياً عند إبرام العقود – بصرف النظر عن الجانب الذي تجلسون فيه.',
      tags: ['✓ للمشترين والمزودين', '✓ متوافق مع DSGVO', '✓ توثيق صالح قانونياً'],
      cta: {
        heading: 'المناقصة القادمة مع ',
        headingHighlight: 'تفوق واضح؟',
        text: 'دعونا نناقش كيف يجعل الذكاء الاصطناعي مناقصتكم القادمة – سواء كمُعلِن أو مُقدِّم – أسرع، وأدق، وأكثر أماناً قانونياً.',
        button: 'احجز استشارتك الأولى المجانية',
        tagline: 'مجاني · غير ملزم · شخصي',
      },
    },
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
          title: 'AI-оптимизация бизнеса',
          description: 'Автоматизация и повышение эффективности через интеллектуальные процессы.'
        },
        marketingSales: {
          title: 'ИИ в маркетинге и продажах',
          description: 'Революционизируйте ваши стратегии продаж с силой ИИ.'
        },
        schulungen: {
          title: 'AI-обучение и трансформация',
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
    },
    kiStarthilfePage: {
      pageTitle: 'AI-Старт и анализ потенциала | CPCC – Christian Plath Consulting Company',
      metaDescription: 'CPCC AI-Старт: индивидуальный анализ AI-потенциала вашего бизнеса. Выявляем реальные болевые точки, анализируем текущее состояние и предоставляем чёткую, реалистичную AI-дорожную карту — без пустых обещаний.',
      backToHome: 'На главную',
      heroHeading: 'AI-Старт',
      quote: '«Мы понимаем, что ИИ важен – но ',
      quoteHighlight: 'с чего начать?',
      intro: 'Об искусственном интеллекте говорят все, но что это даст конкретно вашему бизнесу? Прежде чем лицензировать дорогостоящие инструменты или запускать непродуманные проекты, необходима чёткая картина.',
      highlightCard: 'Наш анализ потенциала ',
      highlightCardHighlight: 'глубоко изучает ваш бизнес',
      process: {
        title: 'Как проходит анализ',
        subtitle: 'Три чётко определённых шага – от первичной диагностики до готовой дорожной карты.',
        step1: { title: 'Фокус', description: 'Целенаправленное выявление реальных болевых точек, где ИИ и автоматизация могут сыграть решающую роль.', detail: 'Смотрим честно – без модных слов, без приукрашивания.' },
        step2: { title: 'Диагностика', description: 'Совместная оценка вашего текущего положения – какие инструменты уже используются и каков уровень AI-компетенций в вашей команде?', detail: 'Анализ вашей цифровой инфраструктуры и навыков сотрудников.' },
        step3: { title: 'Результат', description: 'Чёткая дорожная карта, показывающая конкретное влияние ИИ на ваши услуги и способы оптимизации бизнес-модели.', detail: 'Конкретно, реалистично, применимо – не теоретический документ.' },
      },
      coreQuestions: {
        title: 'Ключевые вопросы анализа',
        subtitle: 'Три центральных аспекта, которые мы рассматриваем вместе с вами.',
        q1: { title: 'Анализ потребностей', questions: ['Какие реальные болевые точки существуют в вашем бизнесе?', 'Какие инструменты уже используются?', 'Где сегодня возникают лишние потери эффективности?'] },
        q2: { title: 'Стратегия', questions: ['Где ИИ может поддержать процессы и сотрудников?', 'Где он может реально заменить задачи?', 'Что реалистично – сегодня и завтра?'] },
        q3: { title: 'Развитие компетенций', questions: ['Каков текущий уровень AI-знаний вашей команды?', 'Как сотрудники могут продуктивно работать с ИИ?', 'Какие обучающие мероприятия целесообразны?'] },
      },
      benefits: {
        title: 'Что вы получаете',
        items: ['Честная оценка', 'Реалистичные цели', 'Индивидуальный анализ текущего состояния', 'Чёткая AI-дорожная карта'],
        closingText: 'Никаких шаблонных решений – только ',
        closingHighlight: 'индивидуальный анализ',
      },
      cta: {
        heading: 'Готовы к своей ',
        headingHighlight: 'AI-дорожной карте?',
        text: 'В ходе ни к чему не обязывающей первичной консультации мы совместно определим, как может выглядеть индивидуальный анализ потенциала для вашего бизнеса.',
        button: 'Записаться на бесплатную консультацию',
        tagline: 'Бесплатно · Без обязательств · Лично',
      },
    },
    projektmanagementPage: {
      pageTitle: 'Управление проектами 3.0 | CPCC – Christian Plath Consulting Company',
      metaDescription: 'Управление проектами 3.0 объединяет классические PM-фреймворки с искусственным интеллектом. Разгрузите PMO, автоматизируйте ежедневные проектные задачи и верните своё время.',
      backToHome: 'На главную',
      heroHeading: 'Управление проектами 3.0',
      quote: '«Представьте, что ваши проекты управляются почти сами благодаря ИИ.»',
      intro: 'Классические PM-фреймворки в сочетании с передовым искусственным интеллектом — чтобы ваша команда наконец получила время для того, что действительно важно.',
      problemStatement: 'Ваш PMO хронически перегружен, а команда проводит полдня на непродуктивных совещаниях вместо того, чтобы двигать проект вперёд.',
      problemHighlight: 'Управление проектами 3.0 решает именно эти болевые точки через интеллектуальную автоматизацию ежедневной рутины — и возвращает вам ваше время.',
      strips: {
        focus: { label: 'Фокус', text: 'Освобождение вашей команды от административных задач PMO через интеллектуальную автоматизацию ежедневной проектной рутины.' },
        setup: { label: 'Настройка', text: 'Интеграция умных AI-ассистентов в существующие форматы совещаний и проектные структуры.' },
        result: { label: 'Результат', text: 'Значительная экономия времени и заметно более эффективные совещания — верните своё время с помощью ИИ.' },
      },
      benefits: {
        title: 'Ваши преимущества одним взглядом',
        subtitle: 'Три конкретных рычага, которыми ИИ немедленно снижает нагрузку на ваши проекты.',
        card1: { title: 'Умная культура совещаний', description: 'Автоматическое формирование повесток дня и структурированные процессы гарантируют, что вы больше не будете проводить весь день на звонках.' },
        card2: { title: 'Плавное делегирование', description: 'Автоматическое распределение задач прямо из разговора — без ручного протоколирования.' },
        card3: { title: 'Полное отслеживание', description: 'Автоматический контроль дедлайнов берёт на себя утомительный фоллоу-ап и сохраняет ценные ресурсы PMO.' },
      },
      tags: ['✓ Классические фреймворки и ИИ вместе', '✓ Разгрузка ресурсов PMO', '✓ Больше времени для ежедневных задач'],
      cta: {
        heading: 'Готовы разгрузить ваш ',
        headingHighlight: 'PMO?',
        text: 'Давайте вместе выясним, где ИИ предлагает наибольший рычаг в вашем управлении проектами. Бесплатно и без обязательств.',
        button: 'Записаться на бесплатную консультацию',
        tagline: 'Бесплатно · Без обязательств · Лично',
      },
    },
    kiGeschaeftsoptimierungPage: {
      pageTitle: 'Оптимизация бизнеса с ИИ | CPCC – Christian Plath Consulting Company',
      metaDescription: 'Оптимизация процессов с ИИ в 6 шагов: от идентификации use-кейсов через GDPR-совместимую оценку инструментов до плавного внедрения. Структурированно, безопасно, с учётом затрат.',
      backToHome: 'На главную',
      heroHeading: 'Оптимизация бизнеса с ИИ',
      quote: '«Не каждый процесс нужно принудительно автоматизировать — ',
      quoteHighlight: 'мы находим те, где это действительно окупается.»',
      intro: 'От идентификации use-кейсов через GDPR-совместимую оценку до сопровождаемого внедрения — структурированно, безопасно и с учётом затрат.',
      highlightCard: 'AI-проекты терпят неудачу не из-за технологии — они терпят неудачу из-за отсутствия структуры, рисков защиты данных и неправильно выбранных моделей.',
      highlightCardHighlight: 'Наш 6-шаговый процесс привносит порядок, безопасность и экономическую эффективность в вашу AI-интеграцию.',
      process: {
        title: '6-шаговый процесс',
        subtitle: 'От первого анализа до промышленной эксплуатации — ни один шаг не пропускается.',
        step1: {
          title: 'Генерация use-кейсов',
          description: 'Целенаправленное выявление use-кейсов, которые приносят реальную ценность в вашей организации благодаря ИИ. Мы анализируем ваши бизнес-области и обнаруживаем, где ИИ измеримо ускоряет процессы, снижает частоту ошибок или осмысленно разгружает персонал.',
          detail: 'Не каждый процесс нужно принудительно автоматизировать — мы фокусируемся на реальной ценности.',
        },
        step2: {
          title: 'Классификация данных и конфиденциальности',
          description: 'Оценка выявленных use-кейсов по классам защиты данных. С помощью специально разработанного чек-листа и детального каталога вопросов мы проверяем каждый шаг процесса на соответствие DSGVO и требованиям EU-AI-Act.',
          detail: 'Безопасность — это фундамент любой AI-интеграции.',
        },
        step3: {
          title: 'Оценка инструментов и моделей',
          description: 'Рыночный стандарт или индивидуальное решение? Мы проверяем, должны ли DSGVO-совместимые решения работать в вашей собственной среде или возможны hosted-сервисы — от ChatGPT и Claude до on-premise-моделей, таких как Llama или европейское решение Mistral.',
          detail: 'Целенаправленное тестирование находит технологически идеальное соответствие для вашего use-кейса.',
        },
        step4: {
          title: 'Оценка затрат и right-sizing',
          description: 'Текущие затраты LLM крайне различаются. Простые use-кейсы могут быть реализованы с помощью небольших высокоэффективных моделей, которые стоят до 90% дешевле больших моделей — при сопоставимом качестве для конкретной специализированной задачи.',
          detail: 'Мы рассчитываем эти рычаги для вас и гарантируем максимально эффективную эксплуатацию.',
        },
        step5: {
          title: 'Обоснованная рекомендация',
          description: 'После завершения оценки и расчёта затрат вы получаете кристально ясную, обоснованную рекомендацию. Прозрачную, понятную и адаптированную к вашей конкретной ситуации.',
          detail: 'Никакого vendor lock-in, никаких скрытых предпочтений — только лучшее решение для вас.',
        },
        step6: {
          title: 'Сопровождаемое внедрение',
          description: 'Мы не оставляем вас наедине со стратегией. Выбранное решение плавно интегрируется в вашу существующую системную архитектуру — с активным сопровождением до момента, когда оно начнёт приносить реальную ценность.',
          detail: 'От первой строки кода до промышленной эксплуатации.',
        },
      },
      tags: ['✓ Соответствие DSGVO и EU-AI-Act', '✓ Right-sizing для вашего бюджета', '✓ От анализа до внедрения'],
      cta: {
        heading: 'Готовы к первому ',
        headingHighlight: 'use-кейсу?',
        text: 'Давайте вместе выясним, какой процесс в вашей организации предлагает наибольший AI-рычаг. Структурированно, безопасно и с полной прозрачностью затрат.',
        button: 'Записаться на бесплатную консультацию',
        tagline: 'Бесплатно · Без обязательств · Лично',
      },
    },
    kiMarketingSalesPage: {
      pageTitle: 'ИИ в маркетинге и продажах | CPCC – Christian Plath Consulting Company',
      metaDescription: 'B2B-продажи и маркетинг с поддержкой ИИ: реальные клиентские инсайты, конкурентный анализ в реальном времени, автоматизированная лидогенерация и масштабируемое создание контента для большего пайплайна и коротких циклов продаж.',
      backToHome: 'На главную',
      heroHeading: 'ИИ в маркетинге и продажах',
      quote: '«Ваши продажи и маркетинг на следующем уровне. От лидогенерации до закрытия сделки —',
      quoteHighlight: ' с поддержкой ИИ, точно по целевой аудитории и безгранично масштабируемо.»',
      intro: 'Времена, когда простой AI-промпт обеспечивал конкурентное преимущество, прошли. Сегодня вам нужны эксклюзивные методы и источники данных, чтобы обеспечить решающее информационное превосходство.',
      problemStatement: '«Нам нужно больше пайплайна, более короткие циклы продаж и лучшая конверсия.» — У вас амбициозные OKR, но операционная ежедневность тормозит вас?',
      problemHighlight: 'Мы покажем вам, как ИИ измеримо ускоряет весь ваш B2B-процесс продаж. Не как теоретическое упражнение, а как реальный драйвер ваших KPI.',
      themes: {
        title: 'Четыре рычага для вашего успеха в продажах',
        subtitle: 'От анализа рынка до закрытия — ИИ вмешивается в каждой ключевой точке.',
        theme1: {
          title: 'Глубокая аналитика и стратегия',
          bullets: [
            'Реальные клиентские инсайты: Вместо скучных опросов мы анализируем реальные рыночные данные и показываем вам точно, что любят ваши клиенты и что их раздражает.',
            'Несправедливое информационное преимущество: Конкурентный и рыночный анализ на основе живых данных в реальном времени — на уровне, которого ваши конкуренты никогда не достигнут со стандартными AI-запросами.',
            'Обоснованное планирование: Разработка надёжных, data-driven маркетинговых стратегий вместо принципа лейки.',
          ],
        },
        theme2: {
          title: 'Лидогенерация и конверсия',
          bullets: [
            'Умный лидовый движок: AI-поддерживаемая лидогенерация и привлечение партнёров, которые точно строятся на глубокой аналитике.',
            'Глобальное масштабирование: Создание предложений для целевой аудитории нажатием кнопки — персонализированно и на более чем 50 языках.',
            'Точный таргетинг: Создание персон на основе данных и глубокая сегментация аудитории вместо интуиции.',
          ],
        },
        theme3: {
          title: 'Контент и сторителлинг',
          bullets: [
            'Контент нажатием кнопки: Создание высококонвертирующих рекламных текстов, лендингов и рассылок за минуты вместо дней.',
            'Сторителлинг, который продаёт: Контент, точно настроенный на проанализированные реальные болевые точки ваших B2B-лиц, принимающих решения.',
          ],
        },
        theme4: {
          title: 'Развитие команды и превосходство в продажах',
          bullets: [
            'Живая поддержка: Обучение в реальном времени и умная обработка возражений для ваших сейлз-менеджеров прямо во время текущих переговоров.',
            'Быстрее к продуктивности: Радикально сокращённый онбординг новых сотрудников через AI-поддерживаемую передачу знаний.',
          ],
        },
      },
      resultStatement: 'Результат: Больше пайплайна, лучшая конверсия, резко сокращённые циклы продаж — измеримо по вашим KPI и с',
      resultHighlight: 'командой, которая наконец снова может сосредоточиться на продажах.',
      tags: ['✓ B2B-фокус', '✓ Реальные инсайты вместо стандартного ИИ', '✓ Масштабируемо на 50+ языках', '✓ От контента до закрытия'],
      cta: {
        heading: 'Готовы к большему ',
        headingHighlight: 'пайплайну?',
        text: 'Давайте в первом разговоре выясним, в какой точке воронки ИИ предлагает наибольший рычаг для вашего отдела продаж.',
        button: 'Записаться на бесплатную консультацию',
        tagline: 'Бесплатно · Без обязательств · Лично',
      },
    },
    kiSchulungenPage: {
      pageTitle: 'AI-обучение и трансформация | CPCC – Christian Plath Consulting Company',
      metaDescription: 'AI-обучение и трансформация: мы превращаем страх перед ИИ в компетентность. Индивидуальные программы обучения, культурные изменения и интеграция — чтобы ваша команда уверенно владела ИИ.',
      backToHome: 'На главную',
      heroHeading: 'AI-обучение и трансформация',
      quote: '«Обучение, культурные изменения и интеграция —',
      quoteHighlight: ' адаптировано под вашу организацию.»',
      intro: 'Мы привносим AI-компетентность в вашу организацию — не как абстрактный IT-проект, а как подлинное культурное изменение, которое охватывает каждого сотрудника.',
      problemStatement: '«Наши сотрудники боятся ИИ — и мы не знаем, с чего начать.» Это нормально. ИИ меняет не только процессы, но и то, как мы работаем.',
      problemHighlight: 'Вопрос не в том, придёт ли ИИ, а в том, как вы подготовите к нему свою команду.',
      pillars: {
        title: 'Три столпа AI-трансформации',
        subtitle: 'От первого знакомства с ИИ до глубоко укоренившегося уверенного использования в рабочей жизни.',
        pillar1: {
          title: 'Столп 1',
          heading: 'Культурные изменения и мышление',
          items: [
            { bold: 'Превращение страха в любопытство', text: 'Мы встречаем ваших сотрудников и руководителей там, где они находятся. Мы целенаправленно разрушаем предубеждения и показываем огромные возможности AI-дружественной корпоративной культуры.' },
            { bold: 'Новый способ работы', text: 'ИИ воспринимается не как надоедливый IT-побочный проект, а глубоко укореняется в ДНК вашей организации и в ежедневных действиях.' },
          ],
        },
        pillar2: {
          title: 'Столп 2',
          heading: 'Практическое обучение',
          items: [
            { bold: 'Актуальность важнее теории', text: 'Никаких скучных стандартных презентаций. Мы разрабатываем корпоративные и задачно-ориентированные программы обучения, точно адаптированные к индивидуальным вызовам ваших подразделений.' },
            { bold: 'Практическое применение', text: 'Мы показываем конкретно на ваших собственных процессах: как именно ваши сотрудники могут использовать ИИ продуктивно и безопасно уже сейчас?' },
          ],
        },
        pillar3: {
          title: 'Столп 3',
          heading: 'Интеграция и «магия»',
          items: [
            { bold: 'Правильная дозировка', text: 'Мы анализируем точно: где ИИ является лишь полезным дополнением? Где он становится неотъемлемой частью того, что уже есть?' },
            { bold: 'Эффект восхищения', text: 'Мы совместно определяем особые рычаги и процессы в вашей организации, где целенаправленное использование ИИ создаёт настоящую «магию» и радикально облегчает рабочую жизнь.' },
          ],
        },
      },
      resultStatement: 'Результат: Команда, которая не боится ИИ, а уверенно им владеет — и организация, которая',
      resultHighlight: 'никогда больше не будет тормозиться устаревшими процессами, а высвобождает свои ресурсы для подлинных инноваций.',
      tags: ['✓ Индивидуальные программы обучения', '✓ Сопровождение культурных изменений', '✓ От страха к компетентности'],
      cta: {
        heading: 'Готовы развить свою ',
        headingHighlight: 'команду?',
        text: 'Давайте вместе выясним, какой формат обучения и какой подход к трансформации лучше всего подходит для вашей организации и ваших сотрудников.',
        button: 'Записаться на бесплатную консультацию',
        tagline: 'Бесплатно · Без обязательств · Лично',
      },
    },
    kiAusschreibungenPage: {
      pageTitle: 'ИИ в тендерах | CPCC – Christian Plath Consulting Company',
      metaDescription: 'ИИ в тендерах: точный анализ и надёжная документация для организаций-заказчиков и компаний-участников. Совместимость с DSGVO, юридически обоснованно.',
      backToHome: 'На главную',
      heroHeading: 'ИИ в тендерах',
      quote: '«Точный анализ. Надёжная документация.',
      quoteHighlight: ' Для обеих сторон стола.»',
      intro: 'Будете ли вы проводить или участвовать в тендере: мы вносим ИИ во весь тендерный процесс — точнее, быстрее и юридически обоснованно.',
      problemStatement: '«Тендеры — это пожиратель времени, и в конце всегда остаётся неопределённость.» — Каталоги требований с сотнями критериев, проектные решения, которые нужно интерпретировать, оценки, которые должны выдержать юридическую проверку.',
      problemHighlight: 'Мы вносим ИИ в этот процесс — с обеих сторон.',
      painPoints: {
        title: 'Болевые точки, которые мы решаем',
        items: [
          'Нечёткие или слишком общие описания услуг',
          'Отсутствие сопоставимости предложений',
          'Трудоёмкое составление и согласование документов',
          'Сложная оценка комплексных IT/AI/облачных решений',
          'Риск «тендеров-пустышек» без реального содержания',
          'Недостаточная прослеживаемость решений',
        ],
      },
      sides: {
        title: 'Для каждой стороны стола',
        subtitle: 'Наша поддержка адаптирована к обеим ролям в тендерном процессе.',
        customer: {
          sideLabel: 'Для организаций-заказчиков',
          title: 'Проведение тендера как заказчик',
          items: [
            { heading: 'Составление описаний услуг', description: 'Точные, полные каталоги требований — никаких забытых критериев, никаких полей для интерпретации.' },
            { heading: 'Разработка критериев оценки', description: 'Объективные, понятные матрицы оценки, выдерживающие юридическую проверку.' },
            { heading: 'Систематическая оценка проектных решений', description: 'Систематическое сравнение представленных документов со всеми требованиями. Критические детали в подпунктах и приложениях больше не будут упущены.' },
            { heading: 'Разоблачение buzzword-предложений', description: 'AI-поддерживаемое извлечение ключевого содержания и прямое сравнение решений поставщиков. Идентификация рисков, слабостей или чистого маркетингового языка без содержания.' },
            { heading: 'Защита решений о присуждении', description: 'Полная документация каждого решения об оценке — включая полный аудиторский след.' },
          ],
        },
        provider: {
          sideLabel: 'Для компаний-участников тендеров',
          title: 'Участие в тендере как поставщик',
          items: [
            { heading: 'Анализ тендеров', description: 'Быстрое извлечение основных требований. Что действительно запрашивается? Где подводные камни?' },
            { heading: 'Обеспечение полноты документов', description: 'Автоматическая проверка ваших описаний услуг и проектных решений на предмет пробелов, противоречий и неясностей.' },
            { heading: 'Уточнение и гармонизация', description: 'Конкретные предложения по уточнению и гармонизации терминов и структур последовательно по всем документам.' },
            { heading: 'Эффективность нажатием кнопки', description: 'Быстрое составление черновиков RFP/RFI на основе нескольких ключевых пунктов. Структурированные предложения, охватывающие все критерии — ничего не забыто, ничего не дублировано.' },
            { heading: 'Подготовка к переговорам по контракту', description: 'Анализ проектов контрактов на предмет рисков и критических положений. Подготовка острых аргументов для переговоров на основе выявленных слабостей.' },
          ],
        },
      },
      resultStatement: 'Результат: Значительно сокращённые сроки обработки, более высокое качество и чёткость требований, лучшая сопоставимость поставщиков, а также',
      resultHighlight: 'более обоснованные, прослеживаемые решения с резко сниженным риском при заключении контракта — независимо от того, на какой стороне стола вы сидите.',
      tags: ['✓ Для заказчиков и поставщиков', '✓ Соответствие DSGVO', '✓ Юридически обоснованная документация'],
      cta: {
        heading: 'Следующий тендер с ',
        headingHighlight: 'явным преимуществом?',
        text: 'Давайте обсудим, как ИИ сделает ваш следующий тендер — будь вы заказчиком или участником — быстрее, точнее и юридически надёжнее.',
        button: 'Записаться на бесплатную консультацию',
        tagline: 'Бесплатно · Без обязательств · Лично',
      },
    },
  }
};

export const useTranslations = (language: Language): Translations => {
  return translations[language];
};
