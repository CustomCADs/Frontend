import { Pages } from './pages';
import { Components } from './components';
import * as common from './common';

export type Common = {
	'common.locales': common.Locales;
	'common.metrics': common.Metrics;
	'common.loading': common.Loading;
	'common.empty': common.Empty;
	'common.errors': common.Errors;
};

export type Translations = Pages & Components & Common;
