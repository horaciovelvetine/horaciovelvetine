import { SimpleInlineLink } from "../../../../components";


/**
 * Mobile menu component that displays information about Solvedoku and how to play
 * Contains links to external resources and instructions for playing Sudoku
 * Includes a link to report issues on GitHub
 * @returns JSX element containing the about menu content
 */
export function AboutMenu() {
	return (
		<div className='flex flex-col gap-4 pb-6 xs:w-7/8'>
			<p className='text-xs xs:text-base sm:text-lg xs:leading-4 sm:leading-5 tracking-tighter sm:tracking-tight'>
				Solvedoku is a tool built to solve any standard{' '}
				<SimpleInlineLink
					url='https://en.wikipedia.org/wiki/Sudoku'
					text='Sudoku'
				/>{' '}
				puzzle. Simply enter the puzzle you want to solve, click 'Solve Puzzle'
				and watch as it's solved cell-by-cell. Solvedoku uses a{' '}
				<SimpleInlineLink
					url=''
					text='backtracking algorithim'
				/>{' '}
				to find a solution, and you can slow down and speed up the solution in
				realtime and visualize how backtracking works.
			</p>
			<h3 className='tracking-tight xs:text-xl sm:text-2xl font-semibold leading-1'>
				How to play Sudoku
			</h3>
			<ul className='list-disc text-xs xs:text-base sm:text-lg xs:leading-4 sm:leading-5 tracking-tighter sm:tracking-tight px-4 sm:px-5'>
				<li>Click or tap any cell and select a number to place it.</li>
				<li>Fill each 3 x 3 square with numbers 1-9.</li>
				<li>
					Fill cells until the board is full without repeating numbers in each
					row, column and cell.
				</li>
			</ul>
			<p className='text-sm xs:text-base sm:text-xl xs:leading-4 sm:leading-5 tracking-tighter sm:tracking-tight text-center'>
				Issues?{' '}
				<SimpleInlineLink
					url='https://github.com/horaciovelvetine/horaciovelvetine/issues/new'
					text='Let me know!'
				/>
			</p>
		</div>
	);
}
