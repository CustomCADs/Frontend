import { useMemo } from 'react';
import { Slider as Primitive } from 'radix-ui';
import { cn } from '@/lib/utils';

const Slider = ({
	className,
	defaultValue,
	value,
	onValueChange,
	min = 0,
	max = 100,
	size,
	...props
}: React.ComponentProps<typeof Primitive.Root> & { size: number }) => {
	const _values = useMemo(
		() =>
			Array.isArray(value)
				? value
				: Array.isArray(defaultValue)
					? defaultValue
					: [min, max],
		[value, defaultValue, min, max],
	);

	return (
		<Primitive.Root
			data-slot='slider'
			defaultValue={defaultValue?.map((x) => x / size)}
			value={value?.map((x) => x / size)}
			min={min / size}
			max={max / size}
			onValueChange={(x) => onValueChange?.(x.map((x) => x * size))}
			className={cn(
				'relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col',
				className,
			)}
			{...props}
		>
			<Primitive.Track
				data-slot='slider-track'
				className={cn(
					'relative grow overflow-hidden rounded-full bg-background data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5',
				)}
			>
				<Primitive.Range
					data-slot='slider-range'
					className={cn(
						'absolute bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full',
					)}
				/>
			</Primitive.Track>
			{Array.from({ length: _values.length }, (_, index) => (
				<Primitive.Thumb
					data-slot='slider-thumb'
					key={index}
					className='block size-4 shrink-0 rounded-full border border-primary bg-white shadow-sm ring-ring/50 transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50'
				/>
			))}
		</Primitive.Root>
	);
};

export { Slider };
