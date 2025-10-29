import { Home, LogIn, ShoppingCart, Store } from 'lucide-react';
import { useLayoutTranslations } from '@/app/hooks/locales/translations/components';
import { TITLE } from '@/app/constants/global';
import HeaderIcon from './icon';
import LanguageMenu from './language';
import ThemeToggle from './theme';

const Header = () => {
	const tHeader = useLayoutTranslations('header');

	return (
		<header className='bg-header text-header-foreground py-3'>
			<ul className='flex justify-between items-center text-lg mx-5'>
				<li className='basis-1/3 flex justify-start items-center gap-x-6'>
					<HeaderIcon Icon={Home} to='/' text={tHeader('home')} />
					<HeaderIcon Icon={Store} to='.' text={tHeader('gallery')} />
					<HeaderIcon
						Icon={ShoppingCart}
						to='.'
						text={tHeader('cart')}
					/>
				</li>
				<li className='basis-1/3 flex justify-center ease-in duration-200 hover:text-primary-foreground'>
					<h1 className='text-2xl font-extrabold'>{TITLE}</h1>
				</li>
				<li className='basis-1/3 flex justify-end items-center gap-x-6'>
					<HeaderIcon Icon={LogIn} to='.' text={tHeader('login')} />
					<LanguageMenu />
					<ThemeToggle />
				</li>
			</ul>
		</header>
	);
};

export default Header;
