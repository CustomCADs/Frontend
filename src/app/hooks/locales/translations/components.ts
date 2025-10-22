import { useTranslation } from '../useTranslation';

type Layout = 'footer' | 'header';
export const useLayoutTranslations = <N extends Layout>(ns: N) =>
	useTranslation(`components.layout.${ns}`).t;
