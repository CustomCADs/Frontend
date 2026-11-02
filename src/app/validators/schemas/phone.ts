import z from 'zod';
import { Translators } from '@/app/types/schema';
import { USERS as VALIDATIONS } from '@/app/constants/validations';

type Props = Translators;
export const schema = ({ tErrors, tLabels }: Props) => {
	const args = {
		phone: {
			field: tLabels('phone'),
			regex: VALIDATIONS.phone.regex,
		},
	};

	return {
		phone: z
			.string()
			.regex(args.phone.regex, tErrors('pattern', args.phone))
			.nonempty({ message: tErrors('required', args.phone) }),
	};
};
