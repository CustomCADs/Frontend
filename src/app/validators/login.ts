import z from 'zod';
import { Translators } from '@/app/types/schema';
import { name, password } from './schemas';

type Props = Translators;
export const schema = ({ tErrors, tLabels }: Props) =>
	z.object({
		rememberMe: z.boolean(),
		username: name({ tErrors, tLabels }).username,
		password: password({ tErrors, tLabels }).password,
	});

export type Data = z.infer<ReturnType<typeof schema>>;
