import { Home, Languages, LogIn, ShoppingCart, Store } from 'lucide-react';
import HeaderIcon from './icon';
import { TITLE } from '@/app/constants/global';

const Header = () => {
	return (
		<header className='bg-header text-header-foreground py-3'>
			<ul className='flex justify-between items-center text-lg mx-5'>
				<li className='basis-1/3 flex justify-start items-center gap-x-6'>
					<HeaderIcon Icon={Home} text='Home' />
					<HeaderIcon Icon={Store} text='Gallery' />
					<HeaderIcon Icon={ShoppingCart} text='Cart' />
				</li>
				<li className='basis-1/3 flex justify-center'>
					<h1 className='text-2xl font-extrabold'>{TITLE}</h1>
				</li>
				<li className='basis-1/3 flex justify-end items-center gap-x-6'>
					<HeaderIcon Icon={LogIn} text='Login' />
					<HeaderIcon Icon={Languages} text='Language' />
				</li>
			</ul>
		</header>
	);
};

export default Header;
