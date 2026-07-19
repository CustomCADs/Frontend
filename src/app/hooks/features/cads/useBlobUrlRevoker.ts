import { useRef, useEffect } from 'react';

export const useBlobUrlRevoker = (blobUrl: string | undefined) => {
	const prevBlobUrlRef = useRef<string | null>(null);

	const revokeUrl = () => {
		if (prevBlobUrlRef.current) {
			URL.revokeObjectURL(prevBlobUrlRef.current);
		}
	};

	useEffect(() => {
		if (prevBlobUrlRef.current !== blobUrl) revokeUrl();
		prevBlobUrlRef.current = blobUrl ?? null;
	}, [blobUrl]);
};
