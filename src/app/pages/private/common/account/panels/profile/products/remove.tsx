import { useQueryClient } from '@tanstack/react-query';
import { queryCall, useMutation } from '@customcads/react-sdk';
import { X } from 'lucide-react';
import { usePrivateTranslations } from '@/app/hooks/locales/translations/pages/private';
import { Button } from '@/app/components/ui/button';
import * as ui from '@/app/components/ui/alert-dialog';

type Props = { id: string };
const Remove = ({ id }: Props) => {
	const { mutateAsync: deleteViewedProduct } = useMutation(
		({ identity }) => identity.deleteViewedProduct,
	);
	const queryClient = useQueryClient();

	const handleDelete = async () => {
		await deleteViewedProduct({ productId: id });
		await queryCall(
			({ identity }) => identity.myAccount,
			(opts) => queryClient.invalidateQueries(opts),
		);
	};
	const tProfile = usePrivateTranslations('account.profile');

	return (
		<ui.Root>
			<ui.Trigger>
				<Button variant='destructive' size='sm' tag='div'>
					{tProfile('remove-btn')}
					<X className='dark:text-destructive-foreground' />
				</Button>
			</ui.Trigger>
			<ui.Content>
				<ui.Header>
					<ui.Title>{tProfile('remove-title')}</ui.Title>
					<ui.Description>
						{tProfile('remove-description')}
					</ui.Description>
				</ui.Header>
				<ui.Footer>
					<ui.Cancel>{tProfile('cancel')}</ui.Cancel>
					<ui.Action onClick={handleDelete}>
						{tProfile('continue')}
					</ui.Action>
				</ui.Footer>
			</ui.Content>
		</ui.Root>
	);
};

export default Remove;
