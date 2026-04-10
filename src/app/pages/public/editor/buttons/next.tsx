import { type EditCustomziationRequest } from '@customcads/react-sdk';
import { useGalleryTranslations } from '@/app/hooks/locales/translations/pages/public';
import { useEditorStore } from '@/app/hooks/stores/useEditorStore';
import Loader from '@/app/components/loading';
import { GeneralButton } from '../general';

type Props = {
	id?: string;
	cad: {
		id: string;
		volume: number;
	};
	save: (request: EditCustomziationRequest) => void;
};
const NextButton = ({ id, cad, save }: Props) => {
	const tEditor = useGalleryTranslations('editor');

	const request = {
		volume: cad.volume,
		materialId: useEditorStore(cad.id, (state) => state.materialId),
		color: useEditorStore(cad.id, (state) => state.color),
		scale: useEditorStore(cad.id, (state) => state.scale),
		infill: useEditorStore(cad.id, (state) => state.infill),
	};

	if (!id) return <Loader />;
	const next = () => save({ ...request, id });

	return <GeneralButton onClick={next}>{tEditor('next')}</GeneralButton>;
};

export default NextButton;
