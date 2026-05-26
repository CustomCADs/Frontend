import { type MyAccountResponse } from '@customcads/react-sdk';
import { usePrivateTranslations } from '@/app/hooks/locales/translations/pages/private';
import { card } from '@/app/components/ui';
import Clipboard from '@/app/components/clipboard';
import { format } from '@/app/utils/date-time';
import Delete from './delete';
import Item from './item';

type Props = Pick<MyAccountResponse, 'id' | 'createdAt'>;
const Footer = ({ id, createdAt }: Props) => {
	const tShell = usePrivateTranslations('account.shell');

	return (
		<card.Footer className='flex flex-col sm:flex-row gap-y-8 justify-between text-lg py-1'>
			<Item label={tShell('joined')}>{format({ date: createdAt })}</Item>
			<div className='order-first sm:order-0'>
				<Delete />
			</div>
			<Item label={tShell('id')}>
				<Clipboard value={id} />
			</Item>
		</card.Footer>
	);
};

export default Footer;
