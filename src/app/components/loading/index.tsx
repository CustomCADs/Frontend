import { Progress, Spinner } from '@/app/components/ui';

type Props =
	| { isCad: true; progress: number }
	| { isCad?: undefined | false; size?: number };
const Loader = (props: Props) => {
	if (!props.isCad) {
		return <Spinner className={`size-${props.size}`} />;
	}

	if (props.progress === undefined) return;
	return <Progress value={props.progress * 100} />;
};

export default Loader;
