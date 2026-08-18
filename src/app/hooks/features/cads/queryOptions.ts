import { DownloadResponse } from '@customcads/react-sdk';
import { fetchFile } from '@/lib/utils';

type Props = {
	keys: unknown[];
	enabled?: boolean;
	getDownloadUrl: () => Promise<DownloadResponse>;
	onProgress: (progress: number) => void;
};
export const fetchCad = ({
	keys,
	enabled,
	getDownloadUrl,
	onProgress,
}: Props) => ({
	queryKey: ['fetch-cad', ...keys, getDownloadUrl, onProgress],
	queryFn: async () => {
		const { length, response } = await fetchFile(await getDownloadUrl());

		const reader = response.body?.getReader()!;
		const parts: BlobPart[] = [];

		while (true) {
			const { done, value } = await reader.read();
			if (done) break;
			parts.push(value);
			onProgress(value.length / length);
		}

		const blob = new Blob(parts);
		return URL.createObjectURL(blob);
	},
	enabled,
	staleTime: 1000 * 60 * 5,
	gcTime: 1000 * 60 * 30,
});
