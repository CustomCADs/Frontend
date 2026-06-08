import { Link } from '@tanstack/react-router';
import { TITLE } from '@/app/constants/global';
import NotificationsTab from '@/app/components/layout/header/notifications';
import CartIndicator from '@/app/components/layout/header/cart';
import { Inset, Trigger } from '@/app/components/ui/sidebar';
import Preferences from '../preferences';

const Header = () => (
	<Inset>
		<header className='flex bg-header text-header-foreground sticky top-0 h-14 shrink-0 items-center gap-2 py-3 transition-colors duration-400'>
			<ul className='h-full w-full flex justify-between items-center px-6'>
				<li className='flex gap-x-4 animate-fade-in duration-200 delay-400'>
					<Trigger />
					<Preferences />
				</li>
				<li className='absolute left-1/2 transform -translate-x-1/2 text-2xl sm:text-2xl text-center font-extrabold animate-fade-in duration-200 delay-200'>
					<Link to='/'>{TITLE}</Link>
				</li>
				<li className='flex gap-x-4 animate-fade-in duration-200 delay-400'>
					<NotificationsTab />
					<CartIndicator />
				</li>
			</ul>
		</header>
	</Inset>
);

export default Header;
