export type Product = {
	price: string;
	category: string;
	creator: string;
	like: string;
	'like-short': string;
	liked: string;
	'liked-short': string;
	add: string;
	'add-short': string;
	added: string;
	'added-short': string;
};

export type Cart = {
	title: string;
	by: string;
	view: string;
	customize: string;
	delivery: string;
	'product-price': string;
	'customization-cost': string;
	remove: string;
	total?: undefined;
	total_zero: string;
	total_one: string;
	total_other: string;
	'total-delivery'?: undefined;
	'total-delivery_zero': string;
	'total-delivery_one': string;
	'total-delivery_other': string;
	buy: string;
};
