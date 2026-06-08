import { ScrollArea as Primitive } from 'radix-ui';
import { cn } from '@/lib/utils';

const ScrollBar = ({
	className,
	orientation = 'vertical',
	...props
}: React.ComponentProps<typeof Primitive.ScrollAreaScrollbar>) => (
	<Primitive.ScrollAreaScrollbar
		data-slot='scroll-area-scrollbar'
		orientation={orientation}
		className={cn(
			'flex touch-none p-px transition-colors select-none',
			orientation === 'vertical' &&
				'h-full w-2.5 border-l border-l-transparent',
			orientation === 'horizontal' &&
				'h-2.5 flex-col border-t border-t-transparent',
			className,
		)}
		{...props}
	>
		<Primitive.ScrollAreaThumb
			data-slot='scroll-area-thumb'
			className='bg-border relative flex-1 rounded-full'
		/>
	</Primitive.ScrollAreaScrollbar>
);

const ScrollArea = ({
	className,
	children,
	viewportRef,
	...props
}: React.ComponentProps<typeof Primitive.Root> & {
	viewportRef?: React.Ref<HTMLDivElement>;
}) => (
	<Primitive.Root
		data-slot='scroll-area'
		className={cn('relative', className)}
		{...props}
	>
		<Primitive.Viewport
			data-slot='scroll-area-viewport'
			ref={viewportRef}
			className='focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1'
		>
			{children}
		</Primitive.Viewport>
		<ScrollBar />
		<Primitive.Corner />
	</Primitive.Root>
);

export { ScrollArea as Area, ScrollBar as Bar };
