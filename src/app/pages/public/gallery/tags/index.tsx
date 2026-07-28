import { Badge } from '@/app/components/ui';
import { cn } from '@/lib/utils';
import { tagVariants, Tag } from './variants';
import { useEffect, useState } from 'react';

type Props = {
	children?: string[];
	getTags: () => string[] | undefined;
	updateTags: (tags: string[] | undefined) => void;
};
const Tags = ({ children, getTags, updateTags }: Props) => {
	const [tags, setTags] = useState<string[]>(getTags() ?? []);

	useEffect(() => {
		updateTags(tags.length ? tags : undefined);
	}, [tags]);

	return (
		<div className='w-full px-4'>
			<ul
				className={cn(
					'flex justify-items-center overflow-x-auto gap-2 scrollbar-none',
					'sm:grid sm:grid-cols-4 sm:gap-x-20 sm:gap-y-4 sm:overflow-y-auto sm:min-h-12 sm:px-16',
				)}
			>
				{children?.map((tag) => (
					<Badge
						key={tag}
						className={tagVariants({
							tag: tag.toLowerCase() as Tag,
							selected: tags.includes(tag),
						})}
						onClick={() =>
							setTags((prev) => {
								if (!prev.includes(tag)) return [...prev, tag];
								return prev.filter((x) => x !== tag);
							})
						}
					>
						{tag}
					</Badge>
				))}
			</ul>
		</div>
	);
};

export default Tags;
