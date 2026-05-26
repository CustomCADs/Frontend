import z from 'zod';
import { Translators } from '@/app/types/schema';

export const zodHelpers = {
	emptyOrLength: (args: { min: number; max: number }, error: string) =>
		z
			.string()
			.optional()
			.refine(
				(x) => {
					if (!x) return true;

					return x.length >= args.min && x.length <= args.max;
				},
				{ error },
			),
	passwordEquality: <
		TShape extends {
			password: z.ZodString;
			confirmPassword: z.ZodString;
		},
	>(
		object: z.ZodObject<TShape>,
		tErrors: Translators['tErrors'],
	) =>
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		object.refine((data: any) => data.password === data.confirmPassword, {
			error: tErrors('equal-passwords'),
			path: ['confirmPassword'],
		}),
	file: (file: File) => file.size > 0,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const extractError = (error: any) =>
	error?.response?.data?.detail as string;

export const doFieldsHaveErrors = <TValues, TKeys = keyof TValues>(
	getErrors: (field: TKeys) => { errors: unknown[] },
	onErrorFound: (field: TKeys) => void,
) => {
	const hasError = (field: TKeys) => {
		const info = getErrors(field);
		if (info?.errors?.length) {
			onErrorFound(field);
			return true;
		}
	};

	return {
		evaluateFields: (fields: TKeys[]) =>
			fields.map(hasError).some((result) => result === true),
	};
};

export const handleSubmit = async (
	e: React.SubmitEvent<HTMLFormElement>,
	onSubmit: () => Promise<void>,
) => {
	e.preventDefault();
	e.stopPropagation();
	await onSubmit();
};
