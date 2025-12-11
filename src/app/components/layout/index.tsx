import { Children } from '@/types/react';
import { useThemeSync } from '@/app/hooks/stores/useThemeSync';
import { useAuthSync } from '@/app/hooks/stores/useAuthSync';
import { useLanguagesSync } from '@/app/hooks/stores/useLanguagesSync';
import { useCartSync } from '@/app/hooks/stores/useCartSync';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }: Children) => {
	useThemeSync();
	useAuthSync();
	useLanguagesSync();
	useCartSync();

	return (
		<div className='flex flex-col bg-background transition-colors duration-400'>
			<div className='flex flex-col min-h-screen'>
				<Header />
				<main className='basis-full grow self-stretch flex flex-col'>
					{children}
				</main>
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
