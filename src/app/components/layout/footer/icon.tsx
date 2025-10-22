import { Link } from '@tanstack/react-router';
import { IconType } from '@icons-pack/react-simple-icons';

type FooterProps = { link: string; Icon: IconType };
const FooterIcon = ({ link, Icon }: FooterProps) => {
	return (
		<Link
			to={link}
			target='new'
			className='text-primary-foreground hover:text-muted-foreground ease-in duration-200'
		>
			<Icon />
		</Link>
	);
};

export default FooterIcon;
