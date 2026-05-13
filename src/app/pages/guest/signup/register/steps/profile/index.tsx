import FormField from '@/app/components/fields/field';
import { type Form } from '../../hooks/useForm';

type Props = { form: Form; isSubmitted: boolean };
export const ProfileInfo = ({ form, isSubmitted }: Props) => (
	<div className='md:w-2/3 space-y-6'>
		<div className='flex justify-center items-start gap-x-8'>
			<div className='grid gap-2'>
				<form.Field name='firstName'>
					{(api) => <FormField api={api} isSubmitted={isSubmitted} />}
				</form.Field>
			</div>
			<div className='grid gap-2'>
				<form.Field name='lastName'>
					{(api) => <FormField api={api} isSubmitted={isSubmitted} />}
				</form.Field>
			</div>
		</div>
		<div className='grid gap-2'>
			<form.Field name='username'>
				{(api) => <FormField api={api} isSubmitted={isSubmitted} />}
			</form.Field>
		</div>
	</div>
);

export default ProfileInfo;
