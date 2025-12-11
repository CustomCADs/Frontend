import { useQuery } from '@customcads/react-sdk';
import { AppError } from '@/types/errors';
import { getCadType } from '@/lib/cad/get-type';
import { useEditorStore } from '@/app/hooks/stores/useEditorStore';
import { useCadBlobUrl } from '@/app/hooks/features/cads/useCadBlobUrl';
import { useTextures } from '@/app/hooks/features/materials/useTextures';
import Loader from '@/app/components/loading';
import EditorThreeJS from './threejs';

type EditorCadProps = { cadId: string };
const EditorCad = ({ cadId }: EditorCadProps) => {
	const { blobUrl: cadBlobUrl, progress } = useCadBlobUrl(cadId, 'Product');
	const { data: cad } = useQuery(({ cads }) => cads.single({ id: cadId }));

	const materialId = useEditorStore(cadId, (state) => state.materialId);
	const textures = useTextures(true);
	const texture = textures[materialId];

	if (Object.keys(textures).length > 0 && !texture)
		throw new AppError({
			title: 'Texture Error',
			message: 'An error occured during the Rendering process',
			tip: 'Reload this page or clear your browser cache.',
		});

	if (!cad || !cadBlobUrl || !texture) {
		return <Loader progress={progress} isCad />;
	}

	return (
		<div className='h-full w-full'>
			<EditorThreeJS
				texture={texture}
				cad={{
					id: cadId,
					blobUrl: cadBlobUrl,
					type: getCadType(cad.contentType as never),
					coords: {
						cam: cad.camCoordinates,
						pan: cad.panCoordinates,
					},
					volume: cad.volume,
				}}
			/>
		</div>
	);
};

export default EditorCad;
