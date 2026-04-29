import { useTranslation } from '../../../useTranslation';

type Common = 'account';
export const useCommonTranslations = <N extends Common>(ns: N) =>
	useTranslation(`pages.private.common.${ns}`).t;
