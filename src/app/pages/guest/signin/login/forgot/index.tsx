import { useSigninTranslations } from '@/app/hooks/locales/translations/pages/guest';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import Alert from '@/app/components/alert';
import { useFields } from './hooks/useFields';

const ForgotPassword = () => {
	const { fields, error, isSuccess, handleSubmit } = useFields();
	const tForgot = useSigninTranslations('forgot');

	return (
		<form onSubmit={handleSubmit}>
			<Card className='bg-card border-0 transition-colors duration-600'>
				<CardHeader>
					<CardTitle className='md:text-lg text-center'>
						{tForgot('title')}
					</CardTitle>
					<CardDescription className='text-center'>
						{tForgot('subtitle')}
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className='flex flex-col'>
						<div className='grid gap-2 mb-6'>
							<fields.Email />
						</div>
					</div>
				</CardContent>
				<CardFooter className='flex-col gap-3.5'>
					<Button className='w-full'>{tForgot('button')}</Button>
					<Alert
						success={isSuccess && tForgot('message')}
						error={error}
					/>
				</CardFooter>
			</Card>
		</form>
	);
};

export default ForgotPassword;
