import { cn } from '@/lib/utils';

type Props = { label: string; index: number; currentStep: number };
const Indicator = ({ label, index, currentStep }: Props) => {
	return (
		<div
			className={cn(
				'flex flex-col items-center gap-2',
				index === currentStep ? 'opacity-100' : 'opacity-50',
			)}
		>
			<div
				className={cn(
					'w-8 h-8 rounded flex items-center justify-center font-semibold text-sm',
					index === currentStep
						? 'bg-primary text-primary-foreground'
						: index < currentStep
							? 'bg-success text-success-foreground'
							: 'bg-secondary text-secondary-foreground',
				)}
			>
				{index + 1}
			</div>
			<span className='text-xs font-medium'>{label}</span>
		</div>
	);
};

export default Indicator;
