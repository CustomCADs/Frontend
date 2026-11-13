import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Address } from '@/app/types/map';
import { URLs } from '@/app/constants/external';
const EMPTY_ARRAY: Address[] = [];

export type NominatimStatus = 'success' | 'failure' | 'loading';
export const useNominatimMutation = () => {
	const mutation = useMutation({
		mutationKey: ['nominatim_address_search'],
		mutationFn: async (params: string[]) => {
			const url = URLs.nominatim + params.join('');
			const { data } = await axios.get<Address[]>(url);

			return data.map((address) => ({
				...address,
				lat: Number(address.lat),
				lon: Number(address.lon),
				boundingbox: address.boundingbox.map(Number),
			}));
		},
	});

	const status: NominatimStatus = mutation.isPending
		? 'loading'
		: mutation.isError || !mutation.data?.length
			? 'failure'
			: 'success';

	return { ...mutation, data: mutation.data ?? EMPTY_ARRAY, status };
};
