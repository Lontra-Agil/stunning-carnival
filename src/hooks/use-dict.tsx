import { type Locale, defaultLocale, getDictionary, locales } from "@/lib/i18n";
import { cookies } from "next/headers";

export async function useDict() {
	const cookieStore = await cookies();

	const cookieLang = cookieStore.get("systemLanguage")?.value as
		| Locale
		| undefined;
	const lang =
		cookieLang && (locales as readonly string[]).includes(cookieLang)
			? cookieLang
			: defaultLocale;
	const dict = await getDictionary(lang);

	return { lang, dict };
}
