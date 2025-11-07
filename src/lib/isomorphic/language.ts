import { createClientOnlyFn, createIsomorphicFn } from '@tanstack/react-start';
import { getCookie } from '@tanstack/react-start/server';
import Cookies from 'js-cookie';
import { Language } from '@/types/locale';

export const getUserDefaultLanguage = createClientOnlyFn(
	() => (navigator.languages || [navigator.language])[0] as Language,
);

export const getLanguageCookie = createIsomorphicFn()
	.client(() => Cookies.get('language') as Language | undefined)
	.server(() => getCookie('language') as Language | undefined);
