import { getRouteApi } from '@tanstack/react-router';
import { useSuspenseQuery } from '@customcads/react-sdk';
import { cn } from '@/lib/utils';
import { usePrivateTranslations } from '@/app/hooks/locales/translations/pages/private';
import Tabs from '@/app/components/tabs';
import * as page from '@/app/utils/page';
import Header from './header';
import { Profile, Access, Info } from './panels';
import Footer from './footer';

export const tabs = ['profile', 'access', 'info'] as const;
export type Tab = (typeof tabs)[number];

const Route = getRouteApi('/_private/account');

const MyAccount = () => {
	const search = Route.useSearch();
	const navigate = Route.useNavigate();

	const { data: account } = useSuspenseQuery(
		({ identity }) => identity.myAccount,
	);
	const tAccount = usePrivateTranslations('account');

	const tabsUI: Record<Tab, { label: string; panel: React.ReactNode }> = {
		profile: {
			label: tAccount('profile'),
			panel: <Profile account={account} />,
		},
		access: {
			label: tAccount('access'),
			panel: <Access account={account} />,
		},
		info: {
			label: tAccount('info'),
			panel: <Info account={account} />,
		},
	};

	return (
		<div className={cn(page.className, 'gap-y-8 md:py-20')}>
			<h1 className='text-3xl font-extrabold'>
				{tAccount('title', { username: account.username })}
			</h1>
			<Tabs
				tabs={tabs.map((tab) => ({
					id: tab,
					ui: tabsUI[tab],
					className: 'text-xl',
					header: <Header {...account} />,
					footer: <Footer {...account} />,
				}))}
				defaultTab={search.tab}
				onTabChange={(tab) =>
					tab !== search.tab &&
					navigate({ search: { tab }, replace: false })
				}
				orientation='horizontal'
				tabVariant='line'
				className='w-full md:min-h-[83vh]'
			/>
		</div>
	);
};

export default MyAccount;
