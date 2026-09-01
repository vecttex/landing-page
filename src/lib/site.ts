export const BRAND = {
  name: "Vecttex",
  full: "Vecttex Tecnologia",
  /* Slogan oficial — sempre em caixa alta e entrelinha ampla (manual, cap. 08) */
  slogan: "Conexão. Inovação. Tecnologia.",
  descriptor: "Tecnologia e Desenvolvimento",
  claim:
    "Criamos soluções digitais profissionais para apresentar empresas na internet, com atendimento próximo, suporte via WhatsApp e projetos personalizados para cada cliente.",
};

export const CONTACT = {
  whatsappNumber: "5511999990000",
  whatsappDisplay: "+55 (11) 99999-0000",
  email: "contato@vecttex.com.br",
  city: "Atendimento 100% online — todo o Brasil",
  hours: "Seg a Sex, 9h às 19h · Sáb, 9h às 13h",
};

export function waLink(message?: string) {
  const base = `https://wa.me/${CONTACT.whatsappNumber}`;
  const text =
    message ??
    "Olá! Vim pelo site da Vecttex e gostaria de um orçamento para o meu projeto.";
  return `${base}?text=${encodeURIComponent(text)}`;
}

export const NAV = [
  { label: "Início", to: "/" },
  { label: "Sobre", to: "/sobre" },
  { label: "Serviços", to: "/servicos" },
  { label: "Processo", to: "/processo" },
  { label: "Contato", to: "/contato" },
];

export const SERVICES = [
  {
    icon: "Monitor",
    title: "Sites profissionais",
    desc: "Sites completos para empresas e estabelecimentos, feitos do zero e alinhados à identidade do seu negócio.",
  },
  {
    icon: "PenTool",
    title: "Design sob medida",
    desc: "Layout exclusivo, hierarquia visual clara e uma apresentação que transmite confiança logo no primeiro acesso.",
  },
  {
    icon: "Smartphone",
    title: "Responsivo de verdade",
    desc: "Seu site perfeito no celular, tablet e computador — porque a maior parte dos seus clientes chega pelo telefone.",
  },
  {
    icon: "Gauge",
    title: "Performance e velocidade",
    desc: "Páginas leves, carregamento rápido e código organizado para uma navegação fluida em qualquer conexão.",
  },
  {
    icon: "Search",
    title: "Estrutura pronta para o Google",
    desc: "Títulos, descrições e organização de conteúdo preparados para que seu negócio seja encontrado com facilidade.",
  },
  {
    icon: "MessageCircle",
    title: "Integração com WhatsApp",
    desc: "Botões e links diretos para conversa, transformando visitas do site em contatos reais com a sua empresa.",
  },
  {
    icon: "Layers",
    title: "Projetos personalizados",
    desc: "Não trabalhamos só com sites de apresentação: avaliamos a sua necessidade e desenvolvemos o que o projeto pedir.",
  },
  {
    icon: "LifeBuoy",
    title: "Suporte próximo",
    desc: "Dúvidas, ajustes e acompanhamento com atendimento humano e direto pelo WhatsApp.",
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
    title: "Catálogo online",
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

export const PROCESS = [
  {
    step: "01",
    icon: "Search",
    title: "Entendemos o seu negócio",
    desc: "Conversamos pelo WhatsApp para conhecer a sua empresa, o público que você atende e o objetivo do projeto.",
    detail: [
      "Conversa inicial sem compromisso",
      "Levantamento de objetivos e referências",
      "Definição clara do que o site precisa resolver",
    ],
  },
  {
    step: "02",
    icon: "ClipboardList",
    title: "Planejamos o projeto",
    desc: "Definimos as seções, a estrutura das páginas e o tipo de projeto ideal para o que você precisa apresentar.",
    detail: [
      "Estrutura e mapa de páginas",
      "Direção visual e organização do conteúdo",
      "Prazo e escopo alinhados antes de começar",
    ],
  },
  {
    step: "03",
    icon: "Code2",
    title: "Desenvolvemos o site",
    desc: "Nossa equipe desenvolve o projeto com design exclusivo, versão para celular e atenção a cada detalhe.",
    detail: [
      "Design e desenvolvimento sob medida",
      "Versão responsiva para todos os aparelhos",
      "Testes de navegação e desempenho",
    ],
  },
  {
    step: "04",
    icon: "Presentation",
    title: "Apresentamos o resultado",
    desc: "Você vê o projeto pronto e pode solicitar alterações. Ajustamos tudo o que for necessário — antes do pagamento.",
    detail: [
      "Apresentação completa do projeto",
      "Você pede as alterações que quiser",
      "Ajustamos até ficar como você deseja",
    ],
  },
  {
    step: "05",
    icon: "CheckCircle2",
    title: "Aprovação e entrega",
    desc: "Com tudo aprovado, realizamos a entrega do projeto e seguimos disponíveis para dúvidas e suporte.",
    detail: [
      "Entrega após a sua aprovação",
      "Orientações de uso do projeto",
      "Suporte contínuo pelo WhatsApp",
    ],
  },
];

export const EXTRAS = [
  {
    icon: "Server",
    title: "Hospedagem do site",
    price: "Valor mensal adicional",
    desc: "Cuidamos da hospedagem para você não precisar se preocupar com a parte técnica. O valor é apenas o custo do serviço.",
    highlight: "Não lucramos com a hospedagem — o valor mensal cobre apenas o custo do serviço.",
    points: [
      "Site no ar com estabilidade",
      "Parte técnica por nossa conta",
      "Cancelamento livre a qualquer momento",
    ],
  },
  {
    icon: "Smartphone",
    title: "Aplicativo para celular",
    price: "Orçamento sob consulta",
    desc: "Além do site, também desenvolvemos aplicativo para celular. O que o aplicativo vai fazer é definido junto com você.",
    highlight: "As funcionalidades são definidas com o cliente — nada é prometido antes da análise do projeto.",
    points: [
      "Escopo definido em conversa",
      "Projeto avaliado caso a caso",
      "Desenvolvimento após alinhamento",
    ],
  },
];

export const FAQ = [
  {
    q: "Preciso pagar antes de ver o site pronto?",
    a: "Não. Nós desenvolvemos o projeto, apresentamos o resultado e você pode solicitar alterações. O pagamento acontece somente depois que estiver do jeito que você deseja.",
  },
  {
    q: "Posso pedir alterações no projeto?",
    a: "Pode. Ajustamos tudo o que for necessário durante a fase de apresentação, até que o projeto fique alinhado com o que você espera.",
  },
  {
    q: "Vocês fazem apenas sites de apresentação?",
    a: "Não. Sites de apresentação são uma parte do que fazemos. Também desenvolvemos sites institucionais, landing pages, portfólios, catálogos online e projetos personalizados conforme a necessidade.",
  },
  {
    q: "Como funciona o suporte?",
    a: "O atendimento é feito pelo WhatsApp, de forma direta e próxima. Você fala com a nossa equipe para tirar dúvidas e acompanhar o projeto.",
  },
  {
    q: "A hospedagem está inclusa?",
    a: "A hospedagem é um serviço adicional com valor mensal. Deixamos claro que não lucramos com ela: o valor cobre apenas o custo do serviço.",
  },
  {
    q: "Vocês desenvolvem aplicativos?",
    a: "Sim, o aplicativo para celular é um serviço adicional. As funcionalidades são definidas junto com o cliente, após entendermos a necessidade do projeto.",
  },
];
