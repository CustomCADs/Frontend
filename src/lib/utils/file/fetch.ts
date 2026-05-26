type Props = { presignedUrl: string; contentType: string };
export const fetchFile = async ({ contentType, presignedUrl }: Props) => {
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
