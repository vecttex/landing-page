/* -------------------------------------------------------------------------
 * Conferência de paridade entre os bundles — só roda em desenvolvimento.
 *
 * O `tsc` já garante que todos os idiomas tenham as mesmas chaves e listas do
 * mesmo tamanho (ver `types.ts`). O que ele não cobre é o campo `id`, que é a
 * chave de junção com os mapas de ícone e imagem em `src/config/site.ts`: como
 * `Localized` alarga literais para `string`, trocar `"landing"` por outra
 * coisa na tradução compila — e some com a imagem do card em silêncio.
 * Esta checagem fecha essa brecha avisando no console.
 * ---------------------------------------------------------------------- */

type Unknown = Record<string, unknown>;

function isObject(value: unknown): value is Unknown {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function walk(base: unknown, other: unknown, path: string, out: string[]) {
  if (Array.isArray(base)) {
    if (!Array.isArray(other)) {
      out.push(`${path}: esperava uma lista`);
      return;
    }
    if (base.length !== other.length) {
      out.push(
        `${path}: ${base.length} item(ns) no padrão, ${other.length} na tradução`
      );
      return;
    }
    base.forEach((item, i) => walk(item, other[i], `${path}[${i}]`, out));
    return;
  }

  if (isObject(base)) {
    if (!isObject(other)) {
      out.push(`${path}: esperava um objeto`);
      return;
    }
    for (const key of Object.keys(base)) {
      const childPath = path ? `${path}.${key}` : key;
      if (!(key in other)) {
        out.push(`${childPath}: chave ausente na tradução`);
        continue;
      }
      /* `id` é chave de junção com site.ts, não texto: precisa ser idêntico. */
      if (key === "id" && base[key] !== other[key]) {
        out.push(
          `${childPath}: id divergente ("${String(base[key])}" ≠ "${String(other[key])}")`
        );
        continue;
      }
      walk(base[key], other[key], childPath, out);
    }
  }
}

export function assertResourceParity(
  bundles: Record<string, unknown>,
  defaultLocale: string
) {
  const base = bundles[defaultLocale];
  for (const [locale, bundle] of Object.entries(bundles)) {
    if (locale === defaultLocale) continue;
    const problems: string[] = [];
    walk(base, bundle, "", problems);
    if (problems.length) {
      console.warn(
        `[i18n] ${locale} diverge de ${defaultLocale}:\n· ${problems.join("\n· ")}`
      );
    }
  }
}
