import { useMoneyFormatter } from '@/app/hooks/locales/useMoneyFormatter';

type Props = { product: number; print: number };
export const useItemMoney = ({ product, print }: Props) => {
	const formatMoney = useMoneyFormatter();

	return {
		product: formatMoney(product),
		print: formatMoney(print),
		total: formatMoney(product + print),
	};
};
