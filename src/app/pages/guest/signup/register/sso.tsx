import GoogleSSO from '@/app/components/sso/google';
import { useSignupTranslations } from '@/app/hooks/locales/translations/pages/guest';
import { Children } from '@/types/react';

type Props = Children & { role: string; show?: boolean };
const SSO = ({ children, role, show }: Props) => {
	const tRegister = useSignupTranslations('register');

	return (
		<div className='md:min-h-75 w-full space-y-10'>
			<div className='flex flex-col items-center'>{children}</div>
			{show && (
				<div className='flex justify-center gap-x-10'>
					<GoogleSSO
						text={tRegister('google-register')}
						role={role}
					/>
				</div>
			)}
		</div>
	);
};

export default SSO;
