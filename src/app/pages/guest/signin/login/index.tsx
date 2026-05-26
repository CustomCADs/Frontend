import { Link } from '@tanstack/react-router';
import { useSigninTranslations } from '@/app/hooks/locales/translations/pages/guest';
import { Button, card } from '@/app/components/ui';
import { Error } from '@/app/components/form/error';
import GoogleSSO from '@/app/components/sso/google';
import * as page from '@/app/utils/page';
import { useFields } from './hooks/useFields';
import ForgotPasswordDialog from './forgot/dialog';

const Login = () => {
	const { fields, error, handleSubmit } = useFields();
	const tLogin = useSigninTranslations('login');

	return (
		<div className={page.className}>
			<form onSubmit={handleSubmit} className='w-full max-w-sm'>
				<card.Root className='bg-card border-border border-2 shadow-shadow shadow-xl/100 transition-colors duration-400'>
					<card.Header>
						<card.Title className='text-center'>
							{tLogin('title')}
						</card.Title>
						<card.Description className='text-center'>
							{tLogin('subtitle')}
						</card.Description>
					</card.Header>
					<card.Content>
						<div className='flex flex-col'>
							<div className='grid gap-2 mb-6'>
								<fields.Username />
							</div>
							<div className='grid gap-2 mb-4'>
								<fields.Password />
								<ForgotPasswordDialog />
							</div>
						</div>
					</card.Content>
					<card.Footer className='flex-col gap-3.5'>
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
					</card.Footer>
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
				</card.Root>
			</form>
		</div>
	);
};

export default Login;
