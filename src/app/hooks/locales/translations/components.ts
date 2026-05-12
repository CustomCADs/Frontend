import { useTranslation } from '../useTranslation';

type Layout = 'footer' | 'header' | 'ui';
export const useLayoutTranslations = <N extends Layout>(ns: N) =>
	useTranslation(`components.layout.${ns}`).t;

type Form = 'errors' | 'labels' | 'placeholders' | 'state';
export const useFormTranslations = <N extends Form>(ns: N) =>
	useTranslation(`components.form.${ns}`).t;
