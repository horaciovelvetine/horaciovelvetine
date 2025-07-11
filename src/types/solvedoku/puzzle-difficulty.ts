export const PUZZLE_DIFFICULTY = {
  easy: { name: 'easy', cellCount: 35 },
  medium: { name: 'medium', cellCount: 30 },
  hard: { name: 'hard', cellCount: 25 }
} as const;

export type PuzzleDifficulty = typeof PUZZLE_DIFFICULTY[keyof typeof PUZZLE_DIFFICULTY]['name'];