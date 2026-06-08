import { cn } from '@/lib/utils';

type Props = {
	label: string;
	message: string;
	result: 'positive' | 'negative';
	onClick?: VoidFunction;
};
const Result = ({ label, message, result, onClick }: Props) => {
	return (
		<div className='flex flex-col items-center gap-y-2 text-center'>
			<span className='italic text-2xl'>{label}</span>
			<span
				onClick={onClick}
				className={cn(
					'text- p-2 rounded-lg opacity-90 transition duration-200',
					result === 'positive' &&
						'bg-success text-success-foreground',
					result === 'negative' &&
						'bg-secondary text-destructive-foreground',
					onClick &&
						'cursor-pointer outline-primary outline-2  hover:opacity-100 active:outline-4',
				)}
			>
				{message}
			</span>
		</div>
	);
};

export default Result;
