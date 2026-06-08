import { type AnyFieldApi } from '@tanstack/react-form';
import { Children, ClassName } from '@/types/react';
import { useFormTranslations } from '@/app/hooks/locales/translations/components';
import { Label } from '@/app/components/ui';
import FormInput from './input';
import PasswordInput from './password';
import Error from './error';

type Props = Children &
	ClassName & { api: AnyFieldApi; isSubmitted: boolean; canEdit?: boolean };
const FormField = ({ api, isSubmitted, canEdit, ...props }: Props) => {
	const tLabels = useFormTranslations('labels');
	const tPlaceholders = useFormTranslations('placeholders');

	const DefaultInput = () => {
		if (['password', 'confirmPassword'].includes(api.name)) {
			return <PasswordInput api={api} />;
		}

		return (
			<FormInput
				api={api}
				type={api.name}
				placeholder={tPlaceholders(api.name)}
				disabled={canEdit === false}
			/>
		);
	};

	return (
		<>
			<Label htmlFor={api.name} className={props.className}>
				{tLabels(api.name)}
			</Label>
			{props.children ?? DefaultInput()}
			<Error meta={api.getMeta()} isSubmitted={isSubmitted} />
		</>
	);
};

export default FormField;
