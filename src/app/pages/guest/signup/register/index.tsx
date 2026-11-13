import { useSelector } from '@tanstack/react-store';
import { mapStepMetadata } from '@/lib/utils/tooling/form';
import { useSignupTranslations } from '@/app/hooks/locales/translations/pages/guest';
import { card } from '@/app/components/ui';
import MultiStepForm from '@/app/components/form/multi-step';
import Alert from '@/app/components/alert';
import * as page from '@/app/utils/page';
import { useForm } from './hooks/useForm';
import RetryEmail from './retry-email';
import SSO from './sso';
import Step from './steps';

export type Key = 'role' | 'profile' | 'creds';

const Register = () => {
	const { steps, handleSubmit, current, move, ...rest } = useForm();
	const values = useSelector(rest.form.store, (state) => state.values);

	const tRegister = useSignupTranslations('register');
	const { title, description } = mapStepMetadata<Key>(
		['role', 'profile', 'creds'],
		tRegister,
	)[current.key ?? 'role'];

	return (
		<div className={page.className}>
			<card.Root className='w-full max-w-3xl space-y-4'>
				<card.Header className='text-center'>
					<card.Title className='italic text-xl'>{title}!</card.Title>
					<card.Description>{description}</card.Description>
				</card.Header>
				<card.Content>
					<MultiStepForm
						steps={{ all: steps, current }}
						move={move}
						canMoveNext={move.canMoveNext}
						text={{
							back: tRegister('back'),
							next: tRegister('next'),
							submit: tRegister('submit'),
						}}
						onSubmit={handleSubmit}
					>
						<SSO
							role={values.role}
							show={current.key === 'profile'}
						>
							<Step step={current.key} {...rest} />
						</SSO>
					</MultiStepForm>
				</card.Content>
				<card.Footer className='flex-col'>
					{rest.isSuccess && <RetryEmail data={values} />}
					<Alert success={false} error={rest.error} />
				</card.Footer>
			</card.Root>
		</div>
	);
};

export default Register;
