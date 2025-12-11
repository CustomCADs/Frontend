import { CART } from '@/app/constants/stores';
import { CartItem } from '@/app/types/cart-item';
import { getCookie } from './persistence';

const parse = (cookie: string | null): CartItem[] | null =>
	JSON.parse(cookie ?? 'null');

export const getCartCookie = () => parse(getCookie(CART.cookie) ?? null);
