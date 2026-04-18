import { type Form } from '../hooks/useForm';
import { type Key } from '..';
import ChooseRole from './role';
import ProfileInfo from './profile';
import Credentials from './credentials';

type Props = {
	step: Key;
	form: Form;
	isSubmitted: boolean;
	error?: string | string[];
};
const Step = ({ step, ...props }: Props) => {
	switch (step) {
		case 'role':
			return <ChooseRole {...props} />;

		case 'profile':
			return <ProfileInfo {...props} />;

		case 'creds':
			return <Credentials {...props} />;

		default:
	}
};

export default Step;
