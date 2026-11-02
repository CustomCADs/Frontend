import { useTranslation } from '../../../useTranslation';

type Common =
	| 'account'
	| 'account.shell'
	| 'account.profile'
	| 'account.access';
export const usePrivateTranslations = <N extends Common>(ns: N) =>
	useTranslation(`pages.private.common.${ns}`).t;

type Customer = 'checkout';
export const useCustomerTranslations = <N extends Customer>(ns: N) =>
	useTranslation(`pages.private.customer.${ns}`).t;
