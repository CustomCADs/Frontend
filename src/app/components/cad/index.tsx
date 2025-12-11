import GalleryCad from './gallery';
import EditorCad from './editor';

type Props = { cadId: string } & ({ type: 'gallery' } | { type: 'editor' });
const Cad = (props: Props) => {
	switch (props.type) {
		case 'gallery':
			return <GalleryCad {...props} />;
		case 'editor':
			return <EditorCad {...props} />;
		default:
	}
};

export default Cad;
