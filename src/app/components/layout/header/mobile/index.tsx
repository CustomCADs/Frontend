import { useAuthStore } from '@/app/hooks/stores/useAuthStore';
import { SidebarProvider } from '@/app/components/ui/sidebar';
import Navbar from './navbar';
import Sidebar from './sidebar';
import navs from './navs';

const Mobile = () => {
	const { is } = useAuthStore();

	return (
		<SidebarProvider>
			<Navbar />
			<Sidebar
				main={navs.main}
				collections={navs.getCollections(is)}
				workspaces={navs.getWorkspaces(is)}
			/>
		</SidebarProvider>
	);
};

export default Mobile;
