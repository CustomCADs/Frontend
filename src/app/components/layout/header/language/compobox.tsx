'use client';
import { useState } from 'react';
import { CheckIcon } from 'lucide-react';
import { Language } from '@/types/locale';
import { cn } from '@/lib/utils/tailwindcss';
import * as command from '@/app/components/ui/command';
import * as popover from '@/app/components/ui/popover';

type Props = {
	current: Language;
	options: Array<{ value: Language; label: string; flag: string }>;
	trigger?: React.ReactNode;
	empty?: string;
	onSelect?: (curr: Language) => void;
};
const LanguageCombobox = ({ current, options, ...props }: Props) => {
	const [open, setOpen] = useState(false);

	return (
		<popover.Popover open={open} onOpenChange={setOpen}>
			<popover.PopoverTrigger>{props.trigger}</popover.PopoverTrigger>
			<popover.PopoverContent className='w-[200px] p-0'>
				<command.Command className='bg-header-accent text-header-accent-foreground'>
					<command.CommandInput placeholder='Search option...' />
					<command.CommandList>
						<command.CommandEmpty>
							{props.empty}
						</command.CommandEmpty>
						<command.CommandGroup>
							{options.map((option) => (
								<div
									key={option.value}
									className='flex justify-between items-center px-2'
								>
									<command.CommandItem
										value={option.label}
										onSelect={(label) => {
											setOpen(false);
											const value = options.find(
												(x) => x.label === label,
											)?.value;
											props.onSelect?.(
												value ?? (label as Language),
											);
										}}
									>
										<CheckIcon
											className={cn(
												'mr-1 h-4 w-4',
												current === option.value
													? 'opacity-100'
													: 'opacity-0',
											)}
										/>
										{option.label}
									</command.CommandItem>
									<img src={option.flag} width={40} />
								</div>
							))}
						</command.CommandGroup>
					</command.CommandList>
				</command.Command>
			</popover.PopoverContent>
		</popover.Popover>
	);
};

export default LanguageCombobox;
