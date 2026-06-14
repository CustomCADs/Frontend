import { cn } from '@/lib/utils';
import * as page from '@/app/utils/page';

const TermsOfService = () => (
	<div className={cn(page.className, 'gap-y-8')}>
		<p className='text-center'>
			<h1 className='text-2xl font-extrabold'>Terms of Service</h1>
			<span className='text-lg italic'>Last Updated: June 2026</span>
		</p>
		<ol className='flex flex-col gap-y-4'>
			<li>
				<h2 className='text-xl font-bold'>1. Acceptance of Terms</h2>
				<p>
					By accessing and using CustomCADs ("Service," "Platform,"
					"we," "us," or "Company"), you agree to be bound by these
					Terms of Service and all applicable laws and regulations. If
					you do not agree to these terms, you may not use the
					Service. We reserve the right to modify these terms at any
					time. Material changes will be posted on our website with a
					notice period; your continued use constitutes acceptance.
				</p>
			</li>
			<li>
				<h2 className='text-xl font-bold'>
					2. Account Registration and Responsibilities
				</h2>
				<ol>
					<li>
						<h3 className='text-lg font-semibold'>
							2.1 Registration Requirements
						</h3>
						<p>
							To use certain features of the Service, you must
							create an account. You agree to provide accurate,
							current, and complete information and maintain the
							confidentiality of your password. You are
							responsible for all activities conducted through
							your account. You must be at least 13 years old to
							create an account (18 in certain jurisdictions).
						</p>
					</li>
					<li>
						<h3 className='text-lg font-semibold'>
							2.2 Account Security
						</h3>
						<p>
							You are solely responsible for maintaining the
							confidentiality of your account credentials and for
							all activities that occur under your account. You
							agree to notify us immediately of any unauthorized
							access or use of your account. We are not liable for
							any loss or damage resulting from unauthorized
							access to your account.
						</p>
					</li>
					<li>
						<h3 className='text-lg font-semibold'>
							2.3 Account Termination
						</h3>
						<p>
							You may terminate your account at any time by
							requesting deletion through your Account settings.
							We may suspend or terminate your account at any
							time, with or without cause, including for violation
							of these terms. Upon termination, your right to use
							the Service ceases immediately.
						</p>
					</li>
				</ol>
			</li>
			<li>
				<h2 className='text-xl font-bold'>
					3. Intellectual Property Rights
				</h2>
				<ol>
					<li>
						<h3 className='text-lg font-semibold'>
							3.1 CustomCADs IP
						</h3>
						<p>
							All content on the CustomCADs platform, including
							but not limited to the website design, layout,
							graphics, logos, software, and documentation, is
							owned by or licensed to CustomCADs and protected by
							copyright and other intellectual property laws. You
							may not reproduce, modify, distribute, or exploit
							this content without our express written permission.
						</p>
					</li>
					<li>
						<h3 className='text-lg font-semibold'>
							3.2 User-Generated Content (3D Models)
						</h3>
						<p>
							You retain ownership of all intellectual property
							rights to any 3D models, designs, and content you
							upload to the Platform ("Your Content"). By
							uploading content, you grant CustomCADs a
							non-exclusive, royalty-free, worldwide license to:
						</p>
						<ul>
							<li>
								Display and distribute Your Content on the
								Platform
							</li>
							<li>
								Create and display previews, thumbnails, and
								promotional materials
							</li>
							<li>
								Allow other users to view, download, purchase,
								and use Your Content according to the license
								terms you specify
							</li>
							<li>
								Analyze and process Your Content for quality
								assurance and platform improvement
							</li>
						</ul>
						<p>
							You represent and warrant that you own or have the
							necessary rights to all content you upload and that
							it does not infringe any third-party intellectual
							property rights.
						</p>
					</li>
					<li>
						<h3 className='text-lg font-semibold'>
							3.3 User Licenses for Downloaded Models
						</h3>
						<p>
							When you purchase or download a 3D model from the
							Platform, you receive a license to use that model
							subject to the license terms specified by the
							creator. Common license types include:
						</p>
						<ul>
							<li>
								<strong>Personal Use Only:</strong> Model may be
								used privately but not commercially
							</li>
							<li>
								<strong>Commercial Use:</strong> Model may be
								used for commercial purposes
							</li>
							<li>
								<strong>Modification Rights:</strong> You may
								modify the model for your own use
							</li>
							<li>
								<strong>Redistribution:</strong> Subject to
								creator restrictions, you may share or resell
								the model
							</li>
						</ul>
						<p>
							Your use of downloaded models is strictly limited to
							the specified license terms. Unauthorized use may
							result in account termination and legal liability.
						</p>
					</li>
					<li>
						<h3 className='text-lg font-semibold'>
							3.4 Removal of Infringing Content
						</h3>
						<p>
							If you believe that content on the Platform
							infringes your intellectual property rights, you may
							file a DMCA notice or contact us at
							legal@customcads.com with details of the
							infringement. We will investigate and remove
							infringing content in accordance with applicable
							law.
						</p>
					</li>
				</ol>
			</li>
			<li>
				<h2 className='text-xl font-bold'>4. Prohibited Conduct</h2>
				<p>You agree not to:</p>
				<ul>
					<li>
						Upload, publish, or distribute content that violates any
						law or regulation
					</li>
					<li>
						Upload copyrighted material, trademarked material, or
						content you do not own or have rights to
					</li>
					<li>
						Infringe on any third-party intellectual property
						rights, including patents, trademarks, or copyrights
					</li>
					<li>
						Create models of weapons, explosives, or items designed
						to cause harm
					</li>
					<li>
						Create content that is obscene, sexually explicit, or
						contains child exploitation material
					</li>
					<li>
						Harass, threaten, defame, or discriminate against other
						users
					</li>
					<li>Engage in fraud, impersonation, or deception</li>
					<li>
						Attempt to reverse-engineer, decompile, or hack the
						Platform
					</li>
					<li>
						Use the Platform for illegal activities or money
						laundering
					</li>
					<li>
						Scrape, crawl, or bulk-download models without
						authorization
					</li>
					<li>
						Spam, phish, or send unsolicited communications through
						the Platform
					</li>
					<li>Circumvent payment systems or commit payment fraud</li>
					<li>
						Resell models in violation of the creator's license
						terms
					</li>
				</ul>
			</li>
			<li>
				<h2 className='text-xl font-bold'>5. Payments and Pricing</h2>
				<ol>
					<li>
						<h3 className='text-lg font-semibold'>
							5.1 Pricing and Payments
						</h3>
						<p>
							All prices are displayed in the currency selected
							during checkout. We accept payment via Stripe. By
							making a purchase, you authorize us to charge your
							payment method. Prices are subject to change without
							notice, but pricing displayed at the time of
							purchase applies to that transaction only.
						</p>
					</li>
					<li>
						<h3 className='text-lg font-semibold'>
							5.2 Taxes and Shipping
						</h3>
						<p>
							Taxes (where applicable) and shipping costs are
							calculated and displayed before checkout. For
							digital models, no shipping applies. For
							print-on-demand services, shipping is provided by
							Speedy and other third-party carriers. You are
							responsible for any customs duties, import taxes, or
							VAT on international shipments.
						</p>
					</li>
					<li>
						<h3 className='text-lg font-semibold'>
							5.3 Refunds and Returns
						</h3>
						<p>
							<strong>Digital Models:</strong> Due to the nature
							of digital products, refunds are not available for
							downloaded models unless the file is defective or
							does not match the product description. In such
							cases, contact us within 7 days of purchase.
						</p>
						<p>
							<strong>Print Services:</strong> Returns and refunds
							for physical prints are subject to the following:
						</p>
						<ul>
							<li>
								Returns must be requested within 30 days of
								delivery
							</li>
							<li>
								Items must be in unused condition with original
								packaging
							</li>
							<li>
								Defective items due to printing errors are fully
								refundable
							</li>
							<li>
								Buyer's remorse returns may incur a 20%
								restocking fee plus return shipping
							</li>
							<li>
								Refunds are processed within 14 days of return
								receipt
							</li>
						</ul>
					</li>
					<li>
						<h3 className='text-lg font-semibold'>
							5.4 Payment Disputes
						</h3>
						<p>
							If you dispute a charge, you must contact us within
							60 days. We will investigate and respond within 30
							days. Chargebacks and payment disputes may result in
							account suspension.
						</p>
					</li>
				</ol>
			</li>
			<li>
				<h2 className='text-xl font-bold'>6. Third-Party Services</h2>
				<p>
					The Platform integrates with third-party services including
					Stripe (payments), Speedy (shipping), and cloud
					infrastructure providers. Your use of these services is
					governed by their separate terms and privacy policies.
					CustomCADs is not responsible for third-party service
					outages, errors, or disputes. We recommend reviewing their
					terms before using their services through our Platform.
				</p>
			</li>
			<li>
				<h2 className='text-xl font-bold'>
					7. Limitation of Liability
				</h2>
				<ol>
					<li>
						<h3 className='text-lg font-semibold'>
							7.1 Disclaimer of Warranties
						</h3>
						<p>
							The Service is provided "AS IS" and "AS AVAILABLE"
							without warranties of any kind, express or implied.
							We disclaim all warranties including
							merchantability, fitness for a particular purpose,
							and non-infringement. We do not warrant that the
							Service will be uninterrupted, error-free, or
							secure.
						</p>
					</li>
					<li>
						<h3 className='text-lg font-semibold'>
							7.2 Limitation of Damages
						</h3>
						<p>
							To the fullest extent permitted by law, CustomCADs
							shall not be liable for any indirect, incidental,
							special, consequential, or punitive damages,
							including loss of profits, data loss, or business
							interruption, even if advised of the possibility of
							such damages. Our total liability is limited to the
							amount you paid us in the 12 months preceding the
							claim.
						</p>
					</li>
					<li>
						<h3 className='text-lg font-semibold'>
							7.3 User-Generated Content Liability
						</h3>
						<p>
							CustomCADs is not liable for any user-generated
							content on the Platform, including infringing,
							offensive, or defamatory content. We are not
							responsible for disputes between users regarding
							model ownership, licensing, or quality. Your sole
							remedy is to report such content through our
							reporting mechanism.
						</p>
					</li>
					<li>
						<h3 className='text-lg font-semibold'>
							7.4 Print Services Liability
						</h3>
						<p>
							For print-on-demand services, CustomCADs is not
							responsible for print quality issues caused by model
							design, file preparation, or third-party printing
							errors. We are not liable for delays, loss, or
							damage to shipments handled by shipping carriers.
							Your recourse is limited to refunds as specified in
							Section 5.3.
						</p>
					</li>
				</ol>
			</li>
			<li>
				<h2 className='text-xl font-bold'>8. Indemnification</h2>
				<p>
					You agree to indemnify and hold harmless CustomCADs and its
					officers, employees, and agents from any claims, damages, or
					liabilities arising from: (1) your use of the Service in
					violation of these terms; (2) your content or conduct on the
					Platform; (3) your infringement of any third-party
					intellectual property rights; or (4) any disputes arising
					from your transactions or interactions with other users.
				</p>
			</li>
			<li>
				<h2 className='text-xl font-bold'>9. Dispute Resolution</h2>
				<ol>
					<li>
						<h3 className='text-lg font-semibold'>
							9.1 Informal Resolution
						</h3>
						<p>
							Before initiating formal proceedings, you agree to
							contact us and attempt to resolve the dispute
							informally. Please email support@customcads.com with
							details of your dispute.
						</p>
					</li>
					<li>
						<h3 className='text-lg font-semibold'>
							9.2 Governing Law and Jurisdiction
						</h3>
						<p>
							These Terms are governed by the laws of Bulgaria,
							without regard to its conflict of law principles.
							For EU/UK residents, you may pursue claims in the
							courts of your country of residence in accordance
							with GDPR and applicable consumer protection laws.
							For U.S. residents, you agree to submit to the
							exclusive jurisdiction of the courts located in
							Sofia, Bulgaria, or arbitration as specified below.
						</p>
					</li>
					<li>
						<h3 className='text-lg font-semibold'>
							9.3 Arbitration (US Residents)
						</h3>
						<p>
							Except for claims involving intellectual property
							rights, either party may elect binding arbitration
							administered by JAMS or AAA under their rules.
							Arbitration shall be conducted in English and shall
							be held remotely unless the parties agree otherwise.
							Each party bears its own costs; we may reimburse
							reasonable attorney fees for claims under $10,000.
						</p>
					</li>
					<li>
						<h3 className='text-lg font-semibold'>
							9.4 Class Action Waiver
						</h3>
						<p>
							You agree that any dispute shall be brought in your
							individual capacity and not as a plaintiff in any
							class action or representative proceeding.
						</p>
					</li>
				</ol>
			</li>
			<li>
				<h2 className='text-xl font-bold'>
					10. Marketplace Conduct and Dispute Resolution
				</h2>
				<ol>
					<li>
						<h3 className='text-lg font-semibold'>
							10.1 Model Quality Standards
						</h3>
						<p>
							All models uploaded must meet basic quality
							standards: properly formatted 3D files, adequate
							preview images, and accurate descriptions. We
							reserve the right to remove models that do not meet
							these standards or are incomplete.
						</p>
					</li>
					<li>
						<h3 className='text-lg font-semibold'>
							10.2 Pricing and Fees
						</h3>
						<p>
							CustomCADs charges a platform fee on all
							transactions. The current fee structure is displayed
							on your dashboard. Fees are non-refundable and may
							change with 30 days' notice.
						</p>
					</li>
					<li>
						<h3 className='text-lg font-semibold'>
							10.3 Buyer-Seller Disputes
						</h3>
						<p>
							For disputes between buyers and sellers (e.g., model
							quality complaints, licensing disputes), both
							parties agree to use our dispute resolution system.
							We will mediate disputes in good faith but reserve
							the right to take no action if we determine the
							dispute is frivolous or outside our scope.
						</p>
					</li>
					<li>
						<h3 className='text-lg font-semibold'>
							10.4 Content Moderation
						</h3>
						<p>
							We review reported content and take action against
							violations of these terms including content removal,
							account warnings, or account suspension. Our
							decisions are final, though you may appeal by
							contacting support@customcads.com within 7 days.
						</p>
					</li>
				</ol>
			</li>
			<li>
				<h2 className='text-xl font-bold'>
					11. Service Modifications and Availability
				</h2>
				<p>
					CustomCADs may modify, suspend, or discontinue the Service
					or any features at any time, with or without notice. We are
					not liable for any disruption or loss of functionality. We
					do not guarantee continuous availability and are not liable
					for downtime, data loss, or service interruptions.
				</p>
			</li>
			<li>
				<h2 className='text-xl font-bold'>12. Acceptable Use Policy</h2>
				<p>
					In addition to the prohibited conduct in Section 4, you
					agree to use the Service only for lawful purposes and in a
					manner that does not restrict or inhibit anyone's use or
					enjoyment of the Service. You are responsible for your own
					communications and assume all risks associated with your use
					of the Service.
				</p>
			</li>
			<li>
				<h2 className='text-xl font-bold'>
					13. Feedback and Suggestions
				</h2>
				<p>
					Any feedback, suggestions, or ideas you provide about the
					Service are voluntary and non-confidential. By submitting
					feedback, you grant CustomCADs a non-exclusive,
					royalty-free, worldwide license to use such feedback without
					compensation to you.
				</p>
			</li>
			<li>
				<h2 className='text-xl font-bold'>14. Severability</h2>
				<p>
					If any provision of these Terms is found to be
					unenforceable, that provision shall be modified to the
					minimum extent necessary to make it enforceable, or if not
					possible, severed. The remaining provisions shall continue
					in full effect.
				</p>
			</li>
			<li>
				<h2 className='text-xl font-bold'>15. Entire Agreement</h2>
				<p>
					These Terms of Service, together with our Privacy Policy and
					any other policies we publish, constitute the entire
					agreement between you and CustomCADs regarding the Service
					and supersede all prior agreements and understandings.
				</p>
			</li>
			<li>
				<h2 className='text-xl font-bold'>16. Contact Information</h2>
				<p>
					For questions about these Terms of Service, please contact
					us at:
				</p>
				<ul>
					<li className='flex gap-x-2'>
						<span>Email:</span>
						<span>legal@customcads.com</span>
					</li>
					<li className='flex gap-x-2'>
						<span>Address:</span>
						<span>CustomCADs, Sofia, Bulgaria</span>
					</li>
					<li className='flex gap-x-2'>
						<span>Response Time:</span>
						<span>We aim to respond within 14 business days</span>
					</li>
				</ul>
			</li>
		</ol>
		<span>End of Terms of Service</span>
	</div>
);

export default TermsOfService;
