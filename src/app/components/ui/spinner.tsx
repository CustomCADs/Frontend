import { Loader2Icon, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const Spinner = ({ className, ...props }: React.ComponentProps<LucideIcon>) => (
	<Loader2Icon
		role='status'
		aria-label='Loading'
		className={cn('size-4 animate-spin', className)}
		{...props}
	/>
);

export { Spinner };
