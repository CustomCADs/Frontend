import { useEffect, useState } from 'react';
import { SquareUser } from 'lucide-react';
import { identityApi } from '@customcads/react-sdk';
import { usePrivateTranslations } from '@/app/hooks/locales/translations/pages/private';
import { Button } from '@/app/components/ui';

const Download = () => {
	const [url, setUrl] = useState<string | null>(null);

	useEffect(() => {
		identityApi.downloadInfo().then(({ config }) => {
			if (config.url) {
				setUrl(config.baseURL + config.url);
			}
		});

		return () => {
			if (url) URL.revokeObjectURL(url);
		};
	}, [url]);

	const tShell = usePrivateTranslations('account.shell');

	return (
		<div className='basis-1/3 flex justify-center'>
			<a
				href={url ?? undefined}
				target='_blank'
				className='hover:cursor-pointer'
			>
				<Button variant='outline' size='sm' tag='div'>
					<SquareUser />
					<span className='font-black'>{tShell('download')}</span>
				</Button>
			</a>
		</div>
	);
};

export default Download;
