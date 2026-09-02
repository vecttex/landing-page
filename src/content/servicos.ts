/* -------------------------------------------------------------------------
 * O que entregamos, em que formatos e o que pode ser contratado à parte.
 *
 * DELIVERABLES substitui as duas listas antigas (SERVICES e INCLUDED), que
 * descreviam os mesmos itens com palavras diferentes na mesma página.
 * ---------------------------------------------------------------------- */

export const DELIVERABLES = [
  {
    icon: "PenTool",
    title: "Design alinhado ao negócio",
    desc: "Layout ajustado à identidade da sua empresa, com hierarquia visual clara e uma apresentação que transmite confiança no primeiro acesso.",
  },
  {
    icon: "Smartphone",
    title: "Perfeito no celular",
    desc: "Seu site impecável no celular, no tablet e no computador — porque a maior parte dos seus clientes chega pelo telefone.",
  },
  {
    icon: "Gauge",
    title: "Leve e rápido",
    desc: "Imagens otimizadas, código organizado e carregamento rápido para uma navegação fluida em qualquer conexão.",
  },
  {
    icon: "Search",
    title: "Pronto para o Google",
    desc: "Títulos, descrições e organização de conteúdo preparados para que o seu negócio seja encontrado com facilidade.",
  },
  {
    icon: "MessageCircle",
    title: "Contato integrado",
    desc: "Botões e links diretos para o WhatsApp, transformando visitas do site em conversas reais com a sua empresa.",
  },
  {
    icon: "LifeBuoy",
    title: "Suporte da equipe",
    desc: "Dúvidas, ajustes e acompanhamento com atendimento humano e direto, durante o projeto e depois da entrega.",
  },
];

export const PROJECT_TYPES = [
  {
    title: "Site institucional",
    tag: "Autoridade",
    desc: "A presença oficial da sua empresa: história, serviços, diferenciais e canais de contato em um só lugar.",
    image: "/img/tipo-institucional.jpg",
    points: ["Páginas internas", "Sobre e serviços", "Contato integrado"],
  },
  {
    title: "Site de apresentação",
    tag: "Vitrine",
    desc: "Ideal para estabelecimentos que precisam mostrar o espaço, o cardápio, os serviços e a localização.",
    image: "/img/tipo-apresentacao.jpg",
    points: ["Galeria de fotos", "Localização e horários", "Contato rápido"],
  },
  {
    title: "Landing page",
    tag: "Conversão",
    desc: "Uma página objetiva e persuasiva, criada para divulgar uma oferta, um serviço ou uma campanha específica.",
    image: "/img/tipo-landing.jpg",
    points: ["Foco em ação", "Carregamento rápido", "Pronta para anúncios"],
  },
  {
    title: "Portfólio",
    tag: "Trabalhos",
    desc: "Para profissionais e estúdios que precisam exibir projetos, cases e resultados de forma elegante.",
    image: "/img/tipo-portfolio.jpg",
    points: ["Galerias organizadas", "Páginas de projeto", "Visual editorial"],
  },
  {
    title: "Catálogo on-line",
    tag: "Produtos",
    desc: "Seus produtos e serviços organizados por categoria, com pedido ou orçamento direto pelo WhatsApp.",
    image: "/img/tipo-catalogo.jpg",
    points: ["Categorias e filtros", "Fichas de produto", "Pedido via WhatsApp"],
  },
  {
    title: "Projetos personalizados",
    tag: "Sob demanda",
    desc: "Precisa de algo diferente? Estudamos a necessidade e desenvolvemos uma solução específica para o seu caso.",
    image: "/img/tipo-personalizado.jpg",
    points: ["Escopo sob medida", "Funções específicas", "Análise prévia"],
  },
];

/* Serviços opcionais. Condições comerciais não aparecem no site —
   são tratadas diretamente no atendimento. */
export const EXTRAS = [
  {
    icon: "Server",
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
    icon: "Smartphone",
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
];
