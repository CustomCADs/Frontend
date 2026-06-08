import { useState } from 'react';
import { cn } from '@/lib/utils';
import { usePrivateTranslations } from '@/app/hooks/locales/translations/pages/private';
import { useFields } from './hooks/useFields';
import Actions from './actions';
import ToggleEdit from './toggle';

type Props = { username: string; firstName?: string; lastName?: string };
const Names = ({ username, firstName, lastName }: Props) => {
	const [mode, setMode] = useState<'view' | 'edit'>('view');
	const form = useFields({ username, firstName, lastName }, mode === 'edit');

	const handle = {
		submit: async (e: React.SubmitEvent<HTMLFormElement>) => {
			await form.handleSubmit(e);
			setMode('view');
		},
		cancel: (e: React.MouseEvent) => {
			e.preventDefault();
			form.reset();
			setMode('view');
		},
	};
	const tProfile = usePrivateTranslations('account.profile');

	return (
		<form onSubmit={handle.submit} className='min-h-full'>
			<div className='min-h-full flex flex-col gap-y-4 py-8 md:py-16'>
				<p className='text-xl md:text-2xl text-center font-extrabold'>
					{tProfile('names')}
				</p>
				<div
					className={cn(
						'flex flex-col justify-between items-center gap-y-8 md:gap-y-12',
						'min-h-full bg-background rounded-lg border-2 p-6 pb-3',
					)}
				>
					<div className='flex flex-col items-start gap-y-6 md:gap-y-12'>
						<div className='min-w-60 md:min-w-100 grid gap-y-2'>
							<form.fields.FirstName />
						</div>
						<div className='min-w-60 md:min-w-100 grid gap-y-2'>
							<form.fields.LastName />
						</div>
						<div className='min-w-60 md:min-w-100 grid gap-y-2'>
							<form.fields.Username />
						</div>
					</div>
					{mode === 'view' ? (
						<ToggleEdit onClick={() => setMode('edit')}>
							<span className='text-lg md:text-xl font-extrabold'>
								{tProfile('edit')}
							</span>
						</ToggleEdit>
					) : (
						<Actions error={form.error} onCancel={handle.cancel} />
					)}
				</div>
			</div>
		</form>
	);
};

export default Names;
