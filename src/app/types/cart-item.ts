export type CartItemForDelivery = {
	forDelivery: true;
	productId: string;
	quantity: number;
	customizationId: string;
};

export type CartItemNoDelivery = {
	forDelivery: false;
	productId: string;
};

export type CartItem = CartItemForDelivery | CartItemNoDelivery;
