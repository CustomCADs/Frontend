import { type MyAccountResponse } from '@customcads/react-sdk';
import { usePrivateTranslations } from '@/app/hooks/locales/translations/pages/private';
import { useCommonTranslations } from '@/app/hooks/locales/translations/common';
import { Header as CardHeader } from '@/app/components/ui/card';
import Download from './download';
import Item from './item';

type Props = Pick<MyAccountResponse, 'role' | 'email'>;
const Header = ({ role, email }: Props) => {
	const tShell = usePrivateTranslations('account.shell');
	const tRoles = useCommonTranslations('roles');

	return (
		<CardHeader className='flex flex-col sm:flex-row gap-y-4 items-center justify-between text-lg'>
			<Item label={tShell('role')}>{tRoles(role as never)}</Item>
			<div className='order-last sm:order-0'>
				<Download />
			</div>
			<Item label={tShell('email')}>{email}</Item>
		</CardHeader>
	);
};

export default Header;
