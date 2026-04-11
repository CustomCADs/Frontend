import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getUserTimeZone } from '@/lib/isomorphic/locale';
import { useLocaleStore } from '@/app/hooks/stores/useLocaleStore';
import * as localeStore from '@/app/stores/locale';
import { updateI18n } from '@/app/utils/language';

export const useLocaleSync = () => {
	const { i18n } = useTranslation();
	const locale = useLocaleStore();

	useEffect(() => {
		const timezone = getUserTimeZone();
		if (timezone && locale.timezone !== timezone) {
			localeStore.setTimeZone(timezone);
		}
	}, []);

	useEffect(() => {
		if (i18n.language !== locale.language) {
			updateI18n({ instance: i18n, language: locale.language });
		}
	}, [i18n, locale.language]);
};
