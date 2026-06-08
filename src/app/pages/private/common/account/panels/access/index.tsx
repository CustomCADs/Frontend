import { MyAccountResponse } from '@customcads/react-sdk';
import { Content } from '@/app/components/ui/card';
import Fingerprints from './fingerprints';

type Props = { account: MyAccountResponse };
export const Access = ({ account }: Props) => (
	<Content className='grow basis-full flex flex-col md:flex-row justify-center gap-x-20 gap-y-4'>
		<Fingerprints {...account} />
	</Content>
);
