// import { Link } from '@tanstack/react-router';
// import { useGalleryTranslations } from '@/app/hooks/locales/translations/pages/public';
import { useCartStore } from '@/app/hooks/stores/useCartStore';
import { useMoneyFormatter } from '@/app/hooks/locales/useMoneyFormatter';
// import { Button } from '@/app/components/ui/button';
import Money from './money';

type MoneyRecord = Record<string, number>;
type Props = { prices: MoneyRecord; costs: MoneyRecord };
const Aside = ({ prices, costs }: Props) => {
	// const tCart = useGalleryTranslations('cart');
	const { items } = useCartStore();

	const calculate = (money: Record<string, number>) =>
		Object.values(money).reduce((price, acc) => acc + price, 0);

	const sum = {
		prices: calculate(prices),
		costs: calculate(costs),
	};

	const formatMoney = useMoneyFormatter();
	const money = {
		product: formatMoney(sum.prices),
		print: formatMoney(sum.costs),
		total: formatMoney(sum.prices + sum.costs),
	};

	// TODO: Update when Payment is implemented
	const content = items?.length ? (
		<div className='flex flex-col gap-y-12'>
			<Money money={money} className='text-xl' />
			<span className='font-bold text-xl text-nowrap'>
				{'Payment is currently still not supported.'}
			</span>
			{/* <Link to='.'>
				<Button variant='outline' size='lg' className='text-lg w-full'>
					{tCart('buy')}
				</Button>
			</Link> */}
		</div>
	) : (
		<div className='w-full h-full flex justify-center items-center'>
			<span className='font-bold text-xl text-nowrap'>
				{'Payment is currently still not supported.'}
			</span>
			{/* <Link
				to='/gallery'
				className='italic underline underline-offset-4 text-lg'
			>
				{tCart('no-items')}
			</Link> */}
		</div>
	);

	return (
		<aside className='lg:w-1/3 flex flex-col justify-center items-stretch rounded-4xl animate-fade-in delay-1000'>
			<section className='p-12 rounded-4xl min-h-80 border-2'>
				{content}
			</section>
		</aside>
	);
};

export default Aside;
