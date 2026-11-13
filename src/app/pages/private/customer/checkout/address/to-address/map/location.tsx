import { cn } from '@/lib/utils';

type Color = 'gray' | 'blue' | 'green';
type Props = { visible: boolean; color: Color };
const colorClasses: Record<Color, string> = {
	gray: 'bg-mauve-900',
	blue: 'bg-sky-500',
	green: 'bg-emerald-900',
};

const LocationMarker = ({ visible, color }: Props) => (
	<div
		className={cn(
			visible &&
				'size-5 cursor-pointer rounded-full border-2 border-white shadow-lg transition-transform hover:scale-110',
			colorClasses[color],
		)}
	/>
);

export default LocationMarker;
