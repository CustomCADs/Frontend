import { IconProp } from '@/types/icon';

type HeaderIconProps = { text: string; Icon: IconProp };
const HeaderIcon = ({ text, Icon }: HeaderIconProps) => {
	return (
		<span className='flex justify-center items-center gap-1'>
			{<Icon />}
			{text}
		</span>
	);
};

export default HeaderIcon;
