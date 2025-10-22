import { TOptions } from 'i18next';
import { useTranslation as useI18nextTranslation } from 'react-i18next';
import { Translations } from '@/app/locales/types';

export const useTranslation = <T extends keyof Translations>(namespace: T) => {
	const { t } = useI18nextTranslation(namespace);

	return {
		t: (key: keyof Translations[T], options?: TOptions) =>
			t(key as string, options) as string,
	};
};
