import { useFormTranslations } from '@/app/hooks/locales/translations/components';
import { alert } from '@/app/components/ui/';

type Props = { success: string | false; error?: string };
const Alert = ({ success, error }: Props) => {
	const tState = useFormTranslations('state');

	if (error) {
		return (
			<alert.Root variant='destructive'>
				<alert.Title>{tState('error')}</alert.Title>
				<alert.Description>{error}</alert.Description>
			</alert.Root>
		);
	}

	if (success) {
		return (
			<alert.Root variant='success'>
				<alert.Title>{tState('success')}</alert.Title>
				<alert.Description>{success}</alert.Description>
			</alert.Root>
		);
	}
};

export default Alert;
