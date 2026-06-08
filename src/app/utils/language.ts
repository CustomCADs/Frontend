import { ALLOWED_LANGUAGES, AllowedLanguage } from '@/types/locale';
import { i18n as defaultI18n } from '@/app/locales/i18n';

type Props = {
	instance: typeof defaultI18n;
	language?: AllowedLanguage;
};
export const updateI18n = ({ instance: i18n, language }: Props) => {
	const isDifferent = i18n.language !== language;
	const isAllowed = language && ALLOWED_LANGUAGES.includes(language);

	if (isDifferent && isAllowed) i18n.changeLanguage(language);
};
