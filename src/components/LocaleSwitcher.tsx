import { useTranslation } from "react-i18next";
import { LOCALES } from "../i18n/config";

export function LocaleSwitcher({
  className = "inline-flex",
}: {
  className?: string;
}) {
  const { i18n } = useTranslation();
  const active = i18n.resolvedLanguage ?? i18n.language;

  return (
    <div
      className={`items-center rounded-full border border-line bg-raise p-0.5 ${className}`}
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
                ? "bg-raise-2 text-fg"
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
