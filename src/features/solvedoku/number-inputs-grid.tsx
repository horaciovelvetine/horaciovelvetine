import type { SolvedokuGameState } from '../../types';

export function NumberInputsGrid({ selectedCellID, updateCellValue }: SolvedokuGameState) {

	const handleButtonClick = (value: number) => {
		if (!selectedCellID) return;
		updateCellValue(selectedCellID, value.toString())
	}
	return (
		<ul className='w-fit h-fit grid grid-cols-3 gap-1.5'>
			{[1, 2, 3, 4, 5, 6, 7, 8, 9].map(value => (
				<li
					key={crypto.randomUUID()}
					className='flex justify-center'
					onClick={() => { handleButtonClick(value) }}>
					<button
						type='button'
						disabled={!selectedCellID}
						title={selectedCellID ? ('Place ' + value.toString() + ' in selected cell') : 'Select a cell first'}
						className={`size-12 border border-gray-300 rounded-lg flex items-center justify-center text-lg font-bold transition-all duration-100 select-none ${selectedCellID ? 'bg-sky-500/60 hover:scale-105 hover:-translate-y-1' : 'opacity-50 cursor-not-allowed bg-sky-500/40'
							}`}>
						{value}
					</button>
				</li>
			))}
		</ul>
	);
}
