import { Link } from '@tanstack/react-router';
import { useFormTranslations } from '@/app/hooks/locales/translations/components';
import { Label } from '@/app/components/ui/label';
import { Input } from '@/app/components/ui/input';
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
						<Input
							id={api.name}
							type='username'
							value={api.state.value}
							onChange={({ target: { value } }) =>
								api.handleChange(value)
							}
							onBlur={api.handleBlur}
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
						<Input
							id={api.name}
							type='password'
							value={api.state.value}
							onChange={({ target: { value } }) =>
								api.handleChange(value)
							}
							onBlur={api.handleBlur}
							placeholder={tPlaceholders('password')}
						/>
						<Error meta={api.getMeta()} isSubmitted={isSubmitted} />
						<Link
							to='.'
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
						<Input
							id={api.name}
							type='checkbox'
							checked={api.state.value}
							onChange={({ target: { checked } }) =>
								api.handleChange(checked)
							}
							onBlur={api.handleBlur}
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

	return {
		fields,
		error,
		handleSubmit,
	};
};
