import { Link } from '@tanstack/react-router';
import { Home, Settings2, ShoppingCart, Store, UserCircle } from 'lucide-react';
import { useLayoutTranslations } from '@/app/hooks/locales/translations/components';
import { useAuthStore } from '@/app/hooks/stores/useAuthStore';
import { TITLE } from '@/app/constants/global';
import CustomIcon from '@/app/components/icon';
import Menu from './menu';
import NotificationsTab from './notifications';
import AccountMenu from './account';

const Navbar = () => {
	const { is } = useAuthStore();
	const tHeader = useLayoutTranslations('header');

	return (
		<header className='bg-header text-header-foreground py-3 transition-colors duration-400'>
			<ul className='flex justify-between items-center text-lg mx-5'>
				<li className='flex justify-start items-center gap-x-5'>
					<Menu />
					<CustomIcon Icon={Home} to='/' text={tHeader('home')} />
					<CustomIcon Icon={Store} to='.' text={tHeader('gallery')} />
					<CustomIcon
						Icon={ShoppingCart}
						to='.'
						text={tHeader('cart')}
					/>
				</li>
				<li className='flex justify-center'>
					<Link
						to='/'
						className='leading-none text-2xl font-extrabold'
					>
						{TITLE}
					</Link>
				</li>
				<li className='flex justify-end items-center gap-x-6'>
					<NotificationsTab />
					<CustomIcon
						Icon={Settings2}
						to='.'
						text={is.guest ? tHeader('settings') : undefined}
					/>
					{!is.guest && <CustomIcon Icon={UserCircle} to='.' />}
					<AccountMenu />
				</li>
			</ul>
		</header>
	);
};

export default Navbar;
