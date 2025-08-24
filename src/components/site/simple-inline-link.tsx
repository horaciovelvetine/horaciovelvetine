interface SimpleInlineLinkProps {
	url: string;
	text: string;
	showArrow?: boolean;
}

/**
 * Simple inline link component provides hover styling and color and targets a new tab
 *
 * @param {string} props.url - The URL that the link points to
 * @param {string} props.text - The text content to display for the link
 */
export function SimpleInlineLink({
	url,
	text,
	showArrow = false,
}: SimpleInlineLinkProps) {
	return (
		<a
			href={url}
			target='_blank'
			rel='noopener noreferrer'
			className='inline-block text-blue-500 transition-all duration-100 hover:scale-105 hover:-translate-y-1'>
			{showArrow && <span aria-hidden='true'>&rarr;</span>} {text}
		</a>
	);
}
