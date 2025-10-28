import { Children } from '@/types/react';
import { useThemeStore } from '@/app/hooks/stores/useThemeStore';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }: Children) => {
	useThemeStore({ render: true });

	return (
		<div className='flex flex-col min-h-screen bg-background transition-colors duration-400'>
			<Header />
			<main className='basis-full grow self-stretch'>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
