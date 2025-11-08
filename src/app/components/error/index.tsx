import { Link } from '@tanstack/react-router';
import { AppErrorFields } from '@/types/errors';
import { cn } from '@/lib/utils/tailwindcss';
import { useErrorsTranslations } from '@/app/hooks/locales/translations/common';
import * as page from '@/app/utils/page';

type ErrorPageProps = {
	status: 400 | 401 | 403 | 404 | null;
	error?: AppErrorFields;
};
const ErrorPage = ({ status, error }: ErrorPageProps) => {
	const tError = useErrorsTranslations();
	const { title, message, tip } = error ?? {
		title: tError(`${status ?? 'default'}_title`),
		message: tError(`${status ?? 'default'}_message`),
		tip: tError(`${status ?? 'default'}_tip`),
	};

	return (
		<div className={cn(page.className, 'gap-8')}>
			<h1 className='text-6xl font-bold text-secondary-foreground'>
				{title}
			</h1>
			<h3 className='text-2xl text-secondary-foreground'>{message}</h3>
			<p className='text-md text-secondary-foreground'>{tip}</p>

			{status === 401 && (
				<div className='text-lg'>
					<Link
						to='.'
						className='text-accent-foreground font-bold transition-colors duration-200'
					>
						{tError('login_link')}
					</Link>
				</div>
			)}

			<div className='text-lg'>
				<Link
					to='/'
					className='text-accent-foreground font-bold transition-colors duration-200'
				>
					{tError('contact_support_link')}
				</Link>
			</div>
		</div>
	);
};

export default ErrorPage;
