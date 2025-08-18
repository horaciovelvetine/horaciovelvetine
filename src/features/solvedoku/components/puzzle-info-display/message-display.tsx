interface MessageDisplayProps {
	text: string;
	bgColor: string;
	isShown: boolean;
}

/**
 * MessageDisplay component renders conditional status messages for the Solvedoku puzzle.
 *
 * This component displays small text messages that communicate the current state of the puzzle
 * to the user, such as "Solving...", "Invalid Puzzle", "Unsolveable!", "Solved!", or
 * "Showing Solution". The message is only rendered when the isShown prop is true.
 *
 * Features:
 * - Conditional rendering based on puzzle state
 * - Customizable background color for different message types
 * - Responsive text sizing that adapts to screen size
 * - Rounded styling with border for visual consistency
 *
 * @param props - Component props for message display
 * @param props.text - The message text to display
 * @param props.bgColor - Tailwind CSS background color class for the message
 * @param props.isShown - Boolean flag to control whether the message is visible
 */
export function MessageDisplay({
	text,
	bgColor,
	isShown,
}: MessageDisplayProps) {
	return (
		<>
			{isShown && (
				<p
					className={`${bgColor} text-sm sm:text-base tracking-tighter text-nowrap rounded-lg py-0.5 px-2 border border-stone-300/50`}>
					{text}
				</p>
			)}
		</>
	);
}
