/**
 * Configuration object defining Sudoku puzzle difficulty levels and their characteristics
 *
 * Each difficulty level specifies the number of pre-filled cells that will be provided
 * in the initial puzzle state. Lower cell counts result in more challenging puzzles
 * as players must solve more empty cells.
 *
 * @constant
 * @property {Object} easy - Easy difficulty configuration
 * @property {string} easy.name - The name identifier for easy difficulty
 * @property {number} easy.cellCount - Number of pre-filled cells (35) for easy puzzles
 * @property {Object} medium - Medium difficulty configuration
 * @property {string} medium.name - The name identifier for medium difficulty
 * @property {number} medium.cellCount - Number of pre-filled cells (30) for medium puzzles
 * @property {Object} hard - Hard difficulty configuration
 * @property {string} hard.name - The name identifier for hard difficulty
 * @property {number} hard.cellCount - Number of pre-filled cells (25) for hard puzzles
 */
export const PUZZLE_DIFFICULTY = {
	easy: { name: 'easy', cellCount: 35 },
	medium: { name: 'medium', cellCount: 30 },
	hard: { name: 'hard', cellCount: 25 },
} as const;

/**
 * Type representing the available puzzle difficulty levels
 *
 * Extracts the difficulty names from the PUZZLE_DIFFICULTY configuration object
 * to create a union type of valid difficulty strings.
 *
 * @type {'easy' | 'medium' | 'hard'}
 */
export type PuzzleDifficulty =
	(typeof PUZZLE_DIFFICULTY)[keyof typeof PUZZLE_DIFFICULTY]['name'];
