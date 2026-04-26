import { useFormTranslations } from '@/app/hooks/locales/translations/components';
import { Label } from '@/app/components/ui/label';
import { Input } from '@/app/components/ui/input';
import Error from '@/app/components/fields/error';
import { useForm } from './useForm';

export const useFields = () => {
	const tLabels = useFormTranslations('labels');
	const tPlaceholders = useFormTranslations('placeholders');

	const { form, error, isSubmitted, isSuccess, handleSubmit } = useForm();
	const fields = {
		Email: () => (
			<form.Field name='email'>
				{(api) => (
					<>
						<div className='flex items-center'>
							<Label htmlFor={api.name}>{tLabels('email')}</Label>
						</div>
						<Input
							id={api.name}
							value={api.state.value}
							onBlur={api.handleBlur}
							onChange={({ target: { value } }) =>
								api.handleChange(value)
							}
							placeholder={tPlaceholders('email')}
						/>
						<Error meta={api.getMeta()} isSubmitted={isSubmitted} />
					</>
				)}
			</form.Field>
		),
	};

	return { fields, error, isSuccess, handleSubmit };
};
