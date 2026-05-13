import { useTranslation } from '../useTranslation';

type Common = 'locales' | 'roles' | 'loading' | 'empty' | 'errors' | 'metrics';
export const useCommonTranslations = <N extends Common>(ns: N) =>
	useTranslation(`common.${ns}`).t;
