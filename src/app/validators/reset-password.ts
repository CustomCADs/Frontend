import z from 'zod';
import { Translators } from '@/app/types/schema';
import { password } from './schemas';

type Props = Translators;
export const schema = ({ tErrors, tLabels }: Props) =>
	z.object({ ...password({ tErrors, tLabels }) });
