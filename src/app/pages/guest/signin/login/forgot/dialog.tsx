import { useSigninTranslations } from '@/app/hooks/locales/translations/pages/guest';
import {
	Dialog,
	DialogTrigger,
	DialogContent,
} from '@/app/components/ui/dialog';
import ForgotPassword from '.';

const ForgotPasswordDialog = () => {
	const tLogin = useSigninTranslations('login');

	return (
		<Dialog>
			<DialogTrigger className='justify-self-end'>
				<span className='text-sm underline-offset-4 hover:underline'>
					{tLogin('forgot-password')}
				</span>
			</DialogTrigger>
			<DialogContent className='bg-card' autoFocus={false}>
				<ForgotPassword />
			</DialogContent>
		</Dialog>
	);
};

export default ForgotPasswordDialog;
