import { Children } from '@/types/react';
import { useThemeSync } from '@/app/hooks/stores/useThemeSync';
import { useAuthSync } from '@/app/hooks/stores/useAuthSync';
import { useLocaleSync } from '@/app/hooks/stores/useLocaleSync';
import { useCartSync } from '@/app/hooks/stores/useCartSync';
import { useRealTime } from '@/app/hooks/hubs/useRealTime';
import { Toaster } from '../ui/sonner';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }: Children) => {
	useThemeSync();
	useAuthSync();
	useLocaleSync();
	useCartSync();
	useRealTime();

	return (
		<div className='flex flex-col bg-background transition-colors duration-400'>
			<div className='flex flex-col min-h-screen'>
				<Header />
				<main className='basis-full grow self-stretch flex flex-col'>
					{children}
					<Toaster />
				</main>
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
