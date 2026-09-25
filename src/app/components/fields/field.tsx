import { useSelector } from '@tanstack/react-store';
import { type AnyFieldApi } from '@tanstack/react-form';
import { Children, ClassName } from '@/types/react';
import { useFormTranslations } from '@/app/hooks/locales/translations/components';
import { Label, PhoneInput } from '@/app/components/ui';
import FormInput from './input';
import PasswordInput from './password';
import Error from './error';

type Props = {
	api: AnyFieldApi;
	canEdit?: boolean;
	optional?: boolean;
} & Children &
	ClassName;
const FormField = ({ api, ...props }: Props) => {
	const tLabels = useFormTranslations('labels');
	const tPlaceholders = useFormTranslations('placeholders');

	const isSubmitted = useSelector(
		api.form.store,
		({ isSubmitted }) => isSubmitted,
	);

	const DefaultInput = () => {
		if (['password', 'confirmPassword'].includes(api.name)) {
			return <PasswordInput api={api} />;
		}

		if (api.name === 'phone') {
			return (
				<PhoneInput
					id={api.name}
					type={api.name}
					value={api.state.value}
					onChange={api.handleChange}
					onBlur={api.handleBlur}
					placeholder={tPlaceholders(api.name)}
				/>
			);
		}

		return (
			<FormInput
				api={api}
				type={api.name}
				placeholder={tPlaceholders(api.name)}
				disabled={props.canEdit === false}
			/>
		);
	};

	return (
		<>
			<Label htmlFor={api.name} className={props.className}>
				{tLabels(api.name)}
				{props.optional !== true && '*'}
			</Label>
			{props.children ?? DefaultInput()}
			<Error meta={api.getMeta()} isSubmitted={isSubmitted} />
		</>
	);
};

export default FormField;
