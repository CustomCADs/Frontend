import { Link, LinkProps } from '@tanstack/react-router';

type FooterLinkProps = LinkProps & { text: string };

const FooterLink = ({ text, ...props }: FooterLinkProps) => {
	return (
		<span className='text-md font-bold underline'>
			<Link
				{...props}
				className={
					'text-muted-foreground hover:text-primary-foreground ease-in duration-100'
				}
			>
				{text}
			</Link>
		</span>
	);
};

export default FooterLink;
