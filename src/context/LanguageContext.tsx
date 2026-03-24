import { createContext, useContext, useState, ReactNode } from "react";

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      work: "Work",
      contact: "Contact",
    },
    hero: {
      beforeFlip: "Shaping",
      afterFlip: "Experiences That Inspire",
      subtitle:
        "I design and develop high-quality websites & applications that are fast, scalable, and user-focused.",
      cta1: "View My Work",
      cta2: "Let's Connect",
      role: "Web & App Developer",
    },
    about: {
      heading: "About Me",
      introTitle: "Hey, I'm Thijs van den Broek",
      introBio:
        "I'm a frontend developer blending design, code, and AI to bring ideas to life through interactive experiences.",
      tagline: "BUILD. LEARN. EVOLVE.",
      locationTitle: "Based in the Netherlands",
      locationText:
        "I live in Limburg (Herkenbosch), close to nature and always online. I work on Central European Time and enjoy remote collaboration with global teams.",
      connectTitle: "Let's connect!",
      connectText:
        "I'm open to internships and collaborations in web or app development.",
      stackTitle: "My Tech Stack",
      stackText:
        "I work with modern web tools like React, Node.js, and Vite, focusing on creating responsive, user-centered experiences. I enjoy experimenting with AI APIs and media tools to bring new ideas to life.",
      cards: {
        frontend: "Frontend",
        aiIntegration: "AI Integration",
        creativeCoding: "Creative Coding",
        uxThinking: "UX Thinking",
      },
    },
    projects: {
      heading: "Recent Projects",
      viewAll: "View all",
      watchVideo: "Watch Video",
      checkLive: "Check Live Site",
      liveSite: "Live Site",
      moreInfo: "More info",
    },
    projectDes: {
      "1": "Facial scanning in virtual reality to visualize deepfakes, demonstrating the dangers and ethical implications of identity manipulation.",
      "2": "Intelligent email assistant designed to help users efficiently compose and enhance email messages with smart suggestions.",
      "3": "B2B webshop using Hyva in Magento2, implementing modules for fast and efficient user experience and performance.",
      "4": "Complete recreation of an Awwwards website using pure HTML and CSS, showcasing modern design techniques and responsive layouts.",
      "5": "Digital fieldwork tool replacing paper-based observation forms at InnoBeweegLab, designed for outdoor use and now actively used in production.",
      "6": "Personal tool for transferring playlists between Spotify, YouTube Music, and SoundCloud. Keeping libraries in sync across platforms should not be manual work.",
      "7": "A model that analyses art pieces and generates an informed opinion, covering composition, style, context, and emotional tone.",
    },
    footer: {
      headingBefore: "Ready to make ",
      headingAccent: "your",
      headingAfter: " next project stand out?",
      subtext:
        "Let's get in touch and explore how I can make a strong impact on your team.",
      linkedin: "Connect on LinkedIn",
    },
    email: {
      copy: "Copy Email Address",
      copied: "Email has Copied",
    },
    projectsPage: {
      backToHome: "Back to home",
      portfolio: "Portfolio",
      allProjects: "All Projects",
      description:
        "Featured builds, client work, and experiments, with more on the way.",
      comingSoon: "Coming Soon",
      inProgress: "In progress",
      caseStudy: "Case Study",
      challenge: "Challenge",
    },
    detailPage: {
      projectSpotlight: "Project Spotlight",
      personalProject: "Personal Project",
      overview: "overview",
      experienceFlow: "Experience flow",
      finalProduct: "Final product",
      process: "Process",
      takeaway: "Takeaway",
      impact: "Impact",
      myRole: "My Role",
      toolsUsed: "Tools Used",
      skillsInFocus: "Skills in focus",
      mentorFeedback: "Mentor feedback",
      status: "Status",
      platforms: "Platforms",
      screenshots: "Screenshots",
      returnToProjects: "Return to Projects",
      backToAllProjects: "Back to All Projects",
      watchDemo: "Watch Demo",
      watchTrailer: "Watch Trailer",
      viewDemo: "View Demo",
      watchPromo: "Watch Promo",
      fullWalkthrough: "Full Walkthrough",
      visitLiveSite: "Visit Live Site",
      liveBadge: "Live",
      plannedBadge: "Planned",
      morePlanned: "+ more planned",
      faceAware: {
        overviewTitle: "Immersive literacy for Night of the Nerds",
        experienceTitle: "From web onboarding to VR agency",
        finalTitle: "Full end-to-end walkthrough",
        eventEyebrow: "Night of the Nerds",
        eventTitle: "Dozens of students stepped into FaceAware",
        impactTitle: "What students took away",
        trailerCaption:
          "Clip from the live trailer captured during Night of the Nerds.",
      },
      epostpro: {
        overviewTitle: "Four-week sprint to calm the inbox",
        experienceTitle: "From messy prompt to polished email",
        finalTitle: "Watch the full walkthrough",
        takeawayTitle: "What I learned",
        heroCaption:
          "Initial concept shot showing the streamlined AI email interface.",
      },
      b2bMagento: {
        overviewTitle: "Upgrading Magento B2B for Hyvä",
        experienceTitle: "Research, rebuild, document",
        finalTitle: "Full module walkthrough",
        takeawayTitle: "Delivering production-ready modules",
        mentorTitle: "Words from Sparkable",
        heroCaption:
          "Snapshot of the Hyvä storefront modules I delivered at Sparkable.",
      },
      awwwards: {
        overviewTitle: "Two-week fundamentals sprint",
        processEyebrow: "Process",
        processTitle: "Recreate everything with pure CSS",
        takeawayTitle: "What I gained",
        heroCaption:
          "Hero snapshot recreated entirely with semantic HTML and CSS.",
      },
      innoBeweegLab: {
        overviewTitle: "From paper forms to live data",
        observerEyebrow: "Observer experience",
        observerTitle: "Built for the field",
        adminEyebrow: "Admin system",
        adminTitle: "Full control, live data",
        walkthroughEyebrow: "Full walkthrough",
        walkthroughTitle: "Every screen, every feature",
        walkthroughDescription:
          "A complete run-through of both the observer app and the admin panel, from setting up a project to recording observations and viewing the collected data.",
        impactTitle: "Built it. Deployed it. They use it every day.",
        promoCaption: "Promo clip showcasing the observation tool in action.",
        statLive: "in production",
        statUsers: "user types",
        statPaper: "paper forms",
      },
      musicSync: {
        overviewTitle: "Why I built it",
        screenshotsTitle: "The transfer flow",
        platformsTitle: "Works across your libraries",
        statusTitle: "Work in progress",
        demoCaption: "The transfer flow working live across platforms.",
      },
    },
  },
  nl: {
    nav: {
      home: "Home",
      about: "Over mij",
      work: "Werk",
      contact: "Contact",
    },
    hero: {
      beforeFlip: "Inspirerende",
      afterFlip: "Ervaringen Creëren",
      subtitle:
        "Ik ontwerp en ontwikkel hoogwaardige websites & applicaties die snel, schaalbaar en gebruiksgericht zijn.",
      cta1: "Bekijk Mijn Werk",
      cta2: "Neem Contact Op",
      role: "Web & App Ontwikkelaar",
    },
    about: {
      heading: "Over Mij",
      introTitle: "Hey, ik ben Thijs van den Broek",
      introBio:
        "Ik ben een frontend developer die design, code en AI combineert om ideeën tot leven te brengen via interactieve ervaringen.",
      tagline: "BOUWEN. LEREN. GROEIEN.",
      locationTitle: "Gevestigd in Nederland",
      locationText:
        "Gebaseerd in Limburg (Herkenbosch), altijd online en beschikbaar op CE-tijd. Remote samenwerking met internationale teams gaat me goed af.",
      connectTitle: "Neem contact op!",
      connectText:
        "Ik sta open voor stages en samenwerkingen in web- of app-ontwikkeling.",
      stackTitle: "Mijn Tech Stack",
      stackText:
        "Ik werk met moderne webtools zoals React, Node.js en Vite, focus op responsieve ervaringen, en experimenteer met AI- en mediatools.",
      cards: {
        frontend: "Frontend",
        aiIntegration: "AI-integratie",
        creativeCoding: "Creatief Coderen",
        uxThinking: "UX-denken",
      },
    },
    projects: {
      heading: "Recente Projecten",
      viewAll: "Bekijk alles",
      watchVideo: "Bekijk Video",
      checkLive: "Bekijk live site",
      liveSite: "Live site",
      moreInfo: "Meer info",
    },
    projectDes: {
      "1": "Gezichtsscanning in VR om deepfakes te visualiseren en duidelijk te maken wat de risico’s en ethische implicaties zijn van identiteitsmanipulatie.",
      "2": "Intelligente e-mailassistent die gebruikers helpt bij het efficiënt opstellen van e-mails met slimme suggesties.",
      "3": "B2B-webshop gebouwd met Hyvä in Magento 2, met zorgvuldig geselecteerde modules voor een snelle, vloeiende en efficiënte gebruikerservaring en optimale prestaties.",
      "4": "Complete nabootsing van een Awwwards-website met pure HTML en CSS, met moderne ontwerptechnieken en responsieve layouts.",
      "5": "Digitale veldwerktool die papieren formulieren bij InnoBeweegLab vervangt, ontworpen voor gebruik in het veld, geschikt voor buiten, en nu actief in productie.",
      "6": "Persoonlijk hulpmiddel voor het overzetten van afspeellijsten tussen Spotify, YouTube Music en SoundCloud. Bibliotheken synchroon houden mag geen handmatig werk zijn.",
      "7": "Een model dat kunstwerken analyseert en een gefundeerde mening geeft over compositie, stijl, context en emotionele toon.",
    },
    footer: {
      headingBefore: "Klaar om ",
      headingAccent: "jouw",
      headingAfter: " volgende project te laten opvallen?",
      subtext:
        "Neem contact op en ontdek hoe ik een sterke bijdrage kan leveren aan jouw team.",
      linkedin: "Verbinden op LinkedIn",
    },
    email: {
      copy: "Kopieer E-mailadres",
      copied: "E-mail Gekopieerd",
    },
    projectsPage: {
      backToHome: "Terug naar home",
      portfolio: "Portfolio",
      allProjects: "Alle Projecten",
      description:
        "Uitgelichte projecten, klantwerk en experimenten, met meer op komst.",
      comingSoon: "Binnenkort",
      inProgress: "In uitvoering",
      caseStudy: "Case Study",
      challenge: "Challenge",
    },
    detailPage: {
      projectSpotlight: "Project Spotlight",
      personalProject: "Persoonlijk Project",
      overview: "overzicht",
      experienceFlow: "Gebruikersflow",
      finalProduct: "Eindproduct",
      process: "Werkproces",
      takeaway: "Conclusie",
      impact: "Impact",
      myRole: "Mijn Rol",
      toolsUsed: "Gebruikte Tools",
      skillsInFocus: "Vaardigheden in focus",
      mentorFeedback: "Mentor feedback",
      status: "Status",
      platforms: "Platforms",
      screenshots: "Schermafbeeldingen",
      returnToProjects: "Terug naar Projecten",
      backToAllProjects: "Terug naar Alle Projecten",
      watchDemo: "Bekijk Demo",
      watchTrailer: "Bekijk Trailer",
      viewDemo: "Bekijk Demo",
      watchPromo: "Bekijk Promo",
      fullWalkthrough: "Volledige Walkthrough",
      visitLiveSite: "Bekijk Live Site",
      liveBadge: "Live",
      plannedBadge: "Gepland",
      morePlanned: "+ meer gepland",
      faceAware: {
        overviewTitle: "Meeslepende bewustwording voor Night of the Nerds",
        experienceTitle: "Van web-onboarding naar VR-belevenis",
        finalTitle: "Volledige walkthrough van begin tot eind",
        eventEyebrow: "Night of the Nerds",
        eventTitle: "Tientallen studenten stapten in FaceAware",
        impactTitle: "Wat studenten meenamen",
        trailerCaption:
          "Fragment uit de live trailer, opgenomen tijdens Night of the Nerds.",
      },
      epostpro: {
        overviewTitle: "Vier weken sprint voor een rustige inbox",
        experienceTitle: "Van ruwe prompt naar gepolijste e-mail",
        finalTitle: "Bekijk de volledige walkthrough",
        takeawayTitle: "Wat ik leerde",
        heroCaption:
          "Eerste conceptopname van de gestroomlijnde AI e-mailinterface.",
      },
      b2bMagento: {
        overviewTitle: "Magento B2B upgraden voor Hyvä",
        experienceTitle: "Onderzoek, herbouwen, documenteren",
        finalTitle: "Volledige module walkthrough",
        takeawayTitle: "Productieklare modules opleveren",
        mentorTitle: "Woorden van Sparkable",
        heroCaption:
          "Momentopname van de Hyvä storefront modules die ik bij Sparkable opleverde.",
      },
      awwwards: {
        overviewTitle: "Twee weken fundamenten-sprint",
        processEyebrow: "Werkproces",
        processTitle: "Alles nabootsen met pure CSS",
        takeawayTitle: "Wat ik leerde",
        heroCaption:
          "Hero-opname volledig nagebouwd met semantische HTML en CSS.",
      },
      innoBeweegLab: {
        overviewTitle: "Van papieren formulieren naar live data",
        observerEyebrow: "Waarnemer-ervaring",
        observerTitle: "Gebouwd voor buiten",
        adminEyebrow: "Beheerdersysteem",
        adminTitle: "Volledige controle, live data",
        walkthroughEyebrow: "Volledige walkthrough",
        walkthroughTitle: "Elk scherm, elke functie",
        walkthroughDescription:
          "Een complete doorloop van zowel de waarnemer-app als het beheerderpaneel, van het opzetten van een project tot het vastleggen van observaties en het bekijken van de verzamelde data.",
        impactTitle: "Gebouwd. Geïmplementeerd. Ze gebruiken het elke dag.",
        promoCaption: "Promoclip van het observatietool in actie.",
        statLive: "in productie",
        statUsers: "gebruikerstypes",
        statPaper: "papieren formulieren",
      },
      musicSync: {
        overviewTitle: "Waarom ik het bouwde",
        screenshotsTitle: "De overzetflow",
        platformsTitle: "Werkt met al je bibliotheken",
        statusTitle: "Werk in uitvoering",
        demoCaption: "De overzetflow live in actie over meerdere platforms.",
      },
    },
  },
} as const;

type Lang = keyof typeof translations;

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (path: string) => string;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const saved = localStorage.getItem("portfolio-lang");
      return saved === "en" ? "en" : "nl";
    } catch {
      return "nl";
    }
  });

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    try {
      localStorage.setItem("portfolio-lang", newLang);
    } catch {
      // ignore
    }
  };

  const t = (path: string): string => {
    const keys = path.split(".");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let val: any = translations[lang];
    for (const k of keys) {
      if (val == null) return path;
      val = val[k];
    }
    return (val as string) ?? path;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
