import { createFileRoute } from '@tanstack/react-router';
import Home from '@/app/pages/public/home';

export const Route = createFileRoute('/_public/')({
	component: Home,
	head: () => ({ meta: [{ title: 'CustomCADs | Home' }] }),
});
