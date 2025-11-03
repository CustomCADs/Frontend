import { createFileRoute, Link } from '@tanstack/react-router';
import { Google } from '@lobehub/icons';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Label } from '@/app/components/ui/label';
import { Input } from '@/app/components/ui/input';

const Login = () => {
	return (
		<div className='flex flex-col items-center mt-20 mb-10'>
			<Card className='w-full max-w-sm bg-card border-border border-2 shadow-shadow shadow-xl/100'>
				<CardHeader>
					<CardTitle className='text-center'>
						Login to your account
					</CardTitle>
					<CardDescription className='text-center'>
						Login via your Username or Google account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form>
						<div className='flex flex-col gap-6'>
							<div className='grid gap-2'>
								<Label htmlFor='email'>Username</Label>
								<Input id='username' type='username' required />
							</div>
							<div className='grid gap-2'>
								<div className='flex items-center'>
									<Label htmlFor='password'>Password</Label>
								</div>
								<Input id='password' type='password' required />
								<Link
									to='.'
									className='ml-auto inline-block text-sm underline-offset-4 hover:underline'
								>
									Forgot your password?
								</Link>
							</div>
						</div>
					</form>
				</CardContent>
				<CardFooter className='flex-col gap-3.5'>
					<Button type='submit' className='w-full'>
						Login
					</Button>
					<Button variant='outline' className='w-full'>
						<Google.Color />
						<span>Login with Google</span>
					</Button>
				</CardFooter>
				<hr className='h-[2px]' />
				<div className='text-center'>
					<span className='text-sm'>Don't have an account?</span>
					<br />
					<Link to='.'>
						<Button
							variant='link'
							className='font-bold underline text-sm'
						>
							Sign Up
						</Button>
					</Link>
				</div>
			</Card>
		</div>
	);
};

export const Route = createFileRoute('/_guest/login')({
	component: Login,
});
