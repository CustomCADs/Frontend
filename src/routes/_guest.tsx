import { createFileRoute, redirect } from '@tanstack/react-router';
import * as auth from '@/lib/utils/auth';
import { getCookie } from '@/lib/isomorphic/persistence';

export const Route = createFileRoute('/_guest')({
	beforeLoad: () => {
		const role = getCookie('role');
		const is = auth.is({ authn: !!role, authz: role ?? null });
		if (!is.guest) throw redirect({ to: '/' });
	},
});
