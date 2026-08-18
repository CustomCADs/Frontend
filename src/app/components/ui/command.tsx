import { Command as Primitive } from 'cmdk';
import { SearchIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { dialog } from '@/app/components/ui';

const Command = ({
	className,
	...props
}: React.ComponentProps<typeof Primitive>) => (
	<Primitive
		data-slot='command'
		className={cn(
			'bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md',
			className,
		)}
		{...props}
	/>
);

const CommandDialog = ({
	title = 'Command Palette',
	description = 'Search for a command to run...',
	children,
	className,
	close,
	...props
}: React.ComponentProps<typeof dialog.Root> & {
	title?: string;
	description?: string;
	className?: string;
	close: React.ComponentProps<typeof dialog.Content>['close'];
}) => (
	<dialog.Root {...props}>
		<dialog.Header className='sr-only'>
			<dialog.Title>{title}</dialog.Title>
			<dialog.Description>{description}</dialog.Description>
		</dialog.Header>
		<dialog.Content
			className={cn('overflow-hidden p-0', className)}
			close={close}
		>
			<Command className='**:[[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:font-medium **:[[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 **:[[cmdk-input]]:h-12 **:[[cmdk-item]]:px-2 **:[[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5'>
				{children}
			</Command>
		</dialog.Content>
	</dialog.Root>
);

const CommandInput = ({
	className,
	...props
}: React.ComponentProps<typeof Primitive.Input>) => (
	<div
		data-slot='command-input-wrapper'
		className='flex h-9 items-center gap-2 border-b px-3'
	>
		<SearchIcon className='size-4 shrink-0 opacity-50' />
		<Primitive.Input
			data-slot='command-input'
			className={cn(
				'placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50',
				className,
			)}
			{...props}
		/>
	</div>
);

const CommandList = ({
	className,
	...props
}: React.ComponentProps<typeof Primitive.List>) => (
	<Primitive.List
		data-slot='command-list'
		className={cn(
			'max-h-75 scroll-py-1 overflow-x-hidden overflow-y-auto',
			className,
		)}
		{...props}
	/>
);

const CommandEmpty = ({
	...props
}: React.ComponentProps<typeof Primitive.Empty>) => (
	<Primitive.Empty
		data-slot='command-empty'
		className='py-6 text-center text-sm'
		{...props}
	/>
);

const CommandGroup = ({
	className,
	...props
}: React.ComponentProps<typeof Primitive.Group>) => (
	<Primitive.Group
		data-slot='command-group'
		className={cn(
			'text-foreground **:[[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:font-medium',
			className,
		)}
		{...props}
	/>
);

const CommandSeparator = ({
	className,
	...props
}: React.ComponentProps<typeof Primitive.Separator>) => (
	<Primitive.Separator
		data-slot='command-separator'
		className={cn('bg-border -mx-1 h-px', className)}
		{...props}
	/>
);

const CommandItem = ({
	className,
	...props
}: React.ComponentProps<typeof Primitive.Item>) => (
	<Primitive.Item
		data-slot='command-item'
		className={cn(
			"[&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
			className,
		)}
		{...props}
	/>
);

const CommandShortcut = ({
	className,
	...props
}: React.ComponentProps<'span'>) => (
	<span
		data-slot='command-shortcut'
		className={cn(
			'text-muted-foreground ml-auto text-xs tracking-widest',
			className,
		)}
		{...props}
	/>
);

export {
	Command as Root,
	CommandDialog as Dialog,
	CommandInput as Input,
	CommandList as List,
	CommandEmpty as Empty,
	CommandGroup as Group,
	CommandItem as Item,
	CommandShortcut as Shortcut,
	CommandSeparator as Separator,
};
