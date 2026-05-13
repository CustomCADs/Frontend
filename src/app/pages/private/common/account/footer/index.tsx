import { type MyAccountResponse } from '@customcads/react-sdk';
import { usePrivateTranslations } from '@/app/hooks/locales/translations/pages/private';
import { CardFooter } from '@/app/components/ui/card';
import Clipboard from '@/app/components/clipboard';
import { format } from '@/app/utils/date-time';
import Delete from './delete';
import Item from './item';

type Props = Pick<MyAccountResponse, 'id' | 'createdAt'>;
const Footer = ({ id, createdAt }: Props) => {
	const tShell = usePrivateTranslations('account.shell');

	return (
		<CardFooter className='flex flex-col sm:flex-row gap-y-8 justify-between text-lg py-1'>
			<Item label={tShell('joined')}>{format({ date: createdAt })}</Item>
			<div className='order-first sm:order-0'>
				<Delete />
			</div>
			<Item label={tShell('id')}>
				<Clipboard value={id} />
			</Item>
		</CardFooter>
	);
};

export default Footer;
