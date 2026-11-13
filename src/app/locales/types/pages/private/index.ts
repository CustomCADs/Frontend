import * as common from './common';
import * as customer from './customer';

export type Private = {
	'pages.private.common.account': common.MyAccount;
	'pages.private.common.account.shell': common.MyAccountShell;
	'pages.private.common.account.profile': common.MyAccountProfile;
	'pages.private.common.account.access': common.MyAccountAccess;
	'pages.private.customer.checkout': customer.Checkout;
};
