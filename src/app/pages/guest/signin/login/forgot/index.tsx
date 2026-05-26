import { useSigninTranslations } from '@/app/hooks/locales/translations/pages/guest';
import { Button, card } from '@/app/components/ui';
import Alert from '@/app/components/alert';
import { useFields } from './hooks/useFields';

const ForgotPassword = () => {
	const { fields, error, isSuccess, handleSubmit } = useFields();
	const tForgot = useSigninTranslations('forgot');

	return (
		<form onSubmit={handleSubmit}>
			<card.Root className='bg-card border-0 transition-colors duration-600'>
				<card.Header>
					<card.Title className='md:text-lg text-center'>
						{tForgot('title')}
					</card.Title>
					<card.Description className='text-center'>
						{tForgot('subtitle')}
					</card.Description>
				</card.Header>
				<card.Content>
					<div className='flex flex-col'>
						<div className='grid gap-2 mb-6'>
							<fields.Email />
						</div>
					</div>
				</card.Content>
				<card.Footer className='flex-col gap-3.5'>
					<Button className='w-full'>{tForgot('button')}</Button>
					<Alert
						success={isSuccess && tForgot('message')}
						error={error}
					/>
				</card.Footer>
			</card.Root>
		</form>
	);
};

export default ForgotPassword;
