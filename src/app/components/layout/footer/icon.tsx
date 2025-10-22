import { Link } from '@tanstack/react-router';
import { IconType } from '@icons-pack/react-simple-icons';

type FooterProps = { link: string; Icon: IconType };
const FooterIcon = ({ link, Icon }: FooterProps) => {
	return (
		<Link to={link}>
			<Icon />
		</Link>
	);
};

export default FooterIcon;
