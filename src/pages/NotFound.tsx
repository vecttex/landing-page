import { ArrowLeft } from "lucide-react";
import { Button, GlowOrb } from "../components/ui";
import { waLink } from "../lib/site";
import { WhatsAppGlyph } from "../components/WhatsAppFab";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden px-5 pt-[120px] sm:px-8">
      <div className="grid-lines absolute inset-0 opacity-50 mask-fade-b" />
      <GlowOrb className="-left-40 top-0" size={600} />
      <div className="relative mx-auto w-full max-w-[1200px] py-24 text-center">
        <p className="font-label text-[11px] uppercase tracking-[0.3em] text-accent-2">
          Erro 404
        </p>
        <h1 className="mt-6 font-display text-[clamp(3rem,12vw,7rem)] font-semibold leading-none tracking-[-0.05em]">
          Página não <span className="text-gradient">encontrada</span>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-[15.5px] leading-relaxed text-muted">
          O endereço que você tentou acessar não existe. Volte para o início ou
          fale com a nossa equipe pelo WhatsApp.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button to="/">
            <ArrowLeft className="h-4 w-4" />
            Voltar ao início
          </Button>
          <Button href={waLink()} variant="ghost">
            <WhatsAppGlyph className="h-4 w-4 text-wa" />
            Falar no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
