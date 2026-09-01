import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Star } from "lucide-react";
import { Button, Eyebrow, GlowOrb, Reveal, Section, SectionHeading } from "../components/ui";
import { BrowserMockup, PhoneSiteMockup } from "../components/Mockups";
import { WhatsAppGlyph } from "../components/WhatsAppFab";
import {
  CTASection,
  ExtrasSection,
  FaqSection,
  Marquee,
  ProcessTimeline,
  ServicesGrid,
  TrustStrip,
  TypesGrid,
  WhatsAppSupport,
} from "../components/sections";
import { BRAND, waLink } from "../lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

const STATS = [
  { value: "100%", label: "Projetos sob medida" },
  { value: "0", label: "Pago antes de aprovar" },
  { value: "∞", label: "Ajustes até aprovar" },
  { value: "1:1", label: "Atendimento no WhatsApp" },
];

export default function Home() {
  return (
    <>
      {/* ------------------------------- HERO ------------------------------- */}
      <section className="relative overflow-hidden px-5 pb-20 pt-[120px] sm:px-8 md:pb-28 md:pt-[150px]">
        <div className="grid-lines absolute inset-0 opacity-70 mask-fade-b" />
        <GlowOrb className="-left-56 -top-40" size={700} />
        <GlowOrb className="-right-40 top-24" size={560} color="rgba(255,209,102,0.12)" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

        <div className="relative mx-auto grid w-full max-w-[1200px] items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 py-1.5 pl-1.5 pr-4 backdrop-blur">
                <span className="flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 font-label text-[9px] font-semibold uppercase tracking-[0.14em] text-[#111111]">
                  <Star className="h-2.5 w-2.5 fill-current" /> {BRAND.name}
                </span>
                <span className="text-[12.5px] text-fg/75">
                  Websites, aplicativos e soluções sob medida
                </span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1, ease }}
              className="mt-8 font-display text-[clamp(2.6rem,6.6vw,4.75rem)] font-semibold leading-[0.96] tracking-[-0.042em]"
            >
              Soluções digitais
              <br />
              profissionais para
              <br />
              <span className="text-gradient">apresentar a sua empresa</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.22, ease }}
              className="mt-7 max-w-xl text-[16px] leading-relaxed text-muted md:text-[17.5px]"
            >
              Desenvolvemos sites profissionais para empresas e estabelecimentos
              — com atendimento próximo, suporte via WhatsApp e projetos
              personalizados para cada cliente.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.32, ease }}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <Button href={waLink()} variant="wa">
                <WhatsAppGlyph className="h-4.5 w-4.5" />
                Falar no WhatsApp
              </Button>
              <Button to="/servicos" variant="ghost">
                Ver nossos serviços
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="mt-12 grid max-w-lg grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4"
            >
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-[26px] font-semibold leading-none tracking-[-0.03em] text-fg">
                    {s.value}
                  </p>
                  <p className="mt-2 text-[11.5px] leading-snug text-muted">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* mockups */}
          <div className="relative" style={{ perspective: 1600 }}>
            <motion.div
              initial={{ opacity: 0, y: 50, rotateY: -14, rotateX: 10 }}
              animate={{ opacity: 1, y: 0, rotateY: -8, rotateX: 4 }}
              transition={{ duration: 1.1, delay: 0.25, ease }}
              className="relative z-10"
            >
              <BrowserMockup />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.55, ease }}
              className="absolute -bottom-14 -left-4 z-20 hidden animate-float-slow sm:block"
            >
              <PhoneSiteMockup />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.8 }}
              className="absolute -right-2 -top-8 z-20 hidden rounded-2xl border border-line bg-surface/90 px-4 py-3 backdrop-blur-xl md:block"
            >
              <p className="font-label text-[9px] uppercase tracking-[0.18em] text-muted">
                Entrega
              </p>
              <p className="mt-1 flex items-center gap-2 text-[13px] font-semibold text-fg">
                <span className="h-1.5 w-1.5 rounded-full bg-wa" />
                Só paga se aprovar
              </p>
            </motion.div>

            <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-accent/10 blur-[100px]" />
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* ------------------------------- SOBRE ------------------------------ */}
      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-[24px] border border-line">
                <img
                  src="/img/equipe.jpg"
                  alt="Equipe da Vecttex trabalhando em um projeto"
                  className="h-[420px] w-full object-cover opacity-75 grayscale-[35%] transition-all duration-700 hover:opacity-95 hover:grayscale-0"
                />
              </div>
              <div className="absolute -bottom-7 -right-4 w-[220px] rounded-2xl border border-line bg-ink-2/95 p-5 backdrop-blur-xl sm:-right-7">
                <p className="font-label text-[9px] uppercase tracking-[0.2em] text-accent-2">
                  Nosso compromisso
                </p>
                <p className="mt-2.5 text-[13.5px] leading-snug text-fg/85">
                  Você aprova o projeto antes de pagar. Simples assim.
                </p>
              </div>
              <div className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-tl-[24px] border-l border-t border-accent/40" />
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Quem somos"
              title={
                <>
                  Uma equipe focada em
                  <br className="hidden md:block" /> fazer sua empresa
                  <br className="hidden md:block" />
                  <span className="text-gradient">parecer o que ela é.</span>
                </>
              }
              lead="Nossa equipe desenvolve sites profissionais para empresas e estabelecimentos que querem ser levados a sério na internet. Começamos entendendo o negócio, não o layout."
            />
            <Reveal delay={0.16}>
              <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-muted">
                Não nos limitamos a sites de apresentação: cada projeto pode ser
                personalizado de acordo com o objetivo do cliente, seja um site
                institucional, uma landing page, um catálogo online ou algo
                totalmente sob medida.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button to="/sobre">
                  Conhecer a Vecttex
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
                <Button to="/processo" variant="ghost">
                  Como trabalhamos
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Marquee />

      {/* ----------------------------- SERVIÇOS ----------------------------- */}
      <Section id="servicos">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Serviços"
            title={
              <>
                O que entregamos
                <br /> em cada projeto.
              </>
            }
            lead="Do primeiro rascunho à entrega final, cuidamos de tudo que faz um site parecer profissional — e funcionar como tal."
          />
          <Reveal delay={0.1}>
            <Link
              to="/servicos"
              className="group inline-flex shrink-0 items-center gap-2 text-[13.5px] font-semibold text-fg"
            >
              Ver todos os serviços
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line-2/70 transition-all group-hover:border-accent group-hover:bg-accent group-hover:text-[#111111]">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </Reveal>
        </div>
        <div className="mt-14">
          <ServicesGrid />
        </div>
      </Section>

      {/* ------------------------------- TIPOS ------------------------------ */}
      <Section className="border-t border-line bg-ink-2/40">
        <SectionHeading
          align="center"
          eyebrow="Tipos de projeto"
          title={
            <>
              Escolha o formato
              <br className="hidden sm:block" /> certo para o seu objetivo.
            </>
          }
          lead="Cada negócio comunica de um jeito. Por isso desenvolvemos formatos diferentes — e também projetos que fogem completamente do padrão."
        />
        <div className="mt-14">
          <TypesGrid />
        </div>
      </Section>

      {/* ------------------------------ PROCESSO ---------------------------- */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>Como funciona</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(1.9rem,4.6vw,3.35rem)] font-semibold leading-[1.03] tracking-[-0.03em]">
              Um processo
              <br /> <span className="text-gradient">sem surpresas.</span>
            </h2>
            <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-muted">
              Do primeiro “bom dia” no WhatsApp até a entrega final, você sabe
              exatamente em que etapa o seu projeto está.
            </p>
            <Button to="/processo" variant="ghost" className="mt-8">
              Ver processo completo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          <ProcessTimeline />
        </div>
      </Section>

      <WhatsAppSupport />
      <ExtrasSection />
      <FaqSection />
      <CTASection />
    </>
  );
}
