import { cn } from '@/lib/utils/tailwindcss';

type Props = { name: string; value: string };
const Detail = ({ name, value }: Props) => (
	<p
		className={cn(
			'flex gap-x-2 rounded-lg',
			'bg-background text-foreground shadow-shadow shadow-md',
			'text-sm md:text-lg font-bold px-4 py-2',
			'transition-colors duration-400',
		)}
	>
		<span>{name}:</span>
		<span>{value}</span>
	</p>
);

export default Detail;
