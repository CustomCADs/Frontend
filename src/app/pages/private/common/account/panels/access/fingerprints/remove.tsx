import { useQueryClient } from '@tanstack/react-query';
import { query, useMutation } from '@customcads/react-sdk';
import { ShieldUser, X } from 'lucide-react';
import { usePrivateTranslations } from '@/app/hooks/locales/translations/pages/private';
import { useLogout } from '@/app/hooks/features/header/useLogout';
import { Button } from '@/app/components/ui';
import { alertDialog } from '@/app/components/ui';

type Props = { id: string; allow: boolean };
const Remove = ({ id, allow }: Props) => {
	const queryClient = useQueryClient();
	const mutation = useMutation(({ identity }) => identity.deleteFingerprint);

	const handleDelete = async () => {
		await mutation.mutateAsync({ refreshTokenId: id });
		await query.invalidateQueries(
			({ identity }) => identity.myAccount,
			queryClient,
		);
	};
	const { logout } = useLogout();

	const tAccess = usePrivateTranslations('account.access');
	const alertMode = allow ? 'remove' : 'warn';

	return (
		<alertDialog.Root>
			<alertDialog.Trigger>
				{allow ? (
					<Button variant='destructive' size='sm' tag='div'>
						<span className='hidden md:inline'>
							{tAccess(`${alertMode}-btn`)}
						</span>
						<X className='dark:text-destructive-foreground' />
					</Button>
				) : (
					<Button variant='default' size='sm' tag='div'>
						<span className='hidden md:inline'>
							{tAccess(`${alertMode}-btn`)}
						</span>
						<ShieldUser />
					</Button>
				)}
			</alertDialog.Trigger>
			<alertDialog.Content>
				<alertDialog.Header>
					<alertDialog.Title>
						{tAccess(`${alertMode}-title`)}
					</alertDialog.Title>
					<alertDialog.Description>
						{tAccess(`${alertMode}-description`)}
					</alertDialog.Description>
				</alertDialog.Header>
				<alertDialog.Footer>
					{allow ? (
						<>
							<alertDialog.Cancel>
								{tAccess('cancel')}
							</alertDialog.Cancel>
							<alertDialog.Action onClick={handleDelete}>
								{tAccess('continue')}
							</alertDialog.Action>
						</>
					) : (
						<>
							<alertDialog.Cancel>
								{tAccess('understood')}
							</alertDialog.Cancel>
							<alertDialog.Action onClick={logout}>
								{tAccess('logout')}
							</alertDialog.Action>
						</>
					)}
				</alertDialog.Footer>
			</alertDialog.Content>
		</alertDialog.Root>
	);
};

export default Remove;
