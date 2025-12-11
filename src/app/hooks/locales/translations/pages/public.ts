import { useTranslation } from '../../useTranslation';

type Info = 'home';
export const useInfoTranslations = <N extends Info>(ns: N) =>
	useTranslation(`pages.public.info.${ns}`).t;

type Gallery = 'product' | 'cart' | 'editor';
export const useGalleryTranslations = <N extends Gallery>(ns: N) =>
	useTranslation(`pages.public.gallery.${ns}`).t;
