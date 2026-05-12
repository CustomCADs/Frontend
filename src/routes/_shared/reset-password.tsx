import z from 'zod';
import { createFileRoute, redirect } from '@tanstack/react-router';
import { identityApi } from '@customcads/react-sdk';
import * as auth from '@/lib/utils/auth';
import { get } from '@/lib/isomorphic/persistence';
import ResetPassword from '@/app/pages/guest/signin/reset-password';

export const Route = createFileRoute('/_shared/reset-password')({
	validateSearch: z.object({
		email: z.email(),
		token: z.string(),
	}),
	component: ResetPassword,
	beforeLoad: async ({ search }) => {
		try {
			const { email } = search;
			const { data: account } = await identityApi.myAccount();
			if (email === account.email) return;
		} catch {} // user's probably unauthenticated

		const role = get('role');
		const is = auth.is({ authn: !!role, authz: role ?? null });
		if (!is.guest) throw redirect({ to: '/' });
	},
	head: () => ({ meta: [{ title: 'CustomCADs | Reset Password' }] }),
});
