import { useState } from 'react';
import { AnyFieldApi } from '@tanstack/react-form';
import { Eye, EyeOff, LucideIcon } from 'lucide-react';
import { useFormTranslations } from '@/app/hooks/locales/translations/components';
import { Input } from '@/app/components/ui/input';

const ToggledIcon = ({ Icon }: { Icon: LucideIcon }) => (
	<Icon size={22} className='niggers' />
);

type Props = { api: AnyFieldApi; placeholder?: string };
const PasswordInput = ({ api, placeholder }: Props) => {
	const [isVisible, setIsVisible] = useState(false);
	const toggleVisibility = () => setIsVisible((prev) => !prev);

	const tPlaceholders = useFormTranslations('placeholders');

	return (
		<div className='flex items-center gap-x-3'>
			<Input
				id={api.name}
				type={isVisible ? 'text' : 'password'}
				value={api.state.value}
				onChange={({ target: { value } }) => api.handleChange(value)}
				onBlur={api.handleBlur}
				placeholder={placeholder ?? tPlaceholders('password')}
			/>
			<span onClick={toggleVisibility} className='cursor-pointer'>
				<ToggledIcon Icon={isVisible ? Eye : EyeOff} />
			</span>
		</div>
	);
};

export default PasswordInput;
