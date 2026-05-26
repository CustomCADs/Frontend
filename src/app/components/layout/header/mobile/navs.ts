import { Hammer, Home, Store } from 'lucide-react';
import { auth } from '@/lib/utils';
import { Props } from './sidebar';

export default {
	main: [
		{ name: 'home', url: '/', icon: Home },
		{ name: 'gallery', url: '/gallery', icon: Store },
	],
	getCollections: (is): Props['collections'] => {
		if (is.guest)
			return [
				{
					name: 'services-info',
					url: '.',
					icon: Hammer,
				},
				{
					name: 'printer-info',
					url: '.',
					icon: Hammer,
				},
				{
					name: 'apply-designer',
					url: '.',
					icon: Hammer,
				},
			];

		return [];
	},
	getWorkspaces: (is): Props['workspaces'] => {
		if (is.customer)
			return [
				{
					name: 'resources',
					pages: [
						{
							name: 'customs',
							url: '.',
							icon: Hammer,
						},
						{
							name: 'carts',
							url: '.',
							icon: Hammer,
						},
					],
				},
				{
					name: 'rewards',
					pages: [
						{
							name: 'shipments',
							url: '.',
							icon: Hammer,
						},
						{
							name: 'cads',
							url: '.',
							icon: Hammer,
						},
					],
				},
			];

		if (is.contributor)
			return [
				{
					name: 'gallery-products',
					pages: [
						{
							name: 'upload-product',
							url: '.',
							icon: Hammer,
						},
						{
							name: 'uploaded-products',
							url: '.',
							icon: Hammer,
						},
					],
				},
				{
					name: 'market-cads',
					pages: [
						{
							name: 'sell-cad',
							url: '.',
							icon: Hammer,
						},
						{
							name: 'sold-cads',
							url: '.',
							icon: Hammer,
						},
					],
				},
			];

		if (is.designer)
			return [
				{
					name: 'your-products',
					pages: [
						{ name: 'upload-product', icon: Hammer, url: '.' },
						{ name: 'uploaded-products', icon: Hammer, url: '.' },
					],
				},
				{
					name: 'contributor-products',
					pages: [
						{ name: 'check-product', icon: Hammer, url: '.' },
						{ name: 'checked-products', icon: Hammer, url: '.' },
					],
				},
				{
					name: 'customer-orders',
					pages: [
						{ name: 'accept-custom', icon: Hammer, url: '.' },
						{ name: 'accepted-customs', icon: Hammer, url: '.' },
					],
				},
				{
					name: 'contributor-cads',
					pages: [
						{ name: 'buy-cad', icon: Hammer, url: '.' },
						{ name: 'bought-cads', icon: Hammer, url: '.' },
					],
				},
			];

		return [];
	},
} satisfies {
	main: Props['main'];
	getCollections: (is: auth.Returns) => Props['collections'];
	getWorkspaces: (is: auth.Returns) => Props['workspaces'];
};
