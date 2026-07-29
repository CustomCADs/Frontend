import { Language } from '@/types/locale';
import { Empty } from './common/empty';

export type Common = {
	'common.locales': Locales;
	'common.roles': Roles;
	'common.metrics': Metrics;
	'common.loading': Loading;
	'common.errors': Errors;
} & Empty;

type Locales = Record<Language, string>;

type Roles = {
	Customer: string;
	Contributor: string;
	Creator: string;
	Designer: string;
	Administrator: string;
};

type Loading = {
	gallery: string;
};

type Metrics = {
	width: string;
	height: string;
	length: string;
	volume: string;
};

type Errors = {
	login_link: string;
	contact_support_link: string;
	'400_title': string;
	'400_message': string;
	'400_tip': string;
	'401_title': string;
	'401_message': string;
	'401_tip': string;
	'403_title': string;
	'403_message': string;
	'403_tip': string;
	'404_title': string;
	'404_message': string;
	'404_tip': string;
	default_title: string;
	default_message: string;
	default_tip: string;
};
