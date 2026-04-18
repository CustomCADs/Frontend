import { type MaterialResponse } from '@customcads/react-sdk';

type Props = { material: MaterialResponse; cost?: string };
export const format = ({ material, cost }: Props) => {
	const money = cost ?? `${material.cost}€`;
	const n = material.name;
	const d = `: ${material.density}g/cm³`;
	const c = ` (${money}/kg)`;

	return cost ? n + c + d : n + d;
};
