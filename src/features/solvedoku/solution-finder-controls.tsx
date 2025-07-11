import { useState, type MouseEvent } from 'react';
import { RewindIcon, FastForwardIcon } from '../../assets';
import type { SolvedokuGameState } from '../../types';

export function SolutionFinderControls({
  isFindingSolution,
  gameBoardEmpty,
  setIsFindingSolution,
  setSolutionFinderInterval,
  solutionFinderInterval,
  isValidSolution,
}: SolvedokuGameState) {
  const buttonText = isFindingSolution ? 'Pause Solution' : 'Solve Puzzle';
  const [speedText, setSpeedText] = useState(
    solutionFinderInterval.toString() + 'ms'
  );

  const handleSolveButtonClick = () => {
    if (gameBoardEmpty || isValidSolution) return;
    setIsFindingSolution(!isFindingSolution);
  };

  const handleModifySpeedClick = (e: MouseEvent<HTMLElement>) => {
    const action = (e.target as HTMLElement).id;
    const currentSpeed = Number(speedText.replace('ms', ''));
    const MIN = 1;
    const MAX = 300;
    const STEP_SIZE = 20;

    if (action === 'increase') {
      let newSpeed;
      if (currentSpeed === MIN) {
        newSpeed = STEP_SIZE;
      } else if (currentSpeed < MAX) {
        newSpeed = Math.min(MAX, currentSpeed + STEP_SIZE);
      } else {
        newSpeed = MAX;
      }
      setSpeedText(`${newSpeed.toString()}ms`);
      setSolutionFinderInterval(newSpeed);
      return;
    }

    if (action === 'decrease') {
      let newSpeed;
      if (currentSpeed <= STEP_SIZE) {
        newSpeed = MIN;
      } else {
        newSpeed = currentSpeed - STEP_SIZE;
      }
      setSpeedText(`${newSpeed.toString()}ms`);
      setSolutionFinderInterval(newSpeed);
      return;
    }
  };

  return (
    <div className='flex flex-col text-center font-bold tracking-tighter mt-2 mx-0.5'>
      <h4 className='border-b mb-1.5'>Puzzle Solver</h4>
      <SolutionFinderButton
        id='solve'
        innerText={buttonText}
        disabled={gameBoardEmpty || isValidSolution}
        altText={
          (isFindingSolution ? 'Pause ' : 'Start ') + 'the puzzle solver'
        }
        onClickFunc={handleSolveButtonClick}
      />
      <ul className='flex justify-center gap-1.5 pt-1'>
        <li className='flex items-center'>
          <SolutionFinderButton
            id='decrease'
            disabled={gameBoardEmpty || isValidSolution}
            onClickFunc={handleModifySpeedClick}
            icon={RewindIcon}
            altText='Decrease the time between each solution step'
          />
        </li>
        <li className='flex flex-col justify-center text-center font-bold tracking-tighter'>
          <p className='w-26 text-nowrap'>Speed [{speedText}]</p>
        </li>
        <li className='flex items-center'>
          <SolutionFinderButton
            id='increase'
            disabled={gameBoardEmpty || isValidSolution}
            onClickFunc={handleModifySpeedClick}
            icon={FastForwardIcon}
            altText='Increase the time between each solution step'
          />
        </li>
      </ul>
    </div>
  );
}

interface SolutionFinderButtonProps {
  id: string;
  disabled: boolean;
  onClickFunc: (e: MouseEvent<HTMLElement>) => void;
  innerText?: string;
  icon?: string;
  altText: string;
}

export function SolutionFinderButton({
  id,
  disabled,
  onClickFunc,
  innerText,
  icon,
  altText,
}: SolutionFinderButtonProps) {
  return (
    <button
      id={id}
      type='button'
      disabled={disabled}
      onClick={onClickFunc}
      title={altText}
      className={`border border-gray-300 rounded-lg px-2 py-0.5 bg-sky-500/70 transition-all duration-100 ${disabled ? 'bg-sky-500/40 opacity-30 cursor-not-allowed' : 'bg-sky-500/70 hover:scale-105 hover:-translate-y-1'}`}>
      {innerText && <span>{innerText}</span>}
      {icon && (
        <img
          id={id}
          src={icon}
          className='size-7'
          alt={altText}
        />
      )}
    </button>
  );
}
