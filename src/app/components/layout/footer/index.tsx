import {
	SiFacebook,
	SiGithub,
	SiInstagram,
	SiX,
} from '@icons-pack/react-simple-icons';
import { useLayoutTranslations } from '@/app/hooks/locales/translations/components';
import FooterHeading from './heading';
import FooterIcon from './icon';
import FooterLink from './link';

const Footer = () => {
	const tFooter = useLayoutTranslations('footer');

	return (
		<footer className='flex flex-col bg-footer 2xl:bg-secondary text-footer-foreground rounded-t-sm transition-colors duration-400 z-10'>
			<ul className='flex flex-col sm:flex-row justify-around items-center mx-5 py-10 gap-x-4 gap-y-10'>
				<li className='order-3 flex justify-center items-center gap-x-6 animate-fade-in delay-800'>
					<FooterLink
						to='/privacy-policy'
						text={tFooter('privacy-policy')}
					/>
					<FooterLink
						to='/terms-of-service'
						text={tFooter('terms-conditions')}
					/>
				</li>
				<li className='order-1 sm:order-2 flex justify-center gap-4 animate-fade-in delay-600'>
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
						link='https://github.com/NinjataWRLD/CustomCADs-Frontend/'
						Icon={SiGithub}
					/>
				</li>
				<li className='order-2 sm:order-1 flex justify-center items-center gap-x-4 animate-fade-in delay-800'>
					<FooterLink to='.' text={tFooter('about-us')} />
					<FooterLink to='.' text={tFooter('customer-support')} />
				</li>
			</ul>
			<div className='flex justify-center items-center bg-footer-accent text-footer-accent-foreground py-2 rounded-t-lg transition-colors duration-400'>
				<FooterHeading />
			</div>
		</footer>
	);
};

export default Footer;
