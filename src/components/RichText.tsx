import { Trans } from "react-i18next";
import type { ParseKeys } from "i18next";

type TransKey = ParseKeys<"translation">;

/**
 * Títulos que misturam texto e marcação.
 *
 * O conteúdo continua sendo uma frase só, sob controle de quem traduz, e o
 * mapa de tags vive num lugar único — nenhuma página repete a marcação:
 *
 * · `<br/>`, `<brSm/>`, `<brMd/>` — quebras de linha (as duas últimas só a
 *   partir de `sm:` e `md:`, como no layout original)
 * · `<accent>…</accent>` — trecho em degradê dourado
 *
 * ```tsx
 * <RichText k="home.hero.title" />
 * ```
 */
export function RichText({ k }: { k: TransKey }) {
  return (
    <Trans
      i18nKey={k}
      components={{
        accent: <span className="text-gradient" />,
        brSm: <br className="hidden sm:block" />,
        brMd: <br className="hidden md:block" />,
      }}
    />
  );
}
