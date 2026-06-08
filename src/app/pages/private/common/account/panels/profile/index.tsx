import { type MyAccountResponse } from '@customcads/react-sdk';
import { Separator } from '@/app/components/ui';
import { Content } from '@/app/components/ui/card';
import Names from './names';
import Products from './products';

type Props = { account: MyAccountResponse };
export const Profile = ({ account }: Props) => (
	<Content className='grow basis-full flex flex-col md:flex-row justify-center items-center gap-x-20 gap-y-4'>
		<Names
			username={account.username}
			firstName={account.firstName ?? undefined}
			lastName={account.lastName ?? undefined}
		/>
		<Separator orientation='vertical' className='hidden md:block' />
		<Separator orientation='horizontal' className='md:hidden block' />
		<Products
			track={account.trackViewedProducts}
			products={account.viewedProducts}
		/>
	</Content>
);
