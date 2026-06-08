import { useSelector } from '@tanstack/react-store';
import { actions, store } from '@/app/stores/cart';

export const useCartStore = () => {
	const state = useSelector(store);

	return { ...state, actions };
};
