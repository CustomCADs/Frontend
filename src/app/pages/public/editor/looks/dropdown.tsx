import { type MaterialResponse } from '@customcads/react-sdk';
import { Children } from '@/types/react';
import { cn } from '@/lib/utils/tailwindcss';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from '@/app/components/ui/dropdown-menu';
import * as materials_utils from '@/app/utils/materials';

type Props = {
	materials: MaterialResponse[];
	current: MaterialResponse['id'];
	onClick?: (material: MaterialResponse) => void;
} & Children;
const MaterialsDropdown = ({
	children,
	materials,
	current,
	onClick,
}: Props) => (
	<DropdownMenu>
		<DropdownMenuTrigger>{children}</DropdownMenuTrigger>
		<DropdownMenuContent>
			<ul className='flex flex-col gap-y-2 p-4'>
				{materials.map((x) => (
					<li
						key={x.id}
						onClick={() => onClick?.(x)}
						className={cn(
							'cursor-pointer',
							current === x.id
								? 'opacity-50'
								: 'hover:opacity-70',
						)}
					>
						{materials_utils.format({ material: x, cost: true })}
					</li>
				))}
			</ul>
		</DropdownMenuContent>
	</DropdownMenu>
);

export default MaterialsDropdown;
