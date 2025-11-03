import { useTranslation } from '../useTranslation';

export const useLocalesTranslations = () => useTranslation('common.locales').t;

export const useErrorsTranslations = () => useTranslation('common.errors').t;
