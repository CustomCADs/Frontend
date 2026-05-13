import { useQueryClient } from '@tanstack/react-query';
import { queryCall, useMutation } from '@customcads/react-sdk';
import { usePrivateTranslations } from '@/app/hooks/locales/translations/pages/private';
import { Checkbox } from '@/app/components/ui/checkbox';

type Props = { track: boolean };
const Track = ({ track }: Props) => {
	const mutation = useMutation(
		({ identity }) => identity.toggleTrackViewedProducts,
	);
	const queryClient = useQueryClient();

	const toggleTrackViewedProducts = async () => {
		await mutation.mutateAsync();
		await queryCall(
			({ identity }) => identity.myAccount,
			(opts) => queryClient.invalidateQueries(opts),
		);
	};
	const tProfile = usePrivateTranslations('account.profile');

	return (
		<>
			<label
				htmlFor='track'
				className='text-base md:text-xl font-extrabold'
			>
				{tProfile('track-products')}
			</label>
			<p className='flex items-center gap-x-3 text-sm md:text-base'>
				<Checkbox
					id='track'
					checked={track}
					onCheckedChange={toggleTrackViewedProducts}
					className='size-5'
				/>
			</p>
		</>
	);
};

export default Track;
