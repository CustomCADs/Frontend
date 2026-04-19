import { cn } from '@/lib/utils/tailwindcss';
import * as preferences from '@/app/components/preferences';
import * as page from '@/app/utils/page';
import { useInfoTranslations } from '@/app/hooks/locales/translations/pages/public';

type Props = { className?: string };
const UserPreferences = ({ className }: Props) => {
	const tPreferences = useInfoTranslations('preferences');

	return (
		<div className={cn(page.className, 'my-25', className)}>
			<div className='flex flex-col gap-y-8 text-lg'>
				<div className='flex gap-x-4'>
					<span>{tPreferences('theme')}</span>
					<preferences.ThemeToggle />
				</div>
				<div className='flex gap-x-4'>
					<span>{tPreferences('language')}</span>
					<preferences.LanguageMenu
						placeholder={tPreferences('language-placeholder')}
					/>
				</div>
				<div className='flex gap-x-4'>
					<span>{tPreferences('currency')}</span>
					<preferences.CurrencySelector
						placeholder={tPreferences('currency-placeholder')}
					/>
				</div>
			</div>
		</div>
	);
};

export default UserPreferences;
