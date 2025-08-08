import { SimpleInlineLink } from "../../devsktop/components/site/simple-inline-link";
import { ToolBadge } from "../../devsktop/components/site/tool-badge";
import { SolvedokuIcon } from "../components/solvedoku-icon";

export function AboutSolvedokuWindow() {
	return (
		<div className='flex flex-col items-center'>
			<SolvedokuIcon iconSize="size-32 xl:size-34" />
			<h2 className='text-3xl font-extrabold'>Solvedoku</h2>
			<div className='flex flex-col items-center text-base'>
				<h4 className='font-semibold tracking-tighter leading-3.5 mt-1 text-white/50'>
					Built With:
				</h4>
				<ul className='list-none flex gap-2 font-bold tracking-normal mt-1 mb-2'>
					<ToolBadge
						text='React'
						color='blue'
						url='https://react.dev/'
					/>
					/
					<ToolBadge
						text='TailwindCSS'
						color='indigo'
						url='https://tailwindcss.com/'
					/>
					/
					<ToolBadge
						text='Typescript'
						color='sky'
						url='https://www.typescriptlang.org/'
					/>
				</ul>
			</div>
			<p className='text-lg text-center font-semibold mx-4 tracking-tight leading-6'>
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
				realtime and visualize how a backtracking solution works.
			</p>

			<div className='flex flex-col my-3'>
				<h4 className='text-white/75 border-b text-xl'>
					Additional Links & Resources:
				</h4>
				<ul className='list-decimal'>
					<li>
						Generating Sudoku Puzzles -{' '}
						<SimpleInlineLink
							url='https://stackoverflow.com/questions/6924216/how-to-generate-sudoku-boards-with-unique-solutions'
							text='Stack Overflow'
						/>
					</li>
					<li>
						Algorithim to Solve Sudoku -{' '}
						<SimpleInlineLink
							url='https://www.geeksforgeeks.org/dsa/sudoku-backtracking-7/'
							text='Geeks for Geeks'
						/>
					</li>
					<li>
						Sudoku Solver: A Backtracking Approach -{' '}
						<SimpleInlineLink
							url='https://www.kaggle.com/code/mexwell/sudoku-solver-a-backtracking-approach/notebook'
							text='Kaggle Notebook w/ Dataset'
						/>
					</li>
				</ul>
			</div>
		</div>
	);
}
