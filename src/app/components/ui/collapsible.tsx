import { Collapsible as Primitive } from 'radix-ui';

const Collapsible = ({
	...props
}: React.ComponentProps<typeof Primitive.Root>) => (
	<Primitive.Root data-slot='collapsible' {...props} />
);

const CollapsibleTrigger = ({
	...props
}: React.ComponentProps<typeof Primitive.CollapsibleTrigger>) => (
	<Primitive.CollapsibleTrigger data-slot='collapsible-trigger' {...props} />
);

const CollapsibleContent = ({
	...props
}: React.ComponentProps<typeof Primitive.CollapsibleContent>) => (
	<Primitive.CollapsibleContent data-slot='collapsible-content' {...props} />
);

export {
	Collapsible as Root,
	CollapsibleTrigger as Trigger,
	CollapsibleContent as Content,
};
