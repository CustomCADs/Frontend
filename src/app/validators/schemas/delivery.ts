import z from 'zod';
import { Translators } from '@/app/types/schema';
import { CHECKOUT as VALIDATIONS } from '@/app/constants/validations';

type Props = Translators;
export const schema = ({ tErrors, tLabels }: Props) => {
	const args = {
		country: { ...VALIDATIONS.country, field: tLabels('country') },
		site: { ...VALIDATIONS.city, field: tLabels('site') },
		postcode: { ...VALIDATIONS.postcode, field: tLabels('postcode') },
		address: { ...VALIDATIONS.address, field: tLabels('address') },
		addressNote: { field: tLabels('addressNote') },
	};

	return {
		destination: z.enum(['address', 'office']),
		officeId: z.number().nonnegative(),
		country: z
			.string()
			.max(args.country.max, tErrors('length', args.country))
			.min(args.country.min, tErrors('length', args.country)),
		site: z
			.string()
			.max(args.site.max, tErrors('length', args.site))
			.min(args.site.min, tErrors('length', args.site)),
		postcode: z
			.string()
			.max(args.postcode.max, tErrors('length', args.postcode))
			.min(args.postcode.min, tErrors('length', args.postcode)),
		address: z
			.string()
			.max(args.address.max, tErrors('length', args.address))
			.min(args.address.min, tErrors('length', args.address)),
		longitude: z.number().nonnegative(),
		latitude: z.number().nonnegative(),
		addressNote: z.string().nonempty(tErrors('required', args.addressNote)),
		shipmentService: z.string().nonempty(tErrors('required')),
	};
};
