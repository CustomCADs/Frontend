import { type MyAccountResponse } from '@customcads/react-sdk';
import { Content } from '@/app/components/ui/card';
import Products from './products';

type Props = { account: MyAccountResponse };
export const Info = ({ account }: Props) => (
	<Content className='grow basis-full flex flex-col md:flex-row justify-center gap-x-20 gap-y-4'>
		<Products
			track={account.trackViewedProducts}
			products={account.viewedProducts}
		/>
	</Content>
);
