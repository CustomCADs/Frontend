import { type AnyFieldApi } from '@tanstack/react-form';

type Props = {
	meta: ReturnType<AnyFieldApi['getMeta']>;
	isSubmitted: boolean; // form has been submitted
	hideIfPristine?: boolean; // should take into consideration whether field has been mutated
};
const Error = ({ meta, isSubmitted, hideIfPristine }: Props) => {
	if (meta.isValid) return;

	const shouldShowError =
		meta.isTouched && // field has been focused
		meta.isBlurred && // field has been unfocused
		(hideIfPristine ? meta.isDirty : true);

	if (!(isSubmitted || shouldShowError)) return;

	return (
		<small className='relative right-0 text-destructive-foreground text-sm'>
			{meta.errors[0].message}
		</small>
	);
};

export default Error;
