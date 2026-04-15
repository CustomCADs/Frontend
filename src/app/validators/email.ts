import z from 'zod';
import { TOptions } from 'i18next';
import * as form from '@/app/locales/types/components/form';
import { USERS as VALIDATIONS } from '@/app/constants/validations';

const { email } = VALIDATIONS;

type Props = {
	tErrors: (key: keyof form.Errors, options?: TOptions) => string;
	tLabels: (key: keyof form.Labels, options?: TOptions) => string;
};
export const schema = ({ tErrors, tLabels }: Props) => {
	const args = {
		email: {
			field: tLabels('email'),
			regex: email.regex,
		},
	};

	return z.object({
		email: z
			.string()
			.nonempty({ message: tErrors('required', args.email) })
			.regex(email.regex),
	});
};
