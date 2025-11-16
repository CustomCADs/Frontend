import { useState } from 'react';

type Props = {
	total: number;
	defaultPagination: { page: number; limit: number };
	autoLoop?: boolean;
	onChange?: (pagination: { page: number; limit: number }) => void;
};
export const usePagination = ({
	defaultPagination,
	total,
	autoLoop,
	onChange,
}: Props) => {
	const [{ page, limit }, setPagination] = useState(defaultPagination);
	const renewPagination = (pagination: { page: number; limit: number }) => {
		setPagination(pagination);
		onChange?.(pagination);
	};

	return {
		state: {
			page,
			limit,
		},
		handleChange: {
			page: (newPage: number) => {
				if (newPage >= 1 && newPage <= Math.ceil(total / limit)) {
					renewPagination({ limit, page: newPage });
				} else if (autoLoop) {
					if (newPage < 1) {
						renewPagination({
							limit,
							page: Math.ceil(total / limit),
						});
					} else {
						renewPagination({ limit, page: 1 });
					}
				}
			},
			limit: (newLimit: number) => {
				renewPagination({ page, limit: newLimit });
			},
		},
	};
};
