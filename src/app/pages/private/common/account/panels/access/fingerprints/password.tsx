import { useMutation } from '@customcads/react-sdk';
import { usePrivateTranslations } from '@/app/hooks/locales/translations/pages/private';
import { Button } from '@/app/components/ui/button';

type Props = { email: string };
const Password = ({ email }: Props) => {
	const { mutateAsync: sendEmail, status } = useMutation(
		({ identity }) => identity.forgotPassword,
	);
	const tAccess = usePrivateTranslations('account.access');

	return (
		<div className='flex justify-center items-center gap-x-4'>
			<Button
				size='sm'
				onClick={() => sendEmail({ email })}
				disabled={status !== 'idle'}
			>
				{tAccess(`reset-password-${status}`)}
			</Button>
		</div>
	);
};

export default Password;
