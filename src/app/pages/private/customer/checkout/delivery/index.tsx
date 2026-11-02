import CountryField from './country';
import ContactFields from './contact';
import DestinationField from './destination';

const Delivery = () => (
	<div className='min-w-3/4 flex flex-col items-center md:items-stretch gap-y-6'>
		<div className='w-full flex gap-x-6'>
			<DestinationField />
			<CountryField />
		</div>
		<div className='w-full flex gap-x-6'>
			<ContactFields />
		</div>
	</div>
);

export default Delivery;
