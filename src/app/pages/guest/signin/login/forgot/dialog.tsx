import { useSigninTranslations } from '@/app/hooks/locales/translations/pages/guest';
import { dialog } from '@/app/components/ui';
import ForgotPassword from '.';

const ForgotPasswordDialog = () => {
	const tLogin = useSigninTranslations('login');

	return (
		<dialog.Root>
			<dialog.Trigger className='justify-self-end'>
				<span className='text-sm underline-offset-4 hover:underline'>
					{tLogin('forgot-password')}
				</span>
			</dialog.Trigger>
			<dialog.Content className='bg-card' autoFocus={false}>
				<ForgotPassword />
			</dialog.Content>
		</dialog.Root>
	);
};

export default ForgotPasswordDialog;
