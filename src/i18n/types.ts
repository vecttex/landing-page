import type { ptBR } from "./resources/pt-BR";

/**
 * Alarga os literais de string do bundle padrão preservando o resto da forma.
 *
 * É um mapped type homomórfico, então **tuplas continuam tuplas com o mesmo
 * comprimento**: um idioma com 4 perguntas no FAQ onde o pt-BR tem 5 não
 * compila. É essa a garantia que o i18next com JSON não oferece — lá, chave
 * faltante viraria fallback silencioso em runtime.
 */
export type Localized<T> = T extends string
  ? string
  : { -readonly [K in keyof T]: Localized<T[K]> };

/** Contrato que todo idioma precisa cumprir. */
export type Resources = Localized<typeof ptBR>;

export type LooseLists<T> = T extends readonly (infer Item)[]
  ? LooseLists<Item>[]
  : T extends object
    ? { [K in keyof T]: LooseLists<T[K]> }
    : T;
