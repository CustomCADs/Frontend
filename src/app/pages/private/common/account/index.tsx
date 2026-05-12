import { getRouteApi } from '@tanstack/react-router';
import { useQuery } from '@customcads/react-sdk';
import { cn } from '@/lib/utils/tailwindcss';
import { usePrivateTranslations } from '@/app/hooks/locales/translations/pages/private';
import Tabs from '@/app/components/tabs';
import * as page from '@/app/utils/page';
import { View, Edit, Data } from './panels/index';

export const tabs = ['view', 'edit', 'data'] as const;
export type Tab = (typeof tabs)[number];

const Route = getRouteApi('/_private/account');

const MyAccount = () => {
	const search = Route.useSearch();
	const navigate = Route.useNavigate();

	const loader = Route.useLoaderData();
	const query = useQuery(({ identity }) => identity.myAccount);

	const account = query.data ?? loader.account;
	const tAccount = usePrivateTranslations('account');

	const labels: Record<Tab, string> = {
		view: tAccount('view'),
		edit: tAccount('edit'),
		data: tAccount('data'),
	};
	const panels: Record<Tab, React.ReactNode> = {
		view: <View />,
		edit: <Edit />,
		data: <Data />,
	};

	return (
		<div className={cn(page.className, 'gap-y-8')}>
			<h1 className='text-3xl font-extrabold'>
				{tAccount('title', { username: account.username })}
			</h1>
			<Tabs
				tabs={tabs.map((tab) => ({
					id: tab,
					label: labels[tab],
					className: 'inline text-xl md:px-20 min-h-20 md:min-h-50',
					panel: panels[tab],
				}))}
				defaultTab={search.tab}
				onTabChange={(tab) => navigate({ search: { tab } })}
				orientation='vertical'
				className='w-full flex flex-col md:flex-row gap-y-4'
			/>
		</div>
	);
};

export default MyAccount;
