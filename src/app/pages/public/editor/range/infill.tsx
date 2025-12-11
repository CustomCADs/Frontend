import { CircleQuestionMark } from 'lucide-react';
import * as units from '@/lib/utils/units';
import { cn } from '@/lib/utils/tailwindcss';
import { INFILL } from '@/app/constants/threejs';
import * as editor from '@/app/stores/editor';
import { useEditorStore } from '@/app/hooks/stores/useEditorStore';
import { useGalleryTranslations } from '@/app/hooks/locales/translations/pages/public';
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/app/components/ui/tooltip';
import RangeUi from './ui';

const InfillRange = ({ id }: { id: string }) => {
	const tEditor = useGalleryTranslations('editor');

	const actions = editor.getActions(id);
	const infill = useEditorStore(id, (state) => state.infill);

	return (
		<RangeUi
			min={INFILL.min}
			max={INFILL.max}
			values={[parseFloat(infill.toFixed(4))]}
			onDrag={(e) => actions.set.infill(e.sortedValues[0])}
			stepSize={0.0001}
		>
			<div className='flex justify-between items-center'>
				<p className='flex gap-x-1 text-base'>
					<Tooltip>
						<TooltipTrigger asChild>
							<CircleQuestionMark size={14} />
						</TooltipTrigger>
						<TooltipContent>
							{tEditor('infill-description')}
						</TooltipContent>
					</Tooltip>
					<span>{tEditor('infill')}: </span>
					<span>{units.percentage(100 * infill)}</span>
				</p>
				<span
					className={cn(
						'justify-self-end text-xs italic',
						'opacity-0 transition fade-in duration-400',
						infill > 0.3 && 'opacity-100',
					)}
				>
					({tEditor('unrecommended')})
				</span>
			</div>
		</RangeUi>
	);
};

export default InfillRange;
