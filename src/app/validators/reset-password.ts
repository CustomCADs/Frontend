import z from 'zod';
import { Translators } from '@/app/types/schema';
import * as schemas from './schemas';

type Props = Translators;
export const schema = ({ tErrors, tLabels }: Props) =>
	z.object({ ...schemas.password({ tErrors, tLabels }) });
