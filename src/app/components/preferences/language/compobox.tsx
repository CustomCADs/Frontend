'use client';
import { useState } from 'react';
import { CheckIcon } from 'lucide-react';
import { AllowedLanguage } from '@/types/locale';
import { cn } from '@/lib/utils/tailwindcss';
import * as command from '@/app/components/ui/command';
import * as popover from '@/app/components/ui/popover';

type Option = { value: AllowedLanguage; label: string; flag: string };
type Props = {
	current: AllowedLanguage;
	options: Option[];
	placeholder?: string;
	trigger?: React.ReactNode;
	empty?: string;
	onSelect?: (curr: AllowedLanguage) => void;
};
const LanguageCombobox = ({ current, options, ...props }: Props) => {
	const [open, setOpen] = useState(false);

	return (
		<popover.Popover open={open} onOpenChange={setOpen}>
			<popover.PopoverTrigger>{props.trigger}</popover.PopoverTrigger>
			<popover.PopoverContent className='w-[250px] p-0 z-[100000]'>
				<command.Command className='bg-header-accent text-header-accent-foreground'>
					<command.CommandInput placeholder={props.placeholder} />
					<command.CommandList>
						<command.CommandEmpty>
							{props.empty}
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
										props.onSelect?.(
											value ?? (label as AllowedLanguage),
										);
									}}
									className={cn(
										'flex justify-between items-center',
										current === option.value
											? 'bg-accent opacity-80'
											: 'bg-header-accent hover:bg-accent hover:text-accent-foreground',
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
									<img src={option.flag} width={40} />
								</command.CommandItem>
							))}
						</command.CommandGroup>
					</command.CommandList>
				</command.Command>
			</popover.PopoverContent>
		</popover.Popover>
	);
};

export default LanguageCombobox;
