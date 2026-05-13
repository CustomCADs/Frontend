import { MyAccountAccess } from '@/app/locales/types/pages/private/common';

export default {
	logins: 'Logged Devices',
	logins_one: 'Logged Device (only one)',
	logins_other: 'Logged Devices ({{count}})',
	'warn-btn': 'Logout',
	'warn-title': 'This is your current Device',
	'warn-description': "You can't kick yourself out.",
	logout: 'Log Out',
	understood: 'Understood',
	'remove-btn': 'Kick out',
	'remove-title': 'Are you absolutely sure?',
	'remove-description':
		'This device will have its session erased in under 5 minutes.',
	cancel: 'Cancel',
	continue: 'Kick',
	'reset-password-idle': 'Reset Password',
	'reset-password-pending': 'Sending email...',
	'reset-password-success': 'Email Sent!',
	'reset-password-error': "Couldn't send email!",
} satisfies MyAccountAccess & { logins_one: string; logins_other: string };
