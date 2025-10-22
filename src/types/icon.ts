import { LucideProps } from 'lucide-react';

export type IconProp = React.ForwardRefExoticComponent<
	Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
>;
