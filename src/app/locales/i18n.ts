import i18n, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ALLOWED_LANGUAGES, Language } from '@/types/locale';
import { loadTranslations } from './load-translations';

i18n.use(initReactI18next).init({
	supportedLngs: ALLOWED_LANGUAGES,
	lng: 'en-GB' satisfies Language,
	fallbackLng: 'en-GB' satisfies Language,
	resources: ALLOWED_LANGUAGES.reduce<Resource>((acc, lang) => {
		acc[lang] = loadTranslations(lang);
		return acc;
	}, {}),
	interpolation: {
		escapeValue: false,
	},
});

export { i18n };
