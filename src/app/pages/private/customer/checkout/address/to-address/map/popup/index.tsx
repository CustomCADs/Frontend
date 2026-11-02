import { useMapMarkerContext } from '@/app/contexts/map-marker';
import { map } from '@/app/components/ui';
import ChooseButton from './choose';
import Info from './info';
import Footer from './footer';

type Props = { onPrev: VoidFunction; onNext: VoidFunction };
const MarkerPopup = ({ onPrev, onNext }: Props) => {
	const { flags, previous, next } = useMapMarkerContext();

	return (
		<map.MarkerPopup className='max-w-3xs space-y-4 p-5'>
			<ChooseButton />
			<Info />
			{!flags.isSingle && (
				<Footer
					prev={{ disabled: !previous, onClick: onPrev }}
					next={{ disabled: !next, onClick: onNext }}
				/>
			)}
		</map.MarkerPopup>
	);
};

export default MarkerPopup;
