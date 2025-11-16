import { Globe } from 'lucide-react';
import { ALLOWED_LANGUAGES, FLAGS } from '@/types/locale';
import {
	useDevtoolsTranslations,
	useLocalesTranslations,
} from '@/app/hooks/locales/translations/common';
import { useLanguageStore } from '@/app/hooks/stores/useLanguageStore';
import * as languageStore from '@/app/stores/language';
import CustomIcon from '@/app/components/icon';
import Compobox from './compobox';

const LanguageMenu = () => {
	const { current } = useLanguageStore();
	const tDevtools = useDevtoolsTranslations();
	const tLocales = useLocalesTranslations();

	return (
		<Compobox
			current={current}
			options={ALLOWED_LANGUAGES.map((lang) => ({
				label: tLocales(lang),
				value: lang,
				flag: FLAGS[lang],
			}))}
			placeholder={tDevtools('language-placeholder')}
			trigger={
				<CustomIcon
					Icon={Globe}
					text={tLocales(current)}
					className='gap-x-2'
				/>
			}
			onSelect={languageStore.setCurrent}
		/>
	);
};

export default LanguageMenu;
