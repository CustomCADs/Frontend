import { createFileRoute } from '@tanstack/react-router';
import ForgotPassword from '@/app/pages/guest/signin/password/forgot';

export const Route = createFileRoute('/_guest/forgot-password')({
	component: ForgotPassword,
	head: () => ({ meta: [{ title: 'CustomCADs | Forgot Password' }] }),
});
