import { useNavigate } from '@tanstack/react-router';
import { useMutation } from '@customcads/react-sdk';
import { UserX } from 'lucide-react';
import { usePrivateTranslations } from '@/app/hooks/locales/translations/pages/private';
import { useLogout } from '@/app/hooks/features/header/useLogout';
import { alertDialog } from '@/app/components/ui';
import { Button } from '@/app/components/ui';

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
			<alertDialog.Root>
				<alertDialog.Trigger>
					<Button variant='destructive' size='sm' tag='div'>
						<UserX />
						<span className='font-black'>
							{tShell('delete-btn')}
						</span>
					</Button>
				</alertDialog.Trigger>
				<alertDialog.Content>
					<alertDialog.Header>
						<alertDialog.Title>
							{tShell('delete-title')}
						</alertDialog.Title>
						<alertDialog.Description>
							{tShell('delete-description')}
						</alertDialog.Description>
					</alertDialog.Header>
					<alertDialog.Footer>
						<alertDialog.Cancel>
							{tShell('cancel')}
						</alertDialog.Cancel>
						<alertDialog.Action onClick={handleDelete}>
							{tShell('continue')}
						</alertDialog.Action>
					</alertDialog.Footer>
				</alertDialog.Content>
			</alertDialog.Root>
		</div>
	);
};

export default Delete;
