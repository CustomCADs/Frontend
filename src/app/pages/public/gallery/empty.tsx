import { GalleryVertical } from 'lucide-react';
import { useEmptyTranslations } from '@/app/hooks/locales/translations/common';
import { Button, empty } from '@/app/components/ui';
import { Link } from '@tanstack/react-router';

type Props = {
	media?: boolean;
	title?: boolean;
	description?: boolean;
	link?: boolean;
};
const Empty = ({ media, title, description, link }: Props) => {
	const tEmpty = useEmptyTranslations('gallery');

	return (
		<empty.Root>
			<empty.Header>
				{media && (
					<empty.Media variant='icon'>
						<GalleryVertical />
					</empty.Media>
				)}

				{title && (
					<empty.Title className='text-base md:text-lg'>
						{tEmpty('title')}
					</empty.Title>
				)}
				{description && (
					<empty.Description>
						{tEmpty('description')}
					</empty.Description>
				)}
			</empty.Header>

			<empty.Content>
				{link && (
					<Button>
						<Link to='/register'>{tEmpty('link')}</Link>
					</Button>
				)}
			</empty.Content>
		</empty.Root>
	);
};

export default Empty;
