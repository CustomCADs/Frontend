import { DownloadRequest, useQuery } from '@customcads/react-sdk';
import { cn } from '@/lib/utils';
import { Skeleton } from './ui';

type Props = {
	request: DownloadRequest;
	skeleton?: string;
	enabled?: boolean;
} & React.ComponentProps<'img'>;
const PresignedImage = ({ request, enabled, skeleton, ...props }: Props) => {
	const { data: image, refetch } = useQuery(({ images }) => {
		const { queryKey, queryFn } = images.download(request);
		return {
			queryKey,
			queryFn,
			enabled,
			staleTime: 1000 * 20,
			gcTime: 1000 * 60,
		};
	});

	return image ? (
		<img src={image.presignedUrl} onError={() => refetch()} {...props} />
	) : (
		<Skeleton className={cn('bg-primary', skeleton)} />
	);
};

export default PresignedImage;
