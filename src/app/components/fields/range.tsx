import { useRef } from 'react';
import { RangerOptions, useRanger } from '@tanstack/react-ranger';
import { Button } from '@/app/components/ui/button';

type RangerElement = HTMLDivElement;

type BaseProps = Omit<RangerOptions<RangerElement>, 'getRangerElement'>;
type StepProps = { stepSize: number } | { steps: number[] };

type Props = BaseProps & StepProps;
const RangeField = (props: Props) => {
	const rangerRef = useRef<RangerElement>(null);
	const {
		handles,
		options: { min, max },
		getPercentageForValue: percentage,
	} = useRanger<RangerElement>({
		...props,
		getRangerElement: () => rangerRef.current,
	});

	return (
		<div
			ref={rangerRef}
			className='relative select-none h-2 bg-gray-300 shadow-inner rounded-sm'
		>
			{handles().map((handle, i) => (
				<Button
					key={i}
					role='slider'
					onKeyDown={handle.onKeyDownHandler}
					onMouseDown={handle.onMouseDownHandler}
					onTouchStart={handle.onTouchStart}
					aria-valuemin={min}
					aria-valuemax={max}
					aria-valuenow={handle.value}
					size='icon-sm'
					style={{
						position: 'absolute',
						top: '50%',
						left: `${percentage(handle.value)}%`,
						zIndex: handle.isActive ? '1' : '0',
						transform: 'translate(-50%, -50%)',
						width: '14px',
						height: '14px',
						outline: 'none',
						borderRadius: '100%',
						background:
							'linear-gradient(to bottom, #eee 45%, #ddd 55%)',
						border: 'solid 1px #888',
					}}
					className='transition-none'
				/>
			))}
		</div>
	);
};

export default RangeField;
