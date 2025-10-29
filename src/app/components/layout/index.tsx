import { Children } from '@/types/react';
import { useThemeStore } from '@/app/hooks/stores/useThemeStore';
import { useLanguagesSync } from '@/app/hooks/stores/useLanguagesSync';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }: Children) => {
	useThemeStore({ render: true });
	useLanguagesSync();

	return (
		<div className='flex flex-col min-h-screen bg-background transition-colors duration-400'>
			<Header />
			<main className='basis-full grow self-stretch'>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
