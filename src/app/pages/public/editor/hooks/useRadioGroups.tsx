import React, { useState } from 'react';
import type { Distance, Mass } from '@/types/units';
import RadioField from '@/app/components/fields/radio';
import { RadioGroup } from '@/app/components/ui/radio-group';

export const useRadioGroups = () => {
	const [distance, setDistance] = useState<Distance>('mm');
	const [mass, setMass] = useState<Mass>('g');

	return {
		distance,
		mass,
		ui: {
			distance: (metrics: Distance[]) => ({
				Wrapper: (props: React.ComponentProps<typeof RadioGroup>) => (
					<RadioGroup
						name='distance'
						value={distance}
						onValueChange={(x) => setDistance(x as Distance)}
						{...props}
					/>
				),
				items: metrics.map((x) => (
					<RadioField key={x} value={x} label={x} />
				)),
			}),
			mass: (metrics: Mass[]) => ({
				Wrapper: (props: React.ComponentProps<typeof RadioGroup>) => (
					<RadioGroup
						name='mass'
						value={mass}
						onValueChange={(x) => setMass(x as Mass)}
						{...props}
					/>
				),
				items: metrics.map((x) => (
					<RadioField key={x} value={x} label={x} />
				)),
			}),
		},
	};
};
