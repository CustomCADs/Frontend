import { AnyFieldApi } from '@tanstack/react-form';
import { Input } from '@/app/components/ui';

type Props = { api: AnyFieldApi } & React.ComponentProps<typeof Input>;
const FormInput = ({ api, ...props }: Props) => (
	<Input
		id={api.name}
		value={api.state.value}
		onChange={({ target: { value } }) => api.handleChange(value)}
		onBlur={api.handleBlur}
		{...props}
	/>
);

export default FormInput;
