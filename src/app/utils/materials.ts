import { type MaterialResponse } from '@customcads/react-sdk';

type FormatProps = { material: MaterialResponse; cost?: boolean };
export const format = ({ material, cost }: FormatProps) => {
	const n = material.name;
	const d = `: ${material.density}g/cm³`;
	const c = ` (${material.cost}€/kg)`;

	return cost ? n + c + d : n + d;
};
