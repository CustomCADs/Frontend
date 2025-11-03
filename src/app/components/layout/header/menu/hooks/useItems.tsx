import { LinkProps } from '@tanstack/react-router';
import { useAuthStore } from '@/app/hooks/stores/useAuthStore';
import { Header } from '@/app/locales/types/components/layout';

type Result = {
	titleKey: keyof Header;
	items: Array<{ link: LinkProps['to']; textKey: keyof Header }[]>;
};
export const useItems = (): Result => {
	const { is } = useAuthStore();

	if (is.guest)
		return {
			titleKey: 'useful',
			items: [
				[
					{ link: '.', textKey: 'services-info' },
					{ link: '.', textKey: 'printer-info' },
					{ link: '.', textKey: 'apply-designer' },
				],
			],
		};

	if (is.customer)
		return {
			titleKey: 'collections',
			items: [
				[
					{ link: '.', textKey: 'customs' },
					{ link: '.', textKey: 'carts' },
				],
				[
					{ link: '.', textKey: 'shipments' },
					{ link: '.', textKey: 'cads' },
				],
			],
		};

	if (is.contributor)
		return {
			titleKey: 'collections',
			items: [
				[
					{ link: '.', textKey: 'upload-product' },
					{ link: '.', textKey: 'uploaded-products' },
				],
				[
					{ link: '.', textKey: 'sell-product' },
					{ link: '.', textKey: 'sold-products' },
				],
			],
		};

	if (is.designer)
		return {
			titleKey: 'collections',
			items: [
				[
					{ link: '.', textKey: 'upload-product' },
					{ link: '.', textKey: 'uploaded-products' },
				],
				[
					{ link: '.', textKey: 'check-product' },
					{ link: '.', textKey: 'checked-products' },
				],
				[
					{ link: '.', textKey: 'buy-cad' },
					{ link: '.', textKey: 'bought-cads' },
				],
				[
					{ link: '.', textKey: 'accept-custom' },
					{ link: '.', textKey: 'accepted-customs' },
				],
			],
		};

	return {
		titleKey: null!,
		items: [],
	};
};
