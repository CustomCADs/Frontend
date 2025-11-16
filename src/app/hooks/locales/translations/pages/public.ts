import { useTranslation } from '../../useTranslation';

type Info = 'home';
export const useInfoTranslations = <N extends Info>(ns: N) =>
	useTranslation(`pages.public.info.${ns}`).t;
