import { EMAIL } from './global';

export const URLs = {
	nominatim: `https://nominatim.openstreetmap.org/search?format=jsonv2&polygon_geojson=1&email=${EMAIL}`,
};

export const MAP_TILES = {
	dark: 'https://tiles.openfreemap.org/styles/dark',
	light: 'https://tiles.openfreemap.org/styles/bright',
};
