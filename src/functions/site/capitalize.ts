/**
 * Capitalizes the first letter of a string and converts the rest to lowercase
 * @param {string} str - The string to capitalize
 * @returns {string} The capitalized string, or empty string if input is empty/falsy
 */
export function capitalize(str: string): string {
	if (!str || str.length === 0) {
		return '';
	}
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
