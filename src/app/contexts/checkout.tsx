import { createContext, useContext, useReducer } from 'react';
import { Children } from '@/types/react';
import { AppError } from '@/types/errors';
import { FormFor } from '@/types/form';
import { Address } from '@/app/types/map';
import { Data } from '@/app/validators/checkout';

type Action =
	| { type: 'ADDRESS_SELECTED'; address: Address }
	| { type: 'ADDRESS_UNSELECTED' };
type State = {
	form: FormFor<Data>;
	selectedAddress?: Address;
	dispatch: React.Dispatch<Action>;
};
const CheckoutFormContext = createContext<State | null>(null);

export const useCheckoutFormContext = () => {
	const context = useContext(CheckoutFormContext);

	if (!context)
		throw new AppError({
			title: 'Developmental Error',
			message: 'React Context hook called outside of its Provider.',
			tip: "If you're a user, contact our support team to resolve this issue.",
		});

	return context;
};

type Initial = Omit<State, 'dispatch'>;
type Props = { initial: Initial } & Children;
export const CheckoutFormContextProvider = ({ children, initial }: Props) => {
	const [context, dispatch] = useReducer((ctx: Initial, action: Action) => {
		switch (action.type) {
			case 'ADDRESS_SELECTED':
				return { ...ctx, selectedAddress: action.address };
			case 'ADDRESS_UNSELECTED':
				return { ...ctx, selectedAddress: undefined };
			default:
				return ctx;
		}
	}, initial);

	return (
		<CheckoutFormContext.Provider value={{ ...context, dispatch }}>
			{children}
		</CheckoutFormContext.Provider>
	);
};
