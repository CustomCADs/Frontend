import { createIsomorphicFn } from '@tanstack/react-start';
import { ALLOWED_LANGUAGES, AllowedLanguage } from '@/types/locale';
import { LanguageStoreState } from '@/app/stores/locale';
import { LOCALE } from '@/app/constants/stores';
import { get } from './persistence';

export const getUserDefaultLanguage = createIsomorphicFn()
	.client<[], AllowedLanguage>(() => {
		const languages = navigator.languages || [navigator.language];

		const matches: (AllowedLanguage | undefined)[] = [
			ALLOWED_LANGUAGES.find((x) => languages.includes(x)),
			ALLOWED_LANGUAGES.map((x) => ({
				original: x,
				split: x.split('-')[0],
			})).find((x) => languages.includes(x.split))?.original,
		];

		return matches.find((x) => !!x) ?? 'en-GB';
	})
	.server<AllowedLanguage>(() => 'en-GB');

export const getUserTimeZone = createIsomorphicFn()
	.client(() => Intl.DateTimeFormat().resolvedOptions().timeZone)
	.server(() => 'UTC');

export const getLanguageCookie = () =>
	get<LanguageStoreState>(LOCALE.store)?.language ?? undefined;

export const getTimeZoneCookie = () =>
	get<LanguageStoreState>(LOCALE.store)?.timezone ?? undefined;
