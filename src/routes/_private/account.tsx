import z from 'zod';
import { createFileRoute } from '@tanstack/react-router';
import { queryCall } from '@customcads/react-sdk';
import MyAccount, { tabs } from '@/app/pages/private/common/account';

export const Route = createFileRoute('/_private/account')({
	component: MyAccount,
	validateSearch: z.object({
		tab: z.literal(tabs).optional(),
	}),
	loader: async ({ context: { queryClient } }) => {
		const { data: account } = await queryCall(
			({ identity }) => identity.myAccount,
			(opts) => queryClient.fetchQuery(opts),
		);
		return { account };
	},
	head: () => ({ meta: [{ title: 'CustomCADs | Account' }] }),
});
