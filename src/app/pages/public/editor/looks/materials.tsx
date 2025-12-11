import { useQuery } from '@customcads/react-sdk';
import { AppError } from '@/types/errors';
import { BrickWall } from 'lucide-react';
import * as editor from '@/app/stores/editor';
import { useEditorStore } from '@/app/hooks/stores/useEditorStore';
import Loader from '@/app/components/loading';
import * as material_utils from '@/app/utils/materials';
import MaterialsDropdown from './dropdown';

const Materials = ({ id }: { id: string }) => {
	const materialId = useEditorStore(id, (state) => state.materialId);
	const actions = editor.getActions(id);

	const { data: materials } = useQuery(({ materials }) => materials.all);
	if (!materials) return <Loader />;

	const current = materials.find((x) => x.id === materialId);
	if (!current)
		throw new AppError({
			title: 'Texture Error',
			message: 'An error occured during the Rendering process',
			tip: 'Reload this page or clear your browser cache.',
		});

	return (
		<MaterialsDropdown
			materials={materials}
			current={materialId}
			onClick={({ id }) => actions.set.materialId(id)}
		>
			<div className='flex items-center gap-x-2'>
				<BrickWall />
				{current && (
					<span>{material_utils.format({ material: current })}</span>
				)}
			</div>
		</MaterialsDropdown>
	);
};

export default Materials;
