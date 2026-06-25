import { cn, typescript } from '@/lib/utils';
import { useInfoTranslations } from '@/app/hooks/locales/translations/pages/public';
import { Home } from '@/app/locales/types/pages/public/info';
import Service from './service';
import { contents, services } from './data';

type Props = {
	tSection2: (key: typescript.SuffixOf<Home, 'section2_'>) => string;
};
const Section2 = ({ tSection2 }: Props) => {
	const tServices = useInfoTranslations('services');

	return (
		<section
			className={cn(
				'px-4 py-20 w-full min-h-[95vh] flex flex-col justify-center items-center gap-y-20',
				'text-white', // because dark content looks bad on a dark background
				'bg-[url(/home/services/background.jpg)] bg-cover',
				'brightness-100 dark:brightness-60 transition duration-400',
			)}
		>
			<h1 className='text-4xl text-center font-bold'>
				{tSection2('title')}
			</h1>
			<ul className='grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-8 md:gap-x-24'>
				{services.map((x) => (
					<li key={x} className='max-w-80'>
						<h6 className='md:text-xl text-center font-extrabold my-2'>
							<span className='w-full flex justify-center items-center gap-x-2'>
								{contents[x].icon}
								{tServices(`${x}_title`)}
							</span>
						</h6>
						<div className='border-2 rounded-xl overflow-hidden'>
							<Service
								description={tServices(`${x}_description`)}
								{...contents[x]}
							/>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Section2;
