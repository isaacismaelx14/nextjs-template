import "server-only";

import type { Locale } from "./i18n-config";

const dictionaries = {
  en: () => import("./i18n/en.json").then((module) => module.default),
  es: () => import("./i18n/es.json").then((module) => module.default),
};

export type Dictionary = Awaited<ReturnType<typeof dictionaries.en>>;

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en();
