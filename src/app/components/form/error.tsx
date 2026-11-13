import { cn } from '@/lib/utils';
import * as form from '@/lib/utils/tooling/form';

type Props = { message: Error | string | undefined };
export const Error = ({ message }: Props) => (
	<span
		className={cn(
			'whitespace-pre-wrap rounded text-destructive-foreground text-sm font-bold',
			!message && 'invisibile',
		)}
	>
		{typeof message === 'string' ? message : form.extractError(message)}
	</span>
);
