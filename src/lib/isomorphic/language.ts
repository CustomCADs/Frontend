import { createIsomorphicFn } from '@tanstack/react-start';
import { getCookie } from '@tanstack/react-start/server';
import Cookies from 'js-cookie';
import { AllowedLanguage } from '@/types/locale';

export const getUserDefaultLanguage = createIsomorphicFn()
	.client(
		() =>
			(navigator.languages || [navigator.language])[0] as AllowedLanguage,
	)
	.server(() => 'en-GB' as AllowedLanguage);

export const getLanguageCookie = createIsomorphicFn()
	.client(() => Cookies.get('language') as AllowedLanguage | undefined)
	.server(() => getCookie('language') as AllowedLanguage | undefined);
