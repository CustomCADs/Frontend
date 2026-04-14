import { getRouteApi } from '@tanstack/react-router';
import * as limits from '@/app/constants/limits';
import Pagination from '@/app/components/search/pagination';

const Route = getRouteApi('/_public/gallery/');

type Props = { count: number };
const GalleryPagination = ({ count }: Props) => {
	const navigate = Route.useNavigate();
	const search = Route.useSearch();

	return (
		<Pagination
			total={count}
			defaultPagination={{
				page: search.page ?? 1,
				limit: search.limit ?? limits.GALLERY.default,
			}}
			navigate={({ page, limit }) =>
				navigate({
					search: (prev) => ({
						...prev,
						page,
						limit,
					}),
				})
			}
		/>
	);
};

export default GalleryPagination;
