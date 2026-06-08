import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@customcads/react-sdk';
import { fetchFile } from '@/lib/utils';
import type { Material } from '@/app/types/material';

export const useTextures = (enabled?: boolean) => {
	const [map, setMap] = useState<Record<string, Material>>({});
	const { mutateAsync: bulkDownload } = useMutation(
		({ images }) => images.bulkDownload,
	);

	const { data: materialsData } = useQuery(
		({ materials }) => materials.all,
		enabled,
	);

	useEffect(() => {
		if (materialsData) {
			const fetchTextures = async () => {
				const downloads = await bulkDownload({
					ids: materialsData.map((x) => x.textureId),
					relationType: 'Material',
				});

				const materials = materialsData
					.map((m, i) => ({ material: m, download: downloads[i] }))
					.map(async ({ material: data, download }) => {
						const { response } = await fetchFile(download);

						return {
							id: data.id,
							density: data.density,
							euroPerKg: data.cost,
							blobUrl: URL.createObjectURL(await response.blob()),
						};
					});

				const newMap = await Promise.all(materials);
				setMap((prevMap) => {
					const updatedMap = { ...prevMap };
					newMap.forEach(({ id, density, euroPerKg, blobUrl }) => {
						updatedMap[id] = { density, euroPerKg, blobUrl };
					});
					return updatedMap;
				});
			};
			fetchTextures();
		}

		return () => {
			Object.values(map)
				.map((x) => x.blobUrl)
				.forEach(URL.revokeObjectURL);
		};
	}, [materialsData]);

	return map;
};
