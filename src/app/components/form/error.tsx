import { cn } from '@/lib/utils/tailwindcss';

type Props = { message: string | undefined };
export const Error = ({ message }: Props) => (
	<span
		className={cn(
			'whitespace-pre-wrap rounded text-destructive-foreground text-sm font-bold',
			!message && 'invisibile',
		)}
	>
		{message}
	</span>
);
