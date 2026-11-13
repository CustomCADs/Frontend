import { query } from '@customcads/react-sdk';
import { createFileRoute, redirect } from '@tanstack/react-router';
import Checkout from '@/app/pages/private/customer/checkout';

export const Route = createFileRoute('/_private/checkout')({
	component: Checkout,
	beforeLoad: async ({ context: { queryClient } }) => {
		const { data: count } = await query.fetchQuery(
			({ activeCarts }) => activeCarts.count,
			queryClient,
		);
		if (count === 0) throw redirect({ to: '/cart' });
	},
	head: () => ({ meta: [{ title: 'CustomCADs | Checkout' }] }),
});
