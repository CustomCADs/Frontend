import { useMapMarkerContext } from '@/app/contexts/map-marker';

const Info = () => {
	const { marker } = useMapMarkerContext();

	return (
		<div>
			<span className='text-muted-foreground text-[11px] font-medium tracking-wide uppercase'>
				{marker.type} ({marker.category})
			</span>
			<h3 className='text-foreground text-sm italic leading-tight font-semibold'>
				{marker.display_name}
			</h3>
		</div>
	);
};

export default Info;
