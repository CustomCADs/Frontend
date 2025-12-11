import { useGalleryTranslations } from '@/app/hooks/locales/translations/pages/public';
import { useRadioGroups } from '../hooks/useRadioGroups';
import RadioUi from './ui';

type Props = { ui: ReturnType<typeof useRadioGroups>['ui'] };
const DistanceRadio = ({ ui }: Props) => {
	const tEditor = useGalleryTranslations('editor');

	const { Wrapper, items } = ui.distance(['mm', 'cm', 'inch']);
	return (
		<RadioUi title={tEditor('distance')}>
			<Wrapper className='flex gap-x-2'>{items}</Wrapper>
		</RadioUi>
	);
};

export default DistanceRadio;
