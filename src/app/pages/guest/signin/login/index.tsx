import { Link } from '@tanstack/react-router';
import { axios, identitySSOUrl } from '@customcads/react-sdk';
import { Google } from '@lobehub/icons';
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

const Login = () => {
	const { fields, error, handleSubmit } = useFields();
	const tLogin = useSigninTranslations('login');

	return (
		<div className={page.className}>
			<form onSubmit={handleSubmit} className='w-full max-w-sm'>
				<Card className='bg-card border-border border-2 shadow-shadow shadow-xl/100'>
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
						<Button
							variant='outline'
							onClick={() =>
								window.location.assign(
									axios.defaults.baseURL +
										identitySSOUrl({
											provider: 'Google',
											redirectUrl: window.location.origin,
										}),
								)
							}
							className='w-full'
						>
							<Google.Color />
							<span>{tLogin('google-login')}</span>
						</Button>
						<div className='flex justify-center items-center gap-2'>
							<fields.RememberMe />
						</div>
						<span className='text-sm font-bold text-red-500 mt-2'>
							{error}
						</span>
					</CardFooter>
					<hr className='h-[2px]' />
					<div className='text-center'>
						<span className='text-sm'>
							{tLogin('register-message')}
						</span>
						<br />
						<Link to='.'>
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
