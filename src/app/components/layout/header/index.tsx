import Navbar from './navbar';
import Sidebar from './sidebar';
import { useIsMobile } from '@/hooks/utils/useIsMobile';

const Header = () => {
	const isMobile = useIsMobile();

	if (isMobile === undefined) {
		return (
			<>
				<div className='block md:hidden'>
					<Sidebar />
				</div>
				<div className='hidden md:block'>
					<Navbar />
				</div>
			</>
		);
	}

	return isMobile ? <Sidebar /> : <Navbar />;
};

export default Header;
