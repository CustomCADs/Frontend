import { Link, LinkProps } from '@tanstack/react-router';
import { cn } from '@/lib/utils';

type Props = { text: string; to: LinkProps['to'] };
const Button = ({ text, to }: Props) => (
	<Link
		to={to}
		className={cn(
			'font-bold text-foreground text-center bg-secondary px-4 md:px-12 py-3 rounded-lg', // common
			'border-primary border shadow-primary shadow-lg', // light
			'dark:shadow-background dark:shadow-lg', // dark
			'hover:opacity-60 transition duraton-200', // animation
		)}
	>
		{text}
	</Link>
);

export default Button;
