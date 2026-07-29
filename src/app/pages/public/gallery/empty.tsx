import { GalleryVertical } from 'lucide-react';
import { useEmptyTranslations } from '@/app/hooks/locales/translations/common';
import { Button, empty } from '@/app/components/ui';
import { Link } from '@tanstack/react-router';

const Empty = () => {
	const tEmpty = useEmptyTranslations('gallery');

	return (
		<empty.Root>
			<empty.Header>
				<empty.Media variant='icon'>
					<GalleryVertical />
				</empty.Media>

				<empty.Title>{tEmpty('title')}</empty.Title>
				<empty.Description>{tEmpty('description')}</empty.Description>
			</empty.Header>

			<empty.Content>
				<Button>
					<Link to='/register'>{tEmpty('link')}</Link>
				</Button>
			</empty.Content>
		</empty.Root>
	);
};

export default Empty;
