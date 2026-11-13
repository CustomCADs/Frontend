import { BBox, Geometry } from 'geojson';
import { useMapMarkerContext } from '@/app/contexts/map-marker';
import { map } from '@/app/components/ui';

const buildGeometry = (boundingbox: number[]): Geometry => {
	const [s, n, w, e] = boundingbox;
	const coordinates = [
		[w, n],
		[e, n],
		[e, s],
		[w, s],
		[w, n],
	];

	return {
		type: 'Polygon',
		bbox: boundingbox.slice(0, 4) as BBox,
		coordinates: [coordinates],
	};
};

const Geojson = () => {
	const { flags, marker } = useMapMarkerContext();
	const color = {
		fill: flags.isChosen
			? '#3b8226'
			: flags.isSelected
				? '#3b82f6'
				: '#888888',
		line: flags.isChosen
			? '#25632b'
			: flags.isSelected
				? '#2563eb'
				: '#888888',
	};

	return (
		<map.GeoJSON
			data={{
				type: 'Feature',
				properties: {},
				geometry: marker.geojson ?? buildGeometry(marker.boundingbox),
			}}
			fillPaint={{ 'fill-color': color.fill, 'fill-opacity': 0.25 }}
			linePaint={{ 'line-color': color.line, 'line-width': 4 }}
		/>
	);
};

export default Geojson;
