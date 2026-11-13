import { Link } from '@tanstack/react-router';
import { Home, Luggage, Store } from 'lucide-react';
import { useLayoutTranslations } from '@/app/hooks/locales/translations/components';
import { useAuthStore } from '@/app/hooks/stores/useAuthStore';
import { TITLE } from '@/app/constants/global';
import CustomIcon from '@/app/components/icon';
import { Separator } from '@/app/components/ui';
import NotificationsTab from './notifications';
import Preferences from './preferences';
import AccountMenu from './account';
import CartIndicator from './cart';

const Desktop = () => {
	const { is } = useAuthStore();
	const tHeader = useLayoutTranslations('header');

	return (
		<header className='bg-header text-header-foreground py-3 transition-colors duration-400'>
			<ul className='flex justify-between items-center text-lg mx-5'>
				<li className='flex justify-start items-center gap-x-5 animate-fade-in duration-200 delay-400'>
					<CustomIcon Icon={Home} to='/' />
					<Separator orientation='vertical' className='min-h-7' />
					<CustomIcon
						Icon={Store}
						to='/gallery'
						text={tHeader('gallery')}
					/>
					<CartIndicator text={tHeader('cart')} />
					<CustomIcon
						Icon={Luggage}
						to='.'
						text={tHeader('your-cads')}
					/>
				</li>
				<li className='flex justify-center animate-fade-in duration-200 delay-200'>
					<Link
						to='/'
						className='leading-none text-2xl font-extrabold'
					>
						{TITLE}
					</Link>
				</li>
				<li className='flex justify-end items-center gap-x-6 animate-fade-in duration-200 delay-400'>
					<NotificationsTab />
					{is.guest ? (
						<Preferences text={tHeader('preferences')} />
					) : (
						<Preferences />
					)}
					<AccountMenu />
				</li>
			</ul>
		</header>
	);
};

export default Desktop;
