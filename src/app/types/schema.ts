import { TOptions } from 'i18next';
import * as form from '@/app/locales/types/components/form';

export type Translators = {
	tErrors: (key: keyof form.Errors, options?: TOptions) => string;
	tLabels: (key: keyof form.Labels, options?: TOptions) => string;
};
