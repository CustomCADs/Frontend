/* eslint-disable i18next/no-literal-string */
/* eslint-disable max-lines */
import { cn } from '@/lib/utils';
import * as page from '@/app/utils/page';

const PrivacyPolicy = () => (
	<div className={cn(page.className, 'gap-y-8')}>
		<p className='text-center'>
			<h1 className='text-2xl font-extrabold'>Privacy Policy</h1>
			<span className='text-lg italic'>Last Updated: June 2026</span>
		</p>
		<ol className='flex flex-col gap-y-4'>
			<li>
				<h2 className='text-xl font-bold'>1. Introduction</h2>
				<p>
					CustomCADs ("we," "us," or "Company") is committed to
					protecting your privacy. This Privacy Policy explains how we
					collect, use, disclose, and otherwise process your personal
					information when you visit our website, use our services,
					and interact with our 3D models marketplace platform
					(collectively, the "Service"). This policy applies to
					residents of the European Union, United Kingdom, and the
					United States, and complies with the General Data Protection
					Regulation (GDPR), UK Data Protection Act 2018, and U.S.
					privacy laws including the California Consumer Privacy Act
					(CCPA) and similar state laws.
				</p>
			</li>
			<li>
				<h2 className='text-xl font-bold'></h2>
				<ol>
					<li>
						<h3 className='text-lg font-semibold'>
							2.1 Information You Provide
						</h3>
						<ul>
							<li>
								Account Registration: Name, email address,
								password, phone number (optional), billing and
								shipping addresses, payment method information
							</li>
							<li>
								Profile Information: Profile picture, bio,
								portfolio links, and preferences
							</li>
							<li>
								Transaction Data: Purchase history, cart
								contents, billing details, order information,
								and print customization preferences
							</li>
							<li>
								Communications: Messages, support requests,
								feedback, reviews, and correspondence
							</li>
							<li>
								Content Upload: 3D model files, metadata,
								descriptions, tags, and licensing information
								you submit
							</li>
						</ul>
					</li>
					<li>
						<h3 className='text-lg font-semibold'>
							2.2 Automatically Collected Information
						</h3>
						<ul>
							<li>
								Device Information: Device type, operating
								system, browser type, IP address, device
								identifiers
							</li>
							<li>
								Usage Data: Pages visited, time spent, clicks,
								interactions, search queries, referral sources
							</li>
							<li>
								Cookies and Tracking: Session cookies,
								authentication tokens, preference cookies, and
								analytics data
							</li>
							<li>
								Location Data: General location derived from IP
								address (country/region level)
							</li>
						</ul>
					</li>
					<li>
						<h3 className='text-lg font-semibold'>
							2.3 Third-Party Information
						</h3>
						<ul>
							<li>
								Payment Processors: Stripe processes payment
								information; we do not store full credit card
								numbers
							</li>
							<li>
								Shipping Partners: Speedy and other carriers
								process shipping information
							</li>
							<li>
								Analytics Providers: Third-party analytics
								services
							</li>
						</ul>
					</li>
				</ol>
			</li>
			<li>
				<h2 className='text-xl font-bold'>
					3. How We Use Your Information
				</h2>
				<span>
					We process your personal information for the following
					purposes:
				</span>
				<ul>
					<li>
						Service Delivery: Creating and maintaining your account,
						processing transactions, fulfilling orders, providing
						customer support
					</li>
					<li>
						Communication: Sending transactional emails, responding
						to inquiries, providing service updates, sending
						important notices
					</li>
					<li>
						Marketing: With your consent, sending promotional
						emails, newsletters, and information about new features
					</li>
					<li>
						Analytics: Understanding how you use our Service,
						improving functionality, and analyzing trends
					</li>
					<li>
						Security and Fraud Prevention: Detecting and preventing
						fraud, protecting against malicious activity,
						maintaining system security
					</li>
					<li>
						Legal Compliance: Fulfilling legal obligations,
						enforcing our Terms of Service, resolving disputes
					</li>
					<li>
						Platform Functionality: Showing your purchased or
						created models, personalizing your experience, managing
						your library
					</li>
				</ul>
			</li>
			<li>
				<h2 className='text-xl font-bold'>
					4. Legal Basis for Processing (GDPR)
				</h2>
				<span>
					Under GDPR, we process your personal information on the
					following legal bases:
				</span>
				<ul>
					<li>
						Contract Performance: Processing is necessary to provide
						the Service and fulfill our agreements with you
					</li>
					<li>
						Legitimate Interests: We have a legitimate interest in
						understanding user behavior, improving our Service, and
						preventing fraud
					</li>
					<li>
						Consent: Marketing communications and non-essential
						cookies are based on your explicit consent
					</li>
					<li>
						Legal Obligation: Compliance with laws and regulations
					</li>
				</ul>
			</li>
			<li>
				<h2 className='text-xl font-bold'>
					5. How We Share Your Information
				</h2>
				<span>We may share your personal information with:</span>
				<ul>
					<li>
						Service Providers: Payment processors (Stripe), shipping
						carriers (Speedy), analytics providers, and cloud
						infrastructure providers who process data on our behalf
						you
					</li>
					<li>
						Legal Compliance: Law enforcement, government agencies,
						and courts when required by law or to protect our legal
						rights
					</li>
					<li>
						Business Transfers: In the event of a merger,
						acquisition, or sale of assets, your information may be
						transferred as part of that transaction
					</li>
					<li>
						Public Content: Your profile information and published
						3D models may be visible to other users on the platform
					</li>
				</ul>
				<span>
					We do not sell your personal information to third parties
					for their independent marketing purposes.
				</span>
			</li>
			<li>
				<h2 className='text-xl font-bold'>6. Data Retention</h2>
				<p>
					We retain your personal information for as long as necessary
					to provide the Service and fulfill the purposes outlined in
					this policy. Specifically: (1) account data is retained
					while your account is active and for 2 years after deletion
					unless required by law; (2) transaction data is retained for
					7 years for tax and regulatory compliance; (3) marketing
					communications data is retained until you unsubscribe; (4)
					technical/analytics data is retained for 12 months unless
					aggregate analysis is longer necessary. You may request
					deletion of your account at any time through your Account
					settings or by contacting us.
				</p>
			</li>
			<li>
				<h2 className='text-xl font-bold'>
					7. Your Rights and Choices
				</h2>
				<ol>
					<li>
						<h3 className='text-lg font-semibold'>
							7.1 GDPR Rights (EU/UK Residents)
						</h3>
						<span>
							If you are a resident of the EU or UK, you have the
							following rights:
						</span>
						<ul>
							<li>
								Right of Access: Request a copy of the personal
								information we hold about you
							</li>
							<li>
								Right to Rectification: Correct inaccurate or
								incomplete information
							</li>
							<li>
								Right to Erasure: Request deletion of your
								personal information (subject to legal
								obligations)
							</li>
							<li>
								Right to Restrict Processing: Request limitation
								of how we use your data
							</li>
							<li>
								Right to Data Portability: Request your data in
								a structured, machine-readable format
							</li>
							<li>
								Right to Object: Object to processing based on
								legitimate interests or for direct marketing
							</li>
							<li>
								Right to Lodge a Complaint: File a complaint
								with your local data protection authority
							</li>
						</ul>
					</li>
					<li>
						<h3 className='text-lg font-semibold'>
							7.2 CCPA Rights (California Residents)
						</h3>
						<span>
							If you are a California resident, you have the
							following rights:
						</span>
						<ul>
							<li>
								Right to Know: Request the categories and
								specific personal information we collect and how
								we use it
							</li>
							<li>
								Right to Delete: Request deletion of personal
								information collected from you
							</li>
							<li>
								Right to Opt-Out: Request that we do not sell or
								share your personal information
							</li>
						</ul>
					</li>
					<li>
						<h3 className='text-lg font-semibold'>
							7.3 General Controls
						</h3>
						<ul>
							<li>
								Email Preferences: Update communication
								preferences in your account settings or click
								unsubscribe in marketing emails
							</li>
							<li>
								Cookie Management: Control cookie preferences
								through your browser settings
							</li>
							<li>
								Do Not Track: Some browsers include do-not-track
								features; we currently do not respond to these
								signals
							</li>
						</ul>
					</li>
				</ol>
			</li>
			<li>
				<h2 className='text-xl font-bold'>8. Cookies and Tracking</h2>
				<span>We use cookies and similar technologies to:</span>
				<ul>
					<li>
						Essential Cookies: Maintain your session and
						authenticate your account (e.g., JWT authentication
						tokens)
					</li>
					<li>
						Preference Cookies: Remember your language, locale, and
						interface preferences
					</li>
					<li>
						Analytics Cookies: Understand how users interact with
						our Service (analytics data is collected with consent)
					</li>
				</ul>
			</li>
			<li>
				<h2 className='text-xl font-bold'>9. Security</h2>
				<p>
					We implement industry-standard security measures to protect
					your personal information, including encryption in transit
					(TLS), secure password hashing, and access controls.
					However, no method of transmission over the Internet is
					completely secure. We cannot guarantee absolute security. If
					you believe your account has been compromised, please
					contact us immediately.
				</p>
			</li>
			<li>
				<h2 className='text-xl font-bold'>10. Third-Party Links</h2>
				<p>
					Our Service may contain links to third-party websites and
					services. This Privacy Policy does not apply to those third
					parties, and we are not responsible for their privacy
					practices. We encourage you to review their privacy policies
					before providing personal information.
				</p>
			</li>
			<li>
				<h2 className='text-xl font-bold'>
					11. International Data Transfers
				</h2>
				<p>
					Our Service is operated from Bulgaria. If you are located
					outside Bulgaria, your information may be transferred to,
					stored in, and processed in Bulgaria and other countries
					where our service providers operate. By using our Service,
					you consent to the transfer of your information to countries
					outside your country of residence, which may have different
					data protection laws. For EU/UK residents, we rely on
					Standard Contractual Clauses (SCCs) and other appropriate
					safeguards for international transfers.
				</p>
			</li>
			<li>
				<h2 className='text-xl font-bold'>12. Children's Privacy</h2>
				<p>
					Our Service is not directed to children under 13. We do not
					knowingly collect personal information from children under
					13. If we become aware that we have collected information
					from a child under 13, we will take steps to delete such
					information promptly. If you are a parent or guardian and
					believe your child has provided information to us, please
					contact us immediately.
				</p>
			</li>
			<li>
				<h2 className='text-xl font-bold'>
					13. California Privacy Rights
				</h2>
				<span>
					California residents have additional rights under CCPA and
					CPRA:
				</span>
				<ul>
					<li>
						Sale/Sharing of Information: We do not sell or share
						your personal information for cross-context behavioral
						advertising
					</li>
					<li>
						Sensitive Information: We limit use of sensitive
						information (payment data, health data) to purposes
						necessary to provide the Service
					</li>
					<li>
						Discrimination: We will not discriminate against you for
						exercising your privacy rights
					</li>
				</ul>
			</li>
			<li>
				<h2 className='text-xl font-bold'>14. Contact Us</h2>
				<span>
					If you have questions about this Privacy Policy or your
					personal information, please contact us:
				</span>
				<ul>
					<li className='flex gap-x-2'>
						<span>Email:</span>
						<span>customcads2023@gmail.com</span>
					</li>
					<li className='flex gap-x-2'>
						<span>Address</span>
						<span>CustomCADs, Sofia, Bulgaria</span>
					</li>
					<li className='flex gap-x-2'>
						<span>Response Time</span>
						<span>
							We aim to respond within 30 days of receiving your
							request
						</span>
					</li>
				</ul>
			</li>
			<li>
				<h2 className='text-xl font-bold'>
					15. Data Protection Officer
				</h2>
				<span>
					EU and UK residents may contact our Data Protection Officer
					regarding data protection matters at privacy@customcads.com.
				</span>
			</li>
			<li>
				<h2 className='text-xl font-bold'>
					16. Changes to This Privacy Policy
				</h2>
				<p>
					We may update this Privacy Policy from time to time. We will
					notify you of material changes by posting the new policy on
					our website and updating the "Last Updated" date. Your
					continued use of the Service following the posting of
					changes constitutes your acceptance of those changes. We
					encourage you to review this policy regularly.
				</p>
			</li>
		</ol>
		<span>End of Privacy Policy</span>
	</div>
);

export default PrivacyPolicy;
