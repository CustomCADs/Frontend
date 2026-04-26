import { useStore } from '@tanstack/react-store';
import { useSignupTranslations } from '@/app/hooks/locales/translations/pages/guest';
import { useSteps } from '@/app/components/form/multi-step/hooks/useSteps';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/app/components/ui/card';
import MultiStepForm from '@/app/components/form/multi-step';
import Alert from '@/app/components/alert';
import * as page from '@/app/utils/page';
import { useForm } from './hooks/useForm';
import RetryEmail from './retry-email';
import SSO from './sso';
import Step from './steps';

export type Key = 'role' | 'profile' | 'creds';

const Register = () => {
	const { steps, handleSubmit, ...rest } = useForm();
	const values = useStore(rest.form.store, (state) => state.values);

	const { current, move } = useSteps({ steps });
	const tRegister = useSignupTranslations('register');

	const stepTitles = {
		role: {
			title: tRegister('role-title'),
			description: tRegister('role-description'),
		},
		profile: {
			title: tRegister('profile-title'),
			description: tRegister('profile-description'),
		},
		creds: {
			title: tRegister('creds-title'),
			description: tRegister('creds-description'),
		},
	};
	const { title, description } = stepTitles[current.key ?? 'role'];

	return (
		<div className={page.className}>
			<Card className='w-full max-w-3xl space-y-4'>
				<CardHeader className='text-center'>
					<CardTitle className='italic text-xl'>{title}!</CardTitle>
					<CardDescription>{description}</CardDescription>
				</CardHeader>
				<CardContent>
					<MultiStepForm
						steps={{ all: steps, current }}
						move={move}
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
				</CardContent>
				<CardFooter className='flex-col'>
					{rest.isSuccess && <RetryEmail data={values} />}
					<Alert success={false} error={rest.error} />
				</CardFooter>
			</Card>
		</div>
	);
};

export default Register;
