import { CircleQuestionMark } from 'lucide-react';
import { cn, units } from '@/lib/utils';
import { INFILL } from '@/app/constants/threejs';
import * as editor from '@/app/stores/editor';
import { useEditorStore } from '@/app/hooks/stores/useEditorStore';
import { useGalleryTranslations } from '@/app/hooks/locales/translations/pages/public';
import { tooltip, Slider } from '@/app/components/ui';

const InfillRange = ({ id }: { id: string }) => {
	const tEditor = useGalleryTranslations('editor');

	const actions = editor.getActions(id);
	const infill = useEditorStore(id, (state) => state.infill);

	return (
		<div className='flex flex-col gap-y-2'>
			<p className='flex gap-x-1 text-base'>
				<tooltip.Root>
					<tooltip.Trigger asChild>
						<CircleQuestionMark size={14} />
					</tooltip.Trigger>
					<tooltip.Content>
						{tEditor('infill-description')}
					</tooltip.Content>
				</tooltip.Root>
				<span>{tEditor('infill')}: </span>
				<span>{units.percentage(100 * infill)}</span>
			</p>
			<Slider
				size={0.0001}
				min={INFILL.min}
				max={INFILL.max}
				value={[parseFloat(infill.toFixed(4))]}
				onValueChange={(values) => actions.set.infill(values[0])}
			/>
			<span
				className={cn(
					'justify-self-end text-xs italic',
					'opacity-0 transition fade-in duration-300',
					infill > 0.3 && 'opacity-100',
				)}
			>
				({tEditor('unrecommended')})
			</span>
		</div>
	);
};

export default InfillRange;
