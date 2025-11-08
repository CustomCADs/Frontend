import { Globe } from 'lucide-react';
import { ALLOWED_LANGUAGES, FLAGS } from '@/types/locale';
import { useLayoutTranslations } from '@/app/hooks/locales/translations/components';
import { useLocalesTranslations } from '@/app/hooks/locales/translations/common';
import { useLanguageStore } from '@/app/hooks/stores/useLanguageStore';
import * as languageStore from '@/app/stores/language';
import CustomIcon from '@/app/components/icon';
import Compobox from './compobox';

const LanguageMenu = () => {
	const { current } = useLanguageStore();
	const tHeader = useLayoutTranslations('header');
	const tLocales = useLocalesTranslations();

	return (
		<Compobox
			current={current}
			options={ALLOWED_LANGUAGES.map((lang) => ({
				label: tLocales(lang),
				value: lang,
				flag: FLAGS[lang],
			}))}
			placeholder={tHeader('language-placeholder')}
			trigger={<CustomIcon Icon={Globe} />}
			onSelect={languageStore.setCurrent}
		/>
	);
};

export default LanguageMenu;
