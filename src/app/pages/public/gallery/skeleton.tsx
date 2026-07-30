import { Skeleton as SkeletonUI } from '@/app/components/ui';

const Item = ({ delay = 0 }: { delay?: number }) => (
	<div className='flex flex-col gap-y-2'>
		<SkeletonUI
			className='max-h-80 aspect-video'
			style={{ animationDelay: `${delay}ms` }}
		/>
		<div className='flex justify-around items-center'>
			<SkeletonUI
				className='basis-1/8 aspect-square'
				style={{ animationDelay: `${delay + 250}ms` }}
			/>
			<SkeletonUI
				className='basis-3/8 h-10'
				style={{ animationDelay: `${delay + 250}ms` }}
			/>
			<SkeletonUI
				className='basis-1/8 aspect-square'
				style={{ animationDelay: `${delay + 250}ms` }}
			/>
		</div>
	</div>
);

const List = ({ delays }: { delays: number[] }) => (
	<div className='w-full grid grid-cols-3 gap-x-16 gap-y-8'>
		{delays.map((x, i) => (
			<Item key={i} delay={x} />
		))}
	</div>
);

const Bars = () => (
	<div className='w-full flex items-center gap-x-6'>
		<SkeletonUI className='basis-1/8 h-10 delay-100' />
		<SkeletonUI className='grow h-12 delay-200' />
		<SkeletonUI className='basis-1/8 h-10 delay-300' />
	</div>
);

const Skeleton = () => (
	<div className='flex flex-col justify-center items-center gap-y-20 py-10 px-20'>
		<Bars />
		<List delays={[...Array(6)].map((_, i) => (i + 1) * 100)} />
	</div>
);

export default Skeleton;
