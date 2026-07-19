import { cn, typescript } from '@/lib/utils';
import { Home } from '@/app/locales/types/pages/public/info';
import PopularProducts from './popular';

type Props = {
	tSection3: (key: typescript.SuffixOf<Home, 'section3_'>) => string;
};
const Section3 = ({ tSection3 }: Props) => (
	<section
		className={cn(
			'px-4 py-20 w-full min-h-[95vh] flex flex-col justify-center items-center gap-y-20',
			'text-white', // because dark content looks bad on a dark background
			'bg-[url(/home/popular/background.png)] bg-cover',
			'brightness-100 dark:brightness-80 transition duration-400',
		)}
	>
		<h1 className='text-4xl text-center font-bold animate-fade-in delay-200'>
			{tSection3('title')}
		</h1>
		<PopularProducts />
	</section>
);

export default Section3;
