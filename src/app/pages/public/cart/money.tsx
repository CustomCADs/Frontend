import { ClassName } from '@/types/react';
import { cn } from '@/lib/utils';
import { useGalleryTranslations } from '@/app/hooks/locales/translations/pages/public';

type Props = ClassName & {
	money: { product: string; print: string; total: string };
	separator?: string;
	withSigns?: boolean;
	plural?: boolean;
};
const Money = ({
	className,
	separator = ': ',
	withSigns,
	plural,
	money: { product, print, total },
}: Props) => {
	const tCart = useGalleryTranslations('cart');

	return (
		<div className='h-full flex flex-col md:justify-between justify-around items-center'>
			<p className={className}>
				{tCart('product-price', { count: plural ? 2 : 1 })}
				{separator}
				{product}
			</p>
			{withSigns && <span className={cn(className, 'font-bold')}>+</span>}
			<p className={className}>
				{tCart('print-cost', { count: plural ? 2 : 1 })}
				{separator}
				{print}
			</p>
			{withSigns && <span className={cn(className, 'font-bold')}>=</span>}
			<p className={className}>
				{tCart('total-sum', { count: plural ? 2 : 1 })}
				{separator}
				{total}
			</p>
		</div>
	);
};

export default Money;
