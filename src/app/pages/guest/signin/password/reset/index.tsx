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
import * as page from '@/app/utils/page';
import { useFields } from './hooks/useFields';

const ForgotPassword = () => {
	const { fields, error, isSubmitted, handleSubmit } = useFields();
	const tForgot = useSigninTranslations('reset');

	return (
		<div className={cn(page.className, 'animate-fade-in delay-400')}>
			<form onSubmit={handleSubmit}>
				<Card className='bg-card border-border border-2 shadow-shadow shadow-xl/100 transition-colors duration-600'>
					<CardHeader>
						<CardTitle className='text-center'>
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
					<CardFooter className='flex-col gap-3.5'>
						{error && (
							<span className='text-sm font-bold text-destructive mt-2'>
								{error}
							</span>
						)}
						<Button className='w-full'>{tForgot('button')}</Button>
						{isSubmitted && !error && (
							<span className='text-lg font-extrabold mt-2'>
								{tForgot('message')}
							</span>
						)}
					</CardFooter>
				</Card>
			</form>
		</div>
	);
};

export default ForgotPassword;
