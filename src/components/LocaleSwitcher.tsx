import { useTranslation } from "react-i18next";
import { LOCALES } from "../i18n/config";

/**
 * Troca de idioma. O detector do i18next persiste a escolha em localStorage
 * sozinho (`caches: ["localStorage"]`), então aqui basta trocar o idioma.
 */
export function LocaleSwitcher({ className = "" }: { className?: string }) {
  const { i18n } = useTranslation();
  const active = i18n.resolvedLanguage ?? i18n.language;

  return (
    <div
      className={`inline-flex items-center rounded-full border border-line bg-white/[0.02] p-0.5 ${className}`}
    >
      {LOCALES.map((locale) => {
        const isActive = locale.code === active;
        return (
          <button
            key={locale.code}
            type="button"
            lang={locale.code}
            aria-label={locale.name}
            aria-current={isActive ? "true" : undefined}
            onClick={() => void i18n.changeLanguage(locale.code)}
            className={`rounded-full px-2.5 py-1 font-label text-[10px] uppercase tracking-[0.14em] transition-colors duration-300 ${
              isActive
                ? "bg-white/[0.07] text-fg"
                : "text-muted hover:text-fg"
            }`}
          >
            {locale.short}
          </button>
        );
      })}
    </div>
  );
}
