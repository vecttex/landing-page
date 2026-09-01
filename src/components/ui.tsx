import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 26,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 font-label text-[10.5px] uppercase tracking-[0.24em] text-accent-2 ${className}`}
    >
      <span className="h-px w-6 bg-gradient-to-r from-transparent to-accent" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const isCenter = align === "center";
  return (
    <div
      className={`${isCenter ? "mx-auto max-w-3xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow && (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.06}>
        <h2 className="mt-5 font-display text-[clamp(1.9rem,4.6vw,3.35rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-fg">
          {title}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.12}>
          <p className="mt-5 text-[15.5px] leading-relaxed text-muted md:text-base">
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative px-5 py-20 sm:px-8 md:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-[1200px]">{children}</div>
    </section>
  );
}

type BtnProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "wa";
  className?: string;
  type?: "button" | "submit";
};

const BTN_BASE =
  "group inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-[14px] font-semibold tracking-[-0.01em] transition-all duration-300 active:scale-[0.98]";

const VARIANTS: Record<string, string> = {
  primary:
    "bg-accent text-[#111111] btn-glow hover:bg-accent-2 hover:-translate-y-0.5",
  ghost:
    "border border-line-2/70 bg-white/[0.02] text-fg hover:border-accent/60 hover:bg-accent/[0.07] hover:-translate-y-0.5",
  wa: "bg-wa text-[#04240f] wa-glow hover:brightness-110 hover:-translate-y-0.5",
};

export function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}: BtnProps) {
  const cls = `${BTN_BASE} ${VARIANTS[variant]} ${className}`;
  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1 font-label text-[10px] uppercase tracking-[0.16em] text-muted">
      {children}
    </span>
  );
}

export function GlowOrb({
  className = "",
  color = "rgba(255,176,0,0.30)",
  size = 620,
}: {
  className?: string;
  color?: string;
  size?: number;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-[130px] ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 68%)`,
      }}
    />
  );
}
