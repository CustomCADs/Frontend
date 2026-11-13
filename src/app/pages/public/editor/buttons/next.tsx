import { type EditCustomziationRequest } from '@customcads/react-sdk';
import { useGalleryTranslations } from '@/app/hooks/locales/translations/pages/public';
import { useCustomizationConstruction } from '@/app/hooks/features/customizations/useCustomizationConstruction';
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
	const request = useCustomizationConstruction(cad);

	return (
		<GeneralButton
			disabled={!id}
			onClick={() => save({ ...request, id: id! })}
		>
			{id ? tEditor('next') : <Loader />}
		</GeneralButton>
	);
};

export default NextButton;
