/* -------------------------------------------------------------------------
 * Tema visual do site.
 *
 * Mesma divisão de responsabilidades da camada de idioma (`src/i18n`): aqui
 * ficam os valores e as funções puras; o estado em si vive no provider.
 *
 * São três preferências possíveis e apenas dois temas: `system` é uma
 * preferência, não um tema — ela é resolvida contra o `prefers-color-scheme`
 * do sistema operacional. O que chega ao `<html data-theme>` é sempre
 * `light` ou `dark`.
 * ---------------------------------------------------------------------- */

export const THEMES = ["dark", "light"] as const;

export type Theme = (typeof THEMES)[number];

/** O que o visitante escolheu. `system` = seguir o sistema operacional. */
export type ThemePreference = Theme | "system";

/**
 * Tema institucional: sem preferência salva e sem preferência do sistema, o
 * site abre no Vecttex Ink.
 */
export const DEFAULT_THEME: Theme = "dark";

export const DEFAULT_PREFERENCE: ThemePreference = "system";

/** Onde a escolha do visitante é guardada. */
export const STORAGE_KEY = "vecttex:theme";

/** Override por URL: ?theme=light */
export const QUERY_PARAM = "theme";

/**
 * Consulta do sistema. Repare que a pergunta é pelo claro, não pelo escuro:
 * quem não expressa preferência (`no-preference`) cai no padrão institucional.
 */
export const LIGHT_MEDIA_QUERY = "(prefers-color-scheme: light)";

/** Cor da barra do navegador em cada tema — espelha `--color-ink`. */
export const THEME_COLOR: Record<Theme, string> = {
  dark: "#111111",
  light: "#f8f5ee",
};

function isTheme(value: unknown): value is Theme {
  return THEMES.includes(value as Theme);
}

/** Normaliza qualquer string (localStorage, querystring) numa preferência. */
export function resolveThemePreference(
  candidate?: string | null
): ThemePreference {
  if (!candidate) return DEFAULT_PREFERENCE;
  const wanted = candidate.toLowerCase();
  if (wanted === "system") return "system";
  return isTheme(wanted) ? wanted : DEFAULT_PREFERENCE;
}

/** Preferência + sistema → o tema que será realmente aplicado. */
export function resolveTheme(
  preference: ThemePreference,
  systemTheme: Theme
): Theme {
  return preference === "system" ? systemTheme : preference;
}
