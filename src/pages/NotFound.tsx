import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button, GlowOrb } from "../components/ui";
import { RichText } from "../components/RichText";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden px-5 pt-[120px] sm:px-8">
      <div className="grid-lines absolute inset-0 opacity-50 mask-fade-b" />
      <GlowOrb className="-left-40 top-0" size={600} />
      <div className="relative mx-auto w-full max-w-[1200px] py-24 text-center">
        <p className="font-label text-[11px] uppercase tracking-[0.3em] text-accent-2">
          {t("notFound.code")}
        </p>
        <h1 className="mt-6 font-display text-[clamp(3rem,12vw,7rem)] font-semibold leading-none tracking-[-0.05em]">
          <RichText k="notFound.title" />
        </h1>
        <p className="mx-auto mt-6 max-w-md text-[15.5px] leading-relaxed text-muted">
          {t("notFound.lead")}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button to="/">
            <ArrowLeft className="h-4 w-4" />
            {t("notFound.home")}
          </Button>
          <Button to="/contato" variant="ghost">
            {t("notFound.contact")}
          </Button>
        </div>
      </div>
    </section>
  );
}
