import { Language } from '@/types/locale';

type Translation = Record<string, string>;
type Resources = Record<string, { default: Translation }>;

export const loadTranslations = (lng: Language) => {
	const baseLangPath = `/src/app/locales/${lng}/`;
	const translations: Record<string, Translation> = {};

	const resources: Resources = import.meta.glob('/src/app/locales/**/*.ts', {
		eager: true,
	});

	for (const path in resources) {
		if (path.startsWith(baseLangPath)) {
			const namespace = path
				.replace(baseLangPath, '')
				.replace('.ts', '')
				.replace(/\//g, '.');

			translations[namespace] = resources[path].default;
		}
	}

	return translations;
};
