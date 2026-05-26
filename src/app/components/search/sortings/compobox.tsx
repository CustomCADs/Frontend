import { useState } from 'react';
import { CheckIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import Loader from '@/app/components/loading';
import { command, popover } from '@/app/components/ui';

type Value = string;
type Props = {
	current?: Value;
	options: Array<{ value: Value; label: string }>;
	placeholder?: string;
	children?: React.ReactNode;
	empty?: string;
	onSelect?: (curr?: Value) => void;
};
const SortingsCombobox = ({ current, options, ...props }: Props) => {
	const [open, setOpen] = useState(false);

	return (
		<popover.Root open={open} onOpenChange={setOpen}>
			<popover.Trigger>{props.children}</popover.Trigger>
			<popover.Content className='w-62.5 p-0 z-100000'>
				<command.Root className='bg-accent text-accent-foreground'>
					<command.Input placeholder={props.placeholder} />
					<command.List>
						<command.Empty>
							{props.empty ?? (
								<div className='flex justify-center'>
									<Loader />
								</div>
							)}
						</command.Empty>
						<command.Group>
							{options.map((option) => (
								<command.Item
									key={option.value}
									value={option.label}
									onSelect={(label) => {
										setOpen(false);
										const value = options.find(
											(x) => x.label === label,
										)?.value;
										props.onSelect?.(value);
									}}
									className={cn(
										'bg-accent flex justify-between items-center',
										current === option.value
											? 'brightness-90'
											: 'hover:brightness-80',
									)}
								>
									<div className='flex items-center'>
										<CheckIcon
											className={cn(
												'mr-1 h-4 w-4',
												current === option.value
													? 'opacity-100'
													: 'opacity-0',
											)}
										/>
										<span className='wrap-anywhere'>
											{option.label}
										</span>
									</div>
								</command.Item>
							))}
						</command.Group>
					</command.List>
				</command.Root>
			</popover.Content>
		</popover.Root>
	);
};

export default SortingsCombobox;
