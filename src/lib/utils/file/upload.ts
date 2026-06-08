type Props = { url: string; file: File };
export const uploadFile = async ({ file, url }: Props) => {
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
