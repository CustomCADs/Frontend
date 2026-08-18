import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

const generateTagVariantClass = (color: string) =>
	`bg-${color}-500 text-${color}-100 border-${color}-800 shadow-${color}-300`;

const tags = {
	default: 'bg-primary text-primary-foreground',
	new: generateTagVariantClass('rose'),
	printable: generateTagVariantClass('emerald'),
	professional: generateTagVariantClass('slate'),
	popular: generateTagVariantClass('fuchsia'),
};
export type Tag = keyof typeof tags;

export const selected = {
	true: 'brightness-120 shadow-lg dark:shadow-md',
	false: 'brightness-60 hover:brightness-80 hover:shadow-xs',
};

export const tagVariants = cva(
	cn(
		'w-32 border-2 h-6 select-none',
		'sm:px-6 sm:h-8 sm:text-sm',
		'xl:px-8 xl:h-10 xl:text-base',
	),
	{
		variants: { tag: tags, selected },
		defaultVariants: { tag: 'default', selected: false },
	},
);
