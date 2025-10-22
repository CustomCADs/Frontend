import {
	SiFacebook,
	SiGithub,
	SiInstagram,
	SiX,
} from '@icons-pack/react-simple-icons';
import FooterHeading from './heading';
import FooterIcon from './icon';
import FooterLink from './link';

const Footer = () => {
	return (
		<footer className='flex flex-col bg-footer text-footer-foreground rounded-t-sm'>
			<ul className='flex justify-between items-center mx-5 py-10'>
				<li className='basis-1/3 flex justify-center items-center gap-x-6'>
					<FooterLink to='.' text='Privacy Policy' />
					<FooterLink to='.' text='Terms & Conditions' />
				</li>
				<li className='basis-1/3 flex justify-center gap-4'>
					<FooterIcon
						link='https://www.instagram.com/custom_cads'
						Icon={SiInstagram}
					/>
					<FooterIcon
						link='https://twitter.com/customcads/'
						Icon={SiX}
					/>
					<FooterIcon
						link='https://www.facebook.com/p/Customcads-61569972183042/'
						Icon={SiFacebook}
					/>
					<FooterIcon
						link='https://github.com/NinjataWRLD/CustomCADSolutions/'
						Icon={SiGithub}
					/>
				</li>
				<li className='basis-1/3 flex justify-center items-center gap-x-4'>
					<FooterLink to='.' text='About Us' />
					<FooterLink to='.' text='Apply for Designer' />
				</li>
			</ul>
			<div className='flex justify-center items-center bg-footer-accent text-footer-accent-foreground py-2 rounded-t-lg'>
				<FooterHeading />
			</div>
			<div className='flex justify-evenly items-center'></div>
		</footer>
	);
};

export default Footer;
