import { usePagination } from '@/hooks/headless/usePagination';
import * as LIMITS from '@/app/constants/limits';
import * as pagination from '@/app/components/ui/pagination';
import Limits from './limits';
import Pages from './pages';

type Props = {
	total: number;
	defaultPagination: { page: number; limit: number };
	navigate: (pagination: { page: number; limit: number }) => void;
};
const Pagination = ({ total, defaultPagination, navigate }: Props) => {
	const {
		state: { page, limit },
		handleChange,
	} = usePagination({ total, defaultPagination, onChange: navigate });

	return (
		<pagination.Pagination>
			<pagination.PaginationContent className='grid grid-cols-4 place-items-center gap-y-4'>
				<section className='col-span-2 md:col-span-1 order-2 md:order-1'>
					<Limits
						min={1}
						max={Math.ceil(total / limit)}
						limit={page}
						onChange={handleChange.page}
					/>
				</section>
				<section className='col-span-4 md:col-span-2 order-1 md:order-2 flex items-center'>
					<Pages
						current={page}
						last={Math.ceil(total / limit)}
						onChange={handleChange.page}
					/>
				</section>
				<section className='col-span-2 md:col-span-1 order-3 md:order-3'>
					<Limits
						min={LIMITS.GALLERY.min}
						max={LIMITS.GALLERY.max}
						limit={limit}
						onChange={handleChange.limit}
					/>
				</section>
			</pagination.PaginationContent>
		</pagination.Pagination>
	);
};

export default Pagination;
