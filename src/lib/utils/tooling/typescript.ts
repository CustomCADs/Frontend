export const invertBy = <
	T extends Record<string, Record<K, PropertyKey>>,
	K extends keyof T[keyof T],
>(
	obj: T,
	prop: K,
) => {
	return Object.fromEntries(
		Object.entries(obj).map(([outerKey, innerObj]) => [
			innerObj[prop],
			outerKey,
		]),
	) as Record<T[keyof T][K], keyof T>;
};

export type SuffixOf<T, Prefix extends string> = {
	[K in keyof T]: K extends `${Prefix}${infer S}` ? S : never;
}[keyof T];
export const buildPrefixedGetter = <T extends object, Prefix extends string>(
	prefix: Prefix,
	fetcher: (key: keyof T) => string,
) => {
	return <Suffix extends SuffixOf<T, Prefix>>(suffix: Suffix) =>
		fetcher(`${prefix}${suffix}` as keyof T);
};
