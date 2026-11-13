import { LinkProps } from '@tanstack/react-router';
import { LucideIcon } from 'lucide-react';
import { Header } from '@/app/locales/types/components/layout';

export type Item = {
	name: keyof Header;
	url: LinkProps['to'];
	icon: LucideIcon;
};

export { default as Main } from './main';
export { default as Collections } from './collections';
export { default as Workspaces } from './workspaces';
export { default as Secondary } from './secondary';
