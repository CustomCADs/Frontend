import z from 'zod';
import { Translators } from '@/app/types/schema';
import { USERS as VALIDATIONS } from '@/app/constants/validations';

type Props = Translators;
export const schema = ({ tErrors, tLabels }: Props) => {
	const args = {
		password: {
			field: tLabels('password'),
			min: VALIDATIONS.password.min,
			max: VALIDATIONS.password.max,
		},
		confirmPassword: {
			field: tLabels('confirmPassword'),
			min: VALIDATIONS.password.min,
			max: VALIDATIONS.password.max,
		},
	};

	return {
		password: z
			.string()
			.nonempty({ message: tErrors('required', args.password) })
			.max(args.password.max, {
				message: tErrors('length', args.password),
			})
			.min(args.password.min, {
				message: tErrors('length', args.password),
			}),
		confirmPassword: z
			.string()
			.nonempty({ message: tErrors('required', args.confirmPassword) })
			.max(args.confirmPassword.max, {
				message: tErrors('length', args.confirmPassword),
			})
			.min(args.confirmPassword.min, {
				message: tErrors('length', args.confirmPassword),
			}),
	};
};
