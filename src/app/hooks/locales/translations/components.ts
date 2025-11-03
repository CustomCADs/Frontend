import { useTranslation } from '../useTranslation';

type Layout = 'footer' | 'header';
export const useLayoutTranslations = <N extends Layout>(ns: N) =>
	useTranslation(`components.layout.${ns}`).t;

type Form = 'errors' | 'labels' | 'placeholders';
export const useFormTranslations = <N extends Form>(ns: N) =>
	useTranslation(`components.form.${ns}`).t;
