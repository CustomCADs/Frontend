import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguageStore } from '@/app/hooks/stores/useLanguageStore';
import { updateI18n } from '@/app/utils/language';

export const useLanguagesSync = () => {
	const { i18n } = useTranslation();
	const { current: language } = useLanguageStore();

	useEffect(() => {
		if (i18n.language !== language) {
			updateI18n({ instance: i18n, language });
		}
	}, [i18n, language]);
};
