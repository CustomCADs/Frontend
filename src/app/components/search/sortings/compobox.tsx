'use client';
import { useState } from 'react';
import { CheckIcon } from 'lucide-react';
import { cn } from '@/lib/utils/tailwindcss';
import Loader from '@/app/components/loading';
import * as command from '@/app/components/ui/command';
import * as popover from '@/app/components/ui/popover';

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
		<popover.Popover open={open} onOpenChange={setOpen}>
			<popover.PopoverTrigger>{props.children}</popover.PopoverTrigger>
			<popover.PopoverContent className='w-[250px] p-0 z-[100000]'>
				<command.Command className='bg-accent text-accent-foreground'>
					<command.CommandInput placeholder={props.placeholder} />
					<command.CommandList>
						<command.CommandEmpty>
							{props.empty ?? (
								<div className='flex justify-center'>
									<Loader />
								</div>
							)}
						</command.CommandEmpty>
						<command.CommandGroup>
							{options.map((option) => (
								<command.CommandItem
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
								</command.CommandItem>
							))}
						</command.CommandGroup>
					</command.CommandList>
				</command.Command>
			</popover.PopoverContent>
		</popover.Popover>
	);
};

export default SortingsCombobox;
