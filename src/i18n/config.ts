/* -------------------------------------------------------------------------
 * Idiomas suportados.
 *
 * Para acrescentar um idioma (es-ES, fr-FR…): criar o arquivo em
 * `resources/`, registrá-lo em `resources` no `index.ts` e adicionar a
 * entrada aqui. Nada mais na aplicação precisa mudar.
 * ---------------------------------------------------------------------- */

export const DEFAULT_LOCALE = "pt-BR";

export const LOCALES = [
  { code: "pt-BR", short: "PT", name: "Português (BR)" },
  { code: "en-US", short: "EN", name: "English (US)" },
] as const;

export type Locale = (typeof LOCALES)[number]["code"];

export const LOCALE_CODES: Locale[] = LOCALES.map((l) => l.code);

/** Onde a preferência do visitante é guardada. */
export const STORAGE_KEY = "vecttex:locale";

/** Override por URL: ?lang=en-US */
export const QUERY_PARAM = "lang";

/**
 * Normaliza qualquer código de idioma para um dos suportados.
 *
 * Ordem: correspondência exata (`en-US`), depois só pelo idioma, ignorando a
 * região (`pt-PT` → `pt-BR`, `en-GB` → `en-US`) e, por fim, o padrão.
 *
 * Isto substitui a opção `nonExplicitSupportedLngs` do i18next, que resolve o
 * caso oposto — aceitar `pt-BR` quando o suportado é `pt` — e faria a busca
 * cair no código base, sem resources, deixando todo `t()` devolver a chave.
 */
export function resolveLocale(candidate?: string | null): Locale {
  if (!candidate) return DEFAULT_LOCALE;
  const wanted = candidate.toLowerCase();

  const exact = LOCALE_CODES.find((code) => code.toLowerCase() === wanted);
  if (exact) return exact;

  const language = wanted.split("-")[0];
  const sameLanguage = LOCALE_CODES.find(
    (code) => code.split("-")[0].toLowerCase() === language
  );
  return sameLanguage ?? DEFAULT_LOCALE;
}
