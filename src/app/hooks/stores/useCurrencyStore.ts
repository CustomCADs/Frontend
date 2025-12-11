import { useStore } from '@tanstack/react-store';
import { store } from '@/app/stores/currency';

export const useCurrencyStore = () => {
	const state = useStore(store);

	return state;
};
