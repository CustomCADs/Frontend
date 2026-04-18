import { Link } from '@tanstack/react-router';
import { useFormTranslations } from '@/app/hooks/locales/translations/components';
import { Label } from '@/app/components/ui/label';
import FormInput from '@/app/components/fields/input';
import PasswordInput from '@/app/components/fields/password';
import Error from '@/app/components/fields/error';
import { useForm } from './useForm';

export const useFields = () => {
	const tLabels = useFormTranslations('labels');
	const tPlaceholders = useFormTranslations('placeholders');

	const { form, error, isSubmitted, handleSubmit } = useForm();
	const fields = {
		Username: () => (
			<form.Field name='username'>
				{(api) => (
					<>
						<Label htmlFor={api.name}>{tLabels('username')}</Label>
						<FormInput
							api={api}
							type='username'
							placeholder={tPlaceholders('username')}
						/>
						<Error meta={api.getMeta()} isSubmitted={isSubmitted} />
					</>
				)}
			</form.Field>
		),
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
						<Link
							to='/forgot-password'
							className='ml-auto inline-block text-sm underline-offset-4 hover:underline'
						>
							{tLabels('forgot-password')}
						</Link>
					</>
				)}
			</form.Field>
		),
		RememberMe: () => (
			<form.Field name='rememberMe'>
				{(api) => (
					<>
						<FormInput
							api={api}
							type='checkbox'
							placeholder={tPlaceholders('username')}
							onChange={({ target: { checked } }) =>
								api.handleChange(checked)
							}
							className='w-1/10'
						/>
						<div className='flex items-center'>
							<Label htmlFor={api.name}>
								{tLabels('remember-me')}
							</Label>
						</div>
					</>
				)}
			</form.Field>
		),
	};

	return { fields, error, handleSubmit };
};
