import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useCustomerTranslations } from '@/app/hooks/locales/translations/pages/private';
import { Button } from '@/app/components/ui';

type Btn = { disabled: boolean; onClick: VoidFunction };
type Props = { prev: Btn; next: Btn };
const PopupFooter = ({ prev, next }: Props) => {
	const tCheckout = useCustomerTranslations('checkout');

	return (
		<footer className='border-t pt-3 flex flex-col justify-center items-center gap-y-1'>
			<div className='flex justify-center items-center gap-x-2'>
				<Button size='sm' variant='outline' className='h-5' {...prev}>
					<ArrowLeft />
				</Button>
				<span className='col-span-4 text-sm'>
					{tCheckout('wrong-address')}
				</span>
				<Button size='sm' variant='outline' className='h-5' {...next}>
					<ArrowRight />
				</Button>
			</div>
		</footer>
	);
};

export default PopupFooter;
