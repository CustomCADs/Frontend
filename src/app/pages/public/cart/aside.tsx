import { Link } from '@tanstack/react-router';
import { useCartStore } from '@/app/hooks/stores/useCartStore';
import { useMoneyFormatter } from '@/app/hooks/locales/useMoneyFormatter';
import { useGalleryTranslations } from '@/app/hooks/locales/translations/pages/public';
import StripeProvider from '@/app/components/stripe-provider';
import { Button } from '@/app/components/ui';
import DialogCheckout from '@/app/pages/private/customer/checkout/payment/dialog';
import Money from './money';

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

	if (!items?.length) return null;

	// TODO: Update when Payment is implemented
	return (
		<aside className='flex justify-center items-center animate-fade-in delay-1000'>
			<div className='w-full min-w-2xs flex flex-col justify-center items-center gap-y-12 md:p-18 px-6 py-12 border-2 rounded-4xl'>
				<Money
					money={money}
					withSigns
					plural
					className='text-xl text-nowrap font-extrabold'
				/>
				<span className='font-bold text-sm text-center'>
					{'Payment is currently still not supported.'}
				</span>
			</div>
		</aside>
	);
};

export default Aside;
