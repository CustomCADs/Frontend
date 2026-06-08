import { useAuthStore } from '@/app/hooks/stores/useAuthStore';
import { Provider } from '@/app/components/ui/sidebar';
import Navbar from './navbar';
import Sidebar from './sidebar';
import navs from './navs';

const Mobile = () => {
	const { is } = useAuthStore();

	return (
		<Provider>
			<Navbar />
			<Sidebar
				main={navs.main}
				collections={navs.getCollections(is)}
				workspaces={navs.getWorkspaces(is)}
			/>
		</Provider>
	);
};

export default Mobile;
