import { useFormTranslations } from '@/app/hooks/locales/translations/components';
import * as alert from '@/app/components/ui/alert';

type Props = { success: string | false; error?: string };
const Alert = ({ success, error }: Props) => {
	const tState = useFormTranslations('state');

	if (error) {
		return (
			<alert.Alert variant='destructive'>
				<alert.AlertTitle>{tState('error')}</alert.AlertTitle>
				<alert.AlertDescription>{error}</alert.AlertDescription>
			</alert.Alert>
		);
	}

	if (success) {
		return (
			<alert.Alert variant='success'>
				<alert.AlertTitle>{tState('success')}</alert.AlertTitle>
				<alert.AlertDescription>{success}</alert.AlertDescription>
			</alert.Alert>
		);
	}
};

export default Alert;
