import { Link, LinkProps } from '@tanstack/react-router';
import { IconProp } from '@/types/icon';
import { cn } from '@/lib/utils/tailwindcss';

type Props = LinkProps & {
	Icon: IconProp;
	text?: string;
	clickable?: boolean;
	onClick?: VoidFunction;
};
const CustomIcon = ({ Icon, text, clickable = true, ...props }: Props) => {
	const className = cn(
		'flex justify-center items-center gap-1 ease-in duration-200',
		clickable && 'cursor-pointer hover:text-muted-foreground',
	);

	return props.to ? (
		<Link {...props} className={className}>
			<Icon />
			{text}
		</Link>
	) : (
		<span {...props} className={className}>
			<Icon />
			{text}
		</span>
	);
};

export default CustomIcon;
