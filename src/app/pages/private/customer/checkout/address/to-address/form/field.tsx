import { useSelector } from '@tanstack/react-store';
import { ClassName } from '@/types/react';
import { cn } from '@/lib/utils';
import { useCheckoutFormContext } from '@/app/contexts/checkout';
import { useFormTranslations } from '@/app/hooks/locales/translations/components';
import { Input, Label } from '@/app/components/ui';

type Props = {
	field: 'site' | 'postcode' | 'address';
	onChange: (value: string) => void;
	optional?: boolean;
} & ClassName;
const Field = ({ field, onChange, optional, className }: Props) => {
	const { form } = useCheckoutFormContext();
	const values = useSelector(form.store, ({ values }) => values);

	const tLabel = useFormTranslations('labels');
	return (
		<div className={cn('flex flex-col gap-y-2', className)}>
			<Label htmlFor={field} className='text-nowrap'>
				{tLabel(field)}
				{optional !== true && '*'}
			</Label>
			<Input
				id={field}
				value={values[field]}
				onChange={({ target }) => onChange(target.value)}
			/>
		</div>
	);
};

export default Field;
