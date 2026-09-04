import { useCallback, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import {
  DEFAULT_PREFERENCE,
  DEFAULT_THEME,
  LIGHT_MEDIA_QUERY,
  QUERY_PARAM,
  STORAGE_KEY,
  THEME_COLOR,
  resolveTheme,
  resolveThemePreference,
} from "./config";
import type { Theme, ThemePreference } from "./config";
import { ThemeContext } from "./context";

/* localStorage pode lançar (modo privativo, cookies bloqueados). Nenhuma
   dessas falhas justifica derrubar a página — o tema volta ao padrão. */
function readStoredPreference(): ThemePreference {
  if (typeof window === "undefined") return DEFAULT_PREFERENCE;

  /* ?theme=light vence a preferência salva, mesma ordem do seletor de
     idioma — serve para conferir o tema num link de demonstração. */
  const fromQuery = new URLSearchParams(window.location.search).get(QUERY_PARAM);
  if (fromQuery) return resolveThemePreference(fromQuery);

  try {
    return resolveThemePreference(window.localStorage.getItem(STORAGE_KEY));
  } catch {
    return DEFAULT_PREFERENCE;
  }
}

function readSystemTheme(): Theme {
  if (typeof window === "undefined" || !window.matchMedia) return DEFAULT_THEME;
  return window.matchMedia(LIGHT_MEDIA_QUERY).matches ? "light" : DEFAULT_THEME;
}

/**
 * O `index.html` já carimba `data-theme` antes da primeira pintura para não
 * piscar. Aqui só mantemos o documento em dia depois que o app sobe.
 */
function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.style.colorScheme = theme;

  const meta = document.head.querySelector<HTMLMetaElement>(
    'meta[name="theme-color"]'
  );
  if (meta) meta.content = THEME_COLOR[theme];
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [preference, setPreferenceState] =
    useState<ThemePreference>(readStoredPreference);
  const [systemTheme, setSystemTheme] = useState<Theme>(readSystemTheme);

  /* Enquanto a preferência for `system`, acompanhar o SO em tempo real:
     quem alterna o modo escuro do celular vê o site alternar junto. */
  useEffect(() => {
    if (!window.matchMedia) return;
    const media = window.matchMedia(LIGHT_MEDIA_QUERY);
    const onChange = (e: MediaQueryListEvent) =>
      setSystemTheme(e.matches ? "light" : DEFAULT_THEME);

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const theme = resolveTheme(preference, systemTheme);

  useEffect(() => applyTheme(theme), [theme]);

  const setPreference = useCallback((next: ThemePreference) => {
    setPreferenceState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* Sem persistência: a escolha vale só para esta visita. */
    }
  }, []);

  /* O botão do cabeçalho é de dois estados. Ele parte do que está na tela
     — inclusive quando isso veio do sistema — e grava uma escolha explícita,
     que a partir daí passa a ter precedência sobre o SO. */
  const toggleTheme = useCallback(
    () => setPreference(theme === "dark" ? "light" : "dark"),
    [setPreference, theme]
  );

  const value = useMemo(
    () => ({ theme, preference, setPreference, toggleTheme }),
    [theme, preference, setPreference, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
