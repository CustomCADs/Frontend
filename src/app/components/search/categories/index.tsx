import { useEffect, useState } from 'react';
import { CategoryResponse, useQuery } from '@customcads/react-sdk';
import { Funnel, X } from 'lucide-react';
import ErrorPage from '@/app/components/error';
import CategoriesCombobox from './compobox';

type CategoriesProps = {
	getCategory: () => string | undefined;
	updateCategory: (category?: CategoryResponse) => void;
};

const Categories = ({ getCategory, updateCategory }: CategoriesProps) => {
	const { data: categories } = useQuery(({ categories }) => categories.all);
	const categoryParam = getCategory();

	const initial = 'Category';
	const [category, setCategory] = useState(categoryParam ?? initial);

	useEffect(() => {
		if (!categoryParam) {
			setCategory(initial);
		}
	}, [initial, categoryParam]);

	if (!categories) {
		return <ErrorPage status={400} />;
	}

	const handleSelect = (name?: string) => {
		const category = categories.find((c) => c.name === name);

		if (category) {
			setCategory(category.name);
			updateCategory(category);
		} else {
			setCategory(initial);
			updateCategory();
		}
	};

	const iconClass = 'cursor-pointer w-5 h-5 md:w-5 md:h-5';
	return (
		<div className='flex items-center gap-x-2'>
			<Funnel className={iconClass} />
			<CategoriesCombobox
				current={category}
				options={categories.map((x) => ({
					value: x.name,
					label: x.name,
				}))}
				onSelect={handleSelect}
			>
				<span className='flex justify-between items-center gap-x-2 px-8 py-3 bg-secondary text-popover-foreground text-xs md:text-lg border-2 border-border rounded-2xl cursor-pointer hover:brightness-80 transition duration-200'>
					{category}
				</span>
			</CategoriesCombobox>
			{category !== initial && (
				<X onClick={() => handleSelect()} className={iconClass} />
			)}
		</div>
	);
};

export default Categories;
