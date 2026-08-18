import { useCartStore } from '@/app/hooks/stores/useCartStore';
import { useMoneyFormatter } from '@/app/hooks/locales/useMoneyFormatter';
import Money from './money';

type MoneyRecord = Record<string, number>;
type Props = { prices: MoneyRecord; costs: MoneyRecord };
const Aside = ({ prices, costs }: Props) => {
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

	if (!items?.length) return;

	// TODO: Update when Payment is implemented
	return (
		<aside className='flex flex-col justify-center rounded-4xl animate-fade-in delay-1000'>
			<div className='p-12 rounded-4xl sm:min-w-106 min-h-80 border-2'>
				<div className='flex flex-col gap-y-12'>
					<Money money={money} className='text-xl' />
					<span className='font-bold text-xl'>
						{'Payment is currently still not supported.'}
					</span>
				</div>
			</div>
		</aside>
	);
};

export default Aside;
