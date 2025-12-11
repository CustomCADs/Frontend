import { useQuery } from '@customcads/react-sdk';
import { getCadType } from '@/lib/cad/get-type';
import { useCadBlobUrl } from '@/app/hooks/features/cads/useCadBlobUrl';
import Loader from '@/app/components/loading';
import GalleryThreeJS from './threejs';

const GalleryCad = ({ cadId }: { cadId: string }) => {
	const { data: cad } = useQuery(({ cads }) => cads.single({ id: cadId }));
	const { blobUrl, progress } = useCadBlobUrl(cadId, 'Product');

	return (
		<div className='relative h-full w-full'>
			{!cad || !blobUrl ? (
				<Loader isCad progress={progress} />
			) : (
				<GalleryThreeJS
					file={{
						url: blobUrl,
						type: getCadType(cad.contentType as never),
					}}
					cam={cad.camCoordinates}
					pan={cad.panCoordinates}
				/>
			)}
		</div>
	);
};

export default GalleryCad;
