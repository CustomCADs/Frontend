import { Currency, EXCHANGE_RATES } from '@customcads/react-sdk';

type Languages = {
	[C in Currency]: (typeof EXCHANGE_RATES)[C]['language'];
};
export type Language = Languages[Currency];
export const ALLOWED_LANGUAGES: Language[] = ['en-GB', 'bg-BG'];
