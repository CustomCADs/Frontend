import { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<div className='flex flex-col min-h-screen bg-background'>
			<Header />
			<main className='basis-full grow self-stretch'>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
