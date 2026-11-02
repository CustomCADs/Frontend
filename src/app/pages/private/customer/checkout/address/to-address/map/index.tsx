import { useEffect, useState } from 'react';
import { IntentedCategory, Address } from '@/app/types/map';
import { useCheckoutFormContext } from '@/app/contexts/checkout';
import { MapMarkerContextProvider } from '@/app/contexts/map-marker';
import { map } from '@/app/components/ui';
import Geojson from './geojson';
import MarkerItem from './marker';
import { MAP_TILES } from '@/app/constants/external';

const ZOOMS = {
	world: 2.5,
	country: 6,
	site: 13,
	address: 18,
};

type Props = {
	category: IntentedCategory;
	data: Address[];
};
const AddressMap = ({ category, data }: Props) => {
	const [[zoom, setZoom], [markers, setMarkers]] = [
		useState(ZOOMS.country),
		useState(data),
	];
	const [[selected, setSelected], [chosen, setChosen]] = [
		useState<Address>(),
		useState<Address>(),
	];

	const { form, dispatch } = useCheckoutFormContext();
	useEffect(() => {
		form.setFieldValue('addressNote', chosen ? chosen.display_name : '');
	}, [chosen]);

	useEffect(() => {
		if (!selected) dispatch({ type: 'ADDRESS_UNSELECTED' });
		else dispatch({ type: 'ADDRESS_SELECTED', address: selected });
	}, [selected]);

	useEffect(() => {
		setMarkers(chosen ? [...data, chosen] : data);
		setSelected(data[0]);
	}, [data]);

	useEffect(() => {
		setZoom(ZOOMS[category]);
	}, [category]);

	return (
		<map.Root
			minZoom={ZOOMS.world}
			projection={{ type: 'globe' }}
			className='w-full md:aspect-video aspect-square rounded-lg max-w-full'
			styles={MAP_TILES}
		>
			<map.Controls position='top-right' showFullscreen showTheme />
			<map.Flight center={selected} zoom={zoom} />
			{markers.map((marker, index) => (
				<MapMarkerContextProvider
					value={{
						marker,
						previous:
							index === 0
								? markers.at(markers.length - 1)
								: markers.at(index - 1),
						next:
							index === markers.length - 1
								? markers.at(0)
								: markers.at(index + 1),
						flags: {
							isAddressCategory: category === 'address',
							isAddressGeojson:
								!marker.geojson ||
								marker.geojson.type === 'Point' ||
								marker.geojson.type === 'Polygon',
							isSingle: markers.length === 1,
							isSelected: marker.place_id === selected?.place_id,
							isChosen: marker.place_id === chosen?.place_id,
						},
						updates: {
							select: (id) =>
								setSelected(
									markers.find((x) => x.place_id === id),
								),
							choose: () => setChosen(marker),
							unset: () => setChosen(undefined),
						},
					}}
					key={marker.place_id}
				>
					<Geojson />
					<MarkerItem />
				</MapMarkerContextProvider>
			))}
		</map.Root>
	);
};

export default AddressMap;
