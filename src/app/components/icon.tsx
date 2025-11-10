import { Link, LinkProps } from '@tanstack/react-router';
import { type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils/tailwindcss';

type Props = LinkProps & {
	Icon: LucideIcon;
	text?: string;
	clickable?: boolean;
	onClick?: VoidFunction;
	size?: number;
	className?: string;
};
const CustomIcon = ({
	Icon,
	text,
	clickable = true,
	size,
	...props
}: Props) => {
	const className = cn(
		'flex justify-center items-center gap-1 ease-in duration-200',
		clickable && 'cursor-pointer hover:text-muted-foreground',
		props.className,
	);
	const Wrapper = props.to ? Link : 'span';

	return (
		<Wrapper {...props} className={className}>
			<Icon size={size} />
			{text}
		</Wrapper>
	);
};

export default CustomIcon;
