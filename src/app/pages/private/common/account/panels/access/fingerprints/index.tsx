import { Fingerprint } from '@customcads/react-sdk';
import { usePrivateTranslations } from '@/app/hooks/locales/translations/pages/private';
import Scroller from '../../scroller';
import Item from './item';
import Password from './password';

type Props = { email: string; fingerprints: Fingerprint[] };
const Fingerprints = ({ email, fingerprints }: Props) => {
	const tAccess = usePrivateTranslations('account.access');

	return (
		<Scroller
			title={tAccess('logins', { count: fingerprints.length })}
			items={fingerprints.map((x) => (
				<Item key={x.issuedAt} fingerprint={x} />
			))}
			className='mb-4 lg:w-175 xl:w-250'
		>
			<Password email={email} />
		</Scroller>
	);
};

export default Fingerprints;
