import { Link } from '@tanstack/react-router';
import { useQuery } from '@customcads/react-sdk';
import { uuid } from '@/lib/utils';
import * as dateTime from '@/app/utils/date-time';
import Remove from './remove';

type Props = { id: string; viewedAt: string };
const Item = ({ id, viewedAt }: Props) => {
	const { data: product } = useQuery(({ products }) =>
		products.gallery.single({ id }),
	);

	return (
		<div className='flex justify-between gap-x-2 text-nowrap py-2'>
			<Link
				to='/gallery/$id'
				params={{ id }}
				className='hover:opacity-80'
			>
				<p className='w-[16ch] text-center py-1 rounded-lg border'>
					{product?.name ?? (
						<span className='font-light italic text-muted-foreground'>
							{uuid.extractSegment(id, 'first')}...
						</span>
					)}
				</p>
			</Link>
			<div className='hidden md:flex items-center gap-x-2'>
				<span className='font-light italic'>
					{dateTime.formatRelative({
						date: viewedAt,
						limit: 'minute',
					})}
				</span>
			</div>
			<Remove id={id} />
		</div>
	);
};

export default Item;
