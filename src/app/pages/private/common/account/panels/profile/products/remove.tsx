import { useQueryClient } from '@tanstack/react-query';
import { query, useMutation } from '@customcads/react-sdk';
import { X } from 'lucide-react';
import { usePrivateTranslations } from '@/app/hooks/locales/translations/pages/private';
import { alertDialog, Button } from '@/app/components/ui';

type Props = { id: string };
const Remove = ({ id }: Props) => {
	const { mutateAsync: deleteViewedProduct } = useMutation(
		({ identity }) => identity.deleteViewedProduct,
	);
	const queryClient = useQueryClient();

	const handleDelete = async () => {
		await deleteViewedProduct({ productId: id });
		await query.invalidateQueries(
			({ identity }) => identity.myAccount,
			queryClient,
		);
	};
	const tProfile = usePrivateTranslations('account.profile');

	return (
		<alertDialog.Root>
			<alertDialog.Trigger>
				<Button variant='destructive' size='sm' tag='div'>
					{tProfile('remove-btn')}
					<X className='dark:text-destructive-foreground' />
				</Button>
			</alertDialog.Trigger>
			<alertDialog.Content>
				<alertDialog.Header>
					<alertDialog.Title>
						{tProfile('remove-title')}
					</alertDialog.Title>
					<alertDialog.Description>
						{tProfile('remove-description')}
					</alertDialog.Description>
				</alertDialog.Header>
				<alertDialog.Footer>
					<alertDialog.Cancel>
						{tProfile('cancel')}
					</alertDialog.Cancel>
					<alertDialog.Action onClick={handleDelete}>
						{tProfile('continue')}
					</alertDialog.Action>
				</alertDialog.Footer>
			</alertDialog.Content>
		</alertDialog.Root>
	);
};

export default Remove;
