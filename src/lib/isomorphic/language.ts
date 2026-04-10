import { createIsomorphicFn } from '@tanstack/react-start';
import { AllowedLanguage } from '@/types/locale';
import { LanguageStoreState } from '@/app/stores/language';
import { LANGUAGE } from '@/app/constants/stores';
import { get } from './persistence';

export const getUserDefaultLanguage = createIsomorphicFn()
	.client(() => {
		const languages = navigator.languages || [navigator.language];
		return languages[0] as AllowedLanguage;
	})
	.server(() => 'en-GB' as AllowedLanguage);

export const getLanguageCookie = () =>
	get<LanguageStoreState>(LANGUAGE.store)?.current ?? undefined;
