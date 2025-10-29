import { Translations as ComponentsTranslations } from './components';
import * as common from './common';

export type CommonTranslations = {
	'common.locales': common.Locales;
	'common.errors': common.Errors;
};

export type Translations = ComponentsTranslations & CommonTranslations;
