import type { Children } from '@/types/react';
import RangeField from '@/app/components/fields/range';

type Props = React.ComponentProps<typeof RangeField> & Children;
const RangeUi = ({ children, ...props }: Props) => (
	<div className='flex flex-col gap-y-2'>
		{children}
		<RangeField {...props} />
	</div>
);

export default RangeUi;
