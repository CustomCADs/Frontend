import { Link } from '@tanstack/react-router';
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
import { Error } from '@/app/components/form/error';
import GoogleSSO from '@/app/components/sso/google';
import * as page from '@/app/utils/page';
import { useFields } from './hooks/useFields';

const Login = () => {
	const { fields, error, handleSubmit } = useFields();
	const tLogin = useSigninTranslations('login');

	return (
		<div className={page.className}>
			<form onSubmit={handleSubmit} className='w-full max-w-sm'>
				<Card className='bg-card border-border border-2 shadow-shadow shadow-xl/100 transition-colors duration-400'>
					<CardHeader>
						<CardTitle className='text-center'>
							{tLogin('title')}
						</CardTitle>
						<CardDescription className='text-center'>
							{tLogin('subtitle')}
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className='flex flex-col'>
							<div className='grid gap-2 mb-6'>
								<fields.Username />
							</div>
							<div className='grid gap-2 mb-4'>
								<fields.Password />
							</div>
						</div>
					</CardContent>
					<CardFooter className='flex-col gap-3.5'>
						<Button type='submit' className='w-full'>
							{tLogin('login')}
						</Button>
						<GoogleSSO
							text={tLogin('google-login')}
							className='w-full'
						/>
						<div className='flex justify-center items-center gap-2'>
							<fields.RememberMe />
						</div>
						<Error message={error} />
					</CardFooter>
					<hr className='h-0.5' />
					<div className='text-center'>
						<span className='text-sm'>
							{tLogin('register-message')}
						</span>
						<br />
						<Link to='/register'>
							<Button
								variant='link'
								className='font-bold underline text-sm'
							>
								{tLogin('register')}
							</Button>
						</Link>
					</div>
				</Card>
			</form>
		</div>
	);
};

export default Login;
