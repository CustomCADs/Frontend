import { useTranslation } from '../useTranslation';

type Common = 'locales' | 'roles' | 'loading' | 'errors' | 'metrics';
export const useCommonTranslations = <N extends Common>(ns: N) =>
	useTranslation(`common.${ns}`).t;

type Empty = 'gallery' | 'cart';
export const useEmptyTranslations = <N extends Empty>(ns: N) =>
	useTranslation(`common.empty.${ns}`).t;
