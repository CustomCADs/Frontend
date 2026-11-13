export const toSpacedPascalCase = (value: string): string => {
	if (!value?.length) return '';

	const tokens = value.split(' ');
	if (tokens.length === 1)
		return `${value[0]}${value.slice(1).toLowerCase()}`;

	return `${tokens.map(toSpacedPascalCase).join(' ')}`;
};

export const hasMatchingStreetNumber = (suggested: string, input: string) => {
	const inputNumbers = input
		.split(' ')
		.map((x) => (isNaN(Number(x)) ? undefined : Number(x)))
		.filter((x) => !!x);

	if (!inputNumbers.length) return true;

	return !!inputNumbers.find((x) => x === Number(suggested.split(',')[0]));
};
