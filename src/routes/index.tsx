import { createFileRoute } from '@tanstack/react-router';
import { MainLandingWindow, SolvedokuIcon } from '../features';
import { ProjectCard } from '../components';

// root/index.tsx
export const Route = createFileRoute('/')({
	component: MobileHomePage,
});

function MobileHomePage() {
	return (
		<div className='flex flex-col gap-2 mx-1 my-2'>
			<div className='bg-stone-900/60 py-2 rounded-xl ring-1 ring-stone-300/30'>
				<MainLandingWindow />
			</div>
			<div className='bg-stone-900/60 py-2 rounded-xl ring-1 ring-stone-300/30 px-2'>
				<div>
					<h4 className='tracking-tighter text-center font-extrabold sm:font-bold text-3xl xs:text-4xl sm:text-5xl mb-2'>
						Projects:
					</h4>

					<div className='flex flex-col gap-3'>
						<ProjectCard
							title='Wikiverse'
							description={`The Wikiverse is a web app (and API) that allows you to search Wikidata and uniquely explore topics in 3D space.  Leveraging Wikidata's publically available api for data, the Wikiverse dynamically generates a graph of the result and it's related topics, to answer the question 'What would Wikipedia look like in 3D?'.`}
							thumbnailSrc='https://raw.githubusercontent.com/horaciovelvetine/wikidata-universe-client/main/.github/readme_assets/wikipedia_in3D_v0.0.1.png'
							linkText='Visit the Github'
							linkURL='https://github.com/horaciovelvetine/wikidata-universe-client'
						/>
						<ProjectCard
							title='Solvedoku'
							description={`A Sudoku puzzle solver and game, built for the browser using React and Typescript, it solves puzzles in real-time classic backtracking algorithim. Just enter your puzzle (or have it generate one for you) and hit 'Solve Puzzle' to watch it work out a solution in real-time!`}
							ThumbnailIcon={SolvedokuIcon}
							pageLinkRoute={'/solvedoku'}
							pageLinkText='Go to Page'
						/>
						<ProjectCard
							title='Rock Paper Scissors'
							description={`A self playing game of Rock, Paper, Scissors where emoji's fly around the screen colliding with each other until only the winner remains. Built with P5.js and inspired by a viral GIF!`}
							thumbnailSrc='https://raw.githubusercontent.com/horaciovelvetine/rock-paper-scissors/main/src/assets/Demo_Gif.gif'
							pageLinkText='Go to Page'
							pageLinkRoute='/rock-paper-scissors'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
