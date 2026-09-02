import { Link } from "react-router-dom";
import { SITE } from "../config/site";

/**
 * Geometria oficial do símbolo Vecttex (Manual de Marca, cap. 03):
 * hexágono isométrico com três fitas de espessura x convergindo no vértice
 * central. Proporção altura/largura 1 : 0,866 — não distorcer nem girar.
 */
const SYMBOL_PATH =
  "M0.00,-500.00L-433.01,-250.00L-433.01,95.00L-338.01,40.15L-338.01,-195.15L-47.50,-362.88L-47.50,-27.42L-433.01,195.15L-433.01,250.00L0.00,500.00L0.00,390.30L-290.51,222.58L0.00,54.85L290.51,222.58L67.50,351.33L67.50,461.03L433.01,250.00L433.01,-95.00L338.01,-40.15L338.01,140.30L47.50,-27.42L47.50,-362.88L287.50,-224.32L206.25,-177.41L206.25,-77.00L433.01,-207.00L433.01,-250.00Z";

/**
 * Símbolo isolado. Tamanho mínimo em digital: 32 px.
 * Abaixo disso o degradê deixa de ser percebido — use `flat`, que aplica o
 * ouro chapado #FFB000 (manual, cap. 04).
 */
export function LogoMark({
  className = "h-9 w-auto",
  flat = false,
  color,
}: {
  className?: string;
  /** Ouro chapado #FFB000, sem degradê. Obrigatório abaixo de 32 px. */
  flat?: boolean;
  /** Versão monocromática: #111111, #FFFFFF ou #8A8A8A (manual, cap. 06). */
  color?: string;
}) {
  const solid = color ?? "#FFB000";
  return (
    <svg viewBox="-433.01 -500 866.02 1000" className={className} aria-hidden>
      {!flat && !color && (
        <defs>
          <linearGradient
            id="vecttex-gold"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="-500"
            x2="0"
            y2="500"
          >
            <stop offset="0" stopColor="#FFD166" />
            <stop offset="0.45" stopColor="#FFB000" />
            <stop offset="1" stopColor="#FF8A00" />
          </linearGradient>
        </defs>
      )}
      <path d={SYMBOL_PATH} fill={flat || color ? solid : "url(#vecttex-gold)"} />
    </svg>
  );
}

/**
 * Assinatura horizontal: símbolo + logotipo, nas proporções do manual
 * (logotipo = 0,524 da altura do símbolo; folga entre os dois = 0,056).
 * O logotipo é lettering exclusivo e nunca é redigitado — vem do arquivo
 * vetorial entregue no kit.
 *
 * Largura mínima do logo completo em digital: 160 px.
 */
export function Logo({
  symbolClass = "h-[53px]",
  wordClass = "h-[28px]",
  withSlogan = false,
}: {
  symbolClass?: string;
  wordClass?: string;
  withSlogan?: boolean;
}) {
  return (
    <Link to="/" className="group inline-flex flex-col" aria-label={SITE.name}>
      <span className="flex items-center gap-[3px]">
        <LogoMark
          className={`${symbolClass} w-auto transition-transform duration-500 group-hover:-translate-y-[2px]`}
        />
        <img
          src={SITE.wordmark}
          alt={SITE.name}
          className={`${wordClass} w-auto`}
        />
      </span>
      {withSlogan && (
        <span className="slogan mt-2.5 font-label text-[8.5px] font-medium text-muted">
          {SITE.slogan}
        </span>
      )}
    </Link>
  );
}
