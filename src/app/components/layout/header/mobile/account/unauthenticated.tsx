import { LogIn, UserPen } from 'lucide-react';
import { useLayoutTranslations } from '@/app/hooks/locales/translations/components';
import CustomIcon from '@/app/components/icon';
import { SidebarMenuButton } from '@/app/components/ui/sidebar';

const Unauthenticated = () => {
	const tHeader = useLayoutTranslations('header');

	return [
		<SidebarMenuButton key='login'>
			<CustomIcon
				Icon={LogIn}
				to='/login'
				text={tHeader('login')}
				className='text-lg gap-x-2'
			/>
		</SidebarMenuButton>,
		<SidebarMenuButton key='register'>
			<CustomIcon
				Icon={UserPen}
				to='.'
				text={tHeader('register')}
				className='text-lg gap-x-2'
			/>
		</SidebarMenuButton>,
	];
};

export default Unauthenticated;
