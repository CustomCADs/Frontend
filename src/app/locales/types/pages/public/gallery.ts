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
	'add_delivery-question': string;
	'add_no-delivery': string;
	'add_for-delivery': string;
};

export type Cart = {
	title: string;
	view: string;
	customize: string;
	delivery: string;
	undeliverable: string;
	'product-price': string;
	'print-cost': string;
	'total-sum': string;
	buy: string;
	'no-items': string;
};

export type Editor = {
	weight: string;
	cost: string;
	mass: string;
	distance: string;
	composition: string;
	color: string;
	'clear-color': string;
	material: string;
	infill: string;
	'infill-description': string;
	unrecommended: string;
	dimensions: string;
	scale: string;
	reset: string;
	next: string;
};
