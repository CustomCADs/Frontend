import { type Fingerprint } from '@customcads/react-sdk';
import * as dateTime from '@/app/utils/date-time';
import Remove from './remove';

type Props = { fingerprint: Fingerprint };
const Item = ({ fingerprint }: Props) => (
	<div className='py-2 text-lg flex justify-between gap-x-6 text-nowrap'>
		<p className='grow flex justify-between gap-x-2 text-nowrap'>
			<span className='grow font-bold'>{fingerprint.device}</span>
			<span>
				{dateTime.formatRelative({
					date: fingerprint.issuedAt,
					limit: 'hour',
				})}
			</span>
		</p>
		<Remove id={fingerprint.id} allow={fingerprint.deleteAllowed} />
	</div>
);

export default Item;
