import i18n, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ALLOWED_LANGUAGES, Language } from '@/types/locale';
import {
	getDefaultLanguageCookie,
	getLanguageCookie,
} from '@/lib/isomorphic/locale';
import { loadTranslations } from './load-translations';

const initialize = async () => {
	await i18n.use(initReactI18next).init({
		supportedLngs: ALLOWED_LANGUAGES,
		lng: getLanguageCookie(),
		fallbackLng: getDefaultLanguageCookie() ?? ('en-GB' satisfies Language),
		resources: ALLOWED_LANGUAGES.reduce<Resource>((acc, lang) => {
			acc[lang] = loadTranslations(lang);
			return acc;
		}, {}),
		interpolation: { escapeValue: false },
	});

	return i18n;
};

export { i18n, initialize };
