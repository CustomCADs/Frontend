import { Coins } from 'lucide-react';
import { CURRENCIES, Currency } from '@customcads/react-sdk';
import { useDevtoolsTranslations } from '@/app/hooks/locales/translations/common';
import { useCurrencyStore } from '@/app/hooks/stores/useCurrencyStore';
import * as currencyStore from '@/app/stores/currency';
import CustomIcon from '@/app/components/icon';
import { currencyToSymbol } from '@/app/utils/money';
import Combobox from './compobox';

const getCurrencySymbol = (currency: Currency) => {
	const symbol = currencyToSymbol(currency);
	return currency === symbol ? null : symbol;
};

const CurrencySelector = () => {
	const tDevtools = useDevtoolsTranslations();

	const { current } = useCurrencyStore();
	const symbol = getCurrencySymbol(current);

	return (
		<Combobox
			current={current}
			options={CURRENCIES.map((curr) => ({
				label: curr,
				value: curr,
				symbol: getCurrencySymbol(curr),
			}))}
			placeholder={tDevtools('currency-placeholder')}
			trigger={
				<CustomIcon
					Icon={Coins}
					text={symbol ? `${current} (${symbol})` : current}
					className='gap-x-2'
				/>
			}
			onSelect={currencyStore.setCurrent}
		/>
	);
};

export default CurrencySelector;
