import { Link } from '@tanstack/react-router';
import { TITLE } from '@/app/constants/global';
import { getYear } from '@/lib/utils/time';

const FooterHeading = () => (
	<header className='flex items-center gap-x-2 text-lg font-extrabold'>
		<Link to='/'>&copy; {TITLE}</Link>
		<span>—</span>
		<span>
			{getYear.customcads_founded_at()}–{getYear.current()}
		</span>
	</header>
);

export default FooterHeading;
