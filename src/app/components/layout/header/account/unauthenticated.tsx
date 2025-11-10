import { Fragment } from 'react';
import { LogIn, UserPen } from 'lucide-react';
import { useIsMobile } from '@/hooks/utils/useIsMobile';
import { useLayoutTranslations } from '@/app/hooks/locales/translations/components';
import CustomIcon from '@/app/components/icon';
import { SidebarMenuButton } from '@/app/components/ui/sidebar';

const Unauthenticated = () => {
	const tHeader = useLayoutTranslations('header');
	const className = 'text-lg gap-x-2 md:gap-x-1 hover:text-header-foreground';

	const isMobile = useIsMobile();
	const Wrapper = isMobile ? SidebarMenuButton : Fragment;

	return [
		<Wrapper key='0'>
			<CustomIcon
				Icon={LogIn}
				to='/login'
				text={tHeader('login')}
				className={className}
			/>
		</Wrapper>,
		<Wrapper key='1'>
			<CustomIcon
				Icon={UserPen}
				to='.'
				text={tHeader('register')}
				className={className}
			/>
		</Wrapper>,
	];
};

export default Unauthenticated;
