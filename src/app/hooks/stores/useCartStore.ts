import { useStore } from '@tanstack/react-store';
import { actions, store } from '@/app/stores/cart';

export const useCartStore = () => {
	const state = useStore(store);

	return { ...state, actions };
};
