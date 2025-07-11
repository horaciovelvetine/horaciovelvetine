/**
 * Generates an array of numbers 1-9 in random order
 * Used for randomizing the order of numbers tried when filling Sudoku puzzles
 * @returns A shuffled array containing the numbers 1 through 9
 * @example
 * getRandomInputsArray() // Returns e.g. [7, 3, 1, 9, 4, 2, 8, 5, 6]
 */

export function getRandomNumbersArray(): number[] {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }
  return numbers;
}
