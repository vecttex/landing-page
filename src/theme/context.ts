import { createContext, useContext } from "react";
import { DEFAULT_PREFERENCE, DEFAULT_THEME } from "./config";
import type { Theme, ThemePreference } from "./config";

export type ThemeContextValue = {
  /** Tema efetivamente aplicado ao documento. */
  theme: Theme;
  /** O que o visitante escolheu — `system` enquanto ele não escolher nada. */
  preference: ThemePreference;
  setPreference: (preference: ThemePreference) => void;
  /** Alterna entre claro e escuro a partir do tema visível no momento. */
  toggleTheme: () => void;
};

/**
 * O valor padrão só existe para o caso de alguém renderizar um consumidor
 * fora do provider: o tema institucional, com os comandos inertes.
 */
export const ThemeContext = createContext<ThemeContextValue>({
  theme: DEFAULT_THEME,
  preference: DEFAULT_PREFERENCE,
  setPreference: () => {},
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}
