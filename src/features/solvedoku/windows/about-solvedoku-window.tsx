import { SolvedokuIcon } from '..';
import {
	ReactBadge,
	SimpleInlineLink,
	TailwindCSSBadge,
	TypescriptBadge,
} from '../../../components';

/**
 * About window component for the Solvedoku application.
 *
 * Displays comprehensive information about the Solvedoku puzzle solver, including
 * its purpose, the technologies used to build it, and detailed explanation of how
 * the backtracking algorithm works. The component presents this information in a
 * visually appealing layout with the application icon, tool badges, and formatted text.
 *
 * Features:
 * - Application branding with the Solvedoku icon and title
 * - Technology stack showcase using interactive tool badges
 * - Detailed description of the Sudoku solving functionality
 * - Educational content about backtracking algorithms with external links
 * - Responsive typography and layout for various screen sizes
 * - Integration with SimpleInlineLink components for external references
 *
 * The component serves as both an introduction to new users and a reference
 * for understanding the technical approach used in the puzzle solver.
 *
 * @returns JSX element containing the about page content with application information
 */
export function AboutSolvedokuWindow() {
	return (
		<div className='flex flex-col items-center'>
			<SolvedokuIcon size='size-36 xl:size-34' />
			<h2 className='text-3xl font-extrabold'>Solvedoku</h2>
			<div className='flex flex-col items-center text-base'>
				<h4 className='font-semibold tracking-tighter leading-3.5 mt-1 text-white/50'>
					Built With:
				</h4>
				<ul className='list-none flex gap-2 font-bold tracking-normal mt-1 mb-2'>
					<ReactBadge />
					/
					<TailwindCSSBadge />
					/
					<TypescriptBadge />
				</ul>
			</div>
			<p className='text-lg lg:text-2xl text-center font-semibold mx-4 tracking-tight leading-6 text-pretty'>
				Solvedoku is a tool built to solve any standard{' '}
				<SimpleInlineLink
					url='https://en.wikipedia.org/wiki/Sudoku'
					text='Sudoku'
				/>{' '}
				puzzle. With either your mouse or keyboard enter the known numbers and
				then click the 'Solve Puzzle' button and watch as it's solved
				cell-by-cell. Solvedoku uses a{' '}
				<SimpleInlineLink
					url='https://www.geeksforgeeks.org/dsa/sudoku-backtracking-7/'
					text='backtracking algorithim'
				/>{' '}
				to find a solution allowing you to watch each step, and the controls
				next to the puzzle you can slow down and speed up the solution in
				realtime and visualize how a backtracking solution works. How about that
			</p>

			<div className='flex flex-col my-3'>
				<h4 className='text-white/75 border-b text-xl lg:text-2xl'>
					Additional Links & Resources:
				</h4>
				<ul className='list-decimal text-lg lg:text-xl'>
					<li>
						Generating Sudoku Puzzles{' '}
						<SimpleInlineLink
							url='https://stackoverflow.com/questions/6924216/how-to-generate-sudoku-boards-with-unique-solutions'
							text='Stack Overflow'
							showArrow
						/>
					</li>
					<li>
						Algorithim to Solve Sudoku{' '}
						<SimpleInlineLink
							url='https://www.geeksforgeeks.org/dsa/sudoku-backtracking-7/'
							text='Geeks for Geeks'
							showArrow
						/>
					</li>
					<li>
						Sudoku Solver: A Backtracking Approach{' '}
						<SimpleInlineLink
							url='https://www.kaggle.com/code/mexwell/sudoku-solver-a-backtracking-approach/notebook'
							text='Kaggle Notebook w/ Dataset'
							showArrow
						/>
					</li>
				</ul>
			</div>
		</div>
	);
}
