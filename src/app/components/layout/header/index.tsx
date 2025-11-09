import Navbar from './navbar';
import Sidebar from './sidebar';
import { useIsMobile } from '@/hooks/utils/useIsMobile';

const Header = () => {
	const isMobile = useIsMobile();

	return isMobile ? <Sidebar /> : <Navbar />;
};

export default Header;
