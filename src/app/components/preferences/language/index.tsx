import { Globe } from 'lucide-react';
import { ALLOWED_LANGUAGES, FLAGS } from '@/types/locale';
import { useCommonTranslations } from '@/app/hooks/locales/translations/common';
import { useLocaleStore } from '@/app/hooks/stores/useLocaleStore';
import * as localeStore from '@/app/stores/locale';
import CustomIcon from '@/app/components/icon';
import Compobox from './compobox';

type Props = { placeholder?: string };
export const LanguageMenu = ({ placeholder }: Props) => {
	const { language } = useLocaleStore();
	const tLocales = useCommonTranslations('locales');

	return (
		<Compobox
			current={language}
			options={ALLOWED_LANGUAGES.map((lang) => ({
				label: tLocales(lang),
				value: lang,
				flag: FLAGS[lang],
			}))}
			placeholder={placeholder}
			trigger={
				<CustomIcon
					Icon={Globe}
					text={tLocales(language)}
					className='gap-x-2'
				/>
			}
			onSelect={localeStore.setLanguage}
		/>
	);
};

export default LanguageMenu;
