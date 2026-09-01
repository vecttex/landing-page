import { Eye, Handshake, Compass, Gem, Users, Rocket } from "lucide-react";
import { Button, Reveal, Section, SectionHeading, GlowOrb, Eyebrow } from "../components/ui";
import { CTASection, PageHero, LinkCard } from "../components/sections";
import { BrowserMockup } from "../components/Mockups";
import { WhatsAppGlyph } from "../components/WhatsAppFab";
import { waLink } from "../lib/site";

const VALUES = [
  {
    icon: Eye,
    title: "Clareza antes de tudo",
    desc: "Explicamos cada etapa em linguagem simples. Você nunca fica sem saber o que está acontecendo com o seu projeto.",
  },
  {
    icon: Handshake,
    title: "Confiança na prática",
    desc: "Você vê o resultado, pede alterações e só paga depois de aprovar. A confiança começa pelo nosso lado.",
  },
  {
    icon: Compass,
    title: "Direcionado ao objetivo",
    desc: "Antes de pensar em design, entendemos o que o seu negócio precisa comunicar e para quem.",
  },
  {
    icon: Gem,
    title: "Acabamento premium",
    desc: "Tipografia, espaçamento, velocidade e detalhes. É isso que separa um site amador de um site profissional.",
  },
  {
    icon: Users,
    title: "Atendimento próximo",
    desc: "Você conversa com a equipe que está desenvolvendo o seu projeto, direto pelo WhatsApp.",
  },
  {
    icon: Rocket,
    title: "Sem limitação de escopo",
    desc: "Sites de apresentação são só o começo. Avaliamos qualquer projeto e desenvolvemos o que for necessário.",
  },
];

const NUMBERS = [
  { value: "5", label: "Etapas claras do início à entrega" },
  { value: "6+", label: "Formatos de projeto disponíveis" },
  { value: "100%", label: "Sites responsivos para celular" },
  { value: "24h", label: "Canal de WhatsApp sempre aberto" },
];

export default function Sobre() {
  return (
    <>
      <PageHero
        eyebrow="Sobre nós"
        title={
          <>
            Somos a equipe por trás dos{" "}
            <span className="text-gradient">sites que apresentam</span> o seu
            negócio.
          </>
        }
        lead="A Vecttex é uma empresa de tecnologia dedicada a negócios que querem uma presença digital à altura do que oferecem no mundo real — websites, aplicações mobile e soluções sob medida."
      />

      {/* manifesto */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Eyebrow>Nossa forma de trabalhar</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(1.8rem,4.2vw,2.9rem)] font-semibold leading-[1.06] tracking-[-0.03em]">
              Um site não é só uma página.
              <br />
              <span className="text-gradient">É a primeira impressão.</span>
            </h2>
            <div className="mt-7 space-y-5 text-[15.5px] leading-relaxed text-muted">
              <p>
                Muitos negócios excelentes ainda são julgados por uma presença
                digital que não corresponde à qualidade do que entregam. Nosso
                trabalho é corrigir esse desencontro.
              </p>
              <p>
                Criamos sites para apresentar negócios na internet, mas não
                limitamos nossa atuação a isso. Se o seu projeto pede algo
                diferente, avaliamos a necessidade e desenvolvemos uma solução
                específica — cada projeto é personalizado de acordo com o
                objetivo do cliente.
              </p>
              <p className="border-l-2 border-accent pl-5 text-fg/85">
                “Você vê o projeto pronto, pede as alterações que quiser e só
                paga depois de aprovar. É assim que a gente entende
                profissionalismo.”
              </p>
            </div>
            <Button href={waLink()} variant="wa" className="mt-9">
              <WhatsAppGlyph className="h-4.5 w-4.5" />
              Conversar com a equipe
            </Button>
          </div>

          <Reveal delay={0.12}>
            <div className="relative">
              <GlowOrb className="-right-20 -top-20" size={420} color="rgba(255,138,0,0.18)" />
              <div className="relative rotate-[1.5deg]">
                <BrowserMockup url="vecttex.com.br/seu-projeto" />
              </div>
              <div className="relative mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-line bg-surface/50 p-5">
                  <p className="font-display text-[26px] font-semibold tracking-[-0.03em] text-accent">
                    Desktop
                  </p>
                  <p className="mt-1.5 text-[12.5px] leading-snug text-muted">
                    Layout amplo e bem estruturado
                  </p>
                </div>
                <div className="rounded-2xl border border-line bg-surface/50 p-5">
                  <p className="font-display text-[26px] font-semibold tracking-[-0.03em] text-ember">
                    Mobile
                  </p>
                  <p className="mt-1.5 text-[12.5px] leading-snug text-muted">
                    Perfeito na tela do celular
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* valores */}
      <Section className="border-t border-line bg-ink-2/40">
        <SectionHeading
          align="center"
          eyebrow="Nossos princípios"
          title="O que orienta cada projeto"
          lead="Seis compromissos que aplicamos em todos os trabalhos, independentemente do tamanho da empresa."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={(i % 3) * 0.08}>
              <div className="card-sheen group h-full rounded-2xl border border-line bg-surface/45 p-7 transition-all duration-500 hover:-translate-y-1.5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line-2/60 bg-gradient-to-br from-white/[0.07] to-transparent transition-all duration-500 group-hover:border-accent/50 group-hover:from-accent/20">
                  <v.icon className="h-5 w-5 text-accent-2" strokeWidth={1.7} />
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

      {/* numbers */}
      <Section>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {NUMBERS.map((n, i) => (
            <Reveal key={n.label} delay={i * 0.07}>
              <div className="h-full bg-ink-2 px-7 py-10">
                <p className="font-display text-[44px] font-semibold leading-none tracking-[-0.04em] text-gradient">
                  {n.value}
                </p>
                <p className="mt-4 text-[13px] leading-snug text-muted">{n.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* links */}
      <Section className="pt-0">
        <div className="grid gap-5 md:grid-cols-3">
          <Reveal>
            <LinkCard
              to="/servicos"
              label="Serviços"
              title="O que fazemos"
              desc="Sites profissionais, design sob medida, integração com WhatsApp e projetos personalizados."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <LinkCard
              to="/processo"
              label="Processo"
              title="Como trabalhamos"
              desc="Cinco etapas claras, com alterações antes do pagamento e entrega após a sua aprovação."
            />
          </Reveal>
          <Reveal delay={0.16}>
            <LinkCard
              to="/contato"
              label="Contato"
              title="Fale com a gente"
              desc="Conte o que você precisa e receba um retorno da nossa equipe pelo WhatsApp."
            />
          </Reveal>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
