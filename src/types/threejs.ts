export type Coordinates = { x: number; y: number; z: number };
export type Ratio = { x: number; y: number; z: number };

export type CustomizeCad = {
	texture: string;
	color?: string;
};

export type CalculateCad = {
	volume: number;
	density: number;
	euroPerKg: number;
	size: Ratio;
	scale: number;
	infill: number;
};
