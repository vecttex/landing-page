/* -------------------------------------------------------------------------
 * pt-BR — idioma padrão e fonte da verdade da estrutura de conteúdo.
 *
 * O tipo `Resources` é derivado deste arquivo (`src/i18n/types.ts`), então os
 * demais idiomas são obrigados pelo compilador a ter exatamente as mesmas
 * chaves e o mesmo número de itens em cada lista.
 *
 * Convenções:
 * · Só texto traduzível. Ícones, imagens, rotas e contato ficam em
 *   `src/config/site.ts` e são unidos pelo `id` de cada item.
 * · Títulos com marcação usam <Trans>: <br/>, <brSm/> e <brMd/> são as
 *   quebras de linha (as duas últimas só a partir de sm:/md:) e
 *   <accent>…</accent> é o trecho em degradê dourado.
 * · Interpolação no padrão do i18next: {{variavel}}.
 * ---------------------------------------------------------------------- */

export const ptBR = {
  /* Tags do documento — aplicadas por components/DocumentMeta.tsx */
  meta: {
    title: "Vecttex — Sites e aplicativos profissionais para empresas",
    description:
      "Sites e aplicativos para empresas que querem ser levadas a sério na internet. Atendimento direto no WhatsApp para todo o Brasil.",
    ogTitle: "Vecttex — Conexão. Inovação. Tecnologia.",
    ogDescription:
      "Sites e aplicativos para empresas que querem ser levadas a sério na internet. Atendimento direto no WhatsApp.",
    ogLocale: "pt_BR",
  },

  brand: {
    descriptor: "Tecnologia e Desenvolvimento",
    /* Descrição curta da empresa. Usada no rodapé e nas meta tags — em mais
       nenhum lugar, para não repetir o mesmo parágrafo em várias páginas. */
    claim:
      "Sites e aplicativos para empresas que querem ser levadas a sério na internet.",
  },

  nav: {
    home: "Início",
    about: "Sobre",
    services: "Serviços",
    contact: "Contato",
  },

  common: {
    requestQuote: "Pedir orçamento",
    talkOnWhatsapp: "Falar no WhatsApp",
    sendProject: "Enviar meu projeto",
    seeMore: "Ver mais",
    openMenuAria: "Abrir menu",
    closeAria: "Fechar",
    whatsappAria: "Falar no WhatsApp",
    teamPhotoAlt: "Equipe da Vecttex trabalhando em um projeto",
  },

  contact: {
    address: "Gravataí - Rio Grande do Sul",
    coverage: "Atendimento on-line para todo o Brasil",
    hours: "· Segunda a sexta das 09:00 às 19:00\n· Sábado das 09:00 às 13:00",
    defaultMessage:
      "Olá! Vim pelo site da Vecttex e gostaria de conversar sobre um projeto.",
    labels: {
      email: "E-mail",
      address: "Endereço",
      coverage: "Atendimento",
      hours: "Horários",
    },
  },

  footer: {
    nav: "Navegação",
    projects: "Projetos",
    contact: "Contato",
    credit: "Feito com atenção a cada detalhe",
  },

  /* Botão flutuante de WhatsApp, presente em todas as páginas. */
  fab: {
    status: "Atendimento on-line",
    lead: "Tire suas dúvidas agora com a nossa equipe pelo WhatsApp.",
    action: "Iniciar conversa",
  },

  /* ------------------------------------------------------------------ */
  /*  HOME — vitrine: cada bloco resume um tema aprofundado numa página  */
  /* ------------------------------------------------------------------ */
  home: {
    hero: {
      badge: "Websites, aplicativos e soluções para empresas",
      title:
        "Sites e aplicativos<br/>prontos para<br/><accent>a sua empresa</accent>",
      lead: "Desenvolvemos sites e aplicativos alinhados ao seu negócio — com atendimento direto no WhatsApp, do primeiro contato à entrega.",
      cta: "Ver nossos serviços",
    },

    /* Números do hero. São os únicos do site: o bloco equivalente da página
       Sobre foi removido por repetir a mesma ideia com dados conflitantes.
       Todos são verificáveis no próprio site — nada de promessa. */
    stats: [
      { value: "6", label: "Formatos de projeto" },
      { value: "100%", label: "Adaptados ao celular" },
      { value: "1:1", label: "Atendimento no WhatsApp" },
      { value: "5", label: "Etapas do briefing à entrega" },
    ],

    /* Versão curta dos três pilares (TrustStrip). Cada um é desenvolvido
       por extenso em uma página específica. */
    pillars: [
      { id: "fit", label: "Projeto alinhado ao seu negócio" },
      { id: "whatsapp", label: "WhatsApp direto com quem desenvolve" },
      { id: "craft", label: "Acabamento e performance" },
    ],

    about: {
      eyebrow: "Quem somos",
      title:
        "Uma equipe focada em<brMd/> fazer sua empresa<brMd/><accent>parecer o que ela é.</accent>",
      lead: "Uma equipe de tecnologia que começa entendendo o seu negócio — não o layout. Cada projeto parte do que a sua empresa precisa comunicar.",
      cta: "Conhecer a Vecttex",
    },

    services: {
      eyebrow: "Serviços",
      title: "O que entregamos<br/> em cada projeto.",
      lead: "Do primeiro rascunho à entrega, cuidamos de tudo que faz um site parecer profissional — e funcionar como tal.",
      link: "Ver todos os serviços",
    },

    types: {
      eyebrow: "Tipos de projeto",
      title: "Escolha o formato<brSm/> certo para o seu objetivo.",
      lead: "Cada negócio comunica de um jeito. Desenvolvemos formatos diferentes — e também projetos que fogem completamente do padrão.",
      link: "Ver todos os formatos",
    },

    process: {
      eyebrow: "Como funciona",
      title: "Um processo<br/> <accent>sem surpresas.</accent>",
      lead: "Do primeiro “bom dia” no WhatsApp até a entrega, você sabe exatamente em que etapa o seu projeto está.",
      cta: "Ver processo completo",
    },
  },

  /* ------------------------------------------------------------------ */
  /*  SOBRE                                                             */
  /* ------------------------------------------------------------------ */
  about: {
    hero: {
      eyebrow: "Sobre nós",
      title:
        "Somos a equipe por trás dos <accent>sites que apresentam</accent> o seu negócio.",
      lead: "A Vecttex é uma empresa de tecnologia dedicada a negócios que querem uma presença digital à altura do que oferecem no mundo real — websites, aplicações mobile e soluções digitais para empresas.",
    },

    manifesto: {
      eyebrow: "Nossa forma de trabalhar",
      title:
        "Um site não é só uma página.<br/><accent>É a primeira impressão.</accent>",
      paragraphs: [
        "Muitos negócios excelentes ainda são julgados por uma presença digital que não corresponde à qualidade do que entregam. Nosso trabalho é corrigir esse desencontro.",
        "Cada projeto é construído em cima do objetivo do cliente — seja um site institucional, uma landing page, um catálogo on-line ou algo fora do padrão. O formato e o nível de personalização são definidos junto com você, de acordo com o que o projeto pede.",
      ],
    },

    devices: {
      web: { label: "Web", desc: "Layout amplo e bem estruturado" },
      mobile: { label: "Mobile", desc: "Perfeito na tela do celular" },
    },

    /* PRINCIPLES substitui as duas listas antigas (VALUES, na página Sobre,
       e TRUST, na home), que descreviam os mesmos compromissos. */
    principles: {
      eyebrow: "Nossos princípios",
      title: "O que orienta cada projeto",
      lead: "Quatro compromissos que aplicamos em todos os trabalhos, independentemente do tamanho da empresa.",
      items: [
        {
          id: "clarity",
          title: "Clareza antes de tudo",
          desc: "Explicamos cada etapa em linguagem simples. Você nunca fica sem saber o que está acontecendo com o seu projeto.",
        },
        {
          id: "objective",
          title: "Objetivo antes do layout",
          desc: "Antes de pensar em design, entendemos o que o seu negócio precisa comunicar e para quem.",
        },
        {
          id: "craft",
          title: "Acabamento premium",
          desc: "Tipografia, espaçamento, velocidade e detalhe. É isso que separa um site amador de um site profissional.",
        },
        {
          id: "closeness",
          title: "Atendimento próximo",
          desc: "Você conversa com a equipe que está desenvolvendo o seu projeto, direto pelo WhatsApp.",
        },
      ],
    },

    links: [
      {
        id: "services",
        label: "Serviços",
        title: "O que fazemos",
        desc: "O que está incluso em cada projeto e os formatos que desenvolvemos.",
      },
      {
        id: "process",
        label: "Processo",
        title: "Como trabalhamos",
        desc: "As cinco etapas do projeto, do primeiro contato até a entrega.",
      },
      {
        id: "contact",
        label: "Contato",
        title: "Fale com a gente",
        desc: "Conte o que você precisa e receba um retorno da nossa equipe pelo WhatsApp.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  SERVIÇOS                                                          */
  /* ------------------------------------------------------------------ */
  services: {
    hero: {
      eyebrow: "Serviços",
      title:
        "Tudo o que a sua empresa precisa para <accent>existir bem na internet.</accent>",
      lead: "Sites e aplicativos alinhados ao seu negócio — e o método que usamos para chegar até lá, do primeiro contato à entrega.",
    },

    /* DELIVERABLES substitui as duas listas antigas (SERVICES e INCLUDED),
       que descreviam os mesmos itens com palavras diferentes. */
    deliverables: {
      eyebrow: "O que entregamos",
      title: "Incluso em todo projeto",
      lead: "Independentemente do formato escolhido, estes itens fazem parte de qualquer site que desenvolvemos.",
      items: [
        {
          id: "design",
          title: "Design alinhado ao negócio",
          desc: "Layout ajustado à identidade da sua empresa, com hierarquia visual clara e uma apresentação que transmite confiança no primeiro acesso.",
        },
        {
          id: "mobile",
          title: "Perfeito no celular",
          desc: "Seu site impecável no celular, no tablet e no computador — porque a maior parte dos seus clientes chega pelo telefone.",
        },
        {
          id: "performance",
          title: "Leve e rápido",
          desc: "Imagens otimizadas, código organizado e carregamento rápido para uma navegação fluida em qualquer conexão.",
        },
        {
          id: "seo",
          title: "Pronto para o Google",
          desc: "Títulos, descrições e organização de conteúdo preparados para que o seu negócio seja encontrado com facilidade.",
        },
        {
          id: "contact",
          title: "Contato integrado",
          desc: "Botões e links diretos para o WhatsApp, transformando visitas do site em conversas reais com a sua empresa.",
        },
        {
          id: "support",
          title: "Suporte da equipe",
          desc: "Dúvidas, ajustes e acompanhamento com atendimento humano e direto, durante o projeto e depois da entrega.",
        },
      ],
    },

    types: {
      eyebrow: "Tipos de projeto",
      title: "Formatos que desenvolvemos",
      lead: "Escolha o formato que combina com o seu objetivo — ou descreva o que você precisa e montamos a solução junto com você.",
      items: [
        {
          id: "institucional",
          title: "Site institucional",
          tag: "Autoridade",
          desc: "A presença oficial da sua empresa: história, serviços, diferenciais e canais de contato em um só lugar.",
          points: ["Páginas internas", "Sobre e serviços", "Contato integrado"],
        },
        {
          id: "apresentacao",
          title: "Site de apresentação",
          tag: "Vitrine",
          desc: "Ideal para estabelecimentos que precisam mostrar o espaço, o cardápio, os serviços e a localização.",
          points: [
            "Galeria de fotos",
            "Localização e horários",
            "Contato rápido",
          ],
        },
        {
          id: "landing",
          title: "Landing page",
          tag: "Conversão",
          desc: "Uma página objetiva e persuasiva, criada para divulgar uma oferta, um serviço ou uma campanha específica.",
          points: [
            "Foco em ação",
            "Carregamento rápido",
            "Pronta para anúncios",
          ],
        },
        {
          id: "portfolio",
          title: "Portfólio",
          tag: "Trabalhos",
          desc: "Para profissionais e estúdios que precisam exibir projetos, cases e resultados de forma elegante.",
          points: [
            "Galerias organizadas",
            "Páginas de projeto",
            "Visual editorial",
          ],
        },
        {
          id: "catalogo",
          title: "Catálogo on-line",
          tag: "Produtos",
          desc: "Seus produtos e serviços organizados por categoria, com pedido ou orçamento direto pelo WhatsApp.",
          points: [
            "Categorias e filtros",
            "Fichas de produto",
            "Pedido via WhatsApp",
          ],
        },
        {
          id: "personalizado",
          title: "Projetos personalizados",
          tag: "Sob demanda",
          desc: "Precisa de algo diferente? Estudamos a necessidade e desenvolvemos uma solução específica para o seu caso.",
          points: [
            "Escopo sob medida",
            "Funções específicas",
            "Análise prévia",
          ],
        },
      ],
      custom: {
        title: "Seu projeto não se encaixa em nenhum desses formatos?",
        desc: "Sem problema. Avaliamos a sua necessidade e desenvolvemos uma solução sob medida, com escopo definido junto com você.",
        cta: "Descrever meu projeto",
      },
    },

    /* O método de trabalho. Vive dentro da página Serviços (âncora
       #processo); a home mostra apenas a versão de uma linha por etapa. */
    process: {
      eyebrow: "Como funciona",
      title: "Cinco etapas,<br/> <accent>do briefing à entrega.</accent>",
      lead: "Um processo transparente, pensado para quem não entende de tecnologia e só quer um site profissional funcionando — sem dor de cabeça.",
      items: [
        {
          id: "discovery",
          title: "Entendemos o seu negócio",
          desc: "Conversamos pelo WhatsApp para conhecer a sua empresa, o público que você atende e o objetivo do projeto.",
          detail: [
            "Conversa inicial sem compromisso",
            "Levantamento de objetivos e referências",
            "Definição clara do que o site precisa resolver",
          ],
        },
        {
          id: "planning",
          title: "Planejamos o projeto",
          desc: "Definimos as seções, a estrutura das páginas e o formato ideal para o que você precisa apresentar.",
          detail: [
            "Estrutura e mapa de páginas",
            "Direção visual e organização do conteúdo",
            "Escopo e prazo alinhados antes de começar",
          ],
        },
        {
          id: "development",
          title: "Desenvolvemos o site",
          desc: "Nossa equipe monta o projeto com o visual alinhado ao seu negócio, versão para celular e atenção a cada detalhe.",
          detail: [
            "Design e desenvolvimento do projeto",
            "Versão responsiva para todos os aparelhos",
            "Testes de navegação e desempenho",
          ],
        },
        {
          id: "presentation",
          title: "Apresentamos o resultado",
          desc: "Você vê o projeto pronto, navega por cada tela e aponta o que quer mudar. Os ajustes são feitos nesta etapa.",
          detail: [
            "Apresentação completa do projeto",
            "Você indica os ajustes que quiser",
            "Refinamos até ficar alinhado ao que você espera",
          ],
        },
        {
          id: "delivery",
          title: "Aprovação e entrega",
          desc: "Com tudo alinhado, publicamos o projeto e seguimos disponíveis para dúvidas e suporte.",
          detail: [
            "Publicação do projeto aprovado",
            "Orientações de uso",
            "Suporte contínuo pelo WhatsApp",
          ],
        },
      ],
    },

    /* O que agiliza o início do projeto. */
    prepare: {
      eyebrow: "Antes de começar",
      title: "O que ajuda a<br/> <accent>acelerar o projeto.</accent>",
      lead: "Nada disso é obrigatório para começar a conversa — mas quanto mais informação, mais rápido chegamos ao resultado ideal.",
      cta: "Começar meu projeto",
      items: [
        {
          id: "business",
          title: "Informações do negócio",
          desc: "Nome, o que você faz, diferenciais, horários e formas de contato.",
        },
        {
          id: "media",
          title: "Imagens e logotipo",
          desc: "Fotos do espaço, produtos ou equipe. Se não tiver, a gente orienta.",
        },
        {
          id: "goal",
          title: "Objetivo do site",
          desc: "Receber contatos, mostrar o catálogo, divulgar um serviço específico.",
        },
        {
          id: "references",
          title: "Referências que você gosta",
          desc: "Sites de que você gostou ajudam a acertar a direção visual mais rápido.",
        },
      ],
    },

    /* Serviços opcionais. Condições comerciais não aparecem no site —
       são tratadas diretamente no atendimento. */
    extras: {
      eyebrow: "Serviços adicionais",
      title: "Além do site, se você<brSm/> precisar de mais.",
      lead: "Serviços opcionais que você pode contratar junto com o projeto — com o escopo combinado antes de começar.",
      items: [
        {
          id: "hosting",
          title: "Hospedagem do site",
          desc: "Cuidamos da hospedagem para você não precisar se preocupar com a parte técnica: o site no ar, estável e monitorado.",
          highlight:
            "Serviço opcional — as condições são combinadas diretamente com você, sem fidelidade.",
          points: [
            "Site no ar com estabilidade",
            "Parte técnica por nossa conta",
            "Cancelamento livre a qualquer momento",
          ],
        },
        {
          id: "app",
          title: "Aplicativo para celular",
          desc: "Além do site, também desenvolvemos aplicativo para celular. O que o aplicativo vai fazer é definido junto com você.",
          highlight:
            "As funcionalidades são definidas com o cliente — nada é prometido antes da análise do projeto.",
          points: [
            "Escopo definido em conversa",
            "Projeto avaliado caso a caso",
            "Desenvolvimento após alinhamento",
          ],
        },
      ],
    },

    /* Condições comerciais não são respondidas aqui — são tratadas no
       contato. */
    faq: {
      eyebrow: "Dúvidas frequentes",
      title: "Tudo claro,<br/> desde o começo.",
      lead: "Se ficar qualquer dúvida que não esteja aqui, é só chamar no WhatsApp pelo botão no canto da tela.",
      items: [
        {
          id: "scope",
          q: "Vocês fazem apenas sites de apresentação?",
          a: "Não. Sites de apresentação são uma parte do que fazemos. Também desenvolvemos sites institucionais, landing pages, portfólios, catálogos on-line e projetos personalizados conforme a necessidade.",
        },
        {
          id: "support",
          q: "Como funciona o suporte?",
          a: "O atendimento é feito pelo WhatsApp, de forma direta e próxima. Você fala com a nossa equipe para tirar dúvidas e acompanhar o projeto, durante o desenvolvimento e depois da entrega.",
        },
        {
          id: "materials",
          q: "Preciso ter logotipo e fotos prontos para começar?",
          a: "Não é obrigatório. Quanto mais material você tiver, mais rápido o projeto avança — mas se ainda não tiver, orientamos o que produzir e seguimos com o que for possível.",
        },
        {
          id: "apps",
          q: "Vocês desenvolvem aplicativos?",
          a: "Sim, o aplicativo para celular é um serviço adicional. As funcionalidades são definidas junto com o cliente, após entendermos a necessidade do projeto.",
        },
        {
          id: "quote",
          q: "Como faço para pedir um orçamento?",
          a: "É só chamar no WhatsApp ou preencher o formulário da página de contato. Depois de entender o escopo do seu projeto, passamos todas as condições diretamente para você.",
        },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  /*  CONTATO                                                           */
  /* ------------------------------------------------------------------ */
  contactPage: {
    hero: {
      eyebrow: "Contato",
      title: "Vamos conversar sobre o <accent>seu projeto.</accent>",
      lead: "Conte um pouco sobre o seu negócio e o que você precisa. Nossa equipe responde pelo WhatsApp com um atendimento próximo e direto.",
    },

    form: {
      eyebrow: "Formulário rápido",
      title: "Envie os detalhes",
      lead: "Preencha os campos e o resumo do seu projeto será enviado diretamente para o nosso WhatsApp.",
      nameLabel: "Seu nome *",
      namePlaceholder: "Como podemos te chamar",
      companyLabel: "Empresa",
      companyPlaceholder: "Nome do seu negócio",
      phoneLabel: "WhatsApp",
      phonePlaceholder: "(00) 00000-0000",
      typeLabel: "Tipo de projeto",
      typeUnknown: "Ainda não sei",
      messageLabel: "Sobre o projeto",
      messagePlaceholder:
        "Conte o que a sua empresa faz e o que você espera do site...",
      submit: "Enviar pelo WhatsApp",
      sent: "Conversa aberta no WhatsApp! Se não abriu, clique no botão verde no canto da tela.",
      privacy:
        "Ao enviar, uma conversa será aberta no WhatsApp com o resumo preenchido. Nenhum dado é armazenado neste site.",
    },

    /* Mensagem montada e aberta no WhatsApp ao enviar o formulário. */
    waMessage: {
      greeting: "Olá! Meu nome é {{name}}.",
      noName: "(sem nome)",
      company: "Empresa: {{company}}",
      phone: "Contato: {{phone}}",
      type: "Tipo de projeto: {{type}}",
      fallback: "Gostaria de conversar sobre um projeto.",
    },

    channel: {
      eyebrow: "Canal principal",
      title: "WhatsApp",
      desc: "A forma mais rápida de falar com a nossa equipe. Respondemos dúvidas, enviamos orçamentos e acompanhamos o projeto por aqui.",
    },
  },

  notFound: {
    code: "Erro 404",
    title: "Página não <accent>encontrada</accent>",
    lead: "O endereço que você tentou acessar não existe. Volte para o início ou fale com a nossa equipe pelo botão do WhatsApp no canto da tela.",
    home: "Voltar ao início",
    contact: "Ir para o contato",
  },

  /* ------------------------------------------------------------------ */
  /*  Blocos reutilizados em várias páginas                             */
  /* ------------------------------------------------------------------ */
  whatsappSupport: {
    eyebrow: "Atendimento",
    title:
      "Suporte pelo WhatsApp,<br/><accent>com gente de verdade.</accent>",
    lead: "Nada de formulários sem resposta ou sistemas de ticket. Você fala direto com quem está desenvolvendo o seu projeto — durante o desenvolvimento e depois da entrega.",
  },

  cta: {
    title:
      "Conte sobre o seu negócio.<br/><accent>O resto é com a gente.</accent>",
    lead: "Uma conversa rápida no WhatsApp já é o suficiente para entendermos o seu projeto — e é sem compromisso.",
  },

  /* Textos que aparecem dentro das ilustrações de navegador e celular. */
  mockups: {
    browserUrl: "suaempresa.com.br",
    projectUrl: "vecttex.com.br/seu-projeto",
    chat: {
      title: "{{brand}} · Atendimento",
      status: "on-line agora",
      inputPlaceholder: "Mensagem",
      messages: [
        { text: "Olá! Quero um site para a minha empresa 👋", time: "09:12" },
        {
          text: "Oi! Que ótimo. Me conta um pouco sobre o seu negócio?",
          time: "09:12",
        },
        {
          text: "Tenho um restaurante e preciso mostrar o cardápio",
          time: "09:14",
        },
        {
          text: "Perfeito. Monto a estrutura, escolho as seções e te apresento o projeto pronto ✅",
          time: "09:15",
        },
      ],
    },
  },
} as const;
