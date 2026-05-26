import { createFileRoute, redirect } from '@tanstack/react-router';
import { auth } from '@/lib/utils';

export const Route = createFileRoute('/_private')({
	beforeLoad: () => {
		if (auth.is().guest) throw redirect({ to: '/login' });
	},
});
