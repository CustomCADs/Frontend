const getFileExtension = (file: File) =>
	file.name.slice(file.name.lastIndexOf('.')).toLowerCase();

export const ALLOWED_CONTENT_TYPES = [
	'model/gltf-binary',
	'model/stl',
	'application/octet-stream',
] as const;
export type AllowedContentType = (typeof ALLOWED_CONTENT_TYPES)[number];
export type AllowedType = 'glb' | 'stl';

const isAllowedContentType = (type: string): type is AllowedContentType =>
	(ALLOWED_CONTENT_TYPES as readonly string[]).includes(type);

export const getCadContentType = (file: File): AllowedContentType => {
	if (file.type) {
		return isAllowedContentType(file.type)
			? file.type
			: 'application/octet-stream';
	}

	const map: Record<string, AllowedContentType> = {
		'.glb': 'model/gltf-binary',
		'.stl': 'model/stl',
	};
	return map[getFileExtension(file)] ?? 'application/octet-stream';
};

export const getCadType = (contentType: AllowedContentType) => {
	const map: Record<AllowedContentType, AllowedType | null> = {
		'model/gltf-binary': 'glb',
		'model/stl': 'stl',
		'application/octet-stream': null,
	};
	return map[contentType];
};
