type Props = { message: string | undefined };
export const Error = ({ message }: Props) => (
	<span className='whitespace-pre-wrap mt-2 rounded text-destructive-foreground text-sm font-bold'>
		{message}
	</span>
);
