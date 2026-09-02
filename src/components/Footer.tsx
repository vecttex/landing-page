import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Globe, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { NAV_ITEMS, SITE, waLink } from "../config/site";
import { Logo } from "./Logo";
import { WhatsAppGlyph } from "./WhatsAppFab";

export function Footer() {
  const { t } = useTranslation();
  const types = t("services.types.items", { returnObjects: true });

  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink-2">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr_1fr_1.25fr]">
          <div>
            <Logo symbolClass="h-[58px]" wordClass="h-[30px]" withSlogan />
            <p className="mt-6 max-w-xs text-[14px] leading-relaxed text-muted">
              {t("brand.claim")}
            </p>
            <a
              href={waLink(t("contact.defaultMessage"))}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-wa/30 bg-wa/10 px-4 py-2.5 text-[13px] font-semibold text-wa transition-colors hover:bg-wa/20"
            >
              <WhatsAppGlyph className="h-4 w-4" />
              {SITE.whatsappDisplay}
            </a>
          </div>

          <div>
            <p className="font-label text-[10px] uppercase tracking-[0.22em] text-fg/50">
              {t("footer.nav")}
            </p>
            <ul className="mt-5 space-y-3">
              {NAV_ITEMS.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    className="group inline-flex items-center gap-1.5 text-[14px] text-muted transition-colors hover:text-fg"
                  >
                    {t(`nav.${n.id}`)}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-label text-[10px] uppercase tracking-[0.22em] text-fg/50">
              {t("footer.projects")}
            </p>
            <ul className="mt-5 space-y-3">
              {types.map((type) => (
                <li key={type.id}>
                  <Link
                    to="/servicos#tipos"
                    className="text-[14px] text-muted transition-colors hover:text-fg"
                  >
                    {type.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-label text-[10px] uppercase tracking-[0.22em] text-fg/50">
              {t("footer.contact")}
            </p>
            <ul className="mt-5 space-y-4 text-[14px] text-muted">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.7} />
                <span className="break-all">{SITE.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.7} />
                <span>{t("contact.address")}</span>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.7} />
                <span>{t("contact.coverage")}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.7} />
                <span className="whitespace-pre-line">{t("contact.hours")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-7 sm:flex-row sm:items-center">
          <p className="font-label text-[10.5px] uppercase tracking-[0.14em] text-muted/70">
            © {new Date().getFullYear()} {SITE.name}
          </p>
          <p className="font-label text-[10.5px] uppercase tracking-[0.14em] text-muted/70">
            {t("footer.credit")}
          </p>
        </div>
      </div>
    </footer>
  );
}
