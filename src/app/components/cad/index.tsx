import GalleryCad from './gallery';

type Props = { cadId: string } & { type: 'gallery' };
const Cad = (props: Props) => {
	switch (props.type) {
		case 'gallery':
			return <GalleryCad {...props} />;
		default:
	}
};

export default Cad;
