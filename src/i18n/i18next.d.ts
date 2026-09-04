import type { LooseLists, Resources } from "./types";

/**
 * Tipa o `t()` com as chaves reais do conteúdo: `t("home.hero.lead")` tem
 * autocomplete e `t("home.hero.leed")` não compila.
 *
 * Usa `Resources` (literais já alargados para `string`) e não
 * `typeof ptBR` — este último faria o `t()` prometer como tipo de retorno o
 * texto em português, o que é falso quando o idioma ativo é outro.
 */
declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: { translation: LooseLists<Resources> };
    returnNull: false;
  }
}
