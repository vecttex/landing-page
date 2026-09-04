import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Globe, Clock, Send, CheckCircle2, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Reveal, Section, GlowOrb, Eyebrow } from "../components/ui";
import { PageHero } from "../components/sections";
import { RichText } from "../components/RichText";
import { WhatsAppGlyph } from "../components/WhatsAppFab";
import { SITE, waLink } from "../config/site";

const inputCls =
  "w-full rounded-xl border border-line bg-ink-2/80 px-4 py-3.5 text-[14px] text-fg placeholder:text-muted/80 outline-none transition-all duration-300 focus:border-accent/70 focus:bg-ink-2 focus:ring-2 focus:ring-accent/15";

const labelCls =
  "mb-2 block font-label text-[9.5px] uppercase tracking-[0.2em] text-muted";

/* Valor do select quando o visitante ainda não sabe o formato. */
const UNKNOWN_TYPE = "unknown";

export default function Contato() {
  const { t } = useTranslation();
  const types = t("services.types.items", { returnObjects: true });

  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    telefone: "",
    /* Guardamos o id, não o título: assim a escolha do visitante sobrevive a
       uma troca de idioma, e o título é resolvido só ao montar a mensagem. */
    tipo: types[0].id,
    mensagem: "",
  });

  const update = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const tipoLabel =
      types.find((type) => type.id === form.tipo)?.title ??
      t("contactPage.form.typeUnknown");

    const msg =
      t("contactPage.waMessage.greeting", {
        name: form.nome || t("contactPage.waMessage.noName"),
      }) +
      "\n" +
      (form.empresa
        ? t("contactPage.waMessage.company", { company: form.empresa }) + "\n"
        : "") +
      (form.telefone
        ? t("contactPage.waMessage.phone", { phone: form.telefone }) + "\n"
        : "") +
      t("contactPage.waMessage.type", { type: tipoLabel }) +
      "\n\n" +
      (form.mensagem ? form.mensagem : t("contactPage.waMessage.fallback"));

    window.open(waLink(msg), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow={t("contactPage.hero.eyebrow")}
        title={<RichText k="contactPage.hero.title" />}
        lead={t("contactPage.hero.lead")}
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          {/* form */}
          <Reveal>
            <div className="relative overflow-hidden rounded-[24px] border border-line bg-surface/45 p-7 sm:p-10">
              <GlowOrb className="-right-32 -top-32" size={380} color="var(--vt-orb-soft)" />
              <div className="relative">
                <Eyebrow>{t("contactPage.form.eyebrow")}</Eyebrow>
                <h2 className="mt-4 font-display text-[28px] font-semibold tracking-[-0.03em]">
                  {t("contactPage.form.title")}
                </h2>
                <p className="mt-2.5 text-[14px] leading-relaxed text-muted">
                  {t("contactPage.form.lead")}
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelCls} htmlFor="nome">
                        {t("contactPage.form.nameLabel")}
                      </label>
                      <input
                        id="nome"
                        required
                        value={form.nome}
                        onChange={(e) => update("nome", e.target.value)}
                        placeholder={t("contactPage.form.namePlaceholder")}
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label className={labelCls} htmlFor="empresa">
                        {t("contactPage.form.companyLabel")}
                      </label>
                      <input
                        id="empresa"
                        value={form.empresa}
                        onChange={(e) => update("empresa", e.target.value)}
                        placeholder={t("contactPage.form.companyPlaceholder")}
                        className={inputCls}
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelCls} htmlFor="telefone">
                        {t("contactPage.form.phoneLabel")}
                      </label>
                      <input
                        id="telefone"
                        value={form.telefone}
                        onChange={(e) => update("telefone", e.target.value)}
                        placeholder={t("contactPage.form.phonePlaceholder")}
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label className={labelCls} htmlFor="tipo">
                        {t("contactPage.form.typeLabel")}
                      </label>
                      <div className="relative">
                        <select
                          id="tipo"
                          value={form.tipo}
                          onChange={(e) => update("tipo", e.target.value)}
                          className={`${inputCls} appearance-none pr-10`}
                        >
                          {types.map((type) => (
                            <option key={type.id} value={type.id} className="bg-ink-2">
                              {type.title}
                            </option>
                          ))}
                          <option value={UNKNOWN_TYPE} className="bg-ink-2">
                            {t("contactPage.form.typeUnknown")}
                          </option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className={labelCls} htmlFor="mensagem">
                      {t("contactPage.form.messageLabel")}
                    </label>
                    <textarea
                      id="mensagem"
                      rows={5}
                      value={form.mensagem}
                      onChange={(e) => update("mensagem", e.target.value)}
                      placeholder={t("contactPage.form.messagePlaceholder")}
                      className={`${inputCls} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2.5 rounded-xl bg-wa px-6 py-4 text-[14.5px] font-semibold text-on-wa wa-glow transition-all duration-300 hover:brightness-110 active:scale-[0.99]"
                  >
                    <WhatsAppGlyph className="h-5 w-5" />
                    {t("contactPage.form.submit")}
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  {sent && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2.5 rounded-xl border border-wa/25 bg-wa/10 px-4 py-3.5"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-wa-text" />
                      <p className="text-[13px] text-wa-text">
                        {t("contactPage.form.sent")}
                      </p>
                    </motion.div>
                  )}

                  <p className="text-center text-[11.5px] leading-relaxed text-muted">
                    {t("contactPage.form.privacy")}
                  </p>
                </form>
              </div>
            </div>
          </Reveal>

          {/* info */}
          <div className="space-y-4">
            <Reveal delay={0.08}>
              <a
                href={waLink(t("contact.defaultMessage"))}
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-[24px] border border-wa/25 bg-gradient-to-br from-wa/[0.14] to-transparent p-8 transition-all duration-500 hover:-translate-y-1 hover:border-wa/50"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-wa text-on-wa">
                    <WhatsAppGlyph className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-label text-[9px] uppercase tracking-[0.2em] text-wa-text">
                      {t("contactPage.channel.eyebrow")}
                    </p>
                    <p className="font-display text-[19px] font-semibold tracking-[-0.02em]">
                      {t("contactPage.channel.title")}
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-[14px] leading-relaxed text-muted">
                  {t("contactPage.channel.desc")}
                </p>
                <p className="mt-5 font-display text-[22px] font-semibold tracking-[-0.02em] text-wa-text">
                  {SITE.whatsappDisplay}
                </p>
              </a>
            </Reveal>

            {[
              { icon: Mail, label: t("contact.labels.email"), value: SITE.email },
              { icon: MapPin, label: t("contact.labels.address"), value: t("contact.address") },
              { icon: Globe, label: t("contact.labels.coverage"), value: t("contact.coverage") },
              { icon: Clock, label: t("contact.labels.hours"), value: t("contact.hours") },
            ].map((c, i) => (
              <Reveal key={c.label} delay={0.14 + i * 0.06}>
                <div className="flex items-start gap-4 rounded-2xl border border-line bg-surface/40 p-6">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line-2/60 bg-raise">
                    <c.icon className="h-4 w-4 text-gold-text" strokeWidth={1.7} />
                  </span>
                  <div>
                    <p className="font-label text-[9px] uppercase tracking-[0.2em] text-muted">
                      {c.label}
                    </p>
                    <p className="mt-1.5 break-words whitespace-pre-line text-[14.5px] text-fg/90">
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
