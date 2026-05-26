import { Link } from '@tanstack/react-router';
import { TITLE } from '@/app/constants/global';
import { time } from '@/lib/utils';

const FooterHeading = () => (
	<header className='flex items-center gap-x-2 text-lg font-extrabold'>
		<Link to='/'>&copy; {TITLE}</Link>
		<span>—</span>
		<span>
			{time.getYear.customcads_founded_at()}–{time.getYear.current()}
		</span>
	</header>
);

export default FooterHeading;
