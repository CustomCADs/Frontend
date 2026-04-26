import z from 'zod';
import { createFileRoute } from '@tanstack/react-router';
import ResetPassword from '@/app/pages/guest/signin/reset-password';

export const Route = createFileRoute('/_guest/reset-password')({
	component: ResetPassword,
	validateSearch: z.object({
		email: z.email(),
		token: z.string(),
	}),
	head: () => ({ meta: [{ title: 'CustomCADs | Reset Password' }] }),
});
