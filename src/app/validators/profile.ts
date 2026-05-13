import z from 'zod';
import { Translators } from '@/app/types/schema';
import * as schemas from './schemas';

type Props = Translators;
export const schema = ({ tErrors, tLabels }: Props) =>
	z.object({ ...schemas.name({ tErrors, tLabels }) });

export type Data = z.infer<ReturnType<typeof schema>>;
