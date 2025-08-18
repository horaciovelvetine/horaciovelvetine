/**
 * Type representing color names based on Tailwind CSS color palette
 *
 * Includes all standard Tailwind CSS color names plus basic black/white options.
 * This type can be used throughout the application for consistent color theming
 * and ensures type safety when referencing color values.
 *
 * { @link https://tailwindcss.com/docs/colors }
 *
 * Total colors: 24
 */
export type Colors =
	| 'red'
	| 'orange'
	| 'amber'
	| 'yellow'
	| 'lime'
	| 'green'
	| 'emerald'
	| 'teal'
	| 'cyan'
	| 'sky'
	| 'blue'
	| 'indigo'
	| 'violet'
	| 'purple'
	| 'fuchsia'
	| 'pink'
	| 'rose'
	| 'slate'
	| 'gray'
	| 'zinc'
	| 'neutral'
	| 'stone'
	| 'black'
	| 'white';
