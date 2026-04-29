import { createFileRoute, redirect } from '@tanstack/react-router';
import * as auth from '@/lib/utils/auth';
import { get } from '@/lib/isomorphic/persistence';

export const Route = createFileRoute('/_private')({
	beforeLoad: () => {
		const role = get('role');
		const is = auth.is({ authn: !!role, authz: role ?? null });
		if (is.guest) throw redirect({ to: '/login' });
	},
});
