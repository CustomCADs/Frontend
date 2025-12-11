import { cn } from '@/lib/utils/tailwindcss';
import { buildPrefixedGetter } from '@/lib/utils/typescript';
import { useInfoTranslations } from '@/app/hooks/locales/translations/pages/public';
import * as page from '@/app/utils/page';
import Section1 from './section-1';

const Home = () => {
	const tHome = useInfoTranslations('home');

	return (
		<div className={cn(page.className, 'p-0 md:p-0')}>
			<Section1 tSection1={buildPrefixedGetter('section1_', tHome)} />
		</div>
	);
};

export default Home;
