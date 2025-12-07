import { useQuery } from '@customcads/react-sdk';
import { fromBase } from '@/app/utils/money';
import { useCurrencyStore } from '@/app/hooks/stores/useCurrencyStore';

export const useMoney = (sum: number) => {
	const { data: rates } = useQuery(({ exchangeRates }) => exchangeRates.all);
	const { current: currency } = useCurrencyStore();

	const { money, symbol } = fromBase({ money: sum, to: currency, rates });
	return `${symbol}${money.toFixed(2)}`;
};
