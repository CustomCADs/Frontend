import { Translations as PagesTranslations } from './pages';
import { Translations as ComponentsTranslations } from './components';
import * as common from './common';

export type CommonTranslations = {
	'common.locales': common.Locales;
	'common.metrics': common.Metrics;
	'common.loading': common.Loading;
	'common.empty': common.Empty;
	'common.errors': common.Errors;
};

export type Translations = PagesTranslations &
	ComponentsTranslations &
	CommonTranslations;
