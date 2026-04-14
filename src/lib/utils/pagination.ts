export const computeRange = (current: number, last: number, first = 1) => {
	if (last <= 3) {
		return { start: first, end: last };
	}

	if (current === first) {
		return { start: first, end: first + 2 };
	}

	if (current === last) {
		return { start: last - 2, end: last };
	}

	return {
		start: current - 1,
		end: current + 1,
	};
};
