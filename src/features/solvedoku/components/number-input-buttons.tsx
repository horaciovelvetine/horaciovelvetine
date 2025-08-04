import { useCallback } from 'react';
import type { Colors, SolvedokuGameState } from '../../../types';
import { tailwindBGColors } from '../../../functions';

interface NumberInputButtonsProps
  extends Pick<SolvedokuGameState, 'selectedCellID' | 'updateCellValue'> {
  accentColor: Colors;
}

export function NumberInputButtons({
  accentColor,
  selectedCellID,
  updateCellValue,
}: NumberInputButtonsProps) {
  const handleInputClick = useCallback(
    (value: number) => {
      if (!selectedCellID) return;
      updateCellValue(selectedCellID, value.toString());
    },
    [selectedCellID, updateCellValue]
  );

  const bgColorClass = selectedCellID
    ? tailwindBGColors[accentColor]
    : `${tailwindBGColors[accentColor]} brightness-45`;

  return (
    <ul className='flex w-full justify-between px-4 my-1'>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(value => (
        <li
          key={'input-'.concat(value.toString())}
          onClick={() => {
            handleInputClick(value);
          }}
          className='flex item-center justify-center'>
          <button
            type='button'
            disabled={!selectedCellID}
            title={
              selectedCellID ?
                'Place '.concat(value.toString()).concat(' in selected cell')
                : 'Select a cell to place a value'
            }
            className={`border border-stone-300/50 size-7 xs:size-12 sm:size-15 rounded select-none text-white font-semibold sm:font-bold xs:text-lg sm:text-xl ${bgColorClass} ${!selectedCellID ? '' : 'duration-100 hover:-translate-y-1 hover:scale-105'}`}>
            {value}
          </button>
        </li>
      ))}
    </ul>
  );
}
