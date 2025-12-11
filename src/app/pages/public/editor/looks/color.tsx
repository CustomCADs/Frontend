import { X } from 'lucide-react';
import * as editor from '@/app/stores/editor';
import { useGalleryTranslations } from '@/app/hooks/locales/translations/pages/public';
import { useEditorStore } from '@/app/hooks/stores/useEditorStore';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';

const Color = ({ id }: { id: string }) => {
	const tEditor = useGalleryTranslations('editor');

	const color = useEditorStore(id, (state) => state.color);
	const actions = editor.getActions(id);

	return (
		<div>
			<Input
				id='color'
				type='color'
				defaultValue={color}
				onChange={(e) => actions.set.color(e.target.value)}
				className='absolute w-0 invisible'
			/>
			<div className='flex justify-between gap-x-4'>
				<Label htmlFor='color'>
					<div
						className='min-w-6 min-h-6 border-2 border-border rounded-md shadow-shadow shadow-3xl'
						style={{ backgroundColor: color }}
					/>
					<span className='text-lg'>{tEditor('color')}</span>
				</Label>
				{color !== '#ffffff' && (
					<Button
						onClick={() => actions.set.color('#ffffff')}
						size='sm'
						className='rounded-3xl'
					>
						<X />
						{tEditor('clear-color')}
					</Button>
				)}
			</div>
		</div>
	);
};

export default Color;
