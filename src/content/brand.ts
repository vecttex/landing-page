/* -------------------------------------------------------------------------
 * Identidade, contato e navegação.
 * Fonte única de verdade — nenhum destes textos deve ser reescrito em JSX.
 * ---------------------------------------------------------------------- */

export const BRAND = {
  name: "Vecttex",
  full: "Vecttex",
  /* Slogan oficial — sempre em caixa alta e entrelinha ampla (manual, cap. 08) */
  slogan: "Conexão. Inovação. Tecnologia.",
  descriptor: "Tecnologia e Desenvolvimento",
  /* Descrição curta da empresa. Usada no rodapé e nas meta tags — em mais
     nenhum lugar, para não repetir o mesmo parágrafo em várias páginas. */
  claim:
    "Sites e aplicativos para empresas que querem ser levadas a sério na internet.",
};

export const CONTACT = {
  whatsappNumber: "5551981061315",
  whatsappDisplay: "+55 (51) 98106-1315",
  email: "contato@vecttex.com.br",
  address: "Gravataí - Rio Grande do Sul",
  coverage: "Atendimento on-line para todo o Brasil",
  hours: "· Segunda a sexta das 09:00 às 19:00\n· Sábado das 09:00 às 13:00",
};

export function waLink(message?: string) {
  const base = `https://wa.me/${CONTACT.whatsappNumber}`;
  const text =
    message ??
    "Olá! Vim pelo site da Vecttex e gostaria de conversar sobre um projeto.";
  return `${base}?text=${encodeURIComponent(text)}`;
}

export const NAV = [
  { label: "Início", to: "/" },
  { label: "Sobre", to: "/sobre" },
  { label: "Serviços", to: "/servicos" },
  { label: "Contato", to: "/contato" },
];

/* Os três pilares da comunicação. Aparecem em versão curta na home
   (TrustStrip) e são desenvolvidos, cada um, em uma página específica. */
export const PILLARS = [
  {
    icon: "PenTool",
    label: "Projeto alinhado ao seu negócio",
  },
  {
    icon: "MessageCircle",
    label: "WhatsApp direto com quem desenvolve",
  },
  {
    icon: "Gauge",
    label: "Acabamento e performance",
  },
];
