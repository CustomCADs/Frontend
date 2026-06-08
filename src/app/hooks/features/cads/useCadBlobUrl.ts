import { useEffect, useRef, useState } from 'react';
import { DownloadRequest, useMutation } from '@customcads/react-sdk';
import { fetchFile } from '@/lib/utils';

export const useCadBlobUrl = (
	cadId: DownloadRequest['id'] | undefined,
	relationType: DownloadRequest['relationType'],
) => {
	const { mutateAsync: downloadUrl } = useMutation(
		({ cads }) => cads.download,
	);
	const [blobUrl, setBlobUrl] = useState<string | null>(null);
	const [progress, setProgress] = useState(0);
	const isFetchingRef = useRef(false);

	const fetch = async (id: string) => {
		isFetchingRef.current = true;

		const { length, response } = await fetchFile(
			await downloadUrl({ id, relationType }),
		);

		const reader = response.body?.getReader()!;
		const parts: BlobPart[] = [];

		while (true) {
			const { done, value } = await reader.read();
			if (done) break;
			parts.push(value);
			setProgress((prev) => prev + value.length / length);
		}

		const blob = new Blob(parts);
		setBlobUrl(URL.createObjectURL(blob));

		isFetchingRef.current = false;
	};

	const revokeUrl = (url: string | null) => {
		if (url) URL.revokeObjectURL(url);
	};

	useEffect(() => {
		if (cadId && isFetchingRef.current === false) {
			revokeUrl(blobUrl);
			fetch(cadId);
		}

		return () => {
			setBlobUrl((prevBlobUrl) => {
				revokeUrl(prevBlobUrl);
				return null;
			});
		};
	}, [cadId, relationType]);

	return { blobUrl, progress };
};
