import z from 'zod';
import { Translators } from '@/app/types/schema';
import { USERS as VALIDATIONS } from '@/app/constants/validations';
import { zodHelpers } from '@/lib/utils/form';

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
		firstName: zodHelpers.emptyOrLength(
			args.firstName,
			tErrors('length', args.firstName),
		),
		lastName: zodHelpers.emptyOrLength(
			args.lastName,
			tErrors('length', args.lastName),
		),
	};
};
