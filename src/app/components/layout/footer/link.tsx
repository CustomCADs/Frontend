import { Link, LinkProps } from '@tanstack/react-router';

type Props = LinkProps & { text: string };

const FooterLink = ({ text, ...props }: Props) => (
	<span className='text-footer-foreground text-sm md:text-base font-bold underline hover:text-footer-accent-foreground'>
		<Link {...props} className='ease-in duration-100'>
			{text}
		</Link>
	</span>
);

export default FooterLink;
