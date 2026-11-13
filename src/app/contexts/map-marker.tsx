import { createContext, useContext } from 'react';
import { AppError } from '@/types/errors';
import { Address as Marker } from '@/app/types/map';

type State = {
	marker: Marker;
	previous?: Marker;
	next?: Marker;
	flags: {
		isAddressCategory: boolean;
		isAddressGeojson: boolean;
		isSingle: boolean;
		isSelected: boolean;
		isChosen: boolean;
	};
	updates: {
		select: (id: number) => void;
		choose: () => void;
		unset: () => void;
	};
};
const MapMarkerContext = createContext<State | null>(null);

export const useMapMarkerContext = () => {
	const context = useContext(MapMarkerContext);

	if (!context)
		throw new AppError({
			title: 'Developmental Error',
			message: 'React Context hook called outside of its Provider.',
			tip: "If you're a user, contact our support team to resolve this issue.",
		});

	return context;
};
export const MapMarkerContextProvider = MapMarkerContext.Provider;
