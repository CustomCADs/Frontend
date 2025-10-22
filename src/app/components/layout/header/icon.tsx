import { Link, LinkProps } from '@tanstack/react-router';
import { IconProp } from '@/types/icon';

type HeaderIconProps = LinkProps & { text: string; Icon: IconProp };
const HeaderIcon = ({ text, Icon, ...props }: HeaderIconProps) => {
	return (
		<Link
			{...props}
			className='flex justify-center items-center gap-1 hover:text-muted-foreground ease-in duration-200'
		>
			<Icon />
			{text}
		</Link>
	);
};

export default HeaderIcon;
