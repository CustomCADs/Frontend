import { Link, LinkProps } from '@tanstack/react-router';

type FooterLinkProps = LinkProps & { text: string };

const FooterLink = ({ text, ...props }: FooterLinkProps) => {
	return (
		<span className='text-footer-foreground text-md font-bold underline hover:text-footer-accent-foreground'>
			<Link {...props} className='ease-in duration-100'>
				{text}
			</Link>
		</span>
	);
};

export default FooterLink;
