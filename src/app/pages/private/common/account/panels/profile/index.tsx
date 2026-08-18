import { type MyAccountResponse } from '@customcads/react-sdk';
import { Content } from '@/app/components/ui/card';
import Names from './names';

type Props = { account: MyAccountResponse };
export const Profile = ({ account }: Props) => (
	<Content className='grow basis-full flex flex-col md:flex-row justify-center sm:px-20 gap-x-20 gap-y-4'>
		<Names
			username={account.username}
			firstName={account.firstName ?? undefined}
			lastName={account.lastName ?? undefined}
		/>
	</Content>
);
