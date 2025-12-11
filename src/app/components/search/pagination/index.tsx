import { usePagination } from '@/hooks/headless/usePagination';
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
			<pagination.PaginationContent>
				<Limits limit={limit} onChange={handleChange.limit} />
				<Pages
					current={page}
					last={Math.ceil(total / limit)}
					onChange={handleChange.page}
				/>
			</pagination.PaginationContent>
		</pagination.Pagination>
	);
};

export default Pagination;
