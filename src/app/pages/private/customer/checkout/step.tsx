import { Key } from '.';
import Delivery from './delivery';
import Address from './address';
import Payment from './payment';

const Step = ({ step }: { step: Key }) => {
	switch (step) {
		case 'delivery':
			return <Delivery />;
		case 'address':
			return <Address />;
		case 'payment':
			return <Payment />;
		default:
	}
};

export default Step;
