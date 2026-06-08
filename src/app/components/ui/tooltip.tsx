import { Tooltip as Primitive } from 'radix-ui';
import { cn } from '@/lib/utils';

const TooltipProvider = ({
	delayDuration = 0,
	...props
}: React.ComponentProps<typeof Primitive.Provider>) => (
	<Primitive.Provider
		data-slot='tooltip-provider'
		delayDuration={delayDuration}
		{...props}
	/>
);

const Tooltip = ({ ...props }: React.ComponentProps<typeof Primitive.Root>) => (
	<TooltipProvider>
		<Primitive.Root data-slot='tooltip' {...props} />
	</TooltipProvider>
);

const TooltipTrigger = ({
	...props
}: React.ComponentProps<typeof Primitive.Trigger>) => (
	<Primitive.Trigger data-slot='tooltip-trigger' {...props} />
);

const TooltipContent = ({
	className,
	sideOffset = 0,
	children,
	...props
}: React.ComponentProps<typeof Primitive.Content>) => (
	<Primitive.Portal>
		<Primitive.Content
			data-slot='tooltip-content'
			sideOffset={sideOffset}
			className={cn(
				'bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance',
				className,
			)}
			{...props}
		>
			{children}
			<Primitive.Arrow className='bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%-2px)] rotate-45 rounded-[2px]' />
		</Primitive.Content>
	</Primitive.Portal>
);

export {
	Tooltip as Root,
	TooltipTrigger as Trigger,
	TooltipContent as Content,
	TooltipProvider as Provider,
};
