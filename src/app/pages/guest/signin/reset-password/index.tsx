import { cn } from '@/lib/utils/tailwindcss';
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
import * as page from '@/app/utils/page';
import { useFields } from './hooks/useFields';

const ForgotPassword = () => {
	const { fields, error, isSuccess, handleSubmit } = useFields();
	const tForgot = useSigninTranslations('reset');

	return (
		<div className={cn(page.className, 'animate-fade-in delay-400')}>
			<form onSubmit={handleSubmit} className='min-w-1/3'>
				<Card className='py-15 px-8 bg-card border-border border-2 shadow-shadow shadow-xl/100 transition-colors duration-600'>
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
								<fields.Password />
							</div>
						</div>
					</CardContent>
					<CardFooter className='flex flex-col gap-3.5'>
						<Button className='w-full'>{tForgot('button')}</Button>
						<Alert
							success={isSuccess && tForgot('message')}
							error={error}
						/>
					</CardFooter>
				</Card>
			</form>
		</div>
	);
};

export default ForgotPassword;
