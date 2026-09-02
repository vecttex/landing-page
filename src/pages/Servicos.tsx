import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button, Reveal, Section, SectionHeading } from "../components/ui";
import {
  CTASection,
  DeliverablesGrid,
  ExtrasSection,
  FaqSection,
  PageHero,
  ProcessTimeline,
  TypesGrid,
} from "../components/sections";
import { PhoneSiteMockup, BrowserMockup } from "../components/Mockups";
import { RichText } from "../components/RichText";
import { Icon } from "../components/Icon";
import { PREPARE_ICON } from "../config/site";

export default function Servicos() {
  const { t } = useTranslation();
  const prepare = t("services.prepare.items", { returnObjects: true });

  return (
    <>
      <PageHero
        eyebrow={t("services.hero.eyebrow")}
        title={<RichText k="services.hero.title" />}
        lead={t("services.hero.lead")}
      />

      {/* ----------------------------- ENTREGAS ----------------------------- */}
      <Section>
        <SectionHeading
          eyebrow={t("services.deliverables.eyebrow")}
          title={t("services.deliverables.title")}
          lead={t("services.deliverables.lead")}
        />
        <div className="mt-14">
          <DeliverablesGrid />
        </div>
      </Section>

      {/* ------------------------------ FORMATOS ---------------------------- */}
      <Section id="tipos" className="border-t border-line bg-ink-2/40">
        <SectionHeading
          align="center"
          eyebrow={t("services.types.eyebrow")}
          title={t("services.types.title")}
          lead={t("services.types.lead")}
        />
        <div className="mt-14">
          <TypesGrid />
        </div>
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-dashed border-line-2/70 bg-surface/30 px-7 py-7 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="font-display text-[19px] font-semibold tracking-[-0.02em]">
                {t("services.types.custom.title")}
              </h3>
              <p className="mt-2 max-w-xl text-[13.8px] leading-relaxed text-muted">
                {t("services.types.custom.desc")}
              </p>
            </div>
            <Button to="/contato" className="shrink-0">
              {t("services.types.custom.cta")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </Reveal>
      </Section>

      {/* ------------------------------ PROCESSO ---------------------------- */}
      <Section id="processo">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.85fr]">
          <SectionHeading
            eyebrow={t("services.process.eyebrow")}
            title={<RichText k="services.process.title" />}
            lead={t("services.process.lead")}
          />
          <Reveal delay={0.14}>
            <div className="relative flex items-center justify-center">
              <div className="pointer-events-none absolute h-72 w-72 rounded-full bg-accent/12 blur-[100px]" />
              <div className="relative w-full max-w-md rotate-[-1.5deg]">
                <BrowserMockup />
              </div>
              <div className="absolute -bottom-10 -right-2 animate-float-slow sm:right-2">
                <PhoneSiteMockup />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-20">
          <ProcessTimeline detailed />
        </div>
      </Section>

      {/* ---------------------------- PREPARAÇÃO ---------------------------- */}
      <Section className="border-t border-line bg-ink-2/40">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow={t("services.prepare.eyebrow")}
              title={<RichText k="services.prepare.title" />}
              lead={t("services.prepare.lead")}
            />
            <Button to="/contato" className="mt-8">
              {t("services.prepare.cta")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {prepare.map((p, i) => (
              <Reveal key={p.id} delay={(i % 2) * 0.08}>
                <div className="group h-full rounded-2xl border border-line bg-surface/40 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-line-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line-2/60 bg-white/[0.03] transition-colors group-hover:border-accent/50">
                    <Icon name={PREPARE_ICON[p.id]} className="h-4.5 w-4.5 text-accent-2" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-5 font-display text-[17.5px] font-semibold tracking-[-0.02em]">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <ExtrasSection />
      <FaqSection />
      <CTASection />
    </>
  );
}
