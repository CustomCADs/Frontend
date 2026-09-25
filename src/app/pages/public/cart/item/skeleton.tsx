import { Skeleton as SkeletonUI } from '@/app/components/ui';

export const Skeleton = ({ delay = 0 }: { delay?: number }) => (
	<div className='min-w-sm md:min-w-xl flex justify-around items-center gap-x-4 py-6'>
		<div className='basis-3/16 flex flex-col gap-y-2'>
			<SkeletonUI
				className='bg-secondary grow h-8'
				style={{ animationDelay: `${delay}ms` }}
			/>
			<SkeletonUI
				className='bg-secondary aspect-square'
				style={{ animationDelay: `${delay}ms` }}
			/>
		</div>
		<div className='grow flex flex-col gap-y-4'>
			<SkeletonUI
				className='bg-secondary grow h-24 md:h-28'
				style={{ animationDelay: `${delay + 50}ms` }}
			/>
		</div>
		<div className='basis-4/16 flex flex-col gap-y-4'>
			<SkeletonUI
				className='bg-secondary grow h-10 md:h-12'
				style={{ animationDelay: `${delay + 150}ms` }}
			/>
			<SkeletonUI
				className='bg-secondary grow h-10 md:h-12'
				style={{ animationDelay: `${delay + 150}ms` }}
			/>
		</div>
	</div>
);
