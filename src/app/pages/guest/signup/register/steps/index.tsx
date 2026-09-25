import { type Form } from '../hooks/useForm';
import { type Key } from '..';
import ChooseRole from './role';
import ProfileInfo from './profile';
import Credentials from './credentials';

type Props = {
	step: Key;
	form: Form;
};
const Step = ({ step, form }: Props) => {
	switch (step) {
		case 'role':
			return <ChooseRole form={form} />;

		case 'profile':
			return <ProfileInfo form={form} />;

		case 'creds':
			return <Credentials form={form} />;

		default:
	}
};

export default Step;
