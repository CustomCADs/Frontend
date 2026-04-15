import { Errors } from '@/app/locales/types/components/form';

export default {
	required: "The field '{{field}}' is required",
	length: "The length of '{{field}}' must be between {{min}} and {{max}}",
	pattern: "The field '{{field}}' is not valid",
} satisfies Errors;
