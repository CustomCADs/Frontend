type FetchProps = { presignedUrl: string; contentType: string };
export const fetchFile = async ({ contentType, presignedUrl }: FetchProps) => {
	const response = await fetch(presignedUrl, {
		headers: {
			'Content-Type': contentType,
		},
	});

	const length = response.headers.get('Content-Length');
	if (!response.ok || !length) {
		throw new Error(
			`Network response was not ok: ${response.status} ${response.statusText}`,
		);
	}

	return { response, length: parseInt(length) };
};

type UploadProps = { url: string; file: File };
export const uploadFile = async ({ file, url }: UploadProps) => {
	const response = await fetch(url, {
		method: 'PUT',
		headers: {
			'Content-Type': file.type,
			'x-amz-meta-file-name': file.name,
		},
		body: file,
	});

	if (!response.ok) {
		throw new Error(
			`Network response was not ok: ${response.status} ${response.statusText}`,
		);
	}
};
