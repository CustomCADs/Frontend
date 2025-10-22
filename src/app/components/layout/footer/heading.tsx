import { Link } from '@tanstack/react-router';
import { TITLE } from '@/app/constants/global';

const date = `2023-${new Date().getFullYear()}`;
const FooterHeading = () => (
	<header className='text-lg font-extrabold'>
		<span>&copy; </span>
		<Link to='.'>{TITLE}</Link>
		<span> - {date}</span>
	</header>
);

export default FooterHeading;
