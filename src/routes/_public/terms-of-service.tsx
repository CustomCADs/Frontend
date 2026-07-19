import { createFileRoute } from '@tanstack/react-router';
import TermsOfService from '@/app/pages/public/legal/terms-of-service';

export const Route = createFileRoute('/_public/terms-of-service')({
	component: TermsOfService,
});
