import * as React from 'react';
import {
	ChevronLeftIcon,
	ChevronRightIcon,
	ChevronsLeftIcon,
	ChevronsRightIcon,
	MoreHorizontalIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils/tailwindcss';
import { Button, buttonVariants } from '@/app/components/ui/button';

const iconStyle = { width: '1.25rem', height: '1.25rem' };
const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => {
	return (
		<nav
			role='navigation'
			aria-label='pagination'
			data-slot='pagination'
			className={cn('mx-auto flex w-full justify-center', className)}
			{...props}
		/>
	);
};

const PaginationContent = ({
	className,
	...props
}: React.ComponentProps<'ul'>) => {
	return (
		<ul
			data-slot='pagination-content'
			className={cn('flex flex-row items-center gap-1', className)}
			{...props}
		/>
	);
};

const PaginationItem = ({ ...props }: React.ComponentProps<'li'>) => {
	return <li data-slot='pagination-item' {...props} />;
};

type PaginationLinkProps = {
	isActive?: boolean;
	clickable?: boolean;
} & Pick<React.ComponentProps<typeof Button>, 'size'> &
	React.ComponentProps<'span'>;

const PaginationLink = ({
	className,
	isActive,
	clickable,
	size = 'icon',
	...props
}: PaginationLinkProps) => {
	return (
		<span
			aria-current={isActive ? 'page' : undefined}
			data-slot='pagination-link'
			data-active={isActive}
			className={cn(
				buttonVariants({
					variant: isActive ? 'outline' : 'ghost',
					size,
				}),
				clickable
					? 'cursor-pointer'
					: 'hover:bg-background dark:hover:bg-background',
				className,
			)}
			{...props}
		/>
	);
};

const PaginationBeginning = ({
	className,
	...props
}: React.ComponentProps<typeof PaginationLink>) => {
	return (
		<PaginationLink
			aria-label='Go to beginning'
			size='default'
			className={cn('gap-1 px-2.5 sm:pl-2.5', className)}
			{...props}
		>
			<ChevronsLeftIcon style={iconStyle} />
		</PaginationLink>
	);
};

const PaginationPrevious = ({
	className,
	...props
}: React.ComponentProps<typeof PaginationLink>) => {
	return (
		<PaginationLink
			aria-label='Go to previous page'
			size='default'
			className={cn('gap-1 px-2.5 sm:pl-2.5', className)}
			{...props}
		>
			<ChevronLeftIcon style={iconStyle} />
		</PaginationLink>
	);
};

const PaginationNext = ({
	className,
	...props
}: React.ComponentProps<typeof PaginationLink>) => {
	return (
		<PaginationLink
			aria-label='Go to next page'
			size='default'
			className={cn('gap-1 px-2.5 sm:pr-2.5', className)}
			{...props}
		>
			<ChevronRightIcon style={iconStyle} />
		</PaginationLink>
	);
};

const PaginationEnd = ({
	className,
	...props
}: React.ComponentProps<typeof PaginationLink>) => {
	return (
		<PaginationLink
			aria-label='Go to end'
			size='default'
			className={cn('gap-1 px-2.5 sm:pr-2.5', className)}
			{...props}
		>
			<ChevronsRightIcon style={iconStyle} />
		</PaginationLink>
	);
};

const PaginationEllipsis = ({
	className,
	...props
}: React.ComponentProps<'span'>) => {
	return (
		<span
			aria-hidden
			data-slot='pagination-ellipsis'
			className={cn('flex size-9 items-center justify-center', className)}
			{...props}
		>
			<MoreHorizontalIcon className='size-4' />
			<span className='sr-only'>{'More pages'}</span>
		</span>
	);
};

export {
	Pagination,
	PaginationContent,
	PaginationLink,
	PaginationItem,
	PaginationBeginning,
	PaginationPrevious,
	PaginationNext,
	PaginationEnd,
	PaginationEllipsis,
};
