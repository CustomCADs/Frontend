import Navbar from './navbar';
import Mobile from './mobile';

const Header = () => [
	<div key='mobile' className='block md:hidden'>
		<Mobile />
	</div>,
	<div key='navbar' className='hidden md:block'>
		<Navbar />
	</div>,
];

export default Header;
