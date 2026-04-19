import { useTranslation } from '../useTranslation';

export const useLocalesTranslations = () => useTranslation('common.locales').t;

export const useLoadingTranslations = () => useTranslation('common.loading').t;

export const useEmptyTranslations = () => useTranslation('common.empty').t;

export const useErrorsTranslations = () => useTranslation('common.errors').t;

export const useMetricsTranslation = () => useTranslation('common.metrics').t;
