import { LogIn, UserPen } from 'lucide-react';
import { useLayoutTranslations } from '@/app/hooks/locales/translations/components';
import CustomIcon from '@/app/components/icon';
import { MenuButton } from '@/app/components/ui/sidebar';

const Unauthenticated = () => {
	const tHeader = useLayoutTranslations('header');

	return [
		<MenuButton key='login'>
			<CustomIcon
				Icon={LogIn}
				to='/login'
				text={tHeader('login')}
				className='text-lg gap-x-2'
			/>
		</MenuButton>,
		<MenuButton key='register'>
			<CustomIcon
				Icon={UserPen}
				to='/register'
				text={tHeader('register')}
				className='text-lg gap-x-2'
			/>
		</MenuButton>,
	];
};

export default Unauthenticated;
