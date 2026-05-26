import { useStore } from '@tanstack/react-store';
import { useSignupTranslations } from '@/app/hooks/locales/translations/pages/guest';
import RadioField from '@/app/components/fields/radio';
import { radioGroup } from '@/app/components/ui';
import Error from '@/app/components/fields/error';
import { type Data } from '@/app/validators/register';
import { type Form } from '../../hooks/useForm';
import List from './list';

type Props = { form: Form; isSubmitted: boolean };
const ChooseRole = ({ form, isSubmitted }: Props) => {
	const tRole = useSignupTranslations('role');
	const { role } = useStore(form.store, (state) => state.values);

	return (
		<div className='min-w-3/4 flex flex-col items-center md:items-stretch gap-y-4'>
			<h3 className='text-lg text-center font-bold'>{tRole('title')}</h3>
			<form.Field name='role'>
				{(api) => (
					<>
						<radioGroup.Root
							name={api.name}
							value={api.state.value}
							onValueChange={(x) =>
								api.handleChange(x as Data['role'])
							}
							className='w-full flex flex-col md:flex-row justify-between items-center'
						>
							<RadioField
								value='Customer'
								label={tRole('customer-subtitle')}
							/>
							<RadioField
								value='Contributor'
								label={tRole('contributor-subtitle')}
							/>
						</radioGroup.Root>
						<Error meta={api.getMeta()} isSubmitted={isSubmitted} />
					</>
				)}
			</form.Field>
			<section className='flex justify-start'>
				<List prefix='customer' show={role === 'Customer'} />
				<List prefix='contributor' show={role === 'Contributor'} />
			</section>
		</div>
	);
};

export default ChooseRole;
