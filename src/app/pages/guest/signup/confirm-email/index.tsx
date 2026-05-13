import { getRouteApi } from '@tanstack/react-router';
import { useSignupTranslations } from '@/app/hooks/locales/translations/pages/guest';
import * as page from '@/app/utils/page';
import { useVerifyEmail } from './hooks/useVerifyEmail';
import { cn } from '@/lib/utils/tailwindcss';
import Result from './result';

const Route = getRouteApi('/_guest/confirm-email');

const ConfirmEmail = () => {
	const search = Route.useSearch();
	const navigate = Route.useNavigate();

	const { isSuccess, error } = useVerifyEmail(search);
	const tEmail = useSignupTranslations('email');

	return (
		<div className={cn(page.className, 'gap-y-20')}>
			<p className='text-4xl text-center font-bold'>
				{tEmail('title')}, {search.username}...
			</p>
			{isSuccess && (
				<Result
					label={tEmail('success')}
					message={tEmail('success-msg')}
					result='positive'
					onClick={() => navigate({ to: '/' })}
				/>
			)}
			{error && (
				<Result
					label={tEmail('error')}
					message={error}
					result='negative'
				/>
			)}
		</div>
	);
};

export default ConfirmEmail;
