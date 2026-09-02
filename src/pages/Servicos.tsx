import { ArrowRight } from "lucide-react";
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
import { Icon } from "../components/Icon";
import { PREPARE } from "../content";

export default function Servicos() {
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title={
          <>
            Tudo o que a sua empresa precisa para{" "}
            <span className="text-gradient">existir bem na internet.</span>
          </>
        }
        lead="Sites e aplicativos alinhados ao seu negócio — e o método que usamos para chegar até lá, do primeiro contato à entrega."
      />

      {/* ----------------------------- ENTREGAS ----------------------------- */}
      <Section>
        <SectionHeading
          eyebrow="O que entregamos"
          title="Incluso em todo projeto"
          lead="Independentemente do formato escolhido, estes itens fazem parte de qualquer site que desenvolvemos."
        />
        <div className="mt-14">
          <DeliverablesGrid />
        </div>
      </Section>

      {/* ------------------------------ FORMATOS ---------------------------- */}
      <Section id="tipos" className="border-t border-line bg-ink-2/40">
        <SectionHeading
          align="center"
          eyebrow="Tipos de projeto"
          title="Formatos que desenvolvemos"
          lead="Escolha o formato que combina com o seu objetivo — ou descreva o que você precisa e montamos a solução junto com você."
        />
        <div className="mt-14">
          <TypesGrid />
        </div>
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-dashed border-line-2/70 bg-surface/30 px-7 py-7 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="font-display text-[19px] font-semibold tracking-[-0.02em]">
                Seu projeto não se encaixa em nenhum desses formatos?
              </h3>
              <p className="mt-2 max-w-xl text-[13.8px] leading-relaxed text-muted">
                Sem problema. Avaliamos a sua necessidade e desenvolvemos uma
                solução sob medida, com escopo definido junto com você.
              </p>
            </div>
            <Button to="/contato" className="shrink-0">
              Descrever meu projeto
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </Reveal>
      </Section>

      {/* ------------------------------ PROCESSO ---------------------------- */}
      <Section id="processo">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.85fr]">
          <SectionHeading
            eyebrow="Como funciona"
            title={
              <>
                Cinco etapas,
                <br /> <span className="text-gradient">do briefing à entrega.</span>
              </>
            }
            lead="Um processo transparente, pensado para quem não entende de tecnologia e só quer um site profissional funcionando — sem dor de cabeça."
          />
          <Reveal delay={0.14}>
            <div className="relative flex items-center justify-center">
              <div className="pointer-events-none absolute h-72 w-72 rounded-full bg-accent/12 blur-[100px]" />
              <div className="relative w-full max-w-md rotate-[-1.5deg]">
                <BrowserMockup url="suaempresa.com.br" />
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
              eyebrow="Antes de começar"
              title={
                <>
                  O que ajuda a
                  <br /> <span className="text-gradient">acelerar o projeto.</span>
                </>
              }
              lead="Nada disso é obrigatório para começar a conversa — mas quanto mais informação, mais rápido chegamos ao resultado ideal."
            />
            <Button to="/contato" className="mt-8">
              Começar meu projeto
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {PREPARE.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.08}>
                <div className="group h-full rounded-2xl border border-line bg-surface/40 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-line-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line-2/60 bg-white/[0.03] transition-colors group-hover:border-accent/50">
                    <Icon name={p.icon} className="h-4.5 w-4.5 text-accent-2" strokeWidth={1.7} />
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
