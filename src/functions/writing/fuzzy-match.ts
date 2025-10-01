/**
 * Calculates the Levenshtein distance between two strings
 * @param str1 - First string
 * @param str2 - Second string
 * @returns The minimum number of single-character edits required to transform str1 into str2
 */
function levenshteinDistance(str1: string, str2: string): number {
  const matrix: number[][] = [];
  const len1 = str1.length;
  const len2 = str2.length;

  // Initialize matrix
  for (let i = 0; i <= len1; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= len2; j++) {
    matrix[0][j] = j;
  }

  // Fill matrix
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,      // deletion
        matrix[i][j - 1] + 1,      // insertion
        matrix[i - 1][j - 1] + cost // substitution
      );
    }
  }

  return matrix[len1][len2];
}

/**
 * Calculates the similarity ratio between two strings using Levenshtein distance
 * @param str1 - First string
 * @param str2 - Second string
 * @returns Similarity ratio between 0 and 1 (1 = identical, 0 = completely different)
 */
function calculateSimilarity(str1: string, str2: string): number {
  const maxLength = Math.max(str1.length, str2.length);
  if (maxLength === 0) return 1;

  const distance = levenshteinDistance(str1, str2);
  return 1 - (distance / maxLength);
}

/**
 * Checks if a search term matches text with fuzzy matching to handle typos
 * @param searchTerm - The term to search for
 * @param text - The text to search in
 * @param threshold - Minimum similarity threshold (0-1), default 0.6
 * @returns True if the search term matches the text with sufficient similarity
 */
export function fuzzyMatch(searchTerm: string, text: string, threshold = 0.6): boolean {
  const searchLower = searchTerm.toLowerCase();
  const textLower = text.toLowerCase();

  // First try exact substring match (higher priority)
  if (textLower.includes(searchLower)) {
    return true;
  }

  // Split text into words and check each word for fuzzy match
  const words = textLower.split(/\s+/);
  return words.some(word => calculateSimilarity(searchLower, word) >= threshold);
}