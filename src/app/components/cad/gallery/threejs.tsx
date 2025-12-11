import { Coordinates } from '@customcads/react-sdk';
import { type AllowedType } from '@/lib/cad/get-type';
import { useThreeJS } from '@/hooks/headless/useThreeJS';
import Model from '../model';

type Props = {
	file: { url: string; type: AllowedType | null };
	cam: Coordinates;
	pan: Coordinates;
};
const GalleryThreeJS = ({ file, cam, pan }: Props) => {
	const threejs = useThreeJS({
		url: file.url,
		type: file.type,
		coords: { cam, pan },
	});
	return <Model threejs={threejs} />;
};

export default GalleryThreeJS;
