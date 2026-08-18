import { Link } from '@tanstack/react-router';
import { useEmptyTranslations } from '@/app/hooks/locales/translations/common';
import { Button, empty } from '@/app/components/ui';
import { ShoppingCart } from 'lucide-react';

const Empty = () => {
	const tEmpty = useEmptyTranslations('cart');

	return (
		<empty.Root className='grow'>
			<empty.Header>
				<empty.Media variant='icon'>
					<ShoppingCart />
				</empty.Media>

				<empty.Title>{tEmpty('title')}</empty.Title>
				<empty.Description>{tEmpty('description')}</empty.Description>
			</empty.Header>

			<empty.Content>
				<Button variant='link' className='text-lg'>
					<Link to='/gallery'>{tEmpty('link')}</Link>
				</Button>
			</empty.Content>
		</empty.Root>
	);
};

export default Empty;
