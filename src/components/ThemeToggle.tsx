import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../theme/context";

const KNOB_TRAVEL = 18;

const KNOB_SPRING = {
  type: "spring",
  stiffness: 520,
  damping: 34,
  mass: 0.7,
} as const;

export function ThemeToggle({
  className = "inline-flex",
}: {
  className?: string;
}) {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={!isDark}
      aria-label={t("common.themeSwitchLabel")}
      title={t(isDark ? "common.switchToLight" : "common.switchToDark")}
      onClick={toggleTheme}
      className={`relative h-[26px] w-11 shrink-0 cursor-pointer rounded-full border transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
        isDark
          ? "border-line-2/70 bg-surface-2"
          : "border-accent bg-accent"
      } ${className}`}
    >
      <motion.span
        aria-hidden
        animate={{ x: isDark ? 0 : KNOB_TRAVEL }}
        transition={KNOB_SPRING}
        className="pointer-events-none absolute left-[2px] top-[2px] flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.28),0_2px_5px_rgba(0,0,0,0.16)]"
      >
        <Sun
          className={`absolute h-3 w-3 text-on-accent transition-opacity duration-200 ${
            isDark ? "opacity-0" : "opacity-100"
          }`}
          strokeWidth={2.2}
        />
        <Moon
          className={`absolute h-3 w-3 text-on-accent transition-opacity duration-200 ${
            isDark ? "opacity-100" : "opacity-0"
          }`}
          strokeWidth={2.2}
        />
      </motion.span>
    </button>
  );
}
