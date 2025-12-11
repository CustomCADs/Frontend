import { Children } from '@/types/react';
import { cn } from '@/lib/utils/tailwindcss';

type Props = { className?: string } & Children;
const GeneralSection = ({ children, className }: Props) => (
	<section className={cn('flex flex-col gap-y-4 text-lg', className)}>
		{children}
	</section>
);

export default GeneralSection;
