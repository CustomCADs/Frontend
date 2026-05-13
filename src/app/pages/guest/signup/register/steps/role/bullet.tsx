import { DiamondPlus } from 'lucide-react';

type Props = { text: string };
const Bullet = ({ text }: Props) => {
	return (
		<li className='flex gap-x-3 md:gap-x-2'>
			<DiamondPlus />
			<span className='w-9/10 md:w-full'>{text}</span>
		</li>
	);
};

export default Bullet;
