interface GradientLinkTextProps {
	text: string;
	url: string;
	classes: string;
}

/**
 * GradientLinkText component renders a link with gradient text styling and hover animations.
 *
 * This component creates an external link with a gradient text effect that transitions to solid white
 * on hover with subtle scale and translate animations. The link opens in a new tab with appropriate
 * security attributes.
 *
 * @param {string} props.text - The text content to display in the link
 * @param {string} props.url - The URL destination for the link
 * @param {string} props.classes - Additional CSS classes to apply for styling (typically gradient colors)
 * @returns JSX element containing a styled external link with gradient text and hover effects
 */

export function GradientLinkText({
	text,
	url,
	classes,
}: GradientLinkTextProps) {
	return (
		<a
			href={url}
			target='_blank'
			rel='noreferrer noopener'
			className={`inline-block text-transparent text-nowrap rounded-full bg-clip-text bg-gradient-to-r transition-all duration-100 hover:-translate-y-1 hover:scale-105 hover:text-white hover:bg-clip-border ${classes}`}>
			{text}
		</a>
	);
}
