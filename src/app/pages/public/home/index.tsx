import { getRouteApi } from '@tanstack/react-router';
import { cn, typescript } from '@/lib/utils';
import { useInfoTranslations } from '@/app/hooks/locales/translations/pages/public';
import * as page from '@/app/utils/page';
import Section1 from './section-1';
import Section2 from './section-2';
import Section3 from './section-3';

const Route = getRouteApi('/_public/');

const Home = () => {
	const { hasPopularProducts } = Route.useLoaderData();
	const tHome = useInfoTranslations('home');

	return (
		<div className={cn(page.className, 'p-0 md:p-0')}>
			<Section1
				tSection1={typescript.buildPrefixedGetter('section1_', tHome)}
			/>
			<Section2
				tSection2={typescript.buildPrefixedGetter('section2_', tHome)}
			/>
			{hasPopularProducts && (
				<Section3
					tSection3={typescript.buildPrefixedGetter(
						'section3_',
						tHome,
					)}
				/>
			)}
		</div>
	);
};

export default Home;
