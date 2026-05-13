import { Errors } from '@/app/locales/types/components/form';

export default {
	required: "Полето '{{field}}' е задължително",
	length: "Дължината на '{{field}}' трябва да е между {{min}} и {{max}}",
	pattern: "Полето '{{field}}' не е валидно",
	'equal-passwords': 'Паролите трябва да са еднакви',
} satisfies Errors;
