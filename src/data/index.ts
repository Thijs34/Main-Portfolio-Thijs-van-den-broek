type Project = {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link?: string;
  pinLabel?: string;
  detailPath?: string;
  ctaLabel?: string;
  comingSoon?: boolean;
  featured?: boolean;
};

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Exploring Deepfakes in VR",
    des: "Facial scanning technology in virtual reality used to visualize deepfakes, highlighting the risks and ethical concerns of manipulating someone’s identity.",
    img: "/assets/project1.1.png",
    iconLists: ["/assets/logos/React.svg", "/assets/logos/JavaScript.svg", "/assets/logos/Google.svg", "/assets/logos/Figma.svg"],
    link: "https://youtu.be/PSMM_yQ7abI",
    pinLabel: "youtu.be/PSMM_yQ7abI",
    detailPath: "/faceaware",
    featured: true,
  },
  {
    id: 2,
    title: "E-PostPro: Email Assistant",
    des: "Intelligent email assistant designed to help users efficiently compose and enhance email messages with smart suggestions.",
    img: "/assets/project1.2.png",
    iconLists: ["/assets/logos/React.svg", "/assets/logos/nodejs.svg", "/assets/logos/Firebase.svg", "/assets/logos/JavaScript.svg"],
    link: "https://e-postpro.vercel.app/",
    pinLabel: "e-postpro.vercel.app",
    detailPath: "/epostpro",
    ctaLabel: "Watch Video",
  },
  {
    id: 3,
    title: "B2B Magento Webshop",
    des: "B2B webshop built with Hyva in Magento2, using custom modules to deliver a fast and highly efficient user experience while ensuring top-notch overall performance.",
    img: "/assets/project1.3.png",
    iconLists: ["/assets/logos/Magento.svg", "/assets/logos/hyva.svg", "/assets/logos/JavaScript.svg", "/assets/logos/xml.svg"],
    link: "https://youtu.be/9K0Sbo8FQaY?si=LFdOgUY49NCTnQV0",
    pinLabel: "youtu.be/9K0Sbo8FQaY",
    detailPath: "/b2b-magento",
    featured: true,
  },
  {
    id: 4,
    title: "Awwwards Recreation",
    des: "Complete recreation of an Awwwards website using pure HTML and CSS, showcasing modern design techniques and responsive layouts.",
    img: "/assets/project1.4.png",
    iconLists: ["/assets/logos/Html5.svg", "/assets/logos/Gitlab.svg", "/assets/logos/JavaScript.svg", "/assets/logos/Figma.svg"],
    link: "https://i523591.hera.fontysict.net/awwwards/",
    pinLabel: "i523591.hera.fontysict.net",
    detailPath: "/awwwards",
  },
  {
    id: 5,
    title: "InnoBeweegLab Observation App",
    des: "Digital fieldwork tool replacing paper-based observation forms at InnoBeweegLab, designed for outdoor use and now actively used in production.",
    img: "/assets/Innobeweeglab/inno.png",
    iconLists: ["/assets/logos/Flutter.svg", "/assets/logos/Figma.svg", "/assets/logos/Tailwind.svg", "/assets/logos/Gitlab.svg"],
    link: "https://youtu.be/OjFUQKNWjEs",
    pinLabel: "youtu.be/OjFUQKNWjEs",
    detailPath: "/innobeweeglab",
    featured: true,
  },
  {
    id: 6,
    title: "MusicSync",
    des: "Personal tool for transferring playlists between Spotify, YouTube Music, and SoundCloud. Keeping libraries in sync across platforms should not be manual work.",
    img: "/assets/MusicSync/homepage.png",
    iconLists: ["/assets/logos/React.svg", "/assets/logos/Tailwind.svg", "/assets/logos/JavaScript.svg", "/assets/logos/Figma.svg"],
    link: "https://youtu.be/ekm5upEG02E",
    pinLabel: "youtu.be/ekm5upEG02E",
    detailPath: "/musicsync",
    featured: true,
  },
  {
    id: 7,
    title: "AI Art Critic",
    des: "A model that analyses art pieces and generates an informed opinion, covering composition, style, context, and emotional tone.",
    img: "",
    iconLists: [],
    comingSoon: true,
  },
];

export const faceAwareDetail = {
  heroTitle: "FaceAware – Exploring Deepfakes in VR",
  heroDescription: "A web-to-VR experience teaching teens about the dangers of facial recognition and deepfakes.",
  overviewText:
    "FaceAware is an interactive learning experience created by a team of six for the Night of the Nerds festival in Eindhoven. The experience begins on the web, where visitors fill in basic personal details, accept a vague user agreement, and scan their face just as they would on a normal website. It then continues in VR, where teens watch a fictional \"data hijack\" unfold and see their own face appear inside deepfake scenes in a stylized control room. Our goal was to show how easily personal data and facial recognition can be misused, and to help teachers start meaningful conversations about digital safety. Within the team, I designed the overall experience, wrote the narrative, and developed the face-scan web flow as well as the interactive elements inside the VR environment.",
  experienceDescription:
    "Visitors begin on the website, where they enter a few personal details, accept a vague user agreement, and scan their face. After this setup, they put on the VR headset and see how their data has been \"hijacked.\" Inside a stylized control room, they watch deepfake clips created from their own likeness and interact with the scene to understand how quickly identity can be manipulated when consent is ignored.",
  finalProductDescription:
    "This video shows the full experience from start to finish, including the web onboarding, the transition into VR, and the final reveal of how the deepfake is used inside the environment.",
  eventDescription:
    "Presented at Night of the Nerds in Eindhoven, experienced by dozens of students.",
  impactDescription:
    "The interactive format made the topic feel real. Students were surprised when their scanned face appeared in completely fabricated scenes, and many immediately started talking about consent, deepfakes, and digital footprints. Several teachers asked for our debrief materials so they could continue the discussion back at school. I also walked away with useful insights for the next version, including the need for clearer language around data consent and better accessibility guidance.",
  toolsDescription:
    "FaceAware was built with a lightweight web stack using HTML, CSS, and JavaScript for the face-scan experience, supported by a Node.js backend that managed session data and routing between visitors. The VR component was prototyped in Figma and implemented with WebXR so we could combine custom interactions with stylized scenes that reveal how the deepfake unfolds.",
  roleItems: [
    "Experience designer for the blended web-to-VR journey",
    "Developed the face-scan onboarding flow",
    "Built interactive elements inside the VR environment",
    "Helped run and guide visitors during the live event",
  ],
  skillsFocus: [
    "Narrative UX & onboarding design",
    "Rapid prototyping in React + VR tooling",
    "Interaction design for immersive experiences",
  ],
};

export const ePostProDetail = {
  heroTitle: "E-PostPro – AI Email Assistant",
  heroDescription: "Four-week passion project that turns messy bullet points into polished, professional emails with AI.",
  heroImage: "/assets/epostpro/epostpro-hero.png",
  overviewText:
    "E-PostPro is a passion project I tackled in four weeks to solve a very real problem: writing clear, confident emails when you are short on time. The idea sparked from my own inbox struggles and from Erika, a Total gas station manager who also wrestles with tone and phrasing. The app lets people type a rough description of what they need to say, then relies on AI (ChatGPT) to craft a complete, well-structured email they can copy, edit, or send.",
  experienceDescription:
    "Users land on a simple interface, jot down a short prompt, pick a tone, and E-PostPro assembles the rest. Under the hood I orchestrated a multi-step prompt flow that cleans up the request, adds missing context, and returns a formatted email with subject line and closing. Each generation is logged so users can iterate, tweak settings, and learn how the AI interprets their inputs.",
  finalProductDescription:
    "This walkthrough demos the full web app: messy prompt in, polished email out. It highlights the onboarding, tone controls, and how the AI output can be copied or refined in seconds.",
  impactDescription:
    "Shipping E-PostPro taught me how to integrate AI into a realistic workflow, write prompts that stay reliable, and design a calming UX for people who find email stressful. User feedback surfaced dozens of improvements I plan to tackle when I rebuild the app with a modern stack.",
  toolsDescription:
    "Built with a hand-coded stack of HTML, CSS, JavaScript, and Node.js, designed first in Figma, and powered by the OpenAI API for the email generations.",
  roleItems: [
    "Designed the full interface in Figma",
    "Implemented the web experience with HTML, CSS, JavaScript, and Node.js",
    "Integrated the AI email generation pipeline",
    "Tested with real users to refine prompts and UX",
  ],
  skillsFocus: [
    "Prompt design & AI workflow integration",
    "Rapid prototyping with vanilla web stacks",
    "UX writing systems for productivity tools",
  ],
  demoVideoLink: "https://youtu.be/7Bp4MxY0FbI",
  liveUrl: "https://e-postpro.vercel.app/",
};

export const b2bMagentoDetail = {
  heroTitle: "B2B Magento 2 - Hyvä Modules",
  heroDescription:
    "Internship project at Sparkable where I built Hyvä-ready B2B modules that replace slow legacy extensions and keep Magento storefronts fast.",
  heroImage: "/assets/B2B/b2b-hero.png",
  overviewText:
    "During my internship at Sparkable I joined their push to modernize Magento 2 storefronts with the Hyvä theme. The storefronts were fast, but many checkout flows and B2B add-ons still relied on legacy third-party modules that didn’t work with Hyvä and slowed everything down. My assignment was to research those gaps, design new Hyvä-compatible modules, and deliver working prototypes Sparkable could ship to real clients.",
  experienceDescription:
    "Across four weeks I mapped the existing customer journeys, then rebuilt key flows such as bulk ordering, Google Address Autofill, and Dutch KVK autofill with Hyvä’s Tailwind + Alpine.js stack. Each module had to match Magento’s backend data structures while keeping the new frontend lightweight, so I paired PHP/XML layout updates with modern Alpine interactions and thorough documentation for handoff.",
  finalProductDescription:
    "Full walkthrough of the modules running inside a Hyvä storefront: bulk order grids, streamlined checkout, and address autofill improvements, all captured to show the performance gains over the legacy stack.",
  impactDescription:
    "This project taught me how to ship production-ready code inside a large Magento ecosystem, collaborate with senior devs, and balance research with delivery. Sparkable plans to reuse parts of my modules for client builds, and my mentor noted that I’m highly self-directed and someone they’d gladly hire again.",
  toolsDescription:
    "Magento 2 with the Hyvä theme and checkout, Tailwind CSS, Alpine.js, JavaScript, XML layout files, HTML/CSS, plus Figma for planning flows and documenting module behaviors.",
  mentorQuote:
    "Thijs is an outstanding mid-program intern: self-directed, thoughtful about his delivery, and able to balance research with shipping code without losing sight of the bigger picture. We’re happy with the modules he built and plan to reuse them with clients. He fits the team well, quiet at first, but he quickly finds his voice, and whenever I gave feedback he acted on it immediately. I’d gladly take ten more like him.",
  roleItems: [
    "Researched gaps between legacy B2B modules and Hyvä",
    "Designed and built Hyvä-compatible bulk order, Google Address Autofill, and KVK autofill modules",
    "Documented implementation details for the Sparkable team",
    "Collaborated with senior Magento developers to validate architecture",
  ],
  skillsFocus: [
    "Hyvä component architecture & Tailwind styling",
    "Alpine.js interaction patterns for Magento",
    "Magento 2 XML/PHP integration workflows",
  ],
  demoVideoLink: "https://youtu.be/FuP3z1JFzEE",
  mediaShots: [
    {
      label: "Checkout acceleration",
      src: "/assets/B2B/checkout%20page.png",
      aspect: "16 / 9",
    },
    {
      label: "Autofill module",
      src: "/assets/B2B/Module%20example.png",
      aspect: "16 / 9",
    },
    {
      label: "Product detail enhancements",
      src: "/assets/B2B/productpage.png",
      aspect: "16 / 9",
    },
  ],
};

export const awwwardsDetail = {
  heroTitle: "Awwwards Recreation - Pure HTML & CSS",
  heroDescription:
    "Two-week exercise recreating a nominated Awwwards site using only semantic HTML and modern CSS, no JavaScript allowed.",
  heroImage: "/assets/awwwards/awwwards-hero.png",
  overviewText:
    "This was a focused two-week challenge where I selected a nominated Awwwards site and rebuilt it from scratch without a single line of JavaScript. I dissected the layout, spacing system, and motion cues, then reproduced them with responsive CSS, fluid typography, and finely tuned transitions. The goal was to push my HTML/CSS fundamentals and prove I could deliver a polished, high-end layout with nothing but the core web stack.",
  experienceDescription:
    "I started by mapping the site in Figma to capture rhythm, grid columns, and breakpoints. Every section was rewritten with semantic markup, CSS custom properties, and clamp-based typography so the recreation stays flexible across viewports. Micro-interactions like cards, sliders, and hover reveals were rebuilt with pure CSS animations, deliberately avoiding JS so I could understand the mechanics inside out.",
  layoutHighlights:
    "Key screens from the recreation, including hero, shipyard detail, carousel moments, and the footer choreography, all rebuilt with pure HTML and CSS.",
  toolsDescription: "HTML, CSS, Figma for measurements, and browser dev tools for inspection.",
  impactDescription:
    "The project sharpened my CSS architecture instincts, helped me spot subtle spacing mistakes faster, and reinforced how much you can ship with clean markup and thoughtful styling. It was a deep dive into responsive design discipline and recreating complex UI without leaning on JavaScript crutches.",
  roleItems: [
    "Selected and analyzed the nominated Awwwards site",
    "Rebuilt every section with semantic HTML and modern CSS",
    "Focused on fluid typography, spacing systems, and CSS-only micro-interactions",
  ],
  skillsFocus: [
    "Responsive layout systems",
    "Fluid typography & animation with pure CSS",
    "Attention to visual detail without JavaScript",
  ],
  mediaShots: [
    { label: "Hero recreation", src: "/assets/awwwards/awwwards-boat-image-slider.png", aspect: "16 / 9" },
    { label: "Shipyard detail", src: "/assets/awwwards/awwwards-shipyard info.png", aspect: "16 / 9" },
    { label: "Footer choreography", src: "/assets/awwwards/awwwards-footer.png", aspect: "16 / 9" },
  ],
  liveUrl: "https://i523591.hera.fontysict.net/awwwards/",
};
export const socialMedia = [
  {
    id: 1,
    img: "/assets/logos/github2.svg",
    link: "https://github.com/Thijs34"
  },
  {
    id: 2,
    img: "/assets/logos/gitlab2.svg",
    link: "https://git.fhict.nl/I523591"
  },
  {
    id: 3,
    img: "/assets/logos/youtube2.svg",
    link: "https://youtube.com/@thijsvandenbroek872?si=3WX0qGm13Ek-lzfo"
  },
];

export const musicSyncDetail = {
  heroTitle: "MusicSync",
  heroDescription:
    "A personal tool for transferring playlists between streaming platforms. Built because I use Spotify, YouTube Music, and SoundCloud and constantly had to rebuild the same playlists by hand.",
  demoVideoLink: "https://youtu.be/ekm5upEG02E",
  overviewText:
    "MusicSync started as a personal frustration. I use multiple streaming platforms depending on where I am or what I am doing, and keeping playlists aligned between them was always a chore. There was no clean tool that handled it well, so I built one. The app connects to your accounts, reads your playlists, and lets you transfer them across platforms in a few clicks. It currently supports Spotify, YouTube Music, and SoundCloud, with more platforms planned as the project grows.",
  howItWorksDescription:
    "Select the source platform, pick the playlist you want to transfer, choose the destination, and the app handles the rest. Tracks are matched by name and artist across platforms, and any that cannot be found automatically are flagged so you can resolve them manually.",
  toolsDescription:
    "Built with React and Tailwind CSS for the frontend, with vanilla JavaScript handling the platform API integrations. Designed in Figma before development to keep the interface clean and focused.",
  platforms: [
    { name: "Spotify",       color: "#1DB954" },
    { name: "YouTube Music", color: "#FF0000" },
    { name: "SoundCloud",    color: "#FF5500" },
  ],
  roleItems: [
    "Designed and built the full application from scratch",
    "Integrated the Spotify, YouTube Music, and SoundCloud APIs",
    "Designed the UI in Figma with a focus on simplicity",
    "Ongoing development: matching logic, error handling, new platforms",
  ],
  skillsFocus: [
    "Third-party API integration and OAuth flows",
    "Frontend development with React and Tailwind CSS",
    "UX design for a multi-step transfer workflow",
  ],
  statusNote:
    "MusicSync is an ongoing personal project. The core transfer flow works across the three supported platforms and the foundation is solid. Next up is improving track-matching accuracy and adding Apple Music and Tidal support.",
  screenshots: [
    { label: "Home", src: "/assets/MusicSync/homepage.png" },
    { label: "Select platform", src: "/assets/MusicSync/music-select.png" },
    { label: "Choose playlist", src: "/assets/MusicSync/playlist-transfer-select.png" },
    { label: "Transfer in progress", src: "/assets/MusicSync/transfer.png" },
  ],
};

export const innoBeweegLabDetail = {
  heroTitle: "InnoBeweegLab Observation Tool",
  heroDescription:
    "A digital fieldwork app that replaced paper observation forms at InnoBeweegLab, built for researchers working outdoors and adopted by the client the day it shipped.",
  promoVideoLink: "https://youtu.be/OjFUQKNWjEs",
  demoVideoLink: "https://youtu.be/IUqY6SqDL2c",
  heroImage: "/assets/Innobeweeglab/Observe-individual.png",
  overviewText:
    "InnoBeweegLab researches how people use public spaces (parks, playgrounds, sports parks) and shares those insights with municipalities to improve local facilities. When I joined the project, observers were writing everything down on paper during fieldwork and re-entering it all into Excel afterwards. Data was entered twice, mistakes were caught too late, and analysis could only start once fieldwork was completely finished. The goal was to build a digital observation tool that would fit into that fieldwork context: quick to use, readable in sunlight, and reliable on any device. On top of the core app, I also developed early concepts for involving the community more directly, an extension the client was open to exploring.",
  observerDescription:
    "Observers log in, open their assigned project, and start recording in real time. The interface is stripped back on purpose: large tap targets, clear labels, minimal options. Visitor counts, facility usage, time spent, and short interview notes, all captured in one flow and validated immediately so nothing gets missed.",
  adminDescription:
    "Admins have full control over the system. They create and manage projects, define which observation fields appear in the app, monitor incoming data as observations happen, and export results when a session is done. Everything that used to happen in Excel after the fact now happens live.",
  toolsDescription:
    "Built with Flutter so the app runs natively on any device without a separate installation. Designed entirely in Figma before development started, styled with Tailwind CSS, and version-controlled on GitLab throughout the project.",
  roleItems: [
    "UX research: user interviews, persona development, and context analysis",
    "Designed the full observer and admin interface in Figma",
    "Developed the complete web application front to back",
    "Deployed and configured the system at InnoBeweegLab",
    "Produced early community-involvement concepts as a follow-up layer",
  ],
  skillsFocus: [
    "Outdoor-first UX design (sunlight, time pressure, varying devices)",
    "User research and stakeholder alignment",
    "Full-stack web development",
    "Data usefulness analysis: separating signal from noise in existing reports",
  ],
  impactDescription:
    "Emma van Dijk, research lead at InnoBeweegLab, liked the app enough to ask me to deploy it at their organisation. It is now in active use, replacing the paper-based process entirely. Observers spend less time on data entry, project leads no longer manually clean Excel files, and errors that used to go unnoticed until after fieldwork are caught the moment they happen.",
  observerShots: [
    { label: "Group observation", src: "/assets/Innobeweeglab/observation-group.png" },
    { label: "Individual observation", src: "/assets/Innobeweeglab/Observe-individual.png" },
    { label: "Location map", src: "/assets/Innobeweeglab/maps.png" },
  ],
  adminShots: [
    { label: "Admin dashboard", src: "/assets/Innobeweeglab/admin-main.png" },
    { label: "Data overview",   src: "/assets/Innobeweeglab/admin-view-data.png" },
    { label: "Edit project",    src: "/assets/Innobeweeglab/admin-edit-project.png" },
  ],
};

// ─── Dutch detail objects ───────────────────────────────────────────────────

export const faceAwareDetailNL: typeof faceAwareDetail = {
  heroTitle: "FaceAware - Deepfakes verkennen in VR",
  heroDescription: "Een web-naar-VR-ervaring die tieners leert over de gevaren van gezichtsherkenning en deepfakes.",
  overviewText:
    "FaceAware is een interactieve leerervaring gemaakt door een team van zes voor het Night of the Nerds festival in Eindhoven. De ervaring begint op het web, waar bezoekers basisgegevens invullen, een vage gebruikersovereenkomst accepteren en hun gezicht scannen, net als op een normale website. Daarna gaat het door in VR, waar tieners een fictieve 'datakaping' zien ontvouwen en hun eigen gezicht zien verschijnen in deepfake-scènes in een gestileerde controlekamer. Ons doel was te laten zien hoe gemakkelijk persoonlijke data en gezichtsherkenning misbruikt kunnen worden, en leraren te helpen zinvolle gesprekken over digitale veiligheid te starten. Binnen het team heb ik de algehele ervaring ontworpen, het verhaal geschreven en de gezichtsscanning-webflow en de interactieve elementen in de VR-omgeving ontwikkeld.",
  experienceDescription:
    "Bezoekers beginnen op de website, waar ze een paar persoonlijke gegevens invullen, een vage gebruikersovereenkomst accepteren en hun gezicht scannen. Na deze voorbereiding zetten ze de VR-bril op en zien ze hoe hun data is 'gekaapt'. In een gestileerde controlekamer bekijken ze deepfake-clips gemaakt van hun eigen gezicht en interageren ze met de scène om te begrijpen hoe snel een identiteit kan worden gemanipuleerd wanneer toestemming wordt genegeerd.",
  finalProductDescription:
    "Deze video toont de volledige ervaring van begin tot eind, inclusief de web-onboarding, de overgang naar VR en de uiteindelijke onthulling van hoe de deepfake in de omgeving wordt gebruikt.",
  eventDescription:
    "Gepresenteerd op Night of the Nerds in Eindhoven, beleefd door tientallen studenten.",
  impactDescription:
    "Het interactieve format maakte het onderwerp voelbaar. Studenten waren verrast toen hun gescande gezicht verscheen in volledig verzonnen scènes, en velen begonnen meteen te praten over toestemming, deepfakes en digitale voetafdrukken. Verschillende docenten vroegen om ons debriefingmateriaal om de discussie op school voort te zetten. Ik nam ook nuttige inzichten mee voor de volgende versie, waaronder de behoefte aan duidelijkere taal rond gegevenstoestemming en betere toegankelijkheidsrichtlijnen.",
  toolsDescription:
    "FaceAware is gebouwd met een lichtgewicht webstack van HTML, CSS en JavaScript voor de gezichtsscanning-ervaring, ondersteund door een Node.js-backend die sessiedata en routering tussen bezoekers beheerde. De VR-component werd geprototyped in Figma en geïmplementeerd met WebXR zodat we aangepaste interacties konden combineren met gestileerde scènes.",
  roleItems: [
    "Experience designer voor de gemengde web-naar-VR-reis",
    "Ontwikkelde de gezichtsscanning-onboardingflow",
    "Bouwde interactieve elementen in de VR-omgeving",
    "Hielp bezoekers begeleiden tijdens het live evenement",
  ],
  skillsFocus: [
    "Narratieve UX & onboarding-ontwerp",
    "Snel prototypen in React + VR-tooling",
    "Interactieontwerp voor meeslepende ervaringen",
  ],
};

export const ePostProDetailNL: typeof ePostProDetail = {
  heroTitle: "E-PostPro - AI e-mailassistent",
  heroDescription: "Vier weken passieproject dat rommelige opsommingsteksten omzet in gepolijste, professionele e-mails met AI.",
  heroImage: ePostProDetail.heroImage,
  overviewText:
    "E-PostPro is een passieproject dat ik in vier weken aanpakte om een echt probleem op te lossen: duidelijke, zelfverzekerde e-mails schrijven wanneer je weinig tijd hebt. Het idee ontstond uit mijn eigen inbox-strubbelingen en van Erika, een Total tankstationmanager die ook worstelt met toon en formulering. De app laat mensen een ruwe omschrijving typen van wat ze willen zeggen, waarna AI (ChatGPT) een complete, goed gestructureerde e-mail opstelt die ze kunnen kopiëren, bewerken of versturen.",
  experienceDescription:
    "Gebruikers komen op een eenvoudige interface, schrijven een korte prompt, kiezen een toon en E-PostPro regelt de rest. Achter de schermen orkestreerde ik een meerstaps-promptflow die het verzoek opschoont, ontbrekende context toevoegt en een geformateerde e-mail teruggeeft met onderwerpregel en afsluiting. Elke generatie wordt gelogd zodat gebruikers kunnen itereren, instellingen kunnen aanpassen en kunnen zien hoe de AI hun invoer interpreteert.",
  finalProductDescription:
    "Deze walkthrough demonstreert de volledige web-app: rommelige prompt in, gepolijste e-mail uit. Het toont de onboarding, toonbediening en hoe de AI-output in seconden gekopieerd of verfijnd kan worden.",
  impactDescription:
    "Het opleveren van E-PostPro leerde me hoe ik AI in een realistische workflow integreer, betrouwbare prompts schrijf en een rustige UX ontwerp voor mensen die e-mail stressvol vinden. Gebruikersfeedback leverde tientallen verbeteringen op die ik wil aanpakken bij het herbouwen van de app met een moderne stack.",
  toolsDescription:
    "Gebouwd met een handgecodeerde stack van HTML, CSS, JavaScript en Node.js, eerst ontworpen in Figma en aangedreven door de OpenAI API voor e-mailgeneraties.",
  roleItems: [
    "De volledige interface ontworpen in Figma",
    "De webervaring geïmplementeerd met HTML, CSS, JavaScript en Node.js",
    "De AI e-mailgeneratie-pipeline geïntegreerd",
    "Getest met echte gebruikers om prompts en UX te verfijnen",
  ],
  skillsFocus: [
    "Prompt-ontwerp & AI-workflowintegratie",
    "Snel prototypen met vanilla webstacks",
    "UX-schrijfsystemen voor productiviteitstools",
  ],
  demoVideoLink: ePostProDetail.demoVideoLink,
  liveUrl: ePostProDetail.liveUrl,
};

export const b2bMagentoDetailNL: typeof b2bMagentoDetail = {
  heroTitle: "B2B Magento 2 - Hyvä modules",
  heroDescription:
    "Stage-project bij Sparkable waar ik Hyvä-ready B2B-modules bouwde die trage legacy-extensies vervangen en Magento-storefronts snel houden.",
  heroImage: b2bMagentoDetail.heroImage,
  overviewText:
    "Tijdens mijn stage bij Sparkable sloot ik me aan bij hun push om Magento 2-storefronts te moderniseren met het Hyvä-thema. De storefronts waren snel, maar veel checkout-flows en B2B-add-ons leunden nog op legacy third-party modules die niet werkten met Hyvä en alles vertraagden. Mijn opdracht was deze hiaten te onderzoeken, nieuwe Hyvä-compatibele modules te ontwerpen en werkende prototypes te leveren die Sparkable aan echte klanten kon leveren.",
  experienceDescription:
    "In 5 maanden bracht ik de bestaande klantreizen in kaart en herbouwde ik sleutelflows zoals bulkbestellen, Google Address Autofill en Nederlandse KVK-autofill met Hyvä's Tailwind + Alpine.js-stack. Elke module moest overeenkomen met Magento's backend-datastructuren terwijl het nieuwe frontend lichtgewicht bleef, dus combineerde ik PHP/XML-layout-updates met moderne Alpine-interacties en grondige documentatie voor overdracht.",
  finalProductDescription:
    "Volledige walkthrough van de modules in een Hyvä-storefront: bulk-orderroosters, gestroomlijnde checkout en verbeteringen van adresautofill, allemaal vastgelegd om de prestatiewinst ten opzichte van de legacy-stack te tonen.",
  impactDescription:
    "Dit project leerde me hoe ik productieklare code lever in een groot Magento-ecosysteem, samenwerk met senior devs en onderzoek balanceer met oplevering. Sparkable is van plan onderdelen van mijn modules te hergebruiken voor klantbuilds, en mijn mentor merkte op dat ik sterk zelfsturend ben en iemand is die ze graag opnieuw zou aannemen.",
  toolsDescription:
    "Magento 2 met het Hyvä-thema en checkout, Tailwind CSS, Alpine.js, JavaScript, XML-layoutbestanden, HTML/CSS, plus Figma voor het plannen van flows en documenteren van modulegedrag.",
  mentorQuote: b2bMagentoDetail.mentorQuote,
  roleItems: [
    "Hiaten onderzocht tussen legacy B2B-modules en Hyvä",
    "Hyvä-compatibele bulk-order-, Google Address Autofill- en KVK-autofill-modules ontworpen en gebouwd",
    "Implementatiedetails gedocumenteerd voor het Sparkable-team",
    "Samengewerkt met senior Magento-developers om architectuur te valideren",
  ],
  skillsFocus: [
    "Hyvä-componentarchitectuur & Tailwind-styling",
    "Alpine.js interactiepatronen voor Magento",
    "Magento 2 XML/PHP integratieflows",
  ],
  demoVideoLink: b2bMagentoDetail.demoVideoLink,
  mediaShots: b2bMagentoDetail.mediaShots,
};

export const awwwardsDetailNL: typeof awwwardsDetail = {
  heroTitle: "Awwwards recreatie - pure HTML en CSS",
  heroDescription:
    "Twee weken durende oefening waarbij een genomineerde Awwwards-site opnieuw werd gemaakt met alleen semantische HTML en moderne CSS, zonder JavaScript.",
  heroImage: awwwardsDetail.heroImage,
  overviewText:
    "Dit was een gerichte uitdaging van twee weken waarin ik een genomineerde Awwwards-site van nul herbouwde zonder JavaScript. Ik analyseerde de layout, de afstanden tussen onderdelen en de animaties, en bouwde alles opnieuw met responsieve CSS, vloeiende typografie en nette overgangen. Het doel was mijn HTML/CSS-basiskennis te testen en te laten zien dat ik met alleen de kern van het web een strakke, professionele layout kan neerzetten.",
  experienceDescription:
    "Ik begon met het in kaart brengen van de site in Figma om het ritme, rasterkolommen en breekpunten vast te leggen. Elke sectie werd herschreven met semantische opmaak, CSS-aangepaste eigenschappen en clamp-gebaseerde typografie zodat de recreatie flexibel blijft over alle weergaven. Micro-interacties zoals kaarten, schuifregelaars en hover-onthullingen werden herbouwd met pure CSS-animaties, waarbij JS opzettelijk werd vermeden zodat ik de mechanica van binnen en buiten kon begrijpen.",
  layoutHighlights:
    "Sleutelschermen uit de recreatie, zoals de hero, scheepswerfinformatie, carrouselmomenten en footer, allemaal herbouwd met pure HTML en CSS.",
  toolsDescription: "HTML, CSS, Figma voor metingen en browser dev tools voor inspectie.",
  impactDescription:
    "Dit project maakte mijn gevoel voor CSS-structuur scherper, hielp me subtiele afstandsfouten sneller te zien en liet zien hoeveel je kunt bereiken met schone opmaak en doordachte styling. Het gaf me veel inzicht in responsief ontwerp en in het nabouwen van complexe interfaces zonder op JavaScript te leunen.",
  roleItems: [
    "De genomineerde Awwwards-site geselecteerd en geanalyseerd",
    "Elke sectie herbouwd met semantische HTML en moderne CSS",
    "Gefocust op vloeiende typografie, consistente afstanden en CSS-only micro-interacties",
  ],
  skillsFocus: [
    "Responsieve layoutsystemen",
    "Vloeiende typografie & animatie met pure CSS",
    "Aandacht voor visueel detail zonder JavaScript",
  ],
  mediaShots: awwwardsDetail.mediaShots,
  liveUrl: awwwardsDetail.liveUrl,
};

export const musicSyncDetailNL: typeof musicSyncDetail = {
  heroTitle: "MusicSync",
  heroDescription:
    "Een persoonlijk hulpmiddel voor het overzetten van afspeellijsten tussen streamingplatforms. Gebouwd omdat ik Spotify, YouTube Music en SoundCloud gebruik en voortdurend dezelfde afspeellijsten handmatig moest herbouwen.",
  demoVideoLink: musicSyncDetail.demoVideoLink,
  overviewText:
    "MusicSync begon als een persoonlijke frustratie. Ik gebruik meerdere streamingplatforms afhankelijk van waar ik ben of wat ik doe, en afspeellijsten gesynchroniseerd houden was altijd een karwei. Er was geen goed hulpmiddel dat het netjes aanpakte, dus bouwde ik er een. De app verbindt met je accounts, leest je afspeellijsten en laat je ze in een paar klikken overzetten naar andere platforms. Het ondersteunt momenteel Spotify, YouTube Music en SoundCloud, met meer platforms gepland naarmate het project groeit.",
  howItWorksDescription:
    "Selecteer het bronplatform, kies de afspeellijst die je wilt overzetten, kies de bestemming en de app regelt de rest. Nummers worden gematcht op naam en artiest tussen platforms, en nummers die niet automatisch gevonden worden, zijn gemarkeerd zodat je ze handmatig kunt oplossen.",
  toolsDescription:
    "Gebouwd met React en Tailwind CSS voor de frontend, met vanilla JavaScript voor de platform-API-integraties. Ontworpen in Figma voor ontwikkeling om de interface schoon en gefocust te houden.",
  platforms: musicSyncDetail.platforms,
  roleItems: [
    "De volledige applicatie van begin tot eind ontworpen en gebouwd",
    "De Spotify-, YouTube Music- en SoundCloud-API's geïntegreerd",
    "De UI in Figma ontworpen met focus op eenvoud",
    "Doorlopende ontwikkeling: matchinglogica, foutafhandeling, nieuwe platforms",
  ],
  skillsFocus: [
    "Third-party API-integratie en OAuth-flows",
    "Frontend-ontwikkeling met React en Tailwind CSS",
    "UX-ontwerp voor een meerstaps-overzetworkflow",
  ],
  statusNote:
    "MusicSync is een doorlopend persoonlijk project. De kern-overzetflow werkt op de drie ondersteunde platforms en de basis is solide. Volgende stap is het verbeteren van de nauwkeurigheid van het matchen van nummers en het toevoegen van Apple Music- en Tidal-ondersteuning.",
  screenshots: musicSyncDetail.screenshots,
};

export const innoBeweegLabDetailNL: typeof innoBeweegLabDetail = {
  heroTitle: "InnoBeweegLab Observatietool",
  heroDescription:
    "Een digitale veldwerk-app die papieren observatieformulieren bij InnoBeweegLab verving, gebouwd voor onderzoekers die buiten werken en de dag van oplevering al in gebruik genomen.",
  promoVideoLink: innoBeweegLabDetail.promoVideoLink,
  demoVideoLink: innoBeweegLabDetail.demoVideoLink,
  heroImage: innoBeweegLabDetail.heroImage,
  overviewText:
    "InnoBeweegLab onderzoekt hoe mensen openbare ruimten gebruiken (parken, speeltuinen, sportparken) en deelt die inzichten met gemeenten om lokale voorzieningen te verbeteren. Toen ik bij het project aansloot, schreven waarnemers alles op papier tijdens veldwerk en voerden ze het achteraf opnieuw in Excel in. Data werd twee keer ingevoerd, fouten werden te laat opgemerkt en analyse kon pas beginnen als het veldwerk volledig klaar was. Het doel was een digitale observatietool te bouwen die past in die veldwerkcontext: snel te gebruiken, leesbaar in zonlicht en betrouwbaar op elk apparaat. Bovenop de kern-app ontwikkelde ik ook vroege concepten om de gemeenschap directer te betrekken, een uitbreiding die de klant open stond om te verkennen.",
  observerDescription:
    "Waarnemers loggen in, openen hun toegewezen project en beginnen in realtime te registreren. De interface is bewust teruggebracht: grote taptargets, duidelijke labels, minimale opties. Bezoekersaantallen, faciliteitsgebruik, doorgebrachte tijd en korte interviewnotities worden allemaal vastgelegd in één flow en direct gevalideerd zodat niets wordt gemist.",
  adminDescription:
    "Beheerders hebben volledige controle over het systeem. Ze maken en beheren projecten, bepalen welke observatievelden in de app verschijnen, monitoren binnenkomende data terwijl observaties plaatsvinden en exporteren resultaten wanneer een sessie klaar is. Alles wat vroeger achteraf in Excel gebeurde, gebeurt nu live.",
  toolsDescription:
    "Gebouwd met Flutter zodat de app native op elk apparaat draait zonder aparte installatie. Volledig ontworpen in Figma voor ontwikkeling, opgemaakt met Tailwind CSS en gedurende het hele project versiebeheerd op GitLab.",
  roleItems: [
    "UX-onderzoek: gebruikersinterviews, persona-ontwikkeling en contextanalyse",
    "De volledige waarnemer- en beheerderinterface in Figma ontworpen",
    "De complete webapplicatie van voor tot achter ontwikkeld",
    "Het systeem geïmplementeerd en geconfigureerd bij InnoBeweegLab",
    "Vroege community-betrokkenheidconcepten geproduceerd als follow-up laag",
  ],
  skillsFocus: [
    "Outdoor-gerichte UX-ontwerp (zonlicht, tijdsdruk, variërende apparaten)",
    "Gebruikersonderzoek en afstemming met stakeholders",
    "Full-stack webontwikkeling",
    "Data-bruikbaarheidsanalyse: signaal van ruis scheiden in bestaande rapporten",
  ],
  impactDescription:
    "Emma van Dijk, onderzoeksleider bij InnoBeweegLab, vond de app goed genoeg om me te vragen deze bij hun organisatie te implementeren. De app is nu actief in gebruik en vervangt het papieren proces volledig. Waarnemers besteden minder tijd aan gegevensinvoer, projectleiders hoeven geen Excel-bestanden meer handmatig op te schonen en fouten die vroeger onopgemerkt bleven tot na het veldwerk worden nu direct opgemerkt.",
  observerShots: innoBeweegLabDetail.observerShots,
  adminShots: innoBeweegLabDetail.adminShots,
};
