import Desktop from './desktop';
import Mobile from './mobile';

const Header = () => [
	<div key='mobile' className='block md:hidden z-50'>
		<Mobile />
	</div>,
	<div key='desktop' className='hidden md:block z-50'>
		<Desktop />
	</div>,
];

export default Header;
