import { Link, LinkProps } from '@tanstack/react-router';

type FooterLinkProps = LinkProps & { text: string };

const FooterLink = ({ text, ...props }: FooterLinkProps) => {
	return (
		<span className='text-md font-bold underline'>
			<Link {...props} className='hover:italic hover:text-indigo-700'>
				{text}
			</Link>
		</span>
	);
};

export default FooterLink;
