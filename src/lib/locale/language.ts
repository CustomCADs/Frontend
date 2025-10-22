import { Language } from '@/types/locale';

export const getUserDefaultLanguage = () =>
	(navigator.languages || [navigator.language])[0] as Language;
