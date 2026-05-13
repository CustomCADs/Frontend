import { useState } from 'react';
import { useForm as useTanStackForm } from '@tanstack/react-form';
import { useQueryClient } from '@tanstack/react-query';
import { queryCall, useMutation } from '@customcads/react-sdk';
import * as form from '@/lib/utils/form';
import { useFormTranslations } from '@/app/hooks/locales/translations/components';
import { useForceLocaleRefresh } from '@/app/hooks/locales/useForceLocaleRefresh';
import * as profile from '@/app/validators/profile';

export const useForm = (defaultValues: profile.Data) => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const queryClient = useQueryClient();

	const { mutateAsync: changeNames, ...mutation } = useMutation(
		({ identity }) => identity.changeNames,
	);

	const tErrors = useFormTranslations('errors');
	const tLabels = useFormTranslations('labels');

	const formApi = useTanStackForm({
		defaultValues,
		onSubmit: async ({ value }) => {
			await changeNames(value);

			await queryCall(
				({ identity }) => identity.myAccount,
				(opts) => queryClient.invalidateQueries(opts),
			);
		},
		validators: { onChange: profile.schema({ tErrors, tLabels }) },
	});
	useForceLocaleRefresh(() => formApi.validate('change'));

	return {
		form: formApi,
		error: form.extractError(mutation.error),
		handleSubmit: (e: React.FormEvent<HTMLFormElement>) => {
			setIsSubmitted(true);
			return form.handleSubmit(e, formApi.handleSubmit);
		},
		isSubmitted,
		isSuccess: mutation.isSuccess,
	};
};
