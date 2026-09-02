/* -------------------------------------------------------------------------
 * O método de trabalho. Vive dentro da página Serviços (âncora #processo);
 * a home mostra apenas a versão de uma linha por etapa.
 * ---------------------------------------------------------------------- */

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
    desc: "Definimos as seções, a estrutura das páginas e o formato ideal para o que você precisa apresentar.",
    detail: [
      "Estrutura e mapa de páginas",
      "Direção visual e organização do conteúdo",
      "Escopo e prazo alinhados antes de começar",
    ],
  },
  {
    step: "03",
    icon: "Code2",
    title: "Desenvolvemos o site",
    desc: "Nossa equipe monta o projeto com o visual alinhado ao seu negócio, versão para celular e atenção a cada detalhe.",
    detail: [
      "Design e desenvolvimento do projeto",
      "Versão responsiva para todos os aparelhos",
      "Testes de navegação e desempenho",
    ],
  },
  {
    step: "04",
    icon: "Presentation",
    title: "Apresentamos o resultado",
    desc: "Você vê o projeto pronto, navega por cada tela e aponta o que quer mudar. Os ajustes são feitos nesta etapa.",
    detail: [
      "Apresentação completa do projeto",
      "Você indica os ajustes que quiser",
      "Refinamos até ficar alinhado ao que você espera",
    ],
  },
  {
    step: "05",
    icon: "CheckCircle2",
    title: "Aprovação e entrega",
    desc: "Com tudo alinhado, publicamos o projeto e seguimos disponíveis para dúvidas e suporte.",
    detail: [
      "Publicação do projeto aprovado",
      "Orientações de uso",
      "Suporte contínuo pelo WhatsApp",
    ],
  },
];

/* O que agiliza o início do projeto. */
export const PREPARE = [
  {
    icon: "FileText",
    title: "Informações do negócio",
    desc: "Nome, o que você faz, diferenciais, horários e formas de contato.",
  },
  {
    icon: "Image",
    title: "Imagens e logotipo",
    desc: "Fotos do espaço, produtos ou equipe. Se não tiver, a gente orienta.",
  },
  {
    icon: "Target",
    title: "Objetivo do site",
    desc: "Receber contatos, mostrar o catálogo, divulgar um serviço específico.",
  },
  {
    icon: "MessageSquare",
    title: "Referências que você gosta",
    desc: "Sites de que você gostou ajudam a acertar a direção visual mais rápido.",
  },
];
