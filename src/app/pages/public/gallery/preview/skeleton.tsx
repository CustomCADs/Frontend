import { Skeleton as SkeletonUI } from '@/app/components/ui';

const Item = ({ delay = 0 }: { delay?: number }) => (
	<div className='flex justify-around items-center gap-x-4'>
		<SkeletonUI
			className='bg-secondary basis-3/16 aspect-square'
			style={{ animationDelay: `${delay}ms` }}
		/>
		<SkeletonUI
			className='bg-secondary grow h-12'
			style={{ animationDelay: `${delay + 50}ms` }}
		/>
	</div>
);

const List = ({ delays }: { delays: number[] }) => (
	<div className='w-full grid grid-cols-1 gap-y-8'>
		{delays.map((x, i) => (
			<Item key={i} delay={x} />
		))}
	</div>
);

const Skeleton = () => (
	<div className='bg-card rounded-xl flex flex-col justify-center items-center gap-y-20 py-10 px-10'>
		<List delays={[...Array(4)].map((_, i) => (i + 1) * 200)} />
	</div>
);

export default Skeleton;
