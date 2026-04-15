import { useFormTranslations } from '@/app/hooks/locales/translations/components';
import { Label } from '@/app/components/ui/label';
import PasswordInput from '@/app/components/fields/password';
import Error from '@/app/components/fields/error';
import { useForm } from './useForm';

export const useFields = () => {
	const tLabels = useFormTranslations('labels');

	const { form, error, isSubmitted, handleSubmit } = useForm();
	const fields = {
		Password: () => (
			<form.Field name='password'>
				{(api) => (
					<>
						<div className='flex items-center'>
							<Label htmlFor={api.name}>
								{tLabels('password')}
							</Label>
						</div>
						<PasswordInput api={api} />
						<Error meta={api.getMeta()} isSubmitted={isSubmitted} />
					</>
				)}
			</form.Field>
		),
	};

	return { fields, error, isSubmitted, handleSubmit };
};
