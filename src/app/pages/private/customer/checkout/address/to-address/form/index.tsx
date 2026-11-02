import { useEffect } from 'react';
import { IntentedCategory, Address } from '@/app/types/map';
import { useForm } from './hooks/useForm';
import Field from './field';
import Submit from './submit';
import Tooltip from './tooltip';

type Props = {
	onAddressesChange: (addresses: Address[]) => void;
	onCategoryChange: (category: IntentedCategory) => void;
};
const AddressForm = ({ onCategoryChange, onAddressesChange }: Props) => {
	const {
		form,
		addresses,
		isPending,
		status,
		getCategory,
		handleChange,
		handleSubmit,
	} = useForm();

	useEffect(() => {
		onAddressesChange(addresses);
		addresses.length && onCategoryChange(getCategory());
	}, [addresses]);

	return (
		<form className='flex flex-col gap-y-4 px-4' onSubmit={handleSubmit}>
			<section className='flex gap-x-6'>
				<Field
					field='site'
					onChange={(value) => {
						form.setFieldValue('site', value);
						form.setFieldValue('postcode', '');
						form.setFieldValue('address', '');
						handleChange();
					}}
					className='grow'
				/>
				<Field
					field='postcode'
					onChange={(value) => {
						form.setFieldValue('postcode', value);
						handleChange();
					}}
					className='base-1/3'
					optional
				/>
			</section>
			<section className='flex gap-x-6'>
				<Field
					field='address'
					onChange={(value) => {
						form.setFieldValue('address', value);
						handleChange();
					}}
					className='grow'
				/>
			</section>
			{isPending ? (
				<Submit status='pending' />
			) : (
				<Submit status={status} variant='outline' disabled />
			)}
			<Tooltip />
		</form>
	);
};

export default AddressForm;
