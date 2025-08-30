interface SimpleInlineLinkProps {
	href: string;
	text: string;
	showArrow?: boolean;
	classes?: string;
}

/**
 * Simple inline link component provides hover styling and color and targets a new tab
 *
 * @param {string} props.url - The URL that the link points to
 * @param {string} props.text - The text content to display for the link
 */
export function SimpleInlineLink({
	href,
	text,
	showArrow = false,
	classes = ' ',
}: SimpleInlineLinkProps) {
	return (
		<a
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			className={`inline-block text-blue-500 transition-all duration-100 hover:scale-105 hover:-translate-y-1 ${classes}`}>
			{showArrow && <span aria-hidden='true'>&rarr;</span>} {text}
		</a>
	);
}
