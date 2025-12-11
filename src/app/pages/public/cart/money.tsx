import { useGalleryTranslations } from '@/app/hooks/locales/translations/pages/public';

type Props = {
	money: { product: string; print: string; total: string };
	className?: string;
	separator?: string;
	withSigns?: boolean;
};
const Money = ({
	className,
	separator = ': ',
	withSigns,
	money: { product, print, total },
}: Props) => {
	const tCart = useGalleryTranslations('cart');

	return (
		<div>
			<p className={className}>
				{tCart('product-price')}
				{separator}
				{product}
			</p>
			{withSigns && <span>+</span>}
			<p className={className}>
				{tCart('print-cost')}
				{separator}
				{print}
			</p>
			{withSigns && <span>=</span>}
			<p className={className}>
				{tCart('total-sum')}
				{separator}
				{total}
			</p>
		</div>
	);
};

export default Money;
