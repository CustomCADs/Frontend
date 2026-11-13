import { Link } from '@tanstack/react-router';
import { GalleryVertical } from 'lucide-react';
import {
	useCommonTranslations,
	useEmptyTranslations,
} from '@/app/hooks/locales/translations/common';
import { useAuthStore } from '@/app/hooks/stores/useAuthStore';
import { Button, empty, tooltip } from '@/app/components/ui';

type Props = {
	media?: boolean;
	title?: boolean;
	description?: boolean;
	link?: boolean;
};
const Empty = ({ media, title, description, link }: Props) => {
	const store = useAuthStore();
	const tRoles = useCommonTranslations('roles');
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
					<tooltip.Root>
						<tooltip.Trigger>
							<Button disabled={store.authn}>
								<Link to='/register'>{tEmpty('link')}</Link>
							</Button>
						</tooltip.Trigger>
						<tooltip.Content>
							{store.authn &&
								tEmpty('tooltip', {
									role: tRoles(store.authz),
								})}
						</tooltip.Content>
					</tooltip.Root>
				)}
			</empty.Content>
		</empty.Root>
	);
};

export default Empty;
