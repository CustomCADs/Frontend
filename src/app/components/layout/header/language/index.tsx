import { Languages } from 'lucide-react';
import { ALLOWED_LANGUAGES, Language } from '@/types/locale';
import { useLayoutTranslations } from '@/app/hooks/locales/translations/components';
import { useLocalesTranslations } from '@/app/hooks/locales/translations/common';
import { useLanguageStore } from '@/app/hooks/stores/useLanguageStore';
import * as languageStore from '@/app/stores/language';
import HeaderIcon from '../icon';
import Compobox from './compobox';

const LanguageMenu = () => {
	const { current } = useLanguageStore();
	const tHeader = useLayoutTranslations('header');
	const tLocales = useLocalesTranslations();

	const flags: Record<Language, string> = {
		'': '',
		'bg-BG': '/flags/bg.svg',
		'en-GB': '/flags/gb.svg',
		'en-US': '',
		'ja-JP': '',
		'cs-CZ': '',
		'da-DK': '',
		'hu-HU': '',
		'pl-PL': '',
		'ro-RO': '',
		'sv-SE': '',
		'fr-CH': '',
		'is-IS': '',
		'no-NO': '',
		'tr-TR': '',
		'en-AU': '',
		'pt-BR': '',
		'en-CA': '',
		'zh-CN': '',
		'zh-HK': '',
		'id-ID': '',
		'he-IL': '',
		'hi-IN': '',
		'ko-KR': '',
		'es-MX': '',
		'ms-MY': '',
		'en-NZ': '',
		'fil-PH': '',
		'en-SG': '',
		'th-TH': '',
		'en-ZA': '',
	};

	return (
		<Compobox
			current={current}
			options={ALLOWED_LANGUAGES.map((lang) => ({
				label: tLocales(lang),
				value: lang,
				flag: flags[lang],
			}))}
			placeholder={tHeader('language-placeholder')}
			trigger={<HeaderIcon Icon={Languages} text={tHeader('language')} />}
			onSelect={(curr) => languageStore.setCurrent(curr)}
		/>
	);
};

export default LanguageMenu;
