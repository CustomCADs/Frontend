import { usePrivateTranslations } from '@/app/hooks/locales/translations/pages/private';
import { Error } from '@/app/components/form/error';
import { Button } from '@/app/components/ui/button';

type Props = {
	error: string;
	onCancel: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
const Actions = ({ error, onCancel }: Props) => {
	const tProfile = usePrivateTranslations('account.profile');

	return (
		<div className='flex flex-col items-center justify-center gap-y-4'>
			{error && <Error message={error} />}
			<div className='flex gap-x-4'>
				<Button variant='outline' onClick={onCancel}>
					{tProfile('cancel')}
				</Button>
				<Button type='submit'>{tProfile('save')}</Button>
			</div>
		</div>
	);
};

export default Actions;
