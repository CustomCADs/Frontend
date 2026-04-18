import { LogIn, UserPen } from 'lucide-react';
import { useLayoutTranslations } from '@/app/hooks/locales/translations/components';
import CustomIcon from '@/app/components/icon';

const Unauthenticated = () => {
	const tHeader = useLayoutTranslations('header');

	return [
		<CustomIcon
			key='login'
			Icon={LogIn}
			to='/login'
			text={tHeader('login')}
			className={'text-lg hover:text-header-foreground'}
		/>,
		<CustomIcon
			key='register'
			Icon={UserPen}
			to='/register'
			text={tHeader('register')}
			className={'text-lg hover:text-header-foreground'}
		/>,
	];
};

export default Unauthenticated;
