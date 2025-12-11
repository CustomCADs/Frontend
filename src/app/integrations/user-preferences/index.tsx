import { cn } from '@/lib/utils/tailwindcss';
import { useDevtoolsTranslations } from '@/app/hooks/locales/translations/common';
import * as page from '@/app/utils/page';
import ThemeToggle from './theme';
import LanguageMenu from './language';
import CurrencySelector from './currency';

const UserPreferences = () => {
	const tDevtools = useDevtoolsTranslations();

	return (
		<div className={cn(page.className, 'my-25')}>
			<div className='flex flex-col gap-y-8 text-lg'>
				<div className='flex gap-x-4'>
					<span>{tDevtools('theme')}</span>
					<ThemeToggle />
				</div>
				<div className='flex gap-x-4'>
					<span>{tDevtools('language')}</span>
					<LanguageMenu />
				</div>
				<div className='flex gap-x-4'>
					<span>{tDevtools('currency')}</span>
					<CurrencySelector />
				</div>
			</div>
		</div>
	);
};

export default UserPreferences;
