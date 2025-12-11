import { useGalleryTranslations } from '@/app/hooks/locales/translations/pages/public';
import { GeneralButton } from '../general';

const ResetButton = ({ reset }: { reset: VoidFunction }) => {
	const tEditor = useGalleryTranslations('editor');

	return <GeneralButton onClick={reset}>{tEditor('reset')}</GeneralButton>;
};

export default ResetButton;
