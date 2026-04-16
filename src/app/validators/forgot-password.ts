import z from 'zod';
import { Translators } from '@/app/types/schema';
import { email } from './schemas';

type Props = Translators;
export const schema = ({ tErrors, tLabels }: Props) =>
	z.object({ ...email({ tErrors, tLabels }) });
