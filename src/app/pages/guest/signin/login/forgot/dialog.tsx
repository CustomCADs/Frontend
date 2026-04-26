import { useFormTranslations } from '@/app/hooks/locales/translations/components';
import {
	Dialog,
	DialogTrigger,
	DialogContent,
} from '@/app/components/ui/dialog';
import ForgotPassword from '.';

const ForgotPasswordDialog = () => {
	const tLabels = useFormTranslations('labels');

	return (
		<Dialog>
			<DialogTrigger className='justify-self-end'>
				<span className='text-sm underline-offset-4 hover:underline'>
					{tLabels('forgot-password')}
				</span>
			</DialogTrigger>
			<DialogContent className='bg-card' autoFocus={false}>
				<ForgotPassword />
			</DialogContent>
		</Dialog>
	);
};

export default ForgotPasswordDialog;
