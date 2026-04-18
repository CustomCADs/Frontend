import { axios, identitySSOUrl } from '@customcads/react-sdk';
import { Button } from '@/app/components/ui/button';
import svg from '/identity/google.svg';

type Props = { text: string; role?: string; className?: string };
const GoogleSSO = ({ text, role, className }: Props) => (
	<Button
		variant='outline'
		onClick={() =>
			window.location.assign(
				axios.defaults.baseURL +
					identitySSOUrl({
						provider: 'Google',
						role,
						redirectUrl: window.location.origin,
					}),
			)
		}
		className={className}
	>
		<img src={svg} />
		<span>{text}</span>
	</Button>
);

export default GoogleSSO;
