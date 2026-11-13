export type Address = {
	place_id: number;
	name: string;
	display_name: string;
	type: string;
	category: string;
	lon: number;
	lat: number;
	boundingbox: number[];
	geojson?: GeoJSON.Geometry;
};
export type IntentedCategory = 'world' | 'country' | 'site' | 'address';
