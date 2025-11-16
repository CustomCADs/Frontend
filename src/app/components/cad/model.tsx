import { Ref } from 'react';
import Loader from '../loading';

type ModelProps = {
	threejs: {
		ref: Ref<HTMLDivElement>;
		progress: number;
	};
};

const Model = ({ threejs: { ref, progress } }: ModelProps) => [
	progress < 1 && <Loader key='loader' progress={progress} isCad />,
	<div key='model' ref={ref} className='h-full w-full' />,
];

export default Model;
