import { LinkProps } from '@tanstack/react-router';
import {
	ShoppingCart,
	FileDown,
	PackageCheck,
	Store,
	Truck,
	Handshake,
} from 'lucide-react';
import gallery from '/home/services/cart.png';
import order from '/home/services/order.png';
import market from '/home/services/market.png';
import download from '/home/services/download.png';
import print from '/home/services/print.png';
import delivery from '/home/services/delivery.png';

const services = [
	'gallery',
	'custom',
	'market',
	'download',
	'printing',
	'delivery',
] as const;

const contents: Record<
	(typeof services)[number],
	{ image: string; icon?: React.ReactNode; link?: LinkProps['to'] }
> = {
	gallery: { image: gallery, icon: <ShoppingCart />, link: undefined },
	custom: { image: order, icon: <Handshake />, link: undefined },
	market: { image: market, icon: <Store />, link: undefined },
	download: { image: download, icon: <FileDown />, link: undefined },
	printing: { image: print, icon: <PackageCheck />, link: undefined },
	delivery: { image: delivery, icon: <Truck />, link: undefined },
};

export { services, contents };
