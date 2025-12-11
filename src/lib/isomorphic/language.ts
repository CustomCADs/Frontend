import { createIsomorphicFn } from '@tanstack/react-start';
import { AllowedLanguage } from '@/types/locale';
import { LANGUAGE } from '@/app/constants/stores';
import { getCookie } from './persistence';

export const getUserDefaultLanguage = createIsomorphicFn()
	.client(() => {
		const languages = navigator.languages || [navigator.language];
		return languages[0] as AllowedLanguage;
	})
	.server(() => 'en-GB' as AllowedLanguage);

export const getLanguageCookie = () =>
	getCookie(LANGUAGE.cookie) as AllowedLanguage | undefined;
