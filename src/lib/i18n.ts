export const locales = ["en", "pt-br"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export async function getDictionary(locale: Locale) {
	switch (locale) {
		case "pt-br":
			return (await import("@/i18n/locales/pt-br.json")).default;
		default:
			return (await import("@/i18n/locales/en.json")).default;
	}
}
