import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function setMeta(selector: string, content: string) {
  const el = document.head.querySelector<HTMLMetaElement>(selector);
  if (el) el.content = content;
}

/**
 * Mantém `<html lang>`, o título e as meta tags em sincronia com o idioma.
 *
 * O `index.html` continua servindo as tags em pt-BR como valor inicial — é o
 * que um leitor sem JS enxerga hoje, e esse comportamento não muda. Este
 * componente só sobrescreve depois que a aplicação sobe.
 */
export function DocumentMeta() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.title = t("meta.title");
    setMeta('meta[name="description"]', t("meta.description"));
    setMeta('meta[property="og:title"]', t("meta.ogTitle"));
    setMeta('meta[property="og:description"]', t("meta.ogDescription"));
    setMeta('meta[property="og:locale"]', t("meta.ogLocale"));
  }, [t, i18n.language]);

  return null;
}
