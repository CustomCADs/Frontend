import z from 'zod';
import { Translators } from '@/app/types/schema';
import * as schemas from './schemas';

type Props = Translators;
export const schema = ({ tErrors, tLabels }: Props) =>
	z.object({
		rememberMe: z.boolean(),
		username: schemas.name({ tErrors, tLabels }).username,
		password: schemas.password({ tErrors, tLabels }).password,
	});

export type Data = z.infer<ReturnType<typeof schema>>;
