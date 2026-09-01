import { ArrowRight, Check } from "lucide-react";
import { Button, Reveal, Section, SectionHeading } from "../components/ui";
import {
  CTASection,
  ExtrasSection,
  PageHero,
  ServicesGrid,
  TypesGrid,
  WhatsAppSupport,
} from "../components/sections";
import { PhoneSiteMockup, BrowserMockup } from "../components/Mockups";
import { WhatsAppGlyph } from "../components/WhatsAppFab";
import { waLink } from "../lib/site";

const INCLUDED = [
  "Design exclusivo, criado para o seu negócio",
  "Versão responsiva para celular e tablet",
  "Botões de contato direto pelo WhatsApp",
  "Estrutura organizada e fácil de navegar",
  "Textos e seções alinhados ao seu objetivo",
  "Otimização de imagens e velocidade",
  "Revisão e ajustes antes da entrega",
  "Suporte da equipe pelo WhatsApp",
];

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
        lead="Desenvolvemos sites profissionais para empresas e estabelecimentos — e também projetos personalizados quando a necessidade vai além de um site de apresentação."
      />

      <Section>
        <SectionHeading
          eyebrow="O que oferecemos"
          title="Serviços inclusos no desenvolvimento"
          lead="Cada projeto passa pelas mesmas etapas de cuidado, independentemente do tamanho."
        />
        <div className="mt-14">
          <ServicesGrid />
        </div>
      </Section>

      {/* incluso */}
      <Section className="border-t border-line bg-ink-2/40">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Sempre incluso"
              title={
                <>
                  O pacote base de
                  <br /> <span className="text-gradient">todo projeto.</span>
                </>
              }
              lead="Independentemente do formato escolhido, estes itens fazem parte de qualquer site que desenvolvemos."
            />
            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {INCLUDED.map((item, i) => (
                <Reveal key={item} delay={(i % 4) * 0.05}>
                  <div className="flex items-start gap-3 rounded-xl border border-line bg-surface/40 px-4 py-3.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2.4} />
                    <span className="text-[13px] leading-snug text-fg/80">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
            <Button href={waLink("Olá! Gostaria de saber mais sobre os serviços da Vecttex.")} variant="wa" className="mt-9">
              <WhatsAppGlyph className="h-4.5 w-4.5" />
              Pedir um orçamento
            </Button>
          </div>

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
      </Section>

      {/* tipos */}
      <Section id="tipos">
        <SectionHeading
          align="center"
          eyebrow="Tipos de site"
          title="Formatos que desenvolvemos"
          lead="Sites institucionais, sites de apresentação, landing pages, portfólios, catálogos online e outros tipos de projetos personalizados."
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

      <ExtrasSection />
      <WhatsAppSupport />
      <CTASection />
    </>
  );
}
