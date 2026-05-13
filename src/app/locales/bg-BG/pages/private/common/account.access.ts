import { MyAccountAccess } from '@/app/locales/types/pages/private/common';

export default {
	logins: 'Устройства',
	logins_one: 'Устройство (само едно)',
	logins_other: 'Устройства ({{count}})',
	'warn-btn': 'Излез',
	'warn-title': 'Това е текущото Ви устройство',
	'warn-description': 'Не можете сами да се изритате.',
	logout: 'Излез',
	understood: 'Разбрах',
	'remove-btn': 'Изритай',
	'remove-title': 'Напълно ли сте сигурен?',
	'remove-description':
		'Това устройство ще забрави сесията си за под 5 минути.',
	cancel: 'Отмени',
	continue: 'Изритай',
	'reset-password-idle': 'Смяна на Паролата',
	'reset-password-pending': 'Изпращане на имейл...',
	'reset-password-success': 'Имейл Изпратен!',
	'reset-password-error': 'Не успяхме да изпратим имейл!',
} satisfies MyAccountAccess & { logins_one: string; logins_other: string };
