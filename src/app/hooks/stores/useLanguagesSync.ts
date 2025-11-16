import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AllowedLanguage } from '@/types/locale';
import { getLanguageCookie } from '@/lib/isomorphic/language';
import { useLanguageStore } from '@/app/hooks/stores/useLanguageStore';
import * as languageStore from '@/app/stores/language';
import { updateI18n } from '@/app/utils/language';

export const useLanguagesSync = () => {
	const { i18n } = useTranslation();
	updateI18n({ instance: i18n, language: getLanguageCookie() });

	const { current: language } = useLanguageStore();

	useEffect(() => {
		if (i18n.language !== language) {
			updateI18n({ instance: i18n, language: language });
		}
	}, [language]);

	useEffect(() => {
		if (i18n.language !== language) {
			languageStore.setCurrent(i18n.language as AllowedLanguage);
		}
	}, [i18n.language]);
};
