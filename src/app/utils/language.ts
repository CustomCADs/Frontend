import { Language } from '@/types/locale';
import { i18n as defaultI18n } from '@/app/locales/i18n';

type UpdateI18nProps = { instance: typeof defaultI18n; language?: Language };
export const updateI18n = ({ instance: i18n, language }: UpdateI18nProps) => {
	if (language && i18n.language !== language) i18n.changeLanguage(language);
};
