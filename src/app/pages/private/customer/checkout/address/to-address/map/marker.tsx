import { useMapMarkerContext } from '@/app/contexts/map-marker';
import { map as ui } from '@/app/components/ui';
import LocationMarker from './location';
import MarkerPopup from './popup';

const MarkerItem = () => {
	const { map } = ui.useMap();
	const {
		flags: { isChosen, isSelected, isAddressCategory, isAddressGeojson },
		updates: { select },
		marker,
		next,
		previous,
	} = useMapMarkerContext();

	return (
		<ui.Marker
			longitude={marker.lon}
			latitude={marker.lat}
			onClick={() => select(marker.place_id)}
		>
			<ui.MarkerContent>
				<LocationMarker
					visible={isAddressGeojson && isAddressCategory}
					color={isChosen ? 'green' : isSelected ? 'blue' : 'gray'}
				/>
				<ui.MarkerLabel
					position='bottom'
					className='text-sm font-extrabold'
				>
					{marker.name}
				</ui.MarkerLabel>
			</ui.MarkerContent>
			{isSelected && isAddressCategory && (
				<MarkerPopup
					onPrev={() => {
						if (!previous) return;
						map?.flyTo({ center: previous });
						select(previous.place_id);
					}}
					onNext={() => {
						if (!next) return;
						map?.flyTo({ center: next });
						select(next.place_id);
					}}
				/>
			)}
		</ui.Marker>
	);
};

export default MarkerItem;
