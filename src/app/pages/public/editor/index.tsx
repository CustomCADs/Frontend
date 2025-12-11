import { getRouteApi } from '@tanstack/react-router';
import { useQuery, type EditCustomziationRequest } from '@customcads/react-sdk';
import { cn } from '@/lib/utils/tailwindcss';
import * as editor from '@/app/stores/editor';
import { useEditorStore } from '@/app/hooks/stores/useEditorStore';
import { useCartItemEditor } from '@/app/hooks/features/carts/useCartItemEditor';
import { useGalleryTranslations } from '@/app/hooks/locales/translations/pages/public';
import Cad from '@/app/components/cad';
import Loader from '@/app/components/loading';
import * as page from '@/app/utils/page';
import * as calculate3D from '@/app/utils/calculate-3D';
import { useRadioGroups } from './hooks';
import Side from './side';
import { ResetButton, NextButton } from './buttons';
import { GeneralSection, GeneralTitle } from './general';
import { DimensionsInfo, PrintInfo } from './info';
import { Color, Materials } from './looks';
import { InfillRange, ScaleRange } from './range';
import { DistanceRadio, MassRadio } from './radio';

const Route = getRouteApi('/_public/editor/$id');

const Editor = () => {
	const navigate = Route.useNavigate();
	const { cadId, productId, cadVolume } = Route.useLoaderData();

	const { data: product } = useQuery(({ products }) =>
		products.gallery.single({ id: productId }),
	);
	const { customization, save } = useCartItemEditor(productId);

	const scale = useEditorStore(cadId, (state) => state.scale);
	const size = useEditorStore(cadId, (state) => state.size);

	const radio = useRadioGroups();
	const tEditor = useGalleryTranslations('editor');

	if (!product || !customization) return <Loader />;

	const actions = editor.getActions(cadId);
	const volume = calculate3D.volumeMm3(cadVolume, scale, size);

	const handleNext = (
		store: Omit<EditCustomziationRequest, 'id' | 'volume'>,
	) => {
		const { id } = customization;
		return save({ id, volume, ...store }, () => navigate({ to: '/cart' }));
	};

	return (
		<div
			className={cn(
				page.className,
				'md:flex-row items-stretch justify-between p-0 md:p-0',
			)}
		>
			<div className='grow flex flex-col gap-y-4 md:gap-y-2 px-4 py-6 md:p-4'>
				<PrintInfo id={product.cadId} mass={radio.mass} />
				<div
					className={cn(
						'bg-secondary w-full h-[50vh] md:h-full overflow-clip',
						'border-2 rounded-4xl shadow-shadow shadow-lg hover:shadow-primary',
						'transition fade-in duration-400',
					)}
				>
					<Cad type='editor' cadId={product.cadId} />
				</div>
				<div className='flex flex-col md:flex-row justify-center items-center gap-x-8'>
					<MassRadio ui={radio.ui} />
					<DistanceRadio ui={radio.ui} />
				</div>
			</div>
			<Side orientation='right'>
				<GeneralSection>
					<GeneralTitle>{tEditor('composition')}</GeneralTitle>
					<Color id={product.cadId} />
					<Materials id={product.cadId} />
					<InfillRange id={product.cadId} />
				</GeneralSection>
				<GeneralSection>
					<GeneralTitle>{tEditor('dimensions')}</GeneralTitle>
					<ScaleRange id={product.cadId} />
					<DimensionsInfo
						id={product.cadId}
						distance={radio.distance}
						volume={volume}
					/>
				</GeneralSection>
				<GeneralSection>
					<div className='flex justify-evenly items-center gap-x-2'>
						<ResetButton reset={actions.record.reset} />
						<NextButton cadId={cadId} save={handleNext} />
					</div>
				</GeneralSection>
			</Side>
		</div>
	);
};

export default Editor;
