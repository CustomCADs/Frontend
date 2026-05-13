import z from 'zod';
import { Translators } from '@/app/types/schema';
import { USERS as VALIDATIONS } from '@/app/constants/validations';

type Props = Translators;
export const schema = ({ tErrors, tLabels }: Props) => {
	const args = {
		email: {
			field: tLabels('email'),
			regex: VALIDATIONS.email.regex,
		},
	};

	return {
		email: z
			.email({ pattern: args.email.regex })
			.nonempty({ message: tErrors('required', args.email) }),
	};
};
