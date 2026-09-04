import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";

/* ---------------------------------------------------------------------- *
 *  Select — substitui o <select> nativo, que ignora os tokens do tema:
 *  o popup dele é desenhado pelo sistema operacional, então no tema claro
 *  continuava preto (e no escuro, cinza do Windows). Aqui a lista é HTML
 *  comum e herda `--color-surface`, `--color-line`, `--color-gold-text` etc.
 *
 *  Segue o padrão combobox da WAI-ARIA: o foco nunca sai do gatilho; a opção
 *  em destaque é anunciada por `aria-activedescendant`.
 * ---------------------------------------------------------------------- */

export type SelectOption = { value: string; label: string };

/* Mesma caixa dos inputs do formulário de contato — se um mudar, mude os
   dois juntos (Contato.tsx › inputCls). */
const TRIGGER_CLS =
  "flex w-full items-center justify-between gap-3 rounded-xl border bg-ink-2/80 px-4 py-3.5 text-left text-[14px] outline-none transition-all duration-300";

export function Select({
  id,
  value,
  options,
  onChange,
  labelledBy,
  className = "",
}: {
  id: string;
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  /* id do <label> da página — dá nome acessível ao gatilho e à lista */
  labelledBy?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const selectedIndex = Math.max(
    options.findIndex((o) => o.value === value),
    0,
  );
  /* Opção em destaque pelo teclado; ao abrir, parte sempre da selecionada. */
  const [active, setActive] = useState(selectedIndex);

  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  /* Clique fora fecha. `pointerdown` no próprio gatilho é ignorado (está
     dentro da raiz), senão fecharíamos aqui e o onClick reabriria em seguida. */
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  /* Mantém a opção em destaque visível quando a lista rola. */
  useEffect(() => {
    if (!open) return;
    listRef.current?.children[active]?.scrollIntoView({ block: "nearest" });
  }, [open, active]);

  function openWith(index: number) {
    setActive(index);
    setOpen(true);
  }

  function commit(index: number) {
    onChange(options[index].value);
    setOpen(false);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    const last = options.length - 1;

    if (!open) {
      if (["Enter", " ", "ArrowDown", "ArrowUp"].includes(e.key)) {
        e.preventDefault();
        openWith(selectedIndex);
      }
      return;
    }

    switch (e.key) {
      case "Escape":
        e.preventDefault();
        setOpen(false);
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        commit(active);
        break;
      case "ArrowDown":
        e.preventDefault();
        setActive((i) => Math.min(i + 1, last));
        break;
      case "ArrowUp":
        e.preventDefault();
        setActive((i) => Math.max(i - 1, 0));
        break;
      case "Home":
        e.preventDefault();
        setActive(0);
        break;
      case "End":
        e.preventDefault();
        setActive(last);
        break;
      case "Tab":
        setOpen(false);
        break;
    }
  }

  return (
    <div
      ref={rootRef}
      className={`relative ${className}`}
      /* Sair do gatilho por Tab (ou qualquer outro motivo) fecha a lista. */
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        id={id}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${id}-listbox`}
        aria-labelledby={labelledBy ? `${labelledBy} ${id}` : undefined}
        aria-activedescendant={open ? `${id}-opt-${active}` : undefined}
        onClick={() => (open ? setOpen(false) : openWith(selectedIndex))}
        onKeyDown={handleKeyDown}
        className={`${TRIGGER_CLS} ${
          open
            ? "border-accent/70 bg-ink-2 text-fg ring-2 ring-accent/15"
            : "border-line text-fg hover:border-line-2"
        }`}
      >
        <span className="truncate">{options[selectedIndex]?.label}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-all duration-300 ${
            open ? "rotate-180 text-gold-text" : "text-muted"
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            ref={listRef}
            id={`${id}-listbox`}
            role="listbox"
            aria-labelledby={labelledBy}
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 top-[calc(100%+8px)] z-30 max-h-64 origin-top overflow-y-auto rounded-xl border border-line bg-surface/95 p-1.5 shadow-[var(--vt-shadow-pop)] backdrop-blur-xl"
          >
            {options.map((option, i) => {
              const isSelected = option.value === value;
              /* Uma classe de cor só: duas concorrentes no mesmo elemento
                 seriam resolvidas pela ordem da folha de estilo, não por esta. */
              const tone = isSelected
                ? "text-gold-text"
                : i === active
                  ? "text-fg"
                  : "text-muted";
              return (
                <li
                  key={option.value}
                  id={`${id}-opt-${i}`}
                  role="option"
                  aria-selected={isSelected}
                  onPointerEnter={() => setActive(i)}
                  onClick={() => commit(i)}
                  className={`flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-[13.5px] transition-colors duration-200 ${tone} ${
                    i === active ? "bg-raise-2" : ""
                  }`}
                >
                  <span className="truncate">{option.label}</span>
                  {isSelected && (
                    <Check className="h-3.5 w-3.5 shrink-0" strokeWidth={2.2} />
                  )}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
