import { cn, typescript } from '@/lib/utils';
import { Home } from '@/app/locales/types/pages/public/info';
import Button from './button';

type Props = {
	tSection1: (key: typescript.SuffixOf<Home, 'section1_'>) => string;
};
const Section1 = ({ tSection1 }: Props) => (
	<section
		className={cn(
			'w-full h-[95vh] flex justify-center md:justify-between items-center transition duration-400',
			'text-white', // because dark text looks bad on a dark background
			'bg-[url(/public/home/background.jpg)] bg-cover',
			'brightness-150 dark:brightness-100',
		)}
	>
		<article className='z-10 md:basis-1/2 p-10 flex flex-col justify-center gap-y-20 animate-fade-in delay-500'>
			<h3 className='text-3xl text-center font-extrabold'>
				{tSection1('title')}
			</h3>
			<p className='px-4 text-xl text-center'>{tSection1('subtitle')}</p>
			<div className='flex justify-evenly gap-x-8 animate-fade-in delay-1000'>
				<Button to='/gallery' text={tSection1('buy')} />
				<Button to='.' text={tSection1('sell')} />
			</div>
		</article>
		<aside className='absolute md:static top-5/16 transform -translate-y-5/16 md:translate-y-0 opacity-50 md:opacity-100 basis-1/2 md:flex md:justify-end'>
			<img src='/home/aside.png' className='md:max-w-5/6' />
		</aside>
	</section>
);

export default Section1;
