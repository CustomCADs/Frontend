import { Progress } from '@/app/components/ui/progress';
import { Spinner } from '@/app/components/ui/spinner';

type LoaderProps =
	| { isCad: true; progress: number }
	| { isCad?: undefined | false; size?: number };
const Loader = (props: LoaderProps) => {
	if (!props.isCad) {
		return <Spinner className={`size-${props.size}`} />;
	}

	if (props.progress === undefined) return;
	return <Progress value={props.progress * 100} />;
};

export default Loader;
