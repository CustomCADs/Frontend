import { useCustomerTranslations } from '@/app/hooks/locales/translations/pages/private';
import { Button } from '@/app/components/ui';

type Props = {
	status: 'pending' | 'loading' | 'success' | 'failure';
} & React.ComponentProps<typeof Button>;
const Submit = ({ status, ...props }: Props) => {
	const tCheckout = useCustomerTranslations('checkout');

	return (
		<Button type='submit' {...props}>
			{tCheckout(status)}
		</Button>
	);
};

export default Submit;
