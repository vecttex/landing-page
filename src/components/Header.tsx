import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { NAV_ITEMS } from "../config/site";
import { Logo } from "./Logo";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[60] transition-all duration-500 ${
          scrolled
            ? "border-b border-line/70 bg-ink/80 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-[84px] w-full max-w-[1200px] items-center justify-between px-5 sm:px-8">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative rounded-full px-4 py-2 text-[13.5px] font-medium transition-colors duration-300 ${
                    isActive ? "text-fg" : "text-muted hover:text-fg"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full border border-line bg-raise-2"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{t(`nav.${item.id}`)}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <LocaleSwitcher className="hidden sm:inline-flex" />
            <ThemeToggle className="hidden sm:inline-flex" />
            <Link
              to="/contato"
              className="hidden items-center gap-2 rounded-full border border-line-2/70 bg-raise px-5 py-2.5 text-[13px] font-semibold text-fg transition-all duration-300 hover:border-accent/60 hover:bg-accent/[0.07] hover:-translate-y-0.5 sm:flex"
            >
              {t("common.requestQuote")}
              <ArrowUpRight className="h-3.5 w-3.5 text-gold-text" />
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={t("common.openMenuAria")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-raise text-fg transition-colors hover:border-accent/60 lg:hidden"
            >
              {open ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[55] bg-ink/96 backdrop-blur-2xl lg:hidden"
          >
            <div className="grid-lines absolute inset-0 opacity-40" />
            <div className="relative flex h-full flex-col justify-between px-6 pb-10 pt-[112px]">
              <nav className="flex flex-col">
                {NAV_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i + 0.05, duration: 0.4 }}
                  >
                    <Link
                      to={item.to}
                      className="flex items-center justify-between border-b border-line/70 py-5"
                    >
                      <span className="font-display text-3xl font-semibold tracking-[-0.03em] text-fg">
                        {t(`nav.${item.id}`)}
                      </span>
                      <span className="font-label text-[10px] text-muted">
                        0{i + 1}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
              {/* O botão flutuante de WhatsApp (z-70) continua visível por
                  cima deste menu, então aqui o CTA aponta para o contato. */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="space-y-5"
              >
                <div className="flex items-center gap-2.5">
                  <LocaleSwitcher />
                  <ThemeToggle />
                </div>
                <Link
                  to="/contato"
                  className="flex items-center justify-center gap-2.5 rounded-2xl bg-accent px-6 py-4 text-[15px] font-semibold text-on-accent"
                >
                  {t("common.requestQuote")}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
