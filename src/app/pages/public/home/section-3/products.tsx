import {
	GalleryAllProductsResponse,
	TagResponse,
	useQuery,
} from '@customcads/react-sdk';
import { Children } from '@/types/react';
import Loader from '@/app/components/loading';

type Props = {
	limit: number;
	tag: TagResponse;
	children: (product: GalleryAllProductsResponse) => Children['children'];
};
const Products = ({ limit, tag, children }: Props) => {
	const { data } = useQuery(({ products }) =>
		products.gallery.all({ limit, page: 1, tagIds: [tag.id] }),
	);
	if (!data?.items) return <Loader />;

	return <>{data?.items.map(children)}</>;
};

export default Products;
