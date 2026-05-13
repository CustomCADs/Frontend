import { useNavigate } from '@tanstack/react-router';
import { useMutation } from '@customcads/react-sdk';
import { UserX } from 'lucide-react';
import { usePrivateTranslations } from '@/app/hooks/locales/translations/pages/private';
import { useLogout } from '@/app/hooks/features/header/useLogout';
import * as dialog from '@/app/components/ui/alert-dialog';
import { Button } from '@/app/components/ui/button';

const Delete = () => {
	const { mutateAsync: deleteMyAccount } = useMutation(
		({ identity }) => identity.deleteMyAccount,
	);
	const { clearSession } = useLogout();

	const navigate = useNavigate();
	const handleDelete = async () => {
		await deleteMyAccount();
		clearSession();
		navigate({ to: '.' });
	};

	const tShell = usePrivateTranslations('account.shell');

	return (
		<div className='basis-1/3 flex justify-center'>
			<dialog.Root>
				<dialog.Trigger>
					<Button variant='destructive' size='sm' tag='div'>
						<UserX />
						<span className='font-black'>
							{tShell('delete-btn')}
						</span>
					</Button>
				</dialog.Trigger>
				<dialog.Content>
					<dialog.Header>
						<dialog.Title>{tShell('delete-title')}</dialog.Title>
						<dialog.Description>
							{tShell('delete-description')}
						</dialog.Description>
					</dialog.Header>
					<dialog.Footer>
						<dialog.Cancel>{tShell('cancel')}</dialog.Cancel>
						<dialog.Action onClick={handleDelete}>
							{tShell('continue')}
						</dialog.Action>
					</dialog.Footer>
				</dialog.Content>
			</dialog.Root>
		</div>
	);
};

export default Delete;
