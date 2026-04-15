import z from 'zod';
import { TOptions } from 'i18next';
import * as form from '@/app/locales/types/components/form';
import { USERS as VALIDATIONS } from '@/app/constants/validations';

const { password } = VALIDATIONS;

type Props = {
	tErrors: (key: keyof form.Errors, options?: TOptions) => string;
	tLabels: (key: keyof form.Labels, options?: TOptions) => string;
};
export const schema = ({ tErrors, tLabels }: Props) => {
	const args = {
		password: {
			field: tLabels('password'),
			min: password.min,
			max: password.max,
		},
	};

	return z.object({
		password: z
			.string()
			.nonempty({ message: tErrors('required', args.password) })
			.max(password.max, { message: tErrors('length', args.password) })
			.min(password.min, { message: tErrors('length', args.password) }),
	});
};
