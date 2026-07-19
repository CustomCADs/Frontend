import { cn } from '@/lib/utils';
import { Link, LinkProps } from '@tanstack/react-router';

type Props = {
	description: string;
	link?: LinkProps['to'];
	image: string;
};
const Service = ({ image, link, description }: Props) => {
	const Comp = link ? Link : 'div';

	return (
		<Comp
			to={link}
			className='relative overflow-hidden cursor-pointer group'
		>
			<img src={image} className='w-80 aspect-square' />
			<aside
				className={cn(
					'flex items-center justify-center',
					'absolute inset-0 bg-black/60 backdrop-blur-md',
					'opacity-0 group-hover:opacity-100 group-active:opacity-100',
					'transition-opacity duration-400',
				)}
			>
				<div
					className={cn(
						'transform -translate-y-8 opacity-0',
						'group-hover:translate-y-0 group-hover:opacity-100',
						'group-active:translate-y-0 group-active:opacity-100',
						'transition-all duration-800 ease-out',
					)}
				>
					<p className='px-8 text-center text-sm md:text-lg font-semibold'>
						{description}
					</p>
				</div>
			</aside>
		</Comp>
	);
};

export default Service;
