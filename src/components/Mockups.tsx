import { motion } from "framer-motion";
import { Check, CheckCheck, Lock } from "lucide-react";
import { LogoMark } from "./Logo";
import { BRAND } from "../lib/site";

/* ------------------------------------------------------------------ */
/*  Browser window mockup with a miniature website rendered inside     */
/* ------------------------------------------------------------------ */

export function BrowserMockup({
  url = "suaempresa.com.br",
  className = "",
}: {
  url?: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-line bg-ink shadow-[0_50px_110px_-40px_rgba(0,0,0,0.95)] ${className}`}
    >
      {/* chrome */}
      <div className="flex items-center gap-3 border-b border-line/80 bg-surface px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="mx-auto flex w-[62%] items-center justify-center gap-1.5 rounded-md bg-ink px-3 py-1.5">
          <Lock className="h-2.5 w-2.5 text-wa" strokeWidth={2.4} />
          <span className="font-label text-[9.5px] tracking-wide text-muted">{url}</span>
        </div>
        <div className="flex w-[52px] justify-end gap-1">
          <span className="h-1 w-3.5 rounded-full bg-line-2" />
        </div>
      </div>

      {/* mini site */}
      <div className="relative bg-gradient-to-b from-ink to-[#0c0c0c]">
        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
        {/* nav */}
        <div className="relative flex items-center justify-between px-5 py-3.5">
          <div className="flex items-center gap-1.5">
            <LogoMark flat className="h-3 w-auto" />
            <span className="h-1.5 w-10 rounded-full bg-white/25" />
          </div>
          <div className="flex items-center gap-2.5">
            <span className="h-1 w-6 rounded-full bg-white/12" />
            <span className="h-1 w-8 rounded-full bg-white/12" />
            <span className="h-1 w-5 rounded-full bg-white/12" />
            <span className="h-4 w-12 rounded-full bg-accent/85" />
          </div>
        </div>
        <div className="h-px w-full bg-white/[0.06]" />

        {/* hero */}
        <div className="relative grid grid-cols-5 gap-4 px-5 pb-5 pt-6">
          <div className="col-span-3 space-y-2.5">
            <span className="block h-1.5 w-14 rounded-full bg-accent/70" />
            <span className="block h-3 w-full rounded-md bg-white/[0.22]" />
            <span className="block h-3 w-[82%] rounded-md bg-white/[0.16]" />
            <span className="block h-1.5 w-[70%] rounded-full bg-white/[0.09]" />
            <span className="block h-1.5 w-[56%] rounded-full bg-white/[0.09]" />
            <div className="flex gap-2 pt-2">
              <span className="h-5 w-16 rounded-full bg-accent" />
              <span className="h-5 w-14 rounded-full border border-white/15" />
            </div>
          </div>
          <div className="col-span-2">
            <div className="h-[92px] w-full rounded-lg border border-white/[0.07] bg-gradient-to-br from-white/[0.10] to-white/[0.02]">
              <div className="m-2.5 h-3 w-8 rounded-full bg-ember/60" />
              <div className="mx-2.5 h-1 w-[70%] rounded-full bg-white/15" />
              <div className="mx-2.5 mt-1.5 h-1 w-[52%] rounded-full bg-white/10" />
            </div>
          </div>
        </div>

        {/* cards */}
        <div className="grid grid-cols-3 gap-2.5 px-5 pb-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-2.5"
            >
              <span className="block h-4 w-4 rounded-md bg-accent/45" />
              <span className="mt-2 block h-1.5 w-[75%] rounded-full bg-white/18" />
              <span className="mt-1.5 block h-1 w-full rounded-full bg-white/[0.08]" />
              <span className="mt-1 block h-1 w-[60%] rounded-full bg-white/[0.08]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Phone frame                                                        */
/* ------------------------------------------------------------------ */

export function PhoneFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-[2.2rem] border border-line-2/80 bg-surface-2 p-[7px] shadow-[0_45px_90px_-35px_rgba(0,0,0,0.95)] ${className}`}
    >
      <div className="relative overflow-hidden rounded-[1.75rem] bg-ink">
        <div className="absolute left-1/2 top-2 z-20 h-4 w-[38%] -translate-x-1/2 rounded-full bg-ink" />
        {children}
      </div>
      <span className="absolute -right-[3px] top-[22%] h-10 w-[3px] rounded-r-full bg-line-2" />
      <span className="absolute -left-[3px] top-[18%] h-6 w-[3px] rounded-l-full bg-line-2" />
      <span className="absolute -left-[3px] top-[29%] h-6 w-[3px] rounded-l-full bg-line-2" />
    </div>
  );
}

export function PhoneSiteMockup({ className = "" }: { className?: string }) {
  return (
    <PhoneFrame className={className}>
      <div className="w-[188px] pb-4 pt-7">
        <div className="flex items-center justify-between px-3.5">
          <LogoMark flat className="h-2.5 w-auto" />
          <div className="space-y-[3px]">
            <span className="block h-[2px] w-4 rounded-full bg-white/30" />
            <span className="block h-[2px] w-4 rounded-full bg-white/30" />
            <span className="block h-[2px] w-4 rounded-full bg-white/30" />
          </div>
        </div>
        <div className="mt-4 space-y-2 px-3.5">
          <span className="block h-1 w-10 rounded-full bg-accent/70" />
          <span className="block h-2.5 w-full rounded bg-white/20" />
          <span className="block h-2.5 w-[70%] rounded bg-white/14" />
          <span className="block h-1 w-[88%] rounded-full bg-white/[0.08]" />
          <span className="h-4" />
          <span className="block h-6 w-24 rounded-full bg-accent" />
        </div>
        <div className="mt-4 space-y-2 px-3.5">
          <div className="h-16 rounded-lg border border-white/[0.06] bg-gradient-to-br from-white/[0.09] to-transparent" />
          <div className="grid grid-cols-2 gap-2">
            <div className="h-11 rounded-lg border border-white/[0.06] bg-white/[0.03]" />
            <div className="h-11 rounded-lg border border-white/[0.06] bg-white/[0.03]" />
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <span className="h-1 w-16 rounded-full bg-white/20" />
        </div>
      </div>
    </PhoneFrame>
  );
}

/* ------------------------------------------------------------------ */
/*  WhatsApp style conversation                                        */
/* ------------------------------------------------------------------ */

const MESSAGES = [
  { from: "them", text: "Olá! Quero um site para a minha empresa 👋", time: "09:12" },
  { from: "us", text: "Oi! Que ótimo. Me conta um pouco sobre o seu negócio?", time: "09:12" },
  { from: "them", text: "Tenho um restaurante e preciso mostrar o cardápio", time: "09:14" },
  { from: "us", text: "Perfeito. Monto a estrutura e te apresento o projeto pronto — você só paga depois de aprovar ✅", time: "09:15" },
];

export function ChatMockup({ className = "" }: { className?: string }) {
  return (
    <PhoneFrame className={className}>
      <div className="w-[236px]">
        {/* header */}
        <div className="flex items-center gap-2.5 bg-[#12181a] px-3 pb-2.5 pt-8">
          <div className="relative">
            {/* Ícone de app: símbolo em preto sobre ouro chapado (manual, cap. 09) */}
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent">
              <LogoMark color="#111111" className="h-4 w-auto" />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#12181a] bg-wa" />
          </div>
          <div className="leading-tight">
            <p className="text-[11px] font-semibold text-fg">{BRAND.name} · Atendimento</p>
            <p className="font-label text-[8px] uppercase tracking-[0.14em] text-wa">online agora</p>
          </div>
        </div>

        {/* body */}
        <div className="relative space-y-2 bg-[#0a0f10] px-3 py-3.5">
          <div className="dotted absolute inset-0 opacity-[0.35]" />
          {MESSAGES.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 + i * 0.28, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex ${m.from === "us" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-xl px-2.5 py-1.5 text-[10.5px] leading-snug ${
                  m.from === "us"
                    ? "rounded-br-sm bg-[#12503a] text-[#e9fff3]"
                    : "rounded-bl-sm bg-[#1b2124] text-fg/90"
                }`}
              >
                {m.text}
                <span className="mt-0.5 flex items-center justify-end gap-1 text-[7.5px] text-white/40">
                  {m.time}
                  {m.from === "us" ? (
                    <CheckCheck className="h-2.5 w-2.5 text-[#53bdeb]" />
                  ) : (
                    <Check className="h-2.5 w-2.5 opacity-0" />
                  )}
                </span>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5 }}
            className="relative flex justify-start"
          >
            <div className="flex items-center gap-1 rounded-xl rounded-bl-sm bg-[#1b2124] px-2.5 py-2">
              {[0, 1, 2].map((d) => (
                <motion.span
                  key={d}
                  className="h-1 w-1 rounded-full bg-white/45"
                  animate={{ opacity: [0.25, 1, 0.25] }}
                  transition={{ duration: 1.1, repeat: Infinity, delay: d * 0.18 }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* input */}
        <div className="flex items-center gap-2 bg-[#12181a] px-3 py-2.5">
          <div className="flex-1 rounded-full bg-[#1e2528] px-3 py-1.5 text-[9px] text-white/35">
            Mensagem
          </div>
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-wa">
            <svg viewBox="0 0 24 24" className="h-3 w-3 fill-[#04240f]">
              <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
            </svg>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
