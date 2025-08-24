/**
 * Inverts a hex color to find its opposite
 * @param hex - The hex color string (e.g., "#FF0000" or "FF0000")
 * @param bw - If true, returns black or white based on luminance for better contrast
 * @returns The opposite color as a hex string
 */
export function invertHexColorString(hex: string, bw = false) {
	if (hex.startsWith('#')) {
		hex = hex.slice(1);
	}

	// Convert 3-digit hex to 6-digits
	if (hex.length === 3) {
		hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	}

	// Invalid hex, just return white
	if (hex.length !== 6) {
		return '#FFFFFF';
	}

	// Parse RGB components
	const r = parseInt(hex.slice(0, 2), 16);
	const g = parseInt(hex.slice(2, 4), 16);
	const b = parseInt(hex.slice(4, 6), 16);

	if (bw) {
		// Calculate luminance using the standard formula
		// Returns black for bright colors, white for dark colors
		const luminance = r * 0.299 + g * 0.587 + b * 0.114;
		return luminance > 186 ? '#000000' : '#FFFFFF';
	}

	// Invert color components (true opposite)
	const invertedR = (255 - r).toString(16).padStart(2, '0');
	const invertedG = (255 - g).toString(16).padStart(2, '0');
	const invertedB = (255 - b).toString(16).padStart(2, '0');

	return '#' + invertedR + invertedG + invertedB;
}
