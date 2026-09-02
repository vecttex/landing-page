import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Globe, Clock, Send, CheckCircle2, ChevronDown } from "lucide-react";
import { Reveal, Section, GlowOrb, Eyebrow } from "../components/ui";
import { PageHero } from "../components/sections";
import { WhatsAppGlyph } from "../components/WhatsAppFab";
import { CONTACT, PROJECT_TYPES, waLink } from "../content";

const inputCls =
  "w-full rounded-xl border border-line bg-ink-2/80 px-4 py-3.5 text-[14px] text-fg placeholder:text-muted/60 outline-none transition-all duration-300 focus:border-accent/70 focus:bg-ink-2 focus:ring-2 focus:ring-accent/15";

const labelCls =
  "mb-2 block font-label text-[9.5px] uppercase tracking-[0.2em] text-muted";

export default function Contato() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    telefone: "",
    tipo: PROJECT_TYPES[0].title,
    mensagem: "",
  });

  const update = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg =
      `Olá! Meu nome é ${form.nome || "(sem nome)"}.\n` +
      (form.empresa ? `Empresa: ${form.empresa}\n` : "") +
      (form.telefone ? `Contato: ${form.telefone}\n` : "") +
      `Tipo de projeto: ${form.tipo}\n\n` +
      (form.mensagem
        ? `${form.mensagem}`
        : "Gostaria de conversar sobre um projeto.");
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contato"
        title={
          <>
            Vamos conversar sobre o{" "}
            <span className="text-gradient">seu projeto.</span>
          </>
        }
        lead="Conte um pouco sobre o seu negócio e o que você precisa. Nossa equipe responde pelo WhatsApp com um atendimento próximo e direto."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          {/* form */}
          <Reveal>
            <div className="relative overflow-hidden rounded-[24px] border border-line bg-surface/45 p-7 sm:p-10">
              <GlowOrb className="-right-32 -top-32" size={380} color="rgba(255,176,0,0.18)" />
              <div className="relative">
                <Eyebrow>Formulário rápido</Eyebrow>
                <h2 className="mt-4 font-display text-[28px] font-semibold tracking-[-0.03em]">
                  Envie os detalhes
                </h2>
                <p className="mt-2.5 text-[14px] leading-relaxed text-muted">
                  Preencha os campos e o resumo do seu projeto será enviado
                  diretamente para o nosso WhatsApp.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelCls} htmlFor="nome">
                        Seu nome *
                      </label>
                      <input
                        id="nome"
                        required
                        value={form.nome}
                        onChange={(e) => update("nome", e.target.value)}
                        placeholder="Como podemos te chamar"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label className={labelCls} htmlFor="empresa">
                        Empresa
                      </label>
                      <input
                        id="empresa"
                        value={form.empresa}
                        onChange={(e) => update("empresa", e.target.value)}
                        placeholder="Nome do seu negócio"
                        className={inputCls}
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelCls} htmlFor="telefone">
                        WhatsApp
                      </label>
                      <input
                        id="telefone"
                        value={form.telefone}
                        onChange={(e) => update("telefone", e.target.value)}
                        placeholder="(00) 00000-0000"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label className={labelCls} htmlFor="tipo">
                        Tipo de projeto
                      </label>
                      <div className="relative">
                        <select
                          id="tipo"
                          value={form.tipo}
                          onChange={(e) => update("tipo", e.target.value)}
                          className={`${inputCls} appearance-none pr-10`}
                        >
                          {PROJECT_TYPES.map((t) => (
                            <option key={t.title} value={t.title} className="bg-ink-2">
                              {t.title}
                            </option>
                          ))}
                          <option value="Ainda não sei" className="bg-ink-2">
                            Ainda não sei
                          </option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className={labelCls} htmlFor="mensagem">
                      Sobre o projeto
                    </label>
                    <textarea
                      id="mensagem"
                      rows={5}
                      value={form.mensagem}
                      onChange={(e) => update("mensagem", e.target.value)}
                      placeholder="Conte o que a sua empresa faz e o que você espera do site..."
                      className={`${inputCls} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2.5 rounded-xl bg-wa px-6 py-4 text-[14.5px] font-semibold text-[#04240f] wa-glow transition-all duration-300 hover:brightness-110 active:scale-[0.99]"
                  >
                    <WhatsAppGlyph className="h-5 w-5" />
                    Enviar pelo WhatsApp
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  {sent && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2.5 rounded-xl border border-wa/25 bg-wa/10 px-4 py-3.5"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-wa" />
                      <p className="text-[13px] text-wa">
                        Conversa aberta no WhatsApp! Se não abriu, clique no
                        botão verde no canto da tela.
                      </p>
                    </motion.div>
                  )}

                  <p className="text-center text-[11.5px] leading-relaxed text-muted/70">
                    Ao enviar, uma conversa será aberta no WhatsApp com o resumo
                    preenchido. Nenhum dado é armazenado neste site.
                  </p>
                </form>
              </div>
            </div>
          </Reveal>

          {/* info */}
          <div className="space-y-4">
            <Reveal delay={0.08}>
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-[24px] border border-wa/25 bg-gradient-to-br from-wa/[0.14] to-transparent p-8 transition-all duration-500 hover:-translate-y-1 hover:border-wa/50"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-wa text-[#04240f]">
                    <WhatsAppGlyph className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-label text-[9px] uppercase tracking-[0.2em] text-wa">
                      Canal principal
                    </p>
                    <p className="font-display text-[19px] font-semibold tracking-[-0.02em]">
                      WhatsApp
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-[14px] leading-relaxed text-muted">
                  A forma mais rápida de falar com a nossa equipe. Respondemos
                  dúvidas, enviamos orçamentos e acompanhamos o projeto por aqui.
                </p>
                <p className="mt-5 font-display text-[22px] font-semibold tracking-[-0.02em] text-wa">
                  {CONTACT.whatsappDisplay}
                </p>
              </a>
            </Reveal>

            {[
              { icon: Mail, label: "E-mail", value: CONTACT.email },
              { icon: MapPin, label: "Endereço", value: CONTACT.address },
              { icon: Globe, label: "Atendimento", value: CONTACT.coverage },
              { icon: Clock, label: "Horários", value: CONTACT.hours },
            ].map((c, i) => (
              <Reveal key={c.label} delay={0.14 + i * 0.06}>
                <div className="flex items-start gap-4 rounded-2xl border border-line bg-surface/40 p-6">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line-2/60 bg-white/[0.03]">
                    <c.icon className="h-4 w-4 text-accent" strokeWidth={1.7} />
                  </span>
                  <div>
                    <p className="font-label text-[9px] uppercase tracking-[0.2em] text-muted">
                      {c.label}
                    </p>
                    <p className="mt-1.5 break-words text-[14.5px] text-fg/90">
                      {c.value}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
