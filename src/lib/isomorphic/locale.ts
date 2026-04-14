import { createIsomorphicFn } from '@tanstack/react-start';
import { AllowedLanguage } from '@/types/locale';
import { LanguageStoreState } from '@/app/stores/locale';
import { LOCALE } from '@/app/constants/stores';
import { get } from './persistence';

export const getUserDefaultLanguage = createIsomorphicFn()
	.client(() => {
		const languages = navigator.languages || [navigator.language];
		return languages[0] as AllowedLanguage;
	})
	.server(() => 'en-GB' as AllowedLanguage);

export const getUserTimeZone = createIsomorphicFn()
	.client(() => {
		const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
		return timeZone;
	})
	.server(() => 'UTC');

export const getLanguageCookie = () =>
	get<LanguageStoreState>(LOCALE.store)?.language ?? undefined;

export const getTimeZoneCookie = () =>
	get<LanguageStoreState>(LOCALE.store)?.timezone ?? undefined;
