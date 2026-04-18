import { useFormTranslations } from '@/app/hooks/locales/translations/components';
import Error from '@/app/components/fields/error';
import { Label } from '@/app/components/ui/label';
import FormInput from '@/app/components/fields/input';
import { type Form } from '../../hooks/useForm';

type Props = { form: Form; isSubmitted: boolean };
export const ProfileInfo = ({ form, isSubmitted }: Props) => {
	const tLabels = useFormTranslations('labels');
	const tPlaceholders = useFormTranslations('placeholders');

	return (
		<div className='md:w-2/3 space-y-6'>
			<div className='flex justify-center gap-x-8'>
				<form.Field name='firstName'>
					{(api) => (
						<div className='w-1/2 grid gap-2'>
							<Label htmlFor={api.name}>
								{tLabels('firstName')}
							</Label>
							<FormInput
								api={api}
								type='firstName'
								placeholder={tPlaceholders('firstName')}
							/>
							<Error
								meta={api.getMeta()}
								isSubmitted={isSubmitted}
							/>
						</div>
					)}
				</form.Field>
				<form.Field name='lastName'>
					{(api) => (
						<div className='w-1/2 grid gap-2'>
							<Label htmlFor={api.name}>
								{tLabels('lastName')}
							</Label>
							<FormInput
								api={api}
								type='lastName'
								placeholder={tPlaceholders('lastName')}
							/>
							<Error
								meta={api.getMeta()}
								isSubmitted={isSubmitted}
							/>
						</div>
					)}
				</form.Field>
			</div>
			<form.Field name='username'>
				{(api) => (
					<div className='grid gap-2'>
						<Label htmlFor={api.name}>{tLabels('username')}</Label>
						<FormInput
							api={api}
							type='username'
							placeholder={tPlaceholders('username')}
						/>
						<Error meta={api.getMeta()} isSubmitted={isSubmitted} />
					</div>
				)}
			</form.Field>
		</div>
	);
};

export default ProfileInfo;
