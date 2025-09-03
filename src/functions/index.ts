// ? SITE
export { capitalize } from './site/capitalize';
export { setInitialWindowPosition } from './site/set-initial-window-position';
export {
	TailwindBGs300,
	TailwindBGs500,
	TailwindOutlineColors,
	TailwindColors,
	TailwindDropShadows,
	TailwindFocusBGs500,
	TailwindFocusOutlineColors,
	TailwindTextColors500,
	TailwindCheckedBGs500,
	TailwindDivideColors,
	TailwindHoverBGs700,
	TailwindFocusVisibleOutlineColors,
	TailwindGroupDataFocusTextColors200,
	TailwindCanvasColorHexMap,
} from './site/tailwind-color-utils';
export { detectAppleDevice } from './site/detect-apple-device';
export { detectSafariBrowser } from './site/detect-safari-browser';
export { detectMobileUserAgent } from './site/detect-mobile-user-agent';
export { detectTouchDevice } from './site/detect-touch-device';

// ? SOLVEDOKU
export { checkCanPlaceNumber } from './solvedoku/check-can-place-number';
export { createEmptyBoard } from './solvedoku/create-empty-board';
export { emptyCellsForDifficulty } from './solvedoku/empty-cells-for-difficulty';
export { findEmptyCell } from './solvedoku/find-empty-cell';
export { generateFilledSudokuPuzzle } from './solvedoku/generate-filled-sudoku-puzzle';
export { getRandomNumbersArray } from './solvedoku/get-random-numbers-array';
export { isInSelectedSquare } from './solvedoku/is-in-selected-square';
export { isValidSolvedokuGame } from './solvedoku/is-valid-solvedoku-game';
export { parseFormattedCellIDString } from './solvedoku/parse-formatted-cell-id-string';
export { stepTargetCellIndecesBack } from './solvedoku/step-target-cell-indeces-back';
export { createCellIDFromTarget } from './solvedoku/create-cell-id-from-target';
export { clearBoardPastTarget } from './solvedoku/clear-board-past-target';
export { findCellDataDisplayWidth } from './solvedoku/find-cell-data-display-width';

// ? ROCK, PAPER, SCISSORS
export { setupCanvasDimensions } from './rps/setup-canvas-dimensions';
export { invertHexColorString } from './rps/invert-hex-color-string';
