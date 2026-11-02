import { useCartStore } from '@/app/hooks/stores/useCartStore';
import { useMoneyFormatter } from '@/app/hooks/locales/useMoneyFormatter';
import { useGalleryTranslations } from '@/app/hooks/locales/translations/pages/public';
import { Button } from '@/app/components/ui';
import Money from './money';
import CheckoutButton from './checkout';

type MoneyRecord = Record<string, number>;
type Props = { prices: MoneyRecord; costs: MoneyRecord };
const Aside = ({ prices, costs }: Props) => {
	const { items } = useCartStore();
	const calculate = (money: Record<string, number>) =>
		Object.values(money).reduce((price, acc) => acc + price, 0);

	const sum = { prices: calculate(prices), costs: calculate(costs) };
	const formatMoney = useMoneyFormatter();
	const money = {
		product: formatMoney(sum.prices),
		print: formatMoney(sum.costs),
		total: formatMoney(sum.prices + sum.costs),
	};

	const tCart = useGalleryTranslations('cart');
	if (!items?.length) return null;

	return (
		<aside className='flex justify-center items-center animate-fade-in delay-1000'>
			<div className='w-full min-w-2xs flex flex-col justify-center items-center gap-y-12 md:p-18 px-6 py-12 border-2 rounded-4xl'>
				<Money
					money={money}
					withSigns
					plural
					className='text-xl text-nowrap font-extrabold'
				/>
				<CheckoutButton hasDelivery={items.some((x) => x.forDelivery)}>
					<Button tag='div' size='lg' className='text-lg'>
						{tCart('purchase')}
					</Button>
				</CheckoutButton>
			</div>
		</aside>
	);
};

export default Aside;
