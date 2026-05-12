import { getLanguageCookie, getTimeZoneCookie } from '@/lib/isomorphic/locale';

type FormatAbsoluteOptions = {
	date: string;
	locale?: string;
	dateOnly?: boolean;
};
export const format = ({
	date,
	locale = getLanguageCookie(),
	dateOnly = false,
}: FormatAbsoluteOptions) =>
	new Date(date).toLocaleString(locale, {
		timeZone: getTimeZoneCookie(),
		hour12: false,
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: dateOnly ? undefined : '2-digit',
		minute: dateOnly ? undefined : '2-digit',
		second: dateOnly ? undefined : '2-digit',
	});

type Interval = 'month' | 'week' | 'day' | 'hour' | 'minute' | 'second';
type FormatRelativeOptions = {
	date: string;
	limit?: Interval;
};
export const formatRelative = ({ date, limit }: FormatRelativeOptions) => {
	const now = new Date();
	const seconds = Math.floor(
		(now.getTime() - new Date(date).getTime()) / 1000,
	);

	const intervals: { label: Interval | 'year'; seconds: number }[] = [
		{ label: 'year', seconds: 60 * 60 * 24 * 365 },
		{ label: 'month', seconds: 60 * 60 * 24 * 30 },
		{ label: 'week', seconds: 60 * 60 * 24 * 7 },
		{ label: 'day', seconds: 60 * 60 * 24 },
		{ label: 'hour', seconds: 60 * 60 },
		{ label: 'minute', seconds: 60 },
		{ label: 'second', seconds: 1 },
	];

	if (limit) {
		const limitInterval = intervals.find((i) => i.label === limit);
		if (limitInterval && seconds < limitInterval.seconds) {
			return `<1 ${limit} ago`;
		}
	}

	for (const interval of intervals) {
		const count = Math.floor(seconds / interval.seconds);
		if (count === 1) {
			return `${count} ${interval.label} ago`;
		}
		if (count > 1) {
			return `${count} ${interval.label}s ago`;
		}
	}

	return 'just now';
};
