import { createFileRoute } from '@tanstack/react-router';
import Login from '@/app/pages/guest/signin/login';

export const Route = createFileRoute('/_guest/login')({
	component: Login,
});
