/**
 * Formats a date string for display in a readable format
 *
 * Takes a date string and converts it to a localized format showing
 * abbreviated month, numeric day, and full year (e.g., "Jan 15, 2024").
 * This function is memoized to prevent unnecessary re-creation on re-renders.
 *
 * @param {string} dateString - The date string to format (expected in YYYY-MM-DD format)
 * @returns {string} Formatted date string in "MMM D, YYYY" format
 */
export function formatNumbersDateString(dateString: string): string {
	const date = new Date(dateString);
	return date.toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	});
}
