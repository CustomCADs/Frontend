import { useSelector } from '@tanstack/react-store';
import { store } from '@/app/stores/currency';

export const useCurrencyStore = () => {
	const state = useSelector(store);

	return state;
};
