import { CART } from '@/app/constants/stores';
import { CartStoreState } from '@/app/stores/cart';
import { get } from './persistence';

export const getCartCookie = () =>
	get<CartStoreState>(CART.store)?.items ?? null;
