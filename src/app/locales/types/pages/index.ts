import { Guest } from './guest';
import { Public } from './public';
import { Private } from './private';

export type Pages = Guest & Public & Private;
