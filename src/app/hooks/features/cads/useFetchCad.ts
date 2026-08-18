import { useState } from 'react';
import { useMutation, type DownloadRequest } from '@customcads/react-sdk';
import { useQuery } from '@tanstack/react-query';
import { useBlobUrlRevoker } from './useBlobUrlRevoker';
import * as queryOptions from './queryOptions';

export const useFetchCad = (
	cadId: DownloadRequest['id'] | undefined,
	relationType: DownloadRequest['relationType'],
) => {
	const [progress, setProgress] = useState(0);
	const { mutateAsync: downloadUrl } = useMutation(
		({ cads }) => cads.download,
	);

	const options = queryOptions.fetchCad({
		keys: [cadId, relationType],
		enabled: !!cadId,
		getDownloadUrl: () => downloadUrl({ id: cadId!, relationType }),
		onProgress: (progress) => setProgress((prev) => prev + progress),
	});

	const { data: blobUrl } = useQuery(options);
	useBlobUrlRevoker(blobUrl);

	return { blobUrl, progress };
};
