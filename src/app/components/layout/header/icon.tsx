import { Link, LinkProps } from '@tanstack/react-router';
import { IconProp } from '@/types/icon';

type HeaderIconProps = LinkProps & { text: string; Icon: IconProp };
const HeaderIcon = ({ text, Icon, ...props }: HeaderIconProps) => {
	const className =
		'flex justify-center items-center gap-1 cursor-pointer ease-in duration-200 hover:text-muted-foreground ';

	return props.to ? (
		<Link {...props} className={className}>
			<Icon />
			{text}
		</Link>
	) : (
		<span className={className}>
			<Icon />
			{text}
		</span>
	);
};

export default HeaderIcon;
