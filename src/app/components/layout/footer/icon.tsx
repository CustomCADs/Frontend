import { Link } from '@tanstack/react-router';
import { IconType } from '@icons-pack/react-simple-icons';

type Props = { link: string; Icon: IconType };
const FooterIcon = ({ link, Icon }: Props) => {
	return (
		<Link
			to={link}
			target='new'
			className='text-footer-primary-foreground hover:text-muted-foreground ease-in duration-200'
		>
			<Icon />
		</Link>
	);
};

export default FooterIcon;
