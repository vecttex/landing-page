import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, Plus, Minus, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  DELIVERABLE_ICON,
  EXTRA_ICON,
  PILLAR_ICON,
  PROCESS_ICON,
  PROJECT_TYPE_IMAGE,
  SITE,
  waLink,
} from "../config/site";
import { Button, Eyebrow, Reveal, Section, SectionHeading, GlowOrb } from "./ui";
import { LogoMark } from "./Logo";
import { Icon } from "./Icon";
import { RichText } from "./RichText";
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

/* Versão curta dos três pilares. Cada um é desenvolvido por extenso em
   uma página específica — aqui aparecem só como assinatura. */
export function TrustStrip() {
  const { t } = useTranslation();
  const pillars = t("home.pillars", { returnObjects: true });

  return (
    <div className="relative border-y border-line bg-ink-2/60">
      <div className="mx-auto grid w-full max-w-[1200px] gap-px px-5 sm:grid-cols-3 sm:px-8">
        {pillars.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.07}>
            <div className="flex items-center gap-3 py-6 lg:py-7">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-accent/25 bg-accent/10">
                <Icon name={PILLAR_ICON[p.id]} className="h-4 w-4 text-accent" strokeWidth={1.8} />
              </span>
              <span className="text-[12.5px] font-medium leading-tight text-fg/85 sm:text-[13.5px]">
                {p.label}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */

export function DeliverablesGrid({ limit }: { limit?: number }) {
  const { t } = useTranslation();
  const all = t("services.deliverables.items", { returnObjects: true });
  const list = limit ? all.slice(0, limit) : all;

  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {list.map((s, i) => (
        <Reveal key={s.id} delay={(i % 3) * 0.06}>
          <div className="group relative h-full bg-ink-2 p-7 transition-colors duration-500 hover:bg-surface">
            <span className="absolute right-6 top-6 font-label text-[10px] text-muted/35">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line-2/60 bg-gradient-to-br from-white/[0.07] to-transparent transition-all duration-500 group-hover:border-accent/50 group-hover:from-accent/20">
              <Icon
                name={DELIVERABLE_ICON[s.id]}
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

export function TypesGrid({ limit }: { limit?: number }) {
  const { t } = useTranslation();
  const all = t("services.types.items", { returnObjects: true });
  const list = limit ? all.slice(0, limit) : all;

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {list.map((type, i) => (
        <Reveal key={type.id} delay={(i % 3) * 0.08}>
          <article className="group relative h-full overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-500 hover:-translate-y-1.5 hover:border-line-2">
            <div className="relative h-44 overflow-hidden">
              <img
                src={PROJECT_TYPE_IMAGE[type.id]}
                alt={type.title}
                loading="lazy"
                className="h-full w-full scale-105 object-cover grayscale transition-all duration-[900ms] group-hover:scale-100 group-hover:grayscale-0"
              />
              <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/50 px-2.5 py-1 font-label text-[9px] uppercase tracking-[0.18em] text-fg/80 backdrop-blur">
                {type.tag}
              </span>
            </div>
            <div className="relative p-6">
              <h3 className="font-display text-[21px] font-semibold tracking-[-0.025em] text-fg">
                {type.title}
              </h3>
              <p className="mt-3 text-[13.8px] leading-relaxed text-muted">
                {type.desc}
              </p>
              <ul className="mt-5 space-y-2">
                {type.points.map((p) => (
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

/* Resumo do método para a home: uma linha por etapa, sem repetir a
   timeline completa que vive na página Serviços. */
export function ProcessSummary() {
  const { t } = useTranslation();
  const steps = t("services.process.items", { returnObjects: true });

  return (
    <ol className="divide-y divide-line border-y border-line">
      {steps.map((p, i) => (
        <Reveal key={p.id} delay={i * 0.06}>
          <li className="group flex items-center gap-4 py-5 transition-colors sm:gap-6">
            <span className="font-label text-[12px] font-medium text-accent/70 transition-colors group-hover:text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-[16px] font-medium tracking-[-0.015em] text-fg sm:text-[18px]">
              {p.title}
            </h3>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}

export function ProcessTimeline({ detailed = false }: { detailed?: boolean }) {
  const { t } = useTranslation();
  const steps = t("services.process.items", { returnObjects: true });

  return (
    <div className="relative">
      <div className="absolute left-[27px] top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-accent via-line-2 to-transparent md:block" />
      <div className="space-y-4 md:space-y-0">
        {steps.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.08}>
            <div className="group relative flex gap-5 rounded-2xl border border-line bg-surface/40 p-6 transition-colors duration-500 hover:border-line-2 md:border-0 md:bg-transparent md:py-7 md:pl-0 md:hover:bg-transparent">
              <div className="relative z-10 shrink-0">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-line-2/70 bg-ink-2 font-label text-[13px] font-medium text-accent transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-[#111111]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="pt-1 md:pl-4">
                <div className="flex items-center gap-2.5">
                  <Icon name={PROCESS_ICON[p.id]} className="h-4 w-4 text-accent-2" />
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
  const { t } = useTranslation();

  return (
    <Section className="overflow-hidden">
      <div className="relative grid items-center gap-14 rounded-[28px] border border-line bg-gradient-to-br from-surface/80 via-ink-2 to-ink-2 p-8 sm:p-12 lg:grid-cols-[1.15fr_0.85fr] lg:p-16">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-wa/12 blur-[110px]" />
        <div className="relative">
          <Eyebrow className="text-wa!">{t("whatsappSupport.eyebrow")}</Eyebrow>
          <h2 className="mt-5 font-display text-[clamp(1.9rem,4.4vw,3.1rem)] font-semibold leading-[1.04] tracking-[-0.03em]">
            <RichText k="whatsappSupport.title" />
          </h2>
          <p className="mt-6 max-w-lg text-[15.5px] leading-relaxed text-muted">
            {t("whatsappSupport.lead")}
          </p>

          <p className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-wa/25 bg-wa/[0.08] px-4 py-2.5 text-[13px] font-medium text-wa">
            <WhatsAppGlyph className="h-4 w-4" />
            {SITE.whatsappDisplay}
          </p>
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
  const { t } = useTranslation();
  const extras = t("services.extras.items", { returnObjects: true });

  return (
    <Section id="adicionais">
      <SectionHeading
        eyebrow={t("services.extras.eyebrow")}
        title={<RichText k="services.extras.title" />}
        lead={t("services.extras.lead")}
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        {extras.map((e, i) => (
          <Reveal key={e.id} delay={i * 0.1}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-surface/45 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 sm:p-10">
              <div className="stripe-accent pointer-events-none absolute -right-16 -top-16 h-40 w-40 rotate-12 opacity-40" />
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/25 bg-accent/10">
                <Icon name={EXTRA_ICON[e.id]} className="h-5 w-5 text-accent" />
              </span>
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
  const { t } = useTranslation();
  const faq = t("services.faq.items", { returnObjects: true });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading
            eyebrow={t("services.faq.eyebrow")}
            title={<RichText k="services.faq.title" />}
            lead={t("services.faq.lead")}
          />
        </div>

        <div className="divide-y divide-line border-y border-line">
          {faq.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.id}>
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
  const { t } = useTranslation();

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
              {SITE.slogan}
            </p>
          </Reveal>
          <Reveal delay={0.07}>
            <h2 className="mt-6 font-display text-[clamp(2.1rem,5.4vw,3.9rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
              <RichText k="cta.title" />
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mx-auto mt-6 max-w-xl text-[15.5px] leading-relaxed text-muted">
              {t("cta.lead")}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={waLink(t("contact.defaultMessage"))} variant="wa">
                <WhatsAppGlyph className="h-4.5 w-4.5" />
                {t("common.talkOnWhatsapp")}
              </Button>
              <Button to="/contato" variant="ghost">
                {t("common.sendProject")}
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
  const { t } = useTranslation();

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
        {t("common.seeMore")}
        <ArrowUpRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </span>
    </Link>
  );
}
