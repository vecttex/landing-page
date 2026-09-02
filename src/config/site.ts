/* -------------------------------------------------------------------------
 * Dados do site que NÃO dependem de idioma.
 *
 * Regra da camada de conteúdo: os bundles em `src/i18n/resources` guardam
 * apenas texto traduzível. Tudo que é igual em qualquer idioma — marca,
 * telefone, e-mail, rotas, nomes de ícone e caminhos de imagem — vive aqui e
 * é unido ao texto pelo `id` de cada item na hora de renderizar.
 * ---------------------------------------------------------------------- */

export const SITE = {
  name: "Vecttex",
  /* Slogan oficial — ativo de marca (manual, cap. 08). Não é traduzido:
     aparece em português em todos os idiomas, sempre em caixa alta e
     entrelinha ampla. */
  slogan: "Conexão. Inovação. Tecnologia.",
  whatsappNumber: "5551981061315",
  whatsappDisplay: "+55 (51) 98106-1315",
  email: "contato@vecttex.com.br",
  /* Logotipo é lettering exclusivo e nunca é redigitado — vem do kit. */
  wordmark: "/brand/logotipo-branco-ouro.svg",
} as const;

export function waLink(message: string) {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/* Navegação: o rótulo vem de `nav.<id>` nos resources. */
export const NAV_ITEMS = [
  { id: "home", to: "/" },
  { id: "about", to: "/sobre" },
  { id: "services", to: "/servicos" },
  { id: "contact", to: "/contato" },
] as const;

/* ---------------------------------------------------------------- */
/*  Ícones (nomes resolvidos por components/Icon.tsx)                */
/* ---------------------------------------------------------------- */

export const PILLAR_ICON: Record<string, string> = {
  fit: "PenTool",
  whatsapp: "MessageCircle",
  craft: "Gauge",
};

export const DELIVERABLE_ICON: Record<string, string> = {
  design: "PenTool",
  mobile: "Smartphone",
  performance: "Gauge",
  seo: "Search",
  contact: "MessageCircle",
  support: "LifeBuoy",
};

export const PROCESS_ICON: Record<string, string> = {
  discovery: "Search",
  planning: "ClipboardList",
  development: "Code2",
  presentation: "Presentation",
  delivery: "CheckCircle2",
};

export const PRINCIPLE_ICON: Record<string, string> = {
  clarity: "Eye",
  objective: "Compass",
  craft: "Gem",
  closeness: "Users",
};

export const PREPARE_ICON: Record<string, string> = {
  business: "FileText",
  media: "Image",
  goal: "Target",
  references: "MessageSquare",
};

export const EXTRA_ICON: Record<string, string> = {
  hosting: "Server",
  app: "Smartphone",
};

/* ---------------------------------------------------------------- */
/*  Imagens e rotas                                                  */
/* ---------------------------------------------------------------- */

export const PROJECT_TYPE_IMAGE: Record<string, string> = {
  institucional: "/img/tipo-institucional.jpg",
  apresentacao: "/img/tipo-apresentacao.jpg",
  landing: "/img/tipo-landing.jpg",
  portfolio: "/img/tipo-portfolio.jpg",
  catalogo: "/img/tipo-catalogo.jpg",
  personalizado: "/img/tipo-personalizado.jpg",
};

export const TEAM_PHOTO = "/img/equipe.jpg";

/* Destino dos três cards no fim da página Sobre. */
export const ABOUT_LINK_TO: Record<string, string> = {
  services: "/servicos",
  process: "/servicos#processo",
  contact: "/contato",
};

/* Quem fala cada mensagem do mockup de conversa — estrutura, não texto.
   Casa por índice com `mockups.chat.messages` nos resources. */
export const CHAT_ROLES = ["them", "us", "them", "us"] as const;
