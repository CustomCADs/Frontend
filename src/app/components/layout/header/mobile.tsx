import { Link } from '@tanstack/react-router';
import { Home, Luggage, Store } from 'lucide-react';
import { TITLE } from '@/app/constants/global';
import { sidebar } from '@/app/components/ui';
import CartIndicator from './cart';
import NotificationsTab from './notifications';
import Preferences from './preferences';
import * as navigation from './sidebar';

const Mobile = () => (
	<sidebar.Provider>
		<sidebar.Inset>
			<header className='flex bg-header text-header-foreground sticky top-0 h-14 shrink-0 items-center gap-2 py-3 transition-colors duration-400'>
				<ul className='h-full w-full flex justify-between items-center px-6'>
					<li className='flex gap-x-4 animate-fade-in duration-200 delay-400'>
						<sidebar.Trigger />
						<CartIndicator />
					</li>
					<li className='absolute left-1/2 transform -translate-x-1/2 text-2xl sm:text-2xl text-center font-extrabold animate-fade-in duration-200 delay-200'>
						<Link to='/'>{TITLE}</Link>
					</li>
					<li className='flex gap-x-4 animate-fade-in duration-200 delay-400'>
						<NotificationsTab />
						<Preferences />
					</li>
				</ul>
			</header>
		</sidebar.Inset>
		<sidebar.Root className='border-r-0'>
			<sidebar.Header>
				<section className='flex flex-col items-center pb-10'>
					<img src='/logo.png' className='w-30 h-30' />
					<span className='text-2xl font-extrabold'>{TITLE}</span>
				</section>
				<navigation.Main
					items={[
						{ name: 'home', url: '/', icon: Home },
						{ name: 'gallery', url: '/gallery', icon: Store },
						{ name: 'your-cads', url: '.', icon: Luggage },
					]}
				/>
			</sidebar.Header>
			<sidebar.Content>
				<navigation.Secondary className='mt-auto' />
			</sidebar.Content>
			<sidebar.Rail />
		</sidebar.Root>
	</sidebar.Provider>
);

export default Mobile;
