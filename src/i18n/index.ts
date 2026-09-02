/* -------------------------------------------------------------------------
 * Camada de conteúdo do site: instância única do i18next.
 *
 * Importado uma vez em `main.tsx`. Os componentes consomem tudo por
 * `useTranslation()` / `<Trans>` — nenhum deles conhece a estrutura física
 * dos arquivos de conteúdo.
 * ---------------------------------------------------------------------- */

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { ptBR } from "./resources/pt-BR";
import { enUS } from "./resources/en-US";
import {
  DEFAULT_LOCALE,
  LOCALE_CODES,
  QUERY_PARAM,
  STORAGE_KEY,
  resolveLocale,
} from "./config";

const bundles = {
  "pt-BR": ptBR,
  "en-US": enUS,
};

if (import.meta.env.DEV) {
  /* Import dinâmico: a checagem não entra no bundle de produção. */
  import("./parity").then(({ assertResourceParity }) =>
    assertResourceParity(bundles, DEFAULT_LOCALE)
  );
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      "pt-BR": { translation: bundles["pt-BR"] },
      "en-US": { translation: bundles["en-US"] },
    },
    /* Idioma padrão e destino de qualquer chave que falte em outro idioma. */
    fallbackLng: DEFAULT_LOCALE,
    supportedLngs: LOCALE_CODES,
    load: "currentOnly",
    detection: {
      /* ?lang= vence a preferência salva, que vence o idioma do navegador. */
      order: ["querystring", "localStorage", "navigator"],
      lookupQuerystring: QUERY_PARAM,
      lookupLocalStorage: STORAGE_KEY,
      caches: ["localStorage"],
      /* Traz o que for detectado para um idioma suportado: resolve a região
         (pt-PT → pt-BR, en-GB → en-US) e joga o resto no padrão. */
      convertDetectedLanguage: resolveLocale,
    },
    interpolation: {
      /* React já escapa o que renderiza. */
      escapeValue: false,
    },
    returnNull: false,
    debug: false,
  });

export default i18n;
