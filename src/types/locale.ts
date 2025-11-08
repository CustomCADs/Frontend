import { Currency, EXCHANGE_RATES } from '@customcads/react-sdk';

type Languages = {
	[C in Currency]: (typeof EXCHANGE_RATES)[C]['language'];
};
export type Language = Languages[Currency];

export const ALLOWED_LANGUAGES = (<T extends Language[]>(langs: T) => langs)([
	'en-GB',
	'bg-BG',
] as const);
export type AllowedLanguage = (typeof ALLOWED_LANGUAGES)[number];

export const FLAGS: Record<AllowedLanguage, string> = {
	'bg-BG': '/flags/bg.svg',
	'en-GB': '/flags/gb.svg',
};
