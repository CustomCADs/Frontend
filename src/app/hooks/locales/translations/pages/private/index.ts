import { useTranslation } from '../../../useTranslation';

type Common = 'account';
export const usePrivateTranslations = <N extends Common>(ns: N) =>
	useTranslation(`pages.private.common.${ns}`).t;
