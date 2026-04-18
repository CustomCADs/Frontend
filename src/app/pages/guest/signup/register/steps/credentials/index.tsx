import { useFormTranslations } from '@/app/hooks/locales/translations/components';
import { Label } from '@/app/components/ui/label';
import FormInput from '@/app/components/fields/input';
import PasswordInput from '@/app/components/fields/password';
import Error from '@/app/components/fields/error';
import { Form } from '../../hooks/useForm';

type Props = { form: Form; isSubmitted: boolean };
const Credentials = ({ form, isSubmitted }: Props) => {
	const tLabels = useFormTranslations('labels');
	const tPlaceholders = useFormTranslations('placeholders');

	return (
		<div className='md:w-2/3 space-y-6'>
			<form.Field name='email'>
				{(api) => (
					<div className='grid gap-2'>
						<div className='flex items-center'>
							<Label htmlFor={api.name}>{tLabels('email')}</Label>
						</div>
						<FormInput
							api={api}
							type='email'
							placeholder={tPlaceholders('email')}
						/>
						<Error meta={api.getMeta()} isSubmitted={isSubmitted} />
					</div>
				)}
			</form.Field>
			<form.Field name='password'>
				{(api) => (
					<div className='grid gap-2'>
						<Label htmlFor={api.name}>{tLabels('password')}</Label>
						<PasswordInput api={api} />
						<Error meta={api.getMeta()} isSubmitted={isSubmitted} />
					</div>
				)}
			</form.Field>
			<form.Field name='confirmPassword'>
				{(api) => (
					<div className='grid gap-2'>
						<Label htmlFor={api.name}>
							{tLabels('confirm-password')}
						</Label>
						<PasswordInput api={api} />
						<Error meta={api.getMeta()} isSubmitted={isSubmitted} />
					</div>
				)}
			</form.Field>
		</div>
	);
};

export default Credentials;
