import z from 'zod';
import { Translators } from '@/app/types/schema';
import { USERS as VALIDATIONS } from '@/app/constants/validations';

type Props = Translators;
export const schema = ({ tErrors, tLabels }: Props) => {
	const args = {
		username: {
			field: tLabels('username'),
			min: VALIDATIONS.name.min,
			max: VALIDATIONS.name.max,
		},
		firstName: {
			field: tLabels('firstName'),
			min: VALIDATIONS.name.min,
			max: VALIDATIONS.name.max,
		},
		lastName: {
			field: tLabels('lastName'),
			min: VALIDATIONS.name.min,
			max: VALIDATIONS.name.max,
		},
	};

	return {
		username: z
			.string()
			.nonempty({ message: tErrors('required', args.username) })
			.max(args.username.max, {
				message: tErrors('length', args.username),
			})
			.min(args.username.min, {
				message: tErrors('length', args.username),
			}),
		firstName: z
			.string()
			.nonempty({ message: tErrors('required', args.firstName) })
			.max(args.firstName.max, {
				message: tErrors('length', args.firstName),
			})
			.min(args.firstName.min, {
				message: tErrors('length', args.firstName),
			}),
		lastName: z
			.string()
			.nonempty({ message: tErrors('required', args.lastName) })
			.max(args.lastName.max, {
				message: tErrors('length', args.lastName),
			})
			.min(args.lastName.min, {
				message: tErrors('length', args.lastName),
			}),
	};
};
