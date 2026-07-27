import { Badge } from '@/app/components/ui';
import { cn } from '@/lib/utils';
import { tagVariants, Variant } from './variants';

type Props = { children: string[] };
const Tags = ({ children }: Props) => (
	<div className='w-full px-4'>
		<ul
			className={cn(
				'flex justify-items-center overflow-x-auto gap-2 scrollbar-none',
				'sm:grid sm:grid-cols-4 sm:gap-x-20 sm:gap-y-4 sm:overflow-y-auto sm:max-h-20 sm:px-16',
			)}
		>
			{children.map((tag) => (
				<Badge
					key={tag}
					className={tagVariants({
						variant: tag.toLowerCase() as Variant,
					})}
				>
					{tag}
				</Badge>
			))}
		</ul>
	</div>
);

export default Tags;
