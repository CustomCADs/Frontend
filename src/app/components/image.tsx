import { DownloadRequest, useQuery } from '@customcads/react-sdk';

type Props = {
	request: DownloadRequest;
	enabled?: boolean;
} & React.ComponentProps<'img'>;
const PresignedImage = ({ request, enabled, ...props }: Props) => {
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

	return (
		<img src={image?.presignedUrl} onError={() => refetch()} {...props} />
	);
};

export default PresignedImage;
