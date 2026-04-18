export const equalityHelper = () => {
	let holder = '';

	const sync = (x: string) => {
		holder = x;
		return true;
	};

	const check = (x: string) => {
		return holder === x;
	};

	return { sync, check };
};

export const fileHelper = (file: File) => file.size > 0;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const extractError = (error: any) => {
	const data = error?.response?.data;

	if (data?.detail) return data.detail as string;
	if (data?.message) {
		const errors = data?.errors as Record<string, string[]>;

		return Object.entries(errors)
			.map(([, y]) => y.join('; '))
			.join('\n');
	}
};

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
	e: React.FormEvent<HTMLFormElement>,
	onSubmit: () => Promise<void>,
) => {
	e.preventDefault();
	e.stopPropagation();
	await onSubmit();
};
