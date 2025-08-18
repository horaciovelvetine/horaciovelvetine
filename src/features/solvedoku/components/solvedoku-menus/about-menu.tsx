import { SimpleInlineLink } from '../../../../components';

/**
 * Mobile menu component that displays information about Solvedoku and how to play
 * Contains links to external resources and instructions for playing Sudoku
 * Includes a link to report issues on GitHub
 * @returns JSX element containing the about menu content
 */
export function AboutMenu() {
	return (
		<div className='flex flex-col gap-1 md:gap-2 pb-2 mx-1 xs:mx-4 md:mx-8'>
			<p className='text-base/4.5 xs:text-lg/5 md:text-xl/6 tracking-tighter md:tracking-tight'>
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
			<h4 className='tracking-tight text-lg/4 border-b-2 border-stone-300/50 sm:text-xl/5 font-semibold mx-auto pt-1'>
				How to play Sudoku
			</h4>
			<ul className='list-disc text-base/4 xs:text-lg/5 md:text-xl/6 text-pretty tracking-tight pl-5 sm:px-5'>
				<li className='list-item'>
					Click or tap any cell and select a number to place it.
				</li>
				<li className='list-item'>Fill each 3 x 3 square with numbers 1-9.</li>
				<li className='list-item'>
					Fill cells until the board is full without repeating numbers in each
					row, column, and cell.
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
