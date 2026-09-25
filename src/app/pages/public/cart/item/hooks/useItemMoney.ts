import { useMoneyFormatter } from '@/app/hooks/locales/useMoneyFormatter';

type Props = { product: number; print: number; quantity?: number };
export const useItemMoney = ({ product, print, quantity = 1 }: Props) => {
	const formatMoney = useMoneyFormatter();

	return {
		product: formatMoney(product),
		print: formatMoney(print),
		total: formatMoney(quantity * (product + print)),
	};
};
