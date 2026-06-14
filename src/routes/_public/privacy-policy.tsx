import { createFileRoute } from '@tanstack/react-router';
import PrivacyPolicy from '@/app/pages/public/legal/privacy-policy';

export const Route = createFileRoute('/_public/privacy-policy')({
	component: PrivacyPolicy,
});
