import * as info from './info';
import * as gallery from './gallery';

export type Public = {
	'pages.public.info.home': info.Home;
	'pages.public.info.preferences': info.Preferences;
	'pages.public.gallery.product': gallery.Product;
	'pages.public.gallery.cart': gallery.Cart;
	'pages.public.gallery.editor': gallery.Editor;
};
