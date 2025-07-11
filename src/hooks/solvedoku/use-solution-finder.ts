import { useCallback, useEffect, useState } from 'react';
import type {
  RowColumnSet,
  SolvedokuGameBoard,
  SolvedokuGameState,
} from '../../types';
import {
  checkCanPlaceNumber,
  clearBoardPastTarget,
  createCellIDFromTarget,
  findEmptyCell,
  stepTargetCellIndecesBack,
} from '../../functions';

export function useSolutionFinder(state: SolvedokuGameState) {
  const {
    solutionFinderInterval,
    isFindingSolution,
    setIsFindingSolution,
    updateCellValue,
    gameBoard,
    setGameBoard,
    isValidSolution
  } = state;
  const [cellTarget, setCellTarget] = useState<RowColumnSet | null>();

  const findCellSolution = useCallback(
    (
      workingBoard: SolvedokuGameBoard,
      targetCellStart: RowColumnSet | null
    ): RowColumnSet | null => {
      if (!targetCellStart) return null; //? no empty cells found...

      const [rowTgt, colTgt] = targetCellStart;
      const startingGuess =
        (workingBoard[rowTgt][colTgt].value ?
          parseInt(workingBoard[rowTgt][colTgt].value)
          : 0) + 1;

      let validSolutionPlaced = false;
      for (let num = startingGuess; num <= 9; num++) {
        validSolutionPlaced = checkCanPlaceNumber(
          workingBoard,
          rowTgt,
          colTgt,
          num
        );

        if (validSolutionPlaced) { //? update gameBoard and return the next cellTarget 
          workingBoard[rowTgt][colTgt].value = num.toString();
          const cellTgtIDString = createCellIDFromTarget(targetCellStart);
          updateCellValue(cellTgtIDString, num.toString());
          return findEmptyCell(workingBoard);
        }
      }

      //? No valid solution, find backtrack target and clean up...
      let foundBTTarget = false;
      let btTargetCell = stepTargetCellIndecesBack(targetCellStart);

      while (!foundBTTarget) {
        //? bt'd all the way, exit with null
        if (!btTargetCell) return btTargetCell;

        const [btRowTgt, btColTgt] = btTargetCell;
        if (workingBoard[btRowTgt][btColTgt].locked) {
          btTargetCell = stepTargetCellIndecesBack(btTargetCell);
          continue;
        }
        foundBTTarget = true;
      }
      clearBoardPastTarget(btTargetCell, workingBoard);
      setGameBoard(workingBoard);
      return btTargetCell;
    },
    [updateCellValue, setGameBoard]
  );

  useEffect(() => {
    if (!isFindingSolution || isValidSolution) return;

    const timeoutSolver = setTimeout(() => {
      const workingBoard: SolvedokuGameBoard = gameBoard.map(row =>
        row.map(cell => ({ ...cell }))
      );
      const targetCellStart = cellTarget ?? findEmptyCell(workingBoard);
      const nextCellTarget = findCellSolution(workingBoard, targetCellStart);

      if (nextCellTarget === null) {
        console.log({
          msg: 'useEffect() => nextCellTarget === null',
          workingBoard,
          targetCellStart,
          nextCellTarget,
        });
        setIsFindingSolution(false);
        setCellTarget(nextCellTarget);
        clearTimeout(timeoutSolver);
      }
      setCellTarget(nextCellTarget);
    }, solutionFinderInterval);

    return () => {
      clearTimeout(timeoutSolver);
    };
  }, [
    isFindingSolution,
    gameBoard,
    solutionFinderInterval,
    setIsFindingSolution,
    cellTarget,
    findCellSolution,
    isValidSolution
  ]);
}
