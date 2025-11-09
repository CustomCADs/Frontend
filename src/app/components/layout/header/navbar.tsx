import { Link } from '@tanstack/react-router';
import { Home, ShoppingCart, Store } from 'lucide-react';
import { useLayoutTranslations } from '@/app/hooks/locales/translations/components';
import { TITLE } from '@/app/constants/global';
import CustomIcon from '@/app/components/icon';
import Menu from './menu';
import NotificationsTab from './notifications';
import AccountMenu from './account';

const Navbar = () => {
	const tHeader = useLayoutTranslations('header');

	return (
		<header className='bg-header text-header-foreground py-3 transition-colors duration-400'>
			<ul className='flex justify-between items-center text-lg mx-5'>
				<li className='flex justify-start items-center gap-x-5'>
					<Menu />
					<CustomIcon Icon={Home} to='/' text={tHeader('home')} />
					<CustomIcon Icon={Store} to='.' text={tHeader('gallery')} />
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
					<CustomIcon Icon={ShoppingCart} to='.' />
					<NotificationsTab />
					<AccountMenu />
				</li>
			</ul>
		</header>
	);
};

export default Navbar;
