/* -------------------------------------------------------------------------
 * en-US — tradução do bundle padrão.
 *
 * Tipado como `Resources`: o compilador recusa chave faltante, chave a mais
 * ou lista com número de itens diferente do pt-BR. Para conferir o que mudou
 * em relação ao original, compare item a item com `pt-BR.ts` — a ordem das
 * chaves e dos `id` é a mesma nos dois arquivos.
 *
 * Itens sinalizados para revisão humana:
 * · `contact.hours` e os horários do mockup de conversa foram convertidos
 *   para o formato de 12 horas (AM/PM), convenção dos EUA.
 * · `contact.address` acrescenta "Brazil" ao endereço.
 * · `mockups.browserUrl` / `mockups.projectUrl` são domínios fictícios.
 * · `contact.defaultMessage` e `contactPage.waMessage.*` abrem a conversa em
 *   inglês, embora o atendimento seja em português.
 * · O slogan da marca não é traduzido — vive em `src/config/site.ts`.
 * ---------------------------------------------------------------------- */

import type { Resources } from "../types";

export const enUS: Resources = {
  meta: {
    title: "Vecttex — Professional websites and apps for businesses",
    description:
      "Websites and apps for businesses that want to be taken seriously online. Direct support on WhatsApp throughout Brazil.",
    /* O slogan é ativo de marca e permanece em português. */
    ogTitle: "Vecttex — Conexão. Inovação. Tecnologia.",
    ogDescription:
      "Websites and apps for businesses that want to be taken seriously online. Direct support on WhatsApp.",
    ogLocale: "en_US",
  },

  brand: {
    descriptor: "Technology and Development",
    claim:
      "Websites and apps for businesses that want to be taken seriously online.",
  },

  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact",
  },

  common: {
    requestQuote: "Request a quote",
    talkOnWhatsapp: "Chat on WhatsApp",
    sendProject: "Send my project",
    seeMore: "See more",
    openMenuAria: "Open menu",
    closeAria: "Close",
    whatsappAria: "Chat on WhatsApp",
    teamPhotoAlt: "The Vecttex team working on a project",
  },

  contact: {
    address: "Gravataí - Rio Grande do Sul, Brazil",
    coverage: "Online service throughout Brazil",
    hours:
      "· Monday to Friday, 9:00 AM to 7:00 PM\n· Saturday, 9:00 AM to 1:00 PM",
    defaultMessage:
      "Hi! I came from the Vecttex website and I'd like to talk about a project.",
    labels: {
      email: "Email",
      address: "Address",
      coverage: "Service area",
      hours: "Hours",
    },
  },

  footer: {
    nav: "Navigation",
    projects: "Projects",
    contact: "Contact",
    credit: "Made with attention to every detail",
  },

  fab: {
    status: "Online support",
    lead: "Get your questions answered right now by our team on WhatsApp.",
    action: "Start a conversation",
  },

  /* ------------------------------------------------------------------ */
  /*  HOME                                                              */
  /* ------------------------------------------------------------------ */
  home: {
    hero: {
      badge: "Websites, apps and solutions for businesses",
      title:
        "Websites and apps<br/>ready for<br/><accent>your business</accent>",
      lead: "We build websites and apps aligned with your business — with direct support on WhatsApp, from the first contact to delivery.",
      cta: "See our services",
    },

    stats: [
      { value: "6", label: "Project formats" },
      { value: "100%", label: "Adapted for mobile" },
      { value: "1:1", label: "Support on WhatsApp" },
      { value: "5", label: "Stages from briefing to delivery" },
    ],

    pillars: [
      { id: "fit", label: "A project aligned with your business" },
      { id: "whatsapp", label: "WhatsApp straight to the people building it" },
      { id: "craft", label: "Craftsmanship and performance" },
    ],

    about: {
      eyebrow: "Who we are",
      title:
        "A team focused on<brMd/> making your company<brMd/><accent>look like what it is.</accent>",
      lead: "A technology team that starts by understanding your business — not the layout. Every project begins with what your company needs to communicate.",
      cta: "Get to know Vecttex",
    },

    services: {
      eyebrow: "Services",
      title: "What we deliver<br/> in every project.",
      lead: "From the first draft to delivery, we handle everything that makes a website look professional — and work like it.",
      link: "See all services",
    },

    types: {
      eyebrow: "Project types",
      title: "Choose the right format<brSm/> for your goal.",
      lead: "Every business communicates differently. We build different formats — and also projects that break the mold entirely.",
      link: "See all formats",
    },

    process: {
      eyebrow: "How it works",
      title: "A process<br/> <accent>with no surprises.</accent>",
      lead: "From the first “good morning” on WhatsApp to delivery, you know exactly which stage your project is at.",
      cta: "See the full process",
    },
  },

  /* ------------------------------------------------------------------ */
  /*  ABOUT                                                             */
  /* ------------------------------------------------------------------ */
  about: {
    hero: {
      eyebrow: "About us",
      title:
        "We are the team behind the <accent>websites that present</accent> your business.",
      lead: "Vecttex is a technology company dedicated to businesses that want a digital presence worthy of what they offer in the real world — websites, mobile applications and digital solutions for companies.",
    },

    manifesto: {
      eyebrow: "How we work",
      title:
        "A website is not just a page.<br/><accent>It is the first impression.</accent>",
      paragraphs: [
        "Many excellent businesses are still judged by a digital presence that does not match the quality of what they deliver. Our job is to correct that mismatch.",
        "Every project is built on top of the client's goal — whether that is a corporate website, a landing page, an online catalog or something outside the usual. The format and the level of customization are defined together with you, according to what the project calls for.",
      ],
    },

    devices: {
      web: { label: "Web", desc: "A wide, well-structured layout" },
      mobile: { label: "Mobile", desc: "Perfect on a phone screen" },
    },

    principles: {
      eyebrow: "Our principles",
      title: "What guides every project",
      lead: "Four commitments we apply to every job, regardless of the size of the company.",
      items: [
        {
          id: "clarity",
          title: "Clarity above all",
          desc: "We explain each stage in plain language. You are never left wondering what is happening with your project.",
        },
        {
          id: "objective",
          title: "Goal before layout",
          desc: "Before thinking about design, we understand what your business needs to communicate, and to whom.",
        },
        {
          id: "craft",
          title: "Premium finish",
          desc: "Typography, spacing, speed and detail. That is what separates an amateur website from a professional one.",
        },
        {
          id: "closeness",
          title: "Close support",
          desc: "You talk to the team developing your project, directly on WhatsApp.",
        },
      ],
    },

    links: [
      {
        id: "services",
        label: "Services",
        title: "What we do",
        desc: "What is included in every project and the formats we build.",
      },
      {
        id: "process",
        label: "Process",
        title: "How we work",
        desc: "The five stages of the project, from first contact to delivery.",
      },
      {
        id: "contact",
        label: "Contact",
        title: "Talk to us",
        desc: "Tell us what you need and get a reply from our team on WhatsApp.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  SERVICES                                                          */
  /* ------------------------------------------------------------------ */
  services: {
    hero: {
      eyebrow: "Services",
      title:
        "Everything your company needs to <accent>exist properly online.</accent>",
      lead: "Websites and apps aligned with your business — and the method we use to get there, from first contact to delivery.",
    },

    deliverables: {
      eyebrow: "What we deliver",
      title: "Included in every project",
      lead: "Whatever format you choose, these items are part of every website we build.",
      items: [
        {
          id: "design",
          title: "Design aligned with your business",
          desc: "A layout tailored to your company's identity, with a clear visual hierarchy and a presentation that inspires confidence at first glance.",
        },
        {
          id: "mobile",
          title: "Perfect on mobile",
          desc: "Your website flawless on the phone, the tablet and the computer — because most of your customers arrive from a phone.",
        },
        {
          id: "performance",
          title: "Light and fast",
          desc: "Optimized images, organized code and fast loading for smooth browsing on any connection.",
        },
        {
          id: "seo",
          title: "Ready for Google",
          desc: "Titles, descriptions and content structure prepared so that your business is easy to find.",
        },
        {
          id: "contact",
          title: "Integrated contact",
          desc: "Buttons and direct links to WhatsApp, turning website visits into real conversations with your company.",
        },
        {
          id: "support",
          title: "Team support",
          desc: "Questions, adjustments and follow-up with human, direct support, during the project and after delivery.",
        },
      ],
    },

    types: {
      eyebrow: "Project types",
      title: "Formats we build",
      lead: "Choose the format that matches your goal — or describe what you need and we will put the solution together with you.",
      items: [
        {
          id: "institucional",
          title: "Corporate website",
          tag: "Authority",
          desc: "Your company's official presence: history, services, differentiators and contact channels in one place.",
          points: ["Inner pages", "About and services", "Integrated contact"],
        },
        {
          id: "apresentacao",
          title: "Presentation website",
          tag: "Showcase",
          desc: "Ideal for venues that need to show the space, the menu, the services and the location.",
          points: ["Photo gallery", "Location and hours", "Quick contact"],
        },
        {
          id: "landing",
          title: "Landing page",
          tag: "Conversion",
          desc: "A focused, persuasive page created to promote an offer, a service or a specific campaign.",
          points: ["Action-focused", "Fast loading", "Ready for ads"],
        },
        {
          id: "portfolio",
          title: "Portfolio",
          tag: "Work",
          desc: "For professionals and studios that need to display projects, cases and results elegantly.",
          points: ["Organized galleries", "Project pages", "Editorial look"],
        },
        {
          id: "catalogo",
          title: "Online catalog",
          tag: "Products",
          desc: "Your products and services organized by category, with orders or quotes straight through WhatsApp.",
          points: [
            "Categories and filters",
            "Product sheets",
            "Orders via WhatsApp",
          ],
        },
        {
          id: "personalizado",
          title: "Custom projects",
          tag: "On demand",
          desc: "Need something different? We study the need and build a solution specific to your case.",
          points: ["Tailored scope", "Specific features", "Prior analysis"],
        },
      ],
      custom: {
        title: "Your project does not fit any of these formats?",
        desc: "No problem. We assess your need and build a tailor-made solution, with the scope defined together with you.",
        cta: "Describe my project",
      },
    },

    process: {
      eyebrow: "How it works",
      title: "Five stages,<br/> <accent>from briefing to delivery.</accent>",
      lead: "A transparent process, designed for people who do not know technology and just want a professional website up and running — without the headache.",
      items: [
        {
          id: "discovery",
          title: "We understand your business",
          desc: "We talk on WhatsApp to get to know your company, the audience you serve and the goal of the project.",
          detail: [
            "Initial conversation with no commitment",
            "Mapping of goals and references",
            "A clear definition of what the website needs to solve",
          ],
        },
        {
          id: "planning",
          title: "We plan the project",
          desc: "We define the sections, the structure of the pages and the ideal format for what you need to present.",
          detail: [
            "Structure and page map",
            "Visual direction and content organization",
            "Scope and deadline agreed before we start",
          ],
        },
        {
          id: "development",
          title: "We build the website",
          desc: "Our team puts the project together with a look aligned to your business, a mobile version and attention to every detail.",
          detail: [
            "Project design and development",
            "Responsive version for every device",
            "Navigation and performance testing",
          ],
        },
        {
          id: "presentation",
          title: "We present the result",
          desc: "You see the finished project, browse every screen and point out what you want to change. Adjustments happen at this stage.",
          detail: [
            "Full presentation of the project",
            "You point out any adjustments you want",
            "We refine it until it matches what you expect",
          ],
        },
        {
          id: "delivery",
          title: "Approval and delivery",
          desc: "With everything agreed, we publish the project and remain available for questions and support.",
          detail: [
            "Publication of the approved project",
            "Usage guidance",
            "Ongoing support on WhatsApp",
          ],
        },
      ],
    },

    prepare: {
      eyebrow: "Before we start",
      title: "What helps<br/> <accent>speed up the project.</accent>",
      lead: "None of this is required to start the conversation — but the more information, the faster we reach the ideal result.",
      cta: "Start my project",
      items: [
        {
          id: "business",
          title: "Business information",
          desc: "Name, what you do, differentiators, hours and ways to get in touch.",
        },
        {
          id: "media",
          title: "Images and logo",
          desc: "Photos of the space, the products or the team. If you do not have them, we will guide you.",
        },
        {
          id: "goal",
          title: "Goal of the website",
          desc: "Receiving contacts, showing the catalog, promoting a specific service.",
        },
        {
          id: "references",
          title: "References you like",
          desc: "Websites you liked help us get the visual direction right faster.",
        },
      ],
    },

    extras: {
      eyebrow: "Additional services",
      title: "Beyond the website, if you<brSm/> need more.",
      lead: "Optional services you can add to the project — with the scope agreed before we start.",
      items: [
        {
          id: "hosting",
          title: "Website hosting",
          desc: "We take care of hosting so that you do not have to worry about the technical side: your website online, stable and monitored.",
          highlight:
            "Optional service — the terms are agreed directly with you, with no lock-in.",
          points: [
            "Website online and stable",
            "Technical side on us",
            "Cancel freely at any time",
          ],
        },
        {
          id: "app",
          title: "Mobile app",
          desc: "Beyond the website, we also develop mobile apps. What the app will do is defined together with you.",
          highlight:
            "Features are defined with the client — nothing is promised before the project is analyzed.",
          points: [
            "Scope defined in conversation",
            "Project assessed case by case",
            "Development after alignment",
          ],
        },
      ],
    },

    faq: {
      eyebrow: "Frequently asked questions",
      title: "Everything clear,<br/> from the start.",
      lead: "If any question is not answered here, just message us on WhatsApp using the button in the corner of the screen.",
      items: [
        {
          id: "scope",
          q: "Do you only build presentation websites?",
          a: "No. Presentation websites are one part of what we do. We also build corporate websites, landing pages, portfolios, online catalogs and custom projects as needed.",
        },
        {
          id: "support",
          q: "How does support work?",
          a: "Support happens on WhatsApp, directly and personally. You talk to our team to ask questions and follow the project, during development and after delivery.",
        },
        {
          id: "materials",
          q: "Do I need a logo and photos ready to start?",
          a: "It is not required. The more material you have, the faster the project moves — but if you do not have it yet, we will guide you on what to produce and move ahead with what is available.",
        },
        {
          id: "apps",
          q: "Do you develop apps?",
          a: "Yes, the mobile app is an additional service. The features are defined together with the client, after we understand the needs of the project.",
        },
        {
          id: "quote",
          q: "How do I request a quote?",
          a: "Just message us on WhatsApp or fill in the form on the contact page. Once we understand the scope of your project, we send you all the terms directly.",
        },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  /*  CONTACT                                                           */
  /* ------------------------------------------------------------------ */
  contactPage: {
    hero: {
      eyebrow: "Contact",
      title: "Let's talk about <accent>your project.</accent>",
      lead: "Tell us a bit about your business and what you need. Our team replies on WhatsApp with close, direct support.",
    },

    form: {
      eyebrow: "Quick form",
      title: "Send the details",
      lead: "Fill in the fields and the summary of your project will be sent straight to our WhatsApp.",
      nameLabel: "Your name *",
      namePlaceholder: "What should we call you",
      companyLabel: "Company",
      companyPlaceholder: "Your business name",
      phoneLabel: "WhatsApp",
      phonePlaceholder: "(00) 00000-0000",
      typeLabel: "Project type",
      typeUnknown: "I'm not sure yet",
      messageLabel: "About the project",
      messagePlaceholder:
        "Tell us what your company does and what you expect from the website...",
      submit: "Send via WhatsApp",
      sent: "Conversation opened on WhatsApp! If it did not open, click the green button in the corner of the screen.",
      privacy:
        "When you submit, a WhatsApp conversation opens with the summary filled in. No data is stored on this website.",
    },

    waMessage: {
      greeting: "Hi! My name is {{name}}.",
      noName: "(no name)",
      company: "Company: {{company}}",
      phone: "Contact: {{phone}}",
      type: "Project type: {{type}}",
      fallback: "I would like to talk about a project.",
    },

    channel: {
      eyebrow: "Main channel",
      title: "WhatsApp",
      desc: "The fastest way to reach our team. We answer questions, send quotes and follow the project through here.",
    },
  },

  notFound: {
    code: "Error 404",
    title: "Page not <accent>found</accent>",
    lead: "The address you tried to reach does not exist. Go back to the home page or talk to our team using the WhatsApp button in the corner of the screen.",
    home: "Back to home",
    contact: "Go to contact",
  },

  /* ------------------------------------------------------------------ */
  /*  Shared blocks                                                     */
  /* ------------------------------------------------------------------ */
  whatsappSupport: {
    eyebrow: "Support",
    title: "Support on WhatsApp,<br/><accent>with real people.</accent>",
    lead: "No unanswered forms or ticket systems. You talk directly to the person developing your project — during development and after delivery.",
  },

  cta: {
    title:
      "Tell us about your business.<br/><accent>We will handle the rest.</accent>",
    lead: "A quick conversation on WhatsApp is enough for us to understand your project — and there is no commitment.",
  },

  mockups: {
    browserUrl: "yourcompany.com",
    projectUrl: "vecttex.com.br/your-project",
    chat: {
      title: "{{brand}} · Support",
      status: "online now",
      inputPlaceholder: "Message",
      messages: [
        { text: "Hi! I want a website for my company 👋", time: "9:12 AM" },
        {
          text: "Hello! That's great. Tell me a bit about your business?",
          time: "9:12 AM",
        },
        {
          text: "I have a restaurant and I need to show the menu",
          time: "9:14 AM",
        },
        {
          text: "Perfect. I'll set up the structure, choose the sections and present the finished project ✅",
          time: "9:15 AM",
        },
      ],
    },
  },
};
