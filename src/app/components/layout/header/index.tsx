import Navbar from './navbar';
import Mobile from './mobile';

const Header = () => [
	<div key='mobile' className='block md:hidden z-50'>
		<Mobile />
	</div>,
	<div key='navbar' className='hidden md:block z-50'>
		<Navbar />
	</div>,
];

export default Header;
