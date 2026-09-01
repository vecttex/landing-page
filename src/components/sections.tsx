import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Plus,
  Minus,
  ShieldCheck,
  Wallet,
  Sparkles,
  Headphones,
} from "lucide-react";
import {
  BRAND,
  SERVICES,
  PROJECT_TYPES,
  PROCESS,
  EXTRAS,
  FAQ,
  waLink,
} from "../lib/site";
import { Button, Eyebrow, Reveal, Section, SectionHeading, GlowOrb } from "./ui";
import { LogoMark } from "./Logo";
import { Icon } from "./Icon";
import { ChatMockup } from "./Mockups";
import { WhatsAppGlyph } from "./WhatsAppFab";

/* ---------------------------------------------------------------- */

export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line px-5 pb-16 pt-[128px] sm:px-8 md:pb-24 md:pt-[160px]">
      <div className="grid-lines absolute inset-0 opacity-60 mask-fade-b" />
      <GlowOrb className="-left-40 -top-52" size={640} />
      <GlowOrb
        className="-right-52 top-0"
        size={520}
        color="rgba(255,209,102,0.13)"
      />
      <div className="relative mx-auto w-full max-w-[1200px]">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.07}>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.4rem,6.5vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-7 max-w-2xl text-[16px] leading-relaxed text-muted md:text-[17px]">
            {lead}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */

const TRUST = [
  { icon: Wallet, label: "Pagamento só após aprovação" },
  { icon: Sparkles, label: "Alterações antes de fechar" },
  { icon: Headphones, label: "Suporte direto no WhatsApp" },
  { icon: ShieldCheck, label: "Projeto 100% personalizado" },
];

export function TrustStrip() {
  return (
    <div className="relative border-y border-line bg-ink-2/60">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-2 gap-px px-5 sm:px-8 lg:grid-cols-4">
        {TRUST.map((t, i) => (
          <Reveal key={t.label} delay={i * 0.07}>
            <div className="flex items-center gap-3 py-6 lg:py-7">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-accent/25 bg-accent/10">
                <t.icon className="h-4 w-4 text-accent" strokeWidth={1.8} />
              </span>
              <span className="text-[12.5px] font-medium leading-tight text-fg/85 sm:text-[13.5px]">
                {t.label}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */

const MARQUEE_WORDS = [
  "Sites institucionais",
  "Landing pages",
  "Portfólios",
  "Catálogos online",
  "Sites de apresentação",
  "Projetos personalizados",
  "Aplicativos",
  "Hospedagem",
];

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-line bg-ink py-5 mask-fade-x">
      <div className="flex w-max animate-marquee items-center gap-10">
        {[...MARQUEE_WORDS, ...MARQUEE_WORDS].map((w, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-[15px] font-medium tracking-[-0.01em] text-fg/45 sm:text-[17px]">
              {w}
            </span>
            <LogoMark flat className="h-3 w-auto opacity-80" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */

export function ServicesGrid({ limit }: { limit?: number }) {
  const list = limit ? SERVICES.slice(0, limit) : SERVICES;
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
      {list.map((s, i) => (
        <Reveal key={s.title} delay={(i % 4) * 0.06}>
          <div className="group relative h-full bg-ink-2 p-7 transition-colors duration-500 hover:bg-surface">
            <span className="absolute right-6 top-6 font-label text-[10px] text-muted/35">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line-2/60 bg-gradient-to-br from-white/[0.07] to-transparent transition-all duration-500 group-hover:border-accent/50 group-hover:from-accent/20">
              <Icon
                name={s.icon}
                className="h-5 w-5 text-accent-2 transition-colors group-hover:text-accent"
              />
            </span>
            <h3 className="mt-6 font-display text-[19px] font-semibold tracking-[-0.02em] text-fg">
              {s.title}
            </h3>
            <p className="mt-3 text-[13.8px] leading-relaxed text-muted">
              {s.desc}
            </p>
            <span className="mt-6 block h-px w-0 bg-gradient-to-r from-accent to-transparent transition-all duration-500 group-hover:w-full" />
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------- */

export function TypesGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {PROJECT_TYPES.map((t, i) => (
        <Reveal key={t.title} delay={(i % 3) * 0.08}>
          <article className="card-sheen group relative h-full overflow-hidden rounded-2xl border border-line bg-surface/50 transition-all duration-500 hover:-translate-y-1.5 hover:border-line-2">
            <div className="relative h-44 overflow-hidden">
              <img
                src={t.image}
                alt={t.title}
                loading="lazy"
                className="h-full w-full scale-105 object-cover opacity-55 grayscale transition-all duration-[900ms] group-hover:scale-100 group-hover:opacity-80 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/45 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/50 px-2.5 py-1 font-label text-[9px] uppercase tracking-[0.18em] text-fg/80 backdrop-blur">
                {t.tag}
              </span>
            </div>
            <div className="relative -mt-8 p-6">
              <h3 className="font-display text-[21px] font-semibold tracking-[-0.025em] text-fg">
                {t.title}
              </h3>
              <p className="mt-3 text-[13.8px] leading-relaxed text-muted">
                {t.desc}
              </p>
              <ul className="mt-5 space-y-2">
                {t.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-[12.5px] text-fg/70">
                    <Check className="h-3.5 w-3.5 shrink-0 text-accent" strokeWidth={2.4} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------- */

export function ProcessTimeline({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="relative">
      <div className="absolute left-[27px] top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-accent via-line-2 to-transparent md:block" />
      <div className="space-y-4 md:space-y-0">
        {PROCESS.map((p, i) => (
          <Reveal key={p.step} delay={i * 0.08}>
            <div className="group relative flex gap-5 rounded-2xl border border-line bg-surface/40 p-6 transition-colors duration-500 hover:border-line-2 md:border-0 md:bg-transparent md:py-7 md:pl-0 md:hover:bg-transparent">
              <div className="relative z-10 shrink-0">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-line-2/70 bg-ink-2 font-label text-[13px] font-medium text-accent transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-[#111111]">
                  {p.step}
                </span>
              </div>
              <div className="pt-1 md:pl-4">
                <div className="flex items-center gap-2.5">
                  <Icon name={p.icon} className="h-4 w-4 text-accent-2" />
                  <h3 className="font-display text-[20px] font-semibold tracking-[-0.02em] text-fg md:text-[23px]">
                    {p.title}
                  </h3>
                </div>
                <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-muted md:text-[15px]">
                  {p.desc}
                </p>
                {detailed && (
                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-3">
                    {p.detail.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 rounded-xl border border-line bg-ink-2/70 px-3.5 py-3 text-[12.5px] leading-snug text-fg/75"
                      >
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" strokeWidth={2.4} />
                        {d}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */

export function WhatsAppSupport() {
  return (
    <Section className="overflow-hidden">
      <div className="relative grid items-center gap-14 rounded-[28px] border border-line bg-gradient-to-br from-surface/80 via-ink-2 to-ink-2 p-8 sm:p-12 lg:grid-cols-[1.15fr_0.85fr] lg:p-16">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-wa/12 blur-[110px]" />
        <div className="relative">
          <Eyebrow className="text-wa!">Atendimento</Eyebrow>
          <h2 className="mt-5 font-display text-[clamp(1.9rem,4.4vw,3.1rem)] font-semibold leading-[1.04] tracking-[-0.03em]">
            Suporte pelo WhatsApp,
            <br />
            <span className="text-gradient">com gente de verdade.</span>
          </h2>
          <p className="mt-6 max-w-lg text-[15.5px] leading-relaxed text-muted">
            Nada de formulários sem resposta ou sistemas de ticket. Nossa equipe
            fica disponível para responder dúvidas e prestar suporte diretamente
            pelo WhatsApp — um atendimento próximo, rápido e fácil.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Dúvidas respondidas durante todo o projeto",
              "Acompanhamento do andamento em tempo real",
              "Pedidos de alteração pelo mesmo canal",
              "Suporte também depois da entrega",
            ].map((t) => (
              <div
                key={t}
                className="flex items-start gap-2.5 rounded-xl border border-line bg-white/[0.02] px-4 py-3.5"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-wa" strokeWidth={2.4} />
                <span className="text-[13px] leading-snug text-fg/80">{t}</span>
              </div>
            ))}
          </div>

          <Button href={waLink()} variant="wa" className="mt-9">
            <WhatsAppGlyph className="h-4.5 w-4.5" />
            Conversar agora
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -4 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2.5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <ChatMockup />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */

export function ExtrasSection() {
  return (
    <Section id="adicionais">
      <SectionHeading
        eyebrow="Serviços adicionais"
        title={
          <>
            Além do site, se você
            <br className="hidden sm:block" /> precisar de mais.
          </>
        }
        lead="Serviços opcionais que você pode contratar junto com o projeto — sempre com as regras claras desde o início."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        {EXTRAS.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.1}>
            <div className="card-sheen group relative h-full overflow-hidden rounded-2xl border border-line bg-surface/45 p-8 transition-all duration-500 hover:-translate-y-1 sm:p-10">
              <div className="stripe-accent pointer-events-none absolute -right-16 -top-16 h-40 w-40 rotate-12 opacity-40" />
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/25 bg-accent/10">
                  <Icon name={e.icon} className="h-5 w-5 text-accent" />
                </span>
                <span className="rounded-full border border-line bg-ink px-3 py-1.5 font-label text-[9.5px] uppercase tracking-[0.14em] text-muted">
                  {e.price}
                </span>
              </div>
              <h3 className="mt-7 font-display text-[24px] font-semibold tracking-[-0.025em]">
                {e.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
                {e.desc}
              </p>
              <ul className="mt-6 space-y-2.5">
                {e.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-[13px] text-fg/75">
                    <Check className="h-3.5 w-3.5 shrink-0 text-accent" strokeWidth={2.4} />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex items-start gap-3 rounded-xl border border-ember/20 bg-ember/[0.07] px-4 py-3.5">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-ember" strokeWidth={1.9} />
                <p className="text-[12.5px] leading-snug text-ember/90">{e.highlight}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading
            eyebrow="Dúvidas frequentes"
            title={
              <>
                Tudo claro,
                <br /> desde o começo.
              </>
            }
            lead="Transparência é parte do nosso trabalho. Se ficar qualquer dúvida, é só chamar no WhatsApp."
          />
          <Reveal delay={0.18}>
            <Button href={waLink()} variant="ghost" className="mt-8">
              <WhatsAppGlyph className="h-4 w-4 text-wa" />
              Perguntar no WhatsApp
            </Button>
          </Reveal>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {FAQ.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-6 py-5 text-left"
                >
                  <span
                    className={`font-display text-[16.5px] font-medium tracking-[-0.015em] transition-colors md:text-[18px] ${
                      isOpen ? "text-accent" : "text-fg"
                    }`}
                  >
                    {f.q}
                  </span>
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line-2/70 text-muted">
                    {isOpen ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pr-10 text-[14px] leading-relaxed text-muted">
                    {f.a}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */

export function CTASection() {
  return (
    <Section className="pb-28">
      <div className="relative overflow-hidden rounded-[28px] border border-line bg-ink-2 px-7 py-16 text-center sm:px-14 md:py-24">
        <div className="grid-lines absolute inset-0 opacity-50" />
        <GlowOrb className="left-1/2 top-full -translate-x-1/2 -translate-y-1/2" size={760} />
        <div className="relative mx-auto max-w-3xl">
          <Reveal>
            <LogoMark className="mx-auto h-12 w-auto" />
          </Reveal>
          <Reveal delay={0.06}>
            <p className="slogan mt-6 font-label text-[9.5px] font-medium text-accent/75">
              {BRAND.slogan}
            </p>
          </Reveal>
          <Reveal delay={0.07}>
            <h2 className="mt-6 font-display text-[clamp(2.1rem,5.4vw,3.9rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
              Conte sobre o seu negócio.
              <br />
              <span className="text-gradient">O resto é com a gente.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mx-auto mt-6 max-w-xl text-[15.5px] leading-relaxed text-muted">
              Uma conversa rápida no WhatsApp já é o suficiente para entendermos
              o seu projeto. Sem compromisso e sem cobrança antes da aprovação.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={waLink()} variant="wa">
                <WhatsAppGlyph className="h-4.5 w-4.5" />
                Falar no WhatsApp
              </Button>
              <Button to="/contato" variant="ghost">
                Enviar meu projeto
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */

export function LinkCard({
  to,
  label,
  title,
  desc,
}: {
  to: string;
  label: string;
  title: string;
  desc: string;
}) {
  return (
    <Link
      to={to}
      className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-surface/40 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface"
    >
      <div>
        <span className="font-label text-[10px] uppercase tracking-[0.2em] text-accent-2">
          {label}
        </span>
        <h3 className="mt-4 font-display text-[21px] font-semibold tracking-[-0.02em]">
          {title}
        </h3>
        <p className="mt-2.5 text-[13.8px] leading-relaxed text-muted">{desc}</p>
      </div>
      <span className="mt-7 inline-flex items-center gap-2 text-[13px] font-semibold text-fg">
        Ver mais
        <ArrowUpRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </span>
    </Link>
  );
}
