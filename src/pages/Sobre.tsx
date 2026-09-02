import { useTranslation } from "react-i18next";
import { Reveal, Section, SectionHeading, GlowOrb, Eyebrow } from "../components/ui";
import { CTASection, PageHero, LinkCard, WhatsAppSupport } from "../components/sections";
import { BrowserMockup } from "../components/Mockups";
import { RichText } from "../components/RichText";
import { Icon } from "../components/Icon";
import { ABOUT_LINK_TO, PRINCIPLE_ICON } from "../config/site";

export default function Sobre() {
  const { t } = useTranslation();
  const paragraphs = t("about.manifesto.paragraphs", { returnObjects: true });
  const principles = t("about.principles.items", { returnObjects: true });
  const links = t("about.links", { returnObjects: true });

  return (
    <>
      <PageHero
        eyebrow={t("about.hero.eyebrow")}
        title={<RichText k="about.hero.title" />}
        lead={t("about.hero.lead")}
      />

      {/* ----------------------------- MANIFESTO ---------------------------- */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Eyebrow>{t("about.manifesto.eyebrow")}</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(1.8rem,4.2vw,2.9rem)] font-semibold leading-[1.06] tracking-[-0.03em]">
              <RichText k="about.manifesto.title" />
            </h2>
            <div className="mt-7 space-y-5 text-[15.5px] leading-relaxed text-muted">
              {paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>

          <Reveal delay={0.12}>
            <div className="relative">
              <GlowOrb className="-right-20 -top-20" size={420} color="rgba(255,138,0,0.18)" />
              <div className="relative rotate-[1.5deg]">
                <BrowserMockup url={t("mockups.projectUrl")} />
              </div>
              <div className="relative mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-line bg-surface/50 p-5">
                  <p className="font-display text-[26px] font-semibold tracking-[-0.03em] text-accent">
                    {t("about.devices.web.label")}
                  </p>
                  <p className="mt-1.5 text-[12.5px] leading-snug text-muted">
                    {t("about.devices.web.desc")}
                  </p>
                </div>
                <div className="rounded-2xl border border-line bg-surface/50 p-5">
                  <p className="font-display text-[26px] font-semibold tracking-[-0.03em] text-ember">
                    {t("about.devices.mobile.label")}
                  </p>
                  <p className="mt-1.5 text-[12.5px] leading-snug text-muted">
                    {t("about.devices.mobile.desc")}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ----------------------------- PRINCÍPIOS --------------------------- */}
      <Section className="border-t border-line bg-ink-2/40">
        <SectionHeading
          align="center"
          eyebrow={t("about.principles.eyebrow")}
          title={t("about.principles.title")}
          lead={t("about.principles.lead")}
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((v, i) => (
            <Reveal key={v.id} delay={(i % 4) * 0.08}>
              <div className="group h-full rounded-2xl border border-line bg-surface/45 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/40">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line-2/60 bg-gradient-to-br from-white/[0.07] to-transparent transition-all duration-500 group-hover:border-accent/50 group-hover:from-accent/20">
                  <Icon name={PRINCIPLE_ICON[v.id]} className="h-5 w-5 text-accent-2" strokeWidth={1.7} />
                </span>
                <h3 className="mt-6 font-display text-[19px] font-semibold tracking-[-0.02em]">
                  {v.title}
                </h3>
                <p className="mt-3 text-[13.8px] leading-relaxed text-muted">
                  {v.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <WhatsAppSupport />

      {/* ------------------------------- LINKS ------------------------------ */}
      <Section className="pt-0">
        <div className="grid gap-5 md:grid-cols-3">
          {links.map((link, i) => (
            <Reveal key={link.id} delay={i * 0.08}>
              <LinkCard
                to={ABOUT_LINK_TO[link.id]}
                label={link.label}
                title={link.title}
                desc={link.desc}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
