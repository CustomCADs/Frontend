export const is = (tags: string[]) => {
	const is = {
		printable: false,
		professional: false,
		popular: false,
	};

	if (tags.includes('Printable')) is.printable = true;
	if (tags.includes('Professional')) is.professional = true;
	if (tags.includes('Popular')) is.popular = true;

	return is;
};
