import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

const variants = {
	default: 'bg-primary text-primary-foreground',
	new: 'bg-rose-500 text-rose-100 border-rose-800',
	printable: 'bg-emerald-500 text-emerald-100 border-emerald-800',
	professional: 'bg-slate-500 text-slate-100 border-slate-800',
	popular: 'bg-fuchsia-500 text-fuchsia-100 border-fuchsia-800',
};
export type Variant = keyof typeof variants;

export const tagVariants = cva(
	cn('w-32 h-6', 'sm:px-6 sm:h-8 sm:text-sm', 'xl:px-8 xl:h-10 xl:text-base'),
	{
		variants: { variant: variants },
		defaultVariants: { variant: 'default' },
	},
);
