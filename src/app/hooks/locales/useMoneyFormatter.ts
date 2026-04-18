import { useQuery } from '@customcads/react-sdk';
import { fromBase } from '@/app/utils/money';
import { useCurrencyStore } from '@/app/hooks/stores/useCurrencyStore';

export const useMoneyFormatter = () => {
	const { data: rates } = useQuery(({ exchangeRates }) => exchangeRates.all);
	const { current: currency } = useCurrencyStore();

	return (sum: number, fixed?: number) => {
		const { money, symbol } = fromBase({ money: sum, to: currency, rates });
		return `${symbol}${money.toFixed(fixed ?? 2)}`;
	};
};
