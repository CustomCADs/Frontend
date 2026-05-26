import { cn } from '@/lib/utils';
import { useSigninTranslations } from '@/app/hooks/locales/translations/pages/guest';
import { Button, card } from '@/app/components/ui';
import Alert from '@/app/components/alert';
import * as page from '@/app/utils/page';
import { useFields } from './hooks/useFields';

const ForgotPassword = () => {
	const { fields, error, isSuccess, handleSubmit } = useFields();
	const tForgot = useSigninTranslations('reset');

	return (
		<div className={cn(page.className, 'animate-fade-in delay-400')}>
			<form onSubmit={handleSubmit} className='min-w-1/3'>
				<card.Root className='py-15 px-8 bg-card border-border border-2 shadow-shadow shadow-xl/100 transition-colors duration-600'>
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
								<fields.Password />
							</div>
							<div className='grid gap-2 mb-6'>
								<fields.ConfirmPassword />
							</div>
						</div>
					</card.Content>
					<card.Footer className='flex flex-col gap-3.5'>
						<Button className='w-full'>{tForgot('button')}</Button>
						<Alert
							success={isSuccess && tForgot('message')}
							error={error}
						/>
					</card.Footer>
				</card.Root>
			</form>
		</div>
	);
};

export default ForgotPassword;
