import { Button } from '@/app/components/ui';
import { useMutation } from '@customcads/react-sdk';
import { Data } from '@/app/validators/register';
import { useSignupTranslations } from '@/app/hooks/locales/translations/pages/guest';

type Props = { data: Data };
const RetryEmail = ({ data: { username } }: Props) => {
	const { mutateAsync: retry } = useMutation(
		({ identity }) => identity.retryConfirmEmail,
	);
	const tRegister = useSignupTranslations('register');

	return (
		<div className='flex flex-col items-center gap-y-2'>
			<p className='text-lg font-bold'>{tRegister('success')}</p>
			<p className='text-lg text-muted-foreground'>
				{tRegister('email-waiting')}
			</p>
			{username && (
				<p className='flex items-center gap-x-2 text-muted-foreground'>
					<span>{tRegister('no-received')}</span>
					<Button
						variant='link'
						size='sm'
						className='p-3 bg-background active:opacity-60 transition duration-300'
						onClick={() => retry({ username })}
					>
						{tRegister('retry')}
					</Button>
				</p>
			)}
		</div>
	);
};

export default RetryEmail;
