import { useMoney } from '@/app/hooks/locales/useMoney';

type Props = { product: number; print: number };
export const useItemMoney = ({ product, print }: Props) => ({
	product: useMoney(product),
	print: useMoney(print),
	total: useMoney(product + print),
});
