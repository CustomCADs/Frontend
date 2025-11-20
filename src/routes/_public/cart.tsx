import { createFileRoute } from '@tanstack/react-router';
import Cart from '@/app/pages/public/cart';

export const Route = createFileRoute('/_public/cart')({
	component: Cart,
});
