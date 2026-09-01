import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { waLink } from "../lib/site";

function WhatsAppGlyph({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M16.04 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.47 1.73 6.42L3.2 28.8l6.55-1.72a12.75 12.75 0 0 0 6.29 1.64h.01c7.05 0 12.79-5.74 12.79-12.8 0-3.42-1.33-6.63-3.75-9.05a12.7 12.7 0 0 0-9.05-3.67Zm0 23.06h-.01a10.6 10.6 0 0 1-5.41-1.48l-.39-.23-4.02 1.05 1.07-3.92-.25-.4a10.6 10.6 0 0 1-1.62-5.66c0-5.86 4.77-10.63 10.64-10.63 2.84 0 5.51 1.11 7.52 3.12a10.56 10.56 0 0 1 3.11 7.52c0 5.87-4.77 10.63-10.64 10.63Zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1.01 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.89-1.78-2.21-.18-.32-.02-.5.14-.65.15-.15.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.08 1.3 3.29c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.89-.77 2.16-1.52.27-.75.27-1.38.19-1.52-.08-.13-.29-.21-.61-.37Z"
      />
    </svg>
  );
}

export function WhatsAppFab() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 900);
    const t2 = setTimeout(() => setOpen(true), 3200);
    const t3 = setTimeout(() => setOpen(false), 11000);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-[70] flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      <AnimatePresence>
        {open && visible && (
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.94 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-[248px] rounded-2xl border border-line bg-surface/95 p-4 shadow-[0_30px_70px_-25px_rgba(0,0,0,0.9)] backdrop-blur-xl"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Fechar"
              className="absolute right-2.5 top-2.5 text-muted transition-colors hover:text-fg"
            >
              <X className="h-3.5 w-3.5" />
            </button>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wa opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-wa" />
              </span>
              <span className="font-label text-[9px] uppercase tracking-[0.18em] text-wa">
                Atendimento online
              </span>
            </div>
            <p className="mt-2 text-[13px] leading-snug text-fg/90">
              Tire suas dúvidas agora com a nossa equipe pelo WhatsApp.
            </p>
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-wa px-3 py-2 text-[12.5px] font-semibold text-[#04240f] transition hover:brightness-110"
            >
              <WhatsAppGlyph className="h-4 w-4" />
              Iniciar conversa
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={waLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={visible ? { opacity: 1, scale: 1 } : {}}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        onMouseEnter={() => setOpen(true)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-wa text-[#04240f] wa-glow transition-transform duration-300 hover:scale-105"
      >
        <span className="absolute inset-0 rounded-full bg-wa animate-pulse-ring" />
        <WhatsAppGlyph className="relative h-7 w-7" />
      </motion.a>
    </div>
  );
}

export { WhatsAppGlyph };
