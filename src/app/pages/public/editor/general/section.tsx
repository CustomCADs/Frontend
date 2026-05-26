import { Children, ClassName } from '@/types/react';
import { cn } from '@/lib/utils';

type Props = Children & ClassName;
const GeneralSection = ({ children, className }: Props) => (
	<section className={cn('flex flex-col gap-y-4 text-lg', className)}>
		{children}
	</section>
);

export default GeneralSection;
