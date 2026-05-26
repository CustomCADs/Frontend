export const is = (tags: string[]) => ({
	printable: tags.includes('Printable'),
	professional: tags.includes('Professional'),
	popular: tags.includes('Popular'),
});
