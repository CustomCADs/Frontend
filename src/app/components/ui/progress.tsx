import { Progress as Primitive } from 'radix-ui';
import { cn } from '@/lib/utils';

const Progress = ({
	className,
	value,
	...props
}: React.ComponentProps<typeof Primitive.Root>) => (
	<Primitive.Root
		data-slot='progress'
		className={cn(
			'bg-primary/20 relative h-2 w-full overflow-hidden rounded-full',
			className,
		)}
		{...props}
	>
		<Primitive.Indicator
			data-slot='progress-indicator'
			className='bg-primary h-full w-full flex-1 transition-all'
			style={{ transform: `translateX(-${100 - (value ?? 0)}%)` }}
		/>
	</Primitive.Root>
);

export { Progress };
