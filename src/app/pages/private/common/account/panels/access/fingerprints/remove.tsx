import { useQueryClient } from '@tanstack/react-query';
import { query, useMutation } from '@customcads/react-sdk';
import { ShieldUser, X } from 'lucide-react';
import { usePrivateTranslations } from '@/app/hooks/locales/translations/pages/private';
import { useLogout } from '@/app/hooks/features/header/useLogout';
import { Button } from '@/app/components/ui/button';
import * as ui from '@/app/components/ui/alert-dialog';

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
		<ui.Root>
			<ui.Trigger>
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
			</ui.Trigger>
			<ui.Content>
				<ui.Header>
					<ui.Title>{tAccess(`${alertMode}-title`)}</ui.Title>
					<ui.Description>
						{tAccess(`${alertMode}-description`)}
					</ui.Description>
				</ui.Header>
				<ui.Footer>
					{allow ? (
						<>
							<ui.Cancel>{tAccess('cancel')}</ui.Cancel>
							<ui.Action onClick={handleDelete}>
								{tAccess('continue')}
							</ui.Action>
						</>
					) : (
						<>
							<ui.Cancel>{tAccess('understood')}</ui.Cancel>
							<ui.Action onClick={logout}>
								{tAccess('logout')}
							</ui.Action>
						</>
					)}
				</ui.Footer>
			</ui.Content>
		</ui.Root>
	);
};

export default Remove;
