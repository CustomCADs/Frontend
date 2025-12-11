import { type EditCustomziationRequest } from '@customcads/react-sdk';
import { useGalleryTranslations } from '@/app/hooks/locales/translations/pages/public';
import { useEditorStore } from '@/app/hooks/stores/useEditorStore';
import { GeneralButton } from '../general';

type SaveRequest = Pick<
	EditCustomziationRequest,
	'materialId' | 'color' | 'scale' | 'infill'
>;

type Props = {
	cadId: string;
	save: (body: SaveRequest) => void;
};
const NextButton = ({ cadId, save }: Props) => {
	const tEditor = useGalleryTranslations('editor');

	const store = {
		materialId: useEditorStore(cadId, (state) => state.materialId),
		color: useEditorStore(cadId, (state) => state.color),
		scale: useEditorStore(cadId, (state) => state.scale),
		infill: useEditorStore(cadId, (state) => state.infill),
	};
	const next = () => save(store);

	return <GeneralButton onClick={next}>{tEditor('next')}</GeneralButton>;
};

export default NextButton;
