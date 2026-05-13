import z from 'zod';
import { createFileRoute } from '@tanstack/react-router';
import ConfirmEmail from '@/app/pages/guest/signup/confirm-email';

export const Route = createFileRoute('/_guest/confirm-email')({
	component: ConfirmEmail,
	validateSearch: z.object({
		username: z.string(),
		token: z.string(),
	}),
	head: () => ({ meta: [{ title: 'CustomCADs | Confirm Email' }] }),
});
