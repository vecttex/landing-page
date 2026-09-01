import { MessageSquare, FileText, Image as ImageIcon, Target, RefreshCw, BadgeCheck } from "lucide-react";
import { Button, Reveal, Section, SectionHeading, GlowOrb } from "../components/ui";
import {
  CTASection,
  FaqSection,
  PageHero,
  ProcessTimeline,
  WhatsAppSupport,
} from "../components/sections";
import { WhatsAppGlyph } from "../components/WhatsAppFab";
import { waLink } from "../lib/site";

const PREPARE = [
  {
    icon: FileText,
    title: "Informações do negócio",
    desc: "Nome, o que você faz, diferenciais, horários e formas de contato.",
  },
  {
    icon: ImageIcon,
    title: "Imagens e logotipo",
    desc: "Fotos do espaço, produtos ou equipe. Se não tiver, a gente orienta.",
  },
  {
    icon: Target,
    title: "Objetivo do site",
    desc: "Receber contatos, mostrar o catálogo, divulgar um serviço específico.",
  },
  {
    icon: MessageSquare,
    title: "Referências que você gosta",
    desc: "Sites de que você gostou ajudam a acertar a direção visual mais rápido.",
  },
];

const GUARANTEES = [
  {
    icon: RefreshCw,
    title: "Alterações antes do pagamento",
    desc: "Você vê o projeto pronto e pode solicitar as mudanças que quiser. Ajustamos tudo o que for necessário para que fique como você deseja.",
  },
  {
    icon: BadgeCheck,
    title: "Entrega após a sua aprovação",
    desc: "A entrega acontece somente depois que você aprovar o resultado final. Sem etapas escondidas e sem cobranças inesperadas.",
  },
];

export default function Processo() {
  return (
    <>
      <PageHero
        eyebrow="Como funciona"
        title={
          <>
            Cinco etapas simples,{" "}
            <span className="text-gradient">do primeiro contato à entrega.</span>
          </>
        }
        lead="Um processo transparente, pensado para quem não entende de tecnologia e só quer um site profissional funcionando — sem dor de cabeça."
      />

      <Section>
        <ProcessTimeline detailed />
      </Section>

      {/* garantias */}
      <Section className="border-t border-line bg-ink-2/40">
        <SectionHeading
          align="center"
          eyebrow="Nosso compromisso"
          title="Você só paga quando estiver satisfeito"
          lead="As duas regras que tornam o nosso processo diferente e deixam você tranquilo do começo ao fim."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {GUARANTEES.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.1}>
              <div className="card-sheen relative h-full overflow-hidden rounded-2xl border border-line bg-surface/50 p-9">
                <GlowOrb className="-left-20 -top-24" size={280} color="rgba(255,176,0,0.22)" />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-accent/25 bg-accent/10">
                  <g.icon className="h-5 w-5 text-accent" strokeWidth={1.7} />
                </span>
                <h3 className="relative mt-7 font-display text-[23px] font-semibold tracking-[-0.025em]">
                  {g.title}
                </h3>
                <p className="relative mt-3.5 text-[14.5px] leading-relaxed text-muted">
                  {g.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* preparar */}
      <Section>
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
            <Button
              href={waLink("Olá! Quero começar um projeto com a Vecttex.")}
              variant="wa"
              className="mt-8"
            >
              <WhatsAppGlyph className="h-4.5 w-4.5" />
              Começar meu projeto
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {PREPARE.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.08}>
                <div className="group h-full rounded-2xl border border-line bg-surface/40 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-line-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line-2/60 bg-white/[0.03] transition-colors group-hover:border-accent/50">
                    <p.icon className="h-4.5 w-4.5 text-accent-2" strokeWidth={1.7} />
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

      <WhatsAppSupport />
      <FaqSection />
      <CTASection />
    </>
  );
}
