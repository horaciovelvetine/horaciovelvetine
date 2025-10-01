/**
 * A styled span component for displaying code parameters with orange coloring and hover effects.
 *
 * @param props - The component props
 * @param props.text - The parameter text content to display
 * @returns A styled span element with orange text and hover transition effects
 */
export function CodeParameter({ text }: { text: string }) {
	return (
		<span className='text-orange-400 hover:text-orange-300 transition-colors duration-200'>
			{text}
		</span>
	);
}
