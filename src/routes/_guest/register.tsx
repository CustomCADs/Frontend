import { createFileRoute } from '@tanstack/react-router';
import Register from '@/app/pages/guest/signup/register';

export const Route = createFileRoute('/_guest/register')({
	component: Register,
	head: () => ({ meta: [{ title: 'CustomCADs | Register' }] }),
});
