import z from 'zod';
import { Translators } from '@/app/types/schema';
import { name, email, password } from './schemas';

type Props = Translators;
export const schema = ({ tErrors, tLabels }: Props) => {
	return z.object({
		role: z.literal(['Customer', 'Contributor']),
		...name({ tErrors, tLabels }),
		...password({ tErrors, tLabels }),
		...email({ tErrors, tLabels }),
	});
};

export type Data = z.infer<ReturnType<typeof schema>>;
