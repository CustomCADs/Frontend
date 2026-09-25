import { useEffect } from 'react';
import { GallerySingleProductResponse, useQuery } from '@customcads/react-sdk';

type Result =
	| { product?: undefined; onRemovePrice?: undefined }
	| { product: GallerySingleProductResponse; onRemovePrice: VoidFunction };

export const useCartItemProduct = (
	productId: string,
	sum: { reset: VoidFunction; addFrom: (num: number) => void },
): Result => {
	const { data: product } = useQuery(({ products }) =>
		products.gallery.single({ id: productId }),
	);

	useEffect(() => {
		sum.reset();
		product && sum.addFrom(product.price);
	}, [product]);
	if (!product) return {};

	const onRemove = () => sum.addFrom(-product.price);
	return { product, onRemovePrice: onRemove };
};
