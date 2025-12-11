const Tags = ({ tags }: { tags: string[] }) => (
	<ul className='grid grid-cols-3 md:grid-cols-6 gap-x-4 gap-y-2 justify-center items-center'>
		{tags.map((x) => (
			<li
				key={x}
				className='bg-primary text-primary-foreground text-center px-3 py-1 rounded-xl'
			>
				{x}
			</li>
		))}
	</ul>
);

export default Tags;
