import { type Step } from '@/types/form';
import { type Children } from '@/types/react';
import { cn } from '@/lib/utils';
import { Button } from '@/app/components/ui';
import Indicator from './indicator';

type Props<K> = Children & {
	steps: { all: Array<Step<K>>; current: Step<K> };
	move: {
		next: VoidFunction;
		prev: VoidFunction;
	};
	text?: {
		back: string;
		next: string;
		submit: string;
	};
	onSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
};
// eslint-disable-next-line func-style
function MultiStepForm<K>({ children, steps, move, text, onSubmit }: Props<K>) {
	const is = {
		first: steps.current.index === 0,
		last: steps.current.index === steps.all.length - 1,
	};

	return (
		<form onSubmit={onSubmit} className='space-y-12'>
			<div className='flex gap-4 justify-center'>
				{steps.all.map((step) => (
					<Indicator
						key={step.index}
						label={step.label}
						index={step.index}
						currentStep={steps.current.index}
					/>
				))}
			</div>

			{children}

			<div className='flex gap-4 justify-between'>
				<Button
					type='button'
					variant='secondary'
					onClick={move.prev}
					className={cn(
						'w-7/15 py-6 text-lg',
						is.first && 'invisible',
					)}
				>
					{text?.back}
				</Button>
				<Button
					type='button'
					variant='outline'
					onClick={move.next}
					className='w-7/15 py-6 text-lg'
					hidden={is.last}
				>
					{text?.next}
				</Button>
				<Button
					variant='default'
					type='submit'
					className='w-7/15 py-6 text-lg'
					hidden={!is.last}
				>
					{text?.submit}
				</Button>
			</div>
		</form>
	);
}

export default MultiStepForm;
