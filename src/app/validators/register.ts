import z from 'zod';
import * as form from '@/lib/utils/form';
import { Translators } from '@/app/types/schema';
import * as schemas from './schemas';

type Props = Translators;
export const schema = ({ tErrors, tLabels }: Props) => {
	return form.zodHelpers.passwordEquality(
		z.object({
			role: z.literal(['Customer', 'Contributor']),
			...schemas.name({ tErrors, tLabels }),
			...schemas.password({ tErrors, tLabels }),
			...schemas.email({ tErrors, tLabels }),
		}),
		tErrors,
	);
};

export type Data = z.infer<ReturnType<typeof schema>>;
