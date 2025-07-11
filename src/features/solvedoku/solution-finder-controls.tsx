import { useState } from 'react';
import { RewindIcon, FastForwardIcon } from '../../assets';
import type { SolvedokuGameState } from '../../types';

export function SolutionFinderControls({
  isFindingSolution,
  gameBoardEmpty,
  setIsFindingSolution,
  setSolutionFinderInterval,
  solutionFinderInterval,
  solutionBoard,
}: SolvedokuGameState) {
  const buttonText = isFindingSolution ? 'Pause Solution' : 'Solve Puzzle';
  const [speedText, setSpeedText] = useState(solutionFinderInterval.toString() + 'ms')

  const handleSolveButtonClick = () => {
    if (gameBoardEmpty) return;
    setIsFindingSolution(!isFindingSolution);
    console.log({ solutionBoard })
  };

  const handleModifySpeedClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const action = (e.target as HTMLElement).id;
    const currentSpeed = Number(speedText.replace('ms', ''));

    if (action === 'increase') {
      let newSpeed;
      if (currentSpeed === 1) {
        newSpeed = 50;
      } else if (currentSpeed < 500) {
        newSpeed = Math.min(500, currentSpeed + 50);
      } else {
        newSpeed = 500;
      }
      setSpeedText(`${newSpeed.toString()}ms`);
      setSolutionFinderInterval(newSpeed);
      return;
    }

    if (action === 'decrease') {
      let newSpeed;
      if (currentSpeed <= 50) {
        newSpeed = 1;
      } else {
        newSpeed = currentSpeed - 50;
      }
      setSpeedText(`${newSpeed.toString()}ms`);
      setSolutionFinderInterval(newSpeed);
      return;
    }
  };

  return (
    <div className='flex flex-col text-center font-bold tracking-tighter my-2'>
      <label className='border-b mb-1'>Puzzle Solver</label>
      <button
        type='button'
        onClick={handleSolveButtonClick}
        disabled={gameBoardEmpty}
        className={`border border-gray-300 transition-all duration-100 rounded-lg px-2.5 py-0.5 tracking-tight text-xl font-bold mt-1 ${gameBoardEmpty ? 'bg-sky-500/40 opacity-30 cursor-not-allowed' : 'bg-sky-500/70 hover:scale-105 hover:-translate-y-1'}`}>
        {buttonText}
      </button>
      <ul className='flex justify-center gap-1.5 py-2'>
        <li className='flex items-center'>
          <button
            id='decrease'
            type='button'
            disabled={gameBoardEmpty}
            onClick={handleModifySpeedClick}
            className={`border border-gray-300 rounded-lg px-2 py-0.5 bg-sky-500/70 transition-all duration-100 hover:scale-105 hover:-translate-y-1 ${gameBoardEmpty ? 'bg-sky-500/40 opacity-30 cursor-not-allowed' : 'bg-sky-500/70 hover:scale-105 hover:-translate-y-1'}`}>
            <img
              id='decrease'
              src={RewindIcon}
              className='size-7'
              alt='Slow down solution finder'
            />
          </button>
        </li>
        <li className='flex flex-col justify-center text-center font-bold tracking-tighter'>
          <p className='w-26 text-nowrap'>Speed [{speedText}]</p>
        </li>
        <li className='flex items-center'>
          <button
            id='increase'
            type='button'
            disabled={gameBoardEmpty}
            onClick={handleModifySpeedClick}
            className={`border border-gray-300 rounded-lg px-2 py-0.5 bg-sky-500/70 transition-all duration-100 hover:scale-105 hover:-translate-y-1 ${gameBoardEmpty ? 'bg-sky-500/40 opacity-30 cursor-not-allowed' : 'bg-sky-500/70 hover:scale-105 hover:-translate-y-1'}`}>
            <img
              id='increase'
              src={FastForwardIcon}
              className='size-7'
              alt='Speed up solution finder'
            />
          </button>
        </li>
      </ul>
    </div>
  );
}
