import { useState } from 'react';
import { Currency } from '@customcads/react-sdk';
import { CheckIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { command, popover } from '@/app/components/ui';

type Option = { value: Currency; label: string; symbol: string | null };
type Props = {
	current: Currency;
	options: Option[];
	placeholder?: string;
	trigger?: React.ReactNode;
	empty?: string;
	onSelect?: (curr: Currency) => void;
};
const CurrencyCombobox = ({ current, options, ...props }: Props) => {
	const [open, setOpen] = useState(false);

	return (
		<popover.Root open={open} onOpenChange={setOpen}>
			<popover.Trigger>{props.trigger}</popover.Trigger>
			<popover.Content className='w-43.75 p-0 z-100000'>
				<command.Root className='bg-header-accent text-header-accent-foreground'>
					<command.Input placeholder={props.placeholder} />
					<command.List>
						<command.Empty>{props.empty}</command.Empty>
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
										props.onSelect?.(
											value ?? (label as Currency),
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
										<div className='flex gap-x-1'>
											<span className='wrap-anywhere'>
												{option.label}
											</span>
											{option.symbol && (
												<span>({option.symbol})</span>
											)}
										</div>
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

export default CurrencyCombobox;
